# ATA XX-00 — Chapter Title

**ATA Address:** ATA-XX-00-00-00  
**Chapter:** ATA XX — Chapter Title  
**Axis:** [AXIS_NAME](../../)  
**Status:** TEMPLATE  
**Created:** YYYY-MM-DD

---

## Overview

This is a **template reference structure** for ATA XX chapters. It implements the canonical **triple knowledge-base spine** following the OPT-IN Framework:

| Knowledge Base | Purpose | Primary Artifacts |
|----------------|---------|-------------------|
| **GENESIS/** | KNOT-driven uncertainty + decisions | KNOTs, decision logs, trade studies |
| **SSOT/** | Authoritative engineering truth | KNUs (REQ/ICD/ANA/TST), RTM links |
| **PUBS/** | Publication-grade outputs | S1000D DMs, IETP_RUNTIME, ASIT, EXPORTS |

> **Note:** Replace "XX" with your actual ATA chapter number (e.g., 28, 71, 95) throughout all files and directory names.

---

## Directory Structure

```
XX-00-general/
├── GENESIS/                          # Uncertainty space
│   ├── KNOT/                         # Knowledge nodes
│   │   └── KNOT-XX-00-001/
│   ├── O-KNOT/                       # Origin knowledge discovery
│   │   └── O-KNOT-XX-00-001/
│   ├── Y-KNOT/                       # Justification records
│   │   └── Y-KNOT-XX-00-001-001/
│   ├── DECISIONS/                    # Engineering decisions
│   ├── TRADE_STUDIES/                # Trade study records
│   └── _registry/                    # KNOT registries
│
├── SSOT/                             # Single Source of Truth
│   ├── LC01_PROBLEM_STATEMENT/       # Problem definition, TOKENOMICS
│   ├── LC02_SYSTEM_REQUIREMENTS/     # System requirements
│   ├── LC03_DESIGN_MODELS/           # Design models
│   ├── LC04_ANALYSIS_MODELS/         # Analysis models
│   ├── LC05_TESTING/                 # Testing
│   ├── LC06_QUALITY/                 # Quality assurance
│   ├── LC07_SAFETY_AND_SECURITY/     # Safety & security
│   ├── LC08_CERTIFICATION_FIRST_FLIGHT/ # Certification
│   ├── LC09_GREEN_BASELINES/         # Green baselines
│   ├── LC10_INDUSTRIALIZATION_PRODUCTION/ # Production
│   ├── LC11_SERIES/                  # Series
│   ├── LC12_SUPPORT_SERVICES/        # Support services
│   ├── LC13_MRO_SUSTAINMENT/         # MRO sustainment
│   └── LC14_RETIREMENT_CIRCULARITY/  # Retirement/circularity
│
└── PUBS/                             # Publications
    ├── CSDB/                         # S1000D Common Source Database
    │   ├── DMC/                      # Data Module Codes index
    │   ├── DM/                       # Data Modules
    │   ├── ICN/                      # Illustrations
    │   ├── PM/                       # Publication Modules
    │   ├── COMREF/                   # Common References
    │   └── BREX/                     # Business Rules
    │
    ├── IETP_RUNTIME/                 # Runtime delivery layer
    │   ├── ASIT/                     # App-builder + intelligence
    │   │   ├── APP_BUILDER/
    │   │   ├── ORCHESTRATION/
    │   │   ├── UI_CONFIG/
    │   │   ├── USER_MODELS/
    │   │   ├── CONTENT_ROUTING/
    │   │   ├── POLICY_GATES/
    │   │   ├── TELEMETRY/
    │   │   └── CONNECTORS/
    │   ├── MODULES/                  # Publication modules (PM_*)
    │   │   ├── PM_CORE/
    │   │   ├── PM_MAINTENANCE/
    │   │   ├── PM_OPERATIONAL/
    │   │   ├── PM_TRAINING/
    │   │   └── PM_CUSTOM/
    │   ├── PACKAGES/                 # Deployable packages (PKG_*)
    │   │   ├── PKG_BASELINE/
    │   │   ├── PKG_OPERATOR/
    │   │   ├── PKG_MRO/
    │   │   ├── PKG_LINE_MAINT/
    │   │   ├── PKG_HEAVY_MAINT/
    │   │   └── PKG_REGULATORY/
    │   ├── RUNTIME_SCHEMA/           # Schema definitions
    │   ├── DELIVERY/                 # Delivery channels
    │   ├── BUILDS/                   # Build artifacts
    │   └── QA/                       # Quality assurance
    │
    └── EXPORTS/                      # Export formats
        ├── PDF/
        ├── HTML/
        ├── IETP/
        └── DATA_DROPS/
```

---

## Quick Start

### 1. Review Uncertainty Space (GENESIS)

Start by understanding and documenting the knowledge gaps:

1. **O-KNOT Discovery**: Review `GENESIS/O-KNOT/O-KNOT-XX-00-001/discovery.yaml`
2. **Y-KNOT Justification**: Document decisions in `GENESIS/Y-KNOT/`
3. **KNOT Framing**: Define scope in `GENESIS/KNOT/KNOT-XX-00-001/framing.yaml`

### 2. Configure SSOT Baseline

Set up the authoritative engineering data:

1. **TOKENOMICS**: Configure `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS.yaml`
2. **KNU Plan**: Define artifacts in `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv`
3. **KNOTS Registry**: Track KNOT status in `SSOT/LC01_PROBLEM_STATEMENT/KNOTS.csv`
4. **TBD Register**: Track unknowns in `SSOT/LC01_PROBLEM_STATEMENT/TBD_REGISTER.csv`

### 3. Set Up Publications

Configure S1000D publication pipeline with IETP runtime:

1. **CSDB Config**: Review `PUBS/CSDB/csdb_config.yaml`
2. **DMC Index**: Manage data modules in `PUBS/CSDB/DMC/dmc_index.yaml`
3. **ASIT Config**: Configure app builder in `PUBS/IETP_RUNTIME/ASIT/`
4. **Packages**: Set up deployable packages in `PUBS/IETP_RUNTIME/PACKAGES/`
5. **Export Config**: Configure outputs in `PUBS/EXPORTS/export_config.yaml`

---

## Key Artifacts

### GENESIS Layer

| Artifact | Location | Purpose |
|----------|----------|---------|
| O-KNOT Discovery | `GENESIS/O-KNOT/*/discovery.yaml` | Problem awareness |
| Y-KNOT Justification | `GENESIS/Y-KNOT/*/justification.yaml` | Decision rationale |
| KNOT Framing | `GENESIS/KNOT/*/framing.yaml` | Scope and planning |
| Decision Records | `GENESIS/DECISIONS/` | Engineering decisions |
| Trade Studies | `GENESIS/TRADE_STUDIES/` | Alternative analysis |
| Registries | `GENESIS/_registry/` | KNOT tracking |

### SSOT Layer

| Artifact | Location | Purpose |
|----------|----------|---------|
| TOKENOMICS | `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS.yaml` | Token allocation |
| KNOTS Registry | `SSOT/LC01_PROBLEM_STATEMENT/KNOTS.csv` | KNOT tracking |
| KNU Plan | `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv` | Artifact planning |
| TBD Register | `SSOT/LC01_PROBLEM_STATEMENT/TBD_REGISTER.csv` | Uncertainty tracking |

### PUBS Layer

| Artifact | Location | Purpose |
|----------|----------|---------|
| CSDB Config | `PUBS/CSDB/csdb_config.yaml` | S1000D configuration |
| DMC Index | `PUBS/CSDB/DMC/dmc_index.yaml` | Data module registry |
| ASIT Config | `PUBS/IETP_RUNTIME/ASIT/asit_config.yaml` | App builder configuration |
| Package Manifest | `PUBS/IETP_RUNTIME/PACKAGES/PKG_BASELINE/package.manifest.yaml` | Package definition |
| Export Config | `PUBS/EXPORTS/export_config.yaml` | Publication export |

---

## Traceability

### Upstream Dependencies

- KNOT-00-00-001: Program terminology standardization
- ATA-00: General program conventions

### Downstream Impact

- All dependent chapters and systems
- LC02 system requirements definition
- Publication outputs

---

## Stakeholders

| Role | ID | Responsibility |
|------|-----|----------------|
| Owner | STK_XX | Chapter ownership |
| Systems Engineering | STK_SE | Technical content |
| Certification | STK_CERT | Regulatory compliance |
| Configuration | STK_CM | Configuration management |
| Publications | STK_PUB | S1000D outputs |

---

## Validation Checklist

- [ ] GENESIS layer populated with initial uncertainties
- [ ] SSOT/LC01 TOKENOMICS configured
- [ ] KNU_PLAN.csv populated with planned artifacts
- [ ] TBD_REGISTER.csv initialized
- [ ] KNOTS.csv tracking established
- [ ] PUBS CSDB configuration reviewed
- [ ] IETP_RUNTIME/ASIT configured
- [ ] BREX validation passing
- [ ] Traceability established

---

## Using This Template

1. **Copy the structure** to your target axis directory (O/N/T/P/I)
2. **Replace "XX"** with your actual ATA chapter number throughout
3. **Update titles** and descriptions to match your chapter
4. **Populate GENESIS** layer with chapter-specific knowledge gaps
5. **Configure SSOT** baseline with appropriate token allocation
6. **Set up PUBS** with S1000D data modules and IETP configuration

---

## References

- [OPT-IN Framework Overview](../../../../README.md)
- [ATA Chapter Onboarding Guide](../../../../docs/ATA_CHAPTER_ONBOARDING.md)
- [ATA Chapter Scaling Framework](../../../../docs/ATA_CHAPTER_SCALING_FRAMEWORK.md)
- [CSDB Compliance Validation](../../../../docs/CSDB_COMPLIANCE_VALIDATION.md)
- [Template Documentation](../../README.md)

---

## Change History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| YYYY-MM-DD | 0.1.0 | AMPEL360 | Initial template creation |

---

*This is a reference template. Customize all placeholder values (XX, CHAPTER_TITLE, etc.) for your specific chapter.*
