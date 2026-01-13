# ICN Repository Specification

**KNU ID:** KNU-00-00-003-ICD-003  
**Type:** ICD (Interface Control Document)  
**Status:** GENERATED  
**Parent KNOT:** KNOT-00-00-003 (Safety Labeling Standards)

## 1. Purpose

Define the Information Control Number (ICN) repository structure for managing safety-critical graphic assets in the AMPEL360 Q100 CSDB.

## 2. Scope

- 16 safety symbols (9 AI/ML + 7 H₂ Hazard)
- SVG primary format with PNG fallbacks
- S1000D-compliant ICN naming
- Version-controlled source-to-publication workflow

## 3. Repository Structure

See: [ICN_SPECIFICATION.md](../../PUB/CSDB/ICN/ICN_SPECIFICATION.md)

## 4. Symbol Inventory

| Category | Count | ATA Chapter |
|----------|-------|-------------|
| AI-ML | 9 | 95 |
| H2-HAZARD | 7 | 28 |
| **Total** | **16** | — |

### 4.1 AI/ML Symbols (ATA 95-40)

| ICN | Symbol ID | Description |
|-----|-----------|-------------|
| ICN-AMPEL360-S1-00095-0040-001-A | AI-STAT-001 | AI Active |
| ICN-AMPEL360-S1-00095-0040-002-A | AI-STAT-002 | AI Confidence High |
| ICN-AMPEL360-S1-00095-0040-003-A | AI-STAT-003 | AI Confidence Low |
| ICN-AMPEL360-S1-00095-0040-004-A | AI-STAT-004 | AI Degraded |
| ICN-AMPEL360-S1-00095-0040-005-A | AI-STAT-005 | AI Override |
| ICN-AMPEL360-S1-00095-0040-006-A | AI-OOD-001 | OOD Detected |
| ICN-AMPEL360-S1-00095-0040-007-A | AI-OOD-002 | OOD Severe |
| ICN-AMPEL360-S1-00095-0040-008-A | AI-LRN-001 | Learning Enabled |
| ICN-AMPEL360-S1-00095-0040-009-A | AI-LRN-002 | Learning Frozen |

### 4.2 H₂ Hazard Symbols (ATA 28-10)

| ICN | Symbol ID | Description |
|-----|-----------|-------------|
| ICN-AMPEL360-S1-00028-0010-001-A | H2-CRYO-001 | Cryogenic Hazard |
| ICN-AMPEL360-S1-00028-0010-002-A | H2-FLAM-001 | Flammable H₂ |
| ICN-AMPEL360-S1-00028-0010-003-A | H2-PRES-001 | High Pressure |
| ICN-AMPEL360-S1-00028-0010-004-A | H2-ASPH-001 | Asphyxiation Risk |
| ICN-AMPEL360-S1-00028-0010-005-A | H2-BOIL-001 | Boil-Off Warning |
| ICN-AMPEL360-S1-00028-0010-006-A | H2-LEAK-001 | Leak Detection |
| ICN-AMPEL360-S1-00028-0010-007-A | H2-VENT-001 | Venting Active |

## 5. Integration Points

### 5.1 S1000D Data Modules
All graphics referenced via ICN entity declarations.

### 5.2 Terminology Database
Symbol IDs linked to glossary terms.

### 5.3 Display Systems
ICN files exported to avionics display repositories.

## 6. File Format Standards

### 6.1 SVG (Primary)
- Viewport: 100×100 units
- Stroke width: Minimum 2 units
- Text converted to paths
- Metadata with title, description, identifier

### 6.2 PNG (Fallback)
- 1x: 64×64 px
- 2x: 128×128 px (@2x suffix)
- 3x: 192×192 px (@3x suffix)

## 7. Workflow

```
Source (.ai/.svg) → Review → Approved → Published (ICN)
     ↓                ↓          ↓            ↓
LC03/source    LC03/review  LC03/approved  PUB/CSDB/ICN/
```

## 8. Change Control

### 8.1 New Symbol
1. Create in source/
2. Submit CR to CCB
3. CCB review
4. Approval → Move to approved/
5. Generate ICN
6. Update _index.csv

### 8.2 Symbol Modification
1. Increment variant (A→B)
2. Generate new ICN
3. Previous variant retained

## 9. Embedded TBDs

[TBD-00-00-003-ICD-003-001] Final graphic design by certified human factors specialist  
**Impact:** CLASS II  
**Spawns:** KNU-00-00-003-PUB-002 (Final Symbol Design Package)  
**Note:** Current SVGs are geometric placeholders. Production symbols require:
  - Human factors specialist design
  - Pilot usability testing
  - Certification evidence package

## 10. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-003-ICD-002 | AI/ML Symbol Specification |
| KNU-00-00-003-ANA-001 | Warning Standards Gap Analysis |
| KNU-00-00-003-ICD-001 | H₂ Hazard Symbol Library |

| Traced From | Artifact |
|-------------|----------|
| KNOT-00-00-003 | Parent KNOT |
| TBD-00-00-003-ICD-001-001 | AI/ML symbol TBD (RESOLVED) |

## 11. Validation

### 11.1 SVG Validation
- Well-formed XML
- Valid viewBox
- No external dependencies
- Metadata complete

### 11.2 Registry Validation
- All ICNs match filename pattern
- No duplicate ICNs
- All source files referenced
- Status values valid

### 11.3 Cross-Reference Validation
- All ICN links resolve
- Symbol IDs match between files
- ATA chapters/sections valid

## 12. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-13 | STK_PUB | Initial ICN repository specification |

## 13. References
- [ICN_SPECIFICATION.md](../../PUB/CSDB/ICN/ICN_SPECIFICATION.md) - Detailed naming conventions
- [_index.csv](../../PUB/CSDB/ICN/_index.csv) - Master symbol registry
- [KNU-00-00-003-ICD-002](./KNU-00-00-003-ICD-002_aiml-indication-symbols.md) - AI/ML symbols
- [KNU-00-00-003-ICD-001](./KNU-00-00-003-ICD-001_h2-hazard-symbol-library.md) - H₂ symbols
