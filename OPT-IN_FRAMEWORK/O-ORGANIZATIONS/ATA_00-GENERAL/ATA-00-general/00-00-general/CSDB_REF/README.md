# CSDB_REF — Reference Datasets

**Location:** `O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/CSDB_REF/`  
**Purpose:** Reference datasets for operational-facing consumables  
**Nature:** Optional reference area — **DERIVED FROM SSOT**

---

## 1. Overview

CSDB_REF contains reference datasets that derive from SSOT artifacts. These are **operational-facing consumables** used by downstream systems, tools, or processes.

For ATA 00, CSDB_REF may remain **reference-only** if operational CSDB instantiation lives in its own domain or under specific ATA chapters.

---

## 2. Purpose

CSDB_REF serves as:
- A **reference area** for atomic units (NUs) derived from KNUs
- A **staging area** for CSDB-bound content before publication
- An **optional bridge** between SSOT and operational CSDB systems

---

## 3. Directory Structure

```
CSDB_REF/
├── README.md                    # This file
│
└── NU/                          # Atomic units derived from KNUs (consumables)
    ├── NU-00-00-001-001.yaml
    ├── NU-00-00-002-001.yaml
    └── ...
```

---

## 4. NU (Atomic Units)

**NU** (Nomenclature Unit or Normalized Unit) represents an **atomic consumable** derived from a KNU:

- **Granularity:** Single-purpose, reusable unit
- **Source:** SSOT KNU artifacts
- **Target:** CSDB, downstream tools, APIs

### Example NU Structure

```yaml
nu_id: NU-00-00-005-001
title: "Unit Conversion: Pressure (SI → Imperial)"
source_knu: KNU-00-00-005-LC04-UNIT-CONVERSION-TABLE
source_execution: 2026-01-14T18-32-00Z
data:
  unit_from: "kPa"
  unit_to: "psi"
  conversion_factor: 0.145038
  precision: 3
  notes: "Rounded to 3 decimal places for operational use"
created_date: "2026-01-14T18:32:00Z"
status: active
```

---

## 5. Relationship to SSOT

CSDB_REF is **downstream** of SSOT:

```
SSOT LC02+ (requirements, design, execution)
    ↓ _downstream.yaml
CSDB_REF/NU (atomic consumables)
    ↓
CSDB (operational database)
```

**Traceability:**
- Each NU links back to its source KNU via `source_knu` and `source_execution`
- SSOT KNUs link forward to NUs via `_downstream.yaml`

---

## 6. Optional Nature

For **ATA 00** (General/Organizational), CSDB_REF may remain **minimal or reference-only** if:
- Operational CSDB instantiation lives in a separate domain
- Specific ATA chapters manage their own operational datasets
- ATA 00 serves purely as an organizational/information system backbone

---

## 7. Key Principles

1. **CSDB_REF is derived, not authoritative** — Source of truth is SSOT.
2. **NUs are atomic and reusable** — Single-purpose consumables for downstream use.
3. **Traceability is mandatory** — Each NU links back to source KNU.
4. **Optional for ATA 00** — May remain reference-only if operational CSDB lives elsewhere.

---

## 8. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_CM | Initial CSDB_REF README for ATA 00-00 restructure |

---

*CSDB_REF contains derived reference datasets. Authoritative truth lives in [SSOT](../SSOT/).*
