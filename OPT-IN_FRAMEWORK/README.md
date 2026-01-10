# OPT-IN Framework

**5-Axis Topology for AMPEL360 Q100 Aircraft Documentation**

## Overview

The OPT-IN Framework organizes all 79 ATA chapters across five axes, providing a comprehensive structure for aircraft engineering documentation, publications, and lifecycle management.

```
OPT-IN_FRAMEWORK/
├── O-ORGANIZATIONS/          ✓ ATA 00–05 (governance / limits / checks)
├── P-PROGRAMS/               □ ATA 06–12 (geometry/handling/servicing)
├── T-TECHNOLOGIES/           □ ATA 20–80 (on-board systems)
├── I-INFRASTRUCTURES/        □ Ground support / H₂ logistics / facilities
└── N-NEURAL_NETWORKS/        □ AI/ML, DPP, traceability (ATA 95–98)
```

✓ = Implemented | □ = Planned

## Current Implementation Status

### Phase 1: O-ORGANIZATIONS (Complete)

The **O-ORGANIZATIONS** axis has been implemented with full SSOT + PUB structure:

- ✅ **ATA 00**: General information and overview
- ✅ **ATA 01**: Maintenance policy and procedures
- ✅ **ATA 02**: Operations organization
- ✅ **ATA 03**: Support information
- ✅ **ATA 04**: Airworthiness limitations
- ✅ **ATA 05**: Time limits and maintenance checks

Each ATA chapter includes:
- Complete SSOT structure (LC01–LC14 lifecycle folders)
- PUB deliverables structure (CSDB, EXPORT, IETP)
- Comprehensive README documentation

### Next Phases

Implementation will continue "by grade" as indicated in the requirements:

1. **P-PROGRAMS** (ATA 06-12): Geometry, handling, servicing procedures
2. **T-TECHNOLOGIES** (ATA 20-80): Aircraft systems and subsystems
3. **I-INFRASTRUCTURES**: Ground support equipment and facilities
4. **N-NEURAL_NETWORKS** (ATA 95-98): AI/ML models, DPP, traceability

## Architecture Principles

### SSOT + PUB Pattern

Every sub-subject in the OPT-IN Framework follows the canonical pattern:

```
<sub-subject>/
├── SSOT/                    # Single Source of Truth
│   ├── LC01_PROBLEM_STATEMENT/
│   ├── LC02_SYSTEM_REQUIREMENTS/
│   ├── LC03_SAFETY_RELIABILITY/
│   ├── LC04_DESIGN_DEFINITION/
│   ├── LC05_ANALYSIS_MODELS/
│   ├── LC06_VERIFICATION/
│   ├── LC07_VALIDATION/
│   ├── LC08_CONFIGURATION/
│   ├── LC09_PRODUCTION/
│   ├── LC10_OPERATIONS/
│   ├── LC11_MAINTENANCE/
│   ├── LC12_CUSTOMER_CARE/
│   ├── LC13_TRAINING/
│   └── LC14_RETIREMENT_CIRCULARITY/
│
└── PUB/                     # Publications
    └── <SUB_ID>/            # AMM / IPC / WDM / TSM / etc.
        ├── CSDB/            # S1000D Common Source Database
        │   ├── DM/          # Data Modules
        │   ├── PM/          # Publication Modules
        │   ├── DML/         # Data Module Lists
        │   ├── BREX/        # Business Rules Exchange
        │   ├── ICN/         # Illustrations (SVG preferred)
        │   ├── COMMON/      # Reusable content primitives
        │   └── APPLICABILITY/  # ACT/PCT/CCT filtering
        ├── EXPORT/          # Rendered outputs (PDF/HTML)
        └── IETP/            # Interactive Electronic Tech Pubs
            ├── RUNTIME/     # Viewer application
            ├── PKG/         # Package manifests
            └── DEPLOY/      # Deployment artifacts
```

### Lifecycle Phases (LC01–LC14)

| Phase | Description |
|-------|-------------|
| **LC01** | Problem Statement - Requirements definition and scope |
| **LC02** | System Requirements - Detailed requirements and traceability |
| **LC03** | Safety & Reliability - Safety analysis, FMEA, hazard logs |
| **LC04** | Design Definition - Design specs, ICDs, architecture |
| **LC05** | Analysis & Models - FEA, CFD, thermal, performance models |
| **LC06** | Verification - Test procedures, evidence, compliance |
| **LC07** | Validation - Integration and validation artifacts |
| **LC08** | Configuration - Baselines, effectivity, change control |
| **LC09** | Production - Manufacturing specs and tooling |
| **LC10** | Operations - Operational documentation sources |
| **LC11** | Maintenance - Maintenance program sources |
| **LC12** | Customer Care - Customer support and technical services |
| **LC13** | Training - Training content and materials |
| **LC14** | Retirement & Circularity - End-of-life, recycling, DPP |

## Standards Compliance

| Standard | Application |
|----------|-------------|
| **ATA iSpec 2200** | Chapter/section/subject scaffolding |
| **S1000D** | Technical publications CSDB structure |
| **EASA CS-25 / FAA Part 25** | Airworthiness requirements |
| **MSG-3** | Maintenance program development |
| **ISO 15926** | Industrial data standards |

## Navigation

- [O-ORGANIZATIONS](./O-ORGANIZATIONS/README.md) - Governance and organizational documentation
- [Main Project README](../README.md) - Project overview and getting started

## Contributing

When adding content to the OPT-IN Framework:

1. Follow the SSOT + PUB pattern consistently
2. Place engineering artifacts in appropriate LC folders
3. Use S1000D-compliant structure for publications
4. Maintain traceability between SSOT and PUB
5. Update relevant README files with new content

## Validation

Manual validation can be performed using standard tools:

```bash
# Verify directory structure
tree OPT-IN_FRAMEWORK -L 4

# Count directories and files
find OPT-IN_FRAMEWORK -type d | wc -l
find OPT-IN_FRAMEWORK -name "README.md" | wc -l

# Verify SSOT structure for a specific chapter
ls OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/SSOT/

# Verify PUB/CSDB structure
ls OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/PUB/AMM/CSDB/
```

> **Note**: Automated validation tools may be added in future releases.

---

**AMPEL360 Q100** - Digital engineering baseline for sustainable aviation

*Last Updated: 2026-01-10*
