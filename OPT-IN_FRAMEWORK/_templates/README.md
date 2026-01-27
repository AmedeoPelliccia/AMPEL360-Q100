# ATA Chapter Scaffold Templates

This directory contains reusable templates for creating the canonical **triple knowledge-base spine** for new ATA Chapters in the AMPEL360 Q100 OPT-IN Framework.

## Canonical Structure

Every ATA chapter implements the same three knowledge bases:

| Knowledge Base | Purpose | Primary Artifacts |
|----------------|---------|-------------------|
| **GENESIS/** | KNOT-driven uncertainty + decisions | KNOTs, decision logs, trade studies |
| **SSOT/** | Authoritative engineering truth (LC01-LC14) | KNUs (REQ/ICD/ANA/TST), RTM links |
| **PUBS/** | Publication-grade outputs with runtime IETP delivery | CSDB, IETP_RUNTIME, ASIT, EXPORTS |

## Template Structure

```
_templates/
├── README.md                          # This file
├── scaffold_chapter.py                # Scaffolding automation script (v1.2.0)
│
├── ATA_XX_TEMPLATE/                   # 🆕 Complete reference template
│   └── ATA_XX-CHAPTER_TITLE/          # Fully populated example structure
│       └── ATA-XX-chapter-title/      # with all GENESIS, SSOT, PUBS layers
│           └── XX-00-general/         # Ready to copy and customize
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
│   ├── LC04_ANALYSIS_MODELS/          # Analysis models
│   ├── LC05_TESTING/                  # Testing
│   ├── LC06_QUALITY/                  # Quality assurance
│   ├── LC07_SAFETY_AND_SECURITY/      # Safety & security
│   ├── LC08_CERTIFICATION_FIRST_FLIGHT/ # Certification
│   ├── LC09_GREEN_BASELINES/          # Green baselines
│   ├── LC10_INDUSTRIALIZATION_PRODUCTION/ # Production
│   ├── LC11_SERIES/                   # Series
│   ├── LC12_SUPPORT_SERVICES/         # Support services
│   ├── LC13_MRO_SUSTAINMENT/          # MRO sustainment
│   └── LC14_RETIREMENT_CIRCULARITY/   # Retirement/circularity
│
├── PUBS_TEMPLATE/                     # Publication outputs templates
│   ├── CSDB/                          # S1000D Common Source Database
│   │   ├── DM/                        # Data Modules
│   │   ├── DMC/                       # Data Module Codes
│   │   ├── ICN/                       # Illustrations
│   │   ├── PM/                        # Publication Modules
│   │   ├── COMREF/                    # Common References
│   │   └── BREX/                      # Business Rules
│   │
│   ├── IETP_RUNTIME/                  # Runtime delivery layer
│   │   ├── ASIT/                      # App-Builder + Orchestration + UI Intelligence
│   │   │   ├── APP_BUILDER/
│   │   │   ├── ORCHESTRATION/
│   │   │   ├── UI_CONFIG/
│   │   │   ├── USER_MODELS/
│   │   │   ├── CONTENT_ROUTING/
│   │   │   ├── POLICY_GATES/
│   │   │   ├── TELEMETRY/
│   │   │   └── CONNECTORS/
│   │   │
│   │   ├── MODULES/                   # Publication Modules (runtime)
│   │   │   ├── PM_CORE/
│   │   │   ├── PM_MAINTENANCE/
│   │   │   ├── PM_OPERATIONAL/
│   │   │   ├── PM_TRAINING/
│   │   │   └── PM_CUSTOM/
│   │   │
│   │   ├── PACKAGES/                  # Deployable Packages
│   │   │   ├── PKG_BASELINE/
│   │   │   ├── PKG_OPERATOR/
│   │   │   ├── PKG_MRO/
│   │   │   ├── PKG_LINE_MAINT/
│   │   │   ├── PKG_HEAVY_MAINT/
│   │   │   └── PKG_REGULATORY/
│   │   │
│   │   ├── RUNTIME_SCHEMA/
│   │   ├── DELIVERY/
│   │   ├── BUILDS/
│   │   └── QA/
│   │
│   └── EXPORTS/                       # Export configurations
│       ├── PDF/
│       ├── HTML/
│       ├── IETP/
│       └── DATA_DROPS/
│
├── BOOTSTRAP_PACK/                    # Chapter initialization templates
│   ├── README.md.template             # Chapter README
│   └── 00_INDEX.md.template           # Chapter knowledge base index
│
└── PUB_TEMPLATE/                      # (Legacy) AMM/TRN structure
    └── AMM/                           # Retained for compatibility
```

## ATA_XX_TEMPLATE - Complete Reference Template

**New in this release:** The `ATA_XX_TEMPLATE/` directory provides a **fully populated reference template** showing a complete ATA chapter structure with all files and configurations.

### What It Includes

- **Complete directory structure** for GENESIS, SSOT, and PUBS layers
- **Sample GENESIS files**: O-KNOT discovery, Y-KNOT justification, KNOT framing
- **Sample SSOT files**: TOKENOMICS, KNU_PLAN, KNOTS registry, TBD_REGISTER
- **Sample PUBS files**: CSDB config, DMC index, ASIT config, package manifest, export config
- **Documentation**: README and 00_INDEX with complete examples
- **Consistent placeholders**: All using "XX" for easy find-and-replace

### How to Use

**Option 1: Manual copy and customize**
```bash
cp -r ATA_XX_TEMPLATE/ATA_XX-CHAPTER_TITLE ../[AXIS]/ATA_[NUM]-[TITLE]/
# Then find-replace XX → your chapter number
```

**Option 2: Use scaffold_chapter.py (recommended)**
```bash
python scaffold_chapter.py --chapter 28 --title "Fuel" --axis T-TECHNOLOGIES
# Automatically substitutes all placeholders
```

See [ATA_XX_TEMPLATE/README.md](ATA_XX_TEMPLATE/README.md) for detailed usage instructions.

## PUBS Layer Evolution

The PUBS layer has evolved from static CSDB outputs to **runtime-ready IETP delivery**:

- **CSDB** remains the S1000D authoritative publication content (canonical source)
- **IETP_RUNTIME** provides packaging + orchestration + delivery capabilities
- **ASIT** (Aircraft Standard Information Transponder) acts as the app-builder + meta-intelligence layer

### ASIT Capabilities

ASIT transforms static publications into adaptive, user-configured IETP experiences:

| Component | Purpose |
|-----------|---------|
| APP_BUILDER | Generates IETP apps from package definitions |
| ORCHESTRATION | Content assembly logic (modules, roles, aircraft config) |
| UI_CONFIG | Role-based UI, layout, widgets, themes |
| USER_MODELS | Operator/MRO/engineer personas and privileges |
| CONTENT_ROUTING | Configuration-based content delivery |
| POLICY_GATES | Safety/regulatory gates for content access |
| TELEMETRY | Usage analytics and navigation patterns |
| CONNECTORS | Links to SSOT trace data, parts catalogs, maintenance records |

### Deployable Packages

Each package (`PKG_*`) contains a standardized build recipe:

```
PKG_BASELINE/
├── package.manifest.yaml    # Package metadata and dependencies
├── content.selection.yaml   # Content set selection rules
├── ui.profile.yaml          # Role-based UI configuration
└── modules.enabled.yaml     # Feature module configuration
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
4. **PUBS layer** with CSDB, IETP_RUNTIME (ASIT, MODULES, PACKAGES), EXPORTS
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
│   ├── LC05_TESTING/
│   ├── LC06_QUALITY/
│   ├── LC07_SAFETY_AND_SECURITY/
│   ├── LC08_CERTIFICATION_FIRST_FLIGHT/
│   ├── LC09_GREEN_BASELINES/
│   ├── LC10_INDUSTRIALIZATION_PRODUCTION/
│   ├── LC11_SERIES/
│   ├── LC12_SUPPORT_SERVICES/
│   ├── LC13_MRO_SUSTAINMENT/
│   └── LC14_RETIREMENT_CIRCULARITY/
│
├── PUBS/                             # Publications
│   ├── CSDB/                         # S1000D authoritative content
│   │   ├── DMC/                      # Data module codes
│   │   ├── DM/                       # Data modules
│   │   ├── ICN/                      # Illustrations
│   │   ├── PM/                       # Publication modules
│   │   ├── COMREF/                   # Common references
│   │   └── BREX/                     # Business rules
│   │
│   ├── IETP_RUNTIME/                 # Runtime delivery layer
│   │   ├── ASIT/                     # App-builder + intelligence
│   │   ├── MODULES/                  # Publication modules (PM_*)
│   │   ├── PACKAGES/                 # Deployable packages (PKG_*)
│   │   ├── RUNTIME_SCHEMA/           # Schema definitions
│   │   ├── DELIVERY/                 # Delivery channels
│   │   ├── BUILDS/                   # Build artifacts
│   │   └── QA/                       # Quality assurance
│   │
│   └── EXPORTS/                      # Export formats
│       ├── PDF/
│       ├── HTML/
│       ├── IETP/
│       └── DATA_DROPS/
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

3. **Set up publications with IETP_RUNTIME**
   - Review `PUBS/CSDB/csdb_config.yaml`
   - Configure packages in `PUBS/IETP_RUNTIME/PACKAGES/PKG_BASELINE/`
   - Set up ASIT orchestration in `PUBS/IETP_RUNTIME/ASIT/`
   - Configure export formats in `PUBS/EXPORTS/`

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
