# 01_ARCHITECTURE_OVERVIEW — Information Flows

**Purpose:** GENESIS → SSOT → CSDB → NU information architecture  
**Audience:** Technical leads, architects, data managers  
**Status:** Authoritative

---

## 1. Core Architecture Principle

> **GENESIS defines structure. SSOT populates truth. CSDB delivers operations.**

---

## 2. Two-Space Rule

| Space | Purpose | Content | Authority |
|-------|---------|---------|-----------|
| **GENESIS** | Uncertainty + Structure | Ontology, discovery, justification, framing | Pre-authoritative |
| **SSOT** | Certainty + Data | Lifecycle-bound truth, executed artifacts | Authoritative |

---

## 3. Information Flow

```
EU Policy Intent (00-02)
    ↓
Programme Authority (00-01)
    ↓
GENESIS (Uncertainty Space)
    ├── O-KNOT (Discovery: problem identification)
    ├── Y-KNOT (Justification: decision logic)
    └── KNOT (Framing: planning intent)
    ↓ _derivation.yaml
SSOT (Certainty Space)
    ├── LC01 (Authoritative problem statement)
    ├── LC02-LC14 (Lifecycle artifacts)
    └── _executions/<UTC>/ (Timestamped work)
    ↓ _downstream.yaml
CSDB_REF/NU (Optional Reference)
    └── Atomic consumables
    ↓
PUB/CSDB (Publications)
    └── S1000D deliverables
```

---

## 4. GENESIS Layer

### 4.1 Purpose

GENESIS manages **uncertainty** before it becomes authoritative truth.

### 4.2 Components

| Component | Purpose | Example |
|-----------|---------|---------|
| **O-KNOT** | Discover gaps | O-KNOT-25-10-001: Flight compartment layout undefined |
| **Y-KNOT** | Justify decisions | Y-KNOT-25-10-001-001: Why crew seat positioning matters |
| **KNOT** | Frame solutions | KNOT-25-10-001: Bounded scope for seat layout |
| **Registries** | Track lineage | o-knot_registry.csv, y-knot_registry.csv, knot_registry.csv |

### 4.3 Rules

- ✅ Structure, ontology, framing
- ✅ Cross-ATA triggers (genesis provenance)
- ❌ **NO executed artifacts**
- ❌ **NO operational deliverables**

---

## 5. SSOT Layer

### 5.1 Purpose

SSOT contains **authoritative, lifecycle-bound truth**.

### 5.2 Lifecycle Categories

| LC | Name | Purpose |
|----|------|---------|
| **LC00** | Programme/Funding Baseline | Programme & funding authority (00-01, 00-02 only) |
| **LC01** | Problem Statement | Uncertainty orchestration, KNOT → KNU planning |
| **LC02** | System Requirements | Requirements definition |
| **LC03** | Safety & Reliability | Safety analysis, FMEA, hazard logs |
| **LC04** | Design Definition | ICDs, schemas, design artifacts |
| **LC05** | Analysis Models | Trade studies, simulations, analyses |
| **LC06** | Verification | Tests, validations, compliance evidence |
| **LC08** | Configuration | Baselines, change control, effectivity |

### 5.3 Rules

- ✅ Authoritative lifecycle-bound artifacts
- ✅ Executed work in `_executions/<UTC>/`
- ✅ Traceability via `_derivation.yaml` and `_downstream.yaml`
- ❌ **NO uncertainty exploration** (that stays in GENESIS)

---

## 6. Traceability Links

### 6.1 Derivation (Backward Link)

`_derivation.yaml` links SSOT artifacts **back** to GENESIS provenance:

```yaml
knu_id: KNU-25-10-001-LC02-SEAT-LAYOUT-REQ
parent_knot: KNOT-25-10-001
genesis_provenance:
  o_knot: O-KNOT-25-10-001
  y_knot: Y-KNOT-25-10-001-001
  knot: KNOT-25-10-001
created_date: "2026-01-15T10:00:00Z"
status: active
```

### 6.2 Downstream (Forward Link)

`_downstream.yaml` links SSOT artifacts **forward** to consumables:

```yaml
knu_id: KNU-25-10-001-LC04-SEAT-LAYOUT-ICD
downstream:
  - type: CSDB
    path: ../../PUB/AMM/CSDB/DM/DMC-AMPEL360-25-10-01-00A-001A-A_001-00_EN-US.XML
  - type: NU
    path: ../../CSDB_REF/NU/NU-25-10-001-001.yaml
```

---

## 7. CSDB_REF/NU Layer (Optional)

### 7.1 Purpose

Reference area for **atomic consumables** derived from SSOT.

### 7.2 NU (Nomenclature/Normalized Unit)

**NUs** are single-purpose, reusable units for operational use:

```yaml
nu_id: NU-25-10-001-001
title: "Crew Seat Position: Captain"
source_knu: KNU-25-10-001-LC04-SEAT-LAYOUT-ICD
source_execution: 2026-01-15T10:00:00Z
data:
  position_x_mm: 2350
  position_y_mm: 500
  position_z_mm: 1200
  orientation_deg: 0
created_date: "2026-01-15T10:30:00Z"
status: active
```

---

## 8. PUB/CSDB Layer

### 8.1 Purpose

**Publication-grade deliverables** for operational use.

### 8.2 S1000D Components

| Component | Purpose |
|-----------|---------|
| **DM** | Data Modules (atomic content) |
| **PM** | Publication Modules (assemblies) |
| **DML** | Data Module Lists (controlled lists) |
| **BREX** | Business rules (validation) |
| **ICN** | Graphics (illustrations) |
| **APPLICABILITY** | ACT/PCT/CCT (product/condition filtering) |

---

## 9. Knowledge Blockchain Ledger (KBL)

The **KBL** provides **immutable traceability**:

```
O-KNOT-25-10-001
    ↓ hash + timestamp
Y-KNOT-25-10-001-001
    ↓ hash + timestamp
KNOT-25-10-001
    ↓ hash + timestamp
SSOT LC01 KNOT-25-10-001
    ↓ hash + timestamp
KNU-25-10-001-LC02-* execution
    ↓ hash + timestamp
CSDB DMC-AMPEL360-25-10-01-*
```

**Audit trail:** `finance/ledger.json` + `GENESIS/_registry/`

---

## 10. TEKNIA Integration

### 10.1 NKU (Net Knowledge Unit)

An **NKU** is the smallest verifiable increment of understanding that reduces uncertainty.

**Measured by:**
- Residual reduction (100 → target)
- Evidence provided (models, data, tests)
- Bounded applicability

### 10.2 TEKTOK (Knowledge Use)

A **TEKTOK** governs knowledge use:
- References NKUs
- Defines rights of use/reuse
- Allocates risk

**EU mapping:**
- NKU → results & evidence
- TEKTOK → exploitation, licensing

---

## 11. Key Flows

### 11.1 Discovery → Resolution

```
Problem identified (O-KNOT)
    → Decision made (Y-KNOT)
    → Scope framed (KNOT)
    → Work authorized (SSOT LC01)
    → Artifacts produced (SSOT LC02-LC14)
    → Publications delivered (PUB/CSDB)
```

### 11.2 Uncertainty → Certainty

```
Residual = 100 (high uncertainty)
    → Evidence produced (SSOT artifacts)
    → Residual = 10 (low uncertainty)
    → KNOT closed, TT rewarded
```

---

## 12. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial architecture overview |

---

*This architecture overview defines the authoritative information flows for AMPEL360 Q100.*
