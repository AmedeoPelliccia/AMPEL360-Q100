---
ssot:
  ata:
    chapter: "06"
    title: "DIMENSIONS AND AREAS"
    section: "10"
    subject: "ZONING"
    subsubject: "00"
    name: "GENERAL"
  domain: "SSOT"
  lifecycle_owner: "LC02_SYSTEM_REQUIREMENTS"
  knu_id: "KNU-ATA06-10-00-001-REQ-001"
  parent_knot: "KNOT-ATA06-10-00-001"
  downstream:
    - "KNU-ATA06-10-00-001-DES-002"
    - "KNU-ATA06-10-00-001-DES-001"
---

# TLAR Input — ATA 06-10-00 Zoning General

## 1. Purpose

Formalize the **Top-Level Aircraft Requirements (TLAR)** as a normative input to the ATA 06 zoning scheme. This document captures the TLAR constraints that govern geometry, dimensional envelopes, and functional zone allocation for the AMPEL360 Q100 BWB configuration.

## 2. Role

- Primary normative source of aircraft-level requirements.
- Defines limits, objectives, and constraints governing the global geometry.
- KNOT parent: logical root of all zoning requirements.

## 3. TLAR Constraints Relevant to ATA 06

### 3.1 Dimensional Envelopes

| Parameter              | Constraint             | Source        |
|------------------------|------------------------|---------------|
| Overall length         | ≤ TBD m                | TLAR-DIM-001  |
| Effective BWB span     | ≤ TBD m (ICAO Code E)  | TLAR-DIM-002  |
| Maximum height         | ≤ TBD m                | TLAR-DIM-003  |
| Centerbody width       | ≥ TBD m (cabin abreast) | TLAR-DIM-004 |

### 3.2 Mandatory Functional Zones

| Zone Function          | TLAR Reference | Zoning Impact                          |
|------------------------|----------------|----------------------------------------|
| Flight deck            | TLAR-FUNC-010  | Zone range 100–109                     |
| Passenger cabin        | TLAR-FUNC-020  | Zone range 200–249                     |
| Cargo / underfloor     | TLAR-FUNC-030  | Zone range 250–299                     |
| Propulsion modules     | TLAR-FUNC-040  | Zone range 500–599                     |
| LH₂ cryogenic storage  | TLAR-FUNC-050  | Zone range 600–699 (hazard-tagged)     |
| Landing gear bays      | TLAR-FUNC-060  | Zone range 700–799                     |

### 3.3 Regulatory Constraints

| Regulation     | Requirement                              | Zoning Impact                     |
|----------------|------------------------------------------|-----------------------------------|
| CS-25.831      | Ventilation / pressurization boundaries  | Zone boundary placement           |
| CS-25.853      | Fire protection compartments             | Hazard overlay tagging            |
| CS-25.1309     | System safety zone segregation           | EWIS / HV zone separation         |
| CS-25.981      | Fuel system lightning protection         | LH₂ zone hazard constraints       |
| CS-25 Amdt 27  | Crashworthiness zones                    | Structural zone boundaries        |

## 4. Impact on ATA 06

- Establishes dimensional envelopes (length, effective BWB span, heights).
- Defines mandatory functional zones (flight deck, cabin, propulsion, LH₂).
- Fixes regulatory constraints affecting zoning (CS-25, safety, access).

## 5. KNOT/KNU Relationship

| Attribute        | Value                                |
|------------------|--------------------------------------|
| KNU ID           | KNU-ATA06-10-00-001-REQ-001         |
| Parent KNOT      | KNOT-ATA06-10-00-001                |
| Artifact Type    | REQ                                  |
| LC Phase         | LC02                                 |
| Role             | Upstream normative input             |
| Downstream KNUs  | KNU-ATA06-10-00-001-DES-002 (BWB Geometry) → KNU-ATA06-10-00-001-DES-001 (Zoning Scheme) |

## 6. Governance

- Once accepted, TLAR constraints become **baseline contractual**.
- Any change to TLAR dimensional or functional requirements triggers a new KNU revision.
- Criticality: **HIGH** — changes cascade to BWB Geometry and Zoning.

## 7. Disclaimer

All content is synthetic demonstration data per repository policy.
