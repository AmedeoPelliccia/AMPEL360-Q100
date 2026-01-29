/**
 * Base Connector for Digital Twin
 * 
 * Abstract base class for all data connectors that integrate
 * external systems with the digital twin.
 * 
 * @module digital_twin/connectors
 */

/**
 * Connection status enumeration
 */
export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  RECONNECTING = 'RECONNECTING',
  ERROR = 'ERROR'
}

/**
 * Connector configuration interface
 */
export interface ConnectorConfig {
  /** Unique connector identifier */
  id: string;
  /** Connector type */
  type: string;
  /** Connection host */
  host?: string;
  /** Connection port */
  port?: number;
  /** Connection timeout in milliseconds */
  timeout?: number;
  /** Auto-reconnect on disconnect */
  autoReconnect?: boolean;
  /** Reconnect interval in milliseconds */
  reconnectInterval?: number;
  /** Maximum reconnect attempts */
  maxReconnectAttempts?: number;
  /** Additional configuration */
  options?: Record<string, unknown>;
}

/**
 * Data message interface
 */
export interface DataMessage {
  /** Message timestamp */
  timestamp: string;
  /** Source identifier */
  source: string;
  /** Message topic/channel */
  topic?: string;
  /** Message payload */
  payload: Record<string, unknown>;
  /** Message metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Message handler type
 */
export type MessageHandler = (message: DataMessage) => void | Promise<void>;

/**
 * Abstract base class for connectors
 */
export abstract class BaseConnector {
  protected _config: ConnectorConfig;
  protected _status: ConnectionStatus = ConnectionStatus.DISCONNECTED;
  protected _handlers: Map<string, MessageHandler[]> = new Map();
  protected _reconnectAttempts: number = 0;
  protected _lastError?: Error;

  constructor(config: ConnectorConfig) {
    this._config = {
      timeout: 30000,
      autoReconnect: true,
      reconnectInterval: 5000,
      maxReconnectAttempts: 10,
      ...config
    };
  }

  /**
   * Get connector ID
   */
  get id(): string {
    return this._config.id;
  }

  /**
   * Get current connection status
   */
  get status(): ConnectionStatus {
    return this._status;
  }

  /**
   * Get configuration
   */
  get config(): ConnectorConfig {
    return { ...this._config };
  }

  /**
   * Get last error if any
   */
  get lastError(): Error | undefined {
    return this._lastError;
  }

  /**
   * Check if connected
   */
  get isConnected(): boolean {
    return this._status === ConnectionStatus.CONNECTED;
  }

  /**
   * Connect to the data source
   */
  abstract connect(): Promise<void>;

  /**
   * Disconnect from the data source
   */
  abstract disconnect(): Promise<void>;

  /**
   * Read data from the source
   */
  abstract read(): Promise<DataMessage | null>;

  /**
   * Write data to the destination
   */
  abstract write(message: DataMessage): Promise<void>;

  /**
   * Subscribe to a topic/channel
   */
  subscribe(topic: string, handler: MessageHandler): void {
    const handlers = this._handlers.get(topic) || [];
    handlers.push(handler);
    this._handlers.set(topic, handlers);
  }

  /**
   * Unsubscribe from a topic/channel
   */
  unsubscribe(topic: string, handler?: MessageHandler): void {
    if (!handler) {
      this._handlers.delete(topic);
      return;
    }

    const handlers = this._handlers.get(topic) || [];
    const filtered = handlers.filter(h => h !== handler);
    
    if (filtered.length === 0) {
      this._handlers.delete(topic);
    } else {
      this._handlers.set(topic, filtered);
    }
  }

  /**
   * Emit message to handlers
   */
  protected async _emitMessage(message: DataMessage): Promise<void> {
    const topic = message.topic || '*';
    
    // Notify topic-specific handlers
    const topicHandlers = this._handlers.get(topic) || [];
    for (const handler of topicHandlers) {
      await handler(message);
    }
    
    // Notify wildcard handlers
    const wildcardHandlers = this._handlers.get('*') || [];
    for (const handler of wildcardHandlers) {
      await handler(message);
    }
  }

  /**
   * Handle connection error
   */
  protected async _handleError(error: Error): Promise<void> {
    this._lastError = error;
    this._status = ConnectionStatus.ERROR;
    
    console.error(`Connector ${this._config.id} error:`, error.message);
    
    if (this._config.autoReconnect && 
        this._reconnectAttempts < (this._config.maxReconnectAttempts || 10)) {
      await this._attemptReconnect();
    }
  }

  /**
   * Attempt to reconnect
   */
  protected async _attemptReconnect(): Promise<void> {
    this._status = ConnectionStatus.RECONNECTING;
    this._reconnectAttempts++;
    
    console.log(`Connector ${this._config.id} reconnecting (attempt ${this._reconnectAttempts})...`);
    
    await new Promise(resolve => 
      setTimeout(resolve, this._config.reconnectInterval)
    );
    
    try {
      await this.connect();
      this._reconnectAttempts = 0;
    } catch (error) {
      if (error instanceof Error) {
        await this._handleError(error);
      }
    }
  }

  /**
   * Get connector statistics
   */
  getStats(): {
    id: string;
    status: ConnectionStatus;
    reconnectAttempts: number;
    subscribedTopics: string[];
    lastError?: string;
  } {
    return {
      id: this._config.id,
      status: this._status,
      reconnectAttempts: this._reconnectAttempts,
      subscribedTopics: Array.from(this._handlers.keys()),
      lastError: this._lastError?.message
    };
  }
}
