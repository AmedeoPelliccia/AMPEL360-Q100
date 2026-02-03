# BREX Instruction System Specification

**Version:** 1.0.0  
**Effective Date:** 2026-01-30  
**Classification:** INTERNAL  
**Applies To:** AMPEL360 Q100 Program

---

## Table of Contents

1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [BREX Decision Engine](#brex-decision-engine)
4. [Master BREX Authority](#master-brex-authority)
5. [Instruction Schema Format](#instruction-schema-format)
6. [Audit & Explainability](#audit--explainability)
7. [Integration Guide](#integration-guide)
8. [Quick Reference](#quick-reference)

---

## Introduction

The BREX (Business Rules EXchange) Instruction System provides a deterministic, auditable framework for guided reasoning in the AMPEL360 Q100 program. It ensures that all content transformations and validations follow defined rules with complete traceability.

### Key Features

- **Deterministic Reasoning**: Every decision follows explicit rules
- **Full Audit Trail**: Hash-chained logs for compliance
- **Explainability**: Human-readable explanations for all decisions
- **Safety-Critical Support**: Elevated thresholds for safety content
- **HITL Integration**: Automated escalation for uncertain decisions

### Standards Alignment

| Standard | Alignment |
|----------|-----------|
| S1000D Issue 5.0 | BREX business rules format |
| DO-178C/ED-12C | Decision traceability |
| DO-200B | Data quality assurance |
| ATA iSpec 2200 | Chapter organization |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    BREX INSTRUCTION SYSTEM                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────────┐    ┌────────────────┐  │
│  │   ASIGT     │    │      ASIT       │    │   Validators   │  │
│  │             │    │                 │    │                │  │
│  │ ┌─────────┐ │    │ ┌─────────────┐ │    │ ┌────────────┐ │  │
│  │ │ BREX    │◄├────┤►│ Master BREX │ │    │ │ Existing   │ │  │
│  │ │ Decision│ │    │ │ Authority   │ │    │ │ Validation │ │  │
│  │ │ Engine  │ │    │ │ YAML        │ │    │ │ Scripts    │ │  │
│  │ └────┬────┘ │    │ └─────────────┘ │    │ └──────┬─────┘ │  │
│  │      │      │    │                 │    │        │       │  │
│  │ ┌────▼────┐ │    │ ┌─────────────┐ │    │        │       │  │
│  │ │ Instruc-│ │    │ │ Governance  │ │    │        │       │  │
│  │ │ tions   │ │    │ │ Policies    │ │    │        │       │  │
│  │ │ (.md)   │ │    │ └─────────────┘ │    │        │       │  │
│  │ └─────────┘ │    │                 │    │        │       │  │
│  │             │    │                 │    │        │       │  │
│  │ ┌─────────┐ │    │                 │    │        │       │  │
│  │ │ Audit   │◄├────┼─────────────────┼────┼────────┘       │  │
│  │ │ Logs    │ │    │                 │    │                │  │
│  │ └─────────┘ │    │                 │    │                │  │
│  └─────────────┘    └─────────────────┘    └────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Overview

| Component | Location | Purpose |
|-----------|----------|---------|
| BREX Decision Engine | `ASIGT/brex/` | Core rule evaluation engine |
| Master BREX Authority | `ASIT/GOVERNANCE/` | Authoritative rule definitions |
| Instruction Schemas | `ASIGT/instructions/` | Process documentation |
| Reasoning Flowchart | `ASIGT/` | Decision path documentation |
| Audit Logs | `ASIGT/logs/` | Decision audit trail |

---

## BREX Decision Engine

### Overview

The BREX Decision Engine (`ASIGT/brex/brex_decision_engine.py`) implements deterministic rule evaluation with full audit logging.

### Key Classes

```python
# Core classes
BREXDecisionEngine    # Main engine for rule evaluation
BREXRule              # Individual business rule
RuleCondition         # Single condition within a rule
DecisionRecord        # Immutable audit record
ExplainabilityLogger  # Hash-chained audit logging

# Enums
DecisionOutcome       # ACCEPT, REJECT, ESCALATE_HITL, WARN, PENDING
RuleSeverity          # CRITICAL, HIGH, MEDIUM, LOW, INFO
```

### Basic Usage

```python
from ASIGT.brex import create_engine, DecisionOutcome

# Create engine (loads default authority file)
engine = create_engine()

# Prepare context
context = {
    "confidence": 0.92,
    "source": {"doc_id": "KNU-28-10-001", "spans": ["span:100-150"]},
    "ata_chapter": "28",
    "safety_critical": True
}

# Evaluate single rule
record = engine.evaluate_rule("BREX-CONF-002", context)
print(f"Outcome: {record.outcome.value}")
print(f"Explanation:\n{record.explanation}")

# Evaluate rule group
records = engine.evaluate_group("safety_critical_validation", context)

# Finalize and get summary
summary = engine.finalize_session()
print(f"Decisions: {summary['total_decisions']}")
print(f"Accepted: {summary['outcomes']['ACCEPT']}")
print(f"Rejected: {summary['outcomes']['REJECT']}")
```

### Rule Evaluation Flow

1. **Load Context**: Receive input data for evaluation
2. **Select Rules**: Determine applicable rules (by group or ATA)
3. **Evaluate Conditions**: Check each condition in rule
4. **Determine Outcome**: ACCEPT, REJECT, ESCALATE_HITL, or WARN
5. **Generate Explanation**: Create human-readable rationale
6. **Log Decision**: Create hash-chained audit record

---

## Master BREX Authority

### Location

`ASIT/GOVERNANCE/master_brex_authority.yaml`

### Structure

```yaml
metadata:
  name: "AMPEL360 Q100 Master BREX Authority"
  version: "1.0.0"
  
rules:
  - rule_id: "BREX-XXX-NNN"
    name: "Rule Name"
    description: "What this rule checks"
    severity: "CRITICAL|HIGH|MEDIUM|LOW|INFO"
    conditions:
      - field: "path.to.field"
        operator: "eq|ne|gt|gte|lt|lte|in|contains|regex|is_null"
        value: <expected_value>
    outcome_on_pass: "ACCEPT|WARN"
    outcome_on_fail: "REJECT|ESCALATE_HITL|WARN"
    ata_chapters: ["28", "71"]  # Optional
    
rule_groups:
  group_name:
    - "BREX-XXX-001"
    - "BREX-XXX-002"
    
confidence_thresholds:
  default:
    auto_accept: 0.85
    mandatory_hitl: 0.60
```

### Rule Categories

| Prefix | Category | Count |
|--------|----------|-------|
| BREX-CONF-* | Confidence thresholds | 3 |
| BREX-SRC-* | Source traceability | 2 |
| BREX-FAB-* | Fabrication prevention | 3 |
| BREX-ATA-* | ATA compliance | 2 |
| BREX-LH2-* | LH2 specific | 2 |
| BREX-AI-* | AI/ML specific | 2 |
| BREX-EFF-* | Effectivity | 2 |
| BREX-CSDB-* | CSDB/S1000D | 2 |
| BREX-DPP-* | Digital Product Passport | 2 |

---

## Instruction Schema Format

### File Naming

```
{process}.instructions.md
```

Examples:
- `extract.instructions.md`
- `hitl.instructions.md`
- `safety.instructions.md`

### Required Sections

```markdown
# BREX Instruction Schema: {Title}
<!-- BREX-INSTRUCTION-ID: INSTR-XXX-NNN -->
<!-- VERSION: X.Y.Z -->
<!-- EFFECTIVE-DATE: YYYY-MM-DD -->

## Purpose
{What this instruction accomplishes}

## Applicable BREX Rules
| Rule ID | Rule Name | Severity |
|---------|-----------|----------|
| BREX-XXX-001 | Name | LEVEL |

## Instruction Steps

### Step N: {Step Title}
**BREX Check:** BREX-XXX-NNN
{Step details}

**Decision Path:**
- ✓ Pass condition → {Next step}
- ✗ Fail condition → {Action}

## Flowchart
{ASCII flowchart}

## Related Instructions
- [Other Instruction](./other.instructions.md)

## Revision History
| Version | Date | Author | Changes |
```

---

## Audit & Explainability

### Audit Log Format

Logs are stored as newline-delimited JSON (JSONL):

```json
{
  "decision_id": "BREX-20260130-114523-A1B2C3D4-D0001",
  "timestamp": "2026-01-30T11:45:23Z",
  "rule_id": "BREX-CONF-002",
  "rule_name": "Safety-Critical Confidence Threshold",
  "context_hash": "sha256:abc123...",
  "outcome": "ACCEPT",
  "passed": true,
  "explanation": "Rule: Safety-Critical...\nResult: PASSED...",
  "severity": "CRITICAL",
  "ata_chapter": "28",
  "session_id": "BREX-20260130-114523-A1B2C3D4",
  "actor": "BREX_ENGINE",
  "previous_hash": "sha256:...",
  "entry_hash": "sha256:..."
}
```

### Hash Chain Integrity

Each entry includes:
- `previous_hash`: Hash of previous entry (genesis = "0" * 64)
- `entry_hash`: SHA-256(entry_data + previous_hash)

This creates a tamper-evident chain that can be verified.

### Session Summary

```json
{
  "session_id": "BREX-20260130-114523-A1B2C3D4",
  "started_at": "2026-01-30T11:45:23Z",
  "ended_at": "2026-01-30T11:50:00Z",
  "total_decisions": 15,
  "outcomes": {
    "ACCEPT": 12,
    "REJECT": 1,
    "ESCALATE_HITL": 2,
    "WARN": 0,
    "PENDING": 0
  },
  "by_severity": {
    "CRITICAL": 5,
    "HIGH": 8,
    "MEDIUM": 2,
    "LOW": 0,
    "INFO": 0
  },
  "final_hash": "sha256:..."
}
```

### Verification

```python
from ASIGT.brex import create_engine

engine = create_engine(session_id="existing-session-id")
valid, message = engine.verify_audit_log()
# Returns (True, "Verified 15 entries successfully") or
#         (False, "Hash chain broken at line 8")
```

---

## Integration Guide

### With Existing Validators

```python
# validate_req_ids.py integration
import sys
sys.path.insert(0, '/path/to/repo')

from ASIGT.brex import create_engine, DecisionOutcome

engine = create_engine()

def validate_with_brex(req_id, confidence):
    """Validate requirement with BREX rules."""
    context = {
        "req_id": req_id,
        "confidence": confidence,
        "source": {"doc_id": req_id.split("-")[0]}
    }
    
    record = engine.evaluate_rule("BREX-CONF-001", context)
    return record.outcome == DecisionOutcome.ACCEPT
```

### With GitHub Actions

```yaml
# .github/workflows/brex-validation.yml
- name: BREX Decision Validation
  run: |
    python -c "
    from ASIGT.brex import create_engine
    import sys
    
    engine = create_engine()
    # Validation logic here
    summary = engine.finalize_session()
    
    if summary['outcomes']['REJECT'] > 0:
        print('❌ BREX validation failed')
        sys.exit(1)
    print('✅ BREX validation passed')
    "
```

### With CSDB Validation

```python
# brex_validator.py integration
from ASIGT.brex import create_engine

engine = create_engine()

def validate_dm(dm_file, dm_content):
    """Validate Data Module with BREX rules."""
    context = {
        "dmc": dm_content.get("dmc"),
        "brex_ref": dm_content.get("brex_ref"),
        "effectivity": dm_content.get("effectivity"),
        "confidence": 0.95  # Structured XML = high confidence
    }
    
    records = engine.evaluate_group("csdb_validation", context)
    
    violations = [r for r in records if r.outcome != DecisionOutcome.ACCEPT]
    return {
        "file": dm_file,
        "violations": [r.to_dict() for r in violations]
    }
```

---

## Quick Reference

### Confidence Thresholds

| Content Type | Auto-Accept | HITL Required | Reject Below |
|--------------|-------------|---------------|--------------|
| Standard | ≥ 0.85 | 0.60-0.84 | < 0.60 |
| Safety-Critical | ≥ 0.90 | 0.70-0.89 | < 0.60 |
| AI/ML | ≥ 0.88 | 0.65-0.87 | < 0.60 |

### Rule Groups

| Group | Use Case |
|-------|----------|
| `standard_validation` | All content |
| `safety_critical_validation` | ATA 27, 28, 29, 32, 71, 72 |
| `ata_28_lh2_validation` | LH₂ fuel system |
| `ata_71_powerplant_validation` | Power plant |
| `ata_95_ai_validation` | AI/ML systems |
| `ata_96_dpp_validation` | Digital Product Passport |
| `csdb_validation` | S1000D compliance |
| `full_validation` | Complete check |

### Decision Outcomes

| Outcome | Action |
|---------|--------|
| ACCEPT | Proceed to output |
| REJECT | Return to source |
| ESCALATE_HITL | Queue for human review |
| WARN | Accept with logged warning |
| PENDING | Await more information |

---

## References

- [ASIGT README](../ASIGT/README.md)
- [ASIT README](../ASIT/README.md)
- [BREX Reasoning Flowchart](../ASIGT/BREX_REASONING_FLOWCHART.md)
- [CSDB Compliance](./CSDB_COMPLIANCE_VALIDATION.md)
- [ASIT Copilot Instructions](../.github/copilot-instructions.txt)

---

**Revision History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial specification |

---

*This specification is maintained by the ASIT Development Team. Submit updates via pull request.*
