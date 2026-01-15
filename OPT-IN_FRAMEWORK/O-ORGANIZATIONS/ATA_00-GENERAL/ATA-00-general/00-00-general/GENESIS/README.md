# GENESIS — Uncertainty Space

**Location:** `O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/GENESIS/`  
**Purpose:** Structure, code foundation, and uncertainty management  
**Nature:** Pure ontology layer — **NO EXECUTED ARTIFACTS OR OPERATIONAL DELIVERABLES**

---

## 1. Overview

GENESIS is the **uncertainty space** of the information system. It contains:

- **Structure and rules** for managing knowledge gaps
- **Discovery mechanisms** (O-KNOT layer)
- **Decision logic** (Y-KNOT layer)
- **Planning intent** (KNOT layer)

GENESIS exists to **frame problems**, not solve them. Solutions, executions, and authoritative artifacts live in [SSOT](../SSOT/).

---

## 2. Two-Space Rule

| Space | Purpose | Content |
|-------|---------|---------|
| **GENESIS** | Uncertainty + Structure | Ontology, discovery, justification, framing |
| **SSOT** | Certainty + Data | Authoritative lifecycle-bound truth, executions |

### GENESIS Rule #1: Structure and Uncertainty Only

GENESIS contains:
- ✅ Discovery records (O-KNOT)
- ✅ Justification logic (Y-KNOT)
- ✅ Framing and planning intent (KNOT)
- ✅ Cross-cutting registries
- ❌ **NO executed artifacts**
- ❌ **NO operational deliverables**
- ❌ **NO authoritative data**

### GENESIS Rule #2: Cross-ATA Provenance Allowed

GENESIS can register cross-ATA triggers (e.g., `O-KNOT-28-10-001`) as **genesis provenance** without claiming ATA ownership. The authoritative SSOT work for such items lives under the respective ATA chapter.

---

## 3. Directory Structure

```
GENESIS/
├── README.md                     # This file — ontology foundation + rules
│
├── _registry/                    # Cross-cutting registries
│   ├── o-knot_registry.csv       # Discovery layer tracking
│   ├── y-knot_registry.csv       # Justification layer tracking
│   └── knot_registry.csv         # Planning-level registry (optional)
│
├── O-KNOT/                       # Discovery layer
│   ├── O-KNOT-00-00-001/
│   │   ├── discovery.yaml        # Discovery metadata
│   │   └── heritage_analysis.md  # Heritage context
│   └── O-KNOT-xx-yy-zzz/         # Cross-ATA triggers allowed here
│
├── Y-KNOT/                       # Justification layer (decision logic)
│   ├── Y-KNOT-00-00-001-001/
│   │   ├── justification.yaml    # Justification metadata
│   │   ├── options_analysis.md   # Options comparison
│   │   └── decision_record.md    # Decision rationale
│   └── Y-KNOT-xx-yy-zzz-aaa/
│
└── KNOT/                         # Framing + planning intent (pre-SSOT)
    ├── KNOT-00-00-005/
    │   ├── framing.yaml          # Bounded scope + acceptance intent
    │   └── plan_outline.md       # High-level plan, still pre-authoritative
    └── KNOT-xx-yy-zzz/
```

---

## 4. Layer Definitions

### 4.1 O-KNOT (Discovery)

**Purpose:** Identify knowledge gaps, heritage issues, and uncertainties.

**Content:**
- `discovery.yaml` — Structured discovery metadata
- `heritage_analysis.md` — Context from prior work or industry standards
- Supporting analysis documents

**Trigger:** Any identified gap in knowledge or understanding.

**Output:** Links to Y-KNOT for decision-making.

---

### 4.2 Y-KNOT (Justification)

**Purpose:** Analyze options and record decision logic.

**Content:**
- `justification.yaml` — Structured justification metadata
- `options_analysis.md` — Comparison of alternatives
- `decision_record.md` — Final decision rationale

**Trigger:** O-KNOT discovery requiring a decision.

**Output:** Links to KNOT for framing and planning.

---

### 4.3 KNOT (Framing)

**Purpose:** Establish bounded scope and high-level plan (pre-authoritative).

**Content:**
- `framing.yaml` — Scope boundaries, acceptance criteria (intent level)
- `plan_outline.md` — High-level roadmap

**Trigger:** Y-KNOT decision that requires structured work.

**Output:** Feeds into SSOT LC01 (authoritative problem statement) and KNU execution planning.

---

## 5. Cross-ATA Trigger Example

GENESIS can include entries like:

```
GENESIS/
└── O-KNOT/
    └── O-KNOT-28-10-001/
        ├── discovery.yaml        # Cross-ATA trigger documented here
        └── heritage_analysis.md
```

This allows ATA 00 to document the **genesis provenance** of a discovery that affects ATA 28. The authoritative SSOT work for ATA 28-10 still lives in:

```
O-ORGANIZATIONS/ATA_28-FUEL/ATA-28-fuel/28-10-storage/SSOT/...
```

---

## 6. Registries

### 6.1 o-knot_registry.csv

Columns:
- `o_knot_id` — Unique O-KNOT identifier (e.g., O-KNOT-00-00-001)
- `title` — Brief description
- `trigger_source` — Origin (heritage, user feedback, analysis, etc.)
- `status` — active, resolved, superseded
- `created_date` — ISO 8601 timestamp
- `last_updated` — ISO 8601 timestamp

### 6.2 y-knot_registry.csv

Columns:
- `y_knot_id` — Unique Y-KNOT identifier (e.g., Y-KNOT-00-00-001-001)
- `o_knot_ref` — Parent O-KNOT reference
- `title` — Brief description
- `decision_status` — pending, approved, rejected
- `created_date` — ISO 8601 timestamp
- `last_updated` — ISO 8601 timestamp

### 6.3 knot_registry.csv

Columns:
- `knot_id` — Unique KNOT identifier (e.g., KNOT-00-00-005)
- `title` — Brief description
- `o_knot_ref` — Parent O-KNOT reference
- `y_knot_ref` — Parent Y-KNOT reference
- `status` — planning, approved, closed
- `created_date` — ISO 8601 timestamp
- `last_updated` — ISO 8601 timestamp

---

## 7. Relationship to SSOT

GENESIS is **upstream** of SSOT:

```
GENESIS (uncertainty)
    ↓
SSOT LC01 (authoritative problem statement)
    ↓
SSOT LC02+ (requirements, design, execution)
```

**Traceability:**
- SSOT LC01 KNOT entries link back to GENESIS (O-KNOT, Y-KNOT, KNOT) via `_derivation.yaml`
- SSOT KNU artifacts link forward to downstream outputs via `_downstream.yaml`

---

## 8. Key Principles

1. **GENESIS contains structure, not data** — It defines how uncertainty is managed, not authoritative solutions.
2. **No executions in GENESIS** — All executed work (requirements, designs, tests, publications) lives in SSOT or PUB.
3. **Cross-ATA provenance is allowed** — GENESIS can document discoveries that span multiple ATA chapters.
4. **GENESIS feeds SSOT** — Discovery → Justification → Framing → SSOT LC01 → KNU execution.

---

## 9. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_CM | Initial GENESIS README for ATA 00-00 restructure |

---

*GENESIS is the ontology foundation. Authoritative truth lives in [SSOT](../SSOT/).*
