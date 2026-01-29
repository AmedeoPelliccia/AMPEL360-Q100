/**
 * ARINC 429 Connector for Digital Twin
 * 
 * Simulated connector for ARINC 429 avionics bus data
 * used in aircraft systems.
 * 
 * @module digital_twin/connectors
 */

import { BaseConnector, ConnectorConfig, ConnectionStatus, DataMessage } from './BaseConnector';

/**
 * ARINC 429 specific configuration
 */
export interface ARINC429Config extends ConnectorConfig {
  /** Bus speed: HIGH (100kbps) or LOW (12.5kbps) */
  speed: 'HIGH' | 'LOW';
  /** Octal labels to subscribe to */
  labels: number[];
  /** Source/Destination Identifier */
  sdi?: number;
}

/**
 * ARINC 429 word structure
 */
export interface ARINC429Word {
  /** Label (octal, 8 bits) */
  label: number;
  /** Source/Destination Identifier (2 bits) */
  sdi: number;
  /** Data field (19 bits) */
  data: number;
  /** Sign/Status Matrix (2 bits) */
  ssm: number;
  /** Parity bit */
  parity: number;
}

/**
 * Common ARINC 429 labels
 */
export const ARINC429Labels = {
  ALTITUDE: 0o203,        // Label 203 - Baro Corrected Altitude
  AIRSPEED: 0o206,        // Label 206 - Computed Airspeed
  HEADING: 0o314,         // Label 314 - Magnetic Heading
  LATITUDE: 0o310,        // Label 310 - Latitude
  LONGITUDE: 0o311,       // Label 311 - Longitude
  VERTICAL_SPEED: 0o212,  // Label 212 - Vertical Speed
  FUEL_QUANTITY: 0o227,   // Label 227 - Fuel Quantity
  BATTERY_VOLTAGE: 0o270, // Label 270 - Battery Voltage
} as const;

/**
 * SSM (Sign/Status Matrix) values
 */
export enum SSM {
  FAILURE_WARNING = 0b00,
  NO_COMPUTED_DATA = 0b01,
  FUNCTIONAL_TEST = 0b10,
  NORMAL_OPERATION = 0b11
}

/**
 * ARINC 429 Connector
 * 
 * Note: This is a simulation connector for development/testing.
 * In production, this would interface with actual ARINC 429 hardware.
 */
export class ARINC429Connector extends BaseConnector {
  private _arincConfig: ARINC429Config;
  private _simulationInterval?: ReturnType<typeof setInterval>;
  private _lastValues: Map<number, number> = new Map();

  constructor(config: ARINC429Config) {
    super({
      ...config,
      type: 'ARINC429'
    });
    this._arincConfig = config;
    
    // Initialize last values
    for (const label of config.labels) {
      this._lastValues.set(label, 0);
    }
  }

  /**
   * Connect to ARINC 429 bus (simulated)
   */
  async connect(): Promise<void> {
    this._status = ConnectionStatus.CONNECTING;
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    this._status = ConnectionStatus.CONNECTED;
    console.log(`ARINC 429 Connector ${this._config.id} connected (${this._arincConfig.speed} speed)`);
    
    // Start simulation
    this._startSimulation();
  }

  /**
   * Disconnect from ARINC 429 bus
   */
  async disconnect(): Promise<void> {
    this._stopSimulation();
    this._status = ConnectionStatus.DISCONNECTED;
    console.log(`ARINC 429 Connector ${this._config.id} disconnected`);
  }

  /**
   * Read next ARINC 429 word
   */
  async read(): Promise<DataMessage | null> {
    if (!this.isConnected) return null;
    
    // Return simulated data
    const label = this._arincConfig.labels[
      Math.floor(Math.random() * this._arincConfig.labels.length)
    ];
    
    const word = this._generateWord(label);
    
    return {
      timestamp: new Date().toISOString(),
      source: this._config.id,
      topic: `arinc429.${label.toString(8)}`,
      payload: {
        word,
        decodedValue: this._decodeWord(word)
      }
    };
  }

  /**
   * Write ARINC 429 word (for testing/simulation)
   */
  async write(message: DataMessage): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Not connected');
    }
    
    const word = message.payload.word as ARINC429Word;
    console.log(`ARINC 429 TX: Label ${word.label.toString(8)}, Data: ${word.data}`);
  }

  /**
   * Start data simulation
   */
  private _startSimulation(): void {
    const interval = this._arincConfig.speed === 'HIGH' ? 10 : 80;
    
    this._simulationInterval = setInterval(() => {
      for (const label of this._arincConfig.labels) {
        const word = this._generateWord(label);
        const value = this._decodeWord(word);
        
        this._emitMessage({
          timestamp: new Date().toISOString(),
          source: this._config.id,
          topic: `arinc429.${label.toString(8)}`,
          payload: {
            word,
            decodedValue: value,
            label: label.toString(8),
            labelName: this._getLabelName(label)
          }
        });
      }
    }, interval);
  }

  /**
   * Stop data simulation
   */
  private _stopSimulation(): void {
    if (this._simulationInterval) {
      clearInterval(this._simulationInterval);
      this._simulationInterval = undefined;
    }
  }

  /**
   * Generate simulated ARINC 429 word
   */
  private _generateWord(label: number): ARINC429Word {
    // Get last value and add small variation
    const lastValue = this._lastValues.get(label) || 0;
    const variation = (Math.random() - 0.5) * 0.1;
    let newValue = lastValue + variation;
    
    // Apply label-specific constraints
    switch (label) {
      case ARINC429Labels.ALTITUDE:
        newValue = Math.max(0, Math.min(45000, newValue || 10000));
        break;
      case ARINC429Labels.AIRSPEED:
        newValue = Math.max(0, Math.min(350, newValue || 250));
        break;
      case ARINC429Labels.HEADING:
        newValue = ((newValue || 90) + 360) % 360;
        break;
      case ARINC429Labels.VERTICAL_SPEED:
        newValue = Math.max(-6000, Math.min(6000, newValue || 0));
        break;
      case ARINC429Labels.FUEL_QUANTITY:
        newValue = Math.max(0, Math.min(500, newValue || 400));
        break;
      case ARINC429Labels.BATTERY_VOLTAGE:
        newValue = Math.max(350, Math.min(450, newValue || 400));
        break;
      default:
        newValue = newValue || 0;
    }
    
    this._lastValues.set(label, newValue);
    
    // Encode to ARINC 429 word
    const data = Math.round(newValue * 100) & 0x7FFFF; // 19-bit data
    
    return {
      label,
      sdi: this._arincConfig.sdi || 0,
      data,
      ssm: SSM.NORMAL_OPERATION,
      parity: this._calculateParity(label, data)
    };
  }

  /**
   * Decode ARINC 429 word to engineering value
   */
  private _decodeWord(word: ARINC429Word): number {
    // Simple decoding - actual implementation depends on label
    return word.data / 100;
  }

  /**
   * Calculate odd parity
   */
  private _calculateParity(label: number, data: number): number {
    let bits = label ^ data;
    let count = 0;
    while (bits) {
      count += bits & 1;
      bits >>= 1;
    }
    return count % 2 === 0 ? 1 : 0; // Odd parity
  }

  /**
   * Get label name from number
   */
  private _getLabelName(label: number): string {
    for (const [name, value] of Object.entries(ARINC429Labels)) {
      if (value === label) return name;
    }
    return `LABEL_${label.toString(8)}`;
  }
}
