# ATA_XX Template

This is a **complete reference template** for creating new ATA chapters in the AMPEL360 Q100 OPT-IN Framework.

## Purpose

This template provides a fully-populated example structure showing:
- The canonical **triple knowledge-base spine** (GENESIS → SSOT → PUBS)
- Complete directory structure with all required folders
- Sample files demonstrating proper format and content
- Placeholder values using "XX" for the chapter number

## Using This Template

### Method 1: Manual Copy and Customize

1. **Copy the entire structure** to your target axis directory:
   ```bash
   cp -r ATA_XX_TEMPLATE/ATA_XX-CHAPTER_TITLE ../[AXIS_NAME]/ATA_[NUMBER]-[TITLE]/
   ```

2. **Replace placeholders** throughout:
   - `XX` → Your ATA chapter number (e.g., `28`, `71`, `95`)
   - `CHAPTER_TITLE` → Your chapter title (e.g., `FUEL`, `POWER_PLANT`)
   - `Chapter Title` → Your chapter title in title case (e.g., `Fuel`, `Power Plant`)
   - `AXIS_NAME` → Your axis (e.g., `T-TECHNOLOGIES`, `I-INFRASTRUCTURES`)
   - `YYYY-MM-DD` → Actual dates
   - `STK_XX` → Appropriate stakeholder ID

3. **Update content** in all files to reflect your specific chapter requirements

### Method 2: Use the Scaffold Script (Recommended)

The `scaffold_chapter.py` script automates template instantiation:

```bash
cd OPT-IN_FRAMEWORK/_templates
python scaffold_chapter.py --chapter 28 --title "Fuel" --axis T-TECHNOLOGIES
```

The script will:
- Create the complete directory structure
- Substitute all placeholder values
- Generate chapter-specific configuration
- Create initial KNOT, O-KNOT, and Y-KNOT files
- Set up SSOT baseline files (TOKENOMICS, KNU_PLAN, etc.)
- Configure PUBS layer (CSDB, IETP_RUNTIME, EXPORTS)

## Template Structure

```
ATA_XX_TEMPLATE/
└── ATA_XX-CHAPTER_TITLE/
    └── ATA-XX-chapter-title/
        └── XX-00-general/
            ├── README.md                     # Chapter overview
            ├── 00_INDEX.md                   # Complete artifact index
            │
            ├── GENESIS/                      # Uncertainty space
            │   ├── KNOT/
            │   │   └── KNOT-XX-00-001/
            │   │       └── framing.yaml      # KNOT framing template
            │   ├── O-KNOT/
            │   │   └── O-KNOT-XX-00-001/
            │   │       └── discovery.yaml    # O-KNOT discovery template
            │   ├── Y-KNOT/
            │   │   └── Y-KNOT-XX-00-001-001/
            │   │       └── justification.yaml # Y-KNOT justification template
            │   ├── DECISIONS/
            │   ├── TRADE_STUDIES/
            │   └── _registry/
            │       ├── knot_registry.csv
            │       ├── o-knot_registry.csv
            │       └── y-knot_registry.csv
            │
            ├── SSOT/                         # Single Source of Truth
            │   ├── LC01_PROBLEM_STATEMENT/
            │   │   ├── TOKENOMICS.yaml       # Token allocation
            │   │   ├── KNOTS.csv             # KNOT tracking
            │   │   ├── KNU_PLAN.csv          # Artifact planning
            │   │   └── TBD_REGISTER.csv      # Uncertainty tracking
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
            └── PUBS/                         # Publications
                ├── CSDB/
                │   ├── csdb_config.yaml      # S1000D configuration
                │   ├── DMC/
                │   │   └── dmc_index.csv     # Data module index
                │   ├── DM/
                │   ├── ICN/
                │   ├── PM/
                │   ├── COMREF/
                │   └── BREX/
                │
                ├── IETP_RUNTIME/
                │   ├── ASIT/
                │   │   ├── asit_config.yaml  # App builder config
                │   │   ├── APP_BUILDER/
                │   │   ├── ORCHESTRATION/
                │   │   ├── UI_CONFIG/
                │   │   ├── USER_MODELS/
                │   │   ├── CONTENT_ROUTING/
                │   │   ├── POLICY_GATES/
                │   │   ├── TELEMETRY/
                │   │   └── CONNECTORS/
                │   ├── MODULES/
                │   │   ├── PM_CORE/
                │   │   ├── PM_MAINTENANCE/
                │   │   ├── PM_OPERATIONAL/
                │   │   ├── PM_TRAINING/
                │   │   └── PM_CUSTOM/
                │   ├── PACKAGES/
                │   │   ├── PKG_BASELINE/
                │   │   │   └── package.manifest.yaml
                │   │   ├── PKG_OPERATOR/
                │   │   ├── PKG_MRO/
                │   │   ├── PKG_LINE_MAINT/
                │   │   ├── PKG_HEAVY_MAINT/
                │   │   └── PKG_REGULATORY/
                │   ├── RUNTIME_SCHEMA/
                │   ├── DELIVERY/
                │   ├── BUILDS/
                │   └── QA/
                │
                └── EXPORTS/
                    ├── export_config.yaml    # Export configuration
                    ├── PDF/
                    ├── HTML/
                    ├── IETP/
                    └── DATA_DROPS/
```

## Key Template Files

### GENESIS Layer
- **O-KNOT discovery.yaml**: Shows how to document knowledge gaps and uncertainties
- **Y-KNOT justification.yaml**: Demonstrates decision justification and option evaluation
- **KNOT framing.yaml**: Complete example of KNOT scope definition and planning
- **Registry CSVs**: Example registries for tracking KNOTs, O-KNOTs, and Y-KNOTs

### SSOT Layer
- **TOKENOMICS.yaml**: Comprehensive token allocation configuration
- **KNOTS.csv**: KNOT tracking example
- **KNU_PLAN.csv**: Artifact planning template
- **TBD_REGISTER.csv**: Uncertainty tracking example

### PUBS Layer
- **csdb_config.yaml**: Complete S1000D CSDB configuration
- **dmc_index.csv**: Data module registry example
- **asit_config.yaml**: IETP runtime app builder configuration
- **package.manifest.yaml**: Deployable package definition
- **export_config.yaml**: Multi-format export configuration

## What Makes This Template Complete

1. **Full Directory Structure**: All folders from GENESIS through PUBS are created
2. **Comprehensive Examples**: Key configuration files are fully populated with realistic examples
3. **Detailed Documentation**: Each file includes extensive comments explaining purpose and usage
4. **Consistent Placeholders**: All placeholders follow a consistent pattern for easy replacement
5. **Triple Knowledge-Base Spine**: Demonstrates the complete GENESIS → SSOT → PUBS flow
6. **Modern IETP Support**: Includes IETP_RUNTIME with ASIT app builder capabilities

## Template Evolution

This template reflects the evolved PUBS structure with:
- **CSDB**: S1000D authoritative content (canonical source)
- **IETP_RUNTIME**: Runtime-ready delivery with ASIT intelligence
- **ASIT**: App-builder + orchestration + delivery capabilities
- **Packages**: Deployable configurations for different user roles
- **Exports**: Multi-format output generation

## Customization Guidelines

When using this template:

1. **Preserve the structure**: Keep the canonical triple knowledge-base spine intact
2. **Adapt the content**: Modify YAML values, CSV entries, and documentation to match your chapter
3. **Add chapter-specific files**: Extend with domain-specific artifacts as needed
4. **Update relationships**: Ensure all cross-references and traceability links are correct
5. **Follow conventions**: Maintain naming conventions and metadata standards

## References

- [Template Documentation](../README.md)
- [ATA Chapter Onboarding Guide](../../docs/ATA_CHAPTER_ONBOARDING.md)
- [ATA Chapter Scaling Framework](../../docs/ATA_CHAPTER_SCALING_FRAMEWORK.md)
- [Scaffold Script Documentation](../scaffold_chapter.py)

---

**Note**: This is a reference template. All "XX" placeholders and sample content should be replaced with actual chapter-specific values before use.
