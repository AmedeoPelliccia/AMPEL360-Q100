# AMPEL360 Q100 (AMPEL360-AIR-T)
## Hydrogen-Hybrid Electric BWB Aircraft — Digital Engineering Baseline

<p align="center">
  <img src="https://img.shields.io/badge/License-CC0%201.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Status-Active%20Development-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/ATA%20Chapters-79-orange" alt="ATA Chapters">
  <img src="https://img.shields.io/badge/Framework-OPT--IN-purple" alt="Framework">
  <img src="https://img.shields.io/badge/Publications-S1000D-teal" alt="S1000D">
  <img src="https://img.shields.io/badge/Tokenomics-TT%20v3.14-gold" alt="Teknia Tokens">
  <img src="https://img.shields.io/badge/Architecture-KI--DM%20%2F%20KITDM-crimson" alt="KI-DM">
</p>

<p align="center">
  <strong>Full Digital Information Twin Architecture for Clean Aviation Programmes<br/>
  From GENESIS uncertainty discovery to contract-ready execution</strong>
</p>

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Conceptual Architecture](#2-conceptual-architecture)
   - [2.1 The Knowledge-Information Separation Principle](#21-the-knowledge-information-separation-principle)
   - [2.2 GENESIS → KDB → IDB Flow](#22-genesis--kdb--idb-flow)
   - [2.3 ASIT: Bounded Automation](#23-asit-bounded-automation)
   - [2.4 PLM vs SLM Lifecycle Domains](#24-plm-vs-slm-lifecycle-domains)
3. [Repository Organization](#3-repository-organization)
   - [3.1 Top-Level Structure](#31-top-level-structure)
   - [3.2 Canonical ATA Pattern](#32-canonical-ata-pattern)
   - [3.3 File Naming Conventions](#33-file-naming-conventions)
4. [OPT-IN Framework](#4-opt-in-framework)
   - [4.1 Five-Axis Topology](#41-five-axis-topology)
   - [4.2 Complete Directory Structure](#42-complete-directory-structure)
5. [Governance & Workflows](#5-governance--workflows)
   - [5.1 KNOT Lifecycle](#51-knot-lifecycle)
   - [5.2 Contract-Based Transformation](#52-contract-based-transformation)
   - [5.3 Tokenomics & Incentive Alignment](#53-tokenomics--incentive-alignment)
   - [5.4 Change Control & Baselines](#54-change-control--baselines)
6. [Standards & Compliance](#6-standards--compliance)
7. [Getting Started](#7-getting-started)
   - [7.1 Prerequisites & Setup](#71-prerequisites--setup)
   - [7.2 First Contribution Walkthrough](#72-first-contribution-walkthrough)
   - [7.3 Role-Based Entry Points](#73-role-based-entry-points)
   - [7.4 Validation & CI Checks](#74-validation--ci-checks)
8. [CAOS Framework](#8-caos-framework)
9. [Publishing Model](#9-publishing-model)
   - [9.1 CSDB (S1000D)](#91-csdb-s1000d)
   - [9.2 IETP Runtime](#92-ietp-runtime)
10. [Tooling & Automation](#10-tooling--automation)
    - [10.1 CLI Tools Reference](#101-cli-tools-reference)
    - [10.2 ASIT Pipeline Configuration](#102-asit-pipeline-configuration)
    - [10.3 CI/CD Integration](#103-cicd-integration)
11. [Security & Access Control](#11-security--access-control)
    - [11.1 Data Classification](#111-data-classification)
    - [11.2 Export Control Considerations](#112-export-control-considerations)
    - [11.3 Role-Based Access Model](#113-role-based-access-model)
12. [Key Documentation](#12-key-documentation)
13. [Contributing](#13-contributing)
14. [Glossary](#14-glossary)
15. [Changelog](#15-changelog)
16. [License & Acknowledgments](#16-license--acknowledgments)

---

## 1. Executive Summary

### Mission Statement

**AMPEL360 Q100** delivers a **certification-grade digital information architecture** for hydrogen-electric aviation, where *knowledge* and *information* are governed as distinct domains with explicit transformation contracts.

This repository contains synthetic but structurally realistic program data demonstrating the **Knowledge and Information Data Model (KI-DM)** applied to a next-generation ~100 passenger regional aircraft concept.

### The Aircraft Concept

| Technology | Description |
|------------|-------------|
| **Blended Wing Body (BWB)** | High aerodynamic efficiency and integrated volume |
| **H₂ PEM Fuel Cells** | Primary electrical power generation from hydrogen |
| **Distributed / Open-Fan Propulsors** | Distributed propulsion architecture for efficiency and noise reduction |
| **Peak-Power Buffering** | Buffer strategy for transients (energy management and load leveling) |
| **Circularity + DPP** | Digital Product Passport foundations for lifecycle traceability |

### Why This Matters

| Principle | Implementation |
|-----------|----------------|
| **Knowledge ≠ Information** | Engineering truth (KDB) is separated from consumable publications (IDB) |
| **Uncertainty is First-Class** | Every unknown is tracked, planned, and closed with full traceability |
| **Automation Without Delegation** | ASIT agents execute contracts; humans retain technical authority |
| **Incentive Alignment** | Teknia Tokens reward uncertainty reduction, not just output volume |
| **Certification-Grade Governance** | Explicit contracts, auditable transformations, traceable evidence |

### At a Glance

| Metric | Value |
|--------|-------|
| ATA Chapters | 79 |
| Lifecycle Phases | 14 (LC01–LC14) |
| Framework Axes | 5 (O-P-T-I-N) |
| Publication Standard | S1000D |
| Token System | TT v3.14 |
| Knowledge Domains | PLM (Product) + SLM (Service) |

### Core Principle

> **Technical authority remains human and explicit; automation remains bounded, deterministic, and auditable.** 
**“This repository demonstrates governance and transformation mechanics, not aircraft certification data.”**

### Explicit Non-Goals

- This repository does not replace engineering authority
- It does not assert airworthiness or certification compliance
- It does not automate decision-making

---

## 2. Conceptual Architecture

### 2.1 The Knowledge-Information Separation Principle

This repository addresses a recurring industry challenge:

> Engineering knowledge, documentation, and certification evidence tend to diverge as programs scale and become geographically distributed.

The **KI-DM (Knowledge and Information Data Model)** solves this by treating knowledge and information as fundamentally distinct domains:

| Domain | Purpose | Authority |
|--------|---------|-----------|
| **Knowledge (KDB)** | What we know, what we don't know yet, and under whose authority | Engineering teams, domain experts |
| **Information (IDB)** | What is needed, by whom, to execute a specific process | Publication authors, operators, MROs |
| **Transformation (ASIT)** | How validated knowledge becomes usable information | Automated but governed by explicit contracts |

**Key insight:** Information is always *derived* from knowledge—it never creates new knowledge. This separation ensures that:

- Engineering truth remains authoritative and traceable
- Publications can be regenerated from source knowledge
- Changes propagate through governed channels
- Auditors can inspect the complete chain from uncertainty to evidence

### 2.2 GENESIS → KDB → IDB Flow

The complete information pipeline flows through three major layers:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              GENESIS                                         │
│            "What we don't know yet, and how we'll find out"                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                      │
│  │   O-KNOT    │───▶│   Y-KNOT    │───▶│    KNOT     │                      │
│  │   Origin    │    │ Justification│    │   Framed    │                      │
│  │ Uncertainty │    │   Trees     │    │ Uncertainty │                      │
│  └─────────────┘    └─────────────┘    └─────────────┘                      │
│                                                                              │
│  • Ontology & schemas (structure, no data)                                   │
│  • Programmatic logic & policy alignment                                     │
│  • Decision rationale capture                                                │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                       ▼ ALLOCATION GATE ▼                                    │
│                    "Reality Big Bang"                                        │
│                                                                              │
│  • Contractual, timestampable commitment                                     │
│  • Funding / responsibility / scope bound                                    │
│  • Irreversible transition to accountable reality                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                KDB                                           │
│              "What we know, under whose authority"                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  SSOT / PLM — Product Lifecycle Management (LC01–LC10)              │    │
│  ├─────────────────────────────────────────────────────────────────────┤    │
│  │  LC01  Problem Statement & Uncertainty Orchestration                │    │
│  │  LC02  System Requirements                                          │    │
│  │  LC03  Safety & Reliability                                         │    │
│  │  LC04  Design Definition (DMU)                                      │    │
│  │  LC05  Analysis Models (CAE)                                        │    │
│  │  LC06  Integration & Test (PMU)                                     │    │
│  │  LC07  Quality                                                      │    │
│  │  LC08  Flight Test & Certification                                  │    │
│  │  LC09  Green Aircraft Baselines                                     │    │
│  │  LC10  Industrialization & Production (CAM)                         │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  • Lifecycle baselines                    • Deterministic reasoning          │
│  • Requirements & ICDs                    • Safety & certification evidence  │
│  • Design models                          • V&V artifacts                    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                       ▼ ASIT CONTRACTS ▼                                     │
│          (Deterministic, traceable, auditable transformation)                │
│                                                                              │
│  • KITDM-CTR-001: KDB → CSDB                                                │
│  • KITDM-CTR-002: KDB → EXPORT                                              │
│  • KITDM-CTR-003: KDB → IETP                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                IDB                                           │
│        "What information is needed, by whom, for what process"               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  SSOT / SLM — Service Lifecycle Management (LC11–LC14)              │    │
│  ├─────────────────────────────────────────────────────────────────────┤    │
│  │  LC11  Operations & Customization                                   │    │
│  │  LC12  Support Services                                             │    │
│  │  LC13  MRO & Sustainment                                            │    │
│  │  LC14  Retirement & Circularity                                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  PUB — Publications                                                 │    │
│  ├─────────────────────────────────────────────────────────────────────┤    │
│  │  CSDB   S1000D data modules (DM/PM/DML/BREX/ICN)                   │    │
│  │  EXPORT Rendered deliverables (PDF/HTML)                            │    │
│  │  IETP   Interactive runtime delivery                                │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 ASIT: Bounded Automation

**ASIT (Aircraft Standard Information Transponder)** agents execute formal transformation contracts between KDB and IDB. Critical constraints:

| ASIT Does | ASIT Does Not |
|-----------|---------------|
| Execute deterministic transformations | Create knowledge |
| Apply validation rules (BREX, schemas) | Make engineering decisions |
| Generate trace matrices | Assume technical authority |
| Log all operations with full provenance | Modify source knowledge |
| Report validation failures | Interpret ambiguous inputs |

**Every ASIT transformation is:**

- **Deterministic** — Same input always produces same output
- **Reproducible** — Can be re-executed at any time
- **Traceable** — Full audit trail from source to output
- **Governed** — Controlled by explicit contract definition

### 2.4 PLM vs SLM Lifecycle Domains

The 14 lifecycle phases are split across two management domains:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PLM — Product Lifecycle Management                        │
│                         (KDB / SSOT Authority)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  LC01  │ Problem Statement      │ Uncertainty orchestration, KNOT/KNU       │
│  LC02  │ System Requirements    │ Requirements, traceability                │
│  LC03  │ Safety & Reliability   │ Hazard analysis, FMEA, safety cases       │
│  LC04  │ Design Definition      │ DMU, ICDs, architecture                   │
│  LC05  │ Analysis Models        │ FEA, CFD, thermal, performance            │
│  LC06  │ Integration & Test     │ PMU, test procedures, evidence            │
│  LC07  │ Quality                │ Quality plans, inspection records         │
│  LC08  │ Flight Test & Cert     │ Certification basis, compliance matrix    │
│  LC09  │ Green Aircraft         │ Delivery baselines, effectivity           │
│  LC10  │ Industrialization      │ Manufacturing specs, tooling, CAM         │
├─────────────────────────────────────────────────────────────────────────────┤
│                    SLM — Service Lifecycle Management                        │
│                         (IDB / SSOT Authority)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  LC11  │ Operations             │ Ops configurations, customer deltas       │
│  LC12  │ Support Services       │ In-service support, technical bulletins   │
│  LC13  │ MRO & Sustainment      │ Maintenance programs, repair authority    │
│  LC14  │ Retirement             │ End-of-life, circularity, DPP closure     │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Why this separation matters:**

- **PLM** = Product knowledge owned by design/engineering authority
- **SLM** = Service knowledge owned by operations/MRO authority
- **Clear handoff** = LC09 (Green Aircraft) marks the transition point
- **Both are SSOT** = Different authorities, same governance rigor

---

## 3. Repository Organization

### 3.1 Top-Level Structure

```
AMPEL360-AIR-T/
├── README.md                          # This file
├── LICENSE                            # CC0 1.0 Universal
├── CHANGELOG.md                       # Version history
├── requirements.txt                   # Python dependencies
│
├── OPT-IN_FRAMEWORK/                  # Main content organized by ATA chapters
│   ├── O-ORGANIZATIONS/               # ATA 00–05
│   ├── P-PROGRAMS/                    # ATA 06–12
│   ├── T-TECHNOLOGIES_.../            # ATA 20–80 (on-board systems)
│   ├── I-INFRASTRUCTURES/             # Ground support, H₂ logistics
│   └── N-NEURAL_NETWORKS/             # Governance, ledger, AI/ML
│
├── CAOS/                              # Continuous Airworthiness framework
│   ├── CAOS_INDEX.md
│   ├── CAOS_ARCHITECTURE.md
│   └── CAOS_OPERATIONS_FRAMEWORK.md
│
├── tools/                             # CLI tools and automation
│   ├── ci/                            # CI/CD scripts
│   ├── tek_tokens.py                  # Tokenomics CLI
│   └── knu_distribution.py            # KNOT closure distribution
│
├── finance/                           # Token ledger
│   └── ledger.json                    # SHA-256 hash chain
│
├── docs/                              # Additional documentation
│   ├── ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md
│   ├── OPT-IN_FRAMEWORK_STANDARD.md
│   ├── AMPEL360_DOCUMENTATION_STANDARD.md
│   ├── AI-ASI-TP.md
│   └── DIGITAL_TWIN_CONTROL_LOOP.md
│
└── .github/                           # GitHub configuration
    ├── hooks/
    └── workflows/
```

### 3.2 Canonical ATA Pattern

Each ATA chapter follows the **KDB / CONTRACTS / ASIT / IDB** pattern:

```
ATA_XX-<SYSTEM_NAME>/                                         # Single canonical root (ATA iSpec 2200 aligned)
├── README.md                                                 # System overview, navigation, standards alignment
├── NAMING_CONVENTIONS.md                                     # ID rulebook (KNOT, REQ, DES, TEST, HAZ, DMC)
├── TRACEABILITY_CONVENTIONS.md                               # 🆕 Relationship vocabulary & rules
├── GOVERNANCE_POLICY.md                                      # Baseline, change control, approval authority
│
├── WBS/                                                      # Work Breakdown Structure (system-level)
│   ├── SYSTEM_MISSION. md                                     # Mission statement
│   ├── SYSTEM_VISION.md                                      # Strategic vision
│   ├── SYSTEM_OBJECTIVES.md                                  # Measurable objectives
│   ├── WBS_LEVEL_1.yaml                                      # Top-level work packages
│   ├── WBS_LEVEL_2.yaml                                      # Detailed breakdown
│   ├── WBS_TRACE_TO_PROJECT.csv                              # Project-level traceability
│   └── WBS_BUDGET_TT.yaml                                    # Teknia Token allocation (informational)
│
├── GOVERNANCE/                                               # System-level governance (DEFAULT authority)
│   ├── README.md                                             # Governance framework overview
│   ├── GOVERNANCE_POLICY.md                                  # Master policy document
│   ├── BASELINES.md                                          # 🆕 Baseline policy & scope definition
│   │   # Defines:  What is baselined (SSOT only), tagging convention,
│   │   #          immutability rules, export requirements
│   ├── BASELINE_REGISTER.csv                                 # Baseline tracking
│   │   # Columns: Baseline_ID, Version, Date, Commit_SHA, Scope, Status, Approver, Description, Gate
│   ├── CHANGE_LOG.md                                         # Human-readable change summary
│   │
│   ├── CHANGE_CONTROL/                                       # ECR/ECO management (AS9100 aligned)
│   │   ├── README.md                                         # Change control process
│   │   ├── ECR_TEMPLATE.md                                   # Engineering Change Request template
│   │   ├── ECO_TEMPLATE.md                                   # Engineering Change Order template
│   │   ├── ECR/                                              # Change requests
│   │   │   ├── ECR-XX-2026-001.md
│   │   │   └── ECR_REGISTER.csv
│   │   │       # Columns: ECR_ID, Title, Initiator, Date, Status, Priority, Affected_Items, Approver, Closure_Date
│   │   ├── ECO/                                              # Change orders
│   │   │   ├── ECO-XX-2026-001.md
│   │   │   └── ECO_REGISTER.csv
│   │   └── CCB_MINUTES/                                      # Configuration Control Board
│   │       └── CCB-2026-01-15.md                             # Date format:  YYYY-MM-DD
│   │
│   ├── APPROVALS/                                            # Approval workflows
│   │   ├── APPROVAL_MATRIX.csv                               # Authority matrix (RACI)
│   │   │   # Columns:  Artifact_Type, Approval_Level, Responsible, Accountable, Consulted, Informed
│   │   ├── GATE_REVIEWS/                                     # Quality gate approvals
│   │   │   ├── PDR_APPROVAL.md                               # Preliminary Design Review
│   │   │   ├── CDR_APPROVAL.md                               # Critical Design Review
│   │   │   ├── TRR_APPROVAL.md                               # Test Readiness Review
│   │   │   └── FRR_APPROVAL. md                               # Flight Readiness Review
│   │   └── DIGITAL_SIGNATURES/                               # Cryptographic signatures
│   │       └── . gitkeep
│   │
│   ├── RELEASES/                                             # Release management
│   │   ├── RELEASE_POLICY.md                                 # Release criteria
│   │   ├── RELEASE_REGISTER.csv                              # Version history
│   │   │   # Columns: Release_ID, Version, Date, Baseline_ID, Commit_SHA, Artifacts, Approver, Notes
│   │   └── RELEASE_NOTES/
│   │       ├── RELEASE_v1-0-0.md                             # Consistent hyphenated versioning
│   │       └── RELEASE_v1-1-0.md
│   │
│   └── INCENTIVES/                                           # 🆕 TT ledgers (informational, non-baseline)
│       ├── README.md                                         # TT governance (reference only)
│       ├── TT_ALLOCATION.yaml                                # System-level TT budget
│       ├── TT_DISTRIBUTION.csv                               # Actual awards
│       └── TT_POLICY.md                                      # TT rules (informational)
│
├── INDEX/                                                    # Master navigation & traceability
│   ├── README.md                                             # Index usage guide
│   ├── SSOT_INDEX.yaml                                       # 🆕 Authoritative source registry
│   │   # Defines: What is SSOT, where it lives, who owns it, change control rules
│   ├── TRACE_MASTER.csv                                      # 🆕 System-level end-to-end traceability
│   │   # Columns:  Source_Type, Source_ID, Target_Type, Target_ID, Relationship, 
│   │   #          Validation_Status, Validation_Date, Validated_By, Notes, Baseline
│   │   # Relationship vocabulary:  DERIVES, SATISFIES, VERIFIES, VALIDATES, ALLOCATED_TO, IMPLEMENTS, AFFECTS
│   ├── ID_REGISTRY.csv                                       # Auto-generated ID catalog
│   │   # Columns: ID, Type, Title, Owner, Status, Created_Date, Baseline_First_Appeared, Path
│   ├── ARTIFACT_CATALOG.yaml                                 # Complete artifact inventory
│   └── NAVIGATION_MAP.html                                   # Interactive dashboard
│
└── XX-YY-<section-slug>/                                     # ATA section (e.g., 28-10-storage)
    ├── README. md                                             # Section scope, AoR
    ├── SECTION_INDEX.yaml                                    # Section artifact index
    │
    ├── GENESIS/                                              # Discovery phase
    │   ├── README.md                                         # GENESIS methodology
    │   ├── O-KNOTS.csv                                       # Origin uncertainties
    │   ├── Y-KNOTS.csv                                       # Assumptions to validate
    │   ├── DISCOVERY_LOG.md                                  # Session notes
    │   └── GRADUATION_CRITERIA.md                            # Graduation rules
    │
    └── XX-YY-00-<subject-slug>/                              # Subject (smallest governed unit)
        ├── README.md                                         # Subject overview
        ├── SUBJECT_MANIFEST.yaml                             # Complete inventory
        │
        ├── GOVERNANCE/                                       # 🆕 Subject-level governance (optional overrides)
        │   ├── README.md                                     # 🆕 CRITICAL: Must state: 
        │   │   # "This subject follows system GOVERNANCE/ unless explicitly overridden below. 
        │   │   #  See ../../GOVERNANCE/ for master policies."
        │   ├── BASELINES.md                                  # Subject-specific baseline rules (if stricter)
        │   ├── BASELINE_REGISTER.csv                         # Subject baseline tracking
        │   ├── CHANGE_LOG.md
        │   ├── CHANGE_CONTROL/
        │   │   ├── ECR/
        │   │   ├── ECO/
        │   │   └── CCB_MINUTES/
        │   ├── APPROVALS/
        │   │   ├── APPROVAL_MATRIX.csv                       # Subject-specific approvals (if different)
        │   │   └── GATE_REVIEWS/
        │   └── RELEASES/
        │       └── RELEASE_REGISTER.csv
        │
        ├── INDEX/                                            # Subject-level navigation
        │   ├── README.md
        │   ├── SSOT_INDEX.yaml                               # Subject SSOT pointers
        │   ├── TRACE_MATRIX.csv                              # Subject traceability (subset of TRACE_MASTER)
        │   ├── ID_REGISTRY.csv                               # Subject ID registry
        │   └── COMPLIANCE_STATUS.yaml                        # Real-time compliance tracking
        │
        ├── KDB/                                              # Knowledge Data Base (authoritative SSOT)
        │   ├── README.md                                     # KDB governance
        │   │
        │   ├── DEV/                                          # 🆕 NOT part of baseline (per BASELINES.md)
        │   │   ├── working/
        │   │   │   └── . gitkeep
        │   │   ├── trade-studies/
        │   │   │   ├── TRADE_STUDY_TEMPLATE.md
        │   │   │   └── . gitkeep
        │   │   ├── prototypes/
        │   │   │   └── . gitkeep
        │   │   └── dev-evidence/
        │   │       └── .gitkeep
        │   │
        │   └── LM/                                           # Lifecycle-managed (BASELINED)
        │       └── SSOT/                                     # Single Source of Truth
        │           ├── SSOT_POLICY.md                        # 🆕 SSOT rules
        │           │   # States: "Only LM/SSOT/PLM/ is baselined. DEV/ is workspace only. 
        │           │   #          TT ledgers are informational, not part of technical baseline."
        │           │
        │           └── PLM/                                  # Product Lifecycle Management
        │               │
        │               ├── LC01_PROBLEM_STATEMENT/           # Problem definition
        │               │   ├── README.md
        │               │   ├── KNOTS.csv                     # Uncertainty register
        │               │   │   # Columns:  KNOT_ID, Title, Description, Complexity, Owner, Status, Due_Date, Priority, Baseline
        │               │   ├── KNU_PLAN.csv                  # Knowledge unit planning
        │               │   ├── TIMELINE.csv                  # Milestones (date format: YYYY-MM-DD)
        │               │   ├── RACI. csv                      # Stakeholder matrix
        │               │   ├── TRACE_LC01.csv                # 🆕 LC01 traceability
        │               │   │   # Relationships: KNOT DERIVES REQ
        │               │   └── PACKAGES/
        │               │       ├── KNOT_MGMT/
        │               │       │   └── . gitkeep
        │               │       ├── KNU_PLANNING/
        │               │       │   └── .gitkeep
        │               │       ├── GOVERNANCE/
        │               │       │   └── .gitkeep
        │               │       └── INCENTIVES/                # 🆕 Subject TT records (reference to GOVERNANCE/INCENTIVES/)
        │               │           ├── README.md             # "See system GOVERNANCE/INCENTIVES/ for master TT policy"
        │               │           ├── TT_ALLOCATION_LC01.yaml
        │               │           └── TT_AWARDS_LC01.csv
        │               │
        │               ├── LC02_SYSTEM_REQUIREMENTS/         # Requirements engineering (ARP4754A aligned)
        │               │   ├── README.md
        │               │   ├── REQUIREMENTS_MANAGEMENT_PLAN.md
        │               │   ├── TRACE_LC02.csv                # 🆕 Traceability
        │               │   │   # Relationships: REQ DERIVES KNOT, REQ ALLOCATED_TO DES, REQ VERIFIES TEST
        │               │   └── PACKAGES/
        │               │       ├── REQ/
        │               │       │   ├── REQ_INDEX.yaml
        │               │       │   ├── SRD_SYSTEM_REQUIREMENTS. md
        │               │       │   ├── REQUIREMENTS_DATABASE.csv  # Master requirements list
        │               │       │   │   # Columns:  Req_ID, Title, Description, Type, Priority, Owner, Status, 
        │               │       │   │   #          Verification_Method, Baseline, Parent_Req, Date_Created (YYYY-MM-DD)
        │               │       │   ├── DERIVED_REQUIREMENTS.csv
        │               │       │   ├── TRACE_TO_STAKEHOLDER.csv
        │               │       │   └── REQUIREMENTS_TRACEABILITY_MATRIX.csv  # Full RTM
        │               │       ├── ICD/
        │               │       │   ├── ICD_INDEX.yaml
        │               │       │   ├── INTERFACE_DEFINITIONS.md
        │               │       │   └── INTERFACE_CONTROL_MATRIX.csv
        │               │       ├── DATA/
        │               │       │   └── . gitkeep
        │               │       └── COMPLIANCE_INTENT/
        │               │           ├── COMPLIANCE_CHECKLIST.md
        │               │           └── REGULATORY_MAPPING.csv  # Regulation → Requirement
        │               │
        │               ├── LC03_SAFETY_RELIABILITY/          # Safety engineering (ARP4761 aligned)
        │               │   ├── README.md
        │               │   ├── SAFETY_ASSESSMENT_PLAN.md
        │               │   ├── TRACE_LC03.csv                # 🆕 Traceability
        │               │   │   # Relationships:  HAZARD AFFECTS REQ, REQ SATISFIES HAZARD (mitigation)
        │               │   └── PACKAGES/
        │               │       ├── SAFETY/
        │               │       │   ├── SAFETY_ASSESSMENT_INDEX.yaml
        │               │       │   ├── FHA_FUNCTIONAL_HAZARD_ASSESSMENT.md
        │               │       │   ├── PSSA_PRELIMINARY_SAFETY_ASSESSMENT.md
        │               │       │   ├── SSA_SYSTEM_SAFETY_ASSESSMENT.md
        │               │       │   ├── HAZARD_REGISTER.csv
        │               │       │   │   # Columns: Hazard_ID, Description, Classification, Effect, Mitigation, 
        │               │       │   │   #          Owner, Status, Linked_Req, Date_Identified (YYYY-MM-DD)
        │               │       │   ├── SAFETY_REQUIREMENTS.csv
        │               │       │   └── FMEA_FMECA. csv
        │               │       ├── RELIABILITY/
        │               │       │   └── . gitkeep
        │               │       └── HAZARD_MGMT/
        │               │           └── .gitkeep
        │               │
        │               ├── LC04_DESIGN_DEFINITION_DMU/       # Design artifacts
        │               │   ├── README.md
        │               │   ├── DESIGN_DESCRIPTION_DOCUMENT.md
        │               │   ├── TRACE_LC04.csv                # 🆕 Traceability
        │               │   │   # Relationships: DES SATISFIES REQ, DES IMPLEMENTS REQ, DES VALIDATES ANALYSIS
        │               │   └── PACKAGES/
        │               │       ├── DESIGN/
        │               │       │   ├── DESIGN_INDEX.yaml
        │               │       │   ├── DESIGN_DESCRIPTION. md
        │               │       │   ├── CAD_REFERENCES.csv
        │               │       │   ├── DESIGN_DECISIONS.md
        │               │       │   ├── DESIGN_JUSTIFICATION.csv  # Design rationale → Req
        │               │       │   └── DMU_MASTER_MODEL.yaml
        │               │       ├── CONFIG/
        │               │       │   ├── CONFIGURATION_ITEMS.csv
        │               │       │   └── PART_NUMBERS.csv
        │               │       └── INTERFACES/
        │               │           └── . gitkeep
        │               │
        │               ├── LC05_ANALYSIS_MODELS_CAE/         # Engineering analysis
        │               │   ├── README.md
        │               │   ├── ANALYSIS_PLAN.md
        │               │   ├── TRACE_LC05.csv                # 🆕 Traceability
        │               │   │   # Relationships: ANALYSIS VALIDATES DES, ANALYSIS VERIFIES REQ
        │               │   └── PACKAGES/
        │               │       ├── ANALYSIS/
        │               │       │   ├── ANALYSIS_INDEX.yaml
        │               │       │   ├── STRESS_ANALYSIS_REPORT.md
        │               │       │   ├── THERMAL_ANALYSIS_REPORT.md
        │               │       │   ├── ANALYSIS_RESULTS.csv
        │               │       │   ├── VALIDATION_CASES.csv
        │               │       │   └── MODEL_CORRELATION.csv
        │               │       ├── MODELS/
        │               │       │   ├── MODEL_REGISTER.csv
        │               │       │   └── . gitkeep
        │               │       └── VALIDATION/
        │               │           └── .gitkeep
        │               │
        │               ├── LC06_INTEGRATION_TEST_PMU/        # Testing & verification
        │               │   ��── README.md
        │               │   ├── TEST_PROGRAM_PLAN.md
        │               │   ├── TRACE_LC06.csv                # 🆕 Traceability
        │               │   │   # Relationships: TEST VERIFIES REQ, TEST VALIDATES DES
        │               │   └── PACKAGES/
        │               │       ├── TEST/
        │               │       │   ├── TEST_INDEX.yaml
        │               │       │   ├── TEST_PLAN.md
        │               │       │   ├── TEST_PROCEDURES.md
        │               │       │   ├── TEST_CASES.csv         # 🆕 ID-based test cases
        │               │       │   │   # Columns: Test_ID, Title, Req_ID, Procedure, Pass_Criteria, 
        │               │       │   │   #          Result, Date (YYYY-MM-DD), Witness
        │               │       │   ├── TEST_RESULTS. csv
        │               │       │   ├── TEST_TRACEABILITY_MATRIX.csv
        │               │       │   ├── NON_CONFORMANCE_REPORTS/
        │               │       │   │   └── NCR_REGISTER.csv
        │               │       │   └── TEST_EVIDENCE/         # Immutable test data
        │               │       │       └── .gitkeep
        │               │       ├── INTEGRATION/
        │               │       │   └── .gitkeep
        │               │       └── CONFORMITY/
        │               │           └── .gitkeep
        │               │
        │               ├── LC07_QUALITY/                     # Quality assurance (AS9100)
        │               │   ├── README.md
        │               │   ├── QUALITY_ASSURANCE_PLAN.md
        │               │   ├── TRACE_LC07.csv                # 🆕 QA cross-checks all LCs
        │               │   └── PACKAGES/
        │               │       ├── QA/
        │               │       │   ├── QA_INDEX.yaml
        │               │       │   ├── QUALITY_PLAN.md
        │               │       │   ├── INSPECTION_CHECKLIST.csv
        │               │       │   ├── NCR_REGISTER.csv
        │               │       │   ├── CORRECTIVE_ACTIONS.csv
        │               │       │   └── AUDIT_REPORTS/
        │               │       │       └── .gitkeep
        │               │       ├── PROCESS_COMPLIANCE/
        │               │       │   └── AS9100_COMPLIANCE_MATRIX.csv
        │               │       └── ACCEPTANCE/
        │               │           └── .gitkeep
        │               │
        │               ├── LC08_FLIGHT_TEST_CERTIFICATION/   # Certification (ARP4754A/DO-178C/DO-254)
        │               │   ├── README.md
        │               │   ├── CERTIFICATION_PLAN.md
        │               │   ├── MEANS_OF_COMPLIANCE.md        # 🆕 MOC methodology
        │               │   ├── COMPLIANCE_MATRIX.csv         # 🆕 Master compliance matrix
        │               │   │   # Columns: Regulation_ID, Regulation_Text, MOC_ID, MOC_Type, Evidence_ID,
        │               │   │   #          Evidence_Location, Status, Issue_Paper_ID, Approver, Approval_Date (YYYY-MM-DD)
        │               │   ├── TRACE_LC08.csv                # 🆕 Traceability
        │               │   │   # Relationships: REGULATION ALLOCATED_TO REQ, MOC VERIFIES REGULATION, 
        │               │   │   #                TEST SATISFIES MOC
        │               │   └── PACKAGES/
        │               │       ├── CERT_BASIS/
        │               │       │   ├── CERT_INDEX.yaml
        │               │       │   ├── CERTIFICATION_PLAN.md
        │               │       │   ├── CERTIFICATION_BASIS.md
        │               │       │   ├── TYPE_CERTIFICATE_DATA_SHEET.md
        │               │       │   ├── MOC_REGISTER.csv       # 🆕 Means of Compliance registry
        │               │       │   │   # Columns: MOC_ID, Regulation_ID, Method, Evidence_Path, Status, Approver
        │               │       │   ├── ISSUE_PAPERS/          # Certification issues
        │               │       │   │   ├── IP-001_description.md
        │               │       │   │   └── IP_REGISTER.csv
        │               │       │   │       # Columns: IP_ID, Regulation, Issue, Resolution, Status, Date (YYYY-MM-DD)
        │               │       │   └── SPECIAL_CONDITIONS/    # SC/ESF
        │               │       │       └── .gitkeep
        │               │       ├── COMPLIANCE/
        │               │       │   ├── COMPLIANCE_CHECKLIST.md
        │               │       │   ├── COMPLIANCE_EVIDENCE_INDEX.csv  # 🆕 Pointers to LC06 evidence
        │               │       │   │   # Columns: Evidence_ID, MOC_ID, Evidence_Type, Location, Date (YYYY-MM-DD)
        │               │       │   └── CONFORMITY_STATEMENTS/
        │               │       │       └── .gitkeep
        │               │       └── FLIGHT_TEST/
        │               │           ├── FLIGHT_TEST_PLAN.md
        │               │           ├── FLIGHT_TEST_RESULTS.csv
        │               │           └── . gitkeep
        │               │
        │               ├── LC09_GREEN_AIRCRAFT_BASELINES/    # Sustainability
        │               │   ├── README.md
        │               │   ├── ESG_REPORT.md
        │               │   ├── TRACE_LC09.csv
        │               │   └── PACKAGES/
        │               │       ├── ESG/
        │               │       │   └── . gitkeep
        │               │       ├── LCA/
        │               │       │   └── .gitkeep
        │               │       └── ENV_COMPLIANCE/
        │               │           └── .gitkeep
        │               │
        │               └── LC10_INDUSTRIALIZATION_PRODUCTION_CAM/  # Manufacturing
        │                   ├── README.md
        │                   ├── PRODUCTION_PLAN.md
        │                   ├── TRACE_LC10.csv
        │                   └── PACKAGES/
        │                       ├── INDUSTRIAL/
        │                       │   └── .gitkeep
        │                       ├── SUPPLY/
        │                       │   └── .gitkeep
        │                       └── QUALITY_PROD/
        │                           └── .gitkeep
        │
        ├── CONTRACTS/                                        # KDB → IDB governance
        │   ├── README.md
        │   ├── KITDM-CTR-LM-CSDB_ATAxx-yy00. yaml
        │   ├── KITDM-CTR-LM-EXPORT_ATAxx-yy00.yaml
        │   ├── KITDM-CTR-LM-IETP_ATAxx-yy00.yaml
        │   ├── KITDM-CTR-OPS-SB_ATAxx-yy00.yaml
        │   ├── KITDM-CTR-OPS-REPAIR_ATAxx-yy00.yaml
        │   ├── KITDM-CTR-OPS-QUERY_ATAxx-yy00.yaml
        │   ├── KITDM-CTR-OPS-COC_ATAxx-yy00.yaml
        │   ├── CONTRACT_APPROVAL_LOG.csv
        │   └── EVIDENCE/
        │       ├── ACCEPTANCE_CRITERIA.md
        │       ├── TRACE_MATRIX_TEMPLATE.csv
        │       └── VALIDATION_REPORTS/
        │           └── . gitkeep
        │
        ├── ASIT/                                             # Automation
        │   ├── README. md
        │   ├── asit_config.yaml
        │   ├── pipelines/
        │   │   └── .gitkeep
        │   ├── rules/
        │   │   └── .gitkeep
        │   ├── k8s/
        │   │   └── .gitkeep
        │   └── runs/
        │       └── . gitkeep
        │
        └── IDB/                                              # Information Data Base (projection)
            ├── README. md
            ├── IDB_GOVERNANCE. md
            ├── OPS/
            │   └── LM/
            │       ├── LC11_OPERATIONS_CUSTOMIZATION/
            │       ├── LC12_SUPPORT_SERVICES/
            │       ├── LC13_MRO_SUSTAINMENT/
            │       └── LC14_RETIREMENT_CIRCULARITY/
            │
            ├── PUB/
            │   ├── AMM/
            │   │   ├── CSDB/
            │   │   ├── EXPORT/
            │   │   └── IETP_RUNTIME/
            │   ├── IPC/
            │   └── SRM/
            │
            └── INDEX/
                ├── IDB_RELEASE_NOTES.md
                ├── IDB_TRACE_SUMMARY.md
                ├── IDB_INDEX.json
                ├── PUBLICATION_MANIFEST.yaml
                ├── BASELINE_REFERENCE.yaml                   # Which KDB baseline generated this IDB
                ├── COMPLIANCE_CHECKLIST.md
                ├── COMPLIANCE_STATUS_DASHBOARD.html
                ├── CHANGELOG.md
                ├── METRICS_DASHBOARD.html
                └── DPP_ANCHOR_RECEIPT.json
```
---

## 3.3 File Naming Conventions (Final – Sub-Subject Removed)

### Directory & Identifier Naming

| Type                       | Pattern                              | Example                                     | Normative Notes                                |
| -------------------------- | ------------------------------------ | ------------------------------------------- | ---------------------------------------------- |
| **ATA Chapter (external)** | `ATA_XX-SYSTEM_NAME/`                | `ATA_28-FUEL/`                              | ATA-visible chapter container                  |
| **ATA Chapter (internal)** | `ATA-XX-<system-slug>/`              | `ATA-28-fuel/`                              | Canonical internal system slug                 |
| **Section**                | `XX-YY-<section-slug>/`              | `28-10-storage/`                            | **Epistemological scope** (GENESIS lives here) |
| **GENESIS Folder**         | `GENESIS/`                           | `28-10-storage/GENESIS/`                    | Section-level uncertainty discovery            |
| **O-KNOT ID**              | `O-KNOT-XX-YY-NNN`                   | `O-KNOT-28-10-001`                          | Origin of uncertainty (section-scoped)         |
| **Y-KNOT ID**              | `Y-KNOT-XX-YY-NNN`                   | `Y-KNOT-28-10-002`                          | Assumption challenge (section-scoped)          |
| **Subject**                | `XX-YY-00-<subject-slug>/`           | `28-10-00-storage/`                         | **Smallest governed unit**                     |
| **KNOT ID**                | `KNOT-XX-YY-00-NNN`                  | `KNOT-28-10-00-001`                         | Formalized uncertainty (LC01+)                 |
| **KNU ID**                 | `KNU-XX-YY-00-TYPE-NNN`              | `KNU-28-10-00-REQ-001`                      | Knowledge Unit (LC02+)                         |
| **Contract**               | `KITDM-CTR-<TARGET>_ATAxx-yy00.yaml` | `KITDM-CTR-CSDB_ATA28-1000.yaml`            | KDB → IDB contract (subject-scoped)            |
| **ASIT Run**               | `YYYYMMDD-HHMM__<contract-id>/`      | `20260115-1430__KITDM-CTR-CSDB_ATA28-1000/` | Deterministic execution instance               |
| **Data Module (DM)**       | S1000D DMC convention                | `DMC-AMPEL360-A-28-10-00-00A-040A-A.XML`    | Audience-facing, IDB-owned                     |

---

## 4. OPT-IN Framework

### 4.1 Five-Axis Topology

The OPT-IN Framework organizes all 79 ATA chapters across five axes:

| Axis | Name | ATA Chapters | Scope |
|------|------|--------------|-------|
| **O** | Organizations | 00–05 | General, maintenance policy, operations org, airworthiness |
| **P** | Programs | 06–12 | Dimensions, lifting, leveling, towing, parking, servicing |
| **T** | Technologies | 20–80 | All on-board systems (airframe, avionics, propulsion, etc.) |
| **I** | Infrastructures | 03*, 08*, 10*, 12*, 85, IN-XX | Ground support, H₂ logistics, facilities |
| **N** | Neural Networks | 95, 96, 97, 98 | AI/ML, traceability, DPP, governance |

*Note: Some chapters appear in multiple axes with different sub-scopes (e.g., ATA 08 PROGRAMS vs ATA 08 INFRA)*

### 4.2 Complete Directory Structure

<details>
<summary><strong>Click to expand full OPT-IN directory tree</strong></summary>

```
OPT-IN_FRAMEWORK/
├── README.md
├── 00_INDEX.md
│
├── O-ORGANIZATIONS/                                      # ATA 00–05
│   ├── README.md
│   ├── 00_INDEX.md
│   ├── ATA_00-GENERAL/
│   ├── ATA_01-MAINTENANCE_POLICY/
│   ├── ATA_02-OPERATIONS_ORG/
│   ├── ATA_03-SUPPORT_INFORMATION/
│   ├── ATA_04-AIRWORTHINESS_LIMITATIONS/
│   └── ATA_05-TIME_LIMITS_MAINT_CHECKS/
│
├── P-PROGRAMS/                                           # ATA 06–12
│   ├── README.md
│   ├── 00_INDEX.md
│   ├── ATA_06-DIMENSIONS_AND_AREAS/
│   ├── ATA_07-LIFTING_AND_SHORING/
│   ├── ATA_08-LEVELING_AND_WEIGHING/
│   ├── ATA_09-TOWING_AND_TAXIING/
│   ├── ATA_10-PARKING_MOORING_STORAGE_RETURN_TO_SERVICE/
│   ├── ATA_11-PLACARDS_AND_MARKINGS/
│   └── ATA_12-SERVICING/
│
├── T-TECHNOLOGIES_AMEDEOPELLICCIA-ON_BOARD_SYSTEMS/
│   ├── README.md
│   ├── 00_INDEX.md
│   │
│   ├── A-AIRFRAME_CABINS/
│   │   ├── ATA_20-STANDARD_PRACTICES_AIRFRAME/
│   │   ├── ATA_25-EQUIPMENT_FURNISHINGS/
│   │   ├── ATA_44-CABIN_SYSTEMS/
│   │   ├── ATA_50-CARGO_AND_ACCESSORY_COMPARTMENTS/
│   │   ├── ATA_51-STANDARD_PRACTICES_GENERAL/
│   │   ├── ATA_52-DOORS/
│   │   ├── ATA_53-FUSELAGE/
│   │   ├── ATA_54-NACELLES_PYLONS/
│   │   ├── ATA_55-STABILIZERS/
│   │   ├── ATA_56-WINDOWS/
│   │   └── ATA_57-WINGS/
│   │
│   ├── M-MECHANICS/
│   │   ├── ATA_27-FLIGHT_CONTROLS/
│   │   ├── ATA_29-HYDRAULIC_POWER/
│   │   └── ATA_32-LANDING_GEAR/
│   │
│   ├── E1-ENVIRONMENT/
│   │   ├── ATA_21-AIR_CONDITIONING_PRESSURIZATION/
│   │   ├── ATA_26-FIRE_PROTECTION/
│   │   ├── ATA_30-ICE_RAIN_PROTECTION/
│   │   ├── ATA_35-OXYGEN/
│   │   ├── ATA_36-PNEUMATIC/
│   │   ├── ATA_37-VACUUM/
│   │   ├── ATA_38-WATER_WASTE/
│   │   └── ATA_47-NITROGEN_GENERATION_SYSTEM/
│   │
│   ├── D-DATA/
│   │   ├── ATA_31-INDICATING_RECORDING/
│   │   └── ATA_45-CENTRAL_MAINTENANCE_SYSTEM_CMS/
│   │
│   ├── I-INFORMATION/
│   │   └── ATA_46-INFORMATION_SYSTEMS/
│   │
│   ├── E2-ENERGY/
│   │   ├── ATA_24-ELECTRICAL_POWER/
│   │   └── ATA_49-AIRBORNE_AUXILIARY_POWER_APU/
│   │
│   ├── E3-ELECTRICS/
│   │   ├── ATA_33-LIGHTS/
│   │   └── ATA_39-ELECTRICAL_ELECTRONIC_PANELS_MULTIPURPOSE_COMPONENTS/
│   │
│   ├── L1-LOGICS/
│   │   └── 00_RESERVED_AS_REQUIRED/
│   │
│   ├── L2-LINKS/
│   │   └── ATA_34-NAVIGATION/
│   │
│   ├── C1-COMMS/
│   │   └── ATA_23-COMMUNICATIONS/
│   │
│   ├── C2-CIRCULAR_CRYOGENIC_CELLS/
│   │   └── ATA_28-FUEL/
│   │
│   ├── I2-INTELLIGENCE/
│   │   ├── ATA_95-AI_ML_MODELS/
│   │   └── ATA_97-SYNTHETIC_DATA_VALIDATION/
│   │
│   ├── A2-AVIONICS/
│   │   ├── ATA_22-AUTO_FLIGHT/
│   │   └── ATA_42-INTEGRATED_MODULAR_AVIONICS/
│   │
│   ├── O-OPERATING_SYSTEMS/
│   │   └── ATA_40-MULTISYSTEM/
│   │
│   └── P-PROPULSION/
│       ├── ATA_60-STANDARD_PRACTICES_PROPELLER_ROTOR/
│       ├── ATA_61-PROPELLERS_PROPULSORS/
│       ├── ATA_71-POWER_PLANT/
│       ├── ATA_72-ENGINE_TURBINE_TURBOPROP_DUCTED_UNDUCTED_FAN/
│       ├── ATA_73-ENGINE_FUEL_AND_CONTROL/
│       ├── ATA_74-IGNITION/
│       ├── ATA_75-AIR/
│       ├── ATA_76-ENGINE_CONTROLS/
│       ├── ATA_77-ENGINE_INDICATING/
│       ├── ATA_78-EXHAUST/
│       ├── ATA_79-OIL/
│       └── ATA_80-STARTING/
│
├── I-INFRASTRUCTURES/                                     # Ground support
│   ├── README.md
│   ├── 00_INDEX.md
│   ├── ATA_03-SUPPORT_INFRA/
│   ├── ATA_08-LEVELING_AND_WEIGHING_INFRA/
│   ├── ATA_10-PARKING_MOORING_STORAGE_RTS_INFRA/
│   ├── ATA_12-SERVICING_INFRA/
│   ├── ATA_85-FUEL_CELL_SYSTEMS_INFRA/
│   └── ATA_IN_H2_GSE_AND_SUPPLY_CHAIN/
│
└── N-NEURAL_NETWORKS/                                     # Governance + AI
    ├── README.md
    ├── 00_INDEX.md
    ├── ATA_96-TRACEABILITY_DPP_LEDGER/
    └── ATA_98-RESERVED_PROGRAM_SLOT/
```

</details>

---

## 5. Governance & Workflows

### 5.1 KNOT Lifecycle

Work in this repository is managed through **KNOTs** (uncertainties) and **KNUs** (artifacts):

| Concept | Definition |
|---------|------------|
| **KNOT** | A *Known uNknOwn Topic* — an identified uncertainty requiring resolution |
| **KNU** | A *Knowledge Unit* — a concrete artifact that addresses a KNOT |

#### KNOT Lifecycle Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           KNOT LIFECYCLE                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. IDENTIFICATION                                                           │
│     ├─ Uncertainty logged in KNOTS.csv                                       │
│     ├─ Residual uncertainty = 100 (maximum)                                  │
│     └─ Status = OPEN                                                         │
│                                                                              │
│  2. PLANNING                                                                 │
│     ├─ Expected KNUs defined in KNU_PLAN.csv                                │
│     ├─ Timeline milestones set in TIMELINE.csv                              │
│     ├─ RACI responsibilities assigned                                        │
│     └─ TT reward pool allocated in TOKENOMICS_TT.yaml                       │
│                                                                              │
│  3. EXECUTION                                                                │
│     ├─ KNU artifacts produced in LC02–LC14 and PUB/CSDB                     │
│     ├─ Effort and impact recorded per KNU                                   │
│     └─ Status = IN_PROGRESS                                                  │
│                                                                              │
│  4. CLOSURE                                                                  │
│     ├─ All KNUs reach COMPLETE or ACCEPTED status                           │
│     ├─ Residual reduced to target (e.g., 100 → ≤10)                         │
│     ├─ All PUB artifacts pass BREX validation                               │
│     ├─ All trace links resolve (no dangling references)                     │
│     ├─ Signoffs captured in evidence pack                                   │
│     ├─ TT rewards distributed: w_i = α·Ê_i + (1-α)·Î_i                      │
│     ├─ Awards logged to AWARDS_TT.csv + finance/ledger.json                 │
│     └─ Status = CLOSED                                                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### KNOTS.csv Schema

| Field | Description |
|-------|-------------|
| `KNOT_ID` | Unique identifier (e.g., `KNOT-ATA28-10-00-001`) |
| `Title` | Short description of the uncertainty |
| `Problem_Statement` | What is unknown and why it matters |
| `Scope` | In-scope / out-of-scope boundaries |
| `Status` | `OPEN` / `IN_PROGRESS` / `BLOCKED` / `CLOSED` |
| `Owner_AoR` | Primary Area of Responsibility |
| `Stakeholders` | Semicolon-separated list of involved AoRs |
| `Residual_Before` | Initial uncertainty level (0–100) |
| `Residual_Target` | Acceptable residual at closure |
| `Dependencies` | Other KNOTs this depends on |
| `Target_Close_Date` | Expected closure date |

#### KNU_PLAN.csv Schema

| Field | Description |
|-------|-------------|
| `KNU_ID` | Unique identifier (e.g., `KNU-ATA28-10-00-REQ-001`) |
| `KNOT_ID` | Parent KNOT being addressed |
| `KNU_Type` | `REQ` / `ICD` / `ANA` / `TEST` / `SAF` / `CM` / `PUB` |
| `Artifact_Class` | `SSOT` or `CSDB` |
| `Expected_Location` | Relative path to target folder |
| `Acceptance_Criteria` | What makes this KNU complete |
| `Verification_Method` | `Review` / `Inspection` / `Test` / `BREX+CI` |
| `Owner_AoR` | Responsible stakeholder |
| `Due_Date` | Target completion date |
| `Status` | `PLANNED` / `IN_PROGRESS` / `COMPLETE` / `ACCEPTED` |
| `Effort_Predicted` | Estimated effort (story points) |

#### Allowed AoR (Area of Responsibility) Values

| AoR Code | Role |
|----------|------|
| `STK_SE` | Systems Engineering |
| `STK_SAF` | Safety |
| `STK_CERT` | Certification |
| `STK_CM` | Configuration Management |
| `STK_OPS` | Operations |
| `STK_TEST` | Test & Verification |
| `STK_PMO` | Program Management |
| `STK_AI` | AI/ML Engineering |
| `STK_CY` | Circularity |
| `STK_MRO` | Maintenance, Repair, Overhaul |
| `STK_DATA` | Data Management |

### 5.2 Contract-Based Transformation

Every KDB → IDB transformation is governed by an explicit contract:

#### Contract Structure (KITDM-CTR-XXX.yaml)

```yaml
contract:
  id: "KITDM-CTR-001"
  name: "KDB to CSDB Transformation"
  version: "1.0.0"
  effective_date: "2026-01-15"

source:
  type: "KDB"
  paths:
    - "KDB/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/"
    - "KDB/SSOT/PLM/LC02_SYSTEM_REQUIREMENTS/"
  required_maturity: "ACCEPTED"

target:
  type: "IDB/PUB/CSDB"
  output_path: "IDB/PUB/AMM/CSDB/DM/"
  format: "S1000D-5.0"

transformation:
  rules:
    - rule_id: "TR-001"
      description: "Requirements to Descriptive DM"
      source_pattern: "LC02/**/REQ-*.md"
      target_template: "templates/dm-description.xml"
      validation: "BREX-001"
  
  exclusions:
    - "DRAFT/**"
    - "**/_archive/**"

validation:
  brex_rules:
    - "BREX/AMPEL-BREX-01.xml"
  schema_version: "S1000D-5.0"
  require_trace_matrix: true

governance:
  approvers:
    - "STK_CM"
    - "STK_SE"
  review_cycle: "30d"
  
audit:
  log_level: "FULL"
  retention: "10y"
  hash_algorithm: "SHA-256"
```

### 5.3 Tokenomics & Incentive Alignment

#### Teknia Token (TT) System

| Aspect | Specification |
|--------|---------------|
| **Token** | TT (1 TT = 360 deg) |
| **Genesis Supply** | 2,000,000,000 TT |
| **Fee Structure** | π-tier: 0.314% / 0.99% / 3.14% |
| **Reward Fee** | 0.5% |
| **Ledger** | `finance/ledger.json` (SHA-256 hash chain) |

#### TOKENOMICS_TT.yaml Schema

```yaml
tokenomics:
  token_symbol: "TT"
  unit: "deg"
  deg_per_tt: 360

knot_reward:
  knot_id: "KNOT-ATA28-10-00-001"
  pool_tt: 100
  pool_deg: 36000

eligibility:
  require_status: ["COMPLETE", "ACCEPTED"]
  require_links_resolved: true
  require_brex_pass_for_pub: true

allocation:
  method: "effort_plus_impact"
  formula: "w_i = α·Ê_i + (1-α)·Î_i; T_i = P_k · w_i"
  params:
    alpha_effort: 0.30
    alpha_impact: 0.70
    lambda_spillover: 0.50
    rounding: "floor_deg"

measurement:
  residual_scale: "0..100"
  required_fields_per_knu:
    - effort_predicted
    - delta_residual_primary
    - delta_residual_adjacent_sum
    - verification_status
    - linked_artifacts

closure_record:
  residual_before: 100
  residual_after: null
  residual_target: 10
```

#### Token Distribution Formula

Rewards are distributed using a weighted combination of **effort** and **impact**:

```
w_i = α · Ê_i + (1 - α) · Î_i
T_i = P_k · w_i
```

Where:

| Symbol | Definition |
|--------|------------|
| `P_k` | Pool amount (TT) for the KNOT |
| `α` | Effort weight (default: 0.30) |
| `Ê_i` | Normalized effort: `E_i / Σ E_i` |
| `Î_i` | Normalized impact: `I_i / Σ I_i` |
| `I_i` | Effective impact: `ΔR_k,i + λ · S_i` |
| `S_i` | Spillover: `Σ(a_k→j · ΔR_j,i)` for adjacent KNOTs |
| `λ` | Spillover multiplier (default: 0.50) |

**This ensures:**

- Contributors who do necessary work are rewarded (effort)
- Contributors who reduce uncertainty most are rewarded more (impact)
- Cross-KNOT contributions are recognized (spillover)

### 5.4 Change Control & Baselines

| Baseline Type | Trigger | Authority | Artifacts |
|---------------|---------|-----------|-----------|
| **Design Baseline** | PDR/CDR gate | STK_SE | LC04 frozen |
| **Safety Baseline** | Safety Review | STK_SAF | LC03 frozen |
| **Certification Baseline** | TC Application | STK_CERT | LC08 frozen |
| **Production Baseline** | FAI Complete | STK_CM | LC09/LC10 frozen |
| **Publication Baseline** | IDB Release | STK_CM | PUB/CSDB tagged |

---

## 6. Standards & Compliance

| Standard | Application |
|----------|-------------|
| **EASA CS-25 / FAA Part 25** | Airworthiness requirements framing |
| **ATA iSpec 2200** | Chapter/section/subject scaffolding |
| **S1000D Issue 5.0** | Technical publications CSDB |
| **DO-178C** | Software considerations in airborne systems |
| **DO-254** | Hardware design assurance |
| **DO-160G** | Environmental qualification |
| **DO-326A / DO-356A** | Airborne security |
| **ARP4754A** | Development of civil aircraft and systems |
| **ARP4761** | Safety assessment process |
| **ISO 15926** | Industrial data standards |
| **ISO 14001** | Environmental management |
| **EU Digital Product Passport** | Circularity requirements |

---

## 7. Getting Started

### 7.1 Prerequisites & Setup

**Requirements:**

- Python 3.9+
- Git 2.30+
- 2GB disk space (full clone)

**Installation:**

```bash
# Clone repository
git clone https://github.com/AmedeoPelliccia/AMPEL360-AIR-T.git
cd AMPEL360-AIR-T

# Install dependencies
pip install -r requirements.txt

# Setup pre-commit hooks
bash .github/hooks/setup-hooks.sh

# Verify installation
python tools/ci/optin_structure_validator.py --check
```

### 7.2 First Contribution Walkthrough

**Step 1: Identify or Create a KNOT**

```bash
# Navigate to target ATA section
cd OPT-IN_FRAMEWORK/T-TECHNOLOGIES_.../C2-CIRCULAR_CRYOGENIC_CELLS/ATA_28-FUEL/

# Check existing KNOTs
cat ATA-28-fuel/28-10-storage/28-10-00-00-general/KDB/GENESIS/KNOTS.csv
```

**Step 2: Plan Your KNU**

Add entry to `KNU_PLAN.csv`:

```csv
KNU_ID,KNOT_ID,KNU_Type,Artifact_Class,Expected_Location,Acceptance_Criteria,Owner_AoR,Due_Date,Status,Effort_Predicted
KNU-ATA28-10-00-REQ-005,KNOT-ATA28-10-00-001,REQ,SSOT,../LC02_SYSTEM_REQUIREMENTS/,Requirement traced + reviewed,STK_SE,2026-02-15,PLANNED,3
```

**Step 3: Create the Artifact**

```bash
# Create requirement document
cd KDB/SSOT/PLM/LC02_SYSTEM_REQUIREMENTS/
touch REQ-ATA28-10-00-005_LH2_Tank_Insulation.md
```

**Step 4: Validate and Submit**

```bash
# Validate structure
python tools/ci/optin_structure_validator.py --check --chapter 28

# Commit with conventional format
git add .
git commit -m "feat(ATA28): Add LH2 tank insulation requirement

- Addresses KNOT-ATA28-10-00-001
- KNU-ATA28-10-00-REQ-005 now IN_PROGRESS
- Effort: 3 points"

# Push and create PR
git push origin feature/ata28-lh2-insulation
```

### 7.3 Role-Based Entry Points

| Role | Start Here | Primary Focus |
|------|------------|---------------|
| **Systems Engineer** | `OPT-IN_FRAMEWORK/README.md` | LC02–LC06 artifacts |
| **Safety Engineer** | `LC03_SAFETY_RELIABILITY/` | Hazard analysis, FMEA |
| **Certification Engineer** | `LC08_FLIGHT_TEST_CERTIFICATION/` | Compliance matrix |
| **Publication Author** | `IDB/PUB/AMM/CSDB/README.md` | S1000D data modules |
| **Configuration Manager** | `CONTRACTS/` | Transformation governance |
| **Program Manager** | `docs/IMPLEMENTATION_SUMMARY.md` | Status dashboards |
| **MRO Engineer** | `IDB/SSOT/SLM/LC13_MRO_SUSTAINMENT/` | Maintenance programs |
| **AI/ML Engineer** | `ATA_95-AI_ML_MODELS/` | Model lifecycle |
| **Tokenomics Analyst** | `KDB/GENESIS/TOKENOMICS_TT.yaml` | Incentive allocation |

### 7.4 Validation & CI Checks

**Local Validation:**

```bash
# Full structure check
python tools/ci/optin_structure_validator.py --check

# Single chapter
python tools/ci/optin_structure_validator.py --check --chapter 28

# BREX validation (requires S1000D tools)
python tools/ci/brex_validator.py --csdb IDB/PUB/AMM/CSDB/

# Trace matrix verification
python tools/ci/trace_checker.py --contracts CONTRACTS/
```

**CI Pipeline (GitHub Actions):**

```yaml
# .github/workflows/validate.yml
name: Validate
on: [push, pull_request]
jobs:
  structure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install -r requirements.txt
      - run: python tools/ci/optin_structure_validator.py --check
      - run: python tools/ci/trace_checker.py --contracts CONTRACTS/
```

---

## 8. CAOS Framework

**CAOS (Continuous Airworthiness for Operational Sustainment)** maintains airworthiness throughout the operational lifecycle:

| Domain | Scope |
|--------|-------|
| **Continued Airworthiness** | AD compliance, SB tracking, modification status |
| **Reliability Programs** | MSG-3, condition monitoring, fleet trends |
| **Operational Feedback** | In-service data, SDR/MOR analysis |
| **Technical Services** | Field support, AOG response, technical bulletins |
| **Configuration Control** | As-maintained vs. as-designed reconciliation |

**Key Documents:**

- [`CAOS/CAOS_INDEX.md`](./CAOS/CAOS_INDEX.md) — Entry point
- [`CAOS/CAOS_ARCHITECTURE.md`](./CAOS/CAOS_ARCHITECTURE.md) — System design
- [`CAOS/CAOS_OPERATIONS_FRAMEWORK.md`](./CAOS/CAOS_OPERATIONS_FRAMEWORK.md) — Operational playbook

**CAOS artifacts reside in:**

- `IDB/SSOT/SLM/LC11_OPERATIONS_CUSTOMIZATION/`
- `IDB/SSOT/SLM/LC12_SUPPORT_SERVICES/`
- `IDB/SSOT/SLM/LC13_MRO_SUSTAINMENT/`

---

## 9. Publishing Model

### 9.1 CSDB (S1000D)

The Common Source Database is the single source for modular publications:

| Component | Purpose | Location |
|-----------|---------|----------|
| **DM** | Atomic content modules | `IDB/PUB/AMM/CSDB/DM/` |
| **PM** | Publication structures | `IDB/PUB/AMM/CSDB/PM/` |
| **DML** | Controlled module lists | `IDB/PUB/AMM/CSDB/DML/` |
| **BREX** | Business rules | `IDB/PUB/AMM/CSDB/BREX/` |
| **ICN** | Graphics (SVG preferred) | `IDB/PUB/AMM/CSDB/ICN/` |
| **APPLICABILITY** | ACT/PCT/CCT filters | `IDB/PUB/AMM/CSDB/APPLICABILITY/` |
| **COMMON** | Reusable primitives | `IDB/PUB/AMM/CSDB/COMMON/` |

**Data Module Types:**

| Info Code | Type | Description |
|-----------|------|-------------|
| `0XX` | Descriptive | System descriptions |
| `1XX` | Operational | Operating procedures |
| `2XX` | Servicing | Servicing tasks |
| `3XX` | Maintenance | Maintenance procedures |
| `4XX` | Fault | Fault isolation |
| `5XX` | Disconnect | Remove/install |
| `6XX` | Repair | Repair procedures |
| `7XX` | Illustrated | Parts data (IPD) |
| `9XX` | Wiring | Wiring data |

### 9.2 IETP Runtime

The Interactive Electronic Technical Publication runtime:

- Consumes PM/DM sets from CSDB
- Applies applicability rules (ACT/PCT/CCT)
- Provides interactive navigation, search, filtering
- Packaged in `IDB/PUB/AMM/IETP/`

```
IETP/
├── config/
│   ├── viewer.json
│   └── applicability.json
├── index/
│   └── search_index.json
├── runtime/
│   └── viewer.js
└── package.json
```

---

## 10. Tooling & Automation

### 10.1 CLI Tools Reference

| Tool | Command | Description |
|------|---------|-------------|
| **Structure Validator** | `python tools/ci/optin_structure_validator.py` | Validates OPT-IN directory structure |
| **BREX Validator** | `python tools/ci/brex_validator.py` | S1000D business rules check |
| **Trace Checker** | `python tools/ci/trace_checker.py` | Contract trace matrix verification |
| **Token CLI** | `python tools/tek_tokens.py` | TT operations (quote, transfer, verify) |
| **KNU Distributor** | `python tools/knu_distribution.py` | KNOT closure TT distribution |

**Examples:**

```bash
# Quote reward distribution
python tools/tek_tokens.py quote --op reward --tt 100

# Execute distribution after KNOT closure
python tools/knu_distribution.py distribute --knot KNOT-ATA28-10-00-001

# Verify ledger integrity
python tools/tek_tokens.py verify

# Generate trace matrix
python tools/ci/trace_checker.py --contracts CONTRACTS/ --output trace_matrix.csv
```

### 10.2 ASIT Pipeline Configuration

ASIT pipelines are defined in `ASIT/pipelines/`:

```yaml
# pipeline-kdb-to-csdb.yaml
pipeline:
  id: "ASIT-PIPE-001"
  name: "KDB to CSDB"
  contract: "KITDM-CTR-001"

stages:
  - name: "extract"
    type: "kdb_reader"
    config:
      paths: "${CONTRACT.source.paths}"
      maturity_filter: "${CONTRACT.source.required_maturity}"

  - name: "transform"
    type: "dm_generator"
    config:
      rules: "${CONTRACT.transformation.rules}"
      templates: "templates/"

  - name: "validate"
    type: "brex_checker"
    config:
      brex_files: "${CONTRACT.validation.brex_rules}"
      schema: "${CONTRACT.validation.schema_version}"

  - name: "load"
    type: "csdb_writer"
    config:
      output_path: "${CONTRACT.target.output_path}"
      generate_dml: true

  - name: "audit"
    type: "trace_logger"
    config:
      log_level: "${CONTRACT.audit.log_level}"
      output: "runs/${RUN_ID}/"

triggers:
  - type: "manual"
  - type: "schedule"
    cron: "0 2 * * *"
  - type: "webhook"
    events: ["kdb_update"]
```

### 10.3 CI/CD Integration

**GitHub Actions Workflow:**

```yaml
# .github/workflows/asit-transform.yml
name: ASIT Transform
on:
  push:
    paths:
      - 'OPT-IN_FRAMEWORK/**/KDB/**'
  workflow_dispatch:

jobs:
  transform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          
      - name: Install dependencies
        run: pip install -r requirements.txt
        
      - name: Validate KDB changes
        run: python tools/ci/optin_structure_validator.py --check
        
      - name: Run ASIT transformation
        run: python tools/asit/runner.py --pipeline pipeline-kdb-to-csdb.yaml
        
      - name: Validate CSDB output
        run: python tools/ci/brex_validator.py --csdb IDB/PUB/AMM/CSDB/
        
      - name: Generate trace matrix
        run: python tools/ci/trace_checker.py --output artifacts/trace_matrix.csv
        
      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: asit-run-${{ github.sha }}
          path: artifacts/
```

---

## 11. Security & Access Control

### 11.1 Data Classification

| Level | Label | Description | Examples |
|-------|-------|-------------|----------|
| **1** | PUBLIC | Open information | README, general descriptions |
| **2** | INTERNAL | Program-internal | Design rationale, trade studies |
| **3** | CONFIDENTIAL | Business-sensitive | Cost data, supplier info |
| **4** | RESTRICTED | Export-controlled | Performance data, algorithms |
| **5** | SECRET | National security | (Not applicable to this repo) |

**Marking Convention:**

```markdown
<!-- CLASSIFICATION: INTERNAL -->
<!-- EXPORT_CONTROL: NONE -->
```

### 11.2 Export Control Considerations

| Jurisdiction | Regulation | Applicability |
|--------------|------------|---------------|
| **EU** | Dual-Use Regulation (EU 2021/821) | Aviation technology |
| **US** | EAR (15 CFR 730-774) | US-origin technology |
| **US** | ITAR (22 CFR 120-130) | Defense articles (if applicable) |
| **Intl** | Wassenaar Arrangement | Aerospace technology |

**Repository Policy:**

- All content in this repository is **synthetic demonstration data**
- No export-controlled technical data is included
- Contributors must not add controlled technical data
- Real program data requires separate controlled repository

### 11.3 Role-Based Access Model

| Role | KDB/GENESIS | KDB/SSOT | CONTRACTS | IDB/SSOT | IDB/PUB |
|------|-------------|----------|-----------|----------|---------|
| **Viewer** | Read | Read | Read | Read | Read |
| **Contributor** | Read | Read/Write | Read | Read | Read |
| **Author** | Read | Read/Write | Read | Read/Write | Read/Write |
| **Approver** | Read | Read/Approve | Read/Approve | Read/Approve | Read/Approve |
| **Admin** | Full | Full | Full | Full | Full |

**Access is controlled by:**

- GitHub repository permissions
- Branch protection rules
- CODEOWNERS file
- CI/CD approval gates

---

## 12. Key Documentation

| Document | Description | Location |
|----------|-------------|----------|
| **Ontology & Knowledge Model** | Foundational methodology | [`docs/ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md`](./docs/ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md) |
| **OPT-IN Framework Standard** | Complete framework specification | [`docs/OPT-IN_FRAMEWORK_STANDARD.md`](./docs/OPT-IN_FRAMEWORK_STANDARD.md) |
| **Documentation Standard** | Formatting and structure guidelines | [`docs/AMPEL360_DOCUMENTATION_STANDARD.md`](./docs/AMPEL360_DOCUMENTATION_STANDARD.md) |
| **AI→ASI Transition Proposal** | AI governance roadmap | [`docs/AI-ASI-TP.md`](./docs/AI-ASI-TP.md) |
| **Digital Twin Control Loop** | Digital twin architecture | [`docs/DIGITAL_TWIN_CONTROL_LOOP.md`](./docs/DIGITAL_TWIN_CONTROL_LOOP.md) |
| **CAOS Index** | Airworthiness framework entry | [`CAOS/CAOS_INDEX.md`](./CAOS/CAOS_INDEX.md) |
| **CAOS Architecture** | CAOS system design | [`CAOS/CAOS_ARCHITECTURE.md`](./CAOS/CAOS_ARCHITECTURE.md) |
| **CAOS Operations** | Operational playbook | [`CAOS/CAOS_OPERATIONS_FRAMEWORK.md`](./CAOS/CAOS_OPERATIONS_FRAMEWORK.md) |

---

## 13. Contributing

### Contribution Workflow

1. **Fork** the repository
2. **Setup hooks**: `bash .github/hooks/setup-hooks.sh`
3. **Create branch**: `git checkout -b feature/ata-XX-description`
4. **Follow** the canonical ATA pattern (KDB/CONTRACTS/ASIT/IDB)
5. **Validate**: `python tools/ci/optin_structure_validator.py --check`
6. **Commit** with conventional format
7. **Submit** pull request

### Commit Message Convention

```
<type>(<scope>): <subject>

<body>

<footer>
```

| Type | Description |
|------|-------------|
| `feat` | New feature or artifact |
| `fix` | Bug fix or correction |
| `docs` | Documentation only |
| `refactor` | Restructuring without functional change |
| `test` | Test addition or modification |
| `ci` | CI/CD changes |
| `chore` | Maintenance tasks |

**Example:**

```
feat(ATA28): Add LH2 tank thermal analysis

- Addresses KNOT-ATA28-10-00-003
- KNU-ATA28-10-00-ANA-001 complete
- Includes CFD results and validation data

Closes #142
```

### Contribution Rules

| Rule | Guidance |
|------|----------|
| **Narrative docs** | Use Markdown (`.md`) — not `.pdf`, `.docx` |
| **Matrices/logs** | Use CSV (`.csv`) — not `.xlsx` |
| **Graphics** | Prefer SVG for illustrations (ICN) |
| **S1000D content** | Keep XML/BREX compliant under `IDB/PUB/**/CSDB/**` |
| **References** | Ensure DM ↔ ICN ↔ PM ↔ DML ↔ APPLICABILITY resolve |
| **Safety-critical** | Include DO-178C compliance tags where applicable |
| **KNOT/KNU** | Define uncertainties in GENESIS before producing artifacts |
| **Tokenomics** | Declare reward pools in `TOKENOMICS_TT.yaml` per KNOT |
| **Classification** | Mark all files with appropriate data classification |
| **No real data** | This repository is for synthetic demonstration only |

---

## 14. Glossary

| Acronym | Full Term | Definition |
|---------|-----------|------------|
| **ACT** | Applicability Cross-reference Table | S1000D product configuration mapping |
| **AoR** | Area of Responsibility | Accountable stakeholder domain |
| **ASIT** | Aircraft Standard Information Transponder | Agent executing KDB→IDB transformation contracts |
| **ATA** | Air Transport Association | Industry standard for aircraft system numbering |
| **BREX** | Business Rules Exchange | S1000D validation ruleset |
| **BWB** | Blended Wing Body | Aircraft configuration with integrated wing-fuselage |
| **CAE** | Computer-Aided Engineering | Analysis and simulation tools |
| **CAM** | Computer-Aided Manufacturing | Production and tooling systems |
| **CAOS** | Continuous Airworthiness for Operational Sustainment | In-service airworthiness framework |
| **CCT** | Condition Cross-reference Table | S1000D condition-based filtering |
| **CSDB** | Common Source Database | S1000D repository of modular content |
| **DM** | Data Module | Atomic S1000D content unit |
| **DML** | Data Module List | Controlled list of DMs with status |
| **DMU** | Digital Mock-Up | 3D product definition |
| **DPP** | Digital Product Passport | EU lifecycle traceability record |
| **FMEA** | Failure Mode and Effects Analysis | Safety analysis method |
| **GENESIS** | — | Pre-SSOT layer for uncertainty discovery |
| **GSE** | Ground Support Equipment | Airport/maintenance tooling |
| **ICN** | Information Control Number | S1000D graphic identifier |
| **IDB** | Information Data Base | Derived information views |
| **IETP** | Interactive Electronic Technical Publication | Runtime delivery system |
| **KDB** | Knowledge Data Base | Authoritative engineering knowledge |
| **KI-DM** | Knowledge and Information Data Model | Governance architecture |
| **KITDM** | Knowledge and Information Technical Data Management | Implementation framework |
| **KNU** | Knowledge Unit | Concrete artifact addressing a KNOT |
| **KNOT** | Knowledge Node (Ontology Trading) | Registered uncertainty requiring resolution |
| **LC** | Lifecycle Phase | One of 14 managed phases (LC01–LC14) |
| **LH2** | Liquid Hydrogen | Cryogenic fuel |
| **MRO** | Maintenance, Repair, Overhaul | In-service support activities |
| **O-KNOT** | Origin KNOT | Fundamental/origin uncertainty |
| **OPT-IN** | Organizations-Programs-Technologies-Infrastructures-Neural | Five-axis framework |
| **PCT** | Product Cross-reference Table | S1000D variant mapping |
| **PEM** | Proton Exchange Membrane | Fuel cell type |
| **PLM** | Product Lifecycle Management | Design-through-production scope |
| **PM** | Publication Module | S1000D publication structure |
| **PMU** | Physical Mock-Up | Test and integration articles |
| **RACI** | Responsible-Accountable-Consulted-Informed | Responsibility matrix |
| **S1000D** | International specification for technical publications | XML-based modular documentation |
| **SLM** | Service Lifecycle Management | Operations-through-retirement scope |
| **SSOT** | Single Source of Truth | Authoritative record system |
| **TT** | Teknia Token | Incentive token (1 TT = 360°) |
| **V&V** | Verification and Validation | Evidence of compliance |
| **Y-KNOT** | Justification KNOT | Decision rationale trees |

---

## 15. Changelog

### [Unreleased]

#### Added
- KI-DM / KITDM / ASIT architecture documentation
- GENESIS layer with O-KNOT, Y-KNOT, KNOT hierarchy
- PLM vs SLM lifecycle domain separation
- Contract-based transformation governance (KITDM-CTR)
- Security and access control documentation
- Comprehensive glossary

#### Changed
- Restructured canonical ATA pattern to KDB/CONTRACTS/ASIT/IDB
- Moved LC11–LC14 to IDB/SSOT/SLM (Service Lifecycle Management)
- Enhanced tokenomics documentation with full formula derivation

### [1.0.0] — 2026-01-11

#### Added
- Initial OPT-IN Framework with 79 ATA chapters
- SSOT/PUB separation model
- KNOT/KNU uncertainty management
- Teknia Token (TT) v3.14 integration
- CAOS framework documentation
- S1000D CSDB structure

---

## 16. License & Acknowledgments

### License

**Creative Commons Zero v1.0 Universal (CC0 1.0)**

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

See [LICENSE](./LICENSE) for full text.

### Acknowledgments

| Contributor | Role |
|-------------|------|
| **Amedeo Pelliccia** | Concept, Direction, Architecture |
| **GitHub Copilot** | AI-assisted documentation generation |
| **Claude (Anthropic)** | Technical writing and framework refinement |

### Disclaimer

All data in this repository is **synthetic**.

No claim is made regarding:
- Technical correctness
- Airworthiness
- Operational applicability

This repository exists solely to demonstrate **governance, traceability, and transformation logic**.

---

<p align="center">
  <strong>AMPEL360 Q100</strong><br/>
  Digital engineering, traceability, and publication-grade CSDB for sustainable aviation
</p>

<p align="center">
  <em>By Amedeo Pelliccia • AI-Assisted Development</em>
</p>

<p align="center">
  <i>Last updated: 2026-01-19</i>
</p>

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

