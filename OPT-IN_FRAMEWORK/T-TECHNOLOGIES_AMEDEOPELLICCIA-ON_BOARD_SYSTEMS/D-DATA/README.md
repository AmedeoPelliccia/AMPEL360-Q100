# D-DATA

**Data & Recording Systems (ATA 31, 45)**

This axis of the OPT-IN Framework covers **data management and recording systems** for the AMPEL360 Q100 aircraft — indicating and recording systems, and central maintenance systems.

> **Governance Note:** ATA chapters 31 and 45 are standard ATA chapters for Data Systems. They represent *"what captures and manages data"* — flight data recorders, central computers, warning systems, display systems, and maintenance systems.

---

## ATA Chapters in This Axis

| Chapter | System | Description |
|---------|--------|-------------|
| ATA 31 | Indicating/Recording | Instrument panels, recorders, central computers, warning and display systems |
| ATA 45 | Central Maintenance System (CMS) | Aircraft-wide maintenance diagnostics and health monitoring |

---

## Operational Rule

> **D-DATA (T-TECHNOLOGIES / data)**: *"lo que captura y gestiona datos"* → instruments, recorders, computers, warning systems, displays, CMS.

If the artifact is **data/recording/monitoring** → place in **D-DATA**.

---

## Structure

```
D-DATA/
├── README.md
├── 00_INDEX.md
│
├── ATA_31-INDICATING_RECORDING/
│   └── ATA-31-indicating-recording/
│       ├── 31-00-general/
│       ├── 31-10-instrument-control-panels/
│       └── ... (through 31-90)
│
└── ATA_45-CENTRAL_MAINTENANCE_SYSTEM_CMS/
    └── ATA-45-central-maintenance-system/
        ├── 45-00-general/
        ├── 45-05-cms-aircraft-general/
        └── ... (through 45-90)
```

---

## Content Pattern

Each sub-subject follows the canonical SSOT + PUB pattern:

```
xx-yy-<sub-subject>/
├── SSOT/
│   ├── LC01_PROBLEM_STATEMENT/
│   ├── LC02_SYSTEM_REQUIREMENTS/
│   ├── ...
│   └── LC14_RETIREMENT_CIRCULARITY/
│
└── PUB/
    ├── CSDB/
    │   ├── APPLICABILITY/
    │   ├── BREX/
    │   ├── COMMON/
    │   ├── DM/
    │   ├── DML/
    │   ├── ICN/
    │   └── PM/
    ├── EXPORT/
    └── IETP/
```

---

## Related Documentation

- [OPT-IN Framework Standard](../../../OPT-IN_FRAMEWORK_STANDARD.md)
- [I-INFORMATION — Information Systems](../I-INFORMATION/)
- [AI→ASI Transition Proposal](../../../AI-ASI-TP.md)

---

<p align="center">
  <em>AMPEL360 Q100 — D-DATA Axis</em>
</p>
