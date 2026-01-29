/**
 * AMPEL360 Q100 Digital Twin Runtime
 * 
 * Main entry point for the Digital Twin system providing:
 * - Real-time system health monitoring
 * - Diagnostics and reporting
 * - Model feeding and synchronization
 * - ASIT/ASIGT framework integration
 * 
 * @module digital_twin
 * @version 1.0.0
 */

// Core Models
export { ComponentModel, ComponentState, ComponentHealth } from './models/ComponentModel';
export { AircraftModel } from './models/AircraftModel';
export { FuelSystemModel } from './models/FuelSystemModel';
export { ElectricalSystemModel } from './models/ElectricalSystemModel';

// Connectors
export { BaseConnector, ConnectorConfig, ConnectionStatus } from './connectors/BaseConnector';
export { ARINC429Connector } from './connectors/ARINC429Connector';
export { MQTTConnector } from './connectors/MQTTConnector';

// Sync Engine
export { SyncManager, SyncConfig, SyncResult } from './sync_engine/SyncManager';
export { StateStore } from './sync_engine/StateStore';
export { EventBus, EventHandler } from './sync_engine/EventBus';

// Health Monitoring
export { HealthMonitor, HealthStatus, HealthReport } from './health_monitoring/HealthMonitor';
export { DiagnosticsEngine, DiagnosticResult } from './health_monitoring/DiagnosticsEngine';
export { AlertManager, Alert, AlertSeverity } from './health_monitoring/AlertManager';

// Validation
export { ModelValidator, ValidationResult } from './validation/ModelValidator';
export { DataQualityChecker } from './validation/DataQualityChecker';

// Visualization
export { DashboardManager } from './visualization/DashboardManager';
export { RealTimeChart } from './visualization/RealTimeChart';

// Version
export const VERSION = '1.0.0';

// ASIT/ASIGT Framework Constants
export const FRAMEWORK = {
  name: 'ASIT-ASIGT',
  version: '1.0.0',
  standards: {
    technicalPublications: 'S1000D (Issue 4.x / 5.0)',
    systemStructure: 'ATA iSpec 2200',
    systemsEngineering: 'ARP4754A',
    safety: 'ARP4761',
    softwareAssurance: 'DO-178C',
    quality: 'AS9100'
  }
};
