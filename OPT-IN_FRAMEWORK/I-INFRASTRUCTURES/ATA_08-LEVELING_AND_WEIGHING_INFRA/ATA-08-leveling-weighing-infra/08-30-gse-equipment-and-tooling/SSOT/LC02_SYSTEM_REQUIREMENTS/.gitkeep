---
# ═══════════════════════════════════════════════════════════════════════════════
# KNU ARTIFACT METADATA
# ═══════════════════════════════════════════════════════════════════════════════
knu_id: "KNU-08-30-001-REQ-001"
knot_id: "KNOT-08-30-001"
title: "Jack Point Location Requirements"
knu_type: "REQ"
artifact_class: "SSOT"
lifecycle_category: "LC02"
rec: "LC02"
ata_reference: "08-30"
ata_address: "ATA-08-30-00-00"
expected_location: "../LC02_SYSTEM_REQUIREMENTS/"
status: "DRAFT"
version: "I01-R02"
priority: "HIGH"

# Ownership & Governance
owner_aor: "STK_GSE"
contributors:
  - "STK_SE"
  - "STK_SAF"
  - "STK_STR"
reviewers:
  - "STK_SE"
  - "STK_SAF"
approved_by: null
approval_date:  null

# Dates
created_date:  "2026-01-11"
due_date: "2026-03-15"
last_updated:  "2026-01-11"

# Acceptance & Verification
acceptance_criteria:  "Requirements traced to ATA 53/57 structural provisions; reviewed by STK_SE and STK_SAF"
verification_method: "Review"
effort_predicted: 8

# Traceability
parent_requirements:  []
child_requirements:  []
related_knots: 
  - "KNOT-53-00-001"  # Fuselage structural provisions
  - "KNOT-57-00-001"  # Wing structural provisions
related_knus: []
ata_traces:
  - "ATA-53"  # Fuselage
  - "ATA-57"  # Wings
  - "ATA-07"  # Lifting and Shoring
  - "ATA-08"  # Leveling and Weighing
  - "ATA-11"  # Placards and Markings

# Document Control
classification: "INTERNAL"
export_control:  "NONE"
canonical_hash: null
---

# Jack Point Location Requirements

**KNU ID:** KNU-08-30-001-REQ-001  
**KNOT:** KNOT-08-30-001  
**ATA Reference:** 08-30 (GSE Equipment and Tooling)  
**ATA Address:** ATA-08-30-00-00  
**Status:** DRAFT  
**Version:** I01-R02  
**Priority:** HIGH  

---

## 1. Purpose and Scope

### 1.1 Purpose

This document defines the **system-level requirements** for jack point locations on the AMPEL360 Q100 aircraft.  These requirements ensure: 

- Safe and stable aircraft jacking operations
- Compatibility with standard ground support equipment (GSE)
- Structural integrity during jacking loads
- Traceability to fuselage (ATA 53) and wing (ATA 57) structural provisions

### 1.2 Scope

| In Scope | Out of Scope |
|----------|--------------|
| Jack point locations (main gear, nose gear, wing) | Detailed structural analysis (see LC05) |
| Load capacity requirements | GSE equipment specifications |
| Interface geometry and tolerances | Operational procedures (see LC10) |
| Safety factors and load cases | Training materials (see LC13) |
| Accessibility requirements | Maintenance intervals |

### 1.3 Applicable Documents

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| CS-25.519 | Jacking and Tiedown Provisions | Regulatory basis |
| ISO 43:2016 | Aircraft Jacking Pads — Profiles, Dimensions, Clearances | Interface standard |
| SAE AS8091A | Aircraft Jacking Pad Adapters and Sockets | Design/installation standard |
| ATA iSpec 2200 Ch. 07 | Lifting and Shoring | Industry standard |
| ATA iSpec 2200 Ch. 08 | Leveling and Weighing | Industry standard |
| ATA iSpec 2200 Ch. 11 | Placards and Markings | Marking conventions |
| AMPEL360-STR-ICD-001 | Structural Interfaces Control Document | Parent ICD |
| AMPEL360-GSE-STD-001 | GSE Compatibility Standard | Design standard |

---

## 2. Requirements

### 2.1 General Requirements

#### REQ-08-30-001-GEN-001: Jack Point Provision

**Requirement:** The aircraft shall be provided with jack points that enable complete lifting of the aircraft clear of the ground for maintenance, inspection, and wheel/tire replacement operations.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Enable standard maintenance operations per ATA 07/08 |
| **Verification** | Inspection, Test |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a) |
| **Allocated To** | STK_STR, STK_GSE |

---

#### REQ-08-30-001-GEN-002: Jack Point Configuration

**Requirement:** The aircraft shall provide a minimum of four (4) primary jack points arranged to enable stable three-point or four-point jacking configurations.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Ensure redundancy and stability during jacking operations |
| **Verification** | Inspection |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a), ATA 07-10 |
| **Allocated To** | STK_STR |

---

#### REQ-08-30-001-GEN-003: Jack Point Identification

**Requirement:** All jack points shall be permanently marked with: 
- Jack point identification symbol per ATA placards/markings conventions (ATA 11)
- Maximum load capacity (in kg and lb)
- Jack adapter part number reference

| Attribute | Value |
|-----------|-------|
| **Rationale** | Prevent misidentification and overloading |
| **Verification** | Inspection |
| **Priority** | MUST |
| **Trace To** | ATA 11 |
| **Allocated To** | STK_GSE |

---

### 2.2 Location Requirements

#### REQ-08-30-001-LOC-001: Main Gear Jack Points

**Requirement:** Main gear jack points shall be located: 
- On the main landing gear support structure or adjacent fuselage/wing structure
- Accessible with landing gear in the extended position
- At a position enabling main wheel clearance of ≥150 mm when fully jacked

| Attribute | Value |
|-----------|-------|
| **Rationale** | Enable main gear maintenance and wheel replacement |
| **Verification** | Inspection, Analysis |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a), ATA 07-10-10 |
| **Allocated To** | STK_STR |
| **ATA Trace** | ATA 53 (fuselage structure), ATA 57 (wing structure) |

---

#### REQ-08-30-001-LOC-002: Nose Gear Jack Point

**Requirement:** A nose gear jack point shall be located:
- On the nose landing gear support structure or adjacent fuselage structure
- Forward of the aircraft center of gravity
- At a position enabling nose wheel clearance of ≥150 mm when fully jacked

| Attribute | Value |
|-----------|-------|
| **Rationale** | Enable nose gear maintenance and wheel replacement |
| **Verification** | Inspection, Analysis |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a), ATA 07-10-10 |
| **Allocated To** | STK_STR |
| **ATA Trace** | ATA 53 (fuselage structure) |

---

#### REQ-08-30-001-LOC-003: Wing Jack Points

**Requirement:** Wing jack points (if provided) shall be located:
- At or near the wing rear spar
- At a minimum distance of 40% semi-span from aircraft centerline
- Clear of control surface operating envelopes

| Attribute | Value |
|-----------|-------|
| **Rationale** | Enable wing-supported jacking for certain maintenance tasks |
| **Verification** | Inspection, Analysis |
| **Priority** | SHOULD |
| **Trace To** | ATA 07-10-10 |
| **Allocated To** | STK_STR |
| **ATA Trace** | ATA 57 (wing structure) |

---

#### REQ-08-30-001-LOC-004: Jack Point Accessibility

**Requirement:** All jack points shall be: 
- Accessible from ground level with standard GSE
- Clear of fuel vents, drains, and other hazardous interfaces
- Accessible without removal of fairings or panels (or with single-fastener access panels)

| Attribute | Value |
|-----------|-------|
| **Rationale** | Minimize jacking preparation time and safety hazards |
| **Verification** | Inspection |
| **Priority** | MUST |
| **Trace To** | ATA 07-00-00 |
| **Allocated To** | STK_GSE, STK_STR |

---

### 2.3 Structural Requirements

#### REQ-08-30-001-STR-001: Jack Point Load Capacity

**Requirement:** Each jack point shall be capable of sustaining the following loads without permanent deformation: 

| Jack Point | Minimum Capacity | Safety Factor |
|------------|------------------|---------------|
| Main Gear (each) | 50% MTOW | 1.33 (limit) / 2.0 (ultimate) |
| Nose Gear | 15% MTOW | 1.33 (limit) / 2.0 (ultimate) |
| Wing (each, if provided) | 25% MTOW | 1.33 (limit) / 2.0 (ultimate) |

Minimum capacities shall be validated against the CS-25.519(b) load definitions based on vertical static reactions at each jacking point, including the prescribed horizontal component (0.33× vertical reaction at limit loads).

| Attribute | Value |
|-----------|-------|
| **Rationale** | Ensure structural integrity during jacking operations |
| **Verification** | Analysis, Test |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a), CS-25.519(b), CS-25.561 |
| **Allocated To** | STK_STR |

---

#### REQ-08-30-001-STR-002: Load Path Continuity

**Requirement:** Jack point loads shall be transmitted through primary structure to the aircraft main load paths without inducing secondary loads in non-structural components.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Prevent damage to secondary structure and systems |
| **Verification** | Analysis |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a) |
| **Allocated To** | STK_STR |
| **ATA Trace** | ATA 53, ATA 57 |

---

#### REQ-08-30-001-STR-003: Jack Pad / Socket Interface Standardization

**Requirement:** Jack point interfaces shall conform to an industry-recognized jacking pad adapter/socket interface standard, using:
- ISO 43:2016 for jacking pad profiles/dimensions and minimum clearances, and/or
- SAE AS8091A for jacking pad adapter and mating jack socket design/installation requirements.

The interface shall provide self-centering engagement and a positive feature to prevent slippage under the applicable jacking loads. 

| Attribute | Value |
|-----------|-------|
| **Rationale** | Ensure compatibility with standard jacking equipment and safe engagement |
| **Verification** | Inspection, Test |
| **Priority** | MUST |
| **Trace To** | ISO 43:2016; SAE AS8091A |
| **Allocated To** | STK_STR, STK_GSE |

---

### 2.4 GSE Compatibility Requirements

#### REQ-08-30-001-GSE-001: Standard Jack Compatibility

**Requirement:** Jack points shall be compatible with tripod jacks meeting the following specifications: 

| Parameter | Requirement |
|-----------|-------------|
| Jack pad diameter | 75–150 mm |
| Jack pad type | Per ISO 43:2016 profile specifications |
| Minimum lift height | 2,500 mm (to aircraft jacking height) |
| Load rating | Per REQ-08-30-001-STR-001 |

| Attribute | Value |
|-----------|-------|
| **Rationale** | Ensure compatibility with widely available GSE |
| **Verification** | Inspection, Test |
| **Priority** | MUST |
| **Trace To** | ISO 43:2016, ATA 07-10 |
| **Allocated To** | STK_GSE |

---

#### REQ-08-30-001-GSE-002: Jack Adapter Provision

**Requirement:** Where direct jack engagement is not possible, dedicated jack adapters shall be provided as part of the aircraft GSE kit.  Adapter design shall comply with SAE AS8091A. 

| Attribute | Value |
|-----------|-------|
| **Rationale** | Enable jacking where structural configuration requires adapters |
| **Verification** | Inspection |
| **Priority** | SHOULD |
| **Trace To** | SAE AS8091A, ATA 07-10 |
| **Allocated To** | STK_GSE |

---

### 2.5 Safety Requirements

#### REQ-08-30-001-SAF-001: Jacking Stability

**Requirement:** The aircraft, when supported on any approved jacking configuration, shall remain stable under the following conditions: 
- Wind speeds up to 25 knots (from any direction) — operational limit
- Personnel movement within the aircraft (up to 4 persons)
- Normal maintenance loading on access platforms

Operations above 25 knots wind speed are prohibited by procedure (AMM/OPS) and require tie-down/stand-down actions.  The tie-down provisions per CS-25.519 (65 kt / 120 km/h context) are addressed separately under ATA 10.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Prevent tip-over during maintenance operations |
| **Verification** | Analysis, Test |
| **Priority** | MUST |
| **Trace To** | CS-25.519(a) |
| **Allocated To** | STK_SAF, STK_STR |

---

#### REQ-08-30-001-SAF-002: Fail-Safe Considerations

**Requirement:** Loss of a single jack point shall not result in catastrophic aircraft movement. The jacking procedure shall include provisions for: 
- Jack stands or safety devices at each jack point
- Maximum permissible asymmetric load conditions

| Attribute | Value |
|-----------|-------|
| **Rationale** | Mitigate risk of personnel injury and aircraft damage |
| **Verification** | Analysis |
| **Priority** | MUST |
| **Trace To** | CS-25.519 |
| **Allocated To** | STK_SAF |

---

#### REQ-08-30-001-SAF-003: Fuel State Restrictions

**Requirement:** The AMM shall define maximum permissible fuel load during jacking operations, considering:
- Fuel CG shift effects on jacking stability
- Fire/explosion risk from fuel movement

| Attribute | Value |
|-----------|-------|
| **Rationale** | Prevent instability and safety hazards from fuel slosh |
| **Verification** | Analysis |
| **Priority** | MUST |
| **Trace To** | CS-25.519, ATA 28 |
| **Allocated To** | STK_SAF, STK_OPS |

---

## 3. Traceability Matrix

### 3.1 Regulatory Traceability

| Requirement ID | CS-25 Reference | Industry Standard | ATA Reference | Status |
|----------------|-----------------|-------------------|---------------|--------|
| REQ-08-30-001-GEN-001 | CS-25.519(a) | — | ATA 07-10 | DRAFT |
| REQ-08-30-001-GEN-002 | CS-25.519(a) | — | ATA 07-10 | DRAFT |
| REQ-08-30-001-GEN-003 | — | — | ATA 11 | DRAFT |
| REQ-08-30-001-LOC-001 | CS-25.519(a) | — | ATA 07-10-10, 53, 57 | DRAFT |
| REQ-08-30-001-LOC-002 | CS-25.519(a) | — | ATA 07-10-10, 53 | DRAFT |
| REQ-08-30-001-LOC-003 | — | — | ATA 07-10-10, 57 | DRAFT |
| REQ-08-30-001-LOC-004 | — | — | ATA 07-00-00 | DRAFT |
| REQ-08-30-001-STR-001 | CS-25.519(a)(b), CS-25.561 | — | ATA 07-10 | DRAFT |
| REQ-08-30-001-STR-002 | CS-25.519(a) | — | ATA 53, 57 | DRAFT |
| REQ-08-30-001-STR-003 | — | ISO 43:2016, SAE AS8091A | ATA 07-10 | DRAFT |
| REQ-08-30-001-GSE-001 | — | ISO 43:2016 | ATA 07-10 | DRAFT |
| REQ-08-30-001-GSE-002 | — | SAE AS8091A | ATA 07-10 | DRAFT |
| REQ-08-30-001-SAF-001 | CS-25.519(a) | — | — | DRAFT |
| REQ-08-30-001-SAF-002 | CS-25.519 | — | — | DRAFT |
| REQ-08-30-001-SAF-003 | CS-25.519 | — | ATA 28 | DRAFT |

### 3.2 Structural Provisions Traceability

| Jack Point | ATA 53 Provision | ATA 57 Provision | ICD Reference |
|------------|------------------|------------------|---------------|
| Main Gear LH | 53-40-XX-001 | 57-20-XX-001 | ICD-STR-MG-LH |
| Main Gear RH | 53-40-XX-002 | 57-20-XX-002 | ICD-STR-MG-RH |
| Nose Gear | 53-20-XX-001 | — | ICD-STR-NG |
| Wing LH (if provided) | — | 57-20-XX-003 | ICD-STR-WG-LH |
| Wing RH (if provided) | — | 57-20-XX-004 | ICD-STR-WG-RH |

---

## 4. Verification Plan

| Requirement ID | Method | Evidence | Responsible | Status |
|----------------|--------|----------|-------------|--------|
| REQ-08-30-001-GEN-001 | Inspection, Test | Jacking test report | STK_TEST | PLANNED |
| REQ-08-30-001-GEN-002 | Inspection | Drawing review | STK_SE | PLANNED |
| REQ-08-30-001-GEN-003 | Inspection | Marking verification | STK_GSE | PLANNED |
| REQ-08-30-001-LOC-001 | Inspection, Analysis | FEM analysis, drawing | STK_STR | PLANNED |
| REQ-08-30-001-LOC-002 | Inspection, Analysis | FEM analysis, drawing | STK_STR | PLANNED |
| REQ-08-30-001-LOC-003 | Inspection, Analysis | Drawing review | STK_STR | PLANNED |
| REQ-08-30-001-LOC-004 | Inspection | Access assessment | STK_GSE | PLANNED |
| REQ-08-30-001-STR-001 | Analysis, Test | Stress report, static test | STK_STR | PLANNED |
| REQ-08-30-001-STR-002 | Analysis | Load path analysis | STK_STR | PLANNED |
| REQ-08-30-001-STR-003 | Inspection, Test | Interface verification per ISO 43 | STK_GSE | PLANNED |
| REQ-08-30-001-GSE-001 | Inspection, Test | GSE compatibility test | STK_GSE | PLANNED |
| REQ-08-30-001-GSE-002 | Inspection | Adapter provision check per AS8091A | STK_GSE | PLANNED |
| REQ-08-30-001-SAF-001 | Analysis, Test | Stability analysis | STK_SAF | PLANNED |
| REQ-08-30-001-SAF-002 | Analysis | Failure mode analysis | STK_SAF | PLANNED |
| REQ-08-30-001-SAF-003 | Analysis | CG/stability analysis | STK_SAF | PLANNED |

---

## 5. Open Items and TBDs

| ID | Description | Owner | Target Date | Status |
|----|-------------|-------|-------------|--------|
| TBD-001 | Final MTOW value for load calculations | STK_SE | 2026-02-01 | OPEN |
| TBD-002 | Wing jack point configuration decision | STK_STR | 2026-02-15 | OPEN |
| TBD-003 | Jack adapter P/N assignment | STK_GSE | 2026-03-01 | OPEN |
| TBD-004 | Fuel state limitation values | STK_SAF | 2026-02-28 | OPEN |
| TBD-005 | Confirm ATA 11-20 vs 11-30 for exterior jack point markings | STK_GSE | 2026-02-15 | OPEN |

---

## 6. Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I01-R01 | 2026-01-11 | STK_GSE | Initial draft |
| I01-R02 | 2026-01-11 | STK_GSE | Corrected standards references (AS8049→ISO 43/SAE AS8091A); added CS-25.519(b) horizontal load compliance note; clarified 25 kt operational limit vs 65 kt tie-down context; generalized ATA 11 marking reference pending confirmation; added automation metadata fields |

---

## 7. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author (STK_GSE) | | | |
| Reviewer (STK_SE) | | | |
| Reviewer (STK_SAF) | | | |
| Approver (STK_CM) | | | |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under LC02_SYSTEM_REQUIREMENTS.*

*Generated as KNU artifact for KNOT-08-30-001.*
