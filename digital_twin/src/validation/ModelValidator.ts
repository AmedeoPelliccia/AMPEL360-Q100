/**
 * Model Validator for Digital Twin
 * 
 * Validates digital twin models against physical data
 * and accuracy requirements.
 * 
 * @module digital_twin/validation
 */

import { ComponentModel, ComponentState } from '../models/ComponentModel';

/**
 * Validation result interface
 */
export interface ValidationResult {
  /** Validation passed */
  valid: boolean;
  /** Validation score (0-100) */
  score: number;
  /** Timestamp */
  timestamp: string;
  /** Component ID */
  componentId: string;
  /** Validation errors */
  errors: string[];
  /** Validation warnings */
  warnings: string[];
  /** Metrics */
  metrics: ValidationMetrics;
}

/**
 * Validation metrics
 */
export interface ValidationMetrics {
  /** Mean Absolute Error */
  mae?: number;
  /** Root Mean Square Error */
  rmse?: number;
  /** R-squared coefficient */
  r2?: number;
  /** Mean Absolute Percentage Error */
  mape?: number;
  /** Data completeness (0-1) */
  completeness: number;
  /** Data freshness (0-1) */
  freshness: number;
}

/**
 * Reference data point
 */
export interface ReferenceDataPoint {
  timestamp: string;
  parameter: string;
  value: number;
  source: string;
}

/**
 * Model Validator - Accuracy validation
 */
export class ModelValidator {
  private _tolerances: Map<string, number> = new Map();

  constructor() {
    // Set default tolerances
    this._tolerances.set('temperature', 0.5);  // ±0.5 K
    this._tolerances.set('pressure', 0.1);     // ±0.1 bar
    this._tolerances.set('voltage', 5);        // ±5 V
    this._tolerances.set('current', 1);        // ±1 A
    this._tolerances.set('level', 1);          // ±1 kg
    this._tolerances.set('default', 0.05);     // ±5%
  }

  /**
   * Set tolerance for a parameter
   */
  setTolerance(parameter: string, tolerance: number): void {
    this._tolerances.set(parameter, tolerance);
  }

  /**
   * Validate model against reference data
   */
  async validate(
    model: ComponentModel,
    referenceData: ReferenceDataPoint[]
  ): Promise<ValidationResult> {
    const errors: string[] = [];
    const warnings: string[] = [];
    const state = model.state;
    
    // Basic state validation
    const stateValidation = model.validate();
    if (!stateValidation.valid) {
      errors.push(...stateValidation.errors);
    }
    
    // Calculate accuracy metrics
    const metrics = this._calculateMetrics(state, referenceData);
    
    // Check completeness
    if (metrics.completeness < 0.9) {
      warnings.push(`Low data completeness: ${(metrics.completeness * 100).toFixed(0)}%`);
    }
    
    // Check freshness
    if (metrics.freshness < 0.5) {
      warnings.push(`Stale data detected (freshness: ${(metrics.freshness * 100).toFixed(0)}%)`);
    }
    
    // Check accuracy thresholds
    if (metrics.mae !== undefined && metrics.mae > 0.1) {
      warnings.push(`High MAE: ${metrics.mae.toFixed(3)}`);
    }
    
    if (metrics.mape !== undefined && metrics.mape > 0.05) {
      warnings.push(`High MAPE: ${(metrics.mape * 100).toFixed(1)}%`);
    }
    
    // Calculate overall score
    const score = this._calculateScore(metrics, errors.length, warnings.length);
    
    return {
      valid: errors.length === 0,
      score,
      timestamp: new Date().toISOString(),
      componentId: model.componentId,
      errors,
      warnings,
      metrics
    };
  }

  /**
   * Compare model state with reference data
   */
  compare(
    modelState: ComponentState,
    referenceData: ReferenceDataPoint[]
  ): {
    matches: { parameter: string; modelValue: number; refValue: number; diff: number; withinTolerance: boolean }[];
    missingInModel: string[];
    missingInReference: string[];
  } {
    const matches: { parameter: string; modelValue: number; refValue: number; diff: number; withinTolerance: boolean }[] = [];
    const missingInModel: string[] = [];
    const missingInReference: string[] = [];
    
    const modelParams = new Set(Object.keys(modelState.parameters));
    const refParams = new Set(referenceData.map(d => d.parameter));
    
    // Check each reference data point
    for (const refPoint of referenceData) {
      const modelValue = modelState.parameters[refPoint.parameter];
      
      if (modelValue === undefined) {
        missingInModel.push(refPoint.parameter);
        continue;
      }
      
      if (typeof modelValue === 'number') {
        const diff = Math.abs(modelValue - refPoint.value);
        const tolerance = this._getTolerance(refPoint.parameter, refPoint.value);
        
        matches.push({
          parameter: refPoint.parameter,
          modelValue,
          refValue: refPoint.value,
          diff,
          withinTolerance: diff <= tolerance
        });
      }
    }
    
    // Find parameters in model but not in reference
    for (const param of modelParams) {
      if (!refParams.has(param)) {
        missingInReference.push(param);
      }
    }
    
    return { matches, missingInModel, missingInReference };
  }

  /**
   * Calculate validation metrics
   */
  private _calculateMetrics(
    state: ComponentState,
    referenceData: ReferenceDataPoint[]
  ): ValidationMetrics {
    const comparison = this.compare(state, referenceData);
    
    // Calculate data completeness
    const totalParams = new Set([
      ...Object.keys(state.parameters),
      ...referenceData.map(d => d.parameter)
    ]).size;
    const matchedParams = comparison.matches.length;
    const completeness = totalParams > 0 ? matchedParams / totalParams : 0;
    
    // Calculate freshness
    const stateAge = Date.now() - new Date(state.timestamp).getTime();
    const maxAge = 60000; // 1 minute
    const freshness = Math.max(0, 1 - stateAge / maxAge);
    
    const metrics: ValidationMetrics = {
      completeness,
      freshness
    };
    
    // Calculate error metrics if we have matches
    if (comparison.matches.length > 0) {
      const diffs = comparison.matches.map(m => m.diff);
      
      // MAE
      metrics.mae = diffs.reduce((a, b) => a + b, 0) / diffs.length;
      
      // RMSE
      metrics.rmse = Math.sqrt(
        diffs.map(d => d * d).reduce((a, b) => a + b, 0) / diffs.length
      );
      
      // MAPE (avoid division by zero)
      const mapeValues = comparison.matches
        .filter(m => m.refValue !== 0)
        .map(m => Math.abs(m.diff / m.refValue));
      if (mapeValues.length > 0) {
        metrics.mape = mapeValues.reduce((a, b) => a + b, 0) / mapeValues.length;
      }
    }
    
    return metrics;
  }

  /**
   * Calculate overall validation score
   */
  private _calculateScore(
    metrics: ValidationMetrics,
    errorCount: number,
    warningCount: number
  ): number {
    let score = 100;
    
    // Deduct for errors
    score -= errorCount * 20;
    
    // Deduct for warnings
    score -= warningCount * 5;
    
    // Factor in completeness
    score *= metrics.completeness;
    
    // Factor in freshness
    score *= (0.5 + 0.5 * metrics.freshness);
    
    // Factor in accuracy
    if (metrics.mape !== undefined) {
      score *= Math.max(0, 1 - metrics.mape);
    }
    
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  /**
   * Get tolerance for a parameter
   */
  private _getTolerance(parameter: string, value: number): number {
    // Check for exact parameter match
    if (this._tolerances.has(parameter)) {
      return this._tolerances.get(parameter)!;
    }
    
    // Check for partial match
    for (const [key, tolerance] of this._tolerances) {
      if (parameter.toLowerCase().includes(key.toLowerCase())) {
        return tolerance;
      }
    }
    
    // Use percentage-based default
    const defaultPercent = this._tolerances.get('default') || 0.05;
    return Math.abs(value * defaultPercent);
  }
}
