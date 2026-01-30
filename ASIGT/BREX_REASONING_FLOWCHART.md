# BREX Deterministic Reasoning Flowchart Documentation

**Version:** 1.0.0  
**Effective Date:** 2026-01-30  
**Classification:** INTERNAL  
**Applies To:** AMPEL360 Q100 Program - BREX Decision Engine

---

## Table of Contents

1. [Overview](#overview)
2. [Core Decision Architecture](#core-decision-architecture)
3. [Master Decision Flowchart](#master-decision-flowchart)
4. [Decision Node Specifications](#decision-node-specifications)
5. [Outcome Definitions](#outcome-definitions)
6. [ATA-Specific Decision Paths](#ata-specific-decision-paths)
7. [Integration Points](#integration-points)
8. [Audit Trail Requirements](#audit-trail-requirements)

---

## Overview

The BREX Decision Engine implements deterministic reasoning through a structured flowchart architecture. Every decision follows a defined path that:

- **Is Reproducible**: Same inputs always produce same outputs
- **Is Auditable**: Complete trace of all decision factors
- **Is Explainable**: Clear rationale for every outcome
- **Is Compliant**: Aligns with aerospace certification requirements

### Key Principles

1. **No Ambiguity**: Every branch has a clear condition
2. **No Dead Ends**: Every path leads to a terminal outcome
3. **Complete Coverage**: All input scenarios are handled
4. **Fail-Safe Design**: Uncertainty escalates to HITL

---

## Core Decision Architecture

### Decision Types

| Type | Symbol | Description |
|------|--------|-------------|
| Entry | ○ | Starting point of a decision path |
| Decision | ◇ | Binary or multi-branch evaluation |
| Action | ▭ | Processing step without branching |
| Terminal | ■ | Final outcome (ACCEPT/REJECT/ESCALATE) |

### Outcome Categories

| Outcome | Code | Description | Audit Level |
|---------|------|-------------|-------------|
| ACCEPT | A | Content approved for use | STANDARD |
| REJECT | R | Content rejected, requires remediation | HIGH |
| ESCALATE_HITL | H | Human review required | HIGH |
| WARN | W | Accept with logged warning | STANDARD |
| PENDING | P | Awaiting additional information | MEDIUM |

---

## Master Decision Flowchart

```
                            ┌─────────────────────────────────────┐
                            │           START                      │
                            │     Content Received for Evaluation  │
                            └──────────────┬──────────────────────┘
                                           │
                                           ▼
                            ┌─────────────────────────────────────┐
                            │    VALIDATE SCHEMA COMPLIANCE        │
                            │    (Check JSON/YAML structure)       │
                            └──────────────┬──────────────────────┘
                                           │
                           ┌───────────────┴───────────────┐
                           │                               │
                           ▼ Yes                           ▼ No
                    ┌──────────────┐              ┌──────────────────┐
                    │ Continue     │              │ REJECT           │
                    │              │              │ Schema violation │
                    └──────┬───────┘              │ (ASIT-E001)      │
                           │                      └──────────────────┘
                           ▼
            ┌─────────────────────────────────────┐
            │      CHECK SOURCE TRACEABILITY       │
            │      (BREX-SRC-001)                  │
            └──────────────┬──────────────────────┘
                           │
           ┌───────────────┴───────────────┐
           │                               │
           ▼ Has source                    ▼ No source
    ┌──────────────┐              ┌──────────────────┐
    │ Continue     │              │ REJECT           │
    │              │              │ No traceability  │
    └──────┬───────┘              │ (ASIT-E002)      │
           │                      └──────────────────┘
           ▼
┌─────────────────────────────────────┐
│    DETECT CONTENT TYPE               │
│    (Safety-critical, Standard, AI)   │
└──────────────┬──────────────────────┘
               │
    ┌──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
┌───────┐  ┌───────┐  ┌───────┐
│Safety │  │Standard│ │AI/ML  │
│Critical│ │Content │ │Content│
└───┬───┘  └───┬───┘  └───┬───┘
    │          │          │
    ▼          ▼          ▼
┌───────────────────────────────────────────────────────────────────┐
│                    APPLY THRESHOLD RULES                          │
│  Safety: conf ≥ 0.90      Standard: conf ≥ 0.85     AI: conf ≥ 0.88│
└───────────────────────────┬───────────────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
            ▼ Meets threshold               ▼ Below threshold
     ┌──────────────┐              ┌──────────────────────┐
     │ Continue to  │              │ CHECK MINIMUM        │
     │ fabrication  │              │ THRESHOLD            │
     │ check        │              │ (conf ≥ 0.60)        │
     └──────┬───────┘              └──────────┬───────────┘
            │                                 │
            │                    ┌────────────┴────────────┐
            │                    │                         │
            │                    ▼ ≥ 0.60                  ▼ < 0.60
            │            ┌──────────────────┐     ┌────────────────┐
            │            │ ESCALATE_HITL    │     │ REJECT         │
            │            │ Optional/Mandatory│     │ Low confidence │
            │            │ review           │     │ (ASIT-E003)    │
            │            └──────────────────┘     └────────────────┘
            ▼
┌─────────────────────────────────────┐
│    CHECK FABRICATION INDICATORS      │
│    (BREX-FAB-001, FAB-002, FAB-003)  │
└──────────────┬──────────────────────┘
               │
   ┌───────────┴───────────┐
   │                       │
   ▼ Valid extraction      ▼ Fabrication detected
┌──────────────┐     ┌──────────────────────┐
│ Continue     │     │ REJECT               │
│              │     │ Data fabrication     │
└──────┬───────┘     │ (P3 violation)       │
       │             └──────────────────────┘
       ▼
┌─────────────────────────────────────┐
│    CHECK EFFECTIVITY                 │
│    (BREX-EFF-001, EFF-002)           │
└──────────────┬──────────────────────┘
               │
   ┌───────────┴───────────┐
   │                       │
   ▼ Defined               ▼ Undefined
┌──────────────┐     ┌──────────────────────┐
│ Continue     │     │ ESCALATE_HITL        │
│              │     │ Effectivity required │
└──────┬───────┘     │ (ASIT-E004)          │
       │             └──────────────────────┘
       ▼
┌─────────────────────────────────────┐
│    VALIDATE ATA REFERENCE            │
│    (BREX-ATA-001, ATA-002)           │
└──────────────┬──────────────────────┘
               │
   ┌───────────┴───────────┐
   │                       │
   ▼ Valid                 ▼ Invalid/Missing
┌──────────────┐     ┌──────────────────────┐
│ Continue     │     │ WARN                 │
│              │     │ Log ATA format issue │
└──────┬───────┘     │ (ASIT-W002)          │
       │             └──────────┬───────────┘
       │                        │
       ◄────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│    ══════════════════════════════   │
│    ║        ACCEPT                ║  │
│    ║   Create audit record        ║  │
│    ║   Log all decision factors   ║  │
│    ══════════════════════════════   │
└─────────────────────────────────────┘
```

---

## Decision Node Specifications

### Node: VALIDATE_SCHEMA_COMPLIANCE

**Purpose:** Ensure input conforms to expected data structure

| Attribute | Value |
|-----------|-------|
| Rule ID | (pre-BREX) |
| Input | Raw content payload |
| Condition | JSON/YAML validates against schema |
| True Path | Continue |
| False Path | REJECT (ASIT-E001) |

### Node: CHECK_SOURCE_TRACEABILITY

**Purpose:** Verify content has traceable origin

| Attribute | Value |
|-----------|-------|
| Rule ID | BREX-SRC-001 |
| Input | source.doc_id field |
| Condition | doc_id is not null and not empty |
| True Path | Continue |
| False Path | REJECT (ASIT-E002) |

### Node: DETECT_CONTENT_TYPE

**Purpose:** Route content to appropriate validation path

| Attribute | Value |
|-----------|-------|
| Rule ID | (routing) |
| Input | content_type, ata_chapter, safety_critical flag |
| Branches | Safety-Critical, Standard, AI/ML |

**Routing Logic:**
```python
if safety_critical == True:
    return "SAFETY_CRITICAL"
elif ata_chapter in ["95"]:
    return "AI_ML"
else:
    return "STANDARD"
```

### Node: APPLY_THRESHOLD_RULES

**Purpose:** Check confidence against applicable threshold

| Attribute | Value |
|-----------|-------|
| Rule ID | BREX-CONF-001, BREX-CONF-002 |
| Input | confidence score, content_type |
| Thresholds | Safety: 0.90, Standard: 0.85, AI: 0.88 |
| True Path | Continue to fabrication check |
| False Path | Check minimum threshold |

### Node: CHECK_FABRICATION_INDICATORS

**Purpose:** Detect potential data fabrication

| Attribute | Value |
|-----------|-------|
| Rule ID | BREX-FAB-001, BREX-FAB-002, BREX-FAB-003 |
| Input | extraction_method, source references |
| Condition | extraction_method in ['direct', 'ocr', 'hitl-verified'] |
| True Path | Continue |
| False Path | REJECT (P3 violation) |

---

## Outcome Definitions

### ACCEPT

**Description:** Content is approved for use in CSDB/publications.

**Conditions Met:**
- Schema compliance ✓
- Source traceability ✓
- Confidence ≥ applicable threshold ✓
- No fabrication indicators ✓
- Effectivity defined ✓

**Actions:**
1. Create immutable audit record
2. Compute and store decision hash
3. Link to hash chain for integrity
4. Proceed to transformation/output

### REJECT

**Description:** Content cannot be used; requires remediation.

**Possible Reasons:**
| Code | Reason | Remediation |
|------|--------|-------------|
| ASIT-E001 | Schema violation | Fix data structure |
| ASIT-E002 | Missing source | Add source reference |
| ASIT-E003 | Low confidence | Improve extraction or HITL |
| P3-VIOLATION | Fabrication | Return to source |

**Actions:**
1. Log rejection with full context
2. Preserve original content unchanged
3. Queue for review if recurring
4. Return to source pipeline

### ESCALATE_HITL

**Description:** Human review required before proceeding.

**Trigger Conditions:**
- Confidence between thresholds (0.60-0.84 standard)
- Safety-critical content below 0.90
- Missing effectivity definition
- Agent-initiated REQUEST_HITL

**Actions:**
1. Create HITL task with context
2. Assign to appropriate reviewer category
3. Set SLA based on priority
4. Await response before proceeding

### WARN

**Description:** Content accepted with logged warning.

**Applicable Cases:**
- Minor format issues (ATA reference)
- Missing optional fields
- Non-critical BREX violations

**Actions:**
1. Log warning with details
2. Proceed with acceptance
3. Include warning in audit record

---

## ATA-Specific Decision Paths

### ATA 28: Fuel (LH₂ Systems)

**Additional Checks:**
- BREX-LH2-001: Temperature in Kelvin
- BREX-LH2-002: H₂ safety warnings present

```
Standard Path
     │
     ▼
┌────────────────────┐
│ Is cryogenic temp? │
└──────────┬─────────┘
           │
    ┌──────┴──────┐
    │             │
    ▼ Yes         ▼ No
┌───────────┐  ┌──────────┐
│ Unit = K? │  │ Continue │
└─────┬─────┘  └──────────┘
      │
  ┌───┴───┐
  │       │
  ▼ Yes   ▼ No
┌─────┐ ┌───────────┐
│ OK  │ │ WARN      │
└─────┘ │ Convert K │
        └───────────┘
```

### ATA 71: Power Plant (Fuel Cell)

**Additional Checks:**
- Electrical parameter validation
- Thermal limit verification

### ATA 95: AI/ML Systems

**Additional Checks:**
- BREX-AI-001: Model version traceability
- BREX-AI-002: Explainability score ≥ 0.70

---

## Integration Points

### Input Sources

| Source | Format | Integration Method |
|--------|--------|-------------------|
| KNU Extract | YAML | Direct parsing |
| CSDB Mapping | JSON | Schema validation |
| HITL Response | JSON | Response handler |

### Output Targets

| Target | Format | Trigger |
|--------|--------|---------|
| Audit Log | JSONL | Every decision |
| CSDB | S1000D XML | On ACCEPT |
| HITL Queue | JSON | On ESCALATE |
| Alert System | Webhook | On CRITICAL REJECT |

### API Contract

```python
# Input
{
    "content": {...},
    "source": {"doc_id": "...", "spans": [...]},
    "confidence": 0.87,
    "ata_chapter": "28",
    "safety_critical": false
}

# Output
{
    "decision_id": "BREX-2026...",
    "outcome": "ACCEPT",
    "rules_evaluated": [...],
    "explanation": "...",
    "audit_hash": "sha256:..."
}
```

---

## Audit Trail Requirements

### Every Decision Must Record:

1. **Decision ID**: Unique identifier (`BREX-{timestamp}-{random}`)
2. **Timestamp**: ISO 8601 UTC
3. **Context Hash**: SHA-256 of input data
4. **Rules Evaluated**: List of BREX rules checked
5. **Outcome**: ACCEPT/REJECT/ESCALATE_HITL/WARN
6. **Explanation**: Human-readable rationale
7. **Hash Chain**: Link to previous decision hash

### Hash Chain Integrity

Each audit entry includes:
```json
{
  "entry_hash": "sha256:current_hash",
  "previous_hash": "sha256:previous_hash"
}
```

This creates a tamper-evident log that can be verified:
```python
# Verification
expected_hash = sha256(entry_data + previous_hash)
assert entry_hash == expected_hash
```

---

## References

- [Master BREX Authority](../ASIT/GOVERNANCE/master_brex_authority.yaml)
- [BREX Decision Engine](./brex/brex_decision_engine.py)
- [Extraction Instructions](./instructions/extract.instructions.md)
- [HITL Instructions](./instructions/hitl.instructions.md)
- [Safety Instructions](./instructions/safety.instructions.md)

---

**Revision History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial release |

---

*This document is maintained by the ASIT Development Team. Submit updates via pull request.*
