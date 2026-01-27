# ATA 95-00 — AI/ML

**ATA Address:** ATA-95-00-00-00  
**Chapter:** ATA 95 — AI/ML  
**Axis:** [T-TECHNOLOGIES](../../)  
**Status:** INITIALIZED  
**Created:** 2026-01-27

---

## Overview

This chapter implements the canonical **triple knowledge-base spine** for ATA 95 (AI/ML) following the OPT-IN Framework:

| Knowledge Base | Purpose | Primary Artifacts |
|----------------|---------|-------------------|
| **GENESIS/** | KNOT-driven uncertainty + decisions | KNOTs, decision logs, trade studies |
| **SSOT/** | Authoritative engineering truth | KNUs (REQ/ICD/ANA/TST), RTM links |
| **PUBS/** | Publication-grade outputs | S1000D DMs, DMC structures, IETP |

---

## Directory Structure

```
95-00-general/
├── GENESIS/                          # Uncertainty space
│   ├── KNOT/                         # Knowledge nodes
│   │   └── KNOT-95-00-001/
│   ├── O-KNOT/                       # Origin knowledge discovery
│   │   └── O-KNOT-95-00-001/
│   ├── Y-KNOT/                       # Justification records
│   │   └── Y-KNOT-95-00-001-001/
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
    ├── DMC/                          # Data Module Codes index
    └── EXPORTS/                      # Export configurations
```

---

## Quick Start

### 1. Review Uncertainty Space (GENESIS)

Start by understanding and documenting the knowledge gaps:

1. **O-KNOT Discovery**: Review `GENESIS/O-KNOT/O-KNOT-95-00-001/discovery.yaml`
2. **Y-KNOT Justification**: Document decisions in `GENESIS/Y-KNOT/`
3. **KNOT Framing**: Define scope in `GENESIS/KNOT/KNOT-95-00-001/framing.yaml`

### 2. Configure SSOT Baseline

Set up the authoritative engineering data:

1. **TOKENOMICS**: Configure `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS.yaml`
2. **KNU Plan**: Define artifacts in `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv`
3. **TBD Register**: Track unknowns in `SSOT/LC01_PROBLEM_STATEMENT/TBD_REGISTER.csv`

### 3. Set Up Publications

Configure S1000D publication pipeline:

1. **CSDB Config**: Review `PUBS/CSDB/csdb_config.yaml`
2. **DMC Index**: Manage data modules in `PUBS/DMC/dmc_index.yaml`
3. **Export Config**: Configure outputs in `PUBS/EXPORTS/export_config.yaml`

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
| DMC Index | `PUBS/DMC/dmc_index.yaml` | Data module registry |
| Export Config | `PUBS/EXPORTS/export_config.yaml` | Publication export |

---

## Traceability

### Upstream Dependencies

- KNOT-00-00-001: Program terminology standardization
- KNOT-00-00-002: Document architecture conventions

### Downstream Impact

- All dependent chapters and systems
- LC02 system requirements definition

---

## Stakeholders

| Role | ID | Responsibility |
|------|-----|----------------|
| Owner | STK_SE | Chapter ownership |
| Certification | STK_CERT | Regulatory compliance |
| Configuration | STK_CM | Configuration management |
| Publications | STK_PUB | S1000D outputs |

---

## Validation Checklist

- [ ] GENESIS layer populated with initial uncertainties
- [ ] SSOT/LC01 TOKENOMICS configured
- [ ] KNU_PLAN.csv populated with planned artifacts
- [ ] TBD_REGISTER.csv initialized
- [ ] PUBS CSDB configuration reviewed
- [ ] BREX validation passing
- [ ] Traceability established

---

## References

- [OPT-IN Framework Overview](../../../../README.md)
- [ATA Chapter Onboarding Guide](../../../../docs/ATA_CHAPTER_ONBOARDING.md)
- [ATA Chapter Scaling Framework](../../../../docs/ATA_CHAPTER_SCALING_FRAMEWORK.md)
- [CSDB Compliance Validation](../../../../docs/CSDB_COMPLIANCE_VALIDATION.md)

---

## Change History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 0.1.0 | scaffold_chapter.py | Initial scaffold |

---

*This README is auto-generated by scaffold_chapter.py. Customize as needed for chapter-specific requirements.*
