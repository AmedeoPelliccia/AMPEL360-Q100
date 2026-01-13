---
knu_id: KNU-00-00-005-ICD-002
knot_id: KNOT-00-00-005
title: Unit Provenance Metadata Schema
type: ICD
artifact_class: SSOT
status: GENERATED
owner: STK_DATA
contributors:
  - STK_SE
  - STK_CERT
  - STK_PUB
  - STK_AI
due_date: 2026-03-15
priority: HIGH
lifecycle_stage: LC04_DESIGN_DEFINITION
ata_chapter: "00"
ata_section: "00"
program: AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft
version: I001-R00
date_created: 2026-01-13
spawned_by: KNU-00-00-005-REQ-001
related_tbds:
  - TBD-00-00-005-REQ-001-005
resolves_tbds:
  - TBD-00-00-005-REQ-001-005
asit_context:
  domain: meta_system
  user_roles:
    - engineer
    - author
    - translator
    - asit_transponder
  output_formats:
    - all
  transponder_modes:
    - MODE_SSOT
    - MODE_DM
    - MODE_UI
    - MODE_CERT
  priority: BLOCKING
---

# KNU-00-00-005-ICD-002: Unit Provenance Metadata Schema

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-00-00-005-ICD-002 |
| **KNOT ID** | KNOT-00-00-005 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_DATA |
| **Contributors** | STK_SE, STK_CERT, STK_PUB, STK_AI |
| **Due Date** | 2026-03-15 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |

---

## 1. Purpose

This Interface Control Document defines the **Unit Provenance Metadata Schema** for the AMPEL360 Q100 program. The schema enables:

1. **Context-aware unit reasoning** by the A.S.I.T. transponder
2. **Traceability** of numeric values from authoring through storage to display
3. **Certification compliance** through full audit trail of unit transformations
4. **Multi-domain authoring** with domain-specific primary units while maintaining canonical SI storage

This ICD directly satisfies **REQ-005-005** from KNU-00-00-005-REQ-001 and resolves **TBD-00-00-005-REQ-001-005**.

---

## 2. Scope

### 2.1 In-Scope

- YAML/JSON schema definitions for unit provenance metadata
- Required and optional fields for numeric values in SSOT artifacts
- Validation rules and constraints
- A.S.I.T. transponder integration requirements
- Examples for all domain types per Table 2.1 of KNU-00-00-005-REQ-001

### 2.2 Out-of-Scope

- Unit conversion algorithms (defined in KNU-00-00-005-ICD-001)
- S1000D CSDB encoding specifics (defined in KNU-00-00-005-ICD-003)
- Display formatting rules (defined in KNU-00-00-005-REQ-001)

---

## 3. Applicable Documents

| Document | Relevance |
|----------|-----------|
| KNU-00-00-005-REQ-001 | Unit System Requirements (parent) |
| KNU-00-00-005-ICD-001 | Unit Conversion Table Specification |
| KNU-00-00-005-ICD-003 | CSDB Unit Integration Specification (planned) |
| ISO 80000-1 | SI Units standard |
| ICAO Annex 5 | Aviation unit conventions |
| JSON Schema Draft 2020-12 | Schema validation standard |

---

## 4. Schema Definition

### 4.1 Core Schema (JSON Schema)

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ampel360.aero/schemas/unit-provenance/v1.0.0",
  "title": "AMPEL360 Unit Provenance Metadata Schema",
  "description": "Schema for unit provenance metadata in SSOT artifacts per KNU-00-00-005-ICD-002",
  "type": "object",
  
  "properties": {
    "canonical_value": {
      "type": "number",
      "description": "The authoritative value stored in SI canonical units"
    },
    "canonical_unit": {
      "type": "string",
      "description": "SI unit symbol (e.g., 'Pa', 'm', 'kg', 'K', 'm³', 'kg⋅m⁻²⋅s⁻²')",
      "pattern": "^[A-Za-z0-9°µ⋅·/²³⁻¹⁴⁵⁶⁷⁸⁹⁰₀₁₂₃₄₅₆₇₈₉\\-%]+$"
    },
    "primary_value": {
      "type": "number",
      "description": "Value in domain-specific authoring unit"
    },
    "primary_unit": {
      "type": "string",
      "description": "Domain convention unit symbol (e.g., 'bar', 'ft', 'kt')"
    },
    "domain": {
      "type": "string",
      "description": "Domain identifier from Table 2.1",
      "enum": [
        "mass_properties",
        "structures_loads",
        "aerodynamics_performance",
        "flight_operations",
        "electrical_power",
        "energy_storage",
        "cryogenic_LH2",
        "pressure_systems",
        "hydraulic_systems",
        "publications"
      ]
    },
    "display_unit": {
      "type": "string",
      "description": "Context-specific override for display (optional)"
    },
    "tolerance": {
      "type": "object",
      "description": "Measurement tolerance specification",
      "properties": {
        "value": { "type": "number" },
        "unit": { "type": "string" },
        "type": { 
          "type": "string",
          "enum": ["symmetric", "asymmetric_plus", "asymmetric_minus"]
        }
      }
    },
    "source": {
      "type": "string",
      "description": "KNU ID or external reference where value originated"
    },
    "calculation_method": {
      "type": "string",
      "description": "Reference to calculation or analysis method"
    },
    "ata_chapter": {
      "type": "string",
      "description": "ATA chapter number (e.g., '24', '28', '79')",
      "pattern": "^[0-9]{2}$"
    },
    "timestamp_utc": {
      "type": "string",
      "format": "date-time",
      "description": "ISO 8601 timestamp of value creation/update"
    }
  },
  
  "required": [
    "canonical_value",
    "canonical_unit",
    "primary_unit",
    "primary_value",
    "domain"
  ],
  
  "additionalProperties": false
}
```

### 4.2 YAML Schema Equivalent

```yaml
# AMPEL360 Unit Provenance Metadata Schema v1.0.0
# Per KNU-00-00-005-ICD-002

# Required fields
canonical_value: <float>        # SI value (e.g., 300000)
canonical_unit: <string>        # SI symbol (e.g., "Pa")
primary_value: <float>          # Domain value (e.g., 3.0)
primary_unit: <string>          # Domain symbol (e.g., "bar")
domain: <enum>                  # Domain identifier

# Optional fields
display_unit: <string>          # Context-specific display override
tolerance:
  value: <float>
  unit: <string>
  type: <enum: symmetric|asymmetric_plus|asymmetric_minus>
source: <string>                # Origin KNU ID or reference
calculation_method: <string>    # Method reference
ata_chapter: <string>           # ATA chapter (e.g., "79")
timestamp_utc: <datetime>       # ISO 8601 timestamp
```

---

## 5. Domain Mappings

### 5.1 Domain Identifier to Table 2.1 Mapping

| Domain Identifier | Description | Primary Units | Canonical Units |
|-------------------|-------------|---------------|-----------------|
| `mass_properties` | ATA 08 Weight & Balance | kg, m, N | SI |
| `structures_loads` | ATA 51-57 Structures | N, kN, Pa, MPa | SI |
| `aerodynamics_performance` | Aero/Performance | SI + aviation practice | SI |
| `flight_operations` | Flight Procedures | kt, ft, NM | SI (stored) |
| `electrical_power` | ATA 24 Electrical | V, A, W, kW | SI |
| `energy_storage` | ATA 28 Battery/H₂ | J, kJ, MJ, kWh, kg | SI |
| `cryogenic_LH2` | ATA 28-30 Cryogenic | K, kg, Pa | SI |
| `pressure_systems` | Pneumatic/GH₂ | Pa, kPa, MPa | SI |
| `hydraulic_systems` | ATA 29 Hydraulics | bar, L/min | SI (Pa, m³/s) |
| `publications` | AMM, IPC, AFM | operator convention | SI (source) |

### 5.2 Allowed Unit Combinations

```yaml
unit_combinations:
  mass_properties:
    primary: ["kg", "m", "N", "m²", "kg⋅m²"]
    canonical: ["kg", "m", "N", "m²", "kg⋅m²"]
    secondary: ["lb", "in", "ft", "lbf"]
    
  structures_loads:
    primary: ["N", "kN", "MN", "Pa", "kPa", "MPa", "GPa"]
    canonical: ["N", "Pa"]
    secondary: ["lbf", "psi", "ksi", "in"]
    
  aerodynamics_performance:
    primary: ["m/s", "m", "Pa", "K", "kg", "N"]
    canonical: ["m/s", "m", "Pa", "K", "kg", "N"]
    secondary: ["kt", "ft", "NM", "hPa"]
    
  flight_operations:
    primary: ["kt", "ft", "NM", "ft/min"]
    canonical: ["m/s", "m", "m", "m/s"]
    secondary: ["kt", "ft", "NM", "ft/min"]
    
  electrical_power:
    primary: ["V", "A", "W", "kW", "MW", "Wh", "kWh"]
    canonical: ["V", "A", "W", "J"]
    secondary: ["hp"]
    
  energy_storage:
    primary: ["J", "kJ", "MJ", "kWh", "kg"]
    canonical: ["J", "kg"]
    secondary: ["BTU", "lb"]
    
  cryogenic_LH2:
    primary: ["K", "kg", "Pa", "kg/m³"]
    canonical: ["K", "kg", "Pa", "kg/m³"]
    secondary: ["°C", "bar", "kPa", "L"]
    
  pressure_systems:
    primary: ["Pa", "kPa", "MPa", "bar"]
    canonical: ["Pa"]
    secondary: ["bar", "psi", "atm"]
    
  hydraulic_systems:
    primary: ["bar", "L/min", "L"]
    canonical: ["Pa", "m³/s", "m³"]
    secondary: ["psi", "gal/min", "gal"]
    
  publications:
    primary: ["varies"]
    canonical: ["SI"]
    secondary: ["dual-unit per operator"]
```

---

## 6. Validation Rules

### 6.1 Required Field Validation

```python
def validate_unit_provenance(data: dict) -> list[str]:
    """
    Validate unit provenance metadata per KNU-00-00-005-ICD-002.
    Returns list of validation errors (empty if valid).
    """
    errors = []
    
    # Check required fields
    required = ['canonical_value', 'canonical_unit', 
                'primary_value', 'primary_unit', 'domain']
    for field in required:
        if field not in data:
            errors.append(f"Missing required field: {field}")
    
    # Validate domain enum
    valid_domains = [
        'mass_properties', 'structures_loads', 'aerodynamics_performance',
        'flight_operations', 'electrical_power', 'energy_storage',
        'cryogenic_LH2', 'pressure_systems', 'hydraulic_systems', 'publications'
    ]
    if data.get('domain') not in valid_domains:
        errors.append(f"Invalid domain: {data.get('domain')}")
    
    # Validate numeric values
    if not isinstance(data.get('canonical_value'), (int, float)):
        errors.append("canonical_value must be numeric")
    if not isinstance(data.get('primary_value'), (int, float)):
        errors.append("primary_value must be numeric")
    
    # Validate unit consistency with domain
    domain = data.get('domain')
    primary_unit = data.get('primary_unit')
    if domain and primary_unit:
        if not is_valid_primary_unit(domain, primary_unit):
            errors.append(f"Invalid primary_unit '{primary_unit}' for domain '{domain}'")
    
    return errors
```

### 6.2 Consistency Checks

```python
def validate_consistency(data: dict, conversion_db: dict) -> list[str]:
    """
    Validate that canonical and primary values are consistent.
    """
    errors = []
    
    canonical = data.get('canonical_value')
    primary = data.get('primary_value')
    canonical_unit = data.get('canonical_unit')
    primary_unit = data.get('primary_unit')
    
    # Skip if missing required values
    if any(v is None for v in [canonical, primary, canonical_unit, primary_unit]):
        return errors  # Missing values handled by required field validation
    
    try:
        # Convert primary to canonical and compare
        expected_canonical = convert(primary, primary_unit, canonical_unit, conversion_db)
        
        # Allow 0.01% tolerance for floating-point precision
        tolerance = abs(expected_canonical) * 0.0001 if expected_canonical != 0 else 0.0001
        if abs(canonical - expected_canonical) > tolerance:
            errors.append(
                f"Inconsistent values: canonical={canonical} {canonical_unit}, "
                f"primary={primary} {primary_unit} converts to {expected_canonical}"
            )
    except (KeyError, ValueError) as e:
        errors.append(f"Conversion error: {e}")
    except TypeError as e:
        errors.append(f"Type error during conversion: {e}")
    
    return errors
```

---

## 7. A.S.I.T. Integration

### 7.1 Transponder Extraction Interface

```python
class UnitProvenanceExtractor:
    """
    A.S.I.T. transponder component for extracting unit provenance.
    Implements REQ-005-003 context-aware display unit selection.
    """
    
    def __init__(self, schema_path: str, domain_table_path: str):
        self.schema = self._load_schema(schema_path)
        self.domain_table = self._load_domain_table(domain_table_path)
    
    def extract_provenance(self, ssot_value: dict) -> dict:
        """
        Extract unit provenance from SSOT value.
        
        INPUT:
          ssot_value = {
            "canonical_value": 300000,
            "canonical_unit": "Pa",
            "primary_value": 3.0,
            "primary_unit": "bar",
            "domain": "pressure_systems"
          }
        
        OUTPUT:
          {
            "canonical": {"value": 300000, "unit": "Pa"},
            "primary": {"value": 3.0, "unit": "bar"},
            "domain": "pressure_systems",
            "valid": True,
            "errors": []
          }
        """
        errors = validate_unit_provenance(ssot_value)
        
        return {
            "canonical": {
                "value": ssot_value.get("canonical_value"),
                "unit": ssot_value.get("canonical_unit")
            },
            "primary": {
                "value": ssot_value.get("primary_value"),
                "unit": ssot_value.get("primary_unit")
            },
            "domain": ssot_value.get("domain"),
            "valid": len(errors) == 0,
            "errors": errors
        }
    
    def select_display_unit(self, ssot_value: dict, user_context: dict) -> str:
        """
        Select appropriate display unit based on user context.
        Implements REQ-005-003 from KNU-00-00-005-REQ-001.
        
        INPUT:
          ssot_value = {
            "canonical_unit": "Pa",
            "primary_unit": "bar",
            "domain": "pressure_systems"
          }
          user_context = {
            "role": "mechanic",
            "locale": "en-US",
            "output_format": "AMM"
          }
        
        OUTPUT: "psi" (US mechanic preference)
        """
        domain = ssot_value.get("domain")
        role = user_context.get("role")
        locale = user_context.get("locale", "en-US")
        output_format = user_context.get("output_format")
        
        # Special case: Pilots always get aviation practice units
        if role == "pilot":
            return self._aviation_practice_units(ssot_value.get("canonical_unit"))
        
        # Check domain conventions
        convention = self.domain_table.get(domain, {})
        secondary_units = convention.get("secondary", [])
        
        # Locale-based selection
        if locale == "en-US" and "psi" in secondary_units:
            return "psi"
        elif locale.startswith("en-") and "bar" in secondary_units:
            return "bar"
        elif "bar" in secondary_units:
            return "bar"
        else:
            return ssot_value.get("primary_unit")
    
    def _aviation_practice_units(self, canonical_unit: str) -> str:
        """Aviation practice overrides per ICAO Annex 5."""
        mapping = {
            "m": "ft",
            "m/s": "kt",
            "Pa": "hPa",
            "K": "°C"
        }
        return mapping.get(canonical_unit, canonical_unit)
```

### 7.2 Traceability Metadata

```yaml
# A.S.I.T. output metadata structure
asit_output_metadata:
  original_ssot:
    knu_id: "KNU-79-10-001-SAF-001"
    parameter: "pressure.tank_pressure"
    canonical_value: 300000
    canonical_unit: "Pa"
  
  transformation:
    applied_rule: "REQ-005-003"
    user_context:
      role: "mechanic"
      locale: "en-US"
      output_format: "AMM"
    selected_display_unit: "psi"
    converted_value: 43.5
    conversion_factor: 0.000145038
    
  audit_trail:
    timestamp: "2026-01-13T10:45:23Z"
    asit_version: "1.3.0"
    conversion_database: "v2.1.0"
    schema_version: "1.0.0"
```

---

## 8. Examples

### 8.1 Cryogenic Temperature (LH₂)

```yaml
tank_temperature:
  canonical_value: 20.3
  canonical_unit: "K"
  primary_value: -252.85
  primary_unit: "°C"
  domain: "cryogenic_LH2"
  tolerance:
    value: 0.5
    unit: "K"
    type: symmetric
  source: "KNU-28-10-001-SAF-001"
  ata_chapter: "28"
  timestamp_utc: "2026-01-13T10:00:00Z"
```

### 8.2 Pressure (GH₂ Storage)

```yaml
storage_pressure:
  canonical_value: 70000000
  canonical_unit: "Pa"
  primary_value: 700
  primary_unit: "bar"
  domain: "pressure_systems"
  display_unit: "psi"  # US operator override
  tolerance:
    value: 5
    unit: "bar"
    type: symmetric
  source: "KNU-28-20-001-REQ-001"
  ata_chapter: "28"
```

### 8.3 Flight Operations (Speed)

```yaml
cruise_speed:
  canonical_value: 128.6
  canonical_unit: "m/s"
  primary_value: 250
  primary_unit: "kt"
  domain: "flight_operations"
  # display_unit defaults to primary_unit for flight ops
  source: "KNU-22-10-001-REQ-001"
  ata_chapter: "22"
```

### 8.4 Electrical Power

```yaml
fuel_cell_output:
  canonical_value: 1500000
  canonical_unit: "W"
  primary_value: 1500
  primary_unit: "kW"
  domain: "electrical_power"
  display_unit: "hp"  # For shaft power comparison
  source: "KNU-24-20-001-ANA-001"
  ata_chapter: "24"
```

### 8.5 Hydraulic System

```yaml
system_pressure:
  canonical_value: 20684271.7
  canonical_unit: "Pa"
  primary_value: 3000
  primary_unit: "psi"
  domain: "hydraulic_systems"
  tolerance:
    value: 50
    unit: "psi"
    type: symmetric
  source: "KNU-29-10-001-REQ-001"
  ata_chapter: "29"
```

---

## 9. CI/CD Integration

### 9.1 Schema Validation in CI

```yaml
# .github/workflows/unit-provenance-validation.yml
name: Unit Provenance Schema Validation

on:
  push:
    paths:
      - 'OPT-IN_FRAMEWORK/**/SSOT/**/*.yaml'
      - 'OPT-IN_FRAMEWORK/**/SSOT/**/*.yml'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Install jsonschema
        run: pip install jsonschema pyyaml
      
      - name: Validate unit provenance metadata
        run: |
          python scripts/validate_unit_provenance.py \
            --schema schemas/unit-provenance-v1.0.0.json \
            --path OPT-IN_FRAMEWORK/
```

### 9.2 Automated Consistency Check

```python
#!/usr/bin/env python3
"""
validate_unit_provenance.py
CI/CD script for validating unit provenance metadata.
Per KNU-00-00-005-ICD-002.
"""

import argparse
import json
import yaml
from pathlib import Path
from jsonschema import validate, ValidationError


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--schema', required=True)
    parser.add_argument('--path', required=True)
    args = parser.parse_args()
    
    # Load schema
    with open(args.schema) as f:
        schema = json.load(f)
    
    # Find all YAML files with unit provenance
    errors = []
    for yaml_file in Path(args.path).rglob('*.yaml'):
        with open(yaml_file) as f:
            data = yaml.safe_load(f)
        
        # Check if data contains unit provenance metadata
        if isinstance(data, dict) and 'canonical_value' in data:
            try:
                validate_recursive(data, schema)
            except ValidationError as e:
                errors.append(f"{yaml_file}: {e.message}")
    
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        exit(1)
    
    print("✅ All unit provenance metadata validated successfully")


if __name__ == '__main__':
    main()
```

---

## 10. Traceability

### 10.1 Upstream References

| Source | Relevance |
|--------|-----------|
| KNU-00-00-005-REQ-001 | REQ-005-005 requires unit provenance metadata |
| TBD-00-00-005-REQ-001-005 | This ICD resolves the metadata schema TBD |
| KNOT-00-00-005 | Parent problem statement |

### 10.2 Downstream References

| Target | Purpose |
|--------|---------|
| KNU-00-00-005-ICD-003 | CSDB integration uses this schema |
| KNU-00-00-005-TEST-001 | Tests validate schema compliance |
| A.S.I.T. Transponder | Implements schema extraction and reasoning |

### 10.3 Cross-KNOT References

| KNU | Relationship |
|-----|--------------|
| KNU-79-10-001-SAF-001 | Oil system uses fluid domain conventions |
| KNU-80-00-001-REQ-001 | Starting system uses electrical domain conventions |
| KNU-24-*-* | Electrical power domain examples |
| KNU-28-*-* | Fuel/energy storage domain examples |
| KNU-29-*-* | Hydraulic systems domain examples |

---

## 11. TBD Resolution

### TBD-00-00-005-REQ-001-005: Unit Provenance Metadata Schema

| Field | Value |
|-------|-------|
| **TBD ID** | TBD-00-00-005-REQ-001-005 |
| **Question** | How should unit provenance metadata be structured for SSOT artifacts? |
| **Resolution** | JSON/YAML schema defined in Section 4 of this ICD |
| **Status** | ✅ RESOLVED |
| **Resolved By** | KNU-00-00-005-ICD-002 |
| **Resolution Date** | 2026-01-13 |

---

## 12. Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-13 | STK_DATA | Initial baseline - GENERATED; resolves TBD-00-00-005-REQ-001-005 |

---

## 13. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author (STK_DATA) | | | |
| Reviewer (STK_SE) | | | |
| Reviewer (STK_CERT) | | | |
| Reviewer (STK_AI) | | | |
| Approver (STK_DATA Lead) | | | |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_DATA, STK_SE, and STK_AI teams

**A.S.I.T. Impact:** This ICD enables A.S.I.T. Layer 5 (Context Reasoning) for domain-aware unit detection and conversion. The transponder can now:
- Extract unit provenance from any SSOT artifact
- Select context-appropriate display units
- Maintain full traceability from authoring through display

**Next Blocker:** KNU-00-00-005-ICD-003 (CSDB Unit Integration Specification)

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-00-00-005-ICD-002 defines the Unit Provenance Metadata Schema addressing REQ-005-005 from KNOT-00-00-005.*
