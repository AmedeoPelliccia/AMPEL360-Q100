---
# ═══════════════════════════════════════════════════════════════════════════════
# KNU ARTIFACT METADATA
# ═══════════════════════════════════════════════════════════════════════════════
knu_id: "KNU-28-00-001-REQ-001"
normalized_id: "KNU-28-00-001-LC02-00-00-00-SYSTEM_GENERAL_REQ"
knot_id: "KNOT-28-00-001"
title: "Fuel System Requirements - ATA 28 General"
knu_type: "REQ"
artifact_class: "SSOT"
lifecycle_category: "LC02"
rec: "LC02"
ata_reference: "28-00"
ata_address:
  chapter: "28"
  section: "00"
  subject: "00"
  sub_subject: "00"
  sub_sub_subject: "00"
  full_address: "28-00-00-00-00"
expected_location: "../LC02_SYSTEM_REQUIREMENTS/"
status: "DRAFT"
version: "I01-R01"
priority: "HIGH"

# Ownership & Governance
owner_aor: "STK_SE"
contributors:
  - "STK_SAF"
  - "STK_CERT"
  - "STK_DATA"
  - "STK_TEST"
reviewers:
  - "STK_SAF"
  - "STK_CERT"
approved_by: null
approval_date: null

# Dates
created_date: "2026-01-16"
due_date: "2026-04-30"
last_updated: "2026-01-16"

# Acceptance & Verification
acceptance_criteria: "Fuel system requirements defined for LH₂/C2 technology; safety requirements established; cryogenic requirements specified; traceability to standards complete"
verification_method: "Review"
effort_predicted: 8

# Metrics
requirements_count: 8
tbd_count: 0

# A.S.I.T. Integration
asit_context:
  domain: "fuel_system"
  user_roles:
    - "engineer"
    - "safety_engineer"
    - "certification_engineer"
  output_formats:
    - "all"
  transponder_modes:
    - "MODE_SSOT"
    - "MODE_SAF"
    - "MODE_CERT"
  priority: "HIGH"

# Regulatory Compliance
regulatory_basis:
  - standard: "CS-25.951"
    clause: "Fuel System - General"
    compliance: "FULL"
  - standard: "CS-25.952"
    clause: "Fuel System Crash Resistance"
    compliance: "FULL"
  - standard: "CS-25.954"
    clause: "Fuel System Lightning Protection"
    compliance: "FULL"
  - standard: "CS-25.963"
    clause: "Fuel Tanks - General"
    compliance: "FULL"
  - standard: "CS-25.981"
    clause: "Fuel Tank Ignition Prevention"
    compliance: "FULL"
  - standard: "SAE AIR6464"
    clause: "Hydrogen Fuel Storage and Distribution"
    compliance: "FULL"
  - standard: "SAE AS6858"
    clause: "H₂ System Safety"
    compliance: "FULL"
  - standard: "ISO 19880"
    clause: "Gaseous Hydrogen Fueling"
    compliance: "APPLICABLE"

# Traceability
parent_requirements:
  - "KNOT-28-00-001 (Fuel System General Requirements Problem Statement)"
  - "O-KNOT-28-00-001 (Organizational Fuel System Requirements)"
  - "Y-KNOT-28-00-001-001 (Fuel System Genesis Provenance)"
child_requirements: []
spawns_knus:
  - "KNU-28-00-001-SAF-001"
  - "KNU-28-00-001-ICD-001"
  - "KNU-28-00-001-ANA-001"
related_knots:
  - "KNOT-28-10-001"
  - "KNOT-28-20-001"
  - "KNOT-28-30-001"
  - "KNOT-28-40-001"
downstream_refs:
  - id: "KNU-28-10-001-REQ-001"
    type: "refines_to"
    description: "LH₂ storage system requirements"
  - id: "KNU-28-20-001-REQ-001"
    type: "refines_to"
    description: "Fuel distribution system requirements"
  - id: "KNU-28-30-001-REQ-001"
    type: "refines_to"
    description: "Fuel dump system requirements"
  - id: "KNU-28-40-001-REQ-001"
    type: "refines_to"
    description: "Fuel indication system requirements"
ata_traces:
  - "ATA-28"

# Document Control
classification: "INTERNAL"
export_control: "NONE"
canonical_hash: null
---

# Fuel System Requirements - ATA 28 General

**KNU ID:** KNU-28-00-001-REQ-001  
**KNOT:** KNOT-28-00-001 (General Requirements)  
**ATA Reference:** 28-00 (Fuel)  
**ATA Address:** ATA-28-00-00-00  
**Status:** 📝 DRAFT  
**Version:** I01-R01  
**Owner:** STK_SE  
**REC:** LC02_SYSTEM_REQUIREMENTS  

---

## 1. Purpose

This document defines the **system-level requirements** for the AMPEL360 Q100 Fuel System, specifically addressing:

- Liquid Hydrogen (LH₂) storage and management
- Circular Cryogenic Cell (C2) technology integration
- Fuel system safety and reliability
- Compliance with airworthiness and hydrogen-specific standards

The fuel system shall enable safe, efficient, and reliable storage, distribution, and management of LH₂ fuel for the Q100 hydrogen-electric propulsion system.

---

## 2. Scope

### 2.1 In-Scope
- **Fuel Storage (ATA 28-10):** LH₂ tank system, insulation, boil-off management
- **Fuel Distribution (ATA 28-20):** Transfer lines, pumps, valves, pressure control
- **Fuel Dump (ATA 28-30):** Emergency jettison system
- **Fuel Indication (ATA 28-40):** Quantity measurement, leak detection, temperature monitoring
- C2 (Circular Cryogenic Cell) technology integration
- Safety systems (leak detection, inerting, emergency procedures)
- Interface requirements with propulsion system (ATA 71) and electrical system (ATA 24)

### 2.2 Out-of-Scope
- Detailed mechanical design (addressed in LC04)
- Manufacturing processes (addressed in LC06)
- Ground support equipment (GSE) specifications
- Hydrogen production and supply chain infrastructure
- Flight test procedures (addressed in LC05)

---

## 3. Applicable Documents

| Document | Title / Applicability |
|----------|------------------------|
| CS-25.951 | Fuel System - General (tank integrity, fuel flow, failure conditions) |
| CS-25.952 | Fuel System Crash Resistance |
| CS-25.954 | Fuel System Lightning Protection |
| CS-25.963 | Fuel Tanks - General |
| CS-25.981 | Fuel Tank Ignition Prevention |
| SAE AIR6464 | Hydrogen Fuel Storage and Distribution for Aircraft |
| SAE AS6858 | Hydrogen Fuel System Safety Requirements |
| ISO 19880 | Gaseous Hydrogen Fueling Stations (interface compatibility) |
| ISO 13985 | Cryogenic Vessels - Liquid Hydrogen Systems |
| EASA SC H2 | EASA Special Condition for Hydrogen-Powered Aircraft |
| KNU-00-00-005-REQ-001 | Unit System Requirements (cryogenic temperature conventions) |
| KNOT-28-00-001 | Fuel System General Requirements Problem Statement |

> **Note:** This KNU establishes system-level requirements. Subsystem requirements are defined in KNU-28-10/20/30/40 series.

---

## 4. Definitions

| Term | Definition |
|------|------------|
| LH₂ | Liquid Hydrogen (cryogenic fuel stored at ~20 K) |
| C2 Technology | Circular Cryogenic Cell - advanced insulation and storage system |
| Boil-Off | Natural evaporation of LH₂ due to heat ingress |
| MLW | Maximum Landing Weight |
| LFL | Lower Flammability Limit (for hydrogen: 4% vol in air) |
| Single Failure Tolerance | System capability to continue safe operation after any single failure |
| FMEA | Failure Modes and Effects Analysis |
| SSA | System Safety Assessment |

---

## 5. Fuel System Architecture Overview

The AMPEL360 Q100 Fuel System consists of:

1. **LH₂ Storage System (28-10):** Cryogenic tanks using C2 technology, insulation, pressure relief
2. **Distribution System (28-20):** Pumps, transfer lines, flow control valves
3. **Dump System (28-30):** Emergency jettison capability for rapid fuel reduction
4. **Indication System (28-40):** Fuel quantity gauging, temperature monitoring, leak detection

**Key Innovation:** C2 (Circular Cryogenic Cell) technology provides superior thermal insulation, reducing boil-off losses and enabling extended ground hold times.

---

## 6. Requirements

### 6.1 General Requirements (0xx)

#### REQ-AMPEL-28-00-02-SE-001: Fuel System Function
**Old ID:** REQ-FUEL-001  
**Requirement:** The fuel system shall store, manage, and deliver liquid hydrogen (LH₂) to the propulsion system under all normal and emergency operating conditions, from sea level to maximum certified altitude.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Primary fuel system function for hydrogen-electric propulsion |
| Verification | Analysis + Test |
| Parent | KNOT-28-00-001 |
| Origin | AMPEL (Program-generated) |

#### REQ-AMPEL-28-00-02-SE-002: Single Failure Tolerance
**Old ID:** REQ-FUEL-002  
**Requirement:** The fuel system shall meet **CS-25.951(b)** single failure tolerance requirements. No single failure or malfunction shall prevent continued safe flight and landing.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Airworthiness requirement for transport category aircraft |
| Verification | FMEA + SSA |
| Parent | KNOT-28-00-001 |
| Regulatory Basis | CS-25.951(b) |
| Origin | CS-25 |

#### REQ-AMPEL-28-00-02-SE-003: Fuel Quantity Accuracy
**Old ID:** REQ-FUEL-003  
**Requirement:** The fuel indication system shall measure usable fuel quantity with an accuracy of **±2%** of total tank capacity across the full operating temperature range (14K-25K).

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Required for flight planning, endurance calculation, and safe operations |
| Verification | Test |
| Parent | KNOT-28-00-001 |
| Origin | AMPEL (Program-generated) |

---

### 6.2 Cryogenic Requirements (1xx)

#### REQ-AMPEL-28-00-02-SE-101: LH₂ Storage Temperature
**Old ID:** REQ-FUEL-101  
**Requirement:** The fuel system shall maintain LH₂ in the liquid phase within the temperature range of **14K to 25K** (-259°C to -248°C) at storage pressure.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Liquid hydrogen phase boundary constraint; exceeding 25K risks boil-off and pressure rise |
| Verification | Analysis + Test |
| Parent | KNOT-28-00-001 |
| Origin | AMPEL (Program-generated) |

#### REQ-AMPEL-28-00-02-SE-102: Boil-Off Management
**Old ID:** REQ-FUEL-102  
**Requirement:** The fuel system shall limit LH₂ boil-off to **≤2% of total fuel mass per 24 hours** during ground operations (ISA+15°C ambient) and **≤0.5% per flight hour** during cruise conditions.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Minimize fuel loss, maintain operational efficiency, reduce venting frequency |
| Verification | Analysis + Test |
| Parent | KNOT-28-00-001 |
| Origin | AMPEL (Program-generated) |

#### REQ-AMPEL-28-00-02-SE-103: C2 Cell Integration
**Old ID:** REQ-FUEL-103  
**Requirement:** The LH₂ storage tanks shall incorporate **Circular Cryogenic Cell (C2) technology** to achieve thermal insulation performance meeting boil-off requirements (REQ-AMPEL-28-00-02-SE-102).

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | C2 technology is the enabling technology for low boil-off LH₂ storage |
| Verification | Analysis + Test |
| Parent | KNOT-28-00-001 |
| Origin | AMPEL (Program-generated) |

---

### 6.3 Safety Requirements (2xx)

#### REQ-AMPEL-28-00-02-SAF-201: H₂ Leak Detection
**Old ID:** REQ-FUEL-201  
**Requirement:** The fuel system shall provide continuous hydrogen leak detection capability with alarm activation at **≤25% of Lower Flammability Limit (LFL)**, equivalent to **1% H₂ by volume** in air.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Early leak detection prevents flammability hazard and enables crew intervention |
| Verification | Test |
| Parent | KNOT-28-00-001 |
| Regulatory Basis | SAE AS6858, EASA SC H2 |
| Origin | SAE AS6858 |

#### REQ-AMPEL-28-00-02-SAF-202: Emergency Fuel Jettison
**Old ID:** REQ-FUEL-202  
**Requirement:** The fuel dump system shall be capable of reducing aircraft fuel load from **Maximum Takeoff Weight (MTOW) to Maximum Landing Weight (MLW) within 15 minutes** of jettison initiation.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Emergency landing capability after takeoff; reduces structural loads and fire risk |
| Verification | Analysis + Test |
| Parent | KNOT-28-00-001 |
| Regulatory Basis | CS-25.1001 |
| Origin | CS-25 |

---

## 7. Requirements Summary

| Category | Requirement Count | Status |
|----------|-------------------|--------|
| General Requirements (0xx) | 3 | DRAFT |
| Cryogenic Requirements (1xx) | 3 | DRAFT |
| Safety Requirements (2xx) | 2 | DRAFT |
| **Total** | **8** | **DRAFT** |

---

## 8. Verification Matrix

| Requirement Group | Method |
|-------------------|--------|
| Fuel system function (SE-001) | Analysis + Test |
| Single failure tolerance (SE-002) | FMEA + SSA |
| Fuel quantity accuracy (SE-003) | Test |
| LH₂ temperature control (SE-101) | Analysis + Test |
| Boil-off management (SE-102) | Analysis + Test |
| C2 integration (SE-103) | Analysis + Test |
| H₂ leak detection (SAF-201) | Test |
| Emergency jettison (SAF-202) | Analysis + Test |

---

## 9. Traceability

### 9.1 Upstream Traceability

| Source | Relevance |
|--------|-----------|
| KNOT-28-00-001 | Parent problem statement - fuel system general requirements |
| O-KNOT-28-00-001 | Organizational requirements origin |
| Y-KNOT-28-00-001-001 | Genesis provenance - fuel system concept |
| CS-25.951 | Fuel system general requirements |
| CS-25.952 | Crash resistance requirements |
| SAE AIR6464 | Hydrogen storage and distribution guidance |
| SAE AS6858 | Hydrogen system safety requirements |
| KNU-00-00-005-REQ-001 | Unit system requirements (cryogenic temperature units) |

### 9.2 Downstream Traceability

| Target Artifact | Purpose | Status |
|----------------|---------|--------|
| KNU-28-00-001-SAF-001 | System safety analysis (FMEA, FHA, SSA) | 🔵 SPAWNED |
| KNU-28-00-001-ICD-001 | Interface control document (propulsion, electrical, monitoring) | ⚪ PLANNED |
| KNU-28-00-001-ANA-001 | Fuel system trade studies and analysis | ⚪ PLANNED |
| KNU-28-10-001-REQ-001 | LH₂ storage subsystem requirements | ⚪ PLANNED |
| KNU-28-20-001-REQ-001 | Fuel distribution subsystem requirements | ⚪ PLANNED |
| KNU-28-30-001-REQ-001 | Fuel dump subsystem requirements | ⚪ PLANNED |
| KNU-28-40-001-REQ-001 | Fuel indication subsystem requirements | ⚪ PLANNED |

---

## 10. Open Items (TBD/TBR)

### 10.1 Active TBDs

*No active TBDs at I01-R01. Future iterations may identify TBDs for:*
- Maximum fuel capacity (pending propulsion system power requirements)
- Tank configuration (number, location, geometry) - deferred to LC04
- Vent system architecture - deferred to KNU-28-10-001-REQ-001

---

## 11. Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I01-R01 | 2026-01-16 | STK_SE | Initial draft - 8 baseline requirements for LH₂/C2 fuel system |

---

## 12. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author (STK_SE) |  |  |  |
| Reviewer (STK_SAF) |  |  |  |
| Reviewer (STK_CERT) |  |  |  |
| Approver (STK_SE Lead) |  |  |  |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-28-00-001-REQ-001 defines fuel system requirements addressing KNOT-28-00-001.*
