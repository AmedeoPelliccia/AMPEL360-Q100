# ICN (Information Control Number) Specification

## 1. Purpose

Define the naming convention, directory structure, and management procedures for graphic assets in the AMPEL360 Q100 Common Source Database (CSDB).

## 2. ICN Naming Convention

### 2.1 Format

```
ICN-AMPEL360-S1-CCCSS-SSSS-NNN-V.ext
```

### 2.2 Components

| Component | Format | Description | Example |
|-----------|--------|-------------|---------|
| ICN | Literal | Information Control Number prefix | ICN |
| AMPEL360 | Literal | Aircraft model identifier | AMPEL360 |
| S1 | Literal | System code (S1 = aircraft) | S1 |
| CCC | \d{3} | ATA Chapter (000-099) | 095 |
| SS | \d{2} | ATA Section (00-99) | 40 |
| SSSS | \d{4} | Subsection/Subject (0000-9999) | 0040 |
| NNN | \d{3} | Sequence number (001-999) | 001 |
| V | [A-Z] | Variant (A=original, B,C...=revisions) | A |
| ext | string | File extension | svg, png |

### 2.3 Examples

| ICN | Description |
|-----|-------------|
| ICN-AMPEL360-S1-00095-0040-001-A.svg | AI Active symbol (ATA 95-40) |
| ICN-AMPEL360-S1-00095-0040-002-A.svg | AI Confidence High (ATA 95-40) |
| ICN-AMPEL360-S1-00028-0010-001-A.svg | Cryogenic Hazard (ATA 28-10) |
| ICN-AMPEL360-S1-00028-0010-002-A.svg | Flammable H₂ (ATA 28-10) |

### 2.4 Regex Validation

```regex
^ICN-AMPEL360-S1-(\d{5})-(\d{4})-(\d{3})-([A-Z])\.(svg|png)$
```

## 3. Directory Structure

```
PUB/CSDB/ICN/
├── _index.csv              # Master registry
├── ICN_SPECIFICATION.md    # This document
├── AI-ML/                  # ATA 95 - AI/ML Systems
│   └── [ICN files]
├── H2-HAZARD/              # ATA 28 - H₂ Fuel Systems
│   └── [ICN files]
├── SAFETY-GENERAL/         # ATA 00 - General Safety
│   └── [ICN files]
└── [future categories]/
```

## 4. File Format Requirements

### 4.1 SVG (Primary Format)

- **Viewport:** 100×100 units (scalable)
- **Stroke width:** Minimum 2 units at base size
- **Colors:** Named colors or hex (#RRGGBB)
- **Text:** Converted to paths (no external fonts)
- **Metadata:** Include title and description elements

### 4.2 PNG (Raster Fallback)

| Resolution | Filename Suffix | Dimensions |
|------------|-----------------|------------|
| 1x (standard) | .png | 64×64 px |
| 2x (retina) | @2x.png | 128×128 px |
| 3x (high-DPI) | @3x.png | 192×192 px |

### 4.3 Color Standards

| Status | Hex Code | RGB | Usage |
|--------|----------|-----|-------|
| Active/Normal | #0066CC | 0,102,204 | AI Active |
| Good/High | #00AA00 | 0,170,0 | High confidence |
| Warning/Low | #FFAA00 | 255,170,0 | Low confidence, caution |
| Danger/Critical | #CC0000 | 204,0,0 | Degraded, severe |
| Neutral/Override | #FFFFFF | 255,255,255 | Human override |
| Cryogenic | #00CCFF | 0,204,255 | Cold/cryogenic |

## 5. Source-to-Publication Workflow

```
SSOT/LC03/graphics/source/     →  Master editable files (.ai, .svg)
         │
         ▼ (Designer creates/modifies)
SSOT/LC03/graphics/review/     →  Under CCB review
         │
         ▼ (CCB approves)
SSOT/LC03/graphics/approved/   →  Approved masters
         │
         ▼ (Build script exports)
PUB/CSDB/ICN/[category]/       →  Published ICN files
```

## 6. Registry Schema

The `_index.csv` file contains:

| Column | Type | Description |
|--------|------|-------------|
| ICN | string | Full ICN identifier |
| Symbol_ID | string | Internal symbol ID (e.g., AI-STAT-001) |
| Name | string | Human-readable name |
| Category | string | Directory category |
| ATA_Chapter | integer | ATA chapter number |
| ATA_Section | integer | ATA section number |
| Source_File | string | Master source filename |
| Format | string | Primary format (SVG) |
| Size_Bytes | integer | File size |
| SHA256 | string | Content hash |
| Version | string | Semantic version |
| Status | enum | DRAFT, REVIEW, APPROVED |
| Approved_Date | date | CCB approval date |
| Approved_By | string | Approver stakeholder ID |

## 7. Change Control

### 7.1 New Symbol

1. Create source file in `SSOT/LC03/graphics/source/`
2. Submit CR to CCB
3. Move to `review/` folder
4. CCB approves → Move to `approved/`
5. Build script generates ICN files
6. Update `_index.csv`

### 7.2 Symbol Modification

1. Increment variant letter (A→B, B→C)
2. Create new ICN files with new variant
3. Update registry
4. Previous variant retained for traceability

## 8. S1000D Integration

### 8.1 DM Reference

```xml
<graphic>
  <infoEntityIdent infoEntityRefIdent="ICN-AMPEL360-S1-00095-0040-001-A"/>
</graphic>
```

### 8.2 ICN Entity Declaration

```xml
<infoEntity infoEntityIdent="ICN-AMPEL360-S1-00095-0040-001-A">
  <media mediaType="image/svg+xml" href="AI-ML/ICN-AMPEL360-S1-00095-0040-001-A.svg"/>
</infoEntity>
```

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-13 | STK_PUB | Initial specification |
