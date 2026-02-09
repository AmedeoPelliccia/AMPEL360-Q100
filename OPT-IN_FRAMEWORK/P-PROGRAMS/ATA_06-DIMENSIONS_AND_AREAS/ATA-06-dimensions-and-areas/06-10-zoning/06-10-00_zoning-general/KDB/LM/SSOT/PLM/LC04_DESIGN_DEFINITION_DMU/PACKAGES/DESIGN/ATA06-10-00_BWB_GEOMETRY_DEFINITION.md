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
  lifecycle_owner: "LC04_DESIGN_DEFINITION_DMU"
  knu_id: "KNU-ATA06-10-00-001-DES-002"
  parent_knot: "KNOT-ATA06-10-00-001"
  upstream:
    - "KNU-ATA06-10-00-001-REQ-001"
  downstream:
    - "KNU-ATA06-10-00-001-DES-001"
---

# BWB Geometry Definition — ATA 06-10-00 Zoning General

## 1. Purpose

Formalize the **BWB Geometry Definition** as a direct design input to the ATA 06 zoning scheme. This document translates TLAR dimensional and functional constraints into a concrete geometric description of the AMPEL360 Q100 Blended Wing Body configuration, providing the physical basis for stable Zone ID assignment.

## 2. Role

- Concrete geometric translation of TLAR for the BWB configuration.
- Physical basis for any stable zonal numbering.
- Direct input to KNU-ATA06-10-00-001-DES-001 (Zoning Scheme).

## 3. Principal Volumes

### 3.1 Centerbody

| Volume              | Span Station Range | Vertical Split         | Zone Range |
|---------------------|--------------------|------------------------|------------|
| Flight deck         | FS 0 – FS TBD     | Upper                  | 100–109    |
| Avionics bay        | FS 0 – FS TBD     | Lower                  | 110–119    |
| Forward cabin       | FS TBD – FS TBD   | Upper                  | 200–219    |
| Aft cabin           | FS TBD – FS TBD   | Upper                  | 220–249    |
| Underfloor cargo    | FS TBD – FS TBD   | Lower                  | 250–279    |
| Underfloor systems  | FS TBD – FS TBD   | Lower                  | 280–299    |

### 3.2 Integrated Wings

| Volume                | Side  | Span Station Range | Zone Range |
|-----------------------|-------|--------------------|------------|
| Left inner wing-body  | Left  | SS TBD – SS TBD    | 300–329    |
| Left outer wing-body  | Left  | SS TBD – SS TBD    | 330–369    |
| Left wing tip         | Left  | SS TBD – SS TBD    | 370–399    |
| Right inner wing-body | Right | SS TBD – SS TBD    | 400–429    |
| Right outer wing-body | Right | SS TBD – SS TBD    | 430–469    |
| Right wing tip        | Right | SS TBD – SS TBD    | 470–499    |

### 3.3 Propulsion & Power Modules

| Volume                    | Location           | Zone Range |
|---------------------------|--------------------|------------|
| Left propulsion module    | Aft centerbody L   | 500–529    |
| Right propulsion module   | Aft centerbody R   | 530–559    |
| Electric power module     | Aft centerbody C   | 560–599    |

### 3.4 LH₂ Cryogenic Storage & Distribution

| Volume                    | Location           | Zone Range |
|---------------------------|--------------------|------------|
| Primary LH₂ tank(s)      | Centerbody lower   | 600–639    |
| LH₂ distribution lines   | Various            | 640–669    |
| LH₂ venting / relief     | Upper aft          | 670–699    |

### 3.5 Landing Gear & Wheel Wells

| Volume                    | Location           | Zone Range |
|---------------------------|--------------------|------------|
| Nose gear bay             | Forward lower      | 700–719    |
| Left main gear bay        | Left wing-body     | 720–749    |
| Right main gear bay       | Right wing-body    | 750–779    |
| Auxiliary / tail gear     | Aft lower          | 780–799    |

## 4. Splits and Conventions

### 4.1 Left / Right Split

- **3xx** = Left-side volumes; **4xx** = Right-side mirrored volumes.
- Centerbody volumes (1xx, 2xx) straddle aircraft centerline.

### 4.2 Vertical Split (Subzone Convention)

- **-01** = Upper deck / upper volume
- **-02** = Mid deck / mid volume
- **-03** = Lower deck / lower volume

### 4.3 Structural Interfaces

| Interface                 | Between                     | Zoning Boundary Impact          |
|---------------------------|-----------------------------|---------------------------------|
| Centerbody–wing junction  | 2xx ↔ 3xx/4xx              | Primary zone boundary           |
| Upper–lower deck floor    | xxy-01 ↔ xxy-03            | Vertical subzone split          |
| Pressure bulkhead (fwd)   | 1xx ↔ external              | Zone 100 forward limit          |
| Pressure bulkhead (aft)   | 2xx ↔ 5xx/6xx              | Aft centerbody boundary         |
| Fire wall (propulsion)    | 5xx ↔ adjacent zones        | Hazard zone boundary            |
| Cryogenic barrier         | 6xx ↔ adjacent zones        | LH₂ hazard zone boundary       |

## 5. Impact on ATA 06

- Enables coherent, unambiguous Zone ID assignment.
- Defines real zone boundaries used by:
  - S1000D applicability blocks
  - Safety & hazard zoning (EWIS, LH₂)
  - Accessibility and maintenance planning

## 6. KNOT/KNU Relationship

| Attribute        | Value                                |
|------------------|--------------------------------------|
| KNU ID           | KNU-ATA06-10-00-001-DES-002         |
| Parent KNOT      | KNOT-ATA06-10-00-001                |
| Artifact Type    | DES                                  |
| LC Phase         | LC04                                 |
| Upstream KNU     | KNU-ATA06-10-00-001-REQ-001 (TLAR)  |
| Downstream KNU   | KNU-ATA06-10-00-001-DES-001 (Zoning Scheme) |
| Role             | Freezes minimum geometry for stable Zone IDs |

## 7. Governance

- Once accepted, BWB geometry becomes **baseline contractual** together with TLAR.
- Any change to geometry triggers:
  - New KNU revision (KNU-ATA06-10-00-001-DES-002 rev).
  - Downstream impact on zoning scheme (KNU-ATA06-10-00-001-DES-001).
- Criticality: **HIGH**.

## 8. Disclaimer

All content is synthetic demonstration data per repository policy.
