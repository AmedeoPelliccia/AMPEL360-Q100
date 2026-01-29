/**
 * Real-Time Chart for Digital Twin
 * 
 * Data structures and utilities for real-time chart
 * visualization of time-series data.
 * 
 * @module digital_twin/visualization
 */

/**
 * Chart data point
 */
export interface ChartDataPoint {
  /** Timestamp */
  timestamp: string;
  /** Value */
  value: number;
  /** Optional label */
  label?: string;
}

/**
 * Chart series
 */
export interface ChartSeries {
  /** Series ID */
  id: string;
  /** Series name */
  name: string;
  /** Data points */
  data: ChartDataPoint[];
  /** Line color */
  color?: string;
  /** Line style */
  style?: 'solid' | 'dashed' | 'dotted';
  /** Fill area under line */
  fill?: boolean;
}

/**
 * Chart configuration
 */
export interface ChartConfig {
  /** Chart type */
  type: 'line' | 'area' | 'bar' | 'scatter';
  /** Time range to display */
  timeRange: string;
  /** X-axis label */
  xAxisLabel?: string;
  /** Y-axis label */
  yAxisLabel?: string;
  /** Y-axis range */
  yRange?: { min: number; max: number };
  /** Show legend */
  showLegend?: boolean;
  /** Show grid */
  showGrid?: boolean;
  /** Animation enabled */
  animated?: boolean;
}

/**
 * Real-Time Chart - Time-series data management
 */
export class RealTimeChart {
  private _series: Map<string, ChartSeries> = new Map();
  private _config: ChartConfig;
  private _maxDataPoints: number;

  constructor(config: Partial<ChartConfig> = {}, maxDataPoints: number = 1000) {
    this._config = {
      type: 'line',
      timeRange: '1h',
      showLegend: true,
      showGrid: true,
      animated: true,
      ...config
    };
    this._maxDataPoints = maxDataPoints;
  }

  /**
   * Get chart configuration
   */
  get config(): ChartConfig {
    return { ...this._config };
  }

  /**
   * Add a series
   */
  addSeries(series: Omit<ChartSeries, 'data'>): void {
    this._series.set(series.id, {
      ...series,
      data: []
    });
  }

  /**
   * Remove a series
   */
  removeSeries(seriesId: string): void {
    this._series.delete(seriesId);
  }

  /**
   * Add data point to series
   */
  addDataPoint(seriesId: string, point: ChartDataPoint): void {
    const series = this._series.get(seriesId);
    if (!series) return;
    
    series.data.push(point);
    
    // Trim data if needed
    if (series.data.length > this._maxDataPoints) {
      series.data = series.data.slice(-this._maxDataPoints);
    }
    
    // Sort by timestamp
    series.data.sort((a, b) => 
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }

  /**
   * Add multiple data points
   */
  addDataPoints(seriesId: string, points: ChartDataPoint[]): void {
    const series = this._series.get(seriesId);
    if (!series || points.length === 0) return;

    // Append all points at once
    series.data.push(...points);

    // Trim data if needed (keep only the most recent _maxDataPoints entries)
    if (series.data.length > this._maxDataPoints) {
      series.data = series.data.slice(-this._maxDataPoints);
    }

    // Sort by timestamp once after bulk insertion
    series.data.sort((a, b) =>
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }

  /**
   * Get series data
   */
  getSeries(seriesId: string): ChartSeries | undefined {
    return this._series.get(seriesId);
  }

  /**
   * Get all series
   */
  getAllSeries(): ChartSeries[] {
    return Array.from(this._series.values());
  }

  /**
   * Get data within time range
   */
  getDataInRange(seriesId: string, startTime: Date, endTime: Date): ChartDataPoint[] {
    const series = this._series.get(seriesId);
    if (!series) return [];
    
    return series.data.filter(point => {
      const time = new Date(point.timestamp).getTime();
      return time >= startTime.getTime() && time <= endTime.getTime();
    });
  }

  /**
   * Get data for configured time range
   */
  getCurrentRangeData(): Record<string, ChartDataPoint[]> {
    const endTime = new Date();
    const startTime = this._parseTimeRange(this._config.timeRange, endTime);
    
    const result: Record<string, ChartDataPoint[]> = {};
    
    for (const id of this._series.keys()) {
      result[id] = this.getDataInRange(id, startTime, endTime);
    }
    
    return result;
  }

  /**
   * Calculate statistics for a series
   */
  getStatistics(seriesId: string): {
    min: number;
    max: number;
    avg: number;
    latest: number;
    count: number;
  } | null {
    const series = this._series.get(seriesId);
    if (!series || series.data.length === 0) return null;
    
    const values = series.data.map(d => d.value);
    
    return {
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a, b) => a + b, 0) / values.length,
      latest: values[values.length - 1],
      count: values.length
    };
  }

  /**
   * Clear all data
   */
  clearData(seriesId?: string): void {
    if (seriesId) {
      const series = this._series.get(seriesId);
      if (series) {
        series.data = [];
      }
    } else {
      for (const series of this._series.values()) {
        series.data = [];
      }
    }
  }

  /**
   * Export chart data
   */
  exportData(): {
    config: ChartConfig;
    series: ChartSeries[];
    exportedAt: string;
  } {
    return {
      config: this.config,
      series: this.getAllSeries(),
      exportedAt: new Date().toISOString()
    };
  }

  /**
   * Parse time range string to start date
   */
  private _parseTimeRange(range: string, endTime: Date): Date {
    const match = range.match(/^(\d+)([mhd])$/);
    if (!match) {
      // Default to 1 hour
      return new Date(endTime.getTime() - 60 * 60 * 1000);
    }
    
    const value = parseInt(match[1], 10);
    const unit = match[2];
    
    let milliseconds: number;
    switch (unit) {
      case 'm': milliseconds = value * 60 * 1000; break;
      case 'h': milliseconds = value * 60 * 60 * 1000; break;
      case 'd': milliseconds = value * 24 * 60 * 60 * 1000; break;
      default: milliseconds = 60 * 60 * 1000;
    }
    
    return new Date(endTime.getTime() - milliseconds);
  }
}
