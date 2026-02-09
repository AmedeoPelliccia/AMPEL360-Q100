# ATA-53 Naming Conventions

**Version:** 1.0.0  
**Status:** Normative  
**Applies To:** ATA 53 — Fuselage

---

## Overview

This document defines the ID grammar rules, controlled vocabulary, and slug formats for all artifacts within the ATA-53 Fuselage chapter.

---

## ID Grammar

### General Format

```
{PREFIX}-{CHAPTER}-{SECTION}-{SUBJECT}-{TYPE}-{SEQUENCE}
```

### Examples

- `REQ-53-00-00-SRS-001` — System Requirement Specification
- `DES-53-10-00-DDD-001` — Design Description Document
- `TEST-53-00-00-TP-001` — Test Procedure

### KNOT Identifiers

**Section-Level GENESIS:**
```
O-KNOT-ATA53-<YY>-<NNN>
Y-KNOT-ATA53-<YY>-<NNN>
```

**Subject-Level Orchestration:**
```
KNOT-ATA53-<YY>-<ZZ>-<NNN>
```

**Examples:**
- `O-KNOT-ATA53-00-001` — Origin KNOT for fuselage general
- `Y-KNOT-ATA53-10-001` — Derived KNOT for nose section requirements
- `KNOT-ATA53-30-00-001` — Subject KNOT for center fuselage general

### KNU Identifiers

```
KNU-ATA53-<YY>-<ZZ>-<KNOT_NNN>-<TYPE>-<NNN>
```

**Type Codes:**
| Code | Artifact Type |
|------|---------------|
| `REQ` | Requirement |
| `DES` | Design |
| `ANA` | Analysis |
| `TST` | Test |
| `SAF` | Safety |
| `CRT` | Certification |
| `PUB` | Publication |

**Examples:**
- `KNU-ATA53-00-00-001-REQ-001` — First requirement artifact for KNOT-001
- `KNU-ATA53-10-00-001-DES-001` — First design artifact for KNOT-001
- `KNU-ATA53-30-00-001-TST-001` — First test artifact for KNOT-001

### Data Module Codes (DMC)

S1000D-compliant DMC format:
```
DMC-AMPEL360-53-<SS>-<SU>-<SB>-<SX>-<AAA>-<NNN>-<V>
```

**Components:**
- `53` — ATA Chapter (Fuselage)
- `SS` — Section (00, 10, 20, 30, 40, 50, 60, 70, 80, 90)
- `SU` — Sub-section (00-99)
- `SB` — Subject (00-99)
- `SX` — Subject Extension (A-Z)
- `AAA` — Info Code (3 chars)
- `NNN` — Sequence Number
- `V` — Variant Code

**Examples:**
- `DMC-AMPEL360-53-00-00-00A-001A-A` — Fuselage general description
- `DMC-AMPEL360-53-10-10-00A-040A-A` — Nose section skin panel description
- `DMC-AMPEL360-53-30-00-00A-300A-A` — Center fuselage inspection procedure

---

## Folder Naming

### Section Folders
```
53-<YY>-<slug>/
```

**Examples:**
- `53-00-general/`
- `53-10-nose-section/`
- `53-20-forward-fuselage/`
- `53-30-center-fuselage/`
- `53-40-center-wing-section/`
- `53-50-aft-fuselage/`
- `53-60-tail-cone/`
- `53-70-belly-fairing/`
- `53-80-special-structure/`
- `53-90-tables-schemas-index/`

### Subject Folders
```
53-<YY>-<ZZ>_<descriptive-slug>/
```

**Examples:**
- `53-00-00_fuselage-general/`
- `53-10-10_nose-skin-panels/`
- `53-10-20_nose-frames-bulkheads/`
- `53-30-00_center-fuselage-general/`
- `53-30-10_center-skin-panels/`
- `53-80-10_pressure-bulkheads/`

---

## Controlled Vocabulary

### Fuselage-Specific Terminology

| Term | Definition | Usage |
|------|------------|-------|
| **Skin Panel** | Outer structural sheet | Primary fuselage enclosure element |
| **Frame** | Circumferential structural member | Maintains cross-section shape |
| **Stringer** | Longitudinal structural member | Distributes axial loads along fuselage |
| **Bulkhead** | Transverse partition wall | Pressure boundary or compartment divider |
| **Longeron** | Heavy longitudinal load-carrying member | Primary bending load path |
| **Keel Beam** | Lower centerline structural member | Supports floor and lower fuselage loads |
| **Splice** | Joint between adjacent panels or members | Structural continuity at joints |
| **Doubler** | Reinforcing plate at stress concentration | Local reinforcement at cutouts or joints |

### General Abbreviations

| Term | Definition |
|------|------------|
| TBD | To Be Determined |
| TBR | To Be Resolved |
| N/A | Not Applicable |

### Unit Standards

| Quantity | Unit | Symbol |
|----------|------|--------|
| Length | Millimeter | mm |
| Force | Newton | N |
| Stress | Megapascal | MPa |
| Mass | Kilogram | kg |
| Temperature | Celsius | °C |
| Pressure | Bar | bar |

---

## Slug Formats

- Lowercase with hyphens: `53-00-general`
- No special characters
- Max 50 characters

---

## File Naming

### YAML/CSV Files
```
<ARTIFACT_TYPE>_<DESCRIPTOR>.yaml
<ARTIFACT_TYPE>_<DESCRIPTOR>.csv
```

**Examples:**
- `KNOTS.csv`
- `KNU_PLAN.csv`
- `TOKENOMICS_TT.yaml`
- `REQUIREMENTS_FUSELAGE_GENERAL.yaml`

### Document Files
```
<DOCTYPE>-ATA53-<SS>-<SU>-<NNN>.md
```

**Examples:**
- `REQ-ATA53-00-00-001.md`
- `DES-ATA53-10-10-001.md`
- `TST-ATA53-30-00-001.md`

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 0.1.0 | STK_CM | Initial scaffold for ATA-53 |
| 2026-02-09 | 1.0.0 | STK_CM | Normative naming conventions (REQ-53-00-00-SRS-001) |
