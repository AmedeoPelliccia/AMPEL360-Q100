/**
 * Fuel System Model for Digital Twin
 * 
 * Models the AMPEL360 Q100 LH₂ cryogenic fuel system (ATA 28)
 * including tank state, distribution, and delivery.
 * 
 * @module digital_twin/models
 */

import { ComponentModel, ComponentState, ComponentHealth, ComponentUpdate } from './ComponentModel';

/**
 * Fuel system parameters
 */
export interface FuelSystemParameters {
  /** Tank level in kg */
  tankLevel: number;
  /** Tank capacity in kg */
  tankCapacity: number;
  /** Tank pressure in bar */
  pressure: number;
  /** Fuel temperature in Kelvin */
  temperature: number;
  /** Boil-off rate in kg/h */
  boilOffRate: number;
  /** Flow rate to power plant in kg/h */
  flowRate: number;
  /** Fill valve state */
  fillValveOpen: boolean;
  /** Vent valve state */
  ventValveOpen: boolean;
  /** Delivery valve state */
  deliveryValveOpen: boolean;
}

/**
 * Fuel system thresholds for health calculation
 */
const THRESHOLDS = {
  pressure: { min: 1.0, max: 5.0, critical: 6.0 },
  temperature: { min: 20.0, max: 30.0, critical: 35.0 },
  levelLow: 0.1,  // 10% of capacity
  levelCritical: 0.05  // 5% of capacity
};

/**
 * Fuel System Model - ATA 28
 */
export class FuelSystemModel extends ComponentModel {
  constructor(componentId: string) {
    super(componentId, {
      parameters: {
        tankLevel: 0,
        tankCapacity: 500,
        pressure: 2.0,
        temperature: 22.0,
        boilOffRate: 0.05,
        flowRate: 0,
        fillValveOpen: false,
        ventValveOpen: false,
        deliveryValveOpen: false
      }
    });
  }

  /**
   * Get current fuel level percentage
   */
  get fuelLevelPercent(): number {
    const params = this._state.parameters as unknown as FuelSystemParameters;
    return params.tankCapacity > 0 
      ? (params.tankLevel / params.tankCapacity) * 100 
      : 0;
  }

  /**
   * Get remaining fuel time based on current flow rate
   */
  get remainingTime(): number {
    const params = this._state.parameters as unknown as FuelSystemParameters;
    if (params.flowRate <= 0) return Infinity;
    return params.tankLevel / params.flowRate; // hours
  }

  /**
   * Calculate boil-off based on conditions
   */
  calculateBoilOff(): number {
    const params = this._state.parameters as unknown as FuelSystemParameters;
    
    // Simplified boil-off model
    // Higher temperature = higher boil-off
    const tempFactor = Math.max(0, (params.temperature - 20) / 10);
    const baseBoilOff = 0.03; // Base rate: 3% per day
    
    return baseBoilOff * (1 + tempFactor) * params.tankLevel / 24; // kg/h
  }

  /**
   * Calculate fuel system health
   */
  protected calculateHealth(): ComponentHealth {
    const params = this._state.parameters as unknown as FuelSystemParameters;
    
    // Check pressure
    if (params.pressure >= THRESHOLDS.pressure.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (params.pressure < THRESHOLDS.pressure.min || 
        params.pressure > THRESHOLDS.pressure.max) {
      return ComponentHealth.DEGRADED;
    }
    
    // Check temperature
    if (params.temperature >= THRESHOLDS.temperature.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (params.temperature < THRESHOLDS.temperature.min || 
        params.temperature > THRESHOLDS.temperature.max) {
      return ComponentHealth.DEGRADED;
    }
    
    // Check fuel level
    const levelRatio = params.tankLevel / params.tankCapacity;
    if (levelRatio <= THRESHOLDS.levelCritical) {
      return ComponentHealth.CRITICAL;
    }
    if (levelRatio <= THRESHOLDS.levelLow) {
      return ComponentHealth.DEGRADED;
    }
    
    return ComponentHealth.NOMINAL;
  }

  /**
   * Update with automatic boil-off calculation
   */
  override update(update: ComponentUpdate): ComponentState {
    const newState = super.update(update);
    
    // Update boil-off rate
    const params = this._state.parameters as unknown as FuelSystemParameters;
    (this._state.parameters as Record<string, unknown>).boilOffRate = this.calculateBoilOff();
    
    return newState;
  }

  /**
   * Predict future fuel state
   */
  predict(horizonSeconds: number): ComponentState {
    const params = this._state.parameters as unknown as FuelSystemParameters;
    const hours = horizonSeconds / 3600;
    
    // Calculate fuel consumption
    const consumed = params.flowRate * hours;
    const boilOff = params.boilOffRate * hours;
    const predictedLevel = Math.max(0, params.tankLevel - consumed - boilOff);
    
    // Temperature drift (simplified)
    const tempDrift = 0.1 * hours; // 0.1K per hour drift
    const predictedTemp = Math.min(35, params.temperature + tempDrift);
    
    return {
      componentId: this._componentId,
      timestamp: new Date(Date.now() + horizonSeconds * 1000).toISOString(),
      health: this._calculatePredictedHealth(predictedLevel, params.tankCapacity, predictedTemp),
      confidence: Math.max(0.3, this._state.confidence - hours / 10),
      parameters: {
        ...params,
        tankLevel: predictedLevel,
        temperature: predictedTemp
      }
    };
  }

  /**
   * Calculate health for predicted state
   */
  private _calculatePredictedHealth(level: number, capacity: number, temp: number): ComponentHealth {
    const levelRatio = level / capacity;
    
    if (levelRatio <= THRESHOLDS.levelCritical || temp >= THRESHOLDS.temperature.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (levelRatio <= THRESHOLDS.levelLow || temp > THRESHOLDS.temperature.max) {
      return ComponentHealth.DEGRADED;
    }
    
    return ComponentHealth.NOMINAL;
  }

  /**
   * Validate fuel system state
   */
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const params = this._state.parameters as unknown as FuelSystemParameters;
    
    // Level validation
    if (params.tankLevel < 0) {
      errors.push('Tank level cannot be negative');
    }
    if (params.tankLevel > params.tankCapacity) {
      errors.push('Tank level exceeds capacity');
    }
    
    // Pressure validation
    if (params.pressure < 0) {
      errors.push('Pressure cannot be negative');
    }
    if (params.pressure > THRESHOLDS.pressure.critical * 1.5) {
      errors.push('Pressure exceeds safe limits');
    }
    
    // Temperature validation
    if (params.temperature < 14) {
      errors.push('Temperature below hydrogen liquefaction point');
    }
    if (params.temperature > 40) {
      errors.push('Temperature exceeds safe operating range');
    }
    
    // Flow rate validation
    if (params.flowRate < 0) {
      errors.push('Flow rate cannot be negative');
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Calculate time until critical fuel level
   */
  getTimeToCritical(): number {
    const params = this._state.parameters as unknown as FuelSystemParameters;
    const criticalLevel = params.tankCapacity * THRESHOLDS.levelCritical;
    const currentLevel = params.tankLevel;
    
    if (currentLevel <= criticalLevel) return 0;
    
    const consumptionRate = params.flowRate + params.boilOffRate;
    if (consumptionRate <= 0) return Infinity;
    
    return (currentLevel - criticalLevel) / consumptionRate; // hours
  }
}
