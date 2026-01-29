/**
 * State Store for Digital Twin
 * 
 * Persistent storage for model states with versioning
 * and history tracking.
 * 
 * @module digital_twin/sync_engine
 */

import { ComponentState } from '../models/ComponentModel';

/**
 * State entry with version info
 */
export interface StateEntry {
  /** State data */
  state: ComponentState;
  /** Version number */
  version: number;
  /** Timestamp */
  timestamp: string;
  /** Previous version hash */
  prevHash?: string;
}

/**
 * State Store - Versioned state storage
 */
export class StateStore {
  private _states: Map<string, StateEntry[]> = new Map();
  private _maxVersions: number = 100;

  constructor(maxVersions: number = 100) {
    this._maxVersions = maxVersions;
  }

  /**
   * Store a state
   * @param key - State key (component ID)
   * @param state - State to store
   * @returns New version number
   */
  async put(key: string, state: ComponentState): Promise<number> {
    const entries = this._states.get(key) || [];
    const version = entries.length + 1;
    
    const entry: StateEntry = {
      state: { ...state },
      version,
      timestamp: new Date().toISOString(),
      prevHash: entries.length > 0 
        ? this._hash(entries[entries.length - 1]) 
        : undefined
    };
    
    entries.push(entry);
    
    // Trim old versions
    if (entries.length > this._maxVersions) {
      entries.splice(0, entries.length - this._maxVersions);
    }
    
    this._states.set(key, entries);
    
    return version;
  }

  /**
   * Get current state
   * @param key - State key
   * @returns State entry or null
   */
  async get(key: string): Promise<StateEntry | null> {
    const entries = this._states.get(key);
    if (!entries || entries.length === 0) return null;
    return entries[entries.length - 1];
  }

  /**
   * Get state at specific version
   * @param key - State key
   * @param version - Version number
   * @returns State entry or null
   */
  async getVersion(key: string, version: number): Promise<StateEntry | null> {
    const entries = this._states.get(key);
    if (!entries) return null;
    
    return entries.find(e => e.version === version) || null;
  }

  /**
   * Get state history
   * @param key - State key
   * @param limit - Maximum entries to return
   * @returns Array of state entries
   */
  async history(key: string, limit: number = 100): Promise<StateEntry[]> {
    const entries = this._states.get(key) || [];
    return entries.slice(-limit);
  }

  /**
   * Get all keys
   */
  async keys(): Promise<string[]> {
    return Array.from(this._states.keys());
  }

  /**
   * Delete state
   * @param key - State key
   */
  async delete(key: string): Promise<void> {
    this._states.delete(key);
  }

  /**
   * Clear all states
   */
  async clear(): Promise<void> {
    this._states.clear();
  }

  /**
   * Get store statistics
   */
  getStats(): {
    keys: number;
    totalEntries: number;
    maxVersions: number;
  } {
    let totalEntries = 0;
    for (const entries of this._states.values()) {
      totalEntries += entries.length;
    }
    
    return {
      keys: this._states.size,
      totalEntries,
      maxVersions: this._maxVersions
    };
  }

  /**
   * Simple hash function for versioning
   */
  private _hash(entry: StateEntry): string {
    const str = JSON.stringify(entry);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(16);
  }

  /**
   * Export all data for backup
   */
  async export(): Promise<Record<string, StateEntry[]>> {
    const data: Record<string, StateEntry[]> = {};
    for (const [key, entries] of this._states) {
      data[key] = entries;
    }
    return data;
  }

  /**
   * Import data from backup
   */
  async import(data: Record<string, StateEntry[]>): Promise<void> {
    if (!data || typeof data !== 'object') {
      throw new Error('Import data must be a valid object');
    }
    
    for (const [key, entries] of Object.entries(data)) {
      // Validate key
      if (typeof key !== 'string' || key.trim() === '') {
        throw new Error(`Invalid state key: ${key}`);
      }
      
      // Validate entries array
      if (!Array.isArray(entries)) {
        throw new Error(`Entries for key '${key}' must be an array`);
      }
      
      // Validate each entry structure
      for (const entry of entries) {
        if (!entry.state || !entry.timestamp || typeof entry.version !== 'number') {
          throw new Error(`Invalid entry structure for key '${key}'`);
        }
      }
      
      this._states.set(key, entries);
    }
  }
}
