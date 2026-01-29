/**
 * Aircraft Model for Digital Twin
 * 
 * Top-level model representing the complete AMPEL360 Q100 aircraft
 * with integration of all subsystem models.
 * 
 * @module digital_twin/models
 */

import { ComponentModel, ComponentState, ComponentHealth, ComponentUpdate } from './ComponentModel';
import { FuelSystemModel } from './FuelSystemModel';
import { ElectricalSystemModel } from './ElectricalSystemModel';

/**
 * Aircraft configuration interface
 */
export interface AircraftConfig {
  /** Aircraft registration/tail number */
  registration: string;
  /** Aircraft type */
  type: string;
  /** Manufacturer Serial Number */
  msn: string;
  /** ATA chapter configurations */
  ataChapters?: string[];
}

/**
 * Aircraft-specific parameters
 */
export interface AircraftParameters {
  /** Flight phase */
  flightPhase: 'GROUND' | 'TAKEOFF' | 'CLIMB' | 'CRUISE' | 'DESCENT' | 'APPROACH' | 'LANDING';
  /** Altitude in feet */
  altitude: number;
  /** Airspeed in knots */
  airspeed: number;
  /** Heading in degrees */
  heading: number;
  /** Vertical speed in feet per minute */
  verticalSpeed: number;
  /** Latitude */
  latitude: number;
  /** Longitude */
  longitude: number;
  /** Total flight hours */
  flightHours: number;
  /** Cycles count */
  cycles: number;
}

/**
 * Aircraft Model - Top-level digital twin for AMPEL360 Q100
 */
export class AircraftModel extends ComponentModel {
  private _config: AircraftConfig;
  private _subsystems: Map<string, ComponentModel> = new Map();
  
  // Subsystem models
  private _fuelSystem?: FuelSystemModel;
  private _electricalSystem?: ElectricalSystemModel;

  constructor(componentId: string, config: AircraftConfig) {
    super(componentId, {
      parameters: {
        flightPhase: 'GROUND',
        altitude: 0,
        airspeed: 0,
        heading: 0,
        verticalSpeed: 0,
        latitude: 0,
        longitude: 0,
        flightHours: 0,
        cycles: 0
      }
    });
    
    this._config = config;
    this._initializeSubsystems();
  }

  /**
   * Get aircraft configuration
   */
  get config(): AircraftConfig {
    return { ...this._config };
  }

  /**
   * Get all subsystem models
   */
  get subsystems(): Map<string, ComponentModel> {
    return new Map(this._subsystems);
  }

  /**
   * Get fuel system model
   */
  get fuelSystem(): FuelSystemModel | undefined {
    return this._fuelSystem;
  }

  /**
   * Get electrical system model
   */
  get electricalSystem(): ElectricalSystemModel | undefined {
    return this._electricalSystem;
  }

  /**
   * Initialize subsystem models
   */
  private _initializeSubsystems(): void {
    // ATA 28 - Fuel System
    this._fuelSystem = new FuelSystemModel(`${this._componentId}-FUEL`);
    this._subsystems.set('ATA28', this._fuelSystem);
    
    // ATA 24 - Electrical Power
    this._electricalSystem = new ElectricalSystemModel(`${this._componentId}-ELEC`);
    this._subsystems.set('ATA24', this._electricalSystem);
  }

  /**
   * Update aircraft state and propagate to subsystems
   */
  override update(update: ComponentUpdate): ComponentState {
    // Update aircraft state
    const newState = super.update(update);
    
    // Propagate relevant parameters to subsystems
    this._propagateToSubsystems(update);
    
    return newState;
  }

  /**
   * Propagate updates to relevant subsystems
   */
  private _propagateToSubsystems(update: ComponentUpdate): void {
    // Extract subsystem-specific parameters and forward
    const params = update.parameters;
    
    // Fuel system updates
    if (params.fuelLevel !== undefined || params.fuelTemperature !== undefined) {
      this._fuelSystem?.update({
        parameters: {
          tankLevel: params.fuelLevel as number,
          temperature: params.fuelTemperature as number
        },
        source: update.source
      });
    }
    
    // Electrical system updates
    if (params.busVoltage !== undefined || params.batterySOC !== undefined) {
      this._electricalSystem?.update({
        parameters: {
          busVoltage: params.busVoltage as number,
          batterySOC: params.batterySOC as number
        },
        source: update.source
      });
    }
  }

  /**
   * Calculate overall aircraft health from subsystems
   */
  protected calculateHealth(): ComponentHealth {
    const subsystemHealths = Array.from(this._subsystems.values())
      .map(s => s.health);
    
    // If any subsystem is failed, aircraft is critical
    if (subsystemHealths.includes(ComponentHealth.FAILED)) {
      return ComponentHealth.CRITICAL;
    }
    
    // If any subsystem is critical, aircraft is critical
    if (subsystemHealths.includes(ComponentHealth.CRITICAL)) {
      return ComponentHealth.CRITICAL;
    }
    
    // If any subsystem is degraded, aircraft is degraded
    if (subsystemHealths.includes(ComponentHealth.DEGRADED)) {
      return ComponentHealth.DEGRADED;
    }
    
    // If all subsystems are nominal, aircraft is nominal
    if (subsystemHealths.every(h => h === ComponentHealth.NOMINAL)) {
      return ComponentHealth.NOMINAL;
    }
    
    return ComponentHealth.UNKNOWN;
  }

  /**
   * Predict future aircraft state
   */
  predict(horizonSeconds: number): ComponentState {
    const currentParams = this._state.parameters as unknown as AircraftParameters;
    
    // Simple linear extrapolation for flight parameters
    const predictedAltitude = currentParams.altitude + 
      (currentParams.verticalSpeed / 60) * horizonSeconds;
    
    // Predict position based on heading and airspeed
    const distanceNm = (currentParams.airspeed / 3600) * horizonSeconds;
    const headingRad = (currentParams.heading * Math.PI) / 180;
    
    const predictedLat = currentParams.latitude + 
      (distanceNm / 60) * Math.cos(headingRad);
    const predictedLon = currentParams.longitude + 
      (distanceNm / 60) * Math.sin(headingRad);
    
    return {
      componentId: this._componentId,
      timestamp: new Date(Date.now() + horizonSeconds * 1000).toISOString(),
      health: this._state.health,
      confidence: Math.max(0.5, this._state.confidence - horizonSeconds / 3600),
      parameters: {
        ...currentParams,
        altitude: Math.max(0, predictedAltitude),
        latitude: predictedLat,
        longitude: predictedLon
      }
    };
  }

  /**
   * Validate aircraft state
   */
  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const params = this._state.parameters as unknown as AircraftParameters;
    
    // Altitude validation
    if (params.altitude < 0) {
      errors.push('Altitude cannot be negative');
    }
    if (params.altitude > 45000) {
      errors.push('Altitude exceeds maximum ceiling');
    }
    
    // Airspeed validation
    if (params.airspeed < 0) {
      errors.push('Airspeed cannot be negative');
    }
    if (params.airspeed > 350) {
      errors.push('Airspeed exceeds maximum operating speed');
    }
    
    // Heading validation
    if (params.heading < 0 || params.heading > 360) {
      errors.push('Heading must be between 0 and 360 degrees');
    }
    
    // Validate subsystems
    for (const [name, subsystem] of this._subsystems) {
      const subsystemValidation = subsystem.validate();
      if (!subsystemValidation.valid) {
        errors.push(...subsystemValidation.errors.map(e => `${name}: ${e}`));
      }
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Get comprehensive aircraft status report
   */
  getStatusReport(): {
    aircraft: ComponentState;
    subsystems: Record<string, ComponentState>;
    overallHealth: ComponentHealth;
    alerts: string[];
  } {
    const subsystemStates: Record<string, ComponentState> = {};
    const alerts: string[] = [];
    
    for (const [name, subsystem] of this._subsystems) {
      subsystemStates[name] = subsystem.state;
      
      if (subsystem.health !== ComponentHealth.NOMINAL) {
        alerts.push(`${name}: ${subsystem.health}`);
      }
    }
    
    return {
      aircraft: this.state,
      subsystems: subsystemStates,
      overallHealth: this.health,
      alerts
    };
  }
}
