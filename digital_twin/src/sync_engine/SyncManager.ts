/**
 * Sync Manager for Digital Twin
 * 
 * Central coordination component for managing real-time
 * synchronization between physical systems and digital models.
 * 
 * @module digital_twin/sync_engine
 */

import { ComponentModel, ComponentState, ComponentUpdate } from '../models/ComponentModel';
import { BaseConnector, DataMessage } from '../connectors/BaseConnector';
import { StateStore } from './StateStore';
import { EventBus, EventHandler } from './EventBus';

/**
 * Sync configuration
 */
export interface SyncConfig {
  /** Maximum sync latency in milliseconds */
  maxLatencyMs?: number;
  /** Buffer size for message queuing */
  bufferSize?: number;
  /** Flush interval in milliseconds */
  flushIntervalMs?: number;
  /** Enable state persistence */
  persistState?: boolean;
  /** State persistence interval in milliseconds */
  persistIntervalMs?: number;
}

/**
 * Sync result
 */
export interface SyncResult {
  /** Sync operation succeeded */
  success: boolean;
  /** Timestamp of sync */
  timestamp: string;
  /** Number of models updated */
  modelsUpdated: number;
  /** Latency in milliseconds */
  latencyMs: number;
  /** Errors if any */
  errors?: string[];
}

/**
 * Model registration entry
 */
interface ModelRegistration {
  model: ComponentModel;
  sources: string[];
  lastSync: string;
}

/**
 * Sync Manager - Central synchronization coordinator
 */
export class SyncManager {
  private _config: SyncConfig;
  private _models: Map<string, ModelRegistration> = new Map();
  private _connectors: Map<string, BaseConnector> = new Map();
  private _stateStore: StateStore;
  private _eventBus: EventBus;
  private _running: boolean = false;
  private _flushInterval?: ReturnType<typeof setInterval>;
  private _persistInterval?: ReturnType<typeof setInterval>;
  private _messageBuffer: DataMessage[] = [];
  private _stats = {
    messagesReceived: 0,
    messagesProcessed: 0,
    syncOperations: 0,
    errors: 0
  };

  constructor(config: SyncConfig = {}) {
    this._config = {
      maxLatencyMs: 100,
      bufferSize: 10000,
      flushIntervalMs: 50,
      persistState: true,
      persistIntervalMs: 60000,
      ...config
    };
    
    this._stateStore = new StateStore();
    this._eventBus = new EventBus();
  }

  /**
   * Get state store
   */
  get stateStore(): StateStore {
    return this._stateStore;
  }

  /**
   * Get event bus
   */
  get eventBus(): EventBus {
    return this._eventBus;
  }

  /**
   * Check if sync manager is running
   */
  get isRunning(): boolean {
    return this._running;
  }

  /**
   * Register a model for synchronization
   */
  registerModel(model: ComponentModel, sources: string[]): void {
    this._models.set(model.componentId, {
      model,
      sources,
      lastSync: new Date().toISOString()
    });
    
    // Subscribe to sources
    for (const source of sources) {
      this._subscribeToSource(source, model.componentId);
    }
    
    console.log(`Registered model ${model.componentId} with sources: ${sources.join(', ')}`);
  }

  /**
   * Unregister a model
   */
  unregisterModel(componentId: string): void {
    this._models.delete(componentId);
    console.log(`Unregistered model ${componentId}`);
  }

  /**
   * Register a connector
   */
  registerConnector(connector: BaseConnector): void {
    this._connectors.set(connector.id, connector);
    
    // Subscribe to all messages from this connector
    connector.subscribe('*', (message) => this._handleMessage(message));
    
    console.log(`Registered connector ${connector.id}`);
  }

  /**
   * Unregister a connector
   */
  unregisterConnector(connectorId: string): void {
    const connector = this._connectors.get(connectorId);
    if (connector) {
      connector.unsubscribe('*');
      this._connectors.delete(connectorId);
    }
    console.log(`Unregistered connector ${connectorId}`);
  }

  /**
   * Start synchronization
   */
  async start(): Promise<void> {
    if (this._running) return;
    
    this._running = true;
    
    // Connect all connectors
    for (const connector of this._connectors.values()) {
      if (!connector.isConnected) {
        await connector.connect();
      }
    }
    
    // Start flush interval
    this._flushInterval = setInterval(
      () => this._flushBuffer(),
      this._config.flushIntervalMs
    );
    
    // Start persistence interval if enabled
    if (this._config.persistState) {
      this._persistInterval = setInterval(
        () => this._persistStates(),
        this._config.persistIntervalMs
      );
    }
    
    console.log('Sync Manager started');
  }

  /**
   * Stop synchronization
   */
  async stop(): Promise<void> {
    if (!this._running) return;
    
    this._running = false;
    
    // Stop intervals
    if (this._flushInterval) {
      clearInterval(this._flushInterval);
      this._flushInterval = undefined;
    }
    if (this._persistInterval) {
      clearInterval(this._persistInterval);
      this._persistInterval = undefined;
    }
    
    // Flush remaining messages
    await this._flushBuffer();
    
    // Persist final states
    if (this._config.persistState) {
      await this._persistStates();
    }
    
    // Disconnect connectors
    for (const connector of this._connectors.values()) {
      if (connector.isConnected) {
        await connector.disconnect();
      }
    }
    
    console.log('Sync Manager stopped');
  }

  /**
   * Sync a model with new data
   */
  async sync(componentId: string, data: Record<string, unknown>): Promise<SyncResult> {
    const startTime = Date.now();
    const errors: string[] = [];
    let modelsUpdated = 0;
    
    const registration = this._models.get(componentId);
    if (!registration) {
      return {
        success: false,
        timestamp: new Date().toISOString(),
        modelsUpdated: 0,
        latencyMs: Date.now() - startTime,
        errors: [`Model ${componentId} not registered`]
      };
    }
    
    try {
      // Update model
      const update: ComponentUpdate = {
        parameters: data as Record<string, number | string | boolean>,
        source: 'sync_manager',
        timestamp: new Date().toISOString()
      };
      
      registration.model.update(update);
      registration.lastSync = new Date().toISOString();
      modelsUpdated++;
      
      // Store state
      await this._stateStore.put(componentId, registration.model.state);
      
      // Publish state change event
      await this._eventBus.publish(`state.${componentId}`, registration.model.state);
      
      this._stats.syncOperations++;
      
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      errors.push(errorMsg);
      this._stats.errors++;
    }
    
    const latencyMs = Date.now() - startTime;
    
    return {
      success: errors.length === 0,
      timestamp: new Date().toISOString(),
      modelsUpdated,
      latencyMs,
      errors: errors.length > 0 ? errors : undefined
    };
  }

  /**
   * Get model state
   */
  getModelState(componentId: string): ComponentState | null {
    const registration = this._models.get(componentId);
    return registration ? registration.model.state : null;
  }

  /**
   * Get all model states
   */
  getAllStates(): Record<string, ComponentState> {
    const states: Record<string, ComponentState> = {};
    for (const [id, reg] of this._models) {
      states[id] = reg.model.state;
    }
    return states;
  }

  /**
   * Get statistics
   */
  getStats(): {
    running: boolean;
    registeredModels: number;
    registeredConnectors: number;
    bufferSize: number;
    stats: typeof this._stats;
  } {
    return {
      running: this._running,
      registeredModels: this._models.size,
      registeredConnectors: this._connectors.size,
      bufferSize: this._messageBuffer.length,
      stats: { ...this._stats }
    };
  }

  /**
   * Subscribe to a data source
   */
  private _subscribeToSource(source: string, componentId: string): void {
    // Parse source to find connector and topic
    const [connectorId, topic] = source.split('.');
    const connector = this._connectors.get(connectorId);
    
    if (connector) {
      connector.subscribe(topic || '*', (message) => {
        this._routeMessage(message, componentId);
      });
    }
  }

  /**
   * Handle incoming message
   */
  private _handleMessage(message: DataMessage): void {
    this._stats.messagesReceived++;
    
    if (this._messageBuffer.length < (this._config.bufferSize || 10000)) {
      this._messageBuffer.push(message);
    } else {
      console.warn('Sync Manager: Message buffer full, dropping message');
    }
  }

  /**
   * Route message to appropriate model
   */
  private _routeMessage(message: DataMessage, componentId: string): void {
    const registration = this._models.get(componentId);
    if (!registration) return;
    
    // Convert message payload to update
    this.sync(componentId, message.payload);
  }

  /**
   * Flush message buffer
   */
  private async _flushBuffer(): Promise<void> {
    const messages = this._messageBuffer.splice(0, 100); // Process up to 100 at a time
    
    for (const message of messages) {
      // Find models subscribed to this source
      for (const [componentId, registration] of this._models) {
        if (registration.sources.some(s => message.source.includes(s.split('.')[0]))) {
          await this.sync(componentId, message.payload);
        }
      }
      this._stats.messagesProcessed++;
    }
  }

  /**
   * Persist all model states
   */
  private async _persistStates(): Promise<void> {
    for (const [componentId, registration] of this._models) {
      await this._stateStore.put(componentId, registration.model.state);
    }
    console.log(`Persisted states for ${this._models.size} models`);
  }
}
