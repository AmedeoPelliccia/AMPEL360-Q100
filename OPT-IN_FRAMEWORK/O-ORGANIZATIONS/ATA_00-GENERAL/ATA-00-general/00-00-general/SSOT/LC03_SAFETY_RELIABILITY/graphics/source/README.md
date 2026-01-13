# Safety Symbol Source Files

## Purpose

This directory contains master editable source files for safety-critical symbols used in AMPEL360 Q100 documentation.

## Workflow

```
source/     →  Create/edit master files here
    ↓
review/     →  Submit for CCB review
    ↓
approved/   →  CCB approved masters
    ↓
PUB/CSDB/ICN/ → Published ICN files (auto-generated)
```

## File Naming

```
[Symbol_ID]_[description].[ext]

Examples:
  AI-STAT-001_ai-active.ai
  H2-CRYO-001_cryogenic.svg
```

## Requirements

### Technical
- Vector format preferred (Adobe Illustrator .ai, SVG)
- Artboard: 100×100 units
- Stroke minimum: 2 units
- Colors: Use defined palette (see ICN_SPECIFICATION.md)

### Process
1. Create/modify source file
2. Submit Change Request to CCB
3. Move file to `review/` folder
4. After approval, move to `approved/`
5. Build script generates ICN files

## Current Status

| Symbol | Source File | Status |
|--------|-------------|--------|
| AI-STAT-001 | ai-ml-symbols.ai | Placeholder |
| AI-STAT-002 | ai-ml-symbols.ai | Placeholder |
| AI-STAT-003 | ai-ml-symbols.ai | Placeholder |
| AI-STAT-004 | ai-ml-symbols.ai | Placeholder |
| AI-STAT-005 | ai-ml-symbols.ai | Placeholder |
| AI-OOD-001 | ai-ml-symbols.ai | Placeholder |
| AI-OOD-002 | ai-ml-symbols.ai | Placeholder |
| AI-LRN-001 | ai-ml-symbols.ai | Placeholder |
| AI-LRN-002 | ai-ml-symbols.ai | Placeholder |
| H2-CRYO-001 | h2-hazard-symbols.ai | Placeholder |
| H2-FLAM-001 | h2-hazard-symbols.ai | Placeholder |
| H2-PRES-001 | h2-hazard-symbols.ai | Placeholder |
| H2-ASPH-001 | h2-hazard-symbols.ai | Placeholder |
| H2-BOIL-001 | h2-hazard-symbols.ai | Placeholder |
| H2-LEAK-001 | h2-hazard-symbols.ai | Placeholder |
| H2-VENT-001 | h2-hazard-symbols.ai | Placeholder |

## TBD

[TBD-00-00-003-ICD-003-001] Final graphic design by certified human factors specialist required before certification.

## Contacts

- Symbol Design: STK_HF (Human Factors)
- CCB Review: STK_CM (Configuration Management)
- Publication: STK_PUB (Publications)
