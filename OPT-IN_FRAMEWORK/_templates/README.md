# ATA Chapter Scaffold Templates

This directory contains reusable templates for creating the canonical **triple knowledge-base spine** for new ATA Chapters in the AMPEL360 Q100 OPT-IN Framework.

## Canonical Structure

Every ATA chapter implements the same three knowledge bases:

| Knowledge Base | Purpose | Primary Artifacts |
|----------------|---------|-------------------|
| **GENESIS/** | KNOT-driven uncertainty + decisions | KNOTs, decision logs, trade studies |
| **SSOT/** | Authoritative engineering truth (LC01-LC14) | KNUs (REQ/ICD/ANA/TST), RTM links |
| **PUBS/** | Publication-grade outputs (CSDB/DMC) | S1000D data modules, IETP packaging |

## Template Structure

```
_templates/
├── README.md                          # This file
├── scaffold_chapter.py                # Scaffolding automation script (v1.1.0)
│
├── GENESIS_TEMPLATE/                  # Uncertainty space templates
│   ├── KNOT/                          # Knowledge node framing
│   ├── O-KNOT/                        # Origin knowledge discovery
│   ├── Y-KNOT/                        # Justification records
│   ├── DECISIONS/                     # Engineering decision records
│   ├── TRADE_STUDIES/                 # Trade study templates
│   └── _registry/                     # KNOT registries
│
├── SSOT_TEMPLATE/                     # Single Source of Truth templates
│   ├── LC01_PROBLEM_STATEMENT/        # Problem definition, TOKENOMICS
│   ├── LC02_SYSTEM_REQUIREMENTS/      # System requirements
│   ├── LC03_DESIGN_MODELS/            # Design models
│   ├── LC04_ANALYSIS_MODELS/          # Analysis models (formerly LC04_DESIGN_DEFINITION)
│   ├── LC05_INTEGRATION_TESTING_V6V/  # Integration testing
│   ├── LC06_QUALITY/                  # Quality assurance
│   ├── LC07_SAFETY_AND_SECURITY/      # Safety & security
│   ├── LC08_CERTIFICATION_FIRST_FLIGHT/ # Certification
│   ├── LC09_GREEN_BASELINES/          # Green baselines
│   ├── LC10_INDUSTRIALIZATION_PRODUCTION/ # Production
│   ├── LC11_OPERATIONS/               # Operations
│   ├── LC12_SUPPORT_SERVICES/         # Support services
│   ├── LC13_MRO_SUSTAINMENT/          # MRO sustainment
│   └── LC14_RETIREMENT_CIRCULARITY/   # Retirement/circularity
│
├── PUBS_TEMPLATE/                     # Publication outputs templates
│   ├── CSDB/                          # S1000D Common Source Database
│   ├── DMC/                           # Data Module Code index
│   └── EXPORTS/                       # Export configurations
│
├── BOOTSTRAP_PACK/                    # Chapter initialization templates
│   ├── README.md.template             # Chapter README
│   └── 00_INDEX.md.template           # Chapter knowledge base index
│
└── PUB_TEMPLATE/                      # (Legacy) AMM/TRN structure
    └── AMM/                           # Retained for compatibility
```

## Usage

### Create a New ATA Chapter

```bash
cd OPT-IN_FRAMEWORK/_templates
python scaffold_chapter.py --chapter XX --title "Chapter Title" --axis AXIS_NAME
```

### Examples

```bash
# Create ATA 85 - Fuel Cell Infrastructure
python scaffold_chapter.py --chapter 85 --title "Fuel Cell Infrastructure" --axis I-INFRASTRUCTURES

# Create ATA 28 (priority chapter with pre-configured settings)
python scaffold_chapter.py --chapter 28

# Dry run to preview structure
python scaffold_chapter.py --chapter 85 --title "Test" --axis T-TECHNOLOGIES --dry-run
```

### What Gets Created

The scaffold script creates:

1. **Complete folder structure** following canonical triple knowledge-base spine
2. **GENESIS layer** with O-KNOT, Y-KNOT, KNOT, DECISIONS, TRADE_STUDIES
3. **SSOT layer** with all LC01-LC14 lifecycle folders
4. **PUBS layer** with CSDB, DMC, EXPORTS
5. **README.md** with chapter overview and quick start
6. **00_INDEX.md** with comprehensive artifact index

### Generated Chapter Structure

```
{CHAPTER}-{SECTION}-general/
├── GENESIS/                          # Uncertainty space
│   ├── KNOT/                         # Knowledge nodes
│   ├── O-KNOT/                       # Origin knowledge discovery
│   ├── Y-KNOT/                       # Justification records
│   ├── DECISIONS/                    # Engineering decisions
│   ├── TRADE_STUDIES/                # Trade study records
│   └── _registry/                    # KNOT registries
│
├── SSOT/                             # Single Source of Truth
│   ├── LC01_PROBLEM_STATEMENT/       # TOKENOMICS, KNOTS.csv, KNU_PLAN.csv
│   ├── LC02_SYSTEM_REQUIREMENTS/
│   ├── LC03_DESIGN_MODELS/
│   ├── LC04_ANALYSIS_MODELS/
│   ├── LC05_INTEGRATION_TESTING_V6V/
│   ├── LC06_QUALITY/
│   ├── LC07_SAFETY_AND_SECURITY/
│   ├── LC08_CERTIFICATION_FIRST_FLIGHT/
│   ├── LC09_GREEN_BASELINES/
│   ├── LC10_INDUSTRIALIZATION_PRODUCTION/
│   ├── LC11_OPERATIONS/
│   ├── LC12_SUPPORT_SERVICES/
│   ├── LC13_MRO_SUSTAINMENT/
│   └── LC14_RETIREMENT_CIRCULARITY/
│
├── PUBS/                             # Publications
│   ├── CSDB/                         # S1000D configuration
│   ├── DMC/                          # Data module index
│   └── EXPORTS/                      # Export configuration
│
├── README.md                         # Chapter overview
└── 00_INDEX.md                       # Knowledge base index
```

## After Scaffolding

1. **Review GENESIS layer**
   - Update `GENESIS/O-KNOT/*/discovery.yaml` with chapter-specific knowledge gaps
   - Document decisions in `GENESIS/DECISIONS/`
   - Complete trade studies in `GENESIS/TRADE_STUDIES/`

2. **Configure SSOT baseline**
   - Adjust `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS.yaml` based on complexity
   - Populate `KNU_PLAN.csv` with planned artifacts
   - Track unknowns in `TBD_REGISTER.csv`

3. **Set up publications**
   - Review `PUBS/CSDB/csdb_config.yaml`
   - Configure export formats in `PUBS/EXPORTS/export_config.yaml`

## Priority Chapters

The following chapters have pre-configured settings in the scaffold script:

| Chapter | Title | Axis | Token Budget |
|---------|-------|------|--------------|
| 28 | Fuel | T-TECHNOLOGIES | 500 TT |
| 71 | Power Plant | T-TECHNOLOGIES | 450 TT |
| 95 | AI/ML | T-TECHNOLOGIES | 600 TT |
| 96 | DPP/Traceability | N-NEURAL_NETWORKS | 400 TT |

## See Also

- [ATA Chapter Onboarding Guide](../../docs/ATA_CHAPTER_ONBOARDING.md)
- [ATA Chapter Scaling Framework](../../docs/ATA_CHAPTER_SCALING_FRAMEWORK.md)
- [CSDB Compliance Validation](../../docs/CSDB_COMPLIANCE_VALIDATION.md)
