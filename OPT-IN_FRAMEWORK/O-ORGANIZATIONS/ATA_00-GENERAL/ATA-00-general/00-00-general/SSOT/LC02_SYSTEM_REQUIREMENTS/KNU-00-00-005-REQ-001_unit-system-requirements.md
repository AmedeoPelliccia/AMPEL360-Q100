---
# ═══════════════════════════════════════════════════════════════════════════════
# KNU ARTIFACT METADATA
# ═══════════════════════════════════════════════════════════════════════════════
knu_id: "KNU-00-00-005-REQ-001"
knot_id: "KNOT-00-00-005"
title: "Unit System Requirements"
knu_type: "REQ"
artifact_class: "SSOT"
lifecycle_category: "LC02"
rec: "LC02"
ata_reference: "00-00"
ata_address: "ATA-00-00-00-00"
expected_location: "../LC02_SYSTEM_REQUIREMENTS/"
status: "DRAFT"
version: "I01-R02"
priority: "HIGH"

# Ownership & Governance
owner_aor: "STK_SE"
contributors:
  - "STK_DATA"
  - "STK_SAF"
  - "STK_CERT"
  - "STK_TEST"
  - "STK_PUB"
reviewers:
  - "STK_DATA"
  - "STK_CERT"
approved_by: null
approval_date: null

# Dates
created_date: "2026-01-12"
due_date: "2026-02-28"
last_updated: "2026-01-13"

# Acceptance & Verification
acceptance_criteria: "Primary/secondary unit convention defined per domain; canonical storage rules and conversion/rounding rules defined; interface unit tagging specified"
verification_method: "Review"
effort_predicted: 5

# Metrics
requirements_count: 24
tbd_count: 7

# Traceability
parent_requirements:
  - "KNOT-00-00-005 (Unit System Convention Problem Statement)"
  - "KNU-00-00-002-REQ-001 (Document Numbering Requirements)"
  - "KNU-00-00-004-REQ-001 (Cross-Reference System Requirements)"
child_requirements: []
related_knots:
  - "KNOT-00-00-002"  # Document Architecture Conventions
  - "KNOT-00-00-004"  # Cross-Reference System
ata_traces:
  - "ATA-00"  # Program Governance / General

# Document Control
classification: "INTERNAL"
export_control: "NONE"
canonical_hash: null
---

# Unit System Requirements

**KNU ID:** KNU-00-00-005-REQ-001  
**KNOT:** KNOT-00-00-005 (Unit System Convention)  
**ATA Reference:** 00-00 (General)  
**ATA Address:** ATA-00-00-00-00  
**Status:** DRAFT  
**Version:** I01-R02  
**Owner:** STK_SE  
**REC:** LC02_SYSTEM_REQUIREMENTS  

---

## 1. Purpose

This document defines the **program-wide unit system requirements** for AMPEL360 Q100 artifacts (SSOT engineering evidence and PUB deliverables). The unit scheme shall enable:

- consistent engineering calculations and data storage,
- unambiguous interpretation across disciplines,
- predictable conversion and rounding at interfaces,
- certification-ready traceability of numeric evidence.

---

## 2. Scope

### 2.1 In-Scope
- Primary vs secondary unit conventions by domain/use-case
- Canonical (“storage”) units for machine data and calculations
- Display/reporting unit rules (PUB and operator-facing outputs)
- Conversion factors, rounding, significant figures
- Unit tagging requirements for data interchange (e.g., JSON, CSV, YAML, ICDs)
- Exceptions process for legacy/authority conventions

### 2.2 Out-of-Scope
- Tool implementation details (handled by ICD/CM artifacts)
- ARINC/AFDX label-level encoding requirements
- S1000D DMC coding and BREX authoring (addressed in PUB governance)
- Unit conversion library selection

---

## 3. Applicable Documents

| Document | Title / Applicability |
|----------|------------------------|
| ISO 80000 (series) | Quantities and units (SI quantity naming conventions) |
| SI Brochure | International System of Units (SI) definitions |
| ISO 8601 | Date/time formatting (used alongside unit tagging) |
| ATA iSpec 2200 | Publication conventions (unit presentation consistency) |
| CS-25.1301 / CS-25.1309 | System integrity; numeric evidence must be consistent and verifiable |
| KNU-00-00-002-REQ-001 | Document numbering and file naming conventions |
| KNU-00-00-004-REQ-001 | Cross-reference and traceability system requirements |

> **Note:** This KNU defines unit conventions; discipline-specific requirements (e.g., flight test reporting units) may impose secondary display conventions but shall not change canonical storage rules.

---

## 4. Definitions

| Term | Definition |
|------|------------|
| Canonical Unit | The authoritative unit used for storage and calculations (SSOT truth) |
| Display Unit | The unit used for human-facing presentation (reports, manuals, UI) |
| Primary Unit | Default unit for a domain (often canonical) |
| Secondary Unit | Allowed alternative unit, typically for operational/regulatory familiarity |
| Mixed Units | Two or more unit systems used within a single value expression (generally prohibited) |

---

## 5. Unit System Policy

### 5.1 Canonical Policy (Program Default)
- **Canonical unit system shall be SI** for all SSOT calculations and stored numerical values unless an exception is explicitly justified and recorded.

### 5.2 Domain Conventions (Primary/Secondary)
The following table defines domain defaults. “Primary” indicates the default unit set for authoring and review. “Canonical” indicates storage/calculation.

| Domain / Use | Primary | Canonical | Allowed Secondary (display only unless stated) |
|-------------|---------|-----------|-----------------------------------------------|
| Mass properties (ATA 08) | kg, m, N | SI | lb (display), in (display) |
| Structures / loads | N, kN, Pa | SI | lbf (display), psi (display), in (display) |
| Aerodynamics / performance | SI + aviation practice | SI | kt, ft, NM (display) |
| Flight operations / procedures | aviation practice | SI (stored) | kt, ft, NM (primary display) |
| Electrical (HVDC, power) | V, A, W, kW | SI | hp (display) |
| Energy (battery/H₂) | J, kJ, MJ, kWh, kg | SI | BTU (display) |
| Cryogenic LH₂ | K (state), kg, Pa | SI | °C (ambient display), bar (display), kPa (display) |
| Pressure systems (pneumatic/GH₂) | Pa/kPa/MPa | SI | bar (display), psi (display) |
| Publications (AMM, etc.) | operator convention | SI (source) | dual-unit presentation as required |

### 5.3 SSOT Architecture vs. Traditional CSDB

The Domain Conventions table in Section 5.2 reveals a **critical architectural insight** that validates the AMPEL360 approach to establishing a **Single Source of Truth (SSOT)** distinct from the traditional **Common Source Database (CSDB)**.

#### 5.3.1 Multi-Domain Unit Complexity

Traditional CSDB systems assume:
- Single canonical unit system (typically SI)
- Simple conversion at presentation layer
- No domain-specific authoring contexts

The AMPEL360 reality is more complex:
- ATA-08 authors work in kg/m
- Flight operations authors work in kt/ft/NM
- Publications need dual-unit presentation
- Cryogenic systems mix K (state) + °C (ambient)

#### 5.3.2 Primary vs. Canonical Separation

The **key innovation** of the AMPEL360 SSOT architecture is the separation of Primary, Canonical, and Secondary units:

| Concept | Definition | CSDB Approach | AMPEL360 SSOT Approach |
|---------|------------|---------------|------------------------|
| **Primary** | Authoring/review unit set | ❌ Ignored | ✅ **Domain-specific** (e.g., aviation practice for flight ops) |
| **Canonical** | Storage/calculation unit | ✅ SI enforced | ✅ **SI for computation** |
| **Secondary** | Display-only alternatives | ⚠️ Ad-hoc conversion | ✅ **Controlled presentation layer** |

#### 5.3.3 Aviation Practice Domain

The "Flight operations / procedures" row demonstrates a pattern that breaks CSDB assumptions:
- Authors work in **kt/ft/NM** (primary)
- System stores in **SI** (canonical)
- Operators see **kt/ft/NM** (primary display, not secondary!)

This pattern requires metadata to track unit provenance through the data lifecycle.

#### 5.3.4 SSOT Metadata Schema

The SSOT stores **canonical SI values** with **metadata tags** indicating:
- `primary_unit`: The authoring/domain unit
- `display_unit`: Context-specific presentation unit
- `domain`: ATA chapter or operational context

**Example JSON:**
```json
{
  "parameter": "cruise_speed",
  "canonical_value": 77.2,
  "canonical_unit": "m/s",
  "primary_unit": "kt",
  "primary_value": 150,
  "domain": "flight_operations",
  "ata_chapter": "22"
}
```

#### 5.3.5 Rationale for SSOT Architecture Beyond CSDB

Traditional S1000D CSDB assumes:
- Single authoring unit system (SI)
- Simple display-time conversion
- No preservation of domain context

AMPEL360 requires:
- **Multi-domain authoring** (aviation practice vs. engineering SI)
- **Bidirectional traceability** (display unit ↔ canonical unit)
- **Regulatory compliance** (FAA/EASA accept kt/ft, not m/s)

**Conclusion:** CSDB is a component within the SSOT, not a replacement. The SSOT provides the domain-aware metadata layer that CSDB cannot natively support.

---

## 6. Requirements

### 6.1 General Requirements

#### REQ-UNIT-001: SI as Canonical
**Requirement:** All SSOT numeric values used for calculation or storage shall use **SI canonical units**, unless an approved exception is recorded.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents conversion ambiguity and calculation errors |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-002: Canonical Storage Rule
**Requirement:** For any parameter that can be expressed in multiple unit systems, the SSOT shall store **exactly one canonical value** and optionally derive display values by conversion.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Eliminates multi-source numeric truth |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-003: No Mixed Units in a Single Value
**Requirement:** Artifacts shall not express a single quantitative value using mixed units (e.g., “10 kg/m²-ft”); unit expressions shall be coherent within one system.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Mixed units are error-prone and hard to verify |
| Verification | Inspection |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-004: Dual-Unit Presentation Rules
**Requirement:** When dual-unit presentation is required, the format shall be:
- **Primary unit first**, secondary in parentheses, and
- both units shall be explicitly labeled by symbol.

**Example:** `Pressure: 350 kPa (50.8 psi)`

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Consistent readability and reduces misinterpretation |
| Verification | Inspection |
| Parent | KNOT-00-00-005 |

---

### 6.2 Unit Formatting Requirements (Human-Readable)

#### REQ-UNIT-010: Unit Symbol Conventions
**Requirement:** Unit symbols shall follow standard scientific conventions:
- no pluralization (use `kg`, not `kgs`)
- use a space between number and unit (e.g., `10 kg`), except for degree symbols (`20 °C`)
- use `·`, `/`, and superscripts for compound units (e.g., `N·m`, `kg/m³`)

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Standardized readability and reviewability |
| Verification | Inspection |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-011: Decimal and Thousands Format
**Requirement:** Numeric formatting shall use:
- decimal point `.` (dot),
- no thousands separators in machine files (CSV/YAML/JSON),
- optional thin-space grouping in human-facing PDFs if needed by PUB style guide.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents locale-induced parsing errors |
| Verification | Inspection |
| Parent | KNOT-00-00-005 |

---

### 6.3 Conversion and Rounding Requirements

#### REQ-UNIT-020: Approved Conversion Factors
**Requirement:** Unit conversions shall use **approved exact factors** where defined (e.g., `1 in = 25.4 mm exactly`) and a controlled conversion table for all commonly used secondary units.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Ensures consistent conversion across all artifacts |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-021: Conversion at Interfaces Only
**Requirement:** Conversions shall occur at **interfaces and presentation boundaries** (e.g., SSOT→PUB, SSOT→UI), not within canonical calculation chains, unless explicitly justified.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents rounding accumulation and hidden unit drift |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-022: Rounding Policy
**Requirement:** Display values shall be rounded according to a documented rounding policy:
- round-half-away-from-zero (default),
- significant figures appropriate to measurement uncertainty,
- never display more precision than justified by the uncertainty budget (when available).

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Avoids false precision and certification challenges |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-023: Traceable Conversion Evidence
**Requirement:** When a requirement, analysis, or test report presents non-canonical units, the artifact shall include either:
- the canonical value alongside the display value, or
- a trace link to the canonical source and the conversion rule reference.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Enables audit and reproduction of numeric evidence |
| Verification | Review |
| Parent | KNOT-00-00-005 |

---

### 6.4 Domain-Specific Requirements

#### REQ-UNIT-030: Aviation Operational Displays
**Requirement:** Pilot/operator-facing displays and operational procedures may use:
- altitude in **ft**,
- airspeed in **kt**,
- distance in **NM**,
as **display units**, while SSOT storage remains SI.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Aligns with operational conventions while protecting SSOT integrity |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-031: Cryogenic Temperature Convention
**Requirement:** Cryogenic hydrogen thermodynamic state parameters shall use:
- **K** as canonical for cryogenic temperature/state modeling,
- **°C** allowed for ambient/non-cryogenic display contexts.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Cryogenic models are Kelvin-based; Celsius used for human ambient interpretation |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-032: Pressure Convention
**Requirement:** Pressure shall be canonical in **Pa** (or kPa/MPa as scaled SI), with secondary **bar** and/or **psi** permitted for display where appropriate.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | SI coherence with analysis; bar/psi commonly used by maintainers |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-033: Electrical Energy Convention
**Requirement:** Electrical energy shall be canonical in **J** (with scaled SI multiples) and may also be represented in **kWh** for operational energy management reporting.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | SI for physics-based modeling; kWh for operational planning |
| Verification | Review |
| Parent | KNOT-00-00-005 |

---

### 6.5 Data Interchange Requirements (Machine-Parseable)

#### REQ-UNIT-040: Unit Tagging in Machine Data
**Requirement:** All machine-readable parameter exchanges (JSON/YAML/CSV defined by ICDs) shall include explicit unit tagging, either:
- `value + unit` fields, or
- a schema that binds each field name to a unit definition, with a referenced unit registry.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents silent unit mismatches in automation |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-041: Canonical Unit Declaration
**Requirement:** Each ICD defining an interface shall explicitly declare:
- canonical unit for each quantity,
- allowed display units (if any),
- conversion/rounding rule reference.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Interface-level clarity for certification evidence chains |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-042: Consistent Unit Vocabulary
**Requirement:** The program shall use one consistent unit vocabulary for machine representation (e.g., SI symbols or a controlled code system), documented in a **Unit Registry**.

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Enables automated validation and reduces ambiguity |
| Verification | Review |
| Parent | KNOT-00-00-005 |

---

### 6.6 Governance Requirements

#### REQ-UNIT-050: Unit Exceptions Control
**Requirement:** Any exception to canonical SI usage shall:
- be justified (operational/regulatory/legacy reason),
- be approved by STK_SE with STK_CERT concurrence when certification-relevant,
- be recorded in configuration management (LC08).

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents uncontrolled divergence from canonical policy |
| Verification | Review |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-051: Publication Consistency
**Requirement:** PUB deliverables shall present units consistently within each publication type, using the program’s dual-unit rules and safety labeling standards where applicable.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Maintains user trust and reduces safety risk |
| Verification | Inspection |
| Parent | KNOT-00-00-005 |

#### REQ-UNIT-052: Traceability to Canonical SSOT
**Requirement:** Every non-SSOT presentation of numeric values used in certification evidence shall trace to a canonical SSOT source via the cross-reference system.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Preserves SSOT integrity and auditability |
| Verification | Review |
| Parent | KNOT-00-00-005 |

---

## 7. Examples (Non-Normative)

### 7.1 JSON Example (value + unit)
```json
{
  "parameter": "tank_pressure",
  "value": 350.0,
  "unit": "kPa",
  "canonical_unit": "Pa",
  "timestamp_utc": "2026-01-12T10:15:00Z"
}
````

### 7.2 Dual-Unit Example (PUB)

* `Temperature: 293 K (20 °C)`
* `Altitude: 3 000 m (9 843 ft)`
* `Voltage: 270 VDC (±270 V bus)`

---

## 8. Verification Matrix

| Requirement Group                     | Method     |
| ------------------------------------- | ---------- |
| Canonical policy & domain conventions | Review     |
| Formatting rules                      | Inspection |
| Conversion & rounding rules           | Review     |
| Data tagging & ICD declarations       | Review     |
| Exceptions governance                 | Review     |

---

## 9. Traceability

### 9.1 Upstream Traceability

| Source                | Relevance                                                  |
| --------------------- | ---------------------------------------------------------- |
| KNOT-00-00-005        | Program need for consistent unit system                    |
| KNU-00-00-002-REQ-001 | File/ID conventions used in unit registries and references |
| KNU-00-00-004-REQ-001 | Trace links from PUB evidence back to canonical SSOT       |

### 9.2 Downstream Traceability (planned targets)

| Target Artifact       | Purpose                                                   |
| --------------------- | --------------------------------------------------------- |
| KNU-00-00-005-ICD-001 | Unit registry + unit tagging schema (machine vocabulary)  |
| KNU-00-00-005-CM-001  | Exceptions log + approval record format                   |
| KNU-00-00-005-PUB-001 | Publication unit style guide (dual-unit formatting rules) |

---

## 10. Open Items (TBD/TBR)

### 10.1 Resolved TBDs

| ID                            | Description                                            | Resolution                                           | Status       |
| ----------------------------- | ------------------------------------------------------ | ---------------------------------------------------- | ------------ |
| TBD-00-00-005-ANA-002-001     | Domain convention Primary/Canonical/Secondary units    | Section 5.2 Domain Conventions table defines per-ATA chapter | ✅ RESOLVED |

### 10.2 Active TBDs

| ID           | Description                                                                       | Owner    | Target Date | Status |
| ------------ | --------------------------------------------------------------------------------- | -------- | ----------- | ------ |
| TBD-UNIT-001 | Select machine unit vocabulary (SI symbols vs coded system)                       | STK_DATA | 2026-02-05  | OPEN   |
| TBD-UNIT-002 | Define default significant figures per quantity type (mass, pressure, temp, etc.) | STK_SE   | 2026-02-10  | OPEN   |
| TBD-UNIT-003 | Define when to permit psi vs bar in maintenance contexts                          | STK_SAF  | 2026-02-15  | OPEN   |
| TBD-UNIT-004 | Confirm dual-unit policy for certification submissions (EASA/FAA expectations)    | STK_CERT | 2026-02-20  | OPEN   |
| TBD-UNIT-005 | Metadata schema for unit provenance (primary_unit, canonical_unit tags)           | STK_DATA | 2026-03-01  | OPEN   |
| TBD-UNIT-006 | S1000D CSDB integration layer (maps Primary→Canonical→CSDB SI)                    | STK_PUB  | 2026-03-15  | OPEN   |
| TBD-UNIT-007 | Aviation practice definition (ICAO Annex 5, FAA AC 00-45H reference)              | STK_CERT | 2026-02-25  | OPEN   |

---

## 11. Revision History

| Version | Date       | Author | Description                             |
| ------- | ---------- | ------ | --------------------------------------- |
| I01-R01 | 2026-01-12 | STK_SE | Initial draft — unit system conventions |
| I01-R02 | 2026-01-13 | STK_SE | Added Section 5.3 SSOT Architecture vs CSDB insight; resolved TBD-00-00-005-ANA-002-001; added TBD-UNIT-005/006/007 for metadata schema and CSDB integration |

---

## 12. Approval

| Role                   | Name | Signature | Date |
| ---------------------- | ---- | --------- | ---- |
| Author (STK_SE)        |      |           |      |
| Reviewer (STK_DATA)    |      |           |      |
| Reviewer (STK_CERT)    |      |           |      |
| Approver (STK_SE Lead) |      |           |      |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-00-00-005-REQ-001 defines unit system requirements addressing KNOT-00-00-005.*

```
::contentReference[oaicite:0]{index=0}
```
