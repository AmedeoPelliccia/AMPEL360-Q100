/**
 * Data Quality Checker for Digital Twin
 * 
 * Validates data quality including schema, range,
 * and completeness checks.
 * 
 * @module digital_twin/validation
 */

/**
 * Data quality check result
 */
export interface DataQualityResult {
  /** Check passed */
  valid: boolean;
  /** Quality score (0-100) */
  score: number;
  /** Check details */
  checks: DataQualityCheck[];
  /** Timestamp */
  timestamp: string;
}

/**
 * Individual quality check
 */
export interface DataQualityCheck {
  /** Check name */
  name: string;
  /** Check passed */
  passed: boolean;
  /** Check message */
  message: string;
  /** Severity if failed */
  severity?: 'INFO' | 'WARNING' | 'ERROR';
}

/**
 * Range constraint
 */
export interface RangeConstraint {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Soft minimum (warning) */
  softMin?: number;
  /** Soft maximum (warning) */
  softMax?: number;
}

/**
 * Data Quality Checker
 */
export class DataQualityChecker {
  private _ranges: Map<string, RangeConstraint> = new Map();
  private _requiredFields: Set<string> = new Set();

  constructor() {
    // Set default ranges
    this._setDefaultRanges();
  }

  /**
   * Set range constraint for a field
   */
  setRange(field: string, constraint: RangeConstraint): void {
    this._ranges.set(field, constraint);
  }

  /**
   * Add required field
   */
  addRequiredField(field: string): void {
    this._requiredFields.add(field);
  }

  /**
   * Check data quality
   */
  check(data: Record<string, unknown>): DataQualityResult {
    const checks: DataQualityCheck[] = [];
    
    // Check required fields
    checks.push(...this._checkRequiredFields(data));
    
    // Check range constraints
    checks.push(...this._checkRanges(data));
    
    // Check data types
    checks.push(...this._checkTypes(data));
    
    // Check for null/undefined values
    checks.push(...this._checkNullValues(data));
    
    // Calculate score
    const passedChecks = checks.filter(c => c.passed).length;
    const score = checks.length > 0 
      ? Math.round((passedChecks / checks.length) * 100) 
      : 100;
    
    return {
      valid: checks.every(c => c.passed || c.severity !== 'ERROR'),
      score,
      checks,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Check required fields
   */
  private _checkRequiredFields(data: Record<string, unknown>): DataQualityCheck[] {
    const checks: DataQualityCheck[] = [];
    
    for (const field of this._requiredFields) {
      const value = this._getNestedValue(data, field);
      const present = value !== undefined && value !== null;
      
      checks.push({
        name: `Required: ${field}`,
        passed: present,
        message: present ? `Field '${field}' present` : `Missing required field '${field}'`,
        severity: present ? undefined : 'ERROR'
      });
    }
    
    return checks;
  }

  /**
   * Check range constraints
   */
  private _checkRanges(data: Record<string, unknown>): DataQualityCheck[] {
    const checks: DataQualityCheck[] = [];
    
    for (const [field, constraint] of this._ranges) {
      const value = this._getNestedValue(data, field);
      
      if (value === undefined || value === null) continue;
      if (typeof value !== 'number') continue;
      
      // Check hard limits
      if (constraint.min !== undefined && value < constraint.min) {
        checks.push({
          name: `Range: ${field}`,
          passed: false,
          message: `${field} (${value}) below minimum (${constraint.min})`,
          severity: 'ERROR'
        });
      } else if (constraint.max !== undefined && value > constraint.max) {
        checks.push({
          name: `Range: ${field}`,
          passed: false,
          message: `${field} (${value}) above maximum (${constraint.max})`,
          severity: 'ERROR'
        });
      }
      // Check soft limits
      else if (constraint.softMin !== undefined && value < constraint.softMin) {
        checks.push({
          name: `Range: ${field}`,
          passed: true,
          message: `${field} (${value}) below soft minimum (${constraint.softMin})`,
          severity: 'WARNING'
        });
      } else if (constraint.softMax !== undefined && value > constraint.softMax) {
        checks.push({
          name: `Range: ${field}`,
          passed: true,
          message: `${field} (${value}) above soft maximum (${constraint.softMax})`,
          severity: 'WARNING'
        });
      } else {
        checks.push({
          name: `Range: ${field}`,
          passed: true,
          message: `${field} (${value}) within range`
        });
      }
    }
    
    return checks;
  }

  /**
   * Check data types
   */
  private _checkTypes(data: Record<string, unknown>): DataQualityCheck[] {
    const checks: DataQualityCheck[] = [];
    
    for (const [key, value] of Object.entries(data)) {
      if (value === null || value === undefined) continue;
      
      // Check for NaN in numbers
      if (typeof value === 'number' && isNaN(value)) {
        checks.push({
          name: `Type: ${key}`,
          passed: false,
          message: `${key} is NaN`,
          severity: 'ERROR'
        });
      }
      
      // Check for Infinity
      if (typeof value === 'number' && !isFinite(value)) {
        checks.push({
          name: `Type: ${key}`,
          passed: false,
          message: `${key} is Infinity`,
          severity: 'ERROR'
        });
      }
      
      // Check for empty strings
      if (typeof value === 'string' && value.trim() === '') {
        checks.push({
          name: `Type: ${key}`,
          passed: true,
          message: `${key} is empty string`,
          severity: 'WARNING'
        });
      }
    }
    
    return checks;
  }

  /**
   * Check for null/undefined values
   */
  private _checkNullValues(data: Record<string, unknown>): DataQualityCheck[] {
    const checks: DataQualityCheck[] = [];
    let nullCount = 0;
    let totalCount = 0;
    
    const checkObject = (obj: Record<string, unknown>, prefix = ''): void => {
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        totalCount++;
        
        if (value === null || value === undefined) {
          nullCount++;
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          checkObject(value as Record<string, unknown>, fullKey);
        }
      }
    };
    
    checkObject(data);
    
    const nullPercent = totalCount > 0 ? (nullCount / totalCount) * 100 : 0;
    
    checks.push({
      name: 'Null Values',
      passed: nullPercent < 20,
      message: `${nullCount}/${totalCount} fields are null (${nullPercent.toFixed(1)}%)`,
      severity: nullPercent >= 20 ? 'WARNING' : undefined
    });
    
    return checks;
  }

  /**
   * Get nested value from object
   */
  private _getNestedValue(obj: Record<string, unknown>, path: string): unknown {
    const parts = path.split('.');
    let current: unknown = obj;
    
    for (const part of parts) {
      if (current === null || current === undefined) return undefined;
      if (typeof current !== 'object') return undefined;
      current = (current as Record<string, unknown>)[part];
    }
    
    return current;
  }

  /**
   * Set default ranges
   */
  private _setDefaultRanges(): void {
    // Temperature ranges (Kelvin)
    this._ranges.set('temperature', { min: 0, max: 1000, softMin: 15, softMax: 50 });
    
    // Pressure ranges (bar)
    this._ranges.set('pressure', { min: 0, max: 100, softMin: 0.5, softMax: 10 });
    
    // Voltage ranges (V)
    this._ranges.set('busVoltage', { min: 0, max: 1000, softMin: 300, softMax: 500 });
    
    // SOC/SOH ranges (0-1)
    this._ranges.set('batterySOC', { min: 0, max: 1 });
    this._ranges.set('batterySOH', { min: 0, max: 1 });
    
    // Level ranges (kg)
    this._ranges.set('tankLevel', { min: 0, softMax: 600 });
    this._ranges.set('fuelLevel', { min: 0, softMax: 600 });
  }
}
