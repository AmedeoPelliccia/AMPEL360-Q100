/**
 * Health Monitor for Digital Twin
 * 
 * Real-time system health monitoring with aggregation
 * and alerting capabilities.
 * 
 * @module digital_twin/health_monitoring
 */

import { ComponentModel, ComponentHealth, ComponentState } from '../models/ComponentModel';

/**
 * Health status enumeration
 */
export enum HealthStatus {
  HEALTHY = 'HEALTHY',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
  UNKNOWN = 'UNKNOWN'
}

/**
 * Health report interface
 */
export interface HealthReport {
  /** Report timestamp */
  timestamp: string;
  /** Overall system health */
  overallStatus: HealthStatus;
  /** Individual component statuses */
  components: ComponentHealthEntry[];
  /** Active alerts count */
  activeAlerts: number;
  /** System uptime in seconds */
  uptime: number;
  /** Report summary */
  summary: string;
}

/**
 * Component health entry
 */
export interface ComponentHealthEntry {
  /** Component ID */
  componentId: string;
  /** Component health status */
  health: ComponentHealth;
  /** Health score (0-100) */
  score: number;
  /** Last update time */
  lastUpdate: string;
  /** Issues if any */
  issues?: string[];
}

/**
 * Health thresholds configuration
 */
export interface HealthThresholds {
  /** Score threshold for warning */
  warning: number;
  /** Score threshold for critical */
  critical: number;
  /** Stale data threshold in milliseconds */
  staleThresholdMs: number;
}

/**
 * Health Monitor - Real-time health tracking
 */
export class HealthMonitor {
  private _models: Map<string, ComponentModel> = new Map();
  private _thresholds: HealthThresholds;
  private _startTime: number;
  private _lastReport?: HealthReport;
  private _monitorInterval?: ReturnType<typeof setInterval>;
  private _onHealthChange?: (report: HealthReport) => void;

  constructor(thresholds: Partial<HealthThresholds> = {}) {
    this._thresholds = {
      warning: 70,
      critical: 40,
      staleThresholdMs: 60000, // 1 minute
      ...thresholds
    };
    this._startTime = Date.now();
  }

  /**
   * Register a model for health monitoring
   */
  registerModel(model: ComponentModel): void {
    this._models.set(model.componentId, model);
  }

  /**
   * Unregister a model
   */
  unregisterModel(componentId: string): void {
    this._models.delete(componentId);
  }

  /**
   * Set health change callback
   */
  onHealthChange(callback: (report: HealthReport) => void): void {
    this._onHealthChange = callback;
  }

  /**
   * Start continuous monitoring
   * @param intervalMs - Check interval in milliseconds
   */
  startMonitoring(intervalMs: number = 5000): void {
    if (this._monitorInterval) {
      clearInterval(this._monitorInterval);
    }
    
    this._monitorInterval = setInterval(() => {
      const report = this.getHealthReport();
      
      // Check if status changed
      if (this._lastReport && 
          report.overallStatus !== this._lastReport.overallStatus) {
        this._onHealthChange?.(report);
      }
      
      this._lastReport = report;
    }, intervalMs);
    
    console.log(`Health Monitor started (interval: ${intervalMs}ms)`);
  }

  /**
   * Stop monitoring
   */
  stopMonitoring(): void {
    if (this._monitorInterval) {
      clearInterval(this._monitorInterval);
      this._monitorInterval = undefined;
    }
    console.log('Health Monitor stopped');
  }

  /**
   * Get current health report
   */
  getHealthReport(): HealthReport {
    const components: ComponentHealthEntry[] = [];
    let totalScore = 0;
    let criticalCount = 0;
    let warningCount = 0;
    
    for (const [id, model] of this._models) {
      const entry = this._evaluateComponent(model);
      components.push(entry);
      totalScore += entry.score;
      
      if (entry.health === ComponentHealth.CRITICAL || 
          entry.health === ComponentHealth.FAILED) {
        criticalCount++;
      } else if (entry.health === ComponentHealth.DEGRADED) {
        warningCount++;
      }
    }
    
    const avgScore = components.length > 0 
      ? totalScore / components.length 
      : 100;
    
    const overallStatus = this._determineOverallStatus(avgScore, criticalCount);
    
    return {
      timestamp: new Date().toISOString(),
      overallStatus,
      components,
      activeAlerts: criticalCount + warningCount,
      uptime: (Date.now() - this._startTime) / 1000,
      summary: this._generateSummary(overallStatus, components.length, criticalCount, warningCount)
    };
  }

  /**
   * Get component health
   */
  getComponentHealth(componentId: string): ComponentHealthEntry | null {
    const model = this._models.get(componentId);
    if (!model) return null;
    return this._evaluateComponent(model);
  }

  /**
   * Evaluate component health
   */
  private _evaluateComponent(model: ComponentModel): ComponentHealthEntry {
    const state = model.state;
    const issues: string[] = [];
    
    // Calculate health score
    let score = this._healthToScore(state.health);
    
    // Check for stale data
    const timeSinceUpdate = Date.now() - new Date(state.timestamp).getTime();
    if (timeSinceUpdate > this._thresholds.staleThresholdMs) {
      issues.push(`Stale data (${Math.round(timeSinceUpdate / 1000)}s old)`);
      score = Math.min(score, 50);
    }
    
    // Check confidence
    if (state.confidence < 0.5) {
      issues.push(`Low confidence (${(state.confidence * 100).toFixed(0)}%)`);
      score = Math.min(score, 60);
    }
    
    // Validate state
    const validation = model.validate();
    if (!validation.valid) {
      issues.push(...validation.errors);
      score = Math.min(score, 30);
    }
    
    return {
      componentId: model.componentId,
      health: state.health,
      score,
      lastUpdate: state.timestamp,
      issues: issues.length > 0 ? issues : undefined
    };
  }

  /**
   * Convert health status to score
   */
  private _healthToScore(health: ComponentHealth): number {
    switch (health) {
      case ComponentHealth.NOMINAL: return 100;
      case ComponentHealth.DEGRADED: return 60;
      case ComponentHealth.CRITICAL: return 30;
      case ComponentHealth.FAILED: return 0;
      case ComponentHealth.UNKNOWN: return 50;
      default: return 50;
    }
  }

  /**
   * Determine overall system status
   */
  private _determineOverallStatus(avgScore: number, criticalCount: number): HealthStatus {
    if (criticalCount > 0 || avgScore < this._thresholds.critical) {
      return HealthStatus.CRITICAL;
    }
    if (avgScore < this._thresholds.warning) {
      return HealthStatus.WARNING;
    }
    return HealthStatus.HEALTHY;
  }

  /**
   * Generate report summary
   */
  private _generateSummary(
    status: HealthStatus, 
    totalComponents: number,
    criticalCount: number,
    warningCount: number
  ): string {
    if (status === HealthStatus.HEALTHY) {
      return `All ${totalComponents} components operating normally`;
    }
    
    const issues: string[] = [];
    if (criticalCount > 0) {
      issues.push(`${criticalCount} critical`);
    }
    if (warningCount > 0) {
      issues.push(`${warningCount} warnings`);
    }
    
    return `${issues.join(', ')} out of ${totalComponents} components`;
  }
}
