# KNU-00-00-001-REQ-001 — Program Glossary Requirements

**KNU ID:** KNU-00-00-001-REQ-001  
**KNOT Reference:** [KNOT-00-00-001](../LC01_PROBLEM_STATEMENT/README.md#knot-00-00-001) — Program Terminology Standardization  
**Artifact Class:** SSOT  
**KNU Type:** REQ  
**Version:** I01-R01  
**Status:** DRAFT  
**Owner:** STK_CM  
**Due Date:** 2026-02-28  
**Effort Predicted:** 8 story points  

---

## 1. Purpose

This document defines the **requirements for the AMPEL360 Q100 Program Glossary** — the authoritative terminology reference for all novel concepts introduced by the BWB hydrogen-hybrid electric aircraft program.

### 1.1 Scope

| In-Scope | Out-of-Scope |
|----------|--------------|
| Novel Q100-specific terminology | Standard aerospace terms (covered by ATA iSpec 2200) |
| OPT-IN framework terminology | S1000D standard terms (covered by S1000D spec) |
| H₂ propulsion and cryogenic terms | Regulatory boilerplate (covered by CS-25/Part 25) |
| BWB configuration terms | Supplier-specific terminology |
| AI/ML and neural systems terms | Implementation details |
| Circularity and DPP terms | — |
| Tokenomics (KNOT/KNU/TT) terms | — |

### 1.2 Document Structure

This requirements document follows the structure:

1. **General Requirements** — Glossary-level constraints
2. **Content Requirements** — Term categories and coverage
3. **Structure Requirements** — Entry format and organization
4. **Source Requirements** — Reference and provenance
5. **Integration Requirements** — CSDB and tooling
6. **Governance Requirements** — Change control and versioning

---

## 2. Applicable Documents

### 2.1 Governing Documents

| Document | Applicability |
|----------|---------------|
| ATA iSpec 2200 | Chapter structure and standard terminology |
| S1000D Issue 5.0 | CSDB publication format |
| ISO 1087 | Terminology principles |
| ISO 704 | Terminology work — Principles and methods |

### 2.2 Reference Documents

| Document | Applicability |
|----------|---------------|
| EASA CS-25 Amendment 27 | Certification terminology |
| FAA 14 CFR Part 25 | Certification terminology |
| SAE ARP4754A | System development terminology |
| SAE ARP4761 | Safety assessment terminology |
| EASA AI Roadmap 2.0 | AI/ML terminology |
| SAE AIR 6988 | AI in aeronautical systems terminology |
| ISO 14040/14044 | Lifecycle assessment terminology |
| EU Digital Product Passport | DPP terminology |

---

## 3. Requirements

### 3.1 General Requirements

#### REQ-AMPEL-00-00-02-SE-100:
**Old ID:** REQ-GLO-001   Glossary Existence
**Requirement:** The program shall maintain a single, authoritative glossary containing all Q100-specific terminology.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents terminology fragmentation across teams |
| Verification | Inspection |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-101:
**Old ID:** REQ-GLO-002   Glossary Authority
**Requirement:** The Program Glossary shall be the authoritative source for all Q100-specific term definitions; conflicting definitions in other documents shall be considered non-conforming.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Establishes single source of truth |
| Verification | Review |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-102:
**Old ID:** REQ-GLO-003   Glossary Accessibility
**Requirement:** The Program Glossary shall be accessible to all program stakeholders without specialized tooling.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Human-readable first principle |
| Verification | Demonstration |
| Parent | KNOT-00-00-004 |

#### REQ-AMPEL-00-00-02-SE-103:
**Old ID:** REQ-GLO-004   Glossary Language
**Requirement:** The Program Glossary shall be authored in English (US) as the primary language.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | International aerospace standard |
| Verification | Inspection |
| Parent | — |

---

### 3.2 Content Requirements — Term Categories

#### REQ-AMPEL-00-00-02-SE-104:
**Old ID:** REQ-GLO-010   BWB Configuration Terms
**Requirement:** The glossary shall define all terms specific to the Blended Wing Body configuration, including but not limited to:

| Term Category | Example Terms |
|---------------|---------------|
| Geometry | center-body, blended trailing edge, body-wing junction |
| Aerodynamics | elevon, split elevon, body flap, vortex lift |
| Structure | centerbody frames, outer wing box, carry-through structure |
| Cabin | wide-body cabin, non-circular pressure vessel, BWB egress |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | BWB is novel configuration with non-standard terminology |
| Verification | Review |
| Acceptance | ≥40 BWB-specific terms defined |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-105:
**Old ID:** REQ-GLO-011   Hydrogen Propulsion Terms
**Requirement:** The glossary shall define all terms specific to hydrogen propulsion and cryogenic storage, including but not limited to:

| Term Category | Example Terms |
|---------------|---------------|
| Fuel Cell | PEM fuel cell, membrane electrode assembly, bipolar plate, humidification |
| Cryogenic Storage | LH₂, cryostat, vacuum insulation, boil-off, ortho-para conversion |
| H₂ Handling | purging, inerting, venting, pressure relief, leak detection |
| Energy | gravimetric energy density, volumetric density, round-trip efficiency |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | H₂ propulsion introduces novel hazards and concepts |
| Verification | Review |
| Acceptance | ≥60 H₂-specific terms defined |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-106:
**Old ID:** REQ-GLO-012   Neural Systems Terms
**Requirement:** The glossary shall define all terms specific to AI/ML and neural network systems, including but not limited to:

| Term Category | Example Terms |
|---------------|---------------|
| Architecture | neural network, deep learning, convolutional, transformer |
| Assurance | learning assurance, W-shaped lifecycle, OOD detection |
| Runtime | inference, runtime monitor, confidence score, ensemble |
| Certification | EASA AI Level, DAL allocation for ML, Special Condition |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | AI/ML certification requires precise terminology |
| Verification | Review |
| Acceptance | ≥50 AI/ML-specific terms defined |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-107:
**Old ID:** REQ-GLO-013   Circularity and DPP Terms
**Requirement:** The glossary shall define all terms specific to circularity, sustainability, and Digital Product Passport, including but not limited to:

| Term Category | Example Terms |
|---------------|---------------|
| Circularity | circular economy, design for disassembly, material passport |
| DPP | Digital Product Passport, lifecycle traceability, provenance |
| Sustainability | carbon footprint, scope 1/2/3 emissions, SAF, green hydrogen |
| End-of-Life | decommissioning, recycling, upcycling, material recovery |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | EU DPP regulation requires standardized terminology |
| Verification | Review |
| Acceptance | ≥30 circularity/DPP terms defined |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-108:
**Old ID:** REQ-GLO-014   OPT-IN Framework Terms
**Requirement:** The glossary shall define all terms specific to the OPT-IN framework and AMPEL360 methodology, including but not limited to:

| Term Category | Example Terms |
|---------------|---------------|
| Framework | OPT-IN, axis, O-Organizations, P-Programs, T-Technologies, I-Infrastructures, N-Neural Networks |
| Lifecycle | SSOT, PUB, LC01–LC14, CSDB, IETP |
| Uncertainty | KNOT, KNU, residual uncertainty, uncertainty scale |
| Tokenomics | Teknia Token (TT), deg, pool, spillover, AWARDS |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Framework terminology required for program navigation |
| Verification | Review |
| Acceptance | ≥40 OPT-IN terms defined |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-109:
**Old ID:** REQ-GLO-015   Distributed Electric Propulsion Terms
**Requirement:** The glossary shall define all terms specific to distributed electric propulsion, including but not limited to:

| Term Category | Example Terms |
|---------------|---------------|
| Motors | electric motor, permanent magnet, power density, thermal management |
| Propulsors | open-fan, ducted fan, propulsor, boundary layer ingestion |
| Power Electronics | inverter, power converter, ±270 VDC, solid-state |
| Architecture | distributed propulsion, differential thrust, yaw control |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Electric propulsion differs from conventional terminology |
| Verification | Review |
| Acceptance | ≥35 DEP-specific terms defined |
| Parent | KNOT-00-00-001 |

---

### 3.3 Structure Requirements — Entry Format

#### REQ-AMPEL-00-00-02-SE-110:
**Old ID:** REQ-GLO-020   Term Entry Structure
**Requirement:** Each glossary entry shall contain, at minimum:

| Field | Description | Required |
|-------|-------------|----------|
| Term | The term being defined | MUST |
| Abbreviation | Acronym or short form (if applicable) | SHOULD |
| Definition | Clear, unambiguous definition | MUST |
| Source | Reference to authoritative source | MUST |
| Category | Term category (BWB, H₂, Neural, etc.) | MUST |
| ATA Reference | Related ATA chapter(s) | SHOULD |
| Related Terms | Cross-references to related entries | SHOULD |
| Notes | Usage notes or caveats | MAY |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Consistent structure enables search and validation |
| Verification | Inspection |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-111:
**Old ID:** REQ-GLO-021   Definition Quality
**Requirement:** Each definition shall:
- Be written in a single, complete sentence
- Avoid circular definitions (term shall not appear in its own definition)
- Use only terms that are themselves defined or are standard aerospace terminology
- Be technology-neutral where possible (describe function, not implementation)

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | ISO 704 terminology principles |
| Verification | Review |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-112:
**Old ID:** REQ-GLO-022   Abbreviation Uniqueness
**Requirement:** Each abbreviation shall be unique within the glossary; if an abbreviation has multiple meanings in different domains, each shall be a separate entry with domain qualifier.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents ambiguity |
| Verification | Inspection (automated check) |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-113:
**Old ID:** REQ-GLO-023   Alphabetical Organization
**Requirement:** The glossary shall be organized alphabetically by term, with a separate section for abbreviations.

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Standard glossary convention |
| Verification | Inspection |
| Parent | — |

---

### 3.4 Source Requirements — References

#### REQ-AMPEL-00-00-02-SE-114:
**Old ID:** REQ-GLO-030   Source Citation
**Requirement:** Each term shall cite its authoritative source using the following hierarchy:

| Priority | Source Type | Example |
|----------|-------------|---------|
| 1 | International Standard | ISO, SAE, EUROCAE |
| 2 | Regulatory Document | CS-25, 14 CFR, EASA guidance |
| 3 | Industry Specification | ATA iSpec 2200, S1000D |
| 4 | Peer-Reviewed Publication | Journal, conference paper |
| 5 | Program-Defined | "AMPEL360 Program Office" |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Establishes terminology provenance |
| Verification | Review |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-115:
**Old ID:** REQ-GLO-031   Program-Defined Terms
**Requirement:** Terms defined by the program (Source = "AMPEL360 Program Office") shall include:
- Rationale for why existing standards do not provide an adequate definition
- Date of definition approval
- Approving authority (STK code)

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Ensures novel terms are traceable |
| Verification | Review |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-116:
**Old ID:** REQ-GLO-032   Source Conflict Resolution
**Requirement:** Where multiple sources define the same term differently, the glossary shall:
- Select one definition as authoritative
- Document the selection rationale
- List alternative definitions in Notes field

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents ambiguity from source conflicts |
| Verification | Review |
| Parent | KNOT-00-00-001 |

---

### 3.5 Integration Requirements

#### REQ-AMPEL-00-00-02-SE-117:
**Old ID:** REQ-GLO-040   CSDB Publication
**Requirement:** The glossary shall be published as an S1000D Data Module (DM) in the CSDB with:
- DMC following program conventions
- BREX-compliant structure
- Searchable content

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Integration with publication system |
| Verification | BREX+CI |
| Downstream | KNU-00-00-001-PUB-001 |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-118:
**Old ID:** REQ-GLO-041   Machine-Readable Format
**Requirement:** The glossary shall be available in a machine-readable format (CSV, JSON, or YAML) in addition to the human-readable DM.

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Enables automated validation and AI/agent consumption |
| Verification | Inspection |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-119:
**Old ID:** REQ-GLO-042   Cross-Reference Links
**Requirement:** Glossary terms appearing in other program documents shall be hyperlinked to the glossary entry (where the publication format supports hyperlinks).

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Improves navigability |
| Verification | Inspection |
| Parent | KNOT-00-00-004 |

---

### 3.6 Governance Requirements

#### REQ-AMPEL-00-00-02-SE-120:
**Old ID:** REQ-GLO-050   Change Control
**Requirement:** Changes to the glossary shall follow the program change control process (LC08), including:
- Change request documentation
- Impact assessment
- Approval workflow
- Version increment

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Configuration management |
| Verification | Review |
| Downstream | KNU-00-00-001-CM-001 |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-121:
**Old ID:** REQ-GLO-051   Version Identification
**Requirement:** Each glossary release shall have a unique version identifier following program conventions.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Configuration traceability |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-122:
**Old ID:** REQ-GLO-052   Deprecation Policy
**Requirement:** Terms that are superseded or removed shall be marked as deprecated (not deleted) with:
- Deprecation date
- Reason for deprecation
- Replacement term (if applicable)
- Retention period (minimum 2 major versions)

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Maintains historical traceability |
| Verification | Review |
| Parent | KNOT-00-00-001 |

#### REQ-AMPEL-00-00-02-SE-123:
**Old ID:** REQ-GLO-053   Review Cycle
**Requirement:** The glossary shall be reviewed for completeness and accuracy at each major program milestone.

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Ensures terminology remains current |
| Verification | Review |
| Parent | KNOT-00-00-001 |

---

## 4. Requirements Summary

### 4.1 Requirements Count

| Category | MUST | SHOULD | MAY | Total |
|----------|------|--------|-----|-------|
| General | 4 | 0 | 0 | 4 |
| Content | 6 | 0 | 0 | 6 |
| Structure | 3 | 1 | 0 | 4 |
| Source | 3 | 0 | 0 | 3 |
| Integration | 1 | 2 | 0 | 3 |
| Governance | 2 | 2 | 0 | 4 |
| **Total** | **19** | **5** | **0** | **24** |

### 4.2 Acceptance Criteria Summary

| Metric | Target |
|--------|--------|
| BWB terms defined | ≥40 |
| H₂ terms defined | ≥60 |
| Neural terms defined | ≥50 |
| Circularity/DPP terms defined | ≥30 |
| OPT-IN terms defined | ≥40 |
| DEP terms defined | ≥35 |
| **Total minimum terms** | **≥255** |

---

## 5. Traceability

### 5.1 Upstream Traceability

| Source | Trace |
|--------|-------|
| KNOT-00-00-001 | Problem statement: terminology standardization |
| ISO 704 | Terminology work principles |
| ISO 1087 | Terminology concepts |

### 5.2 Downstream Traceability

| Target | Trace |
|--------|-------|
| KNU-00-00-001-ICD-001 | Terminology Database Schema |
| KNU-00-00-001-ANA-001 | Terminology Gap Analysis |
| KNU-00-00-001-CM-001 | Terminology Change Control Process |
| KNU-00-00-001-PUB-001 | Program Glossary DM |

---

## 6. Verification Matrix

| REQ ID | Method | Responsible | Evidence |
|--------|--------|-------------|----------|
| REQ-GLO-001 | Inspection | STK_CM | Glossary exists |
| REQ-GLO-002 | Review | STK_CM | Authority statement |
| REQ-GLO-003 | Demonstration | STK_CM | Access without tools |
| REQ-GLO-004 | Inspection | STK_PUB | Language check |
| REQ-GLO-010 | Review | STK_SE | Term count ≥40 |
| REQ-GLO-011 | Review | STK_SE | Term count ≥60 |
| REQ-GLO-012 | Review | STK_AI | Term count ≥50 |
| REQ-GLO-013 | Review | STK_SE | Term count ≥30 |
| REQ-GLO-014 | Review | STK_CM | Term count ≥40 |
| REQ-GLO-015 | Review | STK_SE | Term count ≥35 |
| REQ-GLO-020 | Inspection | STK_CM | Entry structure |
| REQ-GLO-021 | Review | STK_CM | Definition quality |
| REQ-GLO-022 | Inspection | STK_DATA | Uniqueness check |
| REQ-GLO-023 | Inspection | STK_CM | Alphabetical order |
| REQ-GLO-030 | Review | STK_CM | Source citations |
| REQ-GLO-031 | Review | STK_CM | Program-defined docs |
| REQ-GLO-032 | Review | STK_CM | Conflict resolution |
| REQ-GLO-040 | BREX+CI | STK_PUB | DM validation |
| REQ-GLO-041 | Inspection | STK_DATA | Machine format |
| REQ-GLO-042 | Inspection | STK_PUB | Hyperlinks |
| REQ-GLO-050 | Review | STK_CM | Change process |
| REQ-GLO-051 | Inspection | STK_CM | Version ID |
| REQ-GLO-052 | Review | STK_CM | Deprecation records |
| REQ-GLO-053 | Review | STK_CM | Review records |

---

## 7. Open Items

### 7.1 TBDs

| TBD ID | Description | Owner | Target Date |
|--------|-------------|-------|-------------|
| TBD-GLO-001 | Final term count targets per category | STK_CM | 2026-02-15 |
| TBD-GLO-002 | Machine-readable format selection (CSV vs JSON vs YAML) | STK_DATA | 2026-02-20 |

### 7.2 TBRs

| TBR ID | Description | Owner | Target Date |
|--------|-------------|-------|-------------|
| TBR-GLO-001 | Review term categories for completeness | STK_SE | 2026-02-10 |

---

## 8. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| I01-R01 | 2026-01-12 | STK_CM | Initial release |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-00-00-001-REQ-001 defines requirements for the Program Glossary addressing KNOT-00-00-001.*
