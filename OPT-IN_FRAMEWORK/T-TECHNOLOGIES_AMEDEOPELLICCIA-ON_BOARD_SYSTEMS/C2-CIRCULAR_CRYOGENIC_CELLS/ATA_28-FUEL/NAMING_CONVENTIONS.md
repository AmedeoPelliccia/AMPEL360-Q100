# ATA-28 Naming Conventions

**Version:** 1.0.0  
**Status:** Normative  
**Applies To:** ATA 28 — Fuel Systems (LH₂)

---

## Overview

This document defines the ID grammar rules, controlled vocabulary, and slug formats for all artifacts within the ATA-28 Fuel Systems chapter.

---

## ID Grammar

### KNOT Identifiers

**Section-Level GENESIS:**
```
O-KNOT-ATA28-<YY>-<NNN>
Y-KNOT-ATA28-<YY>-<NNN>
```

**Subject-Level Orchestration:**
```
KNOT-ATA28-<YY>-<ZZ>-<NNN>
```

**Examples:**
- `O-KNOT-ATA28-10-001` — Origin KNOT for fuel storage section
- `Y-KNOT-ATA28-10-001` — Derived KNOT for regulatory LH₂ requirements
- `KNOT-ATA28-10-00-001` — Subject KNOT for fuel storage general

### KNU Identifiers

```
KNU-ATA28-<YY>-<ZZ>-<KNOT_NNN>-<TYPE>-<NNN>
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
- `KNU-ATA28-10-00-001-REQ-001` — First requirement artifact for KNOT-001
- `KNU-ATA28-10-00-001-DES-001` — First design artifact for KNOT-001
- `KNU-ATA28-10-00-001-TST-001` — First test artifact for KNOT-001

### Data Module Codes (DMC)

S1000D-compliant DMC format:
```
DMC-AMPEL360-28-<SS>-<SU>-<SB>-<SX>-<AAA>-<NNN>-<V>
```

**Components:**
- `28` — ATA Chapter (Fuel)
- `SS` — Section (10, 20, 30, 40, 50, 60)
- `SU` — Sub-section (00-99)
- `SB` — Subject (00-99)
- `SX` — Subject Extension (A-Z)
- `AAA` — Info Code (3 chars)
- `NNN` — Sequence Number
- `V` — Variant Code

**Examples:**
- `DMC-AMPEL360-28-10-00-00A-001A-A` — Fuel storage general description
- `DMC-AMPEL360-28-20-10-00A-040A-A` — LH₂ distribution line description
- `DMC-AMPEL360-28-60-00-00A-300A-A` — H₂ leak detection procedure

---

## Folder Naming

### Section Folders
```
28-<YY>-<slug>/
```

**Examples:**
- `28-10-storage/`
- `28-20-distribution/`
- `28-30-delivery/`
- `28-40-indicating/`
- `28-50-management/`
- `28-60-monitoring/`

### Subject Folders
```
28-<YY>-<ZZ>_<descriptive-slug>/
```

**Examples:**
- `28-10-00_fuel-storage-general/`
- `28-10-10_cryogenic-tanks/`
- `28-10-20_insulation-systems/`
- `28-20-00_fuel-distribution-general/`
- `28-20-10_fuel-lines/`
- `28-60-10_leak-detection/`

---

## Controlled Vocabulary

### LH₂-Specific Terminology

| Term | Definition | Usage |
|------|------------|-------|
| **LH₂** | Liquid Hydrogen | Standard abbreviation for fuel type |
| **GH₂** | Gaseous Hydrogen | Used when referring to vaporized fuel |
| **MLI** | Multi-Layer Insulation | Tank insulation system |
| **COPV** | Composite Overwrap Pressure Vessel | Tank construction type |
| **Boil-off** | Cryogenic evaporation loss | Thermal performance metric |
| **ZBO** | Zero Boil-Off | Design target for thermal management |
| **Ullage** | Tank gas space above liquid | Volume/pressure reference |
| **Chilldown** | Pre-cooling process | Fuel transfer operation |

### Unit Standards

| Quantity | Unit | Symbol |
|----------|------|--------|
| Mass | Kilogram | kg |
| Volume | Liter | L |
| Pressure | Bar | bar |
| Temperature | Kelvin | K |
| Flow Rate | kg/s | kg/s |
| Energy Density | kJ/kg | kJ/kg |

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
- `REQUIREMENTS_LH2_STORAGE.yaml`

### Document Files
```
<DOCTYPE>-ATA28-<SS>-<SU>-<NNN>.md
```

**Examples:**
- `REQ-ATA28-10-00-001.md`
- `DES-ATA28-10-10-001.md`
- `TST-ATA28-10-00-001.md`

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 1.0.0 | STK_CM | Initial naming conventions for ATA-28 |
