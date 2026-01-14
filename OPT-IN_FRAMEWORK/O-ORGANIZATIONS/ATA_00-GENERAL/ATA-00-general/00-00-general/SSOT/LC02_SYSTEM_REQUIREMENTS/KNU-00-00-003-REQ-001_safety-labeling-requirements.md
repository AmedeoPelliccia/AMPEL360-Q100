# KNU-00-00-003-REQ-001 — Safety Labeling Requirements

**KNU ID:** KNU-00-00-003-REQ-001  
**KNOT Reference:** [KNOT-00-00-003](../LC01_PROBLEM_STATEMENT/README.md#knot-00-00-003) — Safety Labeling Standards  
**Artifact Class:** SSOT  
**KNU Type:** REQ  
**Version:** I01-R01  
**Status:** DRAFT  
**Owner:** STK_SAF  
**Due Date:** 2026-03-31  
**Effort Predicted:** 8 story points  

---

## 1. Purpose

This document defines the **requirements for safety labeling standards** across all AMPEL360 Q100 documentation and physical aircraft systems. The Q100 introduces hazards not covered by conventional aircraft warning standards, requiring extended safety labeling conventions.

### 1.1 Scope

| In-Scope | Out-of-Scope |
|----------|--------------|
| Warning/Caution/Note hierarchy and formatting | Specific hazard content per system (LC03 per ATA) |
| H₂-specific hazard symbol definitions | Physical placard manufacturing specifications |
| Severity classification and mapping | Emergency procedures content (ATA 05) |
| Color and typography standards | Training curriculum content (LC13) |
| Placement rules for documentation | Ground support equipment labels (I-axis) |
| S1000D integration requirements | Regulatory submission formatting |
| AI/ML decision indication standards | — |

### 1.2 Safety-Critical Context

The Q100 hydrogen-hybrid electric architecture introduces hazard categories with no prior art in commercial aviation:

| Hazard Category | Novel Aspects | Consequence Severity |
|-----------------|---------------|---------------------|
| **Cryogenic (LH₂)** | -253°C exposure, cold burns, material embrittlement | CATASTROPHIC to MAJOR |
| **Flammable Gas** | Wide flammability range (4–75%), low ignition energy | CATASTROPHIC |
| **Asphyxiation** | Oxygen displacement in confined spaces | CATASTROPHIC to HAZARDOUS |
| **High Voltage** | ±270 VDC and higher, arc flash | HAZARDOUS to MAJOR |
| **Pressure** | 350–700 bar storage, rapid decompression | CATASTROPHIC to HAZARDOUS |
| **AI/ML Decisions** | Autonomous actions, uncertainty in outputs | Context-dependent |

---

## 2. Applicable Documents

### 2.1 Governing Documents

| Document | Applicability |
|----------|---------------|
| ISO 7010 | Safety signs — Registered safety signs |
| ISO 3864-1 | Safety colours and safety signs — Design principles |
| ANSI Z535.4 | Product Safety Signs and Labels |
| SAE ARP4761 | Safety assessment process terminology |
| S1000D Issue 5.0 | Warning/Caution/Note markup |

### 2.2 Reference Documents

| Document | Applicability |
|----------|---------------|
| EASA CS-25.1541 | Markings and placards |
| EASA CS-25.1557 | Miscellaneous markings and placards |
| FAA 14 CFR 25.1541 | Markings and placards |
| ISO 21009 | Cryogenic vessels — Static vacuum insulated vessels |
| CGA S-1.3 | Pressure Relief Device Standards |
| SAE AIR 6988 | Artificial Intelligence in Aeronautical Systems |
| EASA AI Roadmap 2.0 | AI/ML guidance for aviation |

---

## 3. Requirements

### 3.1 General Safety Labeling Requirements

#### REQ-AMPEL-00-00-02-SAF-001:
**Old ID:** REQ-SAF-001   Safety Message Hierarchy
**Requirement:** All safety messages shall be classified into one of three levels, in descending order of severity:

| Level | Signal Word | Criteria |
|-------|-------------|----------|
| **WARNING** | WARNING | Indicates a hazardous situation that, if not avoided, could result in death or serious injury |
| **CAUTION** | CAUTION | Indicates a hazardous situation that, if not avoided, could result in minor or moderate injury, or property/equipment damage |
| **NOTE** | NOTE | Provides essential information for correct procedure execution; no injury hazard |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Aligns with ANSI Z535.4 and S1000D conventions |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-002:
**Old ID:** REQ-SAF-002   Severity Mapping
**Requirement:** Safety message levels shall map to SAE ARP4761 severity classifications:

| ARP4761 Severity | Safety Level | Color Code |
|------------------|--------------|------------|
| CATASTROPHIC | WARNING | Red |
| HAZARDOUS | WARNING | Red/Orange |
| MAJOR | CAUTION | Yellow |
| MINOR | CAUTION | Yellow |
| NO SAFETY EFFECT | NOTE | Blue/Neutral |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Consistent severity interpretation across safety and documentation |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-003:
**Old ID:** REQ-SAF-003   Consistent Formatting
**Requirement:** All safety messages of the same level shall use identical formatting throughout program documentation, regardless of publication type or ATA chapter.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents confusion from inconsistent appearance |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-004:
**Old ID:** REQ-SAF-004   Proximity Placement
**Requirement:** Safety messages shall appear immediately before the step or information to which they apply; they shall not be grouped at the beginning or end of a procedure unless they apply to the entire procedure.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Ensures visibility at point of hazard exposure |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-005:
**Old ID:** REQ-SAF-005   Language Clarity
**Requirement:** Safety message text shall:
- Use active voice and imperative mood
- State the hazard, the consequence, and the avoidance action
- Avoid jargon unless defined in the Program Glossary
- Follow ASD-STE100 Simplified Technical English where applicable

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Maximizes comprehension under stress |
| Verification | Review |
| Parent | KNOT-00-00-003 |

---

### 3.2 WARNING Requirements

#### REQ-AMPEL-00-00-02-SAF-010:
**Old ID:** REQ-SAF-010   WARNING Format
**Requirement:** WARNING messages shall include:

| Element | Requirement |
|---------|-------------|
| Signal Word | "WARNING" in bold uppercase |
| Border | Solid red border, minimum 2pt weight |
| Background | White or light background for contrast |
| Icon | Hazard-specific symbol (see §3.5) |
| Text | Hazard statement + consequence + avoidance action |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Maximum visibility for highest-severity hazards |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-011:
**Old ID:** REQ-SAF-011   WARNING Color Specification
**Requirement:** WARNING elements shall use the following colors:

| Element | Color | Specification |
|---------|-------|---------------|
| Signal Word | Safety Red | Pantone 485 C / RGB 218,41,28 / Hex #DA291C |
| Border | Safety Red | Pantone 485 C |
| Icon Background | Safety Red | Pantone 485 C |
| Icon Symbol | White | — |
| Text | Black | — |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | ISO 3864-1 and ANSI Z535 color standards |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-012:
**Old ID:** REQ-SAF-012   WARNING Minimum Size
**Requirement:** WARNING messages in printed documentation shall have:
- Signal word minimum height: 4.8mm (12pt)
- Body text minimum height: 2.5mm (7pt)
- Icon minimum size: 10mm × 10mm

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Legibility at normal reading distance |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

---

### 3.3 CAUTION Requirements

#### REQ-AMPEL-00-00-02-SAF-020:
**Old ID:** REQ-SAF-020   CAUTION Format
**Requirement:** CAUTION messages shall include:

| Element | Requirement |
|---------|-------------|
| Signal Word | "CAUTION" in bold uppercase |
| Border | Solid yellow/amber border, minimum 2pt weight |
| Background | White or light background |
| Icon | Hazard-specific symbol (optional for property-only damage) |
| Text | Hazard statement + consequence + avoidance action |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Distinguishes from WARNING while maintaining visibility |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-021:
**Old ID:** REQ-SAF-021   CAUTION Color Specification
**Requirement:** CAUTION elements shall use the following colors:

| Element | Color | Specification |
|---------|-------|---------------|
| Signal Word | Safety Yellow | Pantone 109 C / RGB 255,209,0 / Hex #FFD100 |
| Border | Safety Yellow | Pantone 109 C |
| Icon Background | Safety Yellow | Pantone 109 C |
| Icon Symbol | Black | — |
| Text | Black | — |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | ISO 3864-1 and ANSI Z535 color standards |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

---

### 3.4 NOTE Requirements

#### REQ-AMPEL-00-00-02-SAF-030:
**Old ID:** REQ-SAF-030   NOTE Format
**Requirement:** NOTE messages shall include:

| Element | Requirement |
|---------|-------------|
| Signal Word | "NOTE" in bold (uppercase or title case) |
| Border | Blue or neutral border, minimum 1pt weight |
| Background | Light blue or neutral background |
| Icon | Information symbol (optional) |
| Text | Essential information statement |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Distinguishes informational content from hazard warnings |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-031:
**Old ID:** REQ-SAF-031   NOTE Color Specification
**Requirement:** NOTE elements shall use the following colors:

| Element | Color | Specification |
|---------|-------|---------------|
| Signal Word | Safety Blue | Pantone 300 C / RGB 0,94,184 / Hex #005EB8 |
| Border | Safety Blue | Pantone 300 C |
| Icon Background | Safety Blue | Pantone 300 C |
| Icon Symbol | White | — |
| Text | Black | — |

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Common convention; may vary by publication type |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

---

### 3.5 H₂-Specific Hazard Symbols

#### REQ-AMPEL-00-00-02-SAF-040:
**Old ID:** REQ-SAF-040   Cryogenic Hazard Symbol
**Requirement:** Cryogenic hazards (LH₂ at -253°C) shall use a composite symbol:

| Element | Description |
|---------|-------------|
| Base | ISO 7010 W010 (Low temperature/freezing) — snowflake |
| Modifier | "H₂" subscript or adjacent text |
| Color | White symbol on blue circular background with white border |

**Application contexts:**
- LH₂ tank access
- Cryogenic line connections
- Cold zone entry
- Venting areas

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Distinguishes from generic cold hazards |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-041:
**Old ID:** REQ-SAF-041   Flammable Gas Hazard Symbol
**Requirement:** Hydrogen flammability hazards shall use:

| Element | Description |
|---------|-------------|
| Base | ISO 7010 W021 (Flammable material) — flame |
| Modifier | "H₂" subscript or "HYDROGEN" text |
| Color | Black symbol on yellow triangular background with black border |

**Application contexts:**
- Fuel system maintenance
- Leak detection zones
- Venting and purge operations
- Refueling areas

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Hydrogen has unique flammability characteristics (4–75% LEL-UEL) |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-042:
**Old ID:** REQ-SAF-042   Asphyxiation Hazard Symbol
**Requirement:** Oxygen displacement hazards shall use:

| Element | Description |
|---------|-------------|
| Symbol | Lungs or person with "X" or prohibition overlay |
| Modifier | "O₂" with down arrow or "LOW OXYGEN" text |
| Color | White symbol on blue circular background OR black on yellow triangle |

**Application contexts:**
- Enclosed spaces after H₂ release
- Tank interior entry
- Purge operations
- Confined maintenance areas

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | H₂ displaces oxygen without visible or olfactory indication |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-043:
**Old ID:** REQ-SAF-043   High Voltage Hazard Symbol
**Requirement:** Electrical hazards ≥50V DC or ≥30V AC RMS shall use:

| Element | Description |
|---------|-------------|
| Base | ISO 7010 W012 (Electricity) — lightning bolt |
| Modifier | Voltage value (e.g., "±270 VDC") where applicable |
| Color | Black symbol on yellow triangular background with black border |

**Additional requirement:** For voltages ≥270 VDC (Q100 main bus), the symbol shall include "HIGH VOLTAGE" text.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Electric propulsion voltages exceed conventional aircraft levels |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-044:
**Old ID:** REQ-SAF-044   Pressure Hazard Symbol
**Requirement:** High-pressure system hazards (>10 bar) shall use:

| Element | Description |
|---------|-------------|
| Base | ISO 7010 W029 (Pressurized cylinder) or custom pressure vessel symbol |
| Modifier | Pressure value (e.g., "700 bar") where applicable |
| Color | Black symbol on yellow triangular background with black border |

**Application contexts:**
- GH₂ storage systems
- Pressure relief devices
- Pneumatic accumulators

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | H₂ storage pressures far exceed conventional aircraft systems |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-045:
**Old ID:** REQ-SAF-045   Composite Hazard Symbols
**Requirement:** Where multiple hazards coexist, composite or grouped symbols shall be used:

| Combination | Treatment |
|-------------|-----------|
| Cryogenic + Flammable | Adjacent symbols with connecting bracket |
| Flammable + Asphyxiation | Stacked symbols with shared border |
| Electrical + Pressure | Adjacent symbols |

**Composite symbol requirements:**
- Individual symbols remain distinct (not merged)
- Most severe hazard symbol appears first (left or top)
- Minimum 2mm gap between symbols

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | H₂ systems often present multiple simultaneous hazards |
| Verification | Review |
| Parent | KNOT-00-00-003 |

---

### 3.6 AI/ML Decision Indication

#### REQ-AMPEL-00-00-02-SAF-050:
**Old ID:** REQ-SAF-050   AI/ML Output Indication
**Requirement:** When a procedure or display presents information derived from AI/ML inference, an indicator shall be provided:

| Element | Description |
|---------|-------------|
| Symbol | Neural network icon (interconnected nodes) or "AI" text badge |
| Color | Purple (Pantone 2685 C / Hex #7A2682) |
| Placement | Adjacent to AI-derived value or recommendation |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Operators must distinguish AI recommendations from deterministic outputs |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-051:
**Old ID:** REQ-SAF-051   AI Confidence Indication
**Requirement:** Where AI/ML outputs include confidence or uncertainty measures, these shall be displayed:

| Confidence Level | Indication |
|------------------|------------|
| High (>90%) | Green indicator or solid symbol |
| Medium (70–90%) | Yellow indicator or hatched symbol |
| Low (<70%) | Red indicator or outline-only symbol |

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Enables operator calibration of trust in AI outputs |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-052:
**Old ID:** REQ-SAF-052   AI Override Indication
**Requirement:** When an AI/ML system recommendation is overridden by crew action, documentation and displays shall indicate:
- That override occurred
- Who/what initiated the override
- Timestamp of override

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Traceability for safety investigation and learning assurance |
| Verification | Review |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-053:
**Old ID:** REQ-SAF-053   AI Limitation Warnings
**Requirement:** AI/ML systems operating outside their validated operational design domain (ODD) shall trigger a dedicated WARNING:

```
WARNING: AI SYSTEM OUTSIDE VALIDATED ENVELOPE
The [system name] is operating in conditions not covered by 
validation data. Outputs may be unreliable. Follow manual 
procedures in [reference].
```

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | EASA AI Roadmap requirement for runtime monitoring |
| Verification | Review |
| Parent | KNOT-00-00-003 |

---

### 3.7 S1000D Integration Requirements

#### REQ-AMPEL-00-00-02-SAF-060:
**Old ID:** REQ-SAF-060   S1000D Warning Markup
**Requirement:** WARNING messages in S1000D Data Modules shall use the `<warning>` element with appropriate `warningType` attribute:

```xml
<warning warningType="wt01">
  <warningAndCautionPara>
    Hazard statement. Consequence. Avoidance action.
  </warningAndCautionPara>
</warning>
```

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | S1000D schema compliance |
| Verification | BREX+CI |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-061:
**Old ID:** REQ-SAF-061   S1000D Caution Markup
**Requirement:** CAUTION messages in S1000D Data Modules shall use the `<caution>` element:

```xml
<caution cautionType="ct01">
  <warningAndCautionPara>
    Hazard statement. Consequence. Avoidance action.
  </warningAndCautionPara>
</caution>
```

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | S1000D schema compliance |
| Verification | BREX+CI |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-062:
**Old ID:** REQ-SAF-062   S1000D Note Markup
**Requirement:** NOTE messages in S1000D Data Modules shall use the `<note>` element:

```xml
<note noteType="nt01">
  <notePara>
    Essential information.
  </notePara>
</note>
```

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | S1000D schema compliance |
| Verification | BREX+CI |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-063:
**Old ID:** REQ-SAF-063   BREX Rules for Safety Messages
**Requirement:** The program BREX shall define validation rules for:
- Required elements within WARNING/CAUTION/NOTE
- Prohibited nesting of safety messages
- Maximum text length per message
- Required hazard type classification

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Automated quality control |
| Verification | Review |
| Downstream | KNU-00-00-003-PUB-001 |
| Parent | KNOT-00-00-003 |

---

### 3.8 Hazard Classification Requirements

#### REQ-AMPEL-00-00-02-SAF-070:
**Old ID:** REQ-SAF-070   Hazard Category Registry
**Requirement:** The program shall maintain a registry of hazard categories with:

| Field | Description |
|-------|-------------|
| Hazard ID | Unique identifier (e.g., HAZ-CRYO-001) |
| Category | Cryogenic / Flammable / Asphyxiation / Electrical / Pressure / AI |
| Severity | ARP4761 classification |
| Symbol | Reference to approved symbol |
| Standard Text | Pre-approved warning/caution text templates |
| ATA Applicability | Which chapters/systems use this hazard |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Ensures consistency across all publications |
| Verification | Review |
| Downstream | KNU-00-00-003-ICD-001 |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-071:
**Old ID:** REQ-SAF-071   Hazard-to-Symbol Mapping
**Requirement:** Each hazard category shall map to exactly one primary symbol; variations shall be documented in the symbol library.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents symbol proliferation and confusion |
| Verification | Review |
| Downstream | KNU-00-00-003-ICD-001 |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-072:
**Old ID:** REQ-SAF-072   New Hazard Approval Process
**Requirement:** Introduction of new hazard categories or symbols shall require:
- Safety assessment per ARP4761
- Symbol design per ISO 3864-1
- Review by STK_SAF
- Approval by STK_CERT
- Update to hazard registry

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents uncontrolled symbol creation |
| Verification | Review |
| Downstream | KNU-00-00-003-CM-001 |
| Parent | KNOT-00-00-003 |

---

### 3.9 Physical Placard Requirements

#### REQ-AMPEL-00-00-02-SAF-080:
**Old ID:** REQ-SAF-080   Placard-to-Documentation Alignment
**Requirement:** Safety messages on physical aircraft placards shall use identical symbols and signal words as the corresponding documentation.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents confusion between aircraft and manual |
| Verification | Inspection |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-081:
**Old ID:** REQ-SAF-081   Placard Durability Requirements
**Requirement:** Physical placards in hazardous environments shall meet:

| Environment | Requirement |
|-------------|-------------|
| Cryogenic zones | Rated to -260°C |
| UV exposure | 10-year UV resistance |
| Fuel exposure | Chemical resistance per fluid list |
| Abrasion | ASTM D4060 Class 1 |

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Placards must remain legible throughout service life |
| Verification | Test |
| Parent | KNOT-00-00-003 |

#### REQ-AMPEL-00-00-02-SAF-082:
**Old ID:** REQ-SAF-082   Multi-Language Placards
**Requirement:** Physical placards in crew-accessible areas shall include:
- English (primary)
- Symbols (universal)
- Additional languages per operator requirement (configurable)

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | International operations |
| Verification | Review |
| Parent | KNOT-00-00-003 |

---

## 4. Requirements Summary

### 4.1 Requirements Count

| Category | MUST | SHOULD | MAY | Total |
|----------|------|--------|-----|-------|
| General | 5 | 0 | 0 | 5 |
| WARNING | 3 | 0 | 0 | 3 |
| CAUTION | 2 | 0 | 0 | 2 |
| NOTE | 1 | 1 | 0 | 2 |
| H₂ Symbols | 5 | 1 | 0 | 6 |
| AI/ML | 3 | 1 | 0 | 4 |
| S1000D | 4 | 0 | 0 | 4 |
| Classification | 3 | 0 | 0 | 3 |
| Physical Placards | 1 | 2 | 0 | 3 |
| **Total** | **27** | **5** | **0** | **32** |

### 4.2 Symbol Summary

| Hazard | Symbol Base | Modifier | Color |
|--------|-------------|----------|-------|
| Cryogenic | ISO 7010 W010 | H₂ | Blue/White |
| Flammable | ISO 7010 W021 | H₂ | Yellow/Black |
| Asphyxiation | Custom (lungs) | O₂↓ | Blue or Yellow |
| High Voltage | ISO 7010 W012 | Voltage | Yellow/Black |
| Pressure | ISO 7010 W029 | Pressure | Yellow/Black |
| AI/ML | Neural network | AI | Purple |

---

## 5. Traceability

### 5.1 Upstream Traceability

| Source | Trace |
|--------|-------|
| KNOT-00-00-003 | Problem statement: H₂ hazards not covered by conventional standards |
| ISO 7010 | Safety sign design principles |
| ISO 3864-1 | Color and format requirements |
| ANSI Z535.4 | Product safety label structure |
| SAE ARP4761 | Severity classification |
| EASA AI Roadmap | AI/ML indication requirements |

### 5.2 Downstream Traceability

| Target | Trace |
|--------|-------|
| KNU-00-00-003-ICD-001 | H₂ Hazard Symbol Library |
| KNU-00-00-003-ANA-001 | Warning Standards Gap Analysis |
| KNU-00-00-003-CM-001 | Safety Label Configuration Index |
| KNU-00-00-003-PUB-001 | Safety Labeling Standard DM |
| All T-axis LC03 | System-specific hazard analyses use these standards |

---

## 6. Verification Matrix

| REQ ID | Method | Responsible | Evidence |
|--------|--------|-------------|----------|
| REQ-SAF-001 | Review | STK_SAF | Hierarchy documented |
| REQ-SAF-002 | Review | STK_SAF | Mapping table approved |
| REQ-SAF-003 | Inspection | STK_PUB | Format consistency |
| REQ-SAF-004 | Review | STK_SAF | Placement rules followed |
| REQ-SAF-005 | Review | STK_CM | STE compliance |
| REQ-SAF-010 | Inspection | STK_PUB | WARNING format check |
| REQ-SAF-011 | Inspection | STK_PUB | Color specification |
| REQ-SAF-012 | Inspection | STK_PUB | Size measurement |
| REQ-SAF-020 | Inspection | STK_PUB | CAUTION format check |
| REQ-SAF-021 | Inspection | STK_PUB | Color specification |
| REQ-SAF-030 | Inspection | STK_PUB | NOTE format check |
| REQ-SAF-031 | Inspection | STK_PUB | Color specification |
| REQ-AMPEL-00-00-02-SAF-040–044 | Review | STK_SAF | Symbol library review |
| REQ-SAF-045 | Review | STK_SAF | Composite rules |
| REQ-AMPEL-00-00-02-SAF-050–053 | Review | STK_AI | AI indication review |
| REQ-AMPEL-00-00-02-SAF-060–063 | BREX+CI | STK_PUB | S1000D validation |
| REQ-AMPEL-00-00-02-SAF-070–072 | Review | STK_SAF | Registry completeness |
| REQ-AMPEL-00-00-02-SAF-080–082 | Inspection/Test | STK_SAF | Placard verification |

---

## 7. Open Items

### 7.1 TBDs

| TBD ID | Description | Owner | Target Date |
|--------|-------------|-------|-------------|
| TBD-SAF-001 | Final AI/ML symbol design selection | STK_AI | 2026-03-01 |
| TBD-SAF-002 | Placard durability test specification | STK_SAF | 2026-03-15 |

### 7.2 TBRs

| TBR ID | Description | Owner | Target Date |
|--------|-------------|-------|-------------|
| TBR-SAF-001 | Review composite symbol rules with certification | STK_CERT | 2026-02-28 |
| TBR-SAF-002 | Confirm AI confidence thresholds | STK_AI | 2026-03-10 |

---

## 8. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| I01-R01 | 2026-01-12 | STK_SAF | Initial release |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-00-00-003-REQ-001 defines safety labeling requirements addressing KNOT-00-00-003.*
