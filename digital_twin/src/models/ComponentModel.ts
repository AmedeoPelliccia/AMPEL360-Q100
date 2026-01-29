/**
 * Base Component Model for Digital Twin
 * 
 * Provides the foundation for all digital twin component models
 * with state management, health tracking, and synchronization.
 * 
 * @module digital_twin/models
 */

/**
 * Component health status enumeration
 */
export enum ComponentHealth {
  NOMINAL = 'NOMINAL',
  DEGRADED = 'DEGRADED',
  CRITICAL = 'CRITICAL',
  FAILED = 'FAILED',
  UNKNOWN = 'UNKNOWN'
}

/**
 * Component state interface
 */
export interface ComponentState {
  /** Unique component identifier */
  componentId: string;
  /** ISO 8601 timestamp of state capture */
  timestamp: string;
  /** Component health status */
  health: ComponentHealth;
  /** Confidence level (0.0 - 1.0) */
  confidence: number;
  /** State parameters (component-specific) */
  parameters: Record<string, number | string | boolean>;
  /** Metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Component update data
 */
export interface ComponentUpdate {
  /** Parameters to update */
  parameters: Record<string, number | string | boolean>;
  /** Source of the update */
  source?: string;
  /** Timestamp of the update */
  timestamp?: string;
}

/**
 * Abstract base class for digital twin component models
 */
export abstract class ComponentModel {
  protected _componentId: string;
  protected _state: ComponentState;
  protected _history: ComponentState[] = [];
  protected _maxHistorySize: number = 1000;

  constructor(componentId: string, initialState?: Partial<ComponentState>) {
    this._componentId = componentId;
    this._state = {
      componentId,
      timestamp: new Date().toISOString(),
      health: ComponentHealth.UNKNOWN,
      confidence: 0.0,
      parameters: {},
      ...initialState
    };
  }

  /**
   * Get the component identifier
   */
  get componentId(): string {
    return this._componentId;
  }

  /**
   * Get the current state
   */
  get state(): ComponentState {
    return { ...this._state };
  }

  /**
   * Get the current health status
   */
  get health(): ComponentHealth {
    return this._state.health;
  }

  /**
   * Get the state history
   */
  get history(): ComponentState[] {
    return [...this._history];
  }

  /**
   * Update the component state with new data
   * @param update - The update data
   * @returns The new state
   */
  update(update: ComponentUpdate): ComponentState {
    // Archive current state
    this._archiveState();

    // Apply update
    const timestamp = update.timestamp || new Date().toISOString();
    this._state = {
      ...this._state,
      timestamp,
      parameters: {
        ...this._state.parameters,
        ...update.parameters
      }
    };

    // Recalculate health
    this._state.health = this.calculateHealth();
    this._state.confidence = this.calculateConfidence();

    return this.state;
  }

  /**
   * Calculate health status based on current parameters
   * Override in subclasses for component-specific logic
   */
  protected abstract calculateHealth(): ComponentHealth;

  /**
   * Calculate confidence level based on data quality
   * Override in subclasses for component-specific logic
   */
  protected calculateConfidence(): number {
    // Default implementation: based on parameter count and recent updates
    const paramCount = Object.keys(this._state.parameters).length;
    if (paramCount === 0) return 0.0;
    
    const timeSinceUpdate = Date.now() - new Date(this._state.timestamp).getTime();
    const freshnessScore = Math.max(0, 1 - timeSinceUpdate / (60 * 1000)); // Decay over 1 minute
    
    return Math.min(1.0, freshnessScore);
  }

  /**
   * Predict future state at given time horizon
   * @param horizonSeconds - Prediction horizon in seconds
   * @returns Predicted state
   */
  abstract predict(horizonSeconds: number): ComponentState;

  /**
   * Validate the current state against constraints
   * @returns Validation result
   */
  abstract validate(): { valid: boolean; errors: string[] };

  /**
   * Archive the current state to history
   */
  private _archiveState(): void {
    this._history.push({ ...this._state });
    
    // Trim history if needed
    if (this._history.length > this._maxHistorySize) {
      this._history = this._history.slice(-this._maxHistorySize);
    }
  }

  /**
   * Get state at a specific point in time (from history)
   * @param timestamp - ISO 8601 timestamp
   * @returns State at that time or null if not found
   */
  getStateAt(timestamp: string): ComponentState | null {
    const targetTime = new Date(timestamp).getTime();
    
    // Find closest state in history
    let closest: ComponentState | null = null;
    let minDiff = Infinity;
    
    for (const state of this._history) {
      const diff = Math.abs(new Date(state.timestamp).getTime() - targetTime);
      if (diff < minDiff) {
        minDiff = diff;
        closest = state;
      }
    }
    
    return closest;
  }

  /**
   * Export state to JSON
   */
  toJSON(): ComponentState {
    return this.state;
  }

  /**
   * Create a snapshot of the model for persistence
   */
  snapshot(): {
    componentId: string;
    state: ComponentState;
    history: ComponentState[];
    snapshotTime: string;
  } {
    return {
      componentId: this._componentId,
      state: this.state,
      history: this.history,
      snapshotTime: new Date().toISOString()
    };
  }
}
