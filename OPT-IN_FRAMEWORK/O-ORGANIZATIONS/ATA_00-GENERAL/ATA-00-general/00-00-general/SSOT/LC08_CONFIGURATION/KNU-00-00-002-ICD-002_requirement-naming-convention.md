---
knu_id: "KNU-00-00-002-ICD-002"
knot_id: "KNOT-00-00-002"
knu_type: "ICD"
artifact_class: "SSOT"
title: "Requirement ID Naming Convention with ORIGIN"
version: "2.0"
status: "🔵 GENERATED"
date: "2026-01-13"

owner_aor: "STK_CM"
contributors: ["STK_SE", "STK_CERT", "STK_DATA"]

spawned_by: "Conversation - Requirement naming convention enhancement"
implements_requirement: "REQ-AMPEL-CROSS-CROSS-CM-001"

traceability:
  parent_knot: "KNOT-00-00-002"
  affects_knus: ["ALL"]
  affects_ata_chapters: ["ALL"]
---

# Requirement ID Naming Convention (with ORIGIN)

## 1. Grammar

```
REQ-{ORIGIN}-{ATA_CODE}-{LC_CODE}-{AOR_CODE}-{SEQ}
```

## 2. Components

### 2.1 ORIGIN Component

Identifies the source or origin of the requirement:

| Code | Category | Description | Example Source |
|------|----------|-------------|----------------|
| **AMPEL** | Program | AMPEL-generated | Internal design decisions |
| **DERIV** | Program | Derived from parent | Requirements decomposition |
| **EASA** | Regulatory | EASA regulation | CS-25, SC-H2.01 |
| **FAA** | Regulatory | FAA regulation | Part 25, AC, TSO |
| **ICAO** | Regulatory | ICAO standard | Annexes, SARPs |
| **SAE** | Industry | SAE standard | AS, AIR, ARP |
| **ISO** | Industry | ISO standard | ISO 80000, ISO/TR 15916 |
| **RTCA** | Industry | RTCA document | DO-178C, DO-254 |
| **EUROCAE** | Industry | EUROCAE document | ED-12C |
| **ATA** | Industry | ATA specification | ATA iSpec 2200 |
| **S1000D** | Industry | S1000D standard | Publication specs |
| **CUST** | Customer | Customer spec | Airline requirements |
| **MARKET** | Customer | Market-driven | Competitive analysis |
| **SUPP** | Supplier | Supplier constraint | Engine OEM, avionics |
| **ASIT** | Research | A.S.I.T. system | Transponder requirements |
| **TECH** | Research | Technology R&D | Lab results, prototypes |
| **LEGACY** | Legacy | Inherited from legacy | Lessons learned |

### 2.2 ATA_CODE Component

ATA chapter per ATA iSpec 2200, or "CROSS" for cross-chapter:
- Format: `##-##` or `CROSS`
- Example: `28-30` (Fuel, LH₂ subsystem)

### 2.3 LC_CODE Component

Lifecycle phase per AMPEL program structure:
- Format: `##` or `CROSS`
- Example: `02` = LC02_SYSTEM_REQUIREMENTS

### 2.4 AOR_CODE Component

Area of Responsibility (owner stakeholder):
- Format: `[A-Z]{2,4}`
- Example: `SE` = STK_SE (Systems Engineering)

### 2.5 SEQ Component

Sequential number within scope:
- Format: `###` (zero-padded 3 digits)
- Range: `001` to `999`

## 3. Examples

### Program-Generated Requirements
```
REQ-AMPEL-00-00-02-SE-001    # AMPEL SI units requirement
REQ-AMPEL-28-00-02-SE-001    # AMPEL H₂ energy analysis
REQ-ASIT-00-00-04-AI-001     # A.S.I.T. context detection
```

### Regulatory Requirements
```
REQ-EASA-00-00-02-CERT-001   # EASA CS-25.1583 op limits
REQ-FAA-00-00-02-CERT-002    # FAA Part 25.1581 AFM
REQ-ICAO-00-00-02-OPS-001    # ICAO Annex 5 units
```

### Industry Standards
```
REQ-SAE-28-30-03-SAF-001     # SAE AIR 7806 H₂ safety
REQ-ISO-00-00-02-SE-001      # ISO 80000-1 SI units
REQ-RTCA-00-00-04-AI-001     # DO-178C software DAL
REQ-S1000D-00-00-CROSS-PUB-001 # S1000D BREX rules
```

### Customer/Supplier Requirements
```
REQ-CUST-00-00-02-SE-001     # Customer range requirement
REQ-SUPP-71-00-02-SE-001     # Engine OEM constraint
```

## 4. Validation

All requirement IDs SHALL match this regex:

```regex
^REQ-([A-Z]{2,6})-(CROSS|[0-9]{2}-[0-9]{2})-(CROSS|[0-9]{2})-([A-Z]{2,4})-([0-9]{3})$
```

CI/CD validation script: `.github/workflows/validate_req_ids.py`

## 5. Migration

See `REQUIREMENT_ID_MIGRATION.csv` for old→new mapping.

All legacy requirement IDs MUST preserve `old_id` field in YAML frontmatter.

## 6. YAML Frontmatter Schema

### 6.1 Requirement Metadata Template

```yaml
---
# Requirement Identification
id: "REQ-{ORIGIN}-{ATA}-{LC}-{AOR}-{SEQ}"
old_id: "{OLD_ID}"  # For migration traceability
title: "{Requirement Title}"

# Origin Traceability
origin:
  code: "{ORIGIN}"  # AMPEL, EASA, SAE, etc.
  category: "{program_generated|regulatory|industry_standards|customer|etc.}"
  
  primary_source:
    standard: "{Standard Name}"
    document: "{Document ID}"
    clause: "{Clause/Section Number}"
    edition: "{Edition/Amendment}"
    date: "{YYYY-MM-DD}"
    url: "{Optional URL}"
  
  additional_sources:
    - standard: "{Standard Name}"
      clause: "{Clause}"
      relationship: "{implements|references|harmonized_with}"

# Requirement Scope
ata_chapter: "{##-##|CROSS}"
lifecycle_phase: "{LC##|CROSS}"
owner_aor: "STK_{AOR}"

# Classification
priority: "{MANDATORY|RECOMMENDED|OPTIONAL}"
safety_critical: {true|false}
certification_critical: {true|false}

# Content
requirement: |
  {Requirement statement in SHALL/SHOULD/MAY format}

rationale: |
  {Why this requirement exists}

acceptance_criteria:
  - "{Measurable criterion 1}"
  - "{Measurable criterion 2}"

verification_method: "{Review|Test|Analysis|Demonstration}"
verified_by: "{KNU-ID of verification artifact}"

# Traceability
traceability:
  parent_requirements: ["{REQ-ID}", ...]
  child_requirements: ["{REQ-ID}", ...]
  implements_knot: "{KNOT-ID}"
  affects_knus: ["{KNU-ID}", ...]
  affects_ata_chapters: ["{##-##}", ...]

# Lifecycle
status: "{DRAFT|ACTIVE|VERIFIED|OBSOLETE}"
change_history:
  - version: "1.0"
    date: "2026-01-13"
    author: "STK_SE"
    changes: "Initial creation"
---
```

## 7. Benefits of ORIGIN Component

1. ✅ **Certification Traceability** - Instantly identify regulatory vs. internal requirements
2. ✅ **Compliance Matrices** - Auto-generate EASA/FAA/ICAO compliance reports
3. ✅ **Change Impact** - Customer requirements changes don't affect regulatory requirements
4. ✅ **A.S.I.T. Mode CERT** - Filter requirements by authority for certification packages
5. ✅ **Audit Trail** - Clear provenance from requirement to source document

## 8. Valid and Invalid Examples

### 8.1 Valid IDs

```yaml
valid_examples:
  - "REQ-AMPEL-00-00-02-SE-001"      # Program SI units
  - "REQ-EASA-00-00-02-CERT-001"     # EASA operating limits
  - "REQ-SAE-28-30-03-SAF-001"       # SAE H₂ safety
  - "REQ-ISO-00-00-02-SE-001"        # ISO 80000-1 SI
  - "REQ-RTCA-00-00-04-AI-001"       # DO-178C software
  - "REQ-CUST-00-00-02-SE-001"       # Customer range
  - "REQ-ASIT-00-00-04-AI-001"       # A.S.I.T. context detection
  - "REQ-ICAO-CROSS-CROSS-OPS-001"   # ICAO cross-cutting ops
  - "REQ-FAA-79-10-03-SAF-001"       # FAA oil system safety
  - "REQ-DERIV-28-30-02-SE-005"      # Derived LH₂ requirement
```

### 8.2 Invalid IDs

```yaml
invalid_examples:
  - "REQ-00-00-02-SE-001"            # Missing ORIGIN ❌
  - "REQ-AMPEL-2830-02-SE-001"       # ATA missing hyphen ❌
  - "REQ-AMPEL-00-00-2-SE-001"       # LC not zero-padded ❌
  - "REQ-AMPEL-00-00-02-SE-1"        # SEQ not 3 digits ❌
  - "REQ-ampel-00-00-02-SE-001"      # ORIGIN lowercase ❌
  - "REQ-TOOLONG-00-00-02-SE-001"    # ORIGIN >6 chars ❌
```

## 9. A.S.I.T. Integration

### 9.1 Enhanced Requirement Parser

The A.S.I.T. transponder includes enhanced requirement ID parsing capabilities:

```python
import re
from typing import Dict, Optional

class RequirementIDParser:
    """Parse structured requirement IDs with ORIGIN component"""
    
    PATTERN = re.compile(
        r"^REQ-"
        r"(?P<origin>[A-Z]{2,6})-"
        r"(?P<ata>CROSS|[0-9]{2}-[0-9]{2})-"
        r"(?P<lc>CROSS|[0-9]{2})-"
        r"(?P<aor>[A-Z]{2,4})-"
        r"(?P<seq>[0-9]{3})$"
    )
    
    ORIGIN_CATEGORIES = {
        "AMPEL": "program_generated",
        "DERIV": "program_generated",
        "EASA": "regulatory",
        "FAA": "regulatory",
        "ICAO": "regulatory",
        "SAE": "industry_standards",
        "ISO": "industry_standards",
        "RTCA": "industry_standards",
        "EUROCAE": "industry_standards",
        "ATA": "industry_standards",
        "S1000D": "industry_standards",
        "CUST": "customer",
        "MARKET": "customer",
        "SUPP": "supplier",
        "TECH": "research",
        "ASIT": "research",
        "LEGACY": "legacy",
    }
    
    def parse(self, req_id: str) -> Optional[Dict]:
        """Parse requirement ID into components"""
        match = self.PATTERN.match(req_id)
        if not match:
            return None
        
        components = match.groupdict()
        return {
            "origin": components["origin"],
            "origin_category": self.ORIGIN_CATEGORIES.get(
                components["origin"], "unknown"
            ),
            "ata_chapter": components["ata"],
            "lifecycle": (
                f"LC{components['lc']}" 
                if components['lc'] != "CROSS" 
                else "CROSS"
            ),
            "owner": f"STK_{components['aor']}",
            "sequence": components["seq"],
            "is_cross_chapter": (components["ata"] == "CROSS"),
            "is_cross_lifecycle": (components["lc"] == "CROSS"),
            "is_regulatory": (
                self.ORIGIN_CATEGORIES.get(components["origin"]) == "regulatory"
            ),
            "full_id": req_id
        }
```

### 9.2 Certification Evidence Generator

The A.S.I.T. Mode CERT can generate compliance matrices by requirement origin:

- Find all EASA requirements and their verification status
- Generate EASA/FAA/ICAO compliance reports
- Create certification packages with requirement traceability
- Export Git provenance logs for audit trails

## 10. Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | 2025-XX-XX | STK_CM | Initial requirement naming convention |
| 2.0 | 2026-01-13 | STK_CM | Added ORIGIN component for requirement traceability |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-00-00-002-ICD-002 defines requirement ID naming convention addressing KNOT-00-00-002.*
