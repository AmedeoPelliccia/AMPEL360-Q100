# ASIT - Aircraft Standard Information Treatment

**Version:** 1.0.0  
**Effective Date:** 2026-01-30  
**Classification:** INTERNAL

---

## Overview

ASIT (Aircraft Standard Information Treatment) provides the governance framework for information management in the AMPEL360 Q100 program. This includes the master BREX authority for business rules and decision-making governance.

## Directory Structure

```
ASIT/
├── README.md                           # This file
└── GOVERNANCE/                         # Governance configuration
    └── master_brex_authority.yaml      # Master BREX business rules
```

## Key Components

### Master BREX Authority

The `GOVERNANCE/master_brex_authority.yaml` file defines the authoritative business rules for the BREX Decision Engine:

- **20 Core Rules**: Organized by category
  - Confidence thresholds (BREX-CONF-*)
  - Source traceability (BREX-SRC-*)
  - Fabrication prevention (BREX-FAB-*)
  - ATA compliance (BREX-ATA-*)
  - LH2-specific (BREX-LH2-*)
  - AI/ML-specific (BREX-AI-*)
  - Effectivity (BREX-EFF-*)
  - CSDB/S1000D (BREX-CSDB-*)
  - Digital Product Passport (BREX-DPP-*)

- **8 Rule Groups**:
  - `standard_validation` - Basic validation for all content
  - `safety_critical_validation` - Enhanced checks for safety content
  - `ata_28_lh2_validation` - LH₂ system-specific rules
  - `ata_71_powerplant_validation` - Power plant rules
  - `ata_95_ai_validation` - AI/ML system rules
  - `ata_96_dpp_validation` - Digital Product Passport rules
  - `csdb_validation` - S1000D compliance rules
  - `full_validation` - Complete rule set

- **Confidence Thresholds**: Per ATA chapter and content type

- **Decision Flowchart**: Formal specification of deterministic reasoning

## Usage

### Loading the Authority File

```python
from ASIGT.brex import BREXDecisionEngine
from pathlib import Path

# Load from default location
engine = BREXDecisionEngine(
    authority_file=Path("ASIT/GOVERNANCE/master_brex_authority.yaml")
)

# Access metadata
print(engine.authority_metadata)

# List available rules
for rule_id, rule in engine.rules.items():
    print(f"{rule_id}: {rule.name}")

# List rule groups
for group_name, rule_ids in engine.rule_groups.items():
    print(f"{group_name}: {len(rule_ids)} rules")
```

### Extending the Authority

To add program-specific rules, create a supplementary YAML file:

```yaml
# program_specific_brex.yaml
metadata:
  name: "Program-Specific BREX Extension"
  extends: "master_brex_authority.yaml"

rules:
  - rule_id: "BREX-PROG-001"
    name: "Custom Program Rule"
    description: "Program-specific validation"
    severity: "MEDIUM"
    conditions:
      - field: "custom_field"
        operator: "is_not_null"
    outcome_on_pass: "ACCEPT"
    outcome_on_fail: "WARN"
```

Load multiple authority files:

```python
engine = BREXDecisionEngine()
engine.load_authority(Path("ASIT/GOVERNANCE/master_brex_authority.yaml"))
engine.load_authority(Path("path/to/program_specific_brex.yaml"))
```

## Governance Principles

### Rule Severity Levels

| Level | Description | Action on Violation |
|-------|-------------|---------------------|
| CRITICAL | Safety or certification impact | REJECT or mandatory HITL |
| HIGH | Data quality impact | ESCALATE_HITL recommended |
| MEDIUM | Process compliance | WARN or optional HITL |
| LOW | Best practice | WARN only |
| INFO | Informational | Log only |

### Rule Modification Process

1. **Propose**: Create RFC with rule change justification
2. **Review**: Technical and safety review board
3. **Approve**: Configuration control board approval
4. **Implement**: Update authority YAML file
5. **Validate**: Run regression tests
6. **Deploy**: Release with version increment

## Related Documentation

- [BREX Decision Engine](../ASIGT/brex/brex_decision_engine.py)
- [BREX Reasoning Flowchart](../ASIGT/BREX_REASONING_FLOWCHART.md)
- [CSDB Compliance](../docs/CSDB_COMPLIANCE_VALIDATION.md)
- [ASIT Copilot Instructions](../.github/copilot-instructions.txt)

---

**Revision History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial release |

---

*This documentation is maintained by the Configuration Management team.*
