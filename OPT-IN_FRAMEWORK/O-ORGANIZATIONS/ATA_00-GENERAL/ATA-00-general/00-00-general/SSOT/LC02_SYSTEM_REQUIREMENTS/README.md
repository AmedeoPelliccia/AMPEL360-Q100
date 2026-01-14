# LC02_SYSTEM_REQUIREMENTS — ATA 00-00 General

**ATA Reference:** 00-00  
**Lifecycle Category:** LC02 — System Requirements  
**Parent:** [LC01_PROBLEM_STATEMENT](../LC01_PROBLEM_STATEMENT/)  

---

## 1. Overview

This folder contains **system-level requirements** artifacts for ATA 00-00 (General). Requirements in LC02 define **what** the program conventions must achieve, derived from the uncertainties identified in LC01.

> **LC02 Scope:** Requirements define testable, traceable statements of capability. They do not specify **how** to implement (deferred to LC04 Design).

---

## 2. Artifact Index

| KNU ID | Title | KNOT | Status |
|--------|-------|------|--------|
| [KNU-00-00-001-REQ-001](./KNU-00-00-001-REQ-001_program-glossary-requirements.md) | Program Glossary Requirements | KNOT-00-00-001 | COMPLETE |
| KNU-00-00-002-REQ-001 | Document Numbering Requirements | KNOT-00-00-002 | PLANNED |
| KNU-00-00-003-REQ-001 | Safety Labeling Requirements | KNOT-00-00-003 | PLANNED |
| KNU-00-00-004-REQ-001 | Cross-Reference System Requirements | KNOT-00-00-004 | PLANNED |
| [KNU-00-00-005-REQ-001](./KNU-00-00-005-REQ-001_unit-system-requirements.md) | Unit System Requirements | KNOT-00-00-005 | REVIEWED |

---

## 3. Derivation Metadata

Each KNU artifact has a corresponding `_derivation.yaml` file that documents **why the KNU exists** and its traceability lineage. See the [_derivation.schema.yaml](../LC04_DESIGN_DEFINITION/_derivation.schema.yaml) for the schema specification.

### Example Structure

```
LC02_SYSTEM_REQUIREMENTS/
├── KNU-00-00-005-REQ-001_unit-system-requirements.md    # Artifact content
├── KNU-00-00-005-REQ-001_derivation.yaml                # Derivation metadata
└── KNU-00-00-005-REQ-001_requirements-matrix.csv        # Requirements matrix
```

The `_derivation.yaml` includes:
- **derivation_lineage**: Parent KNOT, derivation type, and rationale
- **lifecycle_binding**: Explicit LC category (LC01-LC14)
- **tbd_resolution**: Collocated TBD resolution with evidence locations
- **node_task_reference**: Downstream action tracking with status

---

## 4. Requirements Summary

### 4.1 KNU-00-00-001-REQ-001 — Program Glossary Requirements

Defines requirements for the authoritative Q100 terminology glossary:

| Category | Requirements |
|----------|--------------|
| General | Glossary existence, authority, accessibility, language |
| Content | 6 term categories (BWB, H₂, Neural, Circularity, OPT-IN, DEP) |
| Structure | Entry format, definition quality, organization |
| Source | Citation hierarchy, program-defined terms, conflict resolution |
| Integration | CSDB publication, machine-readable format, cross-references |
| Governance | Change control, versioning, deprecation, review cycle |

**Key Metrics:**
- 24 total requirements (19 MUST, 5 SHOULD)
- ≥255 terms minimum across 6 categories
- BREX validation required for CSDB publication

---

## 5. Traceability

### 5.1 Upstream (from LC01)

```
LC01_PROBLEM_STATEMENT/
├── KNOT-00-00-001 → KNU-00-00-001-REQ-001
├── KNOT-00-00-002 → KNU-00-00-002-REQ-001
├── KNOT-00-00-003 → KNU-00-00-003-REQ-001
├── KNOT-00-00-004 → KNU-00-00-004-REQ-001
└── KNOT-00-00-005 → KNU-00-00-005-REQ-001
```

### 5.2 Downstream (to LC04, LC05, PUB)

```
LC02_SYSTEM_REQUIREMENTS/
├── KNU-00-00-001-REQ-001
│   ├── → LC04: KNU-00-00-001-ICD-001 (Database Schema)
│   ├── → LC05: KNU-00-00-001-ANA-001 (Gap Analysis)
│   ├── → LC08: KNU-00-00-001-CM-001 (Change Control)
│   └── → PUB:  KNU-00-00-001-PUB-001 (Glossary DM)
└── ...
```

---

## 6. Verification Approach

| Method | Application |
|--------|-------------|
| **Review** | Definition quality, source citations, content coverage |
| **Inspection** | Entry structure, uniqueness, alphabetical order |
| **Demonstration** | Accessibility without tooling |
| **BREX+CI** | CSDB publication compliance |

---

## 7. Navigation

- ↑ [00-00-general Section](../)
- ← [LC01_PROBLEM_STATEMENT](../LC01_PROBLEM_STATEMENT/)
- → [LC04_DESIGN_DEFINITION](../LC04_DESIGN_DEFINITION/)
- → [PUB/AMM/CSDB](../../PUB/AMM/CSDB/) *(planned)*

---

*LC02 requirements derived from LC01 uncertainties, driving LC04 design and PUB deliverables.*
