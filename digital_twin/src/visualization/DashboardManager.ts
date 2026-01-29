/**
 * Dashboard Manager for Digital Twin
 * 
 * Manages dashboard configurations and data feeds
 * for visualization components.
 * 
 * @module digital_twin/visualization
 */

import { ComponentState } from '../models/ComponentModel';
import { HealthReport } from '../health_monitoring/HealthMonitor';
import { Alert } from '../health_monitoring/AlertManager';

/**
 * Dashboard configuration
 */
export interface DashboardConfig {
  /** Dashboard ID */
  id: string;
  /** Dashboard title */
  title: string;
  /** Dashboard layout */
  layout: DashboardLayout;
  /** Widget configurations */
  widgets: WidgetConfig[];
  /** Refresh interval in milliseconds */
  refreshInterval?: number;
  /** Theme */
  theme?: 'light' | 'dark' | 'aerospace';
}

/**
 * Dashboard layout
 */
export interface DashboardLayout {
  /** Number of columns */
  columns: number;
  /** Row height in pixels */
  rowHeight: number;
  /** Gap between widgets */
  gap: number;
}

/**
 * Widget configuration
 */
export interface WidgetConfig {
  /** Widget ID */
  id: string;
  /** Widget type */
  type: 'gauge' | 'chart' | 'status' | 'alert' | '3d' | 'table';
  /** Widget title */
  title: string;
  /** Grid position */
  position: { x: number; y: number; w: number; h: number };
  /** Data source */
  dataSource: string;
  /** Widget-specific options */
  options?: Record<string, unknown>;
}

/**
 * Dashboard data feed
 */
export interface DashboardDataFeed {
  /** Component states */
  componentStates: Record<string, ComponentState>;
  /** Health report */
  healthReport?: HealthReport;
  /** Active alerts */
  alerts: Alert[];
  /** Custom data */
  customData?: Record<string, unknown>;
  /** Timestamp */
  timestamp: string;
}

/**
 * Dashboard Manager
 */
export class DashboardManager {
  private _dashboards: Map<string, DashboardConfig> = new Map();
  private _dataFeeds: Map<string, DashboardDataFeed> = new Map();
  private _subscribers: Map<string, ((feed: DashboardDataFeed) => void)[]> = new Map();

  /**
   * Register a dashboard configuration
   */
  registerDashboard(config: DashboardConfig): void {
    this._dashboards.set(config.id, config);
    console.log(`Dashboard registered: ${config.id}`);
  }

  /**
   * Get dashboard configuration
   */
  getDashboard(dashboardId: string): DashboardConfig | undefined {
    return this._dashboards.get(dashboardId);
  }

  /**
   * Get all dashboards
   */
  getAllDashboards(): DashboardConfig[] {
    return Array.from(this._dashboards.values());
  }

  /**
   * Update dashboard data feed
   */
  updateDataFeed(dashboardId: string, feed: DashboardDataFeed): void {
    this._dataFeeds.set(dashboardId, feed);
    
    // Notify subscribers
    const subscribers = this._subscribers.get(dashboardId) || [];
    for (const callback of subscribers) {
      callback(feed);
    }
  }

  /**
   * Get current data feed
   */
  getDataFeed(dashboardId: string): DashboardDataFeed | undefined {
    return this._dataFeeds.get(dashboardId);
  }

  /**
   * Subscribe to data feed updates
   */
  subscribe(dashboardId: string, callback: (feed: DashboardDataFeed) => void): () => void {
    const subscribers = this._subscribers.get(dashboardId) || [];
    subscribers.push(callback);
    this._subscribers.set(dashboardId, subscribers);
    
    // Return unsubscribe function
    return () => {
      const subs = this._subscribers.get(dashboardId) || [];
      const index = subs.indexOf(callback);
      if (index >= 0) {
        subs.splice(index, 1);
      }
    };
  }

  /**
   * Create default aircraft dashboard
   */
  createDefaultDashboard(): DashboardConfig {
    const config: DashboardConfig = {
      id: 'aircraft-overview',
      title: 'AMPEL360 Q100 Aircraft Overview',
      layout: {
        columns: 12,
        rowHeight: 60,
        gap: 10
      },
      refreshInterval: 1000,
      theme: 'aerospace',
      widgets: [
        {
          id: 'health-status',
          type: 'status',
          title: 'System Health',
          position: { x: 0, y: 0, w: 3, h: 2 },
          dataSource: 'health',
          options: { showDetails: true }
        },
        {
          id: 'fuel-gauge',
          type: 'gauge',
          title: 'Fuel Level',
          position: { x: 3, y: 0, w: 3, h: 2 },
          dataSource: 'fuel.tankLevel',
          options: { 
            min: 0, 
            max: 500, 
            unit: 'kg',
            zones: [
              { from: 0, to: 50, color: 'red' },
              { from: 50, to: 100, color: 'yellow' },
              { from: 100, to: 500, color: 'green' }
            ]
          }
        },
        {
          id: 'battery-gauge',
          type: 'gauge',
          title: 'Battery SOC',
          position: { x: 6, y: 0, w: 3, h: 2 },
          dataSource: 'electrical.batterySOC',
          options: { 
            min: 0, 
            max: 100, 
            unit: '%',
            zones: [
              { from: 0, to: 20, color: 'red' },
              { from: 20, to: 40, color: 'yellow' },
              { from: 40, to: 100, color: 'green' }
            ]
          }
        },
        {
          id: 'power-gauge',
          type: 'gauge',
          title: 'Fuel Cell Power',
          position: { x: 9, y: 0, w: 3, h: 2 },
          dataSource: 'electrical.fuelCellPower',
          options: { min: 0, max: 200, unit: 'kW' }
        },
        {
          id: 'fuel-chart',
          type: 'chart',
          title: 'Fuel Level History',
          position: { x: 0, y: 2, w: 6, h: 3 },
          dataSource: 'fuel.history',
          options: { chartType: 'line', timeRange: '1h' }
        },
        {
          id: 'power-chart',
          type: 'chart',
          title: 'Power Distribution',
          position: { x: 6, y: 2, w: 6, h: 3 },
          dataSource: 'electrical.history',
          options: { chartType: 'area', timeRange: '1h' }
        },
        {
          id: 'alerts',
          type: 'alert',
          title: 'Active Alerts',
          position: { x: 0, y: 5, w: 4, h: 3 },
          dataSource: 'alerts',
          options: { maxVisible: 5 }
        },
        {
          id: '3d-view',
          type: '3d',
          title: 'Aircraft View',
          position: { x: 4, y: 5, w: 8, h: 3 },
          dataSource: 'aircraft.model',
          options: { 
            modelPath: '/models/ampel360-q100.glb',
            autoRotate: false,
            showAnnotations: true
          }
        }
      ]
    };
    
    this.registerDashboard(config);
    return config;
  }

  /**
   * Export dashboard configuration
   */
  exportDashboard(dashboardId: string): string | null {
    const config = this._dashboards.get(dashboardId);
    if (!config) return null;
    return JSON.stringify(config, null, 2);
  }

  /**
   * Import dashboard configuration
   */
  importDashboard(jsonConfig: string): DashboardConfig {
    let config: DashboardConfig;
    
    try {
      config = JSON.parse(jsonConfig) as DashboardConfig;
    } catch (error) {
      throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : 'parse error'}`);
    }
    
    // Validate required fields
    if (!config.id || typeof config.id !== 'string') {
      throw new Error('Dashboard config must have a valid id');
    }
    if (!config.title || typeof config.title !== 'string') {
      throw new Error('Dashboard config must have a valid title');
    }
    if (!config.layout || typeof config.layout !== 'object') {
      throw new Error('Dashboard config must have a valid layout');
    }
    if (!Array.isArray(config.widgets)) {
      throw new Error('Dashboard config must have a widgets array');
    }
    
    this.registerDashboard(config);
    return config;
  }
}
