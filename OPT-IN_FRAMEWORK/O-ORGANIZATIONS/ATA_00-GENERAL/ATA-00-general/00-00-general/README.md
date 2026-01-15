# ATA 00-00 — General (Information System Backbone)

**ATA Address:** ATA-00-00-00-00  
**Section:** 00-00  
**Subject:** 00 (GENERATION)  
**Title:** General — Information System Genesis and Core Conventions  
**Chapter:** [ATA 00 — General](../../)  
**Axis:** [O-ORGANIZATIONS](../../../)  

---

## 1. Overview

**ATA 00 / Section 00 / Subject 00 = GENERATION** is the **information-system genesis subject**.

Section 00-00 serves as the **Information System Backbone** for the AMPEL360 Q100 program. It implements the **two-space rule**: **GENESIS (uncertainty/structure)** vs **SSOT (certainty/data + deterministic reasoning)**.

This section establishes:

- **GENESIS space:** Ontology foundation, discovery (O-KNOT), justification (Y-KNOT), framing (KNOT)
- **SSOT space:** Authoritative lifecycle-bound truth, executed artifacts, deterministic reasoning substrate
- Program glossary and terminology standards
- Document architecture and numbering conventions
- Safety labeling standards for all publications
- Cross-reference system for traceability
- Unit systems and conversion standards

---

## 2. Two-Space Rule

### Locked Rule #1: GENESIS Contains Structure and Uncertainty Only

**GENESIS** (uncertainty space):
- ✅ Ontology, discovery, justification, framing
- ✅ Cross-ATA triggers (genesis provenance without ATA ownership)
- ❌ **NO executed artifacts**
- ❌ **NO operational deliverables**

### Locked Rule #2: SSOT Contains Authoritative Lifecycle-Bound Truth

**SSOT** (certainty space):
- ✅ Authoritative lifecycle-bound artifacts (LC01–LC14)
- ✅ Executed work products (requirements, designs, analyses, tests)
- ✅ Deterministic reasoning substrate
- ✅ All executions in `_executions/<UTC>/`

---

## 3. Folder Structure

```
00-00-general/                            # Ch=00 / Sec=00 (Information System)
├── README.md                             # ATA 00 overview + rules + entry points
├── 00_INDEX.md                           # Local quick index (optional but recommended)
│
├── GENESIS/                              # Uncertainty space (pure structure & code foundation)
│   ├── README.md                          # Ontology foundation + rules (no data here)
│   ├── _registry/                         # Cross-cutting registries
│   │   ├── o-knot_registry.csv
│   │   ├── y-knot_registry.csv
│   │   └── knot_registry.csv              # Optional: planning-level registry
│   │
│   ├── O-KNOT/                            # Discovery layer
│   │   ├── O-KNOT-00-00-001/
│   │   │   ├── discovery.yaml
│   │   │   └── heritage_analysis.md
│   │   └── O-KNOT-xx-yy-zzz/              # Cross-ATA triggers allowed here
│   │
│   ├── Y-KNOT/                            # Justification layer (decision logic)
│   │   ├── Y-KNOT-00-00-001-001/
│   │   │   ├── justification.yaml
│   │   │   ├── options_analysis.md
│   │   │   └── decision_record.md
│   │   └── Y-KNOT-xx-yy-zzz-aaa/
│   │
│   └── KNOT/                              # Framing + planning intent (pre-SSOT, no executions)
│       ├── KNOT-00-00-005/
│       │   ├── framing.yaml               # Bounded scope + acceptance intent
│       │   └── plan_outline.md            # High-level plan, still pre-authoritative
│       └── KNOT-xx-yy-zzz/
│
├── SSOT/                                  # Certainty space (structured data lake/warehouse)
│   ├── README.md                           # SSOT rules: authoritative, lifecycle-bound
│   │
│   ├── LC01_PROBLEM_STATEMENT/             # Planning + commitments
│   │   ├── KNOTS.csv
│   │   ├── KNU_PLAN.csv
│   │   └── KNOT-00-00-005/
│   │       ├── _derivation.yaml            # links back to GENESIS (O-KNOT/Y-KNOT/KNOT)
│   │       └── _downstream.yaml            # planned outputs (KNU → CSDB/NU)
│   │
│   ├── LC02_SYSTEM_REQUIREMENTS/
│   │   └── KNU-00-00-005-LC02-GENERAL-SYS_REQ/
│   │       ├── _derivation.yaml
│   │       ├── _executions/
│   │       │   └── 2026-01-14T18-32-00Z/
│   │       │       └── artifact.md
│   │       └── _downstream.yaml
│   │
│   └── LCxx_.../                           # LC03–LC14 as required
│
├── CSDB_REF/                               # Optional: reference datasets (operational-facing)
│   ├── README.md
│   └── NU/                                 # Atomic units derived from KNUs (consumables)
│       └── ...
│
└── PUB/                                    # Publications area (organizational-facing)
    ├── README.md
    └── AMM/
        └── ...
```

---

## 4. Information Flow

```
GENESIS (uncertainty)
    ↓ _derivation.yaml
SSOT LC01 (authoritative problem statement)
    ↓
SSOT LC02+ (requirements, design, execution)
    ↓ _downstream.yaml
CSDB_REF/NU (optional consumables)
    ↓
PUB (publications)
```

**Traceability:**
- SSOT artifacts link **back** to GENESIS via `_derivation.yaml`
- SSOT artifacts link **forward** to downstream outputs via `_downstream.yaml`

---

## 5. Key Spaces

### 5.1 GENESIS (Uncertainty Space)

**Purpose:** Structure, code foundation, and uncertainty management

**Contains:**
- **O-KNOT** — Discovery layer (knowledge gap identification)
- **Y-KNOT** — Justification layer (decision logic, options analysis)
- **KNOT** — Framing layer (planning intent, bounded scope)

**Rules:**
- ✅ Ontology, discovery, justification, framing
- ✅ Cross-ATA triggers allowed (genesis provenance)
- ❌ **NO executed artifacts**
- ❌ **NO operational deliverables**

→ [GENESIS/README.md](./GENESIS/README.md)

### 5.2 SSOT (Certainty Space)

**Purpose:** Authoritative lifecycle-bound data and deterministic reasoning substrate

**Contains:**
- **LC01–LC14** — Lifecycle categories (problem statement → certification)
- **KNU executions** — Timestamped artifacts in `_executions/<UTC>/`
- **Traceability** — `_derivation.yaml` (to GENESIS) and `_downstream.yaml` (to outputs)

**Rules:**
- ✅ Authoritative lifecycle-bound artifacts
- ✅ Executed work products (requirements, designs, analyses, tests)
- ✅ All executions timestamped
- ❌ **NO uncertainty exploration**
- ❌ **NO draft planning (stays in GENESIS until promoted)**

→ [SSOT/README.md](./SSOT/README.md)

### 5.3 CSDB_REF (Optional Reference Area)

**Purpose:** Reference datasets for operational-facing consumables

**Contains:**
- **NU** — Atomic units derived from KNUs

**Nature:** Optional for ATA 00; may remain reference-only if operational CSDB lives elsewhere.

→ [CSDB_REF/README.md](./CSDB_REF/README.md)

### 5.4 PUB (Publications)

**Purpose:** Organizational-facing deliverables

**Contains:**
- **AMM** — Aircraft Maintenance Manual (S1000D CSDB)
- **TRN** — Training materials

→ [PUB/](./PUB/)

---

## 6. LC01 Summary

| Attribute | Value |
|-----------|-------|
| **KNOTs** | 5 |
| **Planned KNUs** | 24 |
| **TT Pool** | 400 TT |
| **Target Closure** | 2026-05-31 |
| **Status** | ACTIVE |

### KNOTs in This Section

| KNOT ID | Title | Target Residual |
|---------|-------|-----------------|
| KNOT-00-00-001 | Program Terminology Standardization | ≤10 |
| KNOT-00-00-002 | Document Architecture Conventions | ≤10 |
| KNOT-00-00-003 | Safety Labeling Standards | ≤10 |
| KNOT-00-00-004 | Cross-Reference System Design | ≤15 |
| KNOT-00-00-005 | Unit Systems and Conversions | ≤5 |

→ [LC01_PROBLEM_STATEMENT](./SSOT/LC01_PROBLEM_STATEMENT/)

---

## 7. Key Artifacts

### 4.1 SSOT Artifacts (Planned)

| LC | Artifact | Description |
|----|----------|-------------|
| LC02 | Program Glossary Requirements | REQ document defining terminology needs |
| LC02 | Document Numbering Requirements | REQ document for ID conventions |
| LC02 | Safety Labeling Requirements | REQ document for warning standards |
| LC04 | Terminology Database Schema | ICD for glossary data structure |
| LC04 | Reference Syntax Specification | ICD for cross-reference URIs |
| LC05 | Terminology Gap Analysis | ANA comparing vs standards |
| LC08 | Version Control Convention Guide | CM process document |

### 4.2 PUB Artifacts (Planned)

| Publication | DM Title | Description |
|-------------|----------|-------------|
| AMM | Program Glossary | Searchable terminology reference |
| AMM | Safety Labeling Standard | Warning/caution/note guide |
| AMM | Unit Conversion Reference | Conversion tables |
| TRN | Document Architecture Training | Navigation and conventions guide |
| TRN | Cross-Reference Guide | Traceability user manual |

---

## 8. Stakeholders

| AoR | Responsibility |
|-----|----------------|
| STK_CM | Section owner, terminology, document conventions |
| STK_SE | Technical accuracy, unit systems |
| STK_SAF | Safety labeling standards |
| STK_DATA | Cross-reference system, database schema |
| STK_CERT | Regulatory alignment |
| STK_PUB | Publication formatting, S1000D compliance |

---

## 9. Dependencies

### Upstream

- Program-level naming conventions
- S1000D BREX business rules
- Regulatory terminology requirements

### Downstream

- All 78 other ATA chapters reference 00-00 conventions
- All lifecycle categories use document architecture
- All publications apply safety labeling standards

---

## 10. Navigation

- ↑ [ATA 00 Chapter](../../)
- ↑ [O-ORGANIZATIONS Axis](../../../)
- → [00_INDEX.md](./00_INDEX.md) — Local quick index
- → [GENESIS/](./GENESIS/) — Uncertainty space
- → [SSOT/](./SSOT/) — Certainty space
- → [CSDB_REF/](./CSDB_REF/) — Reference datasets
- → [PUB/](./PUB/) — Publications
- → [00-90 Tables/Schemas/Index](../00-90-tables-schemas-index/)

---

## 11. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_CM | Restructured as Information System Backbone with GENESIS/SSOT separation |
| 2026-01-11 | STK_CM | Initial section README |

---

*Section 00-00 establishes the information system backbone and core conventions for the entire Q100 program.*

*ATA 00 / Section 00 / Subject 00 = GENERATION is the information-system genesis subject.*
