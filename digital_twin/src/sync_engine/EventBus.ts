/**
 * Event Bus for Digital Twin
 * 
 * Publish-subscribe messaging system for internal
 * communication between components.
 * 
 * @module digital_twin/sync_engine
 */

/**
 * Event handler type
 */
export type EventHandler<T = unknown> = (data: T) => void | Promise<void>;

/**
 * Subscription handle
 */
export interface Subscription {
  /** Topic subscribed to */
  topic: string;
  /** Handler function */
  handler: EventHandler;
  /** Unsubscribe function */
  unsubscribe: () => void;
}

/**
 * Event Bus - Async pub/sub messaging
 */
export class EventBus {
  private _handlers: Map<string, EventHandler[]> = new Map();
  private _history: { topic: string; timestamp: string; data: unknown }[] = [];
  private _maxHistory: number = 1000;

  /**
   * Publish an event
   * @param topic - Event topic
   * @param data - Event data
   */
  async publish<T>(topic: string, data: T): Promise<void> {
    // Record in history
    this._recordHistory(topic, data);
    
    // Notify exact topic handlers
    await this._notify(topic, data);
    
    // Notify wildcard handlers
    await this._notifyWildcards(topic, data);
  }

  /**
   * Subscribe to a topic
   * @param topic - Topic pattern (supports * and # wildcards)
   * @param handler - Event handler
   * @returns Subscription handle
   */
  subscribe<T>(topic: string, handler: EventHandler<T>): Subscription {
    const handlers = this._handlers.get(topic) || [];
    handlers.push(handler as EventHandler);
    this._handlers.set(topic, handlers);
    
    return {
      topic,
      handler: handler as EventHandler,
      unsubscribe: () => this.unsubscribe(topic, handler as EventHandler)
    };
  }

  /**
   * Unsubscribe from a topic
   * @param topic - Topic to unsubscribe from
   * @param handler - Specific handler to remove (optional)
   */
  unsubscribe(topic: string, handler?: EventHandler): void {
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
   * Subscribe to multiple topics
   * @param topics - Array of topic patterns
   * @param handler - Event handler
   * @returns Array of subscription handles
   */
  subscribeMany<T>(topics: string[], handler: EventHandler<T>): Subscription[] {
    return topics.map(topic => this.subscribe(topic, handler));
  }

  /**
   * Get event history
   * @param topic - Optional topic filter
   * @param limit - Maximum entries
   */
  getHistory(topic?: string, limit: number = 100): { topic: string; timestamp: string; data: unknown }[] {
    let history = this._history;
    
    if (topic) {
      history = history.filter(e => this._topicMatches(topic, e.topic));
    }
    
    return history.slice(-limit);
  }

  /**
   * Clear event history
   */
  clearHistory(): void {
    this._history = [];
  }

  /**
   * Get subscribed topics
   */
  getTopics(): string[] {
    return Array.from(this._handlers.keys());
  }

  /**
   * Get handler count for a topic
   */
  getHandlerCount(topic: string): number {
    return (this._handlers.get(topic) || []).length;
  }

  /**
   * Notify handlers for exact topic match
   */
  private async _notify<T>(topic: string, data: T): Promise<void> {
    const handlers = this._handlers.get(topic) || [];
    for (const handler of handlers) {
      try {
        await handler(data);
      } catch (error) {
        console.error(`Event handler error for topic ${topic}:`, error);
      }
    }
  }

  /**
   * Notify wildcard handlers
   */
  private async _notifyWildcards<T>(topic: string, data: T): Promise<void> {
    for (const [pattern, handlers] of this._handlers) {
      if (pattern === topic) continue; // Already notified
      
      if (this._topicMatches(pattern, topic)) {
        for (const handler of handlers) {
          try {
            await handler(data);
          } catch (error) {
            console.error(`Event handler error for pattern ${pattern}:`, error);
          }
        }
      }
    }
  }

  /**
   * Check if pattern matches topic
   */
  private _topicMatches(pattern: string, topic: string): boolean {
    if (pattern === topic) return true;
    if (pattern === '*' || pattern === '#') return true;
    
    // Convert MQTT-style wildcards to regex
    // First escape all regex special characters except our wildcards
    const escaped = pattern
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')  // Escape regex special chars
      .replace(/\\\*/g, '[^.]+')               // Convert * wildcard
      .replace(/#/g, '.*');                    // Convert # wildcard
    
    return new RegExp(`^${escaped}$`).test(topic);
  }

  /**
   * Record event in history
   */
  private _recordHistory<T>(topic: string, data: T): void {
    this._history.push({
      topic,
      timestamp: new Date().toISOString(),
      data
    });
    
    // Trim history
    if (this._history.length > this._maxHistory) {
      this._history = this._history.slice(-this._maxHistory);
    }
  }
}
