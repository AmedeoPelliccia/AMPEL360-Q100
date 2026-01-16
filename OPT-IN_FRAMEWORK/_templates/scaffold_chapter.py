#!/usr/bin/env python3
"""
scaffold_chapter.py - ATA Chapter Scaffolding Script

This script automates the creation of the full GENESIS → SSOT → CSDB → PUBS → EXPORT
pipeline structure for new ATA chapters in the AMPEL360 Q100 OPT-IN Framework.

Usage:
    python scaffold_chapter.py --chapter 28 --title "Fuel" --axis T-TECHNOLOGIES

Author: AMPEL360 Program Office
Version: 1.0.0
Date: 2026-01-16
"""

import argparse
from datetime import datetime
from pathlib import Path
import re

# Default configuration
DEFAULT_CONFIG = {
    "section": "00",
    "residual_target": "10",
    "total_tt": "400",
    "knot_count": "3",
    "owner": "STK_SE",
    "spillover": "0.40",
    "info_code": "001"
}

# Chapter-specific configurations for priority chapters
PRIORITY_CHAPTERS = {
    "28": {
        "title": "Fuel",
        "axis": "T-TECHNOLOGIES",
        "total_tt": "500",
        "concerns": ["LH₂ storage systems", "Cryogenic handling procedures"],
        "constraint": "H₂ safety and flammability regulations",
        "factor": "Novel cryogenic fuel system",
        "stakeholder": "STK_FUEL"
    },
    "71": {
        "title": "Power Plant",
        "axis": "T-TECHNOLOGIES",
        "total_tt": "450",
        "concerns": ["Fuel cell stack integration", "Electric motor control"],
        "constraint": "Thermal management requirements",
        "factor": "Hybrid propulsion architecture",
        "stakeholder": "STK_PROP"
    },
    "95": {
        "title": "AI/ML",
        "axis": "T-TECHNOLOGIES",
        "total_tt": "600",
        "concerns": ["Learning assurance", "Model versioning and traceability"],
        "constraint": "Regulatory certification approach uncertainty",
        "factor": "Novel AI/ML certification challenges",
        "stakeholder": "STK_AI"
    },
    "96": {
        "title": "DPP/Traceability",
        "axis": "N-NEURAL_NETWORKS",
        "total_tt": "400",
        "concerns": ["Digital Product Passport integration", "Blockchain traceability"],
        "constraint": "EU DPP regulatory compliance",
        "factor": "Lifecycle data capture requirements",
        "stakeholder": "STK_DATA"
    }
}


def parse_arguments():
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description="Scaffold a new ATA chapter with full GENESIS → SSOT → CSDB → PUBS structure"
    )
    parser.add_argument(
        "--chapter",
        required=True,
        help="ATA chapter number (2 digits, e.g., 28)"
    )
    parser.add_argument(
        "--title",
        help="Chapter title (e.g., 'Fuel'). If not provided, uses priority chapter config."
    )
    parser.add_argument(
        "--axis",
        help="OPT-IN axis (e.g., T-TECHNOLOGIES). If not provided, uses priority chapter config."
    )
    parser.add_argument(
        "--section",
        default=DEFAULT_CONFIG["section"],
        help="Section number (default: 00)"
    )
    parser.add_argument(
        "--output-dir",
        help="Output directory (default: ../OPT-IN_FRAMEWORK/{AXIS})"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be created without actually creating files"
    )
    
    return parser.parse_args()


def get_chapter_config(chapter, title=None, axis=None):
    """Get configuration for a chapter, using priority config if available."""
    config = DEFAULT_CONFIG.copy()
    
    # Check if this is a priority chapter
    if chapter in PRIORITY_CHAPTERS:
        priority_config = PRIORITY_CHAPTERS[chapter]
        config.update({
            "title": title or priority_config["title"],
            "axis": axis or priority_config["axis"],
            "total_tt": priority_config["total_tt"],
            "concerns": priority_config["concerns"],
            "constraint": priority_config["constraint"],
            "factor": priority_config["factor"],
            "stakeholder": priority_config["stakeholder"]
        })
    else:
        if not title or not axis:
            raise ValueError(f"Chapter {chapter} is not a priority chapter. "
                           "Please provide --title and --axis.")
        config.update({
            "title": title,
            "axis": axis,
            "concerns": ["Domain-specific concern 1", "Domain-specific concern 2"],
            "constraint": "Chapter-specific constraint",
            "factor": "Chapter-specific factor",
            "stakeholder": "STK_DOMAIN"
        })
    
    return config


def substitute_template_vars(content, chapter, section, config):
    """Substitute template variables in content."""
    created_date = datetime.now().strftime("%Y-%m-%d")
    due_date = "2026-06-30"  # Default 6 months out
    
    # Calculate derived values
    total_tt = int(config["total_tt"])
    knot_count = int(config.get("knot_count", "3"))
    total_deg = total_tt * 360
    knot_1_tt = total_tt // knot_count
    knot_1_deg = knot_1_tt * 360
    
    substitutions = {
        "{{CHAPTER}}": chapter,
        "{{SECTION}}": section,
        "{{CHAPTER_TITLE}}": config["title"],
        "{{AXIS}}": config["axis"],
        "{{CREATED_DATE}}": created_date,
        "{{DUE_DATE}}": due_date,
        "{{TARGET_DATE}}": due_date,
        "{{OWNER}}": config["owner"],
        "{{RESIDUAL_TARGET}}": config["residual_target"],
        "{{TOTAL_TT}}": str(total_tt),
        "{{TOTAL_DEG}}": str(total_deg),
        "{{KNOT_COUNT}}": str(knot_count),
        "{{KNOT_1_TT}}": str(knot_1_tt),
        "{{KNOT_1_DEG}}": str(knot_1_deg),
        "{{KNOT_1_COMPLEXITY}}": "1.0",
        "{{SPILLOVER}}": config["spillover"],
        "{{INFO_CODE}}": config["info_code"],
        "{{CHAPTER_SPECIFIC_PROBLEM}}": "Specific knowledge gaps for " + config["title"],
        "{{CHAPTER_SPECIFIC_SOURCE}}": config["title"] + " heritage documentation",
        "{{CONCERN_1}}": config["concerns"][0] if len(config["concerns"]) > 0 else "Concern 1",
        "{{CONCERN_2}}": config["concerns"][1] if len(config["concerns"]) > 1 else "Concern 2",
        "{{CHAPTER_SPECIFIC_CONSTRAINT}}": config["constraint"],
        "{{CHAPTER_SPECIFIC_OPTION}}": config["title"] + "-specific approach",
        "{{CHAPTER_SPECIFIC_APPROACH}}": "Tailored approach for " + config["title"],
        "{{CHAPTER_SPECIFIC_FACTOR}}": config["factor"],
        "{{CHAPTER_STAKEHOLDER}}": config["stakeholder"],
        "{{KNOT_TITLE}}": "System Baseline",
        "{{KNOT_1_TITLE}}": config["title"] + " System Baseline",
        "{{SCOPE_IN_1}}": config["title"] + " system requirements definition",
        "{{SCOPE_IN_2}}": config["title"] + " interface specifications",
        "{{SCOPE_IN_3}}": "Safety and certification requirements",
        "{{SCOPE_OUT_1}}": "Detailed component design (LC04)",
        "{{SCOPE_OUT_2}}": "Manufacturing processes (LC09)",
        "{{ACCEPTANCE_1}}": "All " + config["title"] + " requirements documented and approved",
        "{{ACCEPTANCE_2}}": "CSDB data modules pass BREX validation",
        "{{ACCEPTANCE_3}}": "Traceability to KNOT established",
        "{{UPSTREAM_DEPENDENCY}}": "KNOT-00-00-002: Document architecture conventions",
        "{{DOWNSTREAM_DEPENDENCY}}": "All dependent chapters and systems",
        "{{CHAPTER_SPECIFIC_NOTES}}": "Chapter-specific implementation notes for " + config["title"],
        "{{DM_TITLE}}": config["title"] + " System Description",
        "{{TBD_DESCRIPTION}}": config["title"] + "-specific parameter TBD",
        "{{STAKEHOLDER_1}}": "STK_SE",
        "{{STAKEHOLDER_2}}": "STK_PUB"
    }
    
    for key, value in substitutions.items():
        content = content.replace(key, value)
    
    return content


def create_directory_structure(base_path, chapter, section, config, dry_run=False):
    """Create the full directory structure for the chapter."""
    chapter_slug = config["title"].lower().replace(" ", "-").replace("/", "-")
    # Collapse multiple consecutive hyphens into a single hyphen
    chapter_slug = re.sub(r'-+', '-', chapter_slug)
    chapter_path = base_path / f"ATA_{chapter}-{config['title'].upper().replace(' ', '_').replace('/', '_')}" / f"ATA-{chapter}-{chapter_slug}" / f"{chapter}-{section}-general"
    
    directories = [
        # GENESIS structure
        "GENESIS/O-KNOT",
        "GENESIS/Y-KNOT",
        "GENESIS/KNOT",
        "GENESIS/_registry",
        # SSOT structure
        "SSOT/LC01_PROBLEM_STATEMENT",
        "SSOT/LC02_SYSTEM_REQUIREMENTS",
        "SSOT/LC03_SAFETY_RELIABILITY",
        "SSOT/LC04_DESIGN_DEFINITION",
        "SSOT/LC05_ANALYSIS_MODELS",
        "SSOT/LC06_VERIFICATION",
        "SSOT/LC07_VALIDATION",
        "SSOT/LC08_CONFIGURATION_MANAGEMENT",
        "SSOT/LC09_MANUFACTURING",
        "SSOT/LC10_OPERATIONS",
        "SSOT/LC11_PUBLICATION_AMM",
        "SSOT/LC12_PUBLICATION_OTHER",
        "SSOT/LC13_TRAINING",
        "SSOT/LC14_OBSOLESCENCE",
        # PUB structure
        "PUB/AMM/CSDB/DM",
        "PUB/AMM/CSDB/DM/transforms",
        "PUB/AMM/CSDB/DML",
        "PUB/AMM/CSDB/ICN",
        "PUB/AMM/CSDB/PM",
        "PUB/AMM/CSDB/APPLICABILITY",
        "PUB/AMM/CSDB/BREX",
        "PUB/AMM/CSDB/COMMON",
        "PUB/AMM/EXPORT",
        "PUB/AMM/IETP",
        "PUB/TRN/CSDB"
    ]
    
    if dry_run:
        print(f"\n[DRY RUN] Would create chapter at: {chapter_path}")
        for d in directories:
            print(f"  - {d}/")
        return None
    
    for d in directories:
        dir_path = chapter_path / d
        dir_path.mkdir(parents=True, exist_ok=True)
        print(f"Created: {dir_path}")
    
    return chapter_path


def process_template_file(template_path, output_path, chapter, section, config, dry_run=False):
    """Process a template file and write to output location."""
    with open(template_path, 'r') as f:
        content = f.read()
    
    # Substitute variables
    content = substitute_template_vars(content, chapter, section, config)
    
    # Remove .template extension from output filename
    if output_path.name.endswith('.template'):
        output_path = output_path.with_name(output_path.name[:-9])
    
    if dry_run:
        print(f"[DRY RUN] Would create: {output_path}")
        return
    
    with open(output_path, 'w') as f:
        f.write(content)
    
    print(f"Created: {output_path}")


def scaffold_genesis(chapter_path, chapter, section, config, template_dir, dry_run=False):
    """Scaffold GENESIS layer files."""
    print("\n=== Scaffolding GENESIS Layer ===")
    
    # O-KNOT
    oknot_dir = chapter_path / "GENESIS" / "O-KNOT" / f"O-KNOT-{chapter}-{section}-001"
    if not dry_run:
        oknot_dir.mkdir(parents=True, exist_ok=True)
    
    process_template_file(
        template_dir / "GENESIS_TEMPLATE" / "O-KNOT" / "discovery.yaml.template",
        oknot_dir / "discovery.yaml",
        chapter, section, config, dry_run
    )
    
    # Y-KNOT
    yknot_dir = chapter_path / "GENESIS" / "Y-KNOT" / f"Y-KNOT-{chapter}-{section}-001-001"
    if not dry_run:
        yknot_dir.mkdir(parents=True, exist_ok=True)
    
    process_template_file(
        template_dir / "GENESIS_TEMPLATE" / "Y-KNOT" / "justification.yaml.template",
        yknot_dir / "justification.yaml",
        chapter, section, config, dry_run
    )
    
    # KNOT
    knot_dir = chapter_path / "GENESIS" / "KNOT" / f"KNOT-{chapter}-{section}-001"
    if not dry_run:
        knot_dir.mkdir(parents=True, exist_ok=True)
    
    process_template_file(
        template_dir / "GENESIS_TEMPLATE" / "KNOT" / "framing.yaml.template",
        knot_dir / "framing.yaml",
        chapter, section, config, dry_run
    )
    
    # Registries
    for registry_file in ["o-knot_registry.csv.template", "y-knot_registry.csv.template", "knot_registry.csv.template"]:
        process_template_file(
            template_dir / "GENESIS_TEMPLATE" / "_registry" / registry_file,
            chapter_path / "GENESIS" / "_registry" / registry_file.replace(".template", ""),
            chapter, section, config, dry_run
        )


def scaffold_ssot(chapter_path, chapter, section, config, template_dir, dry_run=False):
    """Scaffold SSOT layer files."""
    print("\n=== Scaffolding SSOT Layer ===")
    
    # LC01 files
    lc01_files = [
        "TOKENOMICS.yaml.template",
        "KNOTS.csv.template",
        "KNU_PLAN.csv.template",
        "TBD_REGISTER.csv.template"
    ]
    
    for lc01_file in lc01_files:
        process_template_file(
            template_dir / "SSOT_TEMPLATE" / "LC01_PROBLEM_STATEMENT" / lc01_file,
            chapter_path / "SSOT" / "LC01_PROBLEM_STATEMENT" / lc01_file.replace(".template", ""),
            chapter, section, config, dry_run
        )
    
    # LC04 derivation schema
    process_template_file(
        template_dir / "SSOT_TEMPLATE" / "LC04_DESIGN_DEFINITION" / "_derivation.schema.yaml",
        chapter_path / "SSOT" / "LC04_DESIGN_DEFINITION" / "_derivation.schema.yaml",
        chapter, section, config, dry_run
    )


def scaffold_pub(chapter_path, chapter, section, config, template_dir, dry_run=False):
    """Scaffold PUB layer files."""
    print("\n=== Scaffolding PUB Layer ===")
    
    # Data Module template
    process_template_file(
        template_dir / "PUB_TEMPLATE" / "AMM" / "CSDB" / "DM" / "data-module.yaml.template",
        chapter_path / "PUB" / "AMM" / "CSDB" / "DM" / f"DMC-AMPEL360-{chapter}-{section}-00-00A-001A-A_001-00_EN-US.yaml",
        chapter, section, config, dry_run
    )
    
    # XSLT transform
    process_template_file(
        template_dir / "PUB_TEMPLATE" / "AMM" / "CSDB" / "DM" / "transforms" / "s1000d-to-markdown.xslt.template",
        chapter_path / "PUB" / "AMM" / "CSDB" / "DM" / "transforms" / "s1000d-to-markdown.xslt",
        chapter, section, config, dry_run
    )


def create_readme_files(chapter_path, chapter, section, config, dry_run=False):
    """Create README files for major directories."""
    print("\n=== Creating README Files ===")
    
    readme_content = f"""# ATA {chapter}-{section} — {config['title']}

**ATA Address:** ATA-{chapter}-{section}-00-00  
**Chapter:** ATA {chapter} — {config['title']}  
**Axis:** [{config['axis']}](../../)  
**Status:** SCAFFOLDED - Requires customization

---

## Overview

This chapter structure implements the full GENESIS → SSOT → LLM ENGINE → CSDB → PUBS → EXPORT pipeline for ATA {chapter} ({config['title']}).

## Structure

```
{chapter}-{section}-general/
├── GENESIS/          # Uncertainty space (O-KNOT, Y-KNOT, KNOT)
├── SSOT/             # Certainty space (LC01-LC14)
└── PUB/              # Publications (AMM, TRN)
```

## Next Steps

1. Review and customize `GENESIS/O-KNOT/*/discovery.yaml`
2. Update `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS.yaml`
3. Define chapter-specific KNUs in `KNU_PLAN.csv`
4. Configure CSDB data modules in `PUB/AMM/CSDB/DM/`
5. See [ATA Chapter Onboarding Guide](../../../../../docs/ATA_CHAPTER_ONBOARDING.md)

---

**Created:** {datetime.now().strftime("%Y-%m-%d")}  
**Tool:** scaffold_chapter.py v1.0.0  
**Requires:** Customization per chapter domain
"""
    
    readme_path = chapter_path / "README.md"
    if dry_run:
        print(f"[DRY RUN] Would create: {readme_path}")
    else:
        with open(readme_path, 'w') as f:
            f.write(readme_content)
        print(f"Created: {readme_path}")


def main():
    """Main execution function."""
    args = parse_arguments()
    
    # Format chapter number to 2 digits
    chapter = args.chapter.zfill(2)
    section = args.section.zfill(2)
    
    # Get chapter configuration
    config = get_chapter_config(chapter, args.title, args.axis)
    
    print(f"\n{'='*70}")
    print(f"ATA Chapter Scaffolding Tool v1.0.0")
    print(f"{'='*70}")
    print(f"Chapter: ATA {chapter} - {config['title']}")
    print(f"Axis: {config['axis']}")
    print(f"Section: {section}")
    print(f"Dry Run: {args.dry_run}")
    print(f"{'='*70}\n")
    
    # Determine paths
    script_dir = Path(__file__).parent
    template_dir = script_dir
    
    if args.output_dir:
        output_base = Path(args.output_dir)
    else:
        output_base = script_dir.parent / config['axis']
    
    # Create directory structure
    chapter_path = create_directory_structure(
        output_base, chapter, section, config, args.dry_run
    )
    
    if chapter_path:
        # Scaffold layers
        scaffold_genesis(chapter_path, chapter, section, config, template_dir, args.dry_run)
        scaffold_ssot(chapter_path, chapter, section, config, template_dir, args.dry_run)
        scaffold_pub(chapter_path, chapter, section, config, template_dir, args.dry_run)
        create_readme_files(chapter_path, chapter, section, config, args.dry_run)
    
    print(f"\n{'='*70}")
    if args.dry_run:
        print("DRY RUN COMPLETE - No files were created")
        print(f"To create files, run without --dry-run flag")
    else:
        print("SCAFFOLDING COMPLETE")
        print(f"\nChapter created at: {chapter_path}")
        print(f"\nNext steps:")
        print(f"1. Review and customize templates in {chapter_path}")
        print(f"2. See onboarding guide: docs/ATA_CHAPTER_ONBOARDING.md")
        print(f"3. Run validation: python validate_chapter.py --chapter {chapter}")
    print(f"{'='*70}\n")


if __name__ == "__main__":
    main()
