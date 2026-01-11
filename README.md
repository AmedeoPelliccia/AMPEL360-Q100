# AMPEL360 Q100 (AMPEL360-AIR-T) — Hydrogen-Hybrid Electric BWB Aircraft

<p align="center">
  <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Status-Active%20Development-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/ATA%20Chapters-79-orange" alt="ATA Chapters">
  <img src="https://img.shields.io/badge/Framework-OPT--IN-purple" alt="Framework">
  <img src="https://img.shields.io/badge/Publications-S1000D-teal" alt="S1000D">
  <img src="https://img.shields.io/badge/Tokenomics-TT%20v3. 14-gold" alt="Teknia Tokens">
</p>

<p align="center">
  <strong>Digital engineering baseline and publication-grade CSDB for a next-generation hydrogen-electric BWB aircraft.</strong>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#how-this-repo-is-organized">Repo Organization</a> •
  <a href="#lc01-uncertainty-orchestration">LC01 Orchestration</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#publishing-model-csdb--ietp">Publishing Model</a> •
  <a href="#standards--compliance">Standards</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## Overview

**AMPEL360 Q100** is a next-generation **~100 passenger regional aircraft concept** featuring: 

| Technology | Description |
|------------|-------------|
| **Blended Wing Body (BWB)** | High aerodynamic efficiency and integrated volume |
| **H₂ PEM Fuel Cells** | Primary electrical power generation from hydrogen |
| **Distributed / Open-Fan Propulsors** | Distributed propulsion architecture for efficiency and noise reduction |
| **Peak-Power Buffering** | Buffer strategy for transients (energy management and load leveling) |
| **Circularity + DPP** | Digital Product Passport foundations for lifecycle traceability |

This repository contains a **certification-grade digital baseline** organized under the **OPT-IN Framework** and structured for **SSOT + PUB** workflows.

**Live Spec (demo):** [v0-ampel-360-aircraft-specification.vercel.app](https://v0-ampel-360-aircraft-specification.vercel.app)

---

## How This Repo Is Organized

At a high level, the repo separates **engineering truth** from **publishable deliverables**:

```
┌─────────────────────────────────────────────────────────────────┐
│                         AMPEL360-AIR-T                          │
├─────────────────────────┬───────────────────────────────────────┤
│          SSOT (Back)    │           PUB (Front)                 │
│   Lifecycle Engineering │    Controlled Deliverables            │
│   • Requirements        │    • CSDB (S1000D)                    │
│   • Safety Evidence     │    • EXPORT (PDF/HTML)                │
│   • Design/ICDs         │    • IETP (Runtime)                   │
│   • V&V Artifacts       │                                       │
└─────────────────────────┴───────────────────────────────────────┘
```

### SSOT (Single Source of Truth)

**SSOT** is the *system of record* for lifecycle engineering artifacts (LC01–LC14):

| Folder | Content |
|--------|---------|
| `LC01_PROBLEM_STATEMENT` | **Uncertainty orchestration**:  KNOTs, expected KNUs, timelines, RACI, tokenomics |
| `LC02_SYSTEM_REQUIREMENTS` | Requirements and traceability |
| `LC03_SAFETY_RELIABILITY` | Safety analysis, hazard logs, FMEA |
| `LC04_DESIGN_DEFINITION` | Design specs, ICDs, architecture |
| `LC05_ANALYSIS_MODELS` | FEA, CFD, thermal, performance models |
| `LC06_VERIFICATION` | Test procedures, evidence, compliance |
| `LC07_VALIDATION` | Integration and validation artifacts |
| `LC08_CONFIGURATION` | Baselines, effectivity, change control |
| `LC09_PRODUCTION` | Manufacturing specs, tooling |
| `LC10_OPERATIONS` | Operational documentation sources |
| `LC11_MAINTENANCE` | Maintenance program sources |
| `LC12_CUSTOMER_CARE` | Customer support, technical services, post-delivery care |
| `LC13_TRAINING` | Training content sources |
| `LC14_RETIREMENT_CIRCULARITY` | End-of-life, recycling, DPP |

### PUB (Publications)

**PUB** is the controlled *delivery surface*:

| Component | Purpose |
|-----------|---------|
| **CSDB** | S1000D Common Source Database (DM/PM/DML/BREX/ICN/APPLICABILITY) |
| **EXPORT** | Rendered deliverables (PDF, HTML, other outputs) per publication |
| **IETP** | Runtime "image" (viewer/config/index + packaging) for interactive delivery |

### Rule of Thumb

| If artifact is...  | Place in... |
|-------------------|-------------|
| Authoritative engineering evidence | `SSOT/` |
| Publishable or deliverable | `PUB/` |

---

## LC01 — Uncertainty Orchestration & Tokenomics

**LC01_PROBLEM_STATEMENT** is the controlled orchestration layer for each ATA node.  It declares:

- **What is unknown** (KNOTs — uncertainty register)
- **What evidence must be created** (expected KNUs)
- **Who is accountable** (stakeholders/RACI)
- **When it must converge** (timeline/milestones)
- **How incentives are allocated** (TT rewards via tokenomics)

### LC01 Folder Structure

```
.../SSOT/LC01_PROBLEM_STATEMENT/
├── README.md              # Overview and closure criteria
├── KNOTS.csv              # Uncertainty register
├── KNU_PLAN.csv           # Expected KNUs per KNOT
├── TIMELINE.csv           # Milestones and dates
├── RACI.csv               # Stakeholder responsibility matrix
├── TOKENOMICS_TT.yaml     # Reward pool and allocation parameters
└── AWARDS_TT.csv          # Actual TT distributions (populated at closure)
```

### KNOTS.csv — Uncertainty Register

Each KNOT represents a *known unknown* that must be resolved:

| Field | Description |
|-------|-------------|
| `KNOT_ID` | Unique identifier (e.g., `KNOT-ATA25-10-00-001`) |
| `Title` | Short description of the uncertainty |
| `Problem_Statement` | What is unknown and why it matters |
| `Scope` | In-scope / out-of-scope boundaries |
| `Status` | `OPEN` / `IN_PROGRESS` / `BLOCKED` / `CLOSED` |
| `Owner_AoR` | Primary Area of Responsibility (e.g., `STK_SE`) |
| `Stakeholders` | Semicolon-separated list of involved AoRs |
| `Residual_Before` | Initial uncertainty level (0–100) |
| `Residual_Target` | Acceptable residual at closure |
| `Dependencies` | Other KNOTs this depends on |
| `Target_Close_Date` | Expected closure date |

**Example:**
```csv
KNOT_ID,Title,Problem_Statement,Scope,Status,Owner_AoR,Stakeholders,Residual_Before,Residual_Target,Target_Close_Date
KNOT-ATA25-10-00-001,Flight Compartment Layout,Crew seat positioning undefined for Q10,In:  seats; restraints.  Out:  galley,OPEN,STK_SE,"STK_SAF;STK_CERT;STK_CM",100,10,2026-02-28
```

### KNU_PLAN.csv — Expected Knowledge Units

Each KNU is a concrete artifact that addresses a KNOT:

| Field | Description |
|-------|-------------|
| `KNU_ID` | Unique identifier (e.g., `KNU-ATA25-10-00-REQ-001`) |
| `KNOT_ID` | Parent KNOT being addressed |
| `KNU_Type` | `REQ` / `ICD` / `ANA` / `TEST` / `SAF` / `CM` / `PUB` |
| `Artifact_Class` | `SSOT` or `CSDB` |
| `Expected_Location` | Relative path to target folder |
| `Acceptance_Criteria` | What makes this KNU complete |
| `Verification_Method` | `Review` / `Inspection` / `Test` / `BREX+CI` |
| `Owner_AoR` | Responsible stakeholder |
| `Due_Date` | Target completion date |
| `Status` | `PLANNED` / `IN_PROGRESS` / `COMPLETE` / `ACCEPTED` |
| `Effort_Predicted` | Estimated effort (story points / normalized hours) |

**Example:**
```csv
KNU_ID,KNOT_ID,KNU_Type,Artifact_Class,Expected_Location,Acceptance_Criteria,Owner_AoR,Due_Date,Status,Effort_Predicted
KNU-ATA25-10-00-REQ-001,KNOT-ATA25-10-00-001,REQ,SSOT,../LC02_SYSTEM_REQUIREMENTS/,Requirement traced + reviewed,STK_SE,2026-01-25,PLANNED,5
KNU-ATA25-10-00-PUB-DM-001,KNOT-ATA25-10-00-001,PUB,CSDB,../../PUB/AMM/CSDB/DM/,DM passes BREX,STK_CM,2026-02-15,PLANNED,3
```

### TOKENOMICS_TT.yaml — Reward Allocation

Defines the **Teknia Token (TT)** reward pool and distribution algorithm for each KNOT: 

```yaml
tokenomics:
  token_symbol: "TT"
  unit:  "deg"                    # 1 TT = 360 deg
  deg_per_tt: 360

knot_reward: 
  knot_id: "KNOT-ATA25-10-00-001"
  pool_tt: 100                   # Total TT available for this KNOT
  pool_deg: 36000

eligibility:
  require_status: ["COMPLETE", "ACCEPTED"]
  require_links_resolved: true
  require_brex_pass_for_pub: true

allocation:
  method: "effort_plus_impact"
  formula: "w_i = α·Ê_i + (1-α)·Î_i; T_i = P_k · w_i"
  params:
    alpha_effort: 0.30           # 30% weight on effort
    alpha_impact: 0.70           # 70% weight on impact
    lambda_spillover: 0.50       # Spillover multiplier for adjacent KNOTs
    rounding:  "floor_deg"

measurement:
  residual_scale: "0.. 100"
  required_fields_per_knu: 
    - effort_predicted           # E_i
    - delta_residual_primary     # ΔR_k,i (direct impact)
    - delta_residual_adjacent_sum # S_i (spillover impact)
    - verification_status
    - linked_artifacts

closure_record:
  residual_before: 100
  residual_after: null           # Populated at closure
  residual_target: 10
```

### Token Distribution Formula

Rewards are distributed using a weighted combination of **effort** and **impact**:

```
w_i = α · Ê_i + (1 - α) · Î_i
T_i = P_k · w_i
```

Where:
- `P_k` = Pool amount (TT) for the KNOT
- `α` = Effort weight (default: 0.30)
- `Ê_i` = Normalized effort:  `E_i / Σ E_i`
- `Î_i` = Normalized impact: `I_i / Σ I_i`
- `I_i` = Effective impact:  `ΔR_k,i + λ · S_i`
- `S_i` = Spillover:  `Σ(a_k→j · ΔR_j,i)` for adjacent KNOTs
- `λ` = Spillover multiplier (default: 0.50)

**This ensures:**
- Contributors who do necessary work are rewarded (effort)
- Contributors who reduce uncertainty most are rewarded more (impact)
- Cross-KNOT contributions are recognized (spillover)

### RACI.csv — Stakeholder Responsibilities

| Field | Description |
|-------|-------------|
| `KNOT_ID` | KNOT identifier |
| `Activity` | Specific activity or deliverable |
| `R` | Responsible (does the work) |
| `A` | Accountable (final approver) |
| `C` | Consulted (provides input) |
| `I` | Informed (kept aware) |

**Allowed AoR Values:**
`STK_SE`, `STK_SAF`, `STK_CERT`, `STK_CM`, `STK_OPS`, `STK_TEST`, `STK_PMO`, `STK_AI`, `STK_CY`, `STK_MRO`, `STK_DATA`

### TIMELINE.csv — Milestones

| Field | Description |
|-------|-------------|
| `Milestone_ID` | Unique milestone identifier |
| `KNOT_ID` | Associated KNOT |
| `Name` | Milestone name |
| `Date` | Target date |
| `Entry_Criteria` | What must be true to enter |
| `Exit_Criteria` | What must be true to exit |
| `Status` | `PLANNED` / `ACTIVE` / `COMPLETE` |

### AWARDS_TT. csv — Distribution Ledger

Populated at KNOT closure with actual TT distributions: 

```csv
timestamp,knot_id,knu_id,owner,effort_predicted,delta_residual_primary,delta_residual_adjacent_sum,weight,tokens_tt,tokens_deg,tx_id,validated_by
2026-02-20T14:30:00Z,KNOT-ATA25-10-00-001,KNU-ATA25-10-00-REQ-001,alice,5,30,10,0. 412,41. 2,14832,TX-2026-0142,knot_owner
```

### Closure Criteria

A KNOT is **CLOSED** when: 
1. ✅ All planned KNUs reach `COMPLETE` or `ACCEPTED` status
2. ✅ Residual drops to or below target (e.g., 100 → ≤10)
3. ✅ All PUB artifacts pass BREX validation
4. ✅ All trace links resolve (no dangling references)
5. ✅ Signoffs captured in evidence pack
6. ✅ TT rewards distributed and logged

---

## OPT-IN Framework (5-Axis Topology)

The OPT-IN Framework organizes all 79 ATA chapters across five axes:

```
OPT-IN_FRAMEWORK/
├── README.md
├── 00_INDEX.md
│
├── O-ORGANIZATIONS/                                      # ATA 00–05
│   ├── README.md
│   ├── 00_INDEX.md
│   │
│   ├── ATA_00-GENERAL/
│   │   └── ATA-00-general/
│   │       ├── 00-00-general/
│   │       ├── 00-10-reserved-as-required/
│   │       ├── 00-20-reserved-as-required/
│   │       ├── 00-30-reserved-as-required/
│   │       ├── 00-40-reserved-as-required/
│   │       ├── 00-50-reserved-as-required/
│   │       ├── 00-60-reserved-as-required/
│   │       ├── 00-70-reserved-as-required/
│   │       ├── 00-80-reserved-as-required/
│   │       └── 00-90-tables-schemas-index/
│   │
│   ├── ATA_01-MAINTENANCE_POLICY/
│   │   └── ATA-01-maintenance-policy/
│   │       ├── 01-00-general/
│   │       ├── 01-10-reserved-as-required/
│   │       ├── 01-20-reserved-as-required/
│   │       ├── 01-30-reserved-as-required/
│   │       ├── 01-40-reserved-as-required/
│   │       ├── 01-50-reserved-as-required/
│   │       ├── 01-60-reserved-as-required/
│   │       ├── 01-70-reserved-as-required/
│   │       ├── 01-80-reserved-as-required/
│   │       └── 01-90-tables-schemas-index/
│   │
│   ├── ATA_02-OPERATIONS_ORG/
│   │   └── ATA-02-operations-organization/
│   │       ├── 02-00-general/
│   │       ├── 02-10-reserved-as-required/
│   │       ├── 02-20-reserved-as-required/
│   │       ├── 02-30-reserved-as-required/
│   │       ├── 02-40-reserved-as-required/
│   │       ├── 02-50-reserved-as-required/
│   │       ├── 02-60-reserved-as-required/
│   │       ├── 02-70-reserved-as-required/
│   │       ├── 02-80-reserved-as-required/
│   │       └── 02-90-tables-schemas-index/
│   │
│   ├── ATA_03-SUPPORT_INFORMATION/
│   │   └── ATA-03-support-information/
│   │       ├── 03-00-general/
│   │       ├── 03-10-reserved-as-required/
│   │       ├── 03-20-reserved-as-required/
│   │       ├── 03-30-reserved-as-required/
│   │       ├── 03-40-reserved-as-required/
│   │       ├── 03-50-reserved-as-required/
│   │       ├── 03-60-reserved-as-required/
│   │       ├── 03-70-reserved-as-required/
│   │       ├── 03-80-reserved-as-required/
│   │       └── 03-90-tables-schemas-index/
│   │
│   ├── ATA_04-AIRWORTHINESS_LIMITATIONS/
│   │   └── ATA-04-airworthiness-limitations/
│   │       ├── 04-00-general/
│   │       ├── 04-10-reserved-as-required/
│   │       ├── 04-20-reserved-as-required/
│   │       ├── 04-30-reserved-as-required/
│   │       ├── 04-40-reserved-as-required/
│   │       ├── 04-50-reserved-as-required/
│   │       ├── 04-60-reserved-as-required/
│   │       ├── 04-70-reserved-as-required/
│   │       ├── 04-80-reserved-as-required/
│   │       └── 04-90-tables-schemas-index/
│   │
│   └── ATA_05-TIME_LIMITS_MAINT_CHECKS/
│       └── ATA-05-time-limits-maintenance-checks/
│           ├── 05-00-general/
│           ├── 05-10-reserved-as-required/
│           ├── 05-20-reserved-as-required/
│           ├── 05-30-reserved-as-required/
│           ├── 05-40-reserved-as-required/
│           ├── 05-50-reserved-as-required/
│           ├── 05-60-reserved-as-required/
│           ├── 05-70-reserved-as-required/
│           ├── 05-80-reserved-as-required/
│           └── 05-90-tables-schemas-index/
│
├── P-PROGRAMS/                                           # ATA 06–12
│   ├── README.md
│   ├── 00_INDEX.md
│   │
│   ├── ATA_06-DIMENSIONS_AND_AREAS/
│   │   └── ATA-06-dimensions-areas/
│   │       ├── 06-00-general/
│   │       ├── 06-10-reserved-as-required/
│   │       ├── 06-20-reserved-as-required/
│   │       ├── 06-30-reserved-as-required/
│   │       ├── 06-40-reserved-as-required/
│   │       ├── 06-50-reserved-as-required/
│   │       ├── 06-60-reserved-as-required/
│   │       ├── 06-70-reserved-as-required/
│   │       ├── 06-80-reserved-as-required/
│   │       └── 06-90-tables-schemas-index/
│   │
│   ├── ATA_07-LIFTING_AND_SHORING/
│   │   └── ATA-07-lifting-shoring/
│   │       ├── 07-00-general/
│   │       ├── 07-10-jacking/
│   │       ├── 07-20-shoring/
│   │       ├── 07-30-reserved-as-required/
│   │       ├── 07-40-reserved-as-required/
│   │       ├── 07-50-reserved-as-required/
│   │       ├── 07-60-reserved-as-required/
│   │       ├── 07-70-reserved-as-required/
│   │       ├── 07-80-reserved-as-required/
│   │       └── 07-90-tables-schemas-index/
│   │
│   ├── ATA_08-LEVELING_AND_WEIGHING/                      # PROGRAM scope (no overlay with INFRA)
│   │   └── ATA-08-leveling-weighing/
│   │       ├── 08-00-general/
│   │       ├── 08-10-weighing-balancing/
│   │       └── 08-20-leveling/
│   │
│   ├── ATA_09-TOWING_AND_TAXIING/
│   │   └── ATA-09-towing-taxiing/
│   │       ├── 09-00-general/
│   │       ├── 09-10-towing/
│   │       ├── 09-20-taxiing/
│   │       ├── 09-30-reserved-as-required/
│   │       ├── 09-40-reserved-as-required/
│   │       ├── 09-50-reserved-as-required/
│   │       ├── 09-60-reserved-as-required/
│   │       ├── 09-70-reserved-as-required/
│   │       ├── 09-80-reserved-as-required/
│   │       └── 09-90-tables-schemas-index/
│   │
│   ├── ATA_10-PARKING_MOORING_STORAGE_RETURN_TO_SERVICE/
│   │   └── ATA-10-parking-mooring-storage-rts/
│   │       ├── 10-00-general/
│   │       ├── 10-10-reserved-as-required/
│   │       ├── 10-20-reserved-as-required/
│   │       ├── 10-30-reserved-as-required/
│   │       ├── 10-40-reserved-as-required/
│   │       ├── 10-50-reserved-as-required/
│   │       ├── 10-60-reserved-as-required/
│   │       ├── 10-70-reserved-as-required/
│   │       ├── 10-80-reserved-as-required/
│   │       └── 10-90-tables-schemas-index/
│   │
│   ├── ATA_11-PLACARDS_AND_MARKINGS/
│   │   └── ATA-11-placards-markings/
│   │       ├── 11-00-general/
│   │       ├── 11-10-exterior-color-schemes-markings/
│   │       ├── 11-20-exterior-placards-markings/
│   │       ├── 11-30-interior-placards/
│   │       ├── 11-40-reserved-as-required/
│   │       ├── 11-50-reserved-as-required/
│   │       ├── 11-60-reserved-as-required/
│   │       ├── 11-70-reserved-as-required/
│   │       ├── 11-80-reserved-as-required/
│   │       └── 11-90-tables-schemas-index/
│   │
│   └── ATA_12-SERVICING/
│       └── ATA-12-servicing/
│           ├── 12-00-general/
│           ├── 12-10-replenishing/
│           ├── 12-20-scheduled-servicing/
│           ├── 12-30-unscheduled-servicing/
│           ├── 12-40-reserved-as-required/
│           ├── 12-50-reserved-as-required/
│           ├── 12-60-reserved-as-required/
│           ├── 12-70-reserved-as-required/
│           ├── 12-80-reserved-as-required/
│           └── 12-90-tables-schemas-index/
│
├── T-TECHNOLOGIES_AMEDEOPELLICCIA-ON_BOARD_SYSTEMS/
│   ├── README.md
│   ├── 00_INDEX.md
│   │
│   ├── A-AIRFRAME_CABINS/
│   │   ├── ATA_20-STANDARD_PRACTICES_AIRFRAME/
│   │   │   └── ATA-20-standard-practices-airframe/
│   │   │       ├── 20-00-general/
│   │   │       ├── 20-10-reserved-as-required/
│   │   │       ├── 20-20-reserved-as-required/
│   │   │       ├── 20-30-reserved-as-required/
│   │   │       ├── 20-40-reserved-as-required/
│   │   │       ├── 20-50-reserved-as-required/
│   │   │       ├── 20-60-reserved-as-required/
│   │   │       ├── 20-70-reserved-as-required/
│   │   │       ├── 20-80-reserved-as-required/
│   │   │       └── 20-90-reserved-airline-use/
│   │   │
│   │   ├── ATA_25-EQUIPMENT_FURNISHINGS/
│   │   │   └── ATA-25-equipment-furnishings/
│   │   │       ├── 25-00-general/
│   │   │       ├── 25-10-flight-compartment/
│   │   │       ├── 25-20-passenger-compartment/
│   │   │       ├── 25-30-galley/
│   │   │       ├── 25-40-lavatories/
│   │   │       ├── 25-50-additional-compartments/
│   │   │       ├── 25-60-emergency/
│   │   │       ├── 25-70-available/
│   │   │       ├── 25-80-insulation/
│   │   │       └── 25-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_44-CABIN_SYSTEMS/
│   │   │   └── ATA-44-cabin-systems/
│   │   │       ├── 44-00-general/
│   │   │       ├── 44-10-cabin-core-system/
│   │   │       ├── 44-20-in-flight-entertainment-system/
│   │   │       ├── 44-30-external-communication-system/
│   │   │       ├── 44-40-cabin-mass-memory-system/
│   │   │       ├── 44-50-cabin-monitoring-system/
│   │   │       ├── 44-60-miscellaneous-cabin-system/
│   │   │       ├── 44-70-reserved-as-required/
│   │   │       ├── 44-80-reserved-as-required/
│   │   │       └── 44-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_50-CARGO_AND_ACCESSORY_COMPARTMENTS/
│   │   │   └── ATA-50-cargo-accessory-compartments/
│   │   │       ├── 50-00-general/
│   │   │       ├── 50-10-cargo-compartments/
│   │   │       ├── 50-20-cargo-loading-systems/
│   │   │       ├── 50-30-cargo-related-systems/
│   │   │       ├── 50-40-available/
│   │   │       ├── 50-50-accessory-compartments/
│   │   │       ├── 50-60-insulation/
│   │   │       ├── 50-70-reserved-as-required/
│   │   │       ├── 50-80-reserved-as-required/
│   │   │       └── 50-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_51-STANDARD_PRACTICES_GENERAL/
│   │   │   └── ATA-51-standard-practices-general/
│   │   │       ├── 51-00-general/
│   │   │       ├── 51-10-investigation-cleanup-aero-smoothness/
│   │   │       ├── 51-20-processes/
│   │   │       ├── 51-30-materials/
│   │   │       ├── 51-40-fasteners/
│   │   │       ├── 51-50-support-for-repair-alignment-check/
│   │   │       ├── 51-60-control-surface-balancing/
│   │   │       ├── 51-70-repairs/
│   │   │       ├── 51-80-electrical-bonding/
│   │   │       └── 51-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_52-DOORS/
│   │   │   └── ATA-52-doors/
│   │   │       ├── 52-00-general/
│   │   │       ├── 52-10-passenger-crew/
│   │   │       ├── 52-20-emergency-exit/
│   │   │       ├── 52-30-cargo/
│   │   │       ├── 52-40-service/
│   │   │       ├── 52-50-fixed-interior/
│   │   │       ├── 52-60-entrance-stairs/
│   │   │       ├── 52-70-door-warning-monitoring-operation/
│   │   │       ├── 52-80-landing-gear/
│   │   │       └── 52-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_53-FUSELAGE/
│   │   │   └── ATA-53-fuselage/
│   │   │       ├── 53-00-general/
│   │   │       ├── 53-10-fuselage-sections-as-required/
│   │   │       ├── 53-20-fuselage-sections-as-required/
│   │   │       ├── 53-30-fuselage-sections-as-required/
│   │   │       ├── 53-40-fuselage-sections-as-required/
│   │   │       ├── 53-50-fuselage-sections-as-required/
│   │   │       ├── 53-60-fuselage-sections-as-required/
│   │   │       ├── 53-70-fuselage-sections-as-required/
│   │   │       ├── 53-80-fuselage-sections-as-required/
│   │   │       └── 53-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_54-NACELLES_PYLONS/
│   │   │   └── ATA-54-nacelles-pylons/
│   │   │       ├── 54-00-general/
│   │   │       ├── 54-10-nacelle-sections-as-required/
│   │   │       ├── 54-20-nacelle-sections-as-required/
│   │   │       ├── 54-30-nacelle-sections-as-required/
│   │   │       ├── 54-40-nacelle-sections-as-required/
│   │   │       ├── 54-50-pylon-sections-as-required/
│   │   │       ├── 54-60-pylon-sections-as-required/
│   │   │       ├── 54-70-pylon-sections-as-required/
│   │   │       ├── 54-80-pylon-sections-as-required/
│   │   │       └── 54-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_55-STABILIZERS/
│   │   │   └── ATA-55-stabilizers/
│   │   │       ├── 55-00-general/
│   │   │       ├── 55-10-horizontal-stabilizer-or-canard/
│   │   │       ├── 55-20-elevator/
│   │   │       ├── 55-30-vertical-stabilizer/
│   │   │       ├── 55-40-rudder/
│   │   │       ├── 55-50-reserved-as-required/
│   │   │       ├── 55-60-reserved-as-required/
│   │   │       ├── 55-70-reserved-as-required/
│   │   │       ├── 55-80-reserved-as-required/
│   │   │       └── 55-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_56-WINDOWS/
│   │   │   └── ATA-56-windows/
│   │   │       ├── 56-00-general/
│   │   │       ├── 56-10-flight-compartment/
│   │   │       ├── 56-20-passenger-compartment/
│   │   │       ├── 56-30-door/
│   │   │       ├── 56-40-inspection-observation/
│   │   │       ├── 56-50-reserved-as-required/
│   │   │       ├── 56-60-reserved-as-required/
│   │   │       ├── 56-70-reserved-as-required/
│   │   │       ├── 56-80-reserved-as-required/
│   │   │       └── 56-90-tables-schemas-index/
│   │   │
│   │   └── ATA_57-WINGS/
│   │       └── ATA-57-wings/
│   │           ├── 57-00-general/
│   │           ├── 57-10-center-wing/
│   │           ├── 57-20-outer-wing/
│   │           ├── 57-30-wing-tip/
│   │           ├── 57-40-leading-edge-and-devices/
│   │           ├── 57-50-trailing-edge-and-devices/
│   │           ├── 57-60-ailerons-and-elevons/
│   │           ├── 57-70-spoilers/
│   │           ├── 57-80-reserved-as-required/
│   │           ├── 57-90-wing-folding-system/
│   │           └── 57-95-reserved-as-required/
│   │
│   ├── M-MECHANICS/
│   │   ├── ATA_27-FLIGHT_CONTROLS/
│   │   │   └── ATA-27-flight-controls/
│   │   │       ├── 27-00-general/
│   │   │       ├── 27-10-aileron-tab/
│   │   │       ├── 27-20-rudder-tab/
│   │   │       ├── 27-30-elevator-tab/
│   │   │       ├── 27-40-horizontal-stabilizer/
│   │   │       ├── 27-50-flaps/
│   │   │       ├── 27-60-spoiler-drag-devices-variable-fairings/
│   │   │       ├── 27-70-gust-lock-dampener/
│   │   │       ├── 27-80-lift-augmenting/
│   │   │       └── 27-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_29-HYDRAULIC_POWER/
│   │   │   └── ATA-29-hydraulic-power/
│   │   │       ├── 29-00-general/
│   │   │       ├── 29-10-main/
│   │   │       ├── 29-20-auxiliary/
│   │   │       ├── 29-30-indicating/
│   │   │       ├── 29-40-reserved-as-required/
│   │   │       ├── 29-50-reserved-as-required/
│   │   │       ├── 29-60-reserved-as-required/
│   │   │       ├── 29-70-reserved-as-required/
│   │   │       ├── 29-80-reserved-as-required/
│   │   │       └── 29-90-tables-schemas-index/
│   │   │
│   │   └── ATA_32-LANDING_GEAR/
│   │       └── ATA-32-landing-gear/
│   │           ├── 32-00-general/
│   │           ├── 32-10-main-gear-and-doors/
│   │           ├── 32-20-nose-gear-and-doors/
│   │           ├── 32-30-extension-and-retraction/
│   │           ├── 32-40-wheels-and-brakes/
│   │           ├── 32-50-steering/
│   │           ├── 32-60-position-and-warning/
│   │           ├── 32-70-supplementary-gear/
│   │           ├── 32-80-reserved-as-required/
│   │           └── 32-90-tables-schemas-index/
│   │
│   ├── E1-ENVIRONMENT/
│   │   ├── ATA_21-AIR_CONDITIONING_PRESSURIZATION/
│   │   │   └── ATA-21-air-conditioning/
│   │   │       ├── 21-00-general/
│   │   │       ├── 21-10-compression/
│   │   │       ├── 21-20-distribution/
│   │   │       ├── 21-30-pressurization-control/
│   │   │       ├── 21-40-heating/
│   │   │       ├── 21-50-cooling/
│   │   │       ├── 21-60-temperature-control/
│   │   │       ├── 21-70-moisture-air-contaminant-control/
│   │   │       ├── 21-80-reserved-as-required/
│   │   │       └── 21-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_26-FIRE_PROTECTION/
│   │   │   └── ATA-26-fire-protection/
│   │   │       ├── 26-00-general/
│   │   │       ├── 26-10-detection/
│   │   │       ├── 26-20-extinguishing/
│   │   │       ├── 26-30-explosion-suppression/
│   │   │       ├── 26-40-reserved-as-required/
│   │   │       ├── 26-50-reserved-as-required/
│   │   │       ├── 26-60-reserved-as-required/
│   │   │       ├── 26-70-reserved-as-required/
│   │   │       ├── 26-80-reserved-as-required/
│   │   │       └── 26-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_30-ICE_RAIN_PROTECTION/
│   │   │   └── ATA-30-ice-rain-protection/
│   │   │       ├── 30-00-general/
│   │   │       ├── 30-10-airfoil/
│   │   │       ├── 30-20-air-intakes/
│   │   │       ├── 30-30-pitot-and-static/
│   │   │       ├── 30-40-windows-windshields-and-doors/
│   │   │       ├── 30-50-antennas-and-radomes/
│   │   │       ├── 30-60-propellers-rotors/
│   │   │       ├── 30-70-water-lines/
│   │   │       ├── 30-80-detection/
│   │   │       └── 30-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_35-OXYGEN/
│   │   │   └── ATA-35-oxygen/
│   │   │       ├── 35-00-general/
│   │   │       ├── 35-10-crew/
│   │   │       ├── 35-20-passenger/
│   │   │       ├── 35-30-portable/
│   │   │       ├── 35-40-reserved-as-required/
│   │   │       ├── 35-50-reserved-as-required/
│   │   │       ├── 35-60-reserved-as-required/
│   │   │       ├── 35-70-reserved-as-required/
│   │   │       ├── 35-80-reserved-as-required/
│   │   │       └── 35-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_36-PNEUMATIC/
│   │   │   └── ATA-36-pneumatic/
│   │   │       ├── 36-00-general/
│   │   │       ├── 36-10-distribution/
│   │   │       ├── 36-20-indicating/
│   │   │       ├── 36-30-reserved-as-required/
│   │   │       ├── 36-40-reserved-as-required/
│   │   │       ├── 36-50-reserved-as-required/
│   │   │       ├── 36-60-reserved-as-required/
│   │   │       ├── 36-70-reserved-as-required/
│   │   │       ├── 36-80-reserved-as-required/
│   │   │       └── 36-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_37-VACUUM/
│   │   │   └── ATA-37-vacuum/
│   │   │       ├── 37-00-general/
│   │   │       ├── 37-10-distribution/
│   │   │       ├── 37-20-indicating/
│   │   │       ├── 37-30-reserved-as-required/
│   │   │       ├── 37-40-reserved-as-required/
│   │   │       ├── 37-50-reserved-as-required/
│   │   │       ├── 37-60-reserved-as-required/
│   │   │       ├── 37-70-reserved-as-required/
│   │   │       ├── 37-80-reserved-as-required/
│   │   │       └── 37-90-tables-schemas-index/
│   │   │
│   │   ├── ATA_38-WATER_WASTE/
│   │   │   └── ATA-38-water-waste/
│   │   │       ├── 38-00-general/
│   │   │       ├── 38-10-potable/
│   │   │       ├── 38-20-wash/
│   │   │       ├── 38-30-waste-disposal/
│   │   │       ├── 38-40-air-supply/
│   │   │       ├── 38-50-reserved-as-required/
│   │   │       ├── 38-60-reserved-as-required/
│   │   │       ├── 38-70-reserved-as-required/
│   │   │       ├── 38-80-reserved-as-required/
│   │   │       └── 38-90-tables-schemas-index/
│   │   │
│   │   └── ATA_47-NITROGEN_GENERATION_SYSTEM/
│   │       └── ATA-47-nitrogen-generation/
│   │           ├── 47-00-general/
│   │           ├── 47-10-reserved-as-required/
│   │           ├── 47-20-reserved-as-required/
│   │           ├── 47-30-reserved-as-required/
│   │           ├── 47-40-reserved-as-required/
│   │           ├── 47-50-reserved-as-required/
│   │           ├── 47-60-reserved-as-required/
│   │           ├── 47-70-reserved-as-required/
│   │           ├── 47-80-reserved-as-required/
│   │           └── 47-90-tables-schemas-index/
│   │
│   ├── D-DATA/
│   │   ├── ATA_31-INDICATING_RECORDING/
│   │   │   └── ATA-31-indicating-recording/
│   │   │       ├── 31-00-general/
│   │   │       ├── 31-10-instrument-control-panels/
│   │   │       ├── 31-20-independent-instruments/
│   │   │       ├── 31-30-recorders/
│   │   │       ├── 31-40-central-computers/
│   │   │       ├── 31-50-central-warning-systems/
│   │   │       ├── 31-60-central-display-systems/
│   │   │       ├── 31-70-automatic-data-reporting-systems/
│   │   │       ├── 31-80-reserved-as-required/
│   │   │       └── 31-90-tables-schemas-index/
│   │   │
│   │   └── ATA_45-CENTRAL_MAINTENANCE_SYSTEM_CMS/
│   │       └── ATA-45-central-maintenance-system/
│   │           ├── 45-00-general/
│   │           ├── 45-05-cms-aircraft-general/
│   │           ├── 45-10-reserved-as-required/
│   │           ├── 45-20-cms-airframe-systems/
│   │           ├── 45-30-reserved-as-required/
│   │           ├── 45-40-reserved-as-required/
│   │           ├── 45-45-central-maintenance-system/
│   │           ├── 45-50-cms-structures/
│   │           ├── 45-60-cms-propellers/
│   │           ├── 45-70-cms-power-plant/
│   │           ├── 45-80-reserved-as-required/
│   │           └── 45-90-tables-schemas-index/
│   │
│   ├── I-INFORMATION/                                     # ATA 46 moved here
│   │   ├── README.md
│   │   ├── 00_INDEX.md
│   │   ├── 00-00-general/
│   │   └── ATA_46-INFORMATION_SYSTEMS/
│   │       └── ATA-46-information-systems/
│   │           ├── 46-00-general/
│   │           ├── 46-10-airplane-general-information-systems/
│   │           ├── 46-20-flight-deck-information-systems/
│   │           ├── 46-30-maintenance-information-systems/
│   │           ├── 46-40-passenger-cabin-information-systems/
│   │           ├── 46-50-miscellaneous-information-systems/
│   │           ├── 46-60-reserved-as-required/
│   │           ├── 46-70-reserved-as-required/
│   │           ├── 46-80-reserved-as-required/
│   │           └── 46-90-tables-schemas-index/
│   │
│   ├── E2-ENERGY/
│   │   ├── ATA_24-ELECTRICAL_POWER/
│   │   │   └── ATA-24-electrical-power/
│   │   │       ├── 24-00-general/
│   │   │       ├── 24-10-generator-drive/
│   │   │       ├── 24-20-ac-generation/
│   │   │       ├── 24-30-dc-generation/
│   │   │       ├── 24-40-external-power/
│   │   │       ├── 24-50-ac-load-distribution/
│   │   │       ├── 24-60-dc-load-distribution/
│   │   │       ├── 24-70-reserved-as-required/
│   │   │       ├── 24-80-reserved-as-required/
│   │   │       └── 24-90-tables-schemas-index/
│   │   │
│   │   └── ATA_49-AIRBORNE_AUXILIARY_POWER_APU/
│   │       └── ATA-49-airborne-auxiliary-power/
│   │           ├── 49-00-general/
│   │           ├── 49-10-power-plant/
│   │           ├── 49-20-engine/
│   │           ├── 49-30-engine-fuel-and-control/
│   │           ├── 49-40-ignition-starting/
│   │           ├── 49-50-air/
│   │           ├── 49-60-engine-controls/
│   │           ├── 49-70-indicating/
│   │           ├── 49-80-exhaust/
│   │           └── 49-90-oil/
│   │
│   ├── E3-ELECTRICS/
│   │   ├── ATA_33-LIGHTS/
│   │   │   └── ATA-33-lights/
│   │   │       ├── 33-00-general/
│   │   │       ├── 33-10-flight-compartment/
│   │   │       ├── 33-20-passenger-compartment/
│   │   │       ├── 33-30-cargo-and-service-compartments/
│   │   │       ├── 33-40-exterior/
│   │   │       ├── 33-50-emergency-lighting/
│   │   │       ├── 33-60-reserved-as-required/
│   │   │       ├── 33-70-reserved-as-required/
│   │   │       ├── 33-80-reserved-as-required/
│   │   │       └── 33-90-tables-schemas-index/
│   │   │
│   │   └── ATA_39-ELECTRICAL_ELECTRONIC_PANELS_MULTIPURPOSE_COMPONENTS/
│   │       └── ATA-39-electrical-electronic-panels-components/
│   │           ├── 39-00-general/
│   │           ├── 39-10-reserved-as-required/
│   │           ├── 39-20-reserved-as-required/
│   │           ├── 39-30-reserved-as-required/
│   │           ├── 39-40-reserved-as-required/
│   │           ├── 39-50-reserved-as-required/
│   │           ├── 39-60-reserved-as-required/
│   │           ├── 39-70-reserved-as-required/
│   │           ├── 39-80-reserved-as-required/
│   │           └── 39-90-tables-schemas-index/
│   │
│   ├── L1-LOGICS/                                         # RESERVED ONLY
│   │   ├── README.md
│   │   ├── 00_INDEX.md
│   │   └── 00_RESERVED_AS_REQUIRED/
│   │       ├── 00-00-general/
│   │       └── 00-90-tables-schemas-index/
│   │
│   ├── L2-LINKS/
│   │   └── ATA_34-NAVIGATION/
│   │       └── ATA-34-navigation/
│   │           ├── 34-00-general/
│   │           ├── 34-10-flight-environment-data/
│   │           ├── 34-20-attitude-and-direction/
│   │           ├── 34-30-landing-and-taxiing-aids/
│   │           ├── 34-40-independent-position-determining/
│   │           ├── 34-50-dependent-position-determining/
│   │           ├── 34-60-flight-management-computing/
│   │           ├── 34-70-reserved-as-required/
│   │           ├── 34-80-reserved-as-required/
│   │           └── 34-90-tables-schemas-index/
│   │
│   ├── C1-COMMS/
│   │   └── ATA_23-COMMUNICATIONS/
│   │       └── ATA-23-communications/
│   │           ├── 23-00-general/
│   │           ├── 23-10-speech-communications/
│   │           ├── 23-15-satcom/
│   │           ├── 23-20-data-transmission-auto-calling/
│   │           ├── 23-30-comfort/
│   │           ├── 23-40-interphone/
│   │           ├── 23-50-audio-integrating/
│   │           ├── 23-60-static-discharging/
│   │           ├── 23-70-audio-video-monitoring/
│   │           ├── 23-80-integrated-automatic/
│   │           └── 23-90-tables-schemas-index/
│   │
│   ├── C2-CIRCULAR_CRYOGENIC_CELLS/
│   │   └── ATA_28-FUEL/
│   │       └── ATA-28-fuel/
│   │           ├── 28-00-general/
│   │           ├── 28-10-storage/
│   │           ├── 28-20-distribution/
│   │           ├── 28-30-dump/
│   │           ├── 28-40-indicating/
│   │           ├── 28-50-reserved-as-required/
│   │           ├── 28-60-reserved-as-required/
│   │           ├── 28-70-reserved-as-required/
│   │           ├── 28-80-reserved-as-required/
│   │           └── 28-90-tables-schemas-index/
│   │
│   ├── I2-INTELLIGENCE/                                   # ATA 95 + 97 moved here
│   │   ├── README.md
│   │   ├── 00_INDEX.md
│   │   ├── 00-00-general/
│   │   ├── ATA_95-AI_ML_MODELS/
│   │   │   └── ATA-95-ai-ml-models/
│   │   │       ├── 95-00-general/
│   │   │       ├── 95-10-model-requirements-and-safety-intent/
│   │   │       ├── 95-20-training-and-tuning/
│   │   │       ├── 95-30-verification-and-validation/
│   │   │       ├── 95-40-deployment-runtime-and-inference/
│   │   │       ├── 95-50-monitoring-drift-and-health/
│   │   │       ├── 95-60-data-interfaces-and-buses/
│   │   │       ├── 95-70-toolchain-ci-and-reproducibility/
│   │   │       ├── 95-80-reserved-as-required/
│   │   │       └── 95-90-tables-schemas-index/
│   │   │
│   │   └── ATA_97-SYNTHETIC_DATA_VALIDATION/
│   │       └── ATA-97-synthetic-data-validation/
│   │           ├── 97-00-general/
│   │           ├── 97-10-synthetic-data-generation/
│   │           ├── 97-20-scenario-coverage-and-edge-cases/
│   │           ├── 97-30-labeling-truth-and-oracles/
│   │           ├── 97-40-quality-metrics-and-bias-checks/
│   │           ├── 97-50-validation-protocols-and-evidence/
│   │           ├── 97-60-data-packaging-and-release/
│   │           ├── 97-70-tooling-automation-ci/
│   │           ├── 97-80-reserved-as-required/
│   │           └── 97-90-tables-schemas-index/
│   │
│   ├── A2-AVIONICS/
│   │   ├── ATA_22-AUTO_FLIGHT/
│   │   │   └── ATA-22-auto-flight/
│   │   │       ├── 22-00-general/
│   │   │       ├── 22-10-autopilot/
│   │   │       ├── 22-20-speed-attitude-correction/
│   │   │       ├── 22-30-auto-throttle/
│   │   │       ├── 22-40-system-monitors/
│   │   │       ├── 22-50-aerodynamic-load-alleviating/
│   │   │       ├── 22-60-reserved-as-required/
│   │   │       ├── 22-70-reserved-as-required/
│   │   │       ├── 22-80-reserved-as-required/
│   │   │       └── 22-90-tables-schemas-index/
│   │   │
│   │   └── ATA_42-INTEGRATED_MODULAR_AVIONICS/
│   │       └── ATA-42-integrated-modular-avionics/
│   │           ├── 42-00-general/
│   │           ├── 42-10-reserved-as-required/
│   │           ├── 42-20-reserved-as-required/
│   │           ├── 42-30-reserved-as-required/
│   │           ├── 42-40-reserved-as-required/
│   │           ├── 42-50-reserved-as-required/
│   │           ├── 42-60-reserved-as-required/
│   │           ├── 42-70-reserved-as-required/
│   │           ├── 42-80-reserved-as-required/
│   │           └── 42-90-tables-schemas-index/
│   │
│   ├── O-OPERATING_SYSTEMS/
│   │   └── ATA_40-MULTISYSTEM/
│   │       └── ATA-40-multisystem/
│   │           ├── 40-00-general/
│   │           ├── 40-10-reserved-as-required/
│   │           ├── 40-20-reserved-as-required/
│   │           ├── 40-30-reserved-as-required/
│   │           ├── 40-40-reserved-as-required/
│   │           ├── 40-50-reserved-as-required/
│   │           ├── 40-60-reserved-as-required/
│   │           ├── 40-70-reserved-as-required/
│   │           ├── 40-80-reserved-as-required/
│   │           └── 40-90-tables-schemas-index/
│   │
│   └── P-PROPULSION/
│       ├── ATA_60-STANDARD_PRACTICES_PROPELLER_ROTOR/
│       │   └── ATA-60-standard-practices-prop-rotor/
│       │       ├── 60-00-general/
│       │       ├── 60-10-reserved-as-required/
│       │       ├── 60-20-reserved-as-required/
│       │       ├── 60-30-reserved-as-required/
│       │       ├── 60-40-reserved-as-required/
│       │       ├── 60-50-reserved-as-required/
│       │       ├── 60-60-reserved-as-required/
│       │       ├── 60-70-reserved-as-required/
│       │       ├── 60-80-reserved-as-required/
│       │       └── 60-90-tables-schemas-index/
│       │
│       ├── ATA_61-PROPELLERS_PROPULSORS/
│       │   └── ATA-61-propellers-propulsors/
│       │       ├── 61-00-general/
│       │       ├── 61-10-propeller-assembly/
│       │       ├── 61-20-controlling/
│       │       ├── 61-30-braking/
│       │       ├── 61-40-indicating/
│       │       ├── 61-50-propulsor-duct/
│       │       ├── 61-60-reserved-as-required/
│       │       ├── 61-70-reserved-as-required/
│       │       ├── 61-80-reserved-as-required/
│       │       └── 61-90-tables-schemas-index/
│       │
│       ├── ATA_71-POWER_PLANT/
│       │   └── ATA-71-power-plant/
│       │       ├── 71-00-general/
│       │       ├── 71-10-cowling/
│       │       ├── 71-20-mounts/
│       │       ├── 71-30-fire-seals/
│       │       ├── 71-40-attach-fittings/
│       │       ├── 71-50-electrical-harness/
│       │       ├── 71-60-air-intakes/
│       │       ├── 71-70-engine-drains/
│       │       ├── 71-80-reserved-as-required/
│       │       └── 71-90-tables-schemas-index/
│       │
│       ├── ATA_72-ENGINE_TURBINE_TURBOPROP_DUCTED_UNDUCTED_FAN/
│       │   └── ATA-72-engine/
│       │       ├── 72-00-general/
│       │       ├── 72-10-reduction-gear-shaft-section/
│       │       ├── 72-20-air-inlet-section/
│       │       ├── 72-30-compressor-section/
│       │       ├── 72-40-combustion-section/
│       │       ├── 72-50-turbine-section/
│       │       ├── 72-60-accessory-drives/
│       │       ├── 72-70-by-pass-section/
│       │       ├── 72-80-propulsor-section-rear-mounted/
│       │       └── 72-90-tables-schemas-index/
│       │
│       ├── ATA_73-ENGINE_FUEL_AND_CONTROL/
│       │   └── ATA-73-engine-fuel-control/
│       │       ├── 73-00-general/
│       │       ├── 73-10-distribution/
│       │       ├── 73-20-controlling/
│       │       ├── 73-30-indicating/
│       │       ├── 73-40-reserved-as-required/
│       │       ├── 73-50-reserved-as-required/
│       │       ├── 73-60-reserved-as-required/
│       │       ├── 73-70-reserved-as-required/
│       │       ├── 73-80-reserved-as-required/
│       │       └── 73-90-tables-schemas-index/
│       │
│       ├── ATA_74-IGNITION/
│       │   └── ATA-74-ignition/
│       │       ├── 74-00-general/
│       │       ├── 74-10-electrical-power-supply/
│       │       ├── 74-20-distribution/
│       │       ├── 74-30-switching/
│       │       ├── 74-40-reserved-as-required/
│       │       ├── 74-50-reserved-as-required/
│       │       ├── 74-60-reserved-as-required/
│       │       ├── 74-70-reserved-as-required/
│       │       ├── 74-80-reserved-as-required/
│       │       └── 74-90-tables-schemas-index/
│       │
│       ├── ATA_75-AIR/
│       │   └── ATA-75-air/
│       │       ├── 75-00-general/
│       │       ├── 75-10-engine-anti-icing/
│       │       ├── 75-20-cooling/
│       │       ├── 75-30-compressor-control/
│       │       ├── 75-40-indicating/
│       │       ├── 75-50-reserved-as-required/
│       │       ├── 75-60-reserved-as-required/
│       │       ├── 75-70-reserved-as-required/
│       │       ├── 75-80-reserved-as-required/
│       │       └── 75-90-tables-schemas-index/
│       │
│       ├── ATA_76-ENGINE_CONTROLS/
│       │   └── ATA-76-engine-controls/
│       │       ├── 76-00-general/
│       │       ├── 76-10-power-control/
│       │       ├── 76-20-emergency-shutdown/
│       │       ├── 76-30-reserved-as-required/
│       │       ├── 76-40-reserved-as-required/
│       │       ├── 76-50-reserved-as-required/
│       │       ├── 76-60-reserved-as-required/
│       │       ├── 76-70-reserved-as-required/
│       │       ├── 76-80-reserved-as-required/
│       │       └── 76-90-tables-schemas-index/
│       │
│       ├── ATA_77-ENGINE_INDICATING/
│       │   └── ATA-77-engine-indicating/
│       │       ├── 77-00-general/
│       │       ├── 77-10-power/
│       │       ├── 77-20-temperature/
│       │       ├── 77-30-analyzers/
│       │       ├── 77-40-integrated-engine-instrument-systems/
│       │       ├── 77-50-reserved-as-required/
│       │       ├── 77-60-reserved-as-required/
│       │       ├── 77-70-reserved-as-required/
│       │       ├── 77-80-reserved-as-required/
│       │       └── 77-90-tables-schemas-index/
│       │
│       ├── ATA_78-EXHAUST/
│       │   └── ATA-78-exhaust/
│       │       ├── 78-00-general/
│       │       ├── 78-10-collector-nozzle/
│       │       ├── 78-20-noise-suppressor/
│       │       ├── 78-30-thrust-reverser/
│       │       ├── 78-40-supplementary-air/
│       │       ├── 78-50-reserved-as-required/
│       │       ├── 78-60-reserved-as-required/
│       │       ├── 78-70-reserved-as-required/
│       │       ├── 78-80-reserved-as-required/
│       │       └── 78-90-tables-schemas-index/
│       │
│       ├── ATA_79-OIL/
│       │   └── ATA-79-oil/
│       │       ├── 79-00-general/
│       │       ├── 79-10-storage/
│       │       ├── 79-20-reserved-as-required/
│       │       ├── 79-30-indicating/
│       │       ├── 79-40-reserved-as-required/
│       │       ├── 79-50-reserved-as-required/
│       │       ├── 79-60-reserved-as-required/
│       │       ├── 79-70-reserved-as-required/
│       │       ├── 79-80-reserved-as-required/
│       │       └── 79-90-tables-schemas-index/
│       │
│       └── ATA_80-STARTING/
│           └── ATA-80-starting/
│               ├── 80-00-general/
│               ├── 80-10-cranking/
│               ├── 80-20-reserved-as-required/
│               ├── 80-30-reserved-as-required/
│               ├── 80-40-reserved-as-required/
│               ├── 80-50-reserved-as-required/
│               ├── 80-60-reserved-as-required/
│               ├── 80-70-reserved-as-required/
│               ├── 80-80-reserved-as-required/
│               └── 80-90-tables-schemas-index/
│
├── I-INFRASTRUCTURES/                                     # Ground support / H₂ logistics / facilities
│   ├── README.md
│   ├── 00_INDEX.md
│   │
│   ├── ATA_03-SUPPORT_INFRA/
│   │   └── ATA-03-support-infra/
│   │       ├── 03-00-general/
│   │       ├── 03-10-reserved-as-required/
│   │       ├── 03-20-reserved-as-required/
│   │       ├── 03-30-reserved-as-required/
│   │       ├── 03-40-reserved-as-required/
│   │       ├── 03-50-reserved-as-required/
│   │       ├── 03-60-reserved-as-required/
│   │       ├── 03-70-reserved-as-required/
│   │       ├── 03-80-reserved-as-required/
│   │       └── 03-90-tables-schemas-index/
│   │
│   ├── ATA_08-LEVELING_AND_WEIGHING_INFRA/                 # complementary only (not in P-PROGRAMS)
│   │   └── ATA-08-leveling-weighing-infra/
│   │       ├── 08-30-gse-equipment-and-tooling/
│   │       ├── 08-40-metrology-calibration-and-certificates/
│   │       ├── 08-50-facility-readiness-layout-and-utilities/
│   │       ├── 08-60-safety-zoning-permits-and-emergency/
│   │       ├── 08-70-training-competency-and-authorization/
│   │       ├── 08-80-digital-logs-traceability-and-data-exports/
│   │       └── 08-90-tables-schemas-index/
│   │
│   ├── ATA_10-PARKING_MOORING_STORAGE_RTS_INFRA/
│   │   └── ATA-10-parking-mooring-storage-rts-infra/
│   │       ├── 10-00-general/
│   │       ├── 10-10-parking-and-storage-facilities/
│   │       ├── 10-20-mooring-tie-down-and-stands/
│   │       ├── 10-30-return-to-service-enablement/
│   │       ├── 10-40-reserved-as-required/
│   │       ├── 10-50-reserved-as-required/
│   │       ├── 10-60-reserved-as-required/
│   │       ├── 10-70-reserved-as-required/
│   │       ├── 10-80-reserved-as-required/
│   │       └── 10-90-tables-schemas-index/
│   │
│   ├── ATA_12-SERVICING_INFRA/
│   │   └── ATA-12-servicing-infra/
│   │       ├── 12-00-general/
│   │       ├── 12-10-replenishing-equipment-and-points/
│   │       ├── 12-20-scheduled-servicing-enablement/
│   │       ├── 12-30-unscheduled-servicing-enablement/
│   │       ├── 12-40-reserved-as-required/
│   │       ├── 12-50-reserved-as-required/
│   │       ├── 12-60-reserved-as-required/
│   │       ├── 12-70-reserved-as-required/
│   │       ├── 12-80-reserved-as-required/
│   │       └── 12-90-tables-schemas-index/
│   │
│   ├── ATA_85-FUEL_CELL_SYSTEMS_INFRA/                     # enablement only (rigs/facilities/training/data)
│   │   └── ATA-85-fuel-cell-systems-infra/
│   │       ├── 85-00-general/
│   │       ├── 85-10-test-rigs-and-bench-infrastructure/
│   │       ├── 85-20-h2-handling-safety-permits-for-fcs/
│   │       ├── 85-30-power-interface-racks-load-banks/
│   │       ├── 85-40-thermal-management-test-support-equipment/
│   │       ├── 85-50-maintenance-support-tooling-and-gse/
│   │       ├── 85-60-spares-repair-warehouse-enablement/
│   │       ├── 85-70-training-qualification-and-cert-support/
│   │       ├── 85-80-digital-traceability-dpp-and-data-exports/
│   │       └── 85-90-tables-schemas-index/
│   │
│   └── ATA_IN_H2_GSE_AND_SUPPLY_CHAIN/                     # non-ATA infra namespace using IN-XX pattern
│       └── ATA-IN-h2-gse-supply-chain/
│           ├── IN-00-general/
│           ├── IN-10-h2-production-and-sourcing/
│           ├── IN-20-liquefaction-compression-and-storage/
│           ├── IN-30-transport-logistics-and-delivery/
│           ├── IN-40-airport-facilities-civil-works-and-permits/
│           ├── IN-50-h2-gse-couplings-hoses-interfaces/
│           ├── IN-60-safety-zoning-emergency-response/
│           ├── IN-70-quality-assurance-sampling-and-metering/
│           ├── IN-80-digital-traceability-dpp-and-audit/
│           └── IN-90-tables-schemas-index/
│
└── N-NEURAL_NETWORKS/                                     # governance + ledger (transversal)
    ├── README.md
    ├── 00_INDEX.md
    │
    ├── ATA_96-TRACEABILITY_DPP_LEDGER/
    │   └── ATA-96-traceability-dpp-ledger/
    │       ├── 96-00-general/
    │       ├── 96-10-identifier-grammar-namespaces/
    │       ├── 96-20-schema-registry-and-canonical-models/
    │       ├── 96-30-ledger-anchoring-hash-chain/
    │       ├── 96-40-dpp-sbom-and-config-effectivity/
    │       ├── 96-50-audit-evidence-packs-and-signoffs/
    │       ├── 96-60-export-publishing-contracts/
    │       ├── 96-70-governance-policies-and-rules/
    │       ├── 96-80-security-privacy-and-access-control/
    │       └── 96-90-tables-schemas-index/
    │
    └── ATA_98-RESERVED_PROGRAM_SLOT/
        └── ATA-98-program-slot/
            ├── 98-00-general/
            ├── 98-10-reserved-as-required/
            ├── 98-20-reserved-as-required/
            ├── 98-30-reserved-as-required/
            ├── 98-40-reserved-as-required/
            ├── 98-50-reserved-as-required/
            ├── 98-60-reserved-as-required/
            ├── 98-70-reserved-as-required/
            ├── 98-80-reserved-as-required/
            └── 98-90-tables-schemas-index/
```
---

## Canonical ATA Content Pattern 

**CSDB lives at section level. ** Each section carries both SSOT and PUB: 

```
ATA_XX-<SYSTEM>/
└── xx-yy-<section>/
    ├── xx-yy-00-<subject>/
    │   ├── xx-yy-00-00-<sub-subject>/
    │   │   ├── README.md
    │   │   ├── SSOT/
    │   │   │   ├── LC01_PROBLEM_STATEMENT/
    │   │   │   │   ├── KNOTS.csv
    │   │   │   │   ├── KNU_PLAN.csv
    │   │   │   │   ├── TIMELINE. csv
    │   │   │   │   ├── RACI.csv
    │   │   │   │   ├── TOKENOMICS_TT. yaml
    │   │   │   │   └── AWARDS_TT.csv
    │   │   │   ├── LC02_SYSTEM_REQUIREMENTS/
    │   │   │   ├── LC03_SAFETY_RELIABILITY/
    │   │   │   ├── ... 
    │   │   │   └── LC14_RETIREMENT_CIRCULARITY/
    │   │   └── PUB/
    │   │       └── AMM/
    │   │           ├── CSDB/
    │   │           │   ├── DM/
    │   │           │   ├── PM/
    │   │           │   ├── DML/
    │   │           │   ├── BREX/
    │   │           │   ├── ICN/
    │   │           │   ├── COMMON/
    │   │           │   └── APPLICABILITY/
    │   │           ├── EXPORT/
    │   │           └── IETP/
    │   └── xx-yy-00-90-glossary-abbreviations-and-tables/
    └── README.md
```

---

## KNOT → KNU (Controlled Uncertainty Handling)

Work in this repository is managed through **KNOTs** and **KNUs**:

| Concept | Definition |
|---------|------------|
| **KNOT** | A *known unknown* — an identified uncertainty or problem node requiring resolution |
| **KNU** | A *Knowledge Unit* — a concrete artifact that addresses a KNOT |

### How It Works

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         KNOT Lifecycle                                   │
├─────────────────────────────────────────────────────────────────────────┤
│  1. IDENTIFICATION                                                       │
│     └─ Uncertainty logged in KNOTS. csv (Residual = 100)                 │
│                                                                          │
│  2. PLANNING                                                             │
│     └─ Expected KNUs defined in KNU_PLAN.csv                            │
│     └─ Timeline milestones set                                          │
│     └─ TT reward pool allocated in TOKENOMICS_TT.yaml                   │
│                                                                          │
│  3. EXECUTION                                                            │
│     └─ KNU artifacts produced in LC02–LC14 and PUB/CSDB                 │
│     └─ Effort and impact recorded per KNU                               │
│                                                                          │
│  4. CLOSURE                                                              │
│     └─ All KNUs complete, links resolved, BREX passed                   │
│     └─ Residual reduced to target (e.g., 100 → 8)                       │
│     └─ TT rewards distributed:  w_i = α·Ê_i + (1-α)·Î_i                  │
│     └─ Awards logged to AWARDS_TT.csv + finance/ledger. json             │
└─────────────────────────────────────────────────────────────────────────┘
```

This provides **traceability from uncertainty to evidence to incentive** across the engineering and publication lifecycle.

---

## Teknia Tokens (TT) Integration

The repository integrates with the **Teknia Token (TT) v3.14** system for incentive alignment:

| Aspect | Specification |
|--------|---------------|
| **Token** | TT (1 TT = 360 deg) |
| **Genesis Supply** | 2,000,000,000 TT |
| **Fee Structure** | π-tier for transfers (0.314%/0.99%/3.14%); 0.5% for rewards |
| **KNOT Pools** | Defined per KNOT in `TOKENOMICS_TT.yaml` |
| **Distribution** | Effort + Impact weighted formula |
| **Ledger** | `finance/ledger.json` (SHA-256 hash chain) |

### CLI Integration

```bash
# Quote a reward distribution
python tools/tek_tokens. py quote --op reward --tt 100

# Execute reward (after KNOT closure)
python tools/knu_distribution.py distribute --knot KNOT-ATA25-10-00-001

# Verify ledger integrity
python tools/tek_tokens.py verify
```

---

## Quick Start

### Prerequisites
- Python 3.9+
- Git

### Clone and Setup

```bash
git clone https://github.com/AmedeoPelliccia/AMPEL360-AIR-T.git
cd AMPEL360-AIR-T

pip install -r requirements. txt
bash . github/hooks/setup-hooks.sh
```

### Validate Structure

```bash
python tools/ci/optin_structure_validator.py --check
python tools/ci/optin_structure_validator.py --check --chapter 31
```

### Navigate

```bash
cd OPT-IN_FRAMEWORK/
ls
```

### Entry Points by Role

| Role | Start Here |
|------|------------|
| **Engineers** | [`OPT-IN_FRAMEWORK/README.md`](./OPT-IN_FRAMEWORK/README.md) |
| **Publication Authors** | Example: `.../PUB/AMM/CSDB/README.md` (pattern at each sub-subject) |
| **Program Managers** | [`IMPLEMENTATION_SUMMARY.md`](./IMPLEMENTATION_SUMMARY.md) |
| **CAOS / Airworthiness** | [`CAOS/CAOS_INDEX.md`](./CAOS/CAOS_INDEX. md) |
| **Certification** | `XX-00-10_Certification/` folders |
| **Tokenomics** | `LC01_PROBLEM_STATEMENT/TOKENOMICS_TT.yaml` at any ATA node |

---

## CAOS — Continuous Airworthiness for Operational Sustainment

**CAOS** is the framework for maintaining airworthiness throughout the operational lifecycle: 

| Domain | Scope |
|--------|-------|
| **Continued Airworthiness** | AD compliance, SB tracking, modification status |
| **Reliability Programs** | MSG-3, condition monitoring, fleet trends |
| **Operational Feedback** | In-service data, SDR/MOR analysis, operator liaison |
| **Technical Services** | Field support, AOG response, technical bulletins |
| **Configuration Control** | As-maintained vs. as-designed reconciliation |

CAOS artifacts reside primarily in: 
- `LC11_MAINTENANCE` — maintenance program sources
- `LC12_CUSTOMER_CARE` — technical services and post-delivery support
- `CAOS/` — cross-cutting CAOS documentation and dashboards

See:  [`CAOS/CAOS_INDEX. md`](./CAOS/CAOS_INDEX.md) • [`CAOS/CAOS_ARCHITECTURE.md`](./CAOS/CAOS_ARCHITECTURE.md) • [`CAOS/CAOS_OPERATIONS_FRAMEWORK.md`](./CAOS/CAOS_OPERATIONS_FRAMEWORK.md)

---

## Publishing Model (CSDB + IETP)

### CSDB (S1000D Common Source Database)

The CSDB is the **single source for modular publications**:

| Component | Purpose |
|-----------|---------|
| **DM** | Atomic content modules (descriptive, procedural, fault isolation, IPD, etc.) |
| **PM** | Publication structures that assemble DMs into deliverables |
| **DML** | Controlled lists of DMs with status and applicability |
| **BREX** | Business rules for validation and compliance checking |
| **ICN** | Graphics (SVG preferred) referenced by DMs |
| **APPLICABILITY** | ACT/PCT/CCT for product/condition filtering |
| **COMMON** | Reusable content primitives (warnings, cautions, notes) |

### IETP (Interactive Electronic Technical Publication)

HTML/PDF are outputs; the **IETP runtime** is the deliverable software "image" that: 
- Consumes PM/DM sets from CSDB
- Applies applicability rules (ACT/PCT/CCT)
- Provides interactive navigation, search, and filtering
- Is packaged and versioned in `PUB/<SUB_ID>/IETP/`

---

## Standards & Compliance

| Standard | Application |
|----------|-------------|
| **EASA CS-25 / FAA Part 25** | Airworthiness requirements framing |
| **ATA iSpec 2200** | Chapter/section/subject scaffolding for system breakdown |
| **S1000D (+ project BREX)** | Technical publications CSDB (DM/PM/DML/ICN/APPLICABILITY) |
| **DO-178C** | Software considerations in airborne systems |
| **DO-254** | Hardware design assurance |
| **DO-160** | Environmental qualification |
| **ISO 15926** | Industrial data standards |

---

## Key Documentation

| Document | Description |
|----------|-------------|
| [OPT-IN Framework Standard](./OPT-IN_FRAMEWORK_STANDARD.md) | Complete framework specification |
| [Documentation Standard](./AMPEL360_DOCUMENTATION_STANDARD.md) | Formatting and structure guidelines |
| [AI→ASI Transition Proposal](./AI-ASI-TP. md) | AI→ASI transition roadmap:  governance, assurance, and certification-grade adoption across SSOT+PUB |
| [Digital Twin Control Loop](./DIGITAL_TWIN_CONTROL_LOOP.md) | Digital twin architecture and data flows |
| [CAOS Index](./CAOS/CAOS_INDEX.md) | Continuous Airworthiness for Operational Sustainment |
| [CAOS Architecture](./CAOS/CAOS_ARCHITECTURE.md) | CAOS system architecture |
| [CAOS Operations Framework](./CAOS/CAOS_OPERATIONS_FRAMEWORK.md) | CAOS operational playbook |

---

## Contributing

1. **Fork** the repository
2. **Setup hooks**:  `bash .github/hooks/setup-hooks.sh`
3. **Follow** the SSOT + PUB pattern and OPT-IN structure
4. **Validate**:  `python tools/ci/optin_structure_validator.py --check`
5. **Submit** a pull request

### Contribution Rules

| Rule | Guidance |
|------|----------|
| **Narrative docs** | Use Markdown (`.md`) — not `.pdf`, `.docx` |
| **Matrices/logs** | Use CSV (`.csv`) — not `.xlsx` |
| **Graphics** | Prefer SVG for illustrations (ICN) |
| **S1000D content** | Keep XML/BREX compliant under `PUB/**/CSDB/**` |
| **References** | Ensure DM ↔ ICN ↔ PM ↔ DML ↔ APPLICABILITY resolve correctly |
| **Safety-critical** | Include DO-178C compliance tags where applicable |
| **KNOT/KNU** | Define uncertainties in LC01 before producing artifacts |
| **Tokenomics** | Declare reward pools in `TOKENOMICS_TT.yaml` per KNOT |

---

## License

Creative Commons Zero v1.0 Universal — see [LICENSE](./LICENSE).

---

## Acknowledgments

- **Concept & Direction**: Amedeo Pelliccia
- **AI Assistance**: GitHub Copilot (documentation generation)
- **Framework Design**: OPT-IN Framework
- **Tokenomics**: Teknia Token (TT) v3.14

---

<p align="center">
  <strong>AMPEL360 Q100</strong> — Digital engineering, traceability, and publication-grade CSDB for sustainable aviation. 
</p>

<p align="center">
  <em>By Amedeo Pelliccia • AI-Assisted Development</em>
</p>

<p align="center">
  <i>Last updated: 2026-01-11</i>
</p>
