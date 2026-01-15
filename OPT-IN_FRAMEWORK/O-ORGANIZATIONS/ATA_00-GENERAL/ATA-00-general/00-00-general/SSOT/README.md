# SSOT — Certainty Space

**Location:** `O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/SSOT/`  
**Purpose:** Authoritative lifecycle-bound data and deterministic reasoning substrate  
**Nature:** Single Source of Truth — **EXECUTED ARTIFACTS AND STRUCTURED DATA**

---

## 1. Overview

SSOT is the **certainty space** of the information system. It contains:

- **Authoritative lifecycle-bound artifacts** (LC01–LC14)
- **Executed work products** (requirements, designs, analyses, tests, configurations)
- **Deterministic reasoning substrate** (structured data, validated models)

SSOT exists to provide **certainty**. Uncertainty and exploration live in [GENESIS](../GENESIS/).

---

## 2. Two-Space Rule

| Space | Purpose | Content |
|-------|---------|---------|
| **GENESIS** | Uncertainty + Structure | Ontology, discovery, justification, framing |
| **SSOT** | Certainty + Data | Authoritative lifecycle-bound truth, executions |

### SSOT Rule #1: Authoritative, Lifecycle-Bound Truth

SSOT contains:
- ✅ Requirements (LC02)
- ✅ Design definitions (LC04)
- ✅ Analysis models (LC05)
- ✅ Verification artifacts (LC06)
- ✅ Configuration baselines (LC08)
- ✅ All executed work with `_executions/<UTC>/`
- ❌ **NO uncertainty exploration**
- ❌ **NO pre-approval discovery**
- ❌ **NO draft planning (that stays in GENESIS until promoted)**

### SSOT Rule #2: Executions Must Be Timestamped

Any executed artifact must live in:

```
SSOT/LCxx_.../KNU-xx-yy-zzz-LCxx-.../
    _executions/
        2026-01-14T18-32-00Z/
            artifact.md
```

This ensures full traceability and immutability of executed work.

---

## 3. Directory Structure

```
SSOT/
├── README.md                                # This file — SSOT rules
│
├── LC01_PROBLEM_STATEMENT/                  # Planning + commitments
│   ├── KNOTS.csv                            # Uncertainty register (authoritative)
│   ├── KNU_PLAN.csv                         # KNU execution plan
│   └── KNOT-00-00-005/
│       ├── _derivation.yaml                 # Links back to GENESIS (O-KNOT/Y-KNOT/KNOT)
│       └── _downstream.yaml                 # Planned outputs (KNU → CSDB/NU)
│
├── LC02_SYSTEM_REQUIREMENTS/                # Requirements
│   └── KNU-00-00-005-LC02-GENERAL-SYS_REQ/
│       ├── _derivation.yaml                 # Traceability to LC01
│       ├── _executions/
│       │   └── 2026-01-14T18-32-00Z/
│       │       └── artifact.md              # Timestamped execution
│       └── _downstream.yaml                 # Links to downstream artifacts
│
├── LC03_SAFETY_RELIABILITY/                 # Safety & reliability
├── LC04_DESIGN_DEFINITION/                  # Design definition (ICDs, schemas)
├── LC05_ANALYSIS_MODELS/                    # Analysis models
├── LC06_VERIFICATION/                       # Verification (tests, validations)
├── LC08_CONFIGURATION/                      # Configuration management
│
└── LCxx_.../                                # LC03–LC14 as required
```

---

## 4. Lifecycle Categories (LC)

SSOT organizes work by lifecycle phase:

| LC | Name | Purpose |
|----|------|---------|
| **LC01** | Problem Statement | Uncertainty orchestration, KNOT/KNU planning |
| **LC02** | System Requirements | Requirements definition |
| **LC03** | Safety & Reliability | Safety analysis, reliability models |
| **LC04** | Design Definition | ICDs, schemas, design artifacts |
| **LC05** | Analysis Models | Trade studies, simulations, analyses |
| **LC06** | Verification | Tests, validations, verification artifacts |
| **LC07** | Manufacturing | Manufacturing processes (if applicable) |
| **LC08** | Configuration | Configuration baselines, change control |
| **LC09** | Operations | Operational procedures (if applicable) |
| **LC10** | Support | Maintenance, support artifacts |
| **LC11** | Disposal | End-of-life procedures |
| **LC12** | Certification | Certification artifacts |
| **LC13** | Training | Training materials |
| **LC14** | Project Management | Project artifacts |

---

## 5. LC01 Special Role

LC01 is the **authoritative problem statement** that:

1. Promotes GENESIS discoveries (O-KNOT/Y-KNOT/KNOT) into authoritative KNOTs
2. Plans KNU execution across LC02–LC14
3. Tracks uncertainty reduction and TT allocation
4. Links back to GENESIS via `_derivation.yaml`
5. Links forward to downstream KNUs via `_downstream.yaml`

**LC01 files:**
- `KNOTS.csv` — Authoritative uncertainty register
- `KNU_PLAN.csv` — Planned KNU execution schedule
- `TIMELINE.csv` — Milestone tracking
- `RACI.csv` — Responsibility assignment
- `TOKENOMICS.yaml` — TT allocation rules
- `AWARDS_TT.csv` — TT distribution ledger

---

## 6. KNU Execution Structure

Each KNU (Knowledge Unit) follows this pattern:

```
LC02_SYSTEM_REQUIREMENTS/
└── KNU-00-00-005-LC02-GENERAL-SYS_REQ/
    ├── _derivation.yaml          # Traceability to LC01 KNOT
    ├── _executions/
    │   └── 2026-01-14T18-32-00Z/
    │       └── artifact.md       # Timestamped execution
    └── _downstream.yaml          # Links to downstream artifacts
```

### 6.1 _derivation.yaml

Links the KNU back to its parent KNOT and GENESIS provenance:

```yaml
knu_id: KNU-00-00-005-LC02-GENERAL-SYS_REQ
parent_knot: KNOT-00-00-005
genesis_provenance:
  o_knot: O-KNOT-00-00-001
  y_knot: Y-KNOT-00-00-001-001
  knot: KNOT-00-00-005
created_date: "2026-01-14T18:32:00Z"
status: active
```

### 6.2 _executions/

Contains timestamped execution artifacts. Each execution is immutable:

```
_executions/
├── 2026-01-14T18-32-00Z/
│   └── artifact.md
└── 2026-01-20T10-15-00Z/
    └── artifact.md
```

### 6.3 _downstream.yaml

Links the KNU to downstream artifacts (CSDB, NU, PUB):

```yaml
knu_id: KNU-00-00-005-LC02-GENERAL-SYS_REQ
downstream:
  - type: CSDB
    path: ../../PUB/AMM/CSDB/DM/DMC-AMPEL360-00-00-05-00A-001A-A_001-00_EN-US.XML
  - type: NU
    path: ../../CSDB_REF/NU/NU-00-00-005-001.yaml
```

---

## 7. Relationship to GENESIS

SSOT is **downstream** of GENESIS:

```
GENESIS (uncertainty)
    ↓ _derivation.yaml
SSOT LC01 (authoritative problem statement)
    ↓
SSOT LC02+ (requirements, design, execution)
    ↓ _downstream.yaml
CSDB_REF/NU or PUB
```

**Traceability:**
- SSOT artifacts link **back** to GENESIS via `_derivation.yaml`
- SSOT artifacts link **forward** to downstream outputs via `_downstream.yaml`

---

## 8. Key Principles

1. **SSOT contains authoritative truth** — All executed work, validated data, and lifecycle artifacts.
2. **All executions are timestamped** — Every execution lives in `_executions/<UTC>/`.
3. **Traceability is mandatory** — `_derivation.yaml` links to parent KNOT; `_downstream.yaml` links to outputs.
4. **SSOT is lifecycle-bound** — Work is organized by LC01–LC14 phases.
5. **SSOT feeds CSDB and PUB** — Downstream consumables derive from SSOT artifacts.

---

## 9. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_CM | Initial SSOT README for ATA 00-00 restructure |

---

*SSOT is the authoritative truth. Uncertainty exploration lives in [GENESIS](../GENESIS/).*
