# LC04_DESIGN_DEFINITION — ATA 00-00 General

**ATA Reference:** 00-00  
**Lifecycle Category:** LC04 — Design Definition  
**Parent:** [LC01_PROBLEM_STATEMENT](../LC01_PROBLEM_STATEMENT/)  

---

## 1. Overview

This folder contains **design definition** artifacts for ATA 00-00 (General), including interface control documents (ICDs), schema specifications, and design specifications.

> **LC04 Scope:** Design artifacts define **how** to implement system requirements from LC02. They specify interfaces, data schemas, and architectural patterns.

---

## 2. Key Artifacts

### 2.1 `_derivation.schema.yaml` — KNU Derivation Metadata Schema

The `_derivation.schema.yaml` defines the schema for `_derivation.yaml` files that document **why a KNU exists** and establish explicit traceability lineage.

#### Purpose

The derivation metadata answers the fundamental question: **"Why does this KNU exist?"**

It implements the OPT-IN Framework Normalization Model:

| Aspect | Current Model | Proposed Model | Implementation |
|--------|---------------|----------------|----------------|
| KNOT ID | `KNOT-00-00-005` | `KNOT-00-00-005` | Unchanged |
| KNU ID | `KNU-00-00-005-REQ-001` | `KNU_005_LC02_UNIT_SYS_REQ` | +lifecycle binding, -redundant ATA |
| TBD | CSV register (separate) | `_derivation.yaml` with TBD section | +collocated lineage |
| Execution | Implicit (file version) | `creation_record.created_utc` | +immutable timestamp |
| Downstream | README links | `node_task_reference` section | +explicit action tracking |

#### Key Sections in `_derivation.yaml`

1. **`derivation_lineage`** — Documents parent KNOT, derivation type, and rationale
2. **`lifecycle_binding`** — Explicit LC category (LC01-LC14)
3. **`creation_record`** — Immutable creation timestamp
4. **`tbd_resolution`** — Collocated TBD resolution with evidence locations
5. **`node_task_reference`** — Downstream action tracking with status

#### Example Usage

Each KNU artifact should have a corresponding `_derivation.yaml` file:

```
LC02_SYSTEM_REQUIREMENTS/
├── KNU-00-00-005-REQ-001_unit-system-requirements.md
├── KNU-00-00-005-REQ-001_derivation.yaml          # ← Derivation metadata
└── KNU-00-00-005-REQ-001_requirements-matrix.csv
```

---

## 3. Traceability

### 3.1 Upstream (from LC02)

```
LC02_SYSTEM_REQUIREMENTS/
├── KNU-00-00-005-REQ-001 → triggers LC04 design work
└── ...
```

### 3.2 Downstream (to LC05, LC06, PUB)

```
LC04_DESIGN_DEFINITION/
├── _derivation.schema.yaml
│   ├── → Used by all KNU _derivation.yaml files
│   └── → Enables automated traceability validation
└── ...
```

---

## 4. Navigation

- ↑ [00-00-general Section](../)
- ← [LC02_SYSTEM_REQUIREMENTS](../LC02_SYSTEM_REQUIREMENTS/)
- → [LC05_ANALYSIS_MODELS](../LC05_ANALYSIS_MODELS/) *(planned)*
- → [PUB/AMM/CSDB](../../PUB/AMM/CSDB/)

---

*LC04 design artifacts specify interfaces and schemas that implement LC02 requirements.*
