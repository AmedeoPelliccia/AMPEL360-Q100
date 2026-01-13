# Unit Database Configuration Management

## 1. Purpose

Define configuration management procedures for the AMPEL360 Q100 unit conversion database, ensuring accuracy, traceability, and controlled updates.

## 2. Scope

### Configuration Items

| Item ID | Description | Baseline |
|---------|-------------|----------|
| CI-UNIT-001 | Unit definitions table | BL-001 |
| CI-UNIT-002 | Conversion factors table | BL-001 |
| CI-UNIT-003 | Display format rules | BL-001 |
| CI-UNIT-004 | H₂-specific constants | BL-001 |
| CI-UNIT-005 | Precision rules | BL-001 |

## 3. Database Schema

### 3.1 Units Table

```sql
CREATE TABLE units (
    unit_id VARCHAR(20) PRIMARY KEY,
    unit_name VARCHAR(100) NOT NULL,
    unit_symbol VARCHAR(20) NOT NULL,
    unit_category VARCHAR(50) NOT NULL,
    si_base BOOLEAN DEFAULT FALSE,
    display_precision INTEGER DEFAULT 2,
    created_date TIMESTAMP DEFAULT NOW(),
    modified_date TIMESTAMP,
    version INTEGER DEFAULT 1,
    status VARCHAR(20) DEFAULT 'ACTIVE'
);
```

### 3.2 Conversion Factors Table

```sql
CREATE TABLE conversion_factors (
    conversion_id SERIAL PRIMARY KEY,
    from_unit_id VARCHAR(20) REFERENCES units(unit_id),
    to_unit_id VARCHAR(20) REFERENCES units(unit_id),
    factor NUMERIC(30,15) NOT NULL,
    offset_value NUMERIC(20,10) DEFAULT 0,
    formula VARCHAR(200),
    source VARCHAR(100),
    uncertainty NUMERIC(10,8),
    created_date TIMESTAMP DEFAULT NOW(),
    modified_date TIMESTAMP,
    version INTEGER DEFAULT 1,
    UNIQUE(from_unit_id, to_unit_id)
);
```

### 3.3 H₂ Constants Table

```sql
CREATE TABLE h2_constants (
    constant_id VARCHAR(30) PRIMARY KEY,
    constant_name VARCHAR(100) NOT NULL,
    value NUMERIC(30,15) NOT NULL,
    unit_id VARCHAR(20) REFERENCES units(unit_id),
    source VARCHAR(100),
    temperature_k NUMERIC(10,4),
    pressure_bar NUMERIC(10,4),
    uncertainty NUMERIC(10,8),
    notes TEXT,
    version INTEGER DEFAULT 1
);
```

## 4. Initial Data Load

### 4.1 Base SI Units

```yaml
units:
  - unit_id: SI-M
    unit_name: meter
    unit_symbol: m
    unit_category: length
    si_base: true
    
  - unit_id: SI-KG
    unit_name: kilogram
    unit_symbol: kg
    unit_category: mass
    si_base: true
    
  - unit_id: SI-K
    unit_name: kelvin
    unit_symbol: K
    unit_category: temperature
    si_base: true
    
  - unit_id: SI-PA
    unit_name: pascal
    unit_symbol: Pa
    unit_category: pressure
    si_base: true
    
  - unit_id: SI-J
    unit_name: joule
    unit_symbol: J
    unit_category: energy
    si_base: true
```

### 4.2 Key Conversion Factors

```yaml
conversion_factors:
  - from: SI-K
    to: UNIT-DEGC
    factor: 1
    offset: -273.15
    formula: "°C = K - 273.15"
    source: BIPM SI Brochure
    uncertainty: 0
    
  - from: UNIT-BAR
    to: UNIT-PSI
    factor: 14.503773773
    offset: 0
    source: NIST SP 811
    uncertainty: 0.000000001
    
  - from: UNIT-MJKG
    to: UNIT-KWHKG
    factor: 0.277777778
    offset: 0
    source: Derived
    uncertainty: 0
```

### 4.3 H₂ Constants

```yaml
h2_constants:
  - constant_id: H2-BOILING-POINT
    constant_name: LH₂ Boiling Point (1 atm)
    value: 20.28
    unit_id: SI-K
    source: NIST Chemistry WebBook
    pressure_bar: 1.01325
    uncertainty: 0.01
    
  - constant_id: H2-ENERGY-DENSITY-GRAV
    constant_name: LH₂ Gravimetric Energy Density
    value: 120
    unit_id: UNIT-MJKG
    source: DOE Hydrogen Program
    uncertainty: 1
    
  - constant_id: H2-DENSITY-LIQUID
    constant_name: LH₂ Density (1 atm, 20.28 K)
    value: 70.85
    unit_id: UNIT-KGM3
    source: NIST
    temperature_k: 20.28
    pressure_bar: 1.01325
    uncertainty: 0.01
```

## 5. Change Control Process

### 5.1 Change Categories

| Category | Description | Approval |
|----------|-------------|----------|
| A | Editorial (typos, formatting) | STK_CM |
| B | Precision update | STK_CM + STK_SE |
| C | New unit/conversion | CCB |
| D | Constant modification | CCB + STK_SAF |

### 5.2 Change Request Workflow

```
1. CR Submission
   └─► CR-UNIT-YYYY-NNN format
   
2. Impact Assessment
   ├─► Affected documents
   ├─► Affected displays
   └─► Safety impact
   
3. Approval (per category)

4. Implementation
   ├─► Database update
   ├─► Increment version
   ├─► Update modified_date
   └─► Audit log entry
   
5. Verification
   ├─► Run TC-UNIT test suite
   └─► Validate affected systems
   
6. Release
   └─► Update baseline version
```

## 6. Audit Trail

### 6.1 Logging Requirements

All changes logged with:
- Timestamp (UTC)
- User ID
- Previous value
- New value
- Change reason
- CR reference

### 6.2 Audit Table

```sql
CREATE TABLE unit_audit_log (
    audit_id SERIAL PRIMARY KEY,
    table_name VARCHAR(50),
    record_id VARCHAR(50),
    field_name VARCHAR(50),
    old_value TEXT,
    new_value TEXT,
    change_reason TEXT,
    cr_reference VARCHAR(30),
    user_id VARCHAR(50),
    change_timestamp TIMESTAMP DEFAULT NOW()
);
```

## 7. Backup and Recovery

- Daily backup: 02:00 UTC (with terminology DB)
- Transaction log: Continuous
- Recovery test: Weekly (part of DR tests)
- Retention: 7 years (certification requirement)

## 8. Version Control

### Current Baseline: BL-001

| CI | Version | Date | Status |
|----|---------|------|--------|
| CI-UNIT-001 | 1.0 | 2026-01-12 | Active |
| CI-UNIT-002 | 1.0 | 2026-01-12 | Active |
| CI-UNIT-003 | 1.0 | 2026-01-12 | Active |
| CI-UNIT-004 | 1.0 | 2026-01-12 | Active |
| CI-UNIT-005 | 1.0 | 2026-01-12 | Active |

## 9. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-005-REQ-001 | Unit System Requirements |
| KNU-00-00-005-ICD-001 | Unit Conversion Interface |
| KNU-00-00-001-CM-001 | Terminology Change Control |

| Traced From | Artifact |
|-------------|----------|
| KNOT-00-00-005 | Parent KNOT |

## 10. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial release |
