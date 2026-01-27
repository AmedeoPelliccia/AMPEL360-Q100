# ATA-28 Traceability Conventions

**Version:** 1.0.0  
**Status:** Normative  
**Applies To:** ATA 28 — Fuel Systems (LH₂)

---

## Overview

This document defines the relationship types, trace link semantics, and directionality for all traceability within the ATA-28 Fuel Systems chapter.

---

## Trace Relationship Types

### Primary Relationships

| Relationship | Direction | Description |
|--------------|-----------|-------------|
| `derives-from` | Child → Parent | KNU derives from parent KNOT |
| `satisfies` | Artifact → Requirement | Design/Test satisfies requirement |
| `verifies` | Test → Requirement | Test procedure verifies requirement |
| `implements` | Design → Requirement | Design implements requirement |
| `publishes-to` | KDB → IDB | KDB content publishes to IDB |

### GENESIS Relationships

| Relationship | Direction | Description |
|--------------|-----------|-------------|
| `O-KNOT → Y-KNOT` | Discovery → Derived | Origin spawns derived uncertainty |
| `Y-KNOT → KNOT` | Derived → Framed | Derived uncertainty becomes framed |
| `KNOT → KNU` | Framed → Resolution | Framed uncertainty produces artifacts |

### Lifecycle Relationships

| Relationship | From | To | Description |
|--------------|------|-----|-------------|
| `allocates-to` | LC01 | LC02-LC14 | Problem statement allocates work |
| `traces-to` | LC02 | LC03 | Requirements trace to safety |
| `implements` | LC04 | LC02 | Design implements requirements |
| `validates` | LC06 | LC02 | Test validates requirements |
| `certifies` | LC08 | LC03 | Certification evidences safety |

---

## Traceability Matrix Structure

### KDB Internal Trace

```
KNOT-ATA28-10-00-001
    │
    ├── KNU-ATA28-10-00-001-REQ-001 (LC02)
    │       │
    │       ├── satisfies → CERT-CS25.981
    │       └── traces-to → KNU-ATA28-10-00-001-SAF-001
    │
    ├── KNU-ATA28-10-00-001-DES-001 (LC04)
    │       │
    │       └── implements → KNU-ATA28-10-00-001-REQ-001
    │
    └── KNU-ATA28-10-00-001-TST-001 (LC06)
            │
            └── verifies → KNU-ATA28-10-00-001-REQ-001
```

### KDB → IDB Trace

```
KDB/LM/SSOT/PLM/LC13/Maintenance_Source/AMM_TASKS/
    │
    └── publishes-to → IDB/PUB/AMM/CSDB/DM/DMC-AMPEL360-28-10-...
```

---

## Trace Link Attributes

### Required Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `source_id` | String | Source artifact identifier |
| `target_id` | String | Target artifact identifier |
| `relationship` | Enum | Relationship type |
| `confidence` | Float | 0.0-1.0 confidence score |
| `created_date` | ISO8601 | Link creation timestamp |
| `created_by` | String | Creator identifier |

### Optional Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `span` | String | Source document span reference |
| `rationale` | String | Justification for link |
| `verified_by` | String | HITL verifier (if applicable) |
| `verified_date` | ISO8601 | Verification timestamp |

---

## Trace File Formats

### TRACE_*.csv Schema

```csv
source_id,target_id,relationship,confidence,span,created_date,created_by,rationale
KNU-ATA28-10-00-001-REQ-001,KNU-ATA28-10-00-001-DES-001,implements,0.95,section:3.2,2026-01-27T10:00:00Z,STK_SE,"Design implements storage requirement"
```

### _derivation.yaml Schema

```yaml
artifact_id: "KNU-ATA28-10-00-001-REQ-001"
derivation_lineage:
  parent_knot: "KNOT-ATA28-10-00-001"
  derivation_date: "2026-01-27T10:00:00Z"
  derivation_authority: "STK_SE"
source_documents:
  - doc_id: "ATA-28-REQ-0001"
    span: "section:3.1.1"
    confidence: 0.92
downstream_artifacts:
  - "KNU-ATA28-10-00-001-DES-001"
  - "DMC-AMPEL360-28-10-00-00A-001A-A"
```

---

## Bidirectional Traceability Requirements

### Every KNU Must Have

1. **Upstream Trace**: Link to source KNOT via `_derivation.yaml`
2. **Source Trace**: Link to source documents with `doc_id` and `span`
3. **Downstream Trace**: Link to publications and dependent artifacts

### Verification Checks

- [ ] No orphaned artifacts (all KNUs trace to KNOT)
- [ ] No dangling references (all targets exist)
- [ ] Bidirectional consistency (forward and reverse links match)
- [ ] Confidence thresholds met (> 0.60 or HITL reviewed)

---

## Certification Traceability

### CS-25 Compliance Trace

| Regulation | ATA-28 Artifact | Relationship |
|------------|-----------------|--------------|
| CS 25.981 | KNU-ATA28-10-00-001-REQ-001 | satisfies |
| CS 25.863 | KNU-ATA28-60-00-001-SAF-001 | satisfies |
| CS 25.1183 | KNU-ATA28-60-10-001-REQ-001 | satisfies |

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 1.0.0 | STK_CM | Initial traceability conventions for ATA-28 |
