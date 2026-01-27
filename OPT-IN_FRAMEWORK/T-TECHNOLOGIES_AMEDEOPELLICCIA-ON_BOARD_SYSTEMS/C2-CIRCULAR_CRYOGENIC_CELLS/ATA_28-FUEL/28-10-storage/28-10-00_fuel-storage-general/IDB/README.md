# IDB — Information Data Base
## ATA-28-10-00 Fuel Storage General

**Version:** 1.0.0  
**Status:** Active  
**Last Updated:** 2026-01-27

---

## Overview

The Information Data Base (IDB) contains the **consumption and delivery surface** for ATA-28 Fuel Storage documentation. It includes:

- **OPS/LM**: Operational lifecycle artifacts (LC11-LC14)
- **PUB**: Publications (S1000D CSDB, EXPORT, IETP)
- **INDEX**: Provenance and audit tracking

---

## Structure

```
IDB/
├── README.md                    # This file
├── IDB_GOVERNANCE.md           # IDB governance policy
│
├── OPS/                        # Operational domain
│   └── LM/                     # Lifecycle-Managed operational artifacts
│       ├── LC11_OPERATIONS_CUSTOMIZATION/
│       ├── LC12_SUPPORT_SERVICES/
│       ├── LC13_MRO_SUSTAINMENT/
│       └── LC14_RETIREMENT_CIRCULARITY/
│
├── PUB/                        # Publication deliverables
│   ├── AMM/                    # Aircraft Maintenance Manual
│   │   ├── CSDB/               # S1000D Common Source Database
│   │   │   ├── DM/             # Data Modules
│   │   │   ├── PM/             # Publication Modules
│   │   │   ├── DML/            # Data Module Lists
│   │   │   ├── BREX/           # Business Rules Exchange
│   │   │   ├── ICN/            # Information Control Numbers
│   │   │   └── APPLICABILITY/  # ACT/PCT/CCT
│   │   ├── EXPORT/             # Rendered deliverables (PDF/HTML)
│   │   └── IETP_RUNTIME/       # Interactive Electronic Technical Pub
│   │
│   ├── IPC/                    # Illustrated Parts Catalog
│   ├── SRM/                    # Structural Repair Manual
│   └── CMM/                    # Component Maintenance Manual
│
└── INDEX/                      # Provenance and audit
    ├── IDB_RELEASE_NOTES.md
    ├── IDB_TRACE_SUMMARY.md
    ├── PUBLICATION_MANIFEST.yaml
    └── BASELINE_REFERENCE.yaml
```

---

## Data Flow

```
KDB/LM/SSOT/PLM/LC13/Maintenance_Source/AMM_TASKS/
        │
        ▼ (via CONTRACTS + ASIT pipeline)
        │
IDB/PUB/AMM/CSDB/DM/
        │
        ▼ (via S1000D transformation)
        │
IDB/PUB/AMM/EXPORT/PDF/
IDB/PUB/AMM/IETP_RUNTIME/
```

---

## S1000D Compliance

| Aspect | Status |
|--------|--------|
| **S1000D Issue** | 5.0 |
| **BREX Reference** | DMC-AMPEL360-00-00-00-00A-022A-A |
| **Schema Validation** | Enabled |
| **Applicability** | ACT/PCT/CCT configured |

---

## Publication Types

| Publication | Source | Content |
|-------------|--------|---------|
| **AMM** | LC13/Maintenance_Source | Scheduled maintenance tasks |
| **SRM** | LC13/Repair_Source | Structural repair procedures |
| **CMM** | LC13/Overhaul_Source | Component overhaul procedures |
| **IPC** | LC04/Design | Parts lists and illustrations |

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 1.0.0 | STK_PB | Initial IDB structure |
