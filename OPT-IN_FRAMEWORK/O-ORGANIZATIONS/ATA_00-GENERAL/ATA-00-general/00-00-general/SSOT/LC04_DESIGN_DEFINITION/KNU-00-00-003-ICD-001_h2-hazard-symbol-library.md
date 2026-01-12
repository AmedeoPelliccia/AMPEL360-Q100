---
knu_id: KNU-00-00-003-ICD-001
knot_id: KNOT-00-00-003
title: H₂ Hazard Symbol Library
type: ICD
artifact_class: SSOT
status: GENERATED
owner: STK_SAF
due_date: 2026-04-15
priority: HIGH
lifecycle_stage: LC04_DESIGN_DEFINITION
ata_chapter: "00"
ata_section: "00"
program: AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft
version: I001-R00
date_created: 2026-01-12
spawned_by: BASELINE
related_tbds:
  - TBD-00-00-003-ICD-001-001
  - TBD-00-00-003-ICD-001-002
triggered_knus:
  - KNU-00-00-003-ICD-002
  - KNU-00-00-003-TEST-001
hazard_symbols:
  - H2-CRYO-001
  - H2-FLAM-001
  - H2-PRES-001
  - H2-ASPH-001
  - H2-HVDC-001
---

# KNU-00-00-003-ICD-001: H₂ Hazard Symbol Library

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-00-00-003-ICD-001 |
| **KNOT ID** | KNOT-00-00-003 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_SAF |
| **Due Date** | 2026-04-15 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |

---

## Purpose

This Interface Control Document specifies the H₂-specific hazard symbols, warning placards, and safety labeling standards for the AMPEL360 Q100 hydrogen-hybrid aircraft. It defines symbol specifications, placement rules, and S1000D integration methods for all hydrogen-related hazards.

---

## H₂-Specific Hazard Symbols

### Cryogenic Burn Hazard

**Symbol ID:** `H2-CRYO-001`

**ISO Standard:** ISO 7010:W023 (Low temperature/freezing conditions)

**Visual Specification:**
- **Color Scheme:** Blue background, white symbol
- **Symbol:** Snowflake or hand with ice crystals
- **Border:** White border, 5mm width

**Usage Locations:**
- LH₂ storage tanks (inner and outer surfaces)
- Cryogenic transfer lines
- LH₂ fill ports and service panels
- Ground equipment interfaces
- Maintenance access panels

**Hazard Parameters:**
- **Temperature:** -253°C (-423°F) at atmospheric pressure
- **Consequence:** Severe cold burns, tissue damage, frostbite within seconds
- **Severity:** CATASTROPHIC
- **Exposure Limit:** <1 second direct contact

**Warning Text:**
```
DANGER — CRYOGENIC LIQUID

Extremely cold. Contact causes severe burns and frostbite.

REQUIRED PPE:
• Insulated cryogenic gloves (minimum rating: -200°C)
• Face shield with full face protection
• Cryogenic apron
• Safety shoes with metatarsal guards

DO NOT touch piping, valves, or surfaces with bare skin.
Seek immediate medical attention if contact occurs.
```

---

### Flammable Gas Hazard

**Symbol ID:** `H2-FLAM-001`

**ISO Standard:** ISO 7010:W021 (Flammable material)

**Visual Specification:**
- **Color Scheme:** Red background, white flame symbol
- **Symbol:** Stylized flame
- **Border:** White border, 5mm width

**Usage Locations:**
- GH₂ distribution lines and manifolds
- Fuel cell ventilation systems
- Hydrogen vent stacks
- Pressure relief valves
- Fuel cell compartments

**Hazard Parameters:**
- **Flammability Range:** 4-75% by volume in air (extremely wide)
- **Ignition Energy:** 0.02 mJ (very low — static discharge can ignite)
- **Flame Temperature:** Up to 2,045°C (3,713°F)
- **Consequence:** Fire, explosion, thermal injury
- **Severity:** CATASTROPHIC

**Warning Text:**
```
DANGER — FLAMMABLE GAS

Extremely flammable. Wide flammability range (4-75% in air).
Ignites with minimal energy (0.02 mJ).

REQUIRED PRECAUTIONS:
• NO ignition sources within 15 meters
• NO smoking, open flames, or hot work
• Ensure adequate ventilation (minimum 10 air changes/hour)
• Use explosion-proof electrical equipment only
• Ground all equipment to prevent static discharge

In case of leak: Evacuate area, eliminate ignition sources,
ventilate thoroughly. DO NOT attempt repairs while pressurized.
```

---

### High Pressure Hazard

**Symbol ID:** `H2-PRES-001`

**ISO Standard:** ISO 7010:W029 (Compressed gas)

**Visual Specification:**
- **Color Scheme:** Yellow background, black symbol
- **Symbol:** Gas cylinder with pressure lines
- **Border:** Black border, 5mm width

**Usage Locations:**
- Type III (350 bar) and Type IV (700 bar) storage vessels
- High-pressure distribution manifolds
- Pressure regulators and control valves
- Refueling receptacles
- Pressure relief device (PRD) discharge areas

**Hazard Parameters:**
- **Pressure Range:** 350 bar (5,075 psi) to 700 bar (10,150 psi)
- **Stored Energy:** Up to 4.5 MJ per kg of hydrogen
- **Consequence:** Rapid decompression, projectile hazard, blast injury
- **Severity:** CATASTROPHIC
- **Fragment Distance:** Up to 500 meters if vessel ruptures

**Warning Text:**
```
DANGER — HIGH PRESSURE GAS

Compressed to 350-700 bar (5,075-10,150 psi).
Rapid release can cause severe injury or death.

REQUIRED PROCEDURES:
• Follow depressurization procedures before maintenance
• Use pressure gauges to verify zero pressure
• Never attempt to repair pressurized components
• Stand clear of PRD discharge paths
• Wear appropriate PPE during servicing

PROJECTILE HAZARD: Vessel or component failure can
propel fragments up to 500 meters. Maintain exclusion zones.
```

---

### Asphyxiation Hazard

**Symbol ID:** `H2-ASPH-001`

**ISO Standard:** ISO 7010:W041 (Oxygen deficiency)

**Visual Specification:**
- **Color Scheme:** Blue background, white symbol
- **Symbol:** Person with crossed-out lungs or breathing symbol
- **Border:** White border, 5mm width

**Usage Locations:**
- Confined spaces (fuel cell compartments, cargo holds)
- Maintenance areas with poor ventilation
- Ground equipment service bays
- Battery/fuel cell enclosures
- Below-deck storage areas

**Hazard Parameters:**
- **Mechanism:** Oxygen displacement (H₂ is lighter than air, rises and accumulates at high points)
- **Oxygen Deficiency:** <19.5% O₂ causes impairment
- **Consequence:** Loss of consciousness, asphyxiation, death
- **Severity:** CATASTROPHIC
- **Onset Time:** Seconds to minutes depending on concentration

**Warning Text:**
```
DANGER — ASPHYXIATION HAZARD

Hydrogen displaces oxygen in confined spaces.
Oxygen deficiency (<19.5%) causes unconsciousness and death.

REQUIRED PRECAUTIONS:
• Use portable O₂ monitor (alarm set at 19.5% O₂)
• Ensure adequate ventilation before entry
• Follow confined space entry procedures
• Use buddy system — never enter alone
• Have rescue plan and equipment ready

HYDROGEN RISES: Check ceiling areas and high points.
Symptoms: Dizziness, rapid breathing, confusion, loss of
consciousness. Exit immediately if symptoms occur.
```

---

### High Voltage Hazard

**Symbol ID:** `H2-HVDC-001`

**ISO Standard:** ISO 7010:W012 (Electrical hazard)

**Visual Specification:**
- **Color Scheme:** Yellow background, black lightning bolt
- **Symbol:** Lightning bolt within triangle
- **Border:** Black border, 5mm width

**Usage Locations:**
- Fuel cell stacks and power modules
- High-voltage DC bus bars
- Electric motor controllers
- Power distribution units
- Battery management systems

**Hazard Parameters:**
- **Voltage Range:** ±270 VDC to ±540 VDC (fuel cell system)
- **Current Capacity:** Up to 1,000 amperes
- **Consequence:** Electric shock, cardiac arrest, arc flash burns
- **Severity:** HAZARDOUS to CATASTROPHIC (voltage-dependent)
- **Arc Flash Energy:** Up to 40 cal/cm²

**Warning Text:**
```
DANGER — HIGH VOLTAGE

Voltages exceed 270 VDC. Risk of severe electric shock.

REQUIRED PRECAUTIONS:
• De-energize before maintenance (LOTO procedures)
• Verify zero voltage with calibrated meter
• Use insulated tools (1000V rated minimum)
• Wear appropriate arc-rated PPE (NFPA 70E)
• Maintain approach distances per NFPA 70E
• Only qualified electricians may service

LETHAL VOLTAGE: Contact can cause cardiac arrest.
DC shock "locks on" — victim cannot release.
ARC FLASH HAZARD: Can cause severe burns and ignition.
```

---

## Symbol Specifications

### Vector Format

**File Format:** SVG (Scalable Vector Graphics)
- **Advantage:** Infinite scalability without quality loss
- **Specification:** SVG 1.1 or 2.0
- **Color Profile:** sRGB for digital, CMYK for print
- **Stroke Width:** Minimum 2px at base scale

**Raster Format (for legacy systems):** PNG
- **Minimum Resolution:** 300 DPI for print, 150 DPI for screen
- **Size:** 1024×1024 pixels minimum
- **Transparency:** Alpha channel supported
- **Compression:** Lossless PNG compression

**Color Profiles:**
- **Digital Display:** sRGB IEC61966-2.1
- **Print:** ISO Coated v2 (CMYK)
- **Color Accuracy:** ΔE < 2.0 (perceptual difference)

---

### Placement Rules

**Minimum Physical Size:**
- **Primary Warning:** 100mm × 100mm (4" × 4")
- **Secondary Warning:** 50mm × 50mm (2" × 2")
- **Minimum:** 25mm × 25mm (1" × 1") for space-constrained areas

**Visibility Requirements:**
- **Distance:** Legible from 5 meters (16.4 feet) minimum
- **Lighting:** Visible under normal cabin lighting (300-500 lux)
- **Contrast Ratio:** Minimum 7:1 (WCAG AAA standard)
- **Durability:** Resistant to UV, chemicals, abrasion (per ATA standards)

**Multiple Hazard Placement:**
- **Stacking:** Vertical stack, most severe hazard on top
- **Hierarchy:** CATASTROPHIC > HAZARDOUS > MAJOR
- **Spacing:** 10mm vertical gap between symbols
- **Alignment:** Center-aligned within placard

**Example Multi-Hazard Placard:**
```
┌─────────────────┐
│  H2-CRYO-001    │ ← Cryogenic (top)
├─────────────────┤
│  H2-FLAM-001    │ ← Flammable (middle)
├─────────────────┤
│  H2-PRES-001    │ ← Pressure (bottom)
└─────────────────┘
```

---

### S1000D Integration

**XML Markup Example:**
```xml
<warningAndCautionPara>
  <warningAndCautionType>warning</warningAndCautionType>
  <warningAndCautionInfo>
    <graphic>
      <symbol symbolicIdentifier="H2-CRYO-001"/>
    </graphic>
    <para>
      DANGER — CRYOGENIC LIQUID
      <randomList>
        <listItem>
          <para>Extremely cold. Contact causes severe burns and frostbite.</para>
        </listItem>
        <listItem>
          <para>Use insulated gloves and face protection.</para>
        </listItem>
      </randomList>
    </para>
  </warningAndCautionInfo>
</warningAndCautionPara>
```

**Common Information Repository (CIR) Entry:**
```xml
<commonRepository>
  <symbol id="H2-CRYO-001">
    <symbolTitle>Cryogenic Burn Hazard</symbolTitle>
    <symbolIdent symbolicIdentifier="H2-CRYO-001"/>
    <symbolGraphic>
      <graphic infoEntityIdent="ICN-H2-CRYO-001-001"/>
    </symbolGraphic>
    <symbolDefinition>
      <para>Warning symbol for liquid hydrogen cryogenic hazards.</para>
    </symbolDefinition>
  </symbol>
</commonRepository>
```

**Graphic ICN (Identification and Classification Number):**
```xml
<graphic infoEntityIdent="ICN-H2-CRYO-001-001">
  <graphicFormat>svg</graphicFormat>
  <hotspot>
    <hotspotIntent>zoom</hotspotIntent>
    <hotspotCoords coordType="xy" x="50" y="50"/>
  </hotspot>
</graphic>
```

---

## Potential TBDs

The following uncertainties have been identified and require resolution:

### [TBD-00-00-003-ICD-001-001] AI/ML Decision Indication Symbol

**Description:** Define symbol for AI/ML-assisted decisions (new category not in ISO 7010)

**Context:** Q100 uses AI for system health monitoring and predictive maintenance. Need symbol to indicate AI-driven recommendations.

**Proposed Symbol:**
- Neural network icon with decision arrow
- Color: Purple background, white symbol
- Usage: AI-driven diagnostics displays, automated fault isolation

**Impact:** Safety-critical — pilots must distinguish AI recommendations from human-verified data

**Classification:** CLASS I (safety-critical)

**Resolution Target:** 2026-03-01

---

### [TBD-00-00-003-ICD-001-002] Boil-Off Warning Symbol

**Description:** Combined cryogenic + flammable hazard symbol for LH₂ boil-off

**Context:** LH₂ boil-off creates unique dual hazard (cold vapor that is also flammable). Need dedicated symbol.

**Proposed Symbol:**
- Split symbol: Half blue (cryogenic), half red (flammable)
- Symbol: Snowflake + flame combined
- Usage: Vent stacks, boil-off recovery lines, pressure relief valves

**Impact:** Operational safety during ground operations and refueling

**Classification:** CLASS II (affects multiple procedures)

**Resolution Target:** 2026-04-01

---

## Triggered KNUs

The following KNUs are spawned by this ICD to address embedded TBDs:

### KNU-00-00-003-ICD-002: Symbol Asset Repository

**Purpose:** SVG/PNG files versioned in Git LFS

**Acceptance Criteria:**
- All symbols stored in SVG and PNG formats
- Version control via Git LFS for binary assets
- Automated rendering pipeline (SVG → PNG)
- Asset integrity checks (hash verification)

**Spawned By:** TBD-00-00-003-ICD-001-001

**Due Date:** 2026-04-20

---

### KNU-00-00-003-TEST-001: Symbol Visibility Test Protocol

**Purpose:** Visibility verified at 5m distance

**Acceptance Criteria:**
- Legibility tests at 5m, 10m, 15m distances
- Testing under various lighting conditions (300-1000 lux)
- Color contrast ratio measurements (≥7:1)
- Durability tests (UV exposure, chemical resistance, abrasion)

**Spawned By:** TBD-00-00-003-ICD-001-002

**Due Date:** 2026-04-25

---

## Traceability

### Satisfies Requirements

- **KNU-00-00-003-REQ-001:** Safety Labeling Requirements

### Verified By

- **KNU-00-00-003-TEST-001:** Symbol Visibility Test Protocol (to be created)

### Related Artifacts

- **KNU-00-00-003-ICD-002:** Symbol Asset Repository (to be created)
- **KNU-00-00-003-PUB-001:** Safety Labeling Standard DM

---

## References

### Standards

- **ISO 7010:2019:** Graphical symbols — Safety colours and safety signs
- **NFPA 70E:** Standard for Electrical Safety in the Workplace
- **ATA iSpec 2200:** Warnings, cautions, and notes standards
- **S1000D Issue 5.0:** Symbol and graphic specifications
- **WCAG 2.1:** Web Content Accessibility Guidelines (contrast ratios)

### Hydrogen Safety Standards

- **ISO 19880-5:** Gaseous hydrogen — Fueling stations — Part 5: Dispensers
- **SAE J2601:** Fueling Protocols for Light Duty Gaseous Hydrogen Surface Vehicles
- **NFPA 2:** Hydrogen Technologies Code

### Internal Documents

- **KNU-00-00-003-REQ-001:** Safety Labeling Requirements
- **KNU-00-00-003-PUB-001:** Safety Labeling Standard DM

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-12 | STK_SAF | Initial baseline - GENERATED |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_SAF and regulatory authorities

**Notes:** This ICD establishes the foundation for H₂ hazard communication on the AMPEL360 Q100 aircraft. All safety placards and warning labels must comply with these specifications. Symbol assets to be developed under KNU-00-00-003-ICD-002.
