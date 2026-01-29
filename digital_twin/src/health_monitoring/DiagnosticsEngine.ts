/**
 * Diagnostics Engine for Digital Twin
 * 
 * Automated diagnostics and fault detection for
 * digital twin components.
 * 
 * @module digital_twin/health_monitoring
 */

import { ComponentModel, ComponentHealth, ComponentState } from '../models/ComponentModel';

/**
 * Diagnostic result interface
 */
export interface DiagnosticResult {
  /** Timestamp of diagnostic run */
  timestamp: string;
  /** Component ID */
  componentId: string;
  /** Diagnostic passed */
  passed: boolean;
  /** Overall score (0-100) */
  score: number;
  /** Individual test results */
  tests: DiagnosticTest[];
  /** Recommendations */
  recommendations: string[];
  /** Duration of diagnostic in ms */
  durationMs: number;
}

/**
 * Individual diagnostic test
 */
export interface DiagnosticTest {
  /** Test name */
  name: string;
  /** Test passed */
  passed: boolean;
  /** Test message */
  message: string;
  /** Severity if failed */
  severity?: 'INFO' | 'WARNING' | 'CRITICAL';
}

/**
 * Diagnostic rule interface
 */
export interface DiagnosticRule {
  /** Rule name */
  name: string;
  /** Rule description */
  description: string;
  /** Rule check function */
  check: (state: ComponentState) => DiagnosticTest;
}

/**
 * Diagnostics Engine - Automated fault detection
 */
export class DiagnosticsEngine {
  private _rules: Map<string, DiagnosticRule[]> = new Map();
  private _history: DiagnosticResult[] = [];
  private _maxHistory: number = 100;

  constructor() {
    // Register default rules
    this._registerDefaultRules();
  }

  /**
   * Register a diagnostic rule for a component type
   */
  registerRule(componentType: string, rule: DiagnosticRule): void {
    const rules = this._rules.get(componentType) || [];
    rules.push(rule);
    this._rules.set(componentType, rules);
  }

  /**
   * Run diagnostics on a component
   */
  async runDiagnostics(model: ComponentModel): Promise<DiagnosticResult> {
    const startTime = Date.now();
    const tests: DiagnosticTest[] = [];
    const recommendations: string[] = [];
    
    // Get component type from ID (simplified)
    const componentType = this._getComponentType(model.componentId);
    
    // Run generic rules
    const genericRules = this._rules.get('generic') || [];
    for (const rule of genericRules) {
      tests.push(rule.check(model.state));
    }
    
    // Run type-specific rules
    const typeRules = this._rules.get(componentType) || [];
    for (const rule of typeRules) {
      tests.push(rule.check(model.state));
    }
    
    // Run model validation
    const validation = model.validate();
    tests.push({
      name: 'State Validation',
      passed: validation.valid,
      message: validation.valid 
        ? 'State validation passed'
        : `Validation errors: ${validation.errors.join(', ')}`,
      severity: validation.valid ? undefined : 'WARNING'
    });
    
    // Calculate score
    const passedTests = tests.filter(t => t.passed).length;
    const score = Math.round((passedTests / tests.length) * 100);
    
    // Generate recommendations
    for (const test of tests) {
      if (!test.passed) {
        recommendations.push(this._generateRecommendation(test));
      }
    }
    
    const result: DiagnosticResult = {
      timestamp: new Date().toISOString(),
      componentId: model.componentId,
      passed: tests.every(t => t.passed),
      score,
      tests,
      recommendations,
      durationMs: Date.now() - startTime
    };
    
    // Store in history
    this._history.push(result);
    if (this._history.length > this._maxHistory) {
      this._history.shift();
    }
    
    return result;
  }

  /**
   * Run diagnostics on multiple components
   */
  async runBatchDiagnostics(models: ComponentModel[]): Promise<DiagnosticResult[]> {
    const results: DiagnosticResult[] = [];
    for (const model of models) {
      results.push(await this.runDiagnostics(model));
    }
    return results;
  }

  /**
   * Get diagnostic history for a component
   */
  getHistory(componentId?: string): DiagnosticResult[] {
    if (componentId) {
      return this._history.filter(r => r.componentId === componentId);
    }
    return [...this._history];
  }

  /**
   * Clear diagnostic history
   */
  clearHistory(): void {
    this._history = [];
  }

  /**
   * Register default diagnostic rules
   */
  private _registerDefaultRules(): void {
    // Generic rules for all components
    this._rules.set('generic', [
      {
        name: 'Health Status Check',
        description: 'Verify component health is not failed',
        check: (state) => ({
          name: 'Health Status Check',
          passed: state.health !== ComponentHealth.FAILED,
          message: state.health === ComponentHealth.FAILED
            ? 'Component is in FAILED state'
            : `Component health: ${state.health}`,
          severity: state.health === ComponentHealth.FAILED ? 'CRITICAL' : undefined
        })
      },
      {
        name: 'Confidence Check',
        description: 'Verify data confidence is acceptable',
        check: (state) => ({
          name: 'Confidence Check',
          passed: state.confidence >= 0.3,
          message: state.confidence >= 0.3
            ? `Confidence: ${(state.confidence * 100).toFixed(0)}%`
            : `Low confidence: ${(state.confidence * 100).toFixed(0)}%`,
          severity: state.confidence < 0.3 ? 'WARNING' : undefined
        })
      },
      {
        name: 'Data Freshness Check',
        description: 'Verify data is not stale',
        check: (state) => {
          const age = Date.now() - new Date(state.timestamp).getTime();
          const maxAge = 60000; // 1 minute
          return {
            name: 'Data Freshness Check',
            passed: age < maxAge,
            message: age < maxAge
              ? `Data age: ${Math.round(age / 1000)}s`
              : `Stale data: ${Math.round(age / 1000)}s old`,
            severity: age >= maxAge ? 'WARNING' : undefined
          };
        }
      }
    ]);
    
    // Fuel system rules
    this._rules.set('fuel', [
      {
        name: 'Fuel Level Check',
        description: 'Verify adequate fuel level',
        check: (state) => {
          const level = state.parameters.tankLevel as number || 0;
          const capacity = state.parameters.tankCapacity as number || 500;
          const percent = (level / capacity) * 100;
          return {
            name: 'Fuel Level Check',
            passed: percent > 10,
            message: `Fuel level: ${percent.toFixed(1)}%`,
            severity: percent <= 5 ? 'CRITICAL' : percent <= 10 ? 'WARNING' : undefined
          };
        }
      },
      {
        name: 'Pressure Check',
        description: 'Verify tank pressure in range',
        check: (state) => {
          const pressure = state.parameters.pressure as number || 0;
          return {
            name: 'Pressure Check',
            passed: pressure >= 1.0 && pressure <= 5.0,
            message: `Tank pressure: ${pressure.toFixed(2)} bar`,
            severity: pressure > 5.0 ? 'CRITICAL' : pressure < 1.0 ? 'WARNING' : undefined
          };
        }
      }
    ]);
    
    // Electrical system rules
    this._rules.set('electrical', [
      {
        name: 'Battery SOC Check',
        description: 'Verify battery state of charge',
        check: (state) => {
          const soc = state.parameters.batterySOC as number || 0;
          return {
            name: 'Battery SOC Check',
            passed: soc > 0.2,
            message: `Battery SOC: ${(soc * 100).toFixed(0)}%`,
            severity: soc <= 0.1 ? 'CRITICAL' : soc <= 0.2 ? 'WARNING' : undefined
          };
        }
      },
      {
        name: 'Bus Voltage Check',
        description: 'Verify bus voltage in range',
        check: (state) => {
          const voltage = state.parameters.busVoltage as number || 0;
          return {
            name: 'Bus Voltage Check',
            passed: voltage >= 350 && voltage <= 450,
            message: `Bus voltage: ${voltage.toFixed(1)} V`,
            severity: voltage < 350 || voltage > 450 ? 'CRITICAL' : undefined
          };
        }
      }
    ]);
  }

  /**
   * Get component type from ID
   */
  private _getComponentType(componentId: string): string {
    const id = componentId.toLowerCase();
    if (id.includes('fuel') || id.includes('tank')) return 'fuel';
    if (id.includes('elec') || id.includes('battery')) return 'electrical';
    if (id.includes('prop') || id.includes('motor')) return 'propulsion';
    return 'generic';
  }

  /**
   * Generate recommendation from failed test
   */
  private _generateRecommendation(test: DiagnosticTest): string {
    switch (test.name) {
      case 'Health Status Check':
        return 'Investigate component failure and consider replacement or repair';
      case 'Confidence Check':
        return 'Check sensor connections and data quality';
      case 'Data Freshness Check':
        return 'Verify data source connectivity and update frequency';
      case 'Fuel Level Check':
        return 'Schedule refueling or check fuel sensors';
      case 'Pressure Check':
        return 'Check pressure relief valves and tank integrity';
      case 'Battery SOC Check':
        return 'Charge battery or check fuel cell output';
      case 'Bus Voltage Check':
        return 'Check electrical system regulation and loads';
      default:
        return `Address issue: ${test.message}`;
    }
  }
}
