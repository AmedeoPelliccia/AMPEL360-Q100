/**
 * Alert Manager for Digital Twin
 * 
 * Manages alerts and notifications for system health
 * events and anomalies.
 * 
 * @module digital_twin/health_monitoring
 */

/**
 * Alert severity levels
 */
export enum AlertSeverity {
  INFO = 'INFO',
  WARNING = 'WARNING',
  CAUTION = 'CAUTION',
  CRITICAL = 'CRITICAL'
}

/**
 * Alert status
 */
export enum AlertStatus {
  ACTIVE = 'ACTIVE',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  RESOLVED = 'RESOLVED',
  SUPPRESSED = 'SUPPRESSED'
}

/**
 * Alert interface
 */
export interface Alert {
  /** Unique alert ID */
  id: string;
  /** Alert timestamp */
  timestamp: string;
  /** Alert severity */
  severity: AlertSeverity;
  /** Alert status */
  status: AlertStatus;
  /** Source component ID */
  sourceId: string;
  /** Alert title */
  title: string;
  /** Alert message */
  message: string;
  /** Alert category */
  category?: string;
  /** Additional data */
  data?: Record<string, unknown>;
  /** Acknowledged by */
  acknowledgedBy?: string;
  /** Acknowledged at */
  acknowledgedAt?: string;
  /** Resolved at */
  resolvedAt?: string;
}

/**
 * Alert filter options
 */
export interface AlertFilter {
  /** Filter by severity */
  severity?: AlertSeverity[];
  /** Filter by status */
  status?: AlertStatus[];
  /** Filter by source */
  sourceId?: string;
  /** Filter by category */
  category?: string;
  /** Filter by time range (start) */
  startTime?: string;
  /** Filter by time range (end) */
  endTime?: string;
}

/**
 * Alert handler callback
 */
export type AlertHandler = (alert: Alert) => void | Promise<void>;

/**
 * Alert Manager - Centralized alert handling
 */
export class AlertManager {
  private _alerts: Map<string, Alert> = new Map();
  private _handlers: Map<AlertSeverity, AlertHandler[]> = new Map();
  private _nextId: number = 1;
  private _maxAlerts: number = 1000;
  private _suppressedSources: Set<string> = new Set();

  constructor(maxAlerts: number = 1000) {
    this._maxAlerts = maxAlerts;
  }

  /**
   * Create and raise a new alert
   */
  async raiseAlert(
    severity: AlertSeverity,
    sourceId: string,
    title: string,
    message: string,
    options?: {
      category?: string;
      data?: Record<string, unknown>;
    }
  ): Promise<Alert> {
    // Validate inputs
    if (!sourceId || sourceId.trim() === '') {
      throw new Error('sourceId is required and cannot be empty');
    }
    if (!title || title.trim() === '') {
      throw new Error('title is required and cannot be empty');
    }
    if (!message || message.trim() === '') {
      throw new Error('message is required and cannot be empty');
    }
    if (!Object.values(AlertSeverity).includes(severity)) {
      throw new Error(`Invalid severity: ${severity}`);
    }
    
    // Check if source is suppressed
    if (this._suppressedSources.has(sourceId)) {
      const alert: Alert = {
        id: `ALT-${this._nextId++}`,
        timestamp: new Date().toISOString(),
        severity,
        status: AlertStatus.SUPPRESSED,
        sourceId,
        title,
        message,
        category: options?.category,
        data: options?.data
      };
      return alert;
    }
    
    const alert: Alert = {
      id: `ALT-${this._nextId++}`,
      timestamp: new Date().toISOString(),
      severity,
      status: AlertStatus.ACTIVE,
      sourceId,
      title,
      message,
      category: options?.category,
      data: options?.data
    };
    
    this._alerts.set(alert.id, alert);
    
    // Trim old alerts if needed
    this._trimAlerts();
    
    // Notify handlers
    await this._notifyHandlers(alert);
    
    console.log(`Alert raised: [${severity}] ${title}`);
    
    return alert;
  }

  /**
   * Acknowledge an alert
   */
  acknowledgeAlert(alertId: string, acknowledgedBy: string): boolean {
    const alert = this._alerts.get(alertId);
    if (!alert || alert.status !== AlertStatus.ACTIVE) {
      return false;
    }
    
    alert.status = AlertStatus.ACKNOWLEDGED;
    alert.acknowledgedBy = acknowledgedBy;
    alert.acknowledgedAt = new Date().toISOString();
    
    console.log(`Alert acknowledged: ${alertId} by ${acknowledgedBy}`);
    
    return true;
  }

  /**
   * Resolve an alert
   */
  resolveAlert(alertId: string): boolean {
    const alert = this._alerts.get(alertId);
    if (!alert) {
      return false;
    }
    
    alert.status = AlertStatus.RESOLVED;
    alert.resolvedAt = new Date().toISOString();
    
    console.log(`Alert resolved: ${alertId}`);
    
    return true;
  }

  /**
   * Get alert by ID
   */
  getAlert(alertId: string): Alert | undefined {
    return this._alerts.get(alertId);
  }

  /**
   * Get alerts with optional filter
   */
  getAlerts(filter?: AlertFilter): Alert[] {
    let alerts = Array.from(this._alerts.values());
    
    if (filter) {
      if (filter.severity) {
        alerts = alerts.filter(a => filter.severity!.includes(a.severity));
      }
      if (filter.status) {
        alerts = alerts.filter(a => filter.status!.includes(a.status));
      }
      if (filter.sourceId) {
        alerts = alerts.filter(a => a.sourceId === filter.sourceId);
      }
      if (filter.category) {
        alerts = alerts.filter(a => a.category === filter.category);
      }
      if (filter.startTime) {
        alerts = alerts.filter(a => a.timestamp >= filter.startTime!);
      }
      if (filter.endTime) {
        alerts = alerts.filter(a => a.timestamp <= filter.endTime!);
      }
    }
    
    // Sort by timestamp (newest first)
    return alerts.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }

  /**
   * Get active alerts
   */
  getActiveAlerts(): Alert[] {
    return this.getAlerts({ status: [AlertStatus.ACTIVE] });
  }

  /**
   * Get alert count by severity
   */
  getAlertCounts(): Record<AlertSeverity, number> {
    const counts: Record<AlertSeverity, number> = {
      [AlertSeverity.INFO]: 0,
      [AlertSeverity.WARNING]: 0,
      [AlertSeverity.CAUTION]: 0,
      [AlertSeverity.CRITICAL]: 0
    };
    
    for (const alert of this._alerts.values()) {
      if (alert.status === AlertStatus.ACTIVE) {
        counts[alert.severity]++;
      }
    }
    
    return counts;
  }

  /**
   * Register alert handler
   */
  onAlert(severity: AlertSeverity | '*', handler: AlertHandler): void {
    if (severity === '*') {
      // Register for all severities
      for (const sev of Object.values(AlertSeverity)) {
        const handlers = this._handlers.get(sev) || [];
        handlers.push(handler);
        this._handlers.set(sev, handlers);
      }
    } else {
      const handlers = this._handlers.get(severity) || [];
      handlers.push(handler);
      this._handlers.set(severity, handlers);
    }
  }

  /**
   * Suppress alerts from a source
   */
  suppressSource(sourceId: string): void {
    this._suppressedSources.add(sourceId);
    console.log(`Alerts suppressed for source: ${sourceId}`);
  }

  /**
   * Unsuppress alerts from a source
   */
  unsuppressSource(sourceId: string): void {
    this._suppressedSources.delete(sourceId);
    console.log(`Alerts unsuppressed for source: ${sourceId}`);
  }

  /**
   * Clear all resolved alerts
   */
  clearResolved(): number {
    let count = 0;
    for (const [id, alert] of this._alerts) {
      if (alert.status === AlertStatus.RESOLVED) {
        this._alerts.delete(id);
        count++;
      }
    }
    console.log(`Cleared ${count} resolved alerts`);
    return count;
  }

  /**
   * Get statistics
   */
  getStats(): {
    total: number;
    active: number;
    acknowledged: number;
    resolved: number;
    suppressed: number;
    bySeverity: Record<AlertSeverity, number>;
  } {
    const stats = {
      total: this._alerts.size,
      active: 0,
      acknowledged: 0,
      resolved: 0,
      suppressed: 0,
      bySeverity: this.getAlertCounts()
    };
    
    for (const alert of this._alerts.values()) {
      switch (alert.status) {
        case AlertStatus.ACTIVE: stats.active++; break;
        case AlertStatus.ACKNOWLEDGED: stats.acknowledged++; break;
        case AlertStatus.RESOLVED: stats.resolved++; break;
        case AlertStatus.SUPPRESSED: stats.suppressed++; break;
      }
    }
    
    return stats;
  }

  /**
   * Notify handlers of new alert
   */
  private async _notifyHandlers(alert: Alert): Promise<void> {
    const handlers = this._handlers.get(alert.severity) || [];
    for (const handler of handlers) {
      try {
        await handler(alert);
      } catch (error) {
        console.error('Alert handler error:', error);
      }
    }
  }

  /**
   * Trim old alerts
   */
  private _trimAlerts(): void {
    if (this._alerts.size <= this._maxAlerts) return;
    
    // Remove oldest resolved alerts first
    const resolved = this.getAlerts({ status: [AlertStatus.RESOLVED] });
    for (const alert of resolved) {
      if (this._alerts.size <= this._maxAlerts) break;
      this._alerts.delete(alert.id);
    }
  }
}
