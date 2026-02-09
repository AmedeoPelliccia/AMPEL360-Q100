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
  sources:
    - type: "Requirements"
      location: "KDB/LM/SSOT/PLM/LC02_SYSTEM_REQUIREMENTS"
  knots:
    - "KNOT-ATA06-10-00-001"
---

# AMPEL360 Q100 — ATA 06-10 Zoning Scheme (SSOT)

## 1. Purpose
Define the canonical zoning scheme for the AMPEL360 Q100 BWB to support:
- component location and access definition
- zonal inspections / contamination control
- EWIS separation and zonal safety analysis inputs
- hazard overlay tagging (LH₂ / HV / hot / rotating)

## 2. Scope
Applies to the full aircraft including centerbody, integrated wing-body volumes, propulsion/power modules, LH₂ storage/distribution, landing gear bays, and external surfaces.

## 3. Definitions
- **Zone:** A bounded physical volume used for maintenance, safety, and access control.
- **Subzone:** A partition of a zone for vertical/lateral segmentation or hazard segregation.
- **Hazard tags:** SSOT labels used to drive safety rules and publication warnings.

## 4. Numbering Scheme (BWB-adapted)
Zone IDs use macro-ranges:
- 100–199 Forward centerbody / flight deck / avionics
- 200–299 Cabin / interior / underfloor centerbody
- 300–399 Left integrated wing-body
- 400–499 Right integrated wing-body
- 500–599 Propulsion & electric power modules
- 600–699 LH₂ cryogenic storage + distribution + venting
- 700–799 Landing gear / wheel wells / brakes
- 800–899 Access panels / servicing points
- 900–999 External surfaces / zonal items

**Left/Right convention:** 3xx = Left, 4xx = Right
**Subzone convention:** "-01 upper / -02 mid / -03 lower" where needed.

## 5. Authoritative registers
The zoning scheme is implemented via these SSOT registers:
- `ZONES_REGISTER.csv` (authoritative list of zones + boundaries + ownership)
- `ZONES_ACCESS_POINTS.csv` (panels/hatches/doors mapped to zones)
- `ZONES_HAZARD_TAGS.yaml` (hazard overlay tags and definitions)

## 6. Trace target rules (baseline intent)
- Target: Every zone maps to at least one access point OR has an explicit "NO_DIRECT_ACCESS" justification.
- Target: Every LH₂ and HV-relevant zone carries hazard tags (see hazard tag registry). Known gaps in demo/baseline registers shall be tracked and closed before validation use.
- Target: Publications (PUB) for validated configurations are generated from these registers only (no hand-edits).

## 7. Change control
Changes to zone IDs or boundaries require:
- update to registers + trace matrix
- closure evaluation for KNOT-ATA06-10-00-001
- downstream impact scan (EWIS, safety, access, maintenance tasks)

## 8. Disclaimer
All content is synthetic demonstration data per repository policy.
