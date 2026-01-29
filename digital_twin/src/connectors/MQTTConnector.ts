/**
 * MQTT Connector for Digital Twin
 * 
 * Connector for MQTT-based telemetry and messaging systems.
 * 
 * @module digital_twin/connectors
 */

import { BaseConnector, ConnectorConfig, ConnectionStatus, DataMessage, MessageHandler } from './BaseConnector';

/**
 * MQTT specific configuration
 */
export interface MQTTConfig extends ConnectorConfig {
  /** MQTT broker URL */
  brokerUrl: string;
  /** Client ID */
  clientId?: string;
  /** Username for authentication */
  username?: string;
  /** Password for authentication */
  password?: string;
  /** Use TLS */
  useTLS?: boolean;
  /** Topics to subscribe */
  topics: string[];
  /** Quality of Service level */
  qos?: 0 | 1 | 2;
  /** Clean session */
  cleanSession?: boolean;
  /** Keep alive interval in seconds */
  keepAlive?: number;
}

/**
 * MQTT Message interface
 */
export interface MQTTMessage {
  topic: string;
  payload: string | Buffer;
  qos: 0 | 1 | 2;
  retain: boolean;
}

/**
 * MQTT Connector
 * 
 * Note: This is a simulation connector for development/testing.
 * In production, this would use an actual MQTT client library.
 */
export class MQTTConnector extends BaseConnector {
  private _mqttConfig: MQTTConfig;
  private _messageBuffer: DataMessage[] = [];
  private _simulationInterval?: ReturnType<typeof setInterval>;
  private _subscriptions: Set<string> = new Set();

  constructor(config: MQTTConfig) {
    super({
      ...config,
      type: 'MQTT'
    });
    this._mqttConfig = {
      qos: 1,
      cleanSession: true,
      keepAlive: 60,
      ...config
    };
  }

  /**
   * Connect to MQTT broker (simulated)
   */
  async connect(): Promise<void> {
    this._status = ConnectionStatus.CONNECTING;
    
    console.log(`MQTT Connector ${this._config.id} connecting to ${this._mqttConfig.brokerUrl}...`);
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Subscribe to configured topics
    for (const topic of this._mqttConfig.topics) {
      this._subscriptions.add(topic);
    }
    
    this._status = ConnectionStatus.CONNECTED;
    console.log(`MQTT Connector ${this._config.id} connected`);
    
    // Start simulation
    this._startSimulation();
  }

  /**
   * Disconnect from MQTT broker
   */
  async disconnect(): Promise<void> {
    this._stopSimulation();
    this._subscriptions.clear();
    this._status = ConnectionStatus.DISCONNECTED;
    console.log(`MQTT Connector ${this._config.id} disconnected`);
  }

  /**
   * Read next message from buffer
   */
  async read(): Promise<DataMessage | null> {
    if (!this.isConnected) return null;
    return this._messageBuffer.shift() || null;
  }

  /**
   * Publish message to MQTT topic
   */
  async write(message: DataMessage): Promise<void> {
    if (!this.isConnected) {
      throw new Error('Not connected');
    }
    
    console.log(`MQTT TX [${message.topic}]:`, JSON.stringify(message.payload));
    
    // In simulation, echo back to subscribers if topic matches
    if (message.topic && this._matchesTopic(message.topic)) {
      await this._emitMessage(message);
    }
  }

  /**
   * Subscribe to additional topics
   */
  subscribeTopic(topic: string, handler?: MessageHandler): void {
    this._subscriptions.add(topic);
    if (handler) {
      this.subscribe(topic, handler);
    }
    console.log(`MQTT subscribed to: ${topic}`);
  }

  /**
   * Unsubscribe from topic
   */
  unsubscribeTopic(topic: string): void {
    this._subscriptions.delete(topic);
    this.unsubscribe(topic);
    console.log(`MQTT unsubscribed from: ${topic}`);
  }

  /**
   * Start message simulation
   */
  private _startSimulation(): void {
    this._simulationInterval = setInterval(() => {
      // Generate simulated messages for subscribed topics
      for (const topic of this._subscriptions) {
        if (Math.random() < 0.3) { // 30% chance per interval
          const message = this._generateSimulatedMessage(topic);
          this._messageBuffer.push(message);
          this._emitMessage(message);
        }
      }
    }, 1000);
  }

  /**
   * Stop message simulation
   */
  private _stopSimulation(): void {
    if (this._simulationInterval) {
      clearInterval(this._simulationInterval);
      this._simulationInterval = undefined;
    }
  }

  /**
   * Generate simulated message for topic
   */
  private _generateSimulatedMessage(topic: string): DataMessage {
    // Parse topic to determine message type
    let payload: Record<string, unknown> = {};
    
    if (topic.includes('sensors')) {
      payload = {
        temperature: 20 + Math.random() * 10,
        pressure: 1.5 + Math.random() * 2,
        humidity: 30 + Math.random() * 40
      };
    } else if (topic.includes('status')) {
      payload = {
        online: true,
        health: 'NOMINAL',
        uptime: Math.floor(Math.random() * 86400)
      };
    } else if (topic.includes('telemetry')) {
      payload = {
        altitude: 10000 + Math.random() * 25000,
        airspeed: 200 + Math.random() * 150,
        heading: Math.random() * 360,
        latitude: 45 + Math.random() * 10,
        longitude: -75 + Math.random() * 10
      };
    } else {
      payload = {
        value: Math.random() * 100,
        unit: 'units',
        quality: 'GOOD'
      };
    }
    
    return {
      timestamp: new Date().toISOString(),
      source: this._config.id,
      topic,
      payload,
      metadata: {
        qos: this._mqttConfig.qos,
        retained: false
      }
    };
  }

  /**
   * Check if topic matches any subscription (including wildcards)
   */
  private _matchesTopic(topic: string): boolean {
    for (const sub of this._subscriptions) {
      if (this._topicMatches(sub, topic)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if topic matches subscription pattern
   */
  private _topicMatches(pattern: string, topic: string): boolean {
    // Simple MQTT wildcard matching
    if (pattern === topic) return true;
    if (pattern === '#') return true;
    
    const patternParts = pattern.split('/');
    const topicParts = topic.split('/');
    
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i] === '#') return true;
      if (patternParts[i] === '+') continue;
      if (i >= topicParts.length) return false;
      if (patternParts[i] !== topicParts[i]) return false;
    }
    
    return patternParts.length === topicParts.length;
  }

  /**
   * Get MQTT-specific statistics
   */
  getMQTTStats(): {
    brokerUrl: string;
    subscriptions: string[];
    bufferSize: number;
    qos: number;
  } {
    return {
      brokerUrl: this._mqttConfig.brokerUrl,
      subscriptions: Array.from(this._subscriptions),
      bufferSize: this._messageBuffer.length,
      qos: this._mqttConfig.qos || 1
    };
  }
}
