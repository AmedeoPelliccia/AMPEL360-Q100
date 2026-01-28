# Database Schemas — ATA 96 Traceability & DPP Ledger

**Location:** `96-90-tables-schemas-index/schemas/`  
**Purpose:** Comprehensive database schema definitions for the ATA 96 traceability and Digital Product Passport system  
**Status:** Active Development

---

## Overview

This directory contains the authoritative database schema definitions for all core tables in the ATA 96 traceability system. Each schema is defined in YAML format for clarity, maintainability, and tool integration.

---

## Schema Files

### Core Schemas

#### 1. LEDGER_ENTRY_SCHEMA.yaml
**Purpose:** Immutable ledger entries with cryptographic integrity

- Supports hash chain linking for tamper evidence
- Blockchain anchoring integration
- Complete traceability of all system events
- Subject-actor-payload model for flexibility

**Key Features:**
- Cryptographic hash chain (content_hash + previous_hash)
- Digital signature verification
- Blockchain/DLT anchoring support
- Merkle tree batch anchoring
- Multi-indexed for efficient querying

**Related:** OBJ-002 (Immutability), OBJ-005 (Integrity Verification)

---

#### 2. DPP_COMPONENT_SCHEMA.yaml
**Purpose:** Digital Product Passport for aerospace components

- EU Battery Regulation (2023/1542) compliant
- Proposed ESPR (Ecodesign) ready
- Complete lifecycle tracking (as-designed, as-built, as-maintained)
- Material provenance and supply chain transparency
- Sustainability metrics (carbon footprint, circularity, recyclability)

**Key Features:**
- Configuration effectivity tracking
- Certification and compliance documentation
- Maintenance and operational history
- Digital twin integration
- REACH, RoHS, and conflict minerals compliance

**Related:** OBJ-001 (Traceability), OBJ-006 (Provenance)

---

#### 3. TOKEN_TRANSACTION_SCHEMA.yaml
**Purpose:** Teknia Token (TT) transaction tracking

- Knowledge work incentive distribution
- KNOT resolution rewards
- Vesting and approval workflows
- Token allocation and budget management

**Key Features:**
- Activity-based token grants
- Complexity-weighted allocation
- Vesting schedules (immediate, milestone, time-based)
- Approval workflows
- Hash chain for transaction integrity
- Account balance tracking

**Related:** OBJ-008 (Token Tracking Accuracy), TEKNIA_MANIFESTO.md

---

#### 4. ID_GRAMMAR_SCHEMA.yaml
**Purpose:** Identifier grammar, namespaces, and cross-system mapping

- URN namespace registry
- Entity type definitions
- ID allocation and sequencing
- Cross-system identifier mapping
- ID version history

**Key Features:**
- Collision-free ID generation
- Namespace lifecycle management
- Bidirectional external ID mapping
- ID evolution tracking
- Validation rules and patterns

**Related:** OBJ-001 (Component Traceability), 96-10 (ID Grammar)

---

#### 5. AUDIT_TRAIL_SCHEMA.yaml
**Purpose:** Comprehensive audit trails and compliance evidence

- Complete audit event logging
- Evidence pack management
- Digital signature registry
- Approval and signoff records

**Key Features:**
- Regulatory compliance tracking
- Evidence completeness validation
- eIDAS qualified signatures
- Retention policy enforcement
- Multi-dimensional audit queries

**Related:** OBJ-007 (Regulatory Compliance), 96-50 (Audit Evidence)

---

## Schema Design Principles

### 1. Immutability
- Ledger entries are append-only (no updates or deletes)
- Hash chains provide cryptographic proof of immutability
- Modifications create new entries referencing previous versions

### 2. Traceability
- All entities have URN identifiers following standardized grammar
- Explicit traceability links (source_ids, derived_from, related_entries)
- Integration with ledger for complete history

### 3. Extensibility
- JSONB fields for flexible, evolving data structures
- Metadata fields for custom extensions
- Schema versioning support

### 4. Performance
- Strategic indexing on query-critical fields
- Partitioning strategies for large tables (monthly for time-series)
- Denormalized fields where appropriate (e.g., account balances)

### 5. Integrity
- Foreign key constraints for referential integrity
- Check constraints for data validation
- Unique constraints for collision prevention
- Triggers for automatic field updates

### 6. Compliance
- Retention policies aligned with regulations
- GDPR-compliant personal data handling
- Audit trail completeness for all regulated activities
- Evidence pack structure for certification

---

## Database Technology

### Recommended: PostgreSQL 14+
- JSONB support for flexible schemas
- Advanced indexing (B-tree, GIN for full-text, GiST for spatial)
- Partitioning support
- Row-level security
- Powerful constraint system
- JSON path queries

### Alternative: TimescaleDB
- Extension of PostgreSQL for time-series data
- Automatic partitioning by time
- Efficient compression
- Continuous aggregates for analytics

---

## Schema Evolution

### Versioning Strategy
- All schemas include a `version` field
- Breaking changes require new schema version
- Migration scripts provided for version upgrades
- Backward compatibility maintained for at least 2 major versions

### Change Management
- Schema changes require ECO (Engineering Change Order)
- Changes reviewed by data governance board
- Impact analysis on dependent systems
- Rollback procedures documented

---

## Implementation Guidelines

### 1. Table Creation
```sql
-- Example: Create ledger_entries table
CREATE TABLE ledger_entries (
  entry_id UUID PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  entry_type VARCHAR(50) NOT NULL,
  -- ... (see LEDGER_ENTRY_SCHEMA.yaml for complete definition)
);

-- Create indexes
CREATE INDEX idx_ledger_timestamp ON ledger_entries(timestamp);
CREATE INDEX idx_ledger_subject ON ledger_entries(subject_type, subject_id);
```

### 2. Validation
- Use database constraints for validation where possible
- Application-level validation for complex business rules
- JSON Schema validation for JSONB fields

### 3. Security
- Row-level security (RLS) policies for multi-tenant isolation
- Encryption at rest for sensitive fields
- Audit logging on all DML operations

### 4. Backup & Recovery
- Point-in-time recovery (PITR) enabled
- Regular backups with 7-year retention
- Archival to cold storage for older partitions
- Disaster recovery procedures documented

---

## Integration Points

### Ledger Service
- Inserts entries into `ledger_entries` table
- Calculates and validates hash chains
- Triggers blockchain anchoring for critical entries

### DPP Service
- Manages `dpp_components` table
- Links to ledger entries for history
- Exports DPPs in various formats (JSON, XML, PDF)

### Token Service
- Processes transactions in `token_transactions` table
- Maintains account balances
- Enforces vesting and approval rules

### ID Service
- Allocates IDs from `id_allocations` table
- Manages namespace registry
- Provides ID mapping and resolution

### Audit Service
- Logs events to `audit_events` table
- Creates and manages evidence packs
- Verifies digital signatures

---

## Usage Examples

See individual schema files for detailed SQL examples including:
- INSERT statements for creating records
- SELECT queries for common use cases
- UPDATE patterns (where applicable)
- Verification and validation queries
- Performance optimization hints

---

## Testing

### Schema Validation
- SQL syntax validation
- Constraint testing (valid and invalid data)
- Index performance testing
- Partitioning verification

### Data Integrity
- Foreign key constraint verification
- Check constraint validation
- Unique constraint testing
- Trigger functionality

### Performance
- Query performance benchmarking
- Index effectiveness analysis
- Partitioning performance
- Concurrent access testing

---

## Documentation Standards

Each schema file includes:
1. **Metadata**: Version, description, authority, references
2. **Column Definitions**: Complete with types, constraints, descriptions
3. **Indexes**: All indexes with rationale
4. **Constraints**: PKs, FKs, unique, check constraints
5. **Related Schemas**: Cross-references
6. **Usage Examples**: SQL queries demonstrating common operations
7. **Regulatory Mapping**: Links to compliance requirements

---

## Related Documentation

- [96-10 ID Grammar & Namespaces](../96-10-identifier-grammar-namespaces/README.md)
- [96-30 Ledger Anchoring](../96-30-ledger-anchoring-hash-chain/README.md)
- [96-40 DPP/SBOM](../96-40-dpp-sbom-and-config-effectivity/README.md)
- [96-50 Audit Evidence](../96-50-audit-evidence-packs-and-signoffs/README.md)
- [SYSTEM_OBJECTIVES](../../WBS/SYSTEM_OBJECTIVES.md)
- [TRACEABILITY_CONVENTIONS](../../TRACEABILITY_CONVENTIONS.md)

---

## Questions & Support

For schema-related questions:
- Review this README and individual schema files
- Check GENESIS/Y-KNOTS.csv for known schema design uncertainties
- Consult with ATA-96 Data Architecture team
- Submit schema change proposals via ECR process

---

**Last Updated:** 2026-01-28  
**Schema Version:** 1.0.0  
**Next Review:** PDR (Preliminary Design Review)
