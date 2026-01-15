# 03_REGISTRIES — Registry Locations and Semantics

**Purpose:** Define where registries live and what they mean  
**Audience:** Data managers, engineers, auditors  
**Status:** Authoritative

---

## 1. Registry Types

| Registry | Purpose | Location Pattern |
|----------|---------|------------------|
| **o-knot_registry.csv** | Discovery tracking | `GENESIS/_registry/` or `GENESIS/O-KNOT/_registry.csv` |
| **y-knot_registry.csv** | Justification tracking | `GENESIS/_registry/` or `GENESIS/Y-KNOT/_registry.csv` |
| **knot_registry.csv** | Planning tracking | `GENESIS/_registry/` or `GENESIS/KNOT/_registry.csv` |
| **KNOTS.csv** | Authoritative uncertainties | `SSOT/LC01_PROBLEM_STATEMENT/KNOTS.csv` |
| **KNU_PLAN.csv** | Planned knowledge units | `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv` |

---

## 2. Programme-Level Registries

### 2.1 Programme Uncertainties

**Location:** `00-01-programme/GENESIS/O-KNOT/`

**Format:** Individual O-KNOT-PRG-* directories with `discovery.yaml`

**Purpose:** Track programme-level uncertainties before they cascade to technical systems

### 2.2 Information System Registries

**Location:** `00-00-general/GENESIS/_registry/`

**Files:**
- `o-knot_registry.csv` — Cross-cutting discoveries
- `y-knot_registry.csv` — Cross-cutting justifications
- `knot_registry.csv` — Cross-cutting framings

**Purpose:** Track information system ontology evolution

---

## 3. System-Level Registries

### 3.1 Per-ATA Registries

**Location:** `ATA_XX-.../Ch-SS-SB/GENESIS/_registry/`

**Files:**
- `o-knot_registry.csv`
- `y-knot_registry.csv`
- `knot_registry.csv`

**Purpose:** Track system-specific uncertainties and resolutions

### 3.2 Authoritative KNOT Register

**Location:** `ATA_XX-.../Ch-SS-SB/SSOT/LC01_PROBLEM_STATEMENT/KNOTS.csv`

**Columns:**
- KNOT_ID
- Title
- Problem_Statement
- Scope_In/Scope_Out
- Status (OPEN/IN_PROGRESS/BLOCKED/CLOSED)
- Owner_AoR
- Stakeholders
- Residual_Before/Residual_Target
- Dependencies
- Target_Close_Date

**Purpose:** Authoritative uncertainty register for execution

---

## 4. Knowledge Blockchain Ledger

**Location:** `finance/ledger.json`

**Purpose:** Immutable hash chain of NKU production and TT distribution

**Format:**
```json
{
  "ledger_version": "1.0",
  "genesis_hash": "sha256:...",
  "entries": [
    {
      "timestamp": "2026-01-15T10:00:00Z",
      "knot_id": "KNOT-25-10-001",
      "knu_id": "KNU-25-10-001-LC02-001",
      "tt_awarded": 15.5,
      "hash": "sha256:...",
      "prev_hash": "sha256:..."
    }
  ]
}
```

---

## 5. Registry Management

### 5.1 Who Updates Registries

| Registry | Updated By | When |
|----------|-----------|------|
| **GENESIS/_registry/** | STK_CM | When O-KNOT/Y-KNOT/KNOT created |
| **SSOT/LC01/KNOTS.csv** | KNOT owner | When KNOT promoted from GENESIS |
| **finance/ledger.json** | Automated | When TT distribution occurs |

### 5.2 Validation

All registries are validated by:
```bash
python tools/ci/registry_validator.py --check
```

---

## 6. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial registries documentation |

---

*This document defines where truth is recorded in AMPEL360 Q100.*
