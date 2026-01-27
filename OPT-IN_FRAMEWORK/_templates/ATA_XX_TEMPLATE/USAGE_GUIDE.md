# ATA_XX Template Usage Guide

## Quick Start

### Using the Template in 3 Steps

1. **Choose your method:**
   - **Automated:** Use `scaffold_chapter.py` (recommended)
   - **Manual:** Copy and find-replace

2. **For Automated Approach:**
   ```bash
   cd OPT-IN_FRAMEWORK/_templates
   python scaffold_chapter.py --chapter 28 --title "Fuel" --axis T-TECHNOLOGIES
   ```

3. **For Manual Approach:**
   ```bash
   # Copy the template
   cp -r ATA_XX_TEMPLATE/ATA_XX-CHAPTER_TITLE \
         ../T-TECHNOLOGIES/ATA_28-FUEL/ATA-28-fuel/28-00-general
   
   # Find and replace placeholders
   cd ../T-TECHNOLOGIES/ATA_28-FUEL/ATA-28-fuel/28-00-general
   find . -type f -exec sed -i 's/XX/28/g' {} +
   find . -type f -exec sed -i 's/Chapter Title/Fuel/g' {} +
   find . -type f -exec sed -i 's/CHAPTER_TITLE/FUEL/g' {} +
   find . -type f -exec sed -i 's/AXIS_NAME/T-TECHNOLOGIES/g' {} +
   ```

## What You Get

### Complete Structure

```
18 files across 47 directories including:

GENESIS/
├── O-KNOT discovery template with impact assessment
├── Y-KNOT justification with option evaluation
├── KNOT framing with full planning detail
└── Registry CSVs for tracking

SSOT/
├── LC01 with TOKENOMICS, KNU_PLAN, TBD_REGISTER
└── LC02-LC14 folders ready for content

PUBS/
├── CSDB with S1000D configuration
├── IETP_RUNTIME with ASIT app builder
├── Packages with baseline manifest
└── EXPORTS with multi-format config
```

## Placeholder Reference

| Placeholder | Replace With | Example |
|-------------|-------------|---------|
| `XX` | Chapter number | `28`, `71`, `95` |
| `CHAPTER_TITLE` | Chapter title (caps, underscores) | `FUEL`, `POWER_PLANT` |
| `Chapter Title` | Chapter title (title case) | `Fuel`, `Power Plant` |
| `chapter-title` | Chapter title (lowercase, hyphens) | `fuel`, `power-plant` |
| `AXIS_NAME` | OPT-IN axis | `T-TECHNOLOGIES`, `I-INFRASTRUCTURES` |
| `YYYY-MM-DD` | Actual date | `2026-01-27` |
| `STK_XX` | Stakeholder ID | `STK_FUEL`, `STK_PROP` |

## Verification Checklist

After using the template:

- [ ] All XX placeholders replaced
- [ ] All dates updated
- [ ] Stakeholder IDs assigned
- [ ] TOKENOMICS values adjusted for chapter complexity
- [ ] KNU_PLAN populated with actual artifacts
- [ ] TBD_REGISTER initialized with known uncertainties
- [ ] CSDB DMC codes follow proper numbering
- [ ] ASIT configuration matches user roles
- [ ] Package manifests list correct content

## Customization Points

### Must Customize

1. **TOKENOMICS.yaml**: Adjust token allocation based on chapter complexity
2. **KNU_PLAN.csv**: Define actual artifacts you'll create
3. **TBD_REGISTER.csv**: List known uncertainties and resolution targets
4. **O-KNOT discovery.yaml**: Document actual knowledge gaps
5. **Y-KNOT justification.yaml**: Real options and decisions

### May Customize

1. **CSDB config**: Info codes based on content types
2. **ASIT config**: User models based on audience
3. **Package manifest**: Content selection and features
4. **Export config**: Output formats and automation

### Keep As-Is

1. Directory structure (canonical spine)
2. File naming conventions
3. YAML schema structures
4. CSV column headers

## Examples

### Example 1: Creating ATA 28 (Fuel)

```bash
python scaffold_chapter.py --chapter 28 --title "Fuel" --axis T-TECHNOLOGIES
```

Result:
- Creates: `../T-TECHNOLOGIES/ATA_28-FUEL/ATA-28-fuel/28-00-general/`
- KNOT-28-00-001: "Fuel System Baseline"
- 500 TT allocated (priority chapter configuration)

### Example 2: Creating ATA 85 (Custom)

```bash
python scaffold_chapter.py --chapter 85 --title "Propulsion Integration" --axis T-TECHNOLOGIES
```

Result:
- Creates: `../T-TECHNOLOGIES/ATA_85-PROPULSION_INTEGRATION/...`
- KNOT-85-00-001: "Propulsion Integration System Baseline"
- 400 TT allocated (default configuration)

## Integration with Workflow

1. **After Template Creation:**
   - Review GENESIS O-KNOT and document uncertainties
   - Populate SSOT/LC01 baseline files
   - Configure PUBS for your content types

2. **During Development:**
   - Update KNOT status as work progresses
   - Track TBDs in TBD_REGISTER
   - Consume tokens per TOKENOMICS allocation

3. **At Milestones:**
   - Update registries (_registry/*.csv)
   - Review and adjust TOKENOMICS if needed
   - Generate PUBS outputs via export config

## Support

- Template issues: See [ATA_XX_TEMPLATE/README.md](README.md)
- Scaffold script: See [scaffold_chapter.py](../scaffold_chapter.py)
- Framework docs: See [../../docs/ATA_CHAPTER_ONBOARDING.md](../../docs/ATA_CHAPTER_ONBOARDING.md)
