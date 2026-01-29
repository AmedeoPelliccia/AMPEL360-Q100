/**
 * Electrical System Model for Digital Twin
 * 
 * Models the AMPEL360 Q100 electrical power system (ATA 24)
 * including fuel cells, batteries, and power distribution.
 * 
 * @module digital_twin/models
 */

import { ComponentModel, ComponentState, ComponentHealth } from './ComponentModel';

/**
 * Electrical system parameters
 */
export interface ElectricalSystemParameters {
  /** Main bus voltage (V) */
  busVoltage: number;
  /** Battery state of charge (0-1) */
  batterySOC: number;
  /** Battery state of health (0-1) */
  batterySOH: number;
  /** Battery temperature (°C) */
  batteryTemperature: number;
  /** Fuel cell power output (kW) */
  fuelCellPower: number;
  /** Fuel cell efficiency (0-1) */
  fuelCellEfficiency: number;
  /** Total load (kW) */
  totalLoad: number;
  /** Main bus online */
  mainBusOnline: boolean;
  /** Essential bus online */
  essentialBusOnline: boolean;
  /** Emergency bus online */
  emergencyBusOnline: boolean;
}

/**
 * Electrical system thresholds
 */
const THRESHOLDS = {
  voltage: { nominal: 400, min: 350, max: 450 },
  batterySOC: { low: 0.2, critical: 0.1 },
  batterySOH: { degraded: 0.8, critical: 0.6 },
  batteryTemp: { max: 45, critical: 55 },
  fuelCellEfficiency: { min: 0.4, degraded: 0.5 }
};

/**
 * Electrical System Model - ATA 24
 */
export class ElectricalSystemModel extends ComponentModel {
  constructor(componentId: string) {
    super(componentId, {
      parameters: {
        busVoltage: 400,
        batterySOC: 1.0,
        batterySOH: 1.0,
        batteryTemperature: 25,
        fuelCellPower: 0,
        fuelCellEfficiency: 0.55,
        totalLoad: 0,
        mainBusOnline: true,
        essentialBusOnline: true,
        emergencyBusOnline: true
      }
    });
  }

  /**
   * Get battery SOC percentage
   */
  get batteryPercent(): number {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    return params.batterySOC * 100;
  }

  /**
   * Get power balance (generation - load)
   */
  get powerBalance(): number {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    return params.fuelCellPower - params.totalLoad;
  }

  /**
   * Check if on battery power
   */
  get isOnBatteryPower(): boolean {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    return params.fuelCellPower < params.totalLoad;
  }

  /**
   * Calculate electrical system health
   */
  protected calculateHealth(): ComponentHealth {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    
    // Check bus voltage
    if (params.busVoltage < THRESHOLDS.voltage.min || 
        params.busVoltage > THRESHOLDS.voltage.max) {
      return ComponentHealth.CRITICAL;
    }
    
    // Check battery SOC
    if (params.batterySOC <= THRESHOLDS.batterySOC.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (params.batterySOC <= THRESHOLDS.batterySOC.low) {
      return ComponentHealth.DEGRADED;
    }
    
    // Check battery health
    if (params.batterySOH <= THRESHOLDS.batterySOH.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (params.batterySOH <= THRESHOLDS.batterySOH.degraded) {
      return ComponentHealth.DEGRADED;
    }
    
    // Check battery temperature
    if (params.batteryTemperature >= THRESHOLDS.batteryTemp.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (params.batteryTemperature >= THRESHOLDS.batteryTemp.max) {
      return ComponentHealth.DEGRADED;
    }
    
    // Check fuel cell efficiency
    if (params.fuelCellEfficiency < THRESHOLDS.fuelCellEfficiency.min) {
      return ComponentHealth.CRITICAL;
    }
    if (params.fuelCellEfficiency < THRESHOLDS.fuelCellEfficiency.degraded) {
      return ComponentHealth.DEGRADED;
    }
    
    // Check bus status
    if (!params.mainBusOnline || !params.essentialBusOnline) {
      return ComponentHealth.CRITICAL;
    }
    if (!params.emergencyBusOnline) {
      return ComponentHealth.DEGRADED;
    }
    
    return ComponentHealth.NOMINAL;
  }

  /**
   * Predict future electrical state
   */
  predict(horizonSeconds: number): ComponentState {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    const hours = horizonSeconds / 3600;
    
    // Battery capacity in kWh (assumed 100 kWh)
    const batteryCapacity = 100;
    
    // Calculate power balance and battery change
    const powerDeficit = params.totalLoad - params.fuelCellPower;
    const batteryEnergyChange = powerDeficit * hours;
    const socChange = batteryEnergyChange / batteryCapacity;
    
    const predictedSOC = Math.max(0, Math.min(1, params.batterySOC - socChange));
    
    // Temperature prediction (simplified)
    const loadFactor = params.totalLoad / 200; // Assume 200kW max load
    const tempChange = loadFactor * 0.5 * hours; // 0.5°C per hour at full load
    const predictedTemp = params.batteryTemperature + tempChange;
    
    return {
      componentId: this._componentId,
      timestamp: new Date(Date.now() + horizonSeconds * 1000).toISOString(),
      health: this._calculatePredictedHealth(predictedSOC, predictedTemp),
      confidence: Math.max(0.3, this._state.confidence - hours / 8),
      parameters: {
        ...params,
        batterySOC: predictedSOC,
        batteryTemperature: predictedTemp
      }
    };
  }

  /**
   * Calculate health for predicted state
   */
  private _calculatePredictedHealth(soc: number, temp: number): ComponentHealth {
    if (soc <= THRESHOLDS.batterySOC.critical || temp >= THRESHOLDS.batteryTemp.critical) {
      return ComponentHealth.CRITICAL;
    }
    if (soc <= THRESHOLDS.batterySOC.low || temp >= THRESHOLDS.batteryTemp.max) {
      return ComponentHealth.DEGRADED;
    }
    return ComponentHealth.NOMINAL;
  }

  /**
   * Validate electrical system state
   */
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    
    // Voltage validation
    if (params.busVoltage < 0) {
      errors.push('Bus voltage cannot be negative');
    }
    if (params.busVoltage > 500) {
      errors.push('Bus voltage exceeds maximum rating');
    }
    
    // SOC validation
    if (params.batterySOC < 0 || params.batterySOC > 1) {
      errors.push('Battery SOC must be between 0 and 1');
    }
    
    // SOH validation
    if (params.batterySOH < 0 || params.batterySOH > 1) {
      errors.push('Battery SOH must be between 0 and 1');
    }
    
    // Temperature validation
    if (params.batteryTemperature < -40 || params.batteryTemperature > 80) {
      errors.push('Battery temperature out of operating range');
    }
    
    // Power validation
    if (params.fuelCellPower < 0) {
      errors.push('Fuel cell power cannot be negative');
    }
    if (params.totalLoad < 0) {
      errors.push('Total load cannot be negative');
    }
    
    // Efficiency validation
    if (params.fuelCellEfficiency < 0 || params.fuelCellEfficiency > 1) {
      errors.push('Fuel cell efficiency must be between 0 and 1');
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Calculate remaining battery time at current load
   */
  getRemainingBatteryTime(): number {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    
    const powerDeficit = params.totalLoad - params.fuelCellPower;
    if (powerDeficit <= 0) return Infinity; // Fuel cell covers load
    
    const batteryCapacity = 100; // kWh
    const availableEnergy = params.batterySOC * batteryCapacity;
    
    return availableEnergy / powerDeficit; // hours
  }

  /**
   * Get power distribution status
   */
  getPowerStatus(): {
    generation: number;
    load: number;
    balance: number;
    batteryStatus: 'CHARGING' | 'DISCHARGING' | 'IDLE';
    estimatedEndurance: number;
  } {
    const params = this._state.parameters as unknown as ElectricalSystemParameters;
    const balance = params.fuelCellPower - params.totalLoad;
    
    let batteryStatus: 'CHARGING' | 'DISCHARGING' | 'IDLE';
    if (balance > 0.1) {
      batteryStatus = 'CHARGING';
    } else if (balance < -0.1) {
      batteryStatus = 'DISCHARGING';
    } else {
      batteryStatus = 'IDLE';
    }
    
    return {
      generation: params.fuelCellPower,
      load: params.totalLoad,
      balance,
      batteryStatus,
      estimatedEndurance: this.getRemainingBatteryTime()
    };
  }
}
