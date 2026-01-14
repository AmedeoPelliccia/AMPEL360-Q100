# KNU-00-00-002-REQ-001 — Document Numbering Requirements

**KNU ID:** KNU-00-00-002-REQ-001  
**KNOT Reference:** [KNOT-00-00-002](../LC01_PROBLEM_STATEMENT/README.md#knot-00-00-002) — Document Architecture Conventions  
**Artifact Class:** SSOT  
**KNU Type:** REQ  
**Version:** I01-R01  
**Status:** DRAFT  
**Owner:** STK_CM  
**Due Date:** 2026-03-15  
**Effort Predicted:** 5 story points  

---

## 1. Purpose

This document defines the **requirements for document numbering and identification** across the AMPEL360 Q100 program. The ID scheme must uniquely identify all artifacts spanning SSOT engineering evidence, PUB deliverables, and cross-reference targets.

### 1.1 Scope

| In-Scope | Out-of-Scope |
|----------|--------------|
| Document ID syntax and grammar | S1000D DMC assignment (governed by S1000D spec) |
| Version numbering conventions | Content of individual documents |
| Revision tracking rules | Approval workflow implementation |
| Folder naming conventions | IT system architecture |
| Artifact type classification | Tooling implementation details |
| Cross-reference URI syntax | Automated generation algorithms |

### 1.2 Design Principles

The ID scheme shall adhere to these principles:

| Principle | Rationale |
|-----------|-----------|
| **Human-Readable** | IDs navigable without tooling |
| **Machine-Parseable** | Regex-extractable for automation |
| **Hierarchical** | Reflects OPT-IN structure |
| **Extensible** | Accommodates future artifact types |
| **Immutable** | IDs never reused after retirement |

---

## 2. Applicable Documents

### 2.1 Governing Documents

| Document | Applicability |
|----------|---------------|
| ATA iSpec 2200 | Chapter/section/subject numbering |
| S1000D Issue 5.0 | Data Module Code (DMC) structure |
| ISO 11179 | Metadata and naming conventions |
| ISO 8601 | Date and time formatting |

### 2.2 Reference Documents

| Document | Applicability |
|----------|---------------|
| [KNOT-00-00-001](../LC01_PROBLEM_STATEMENT/README.md#knot-00-00-001) | Terminology definitions |
| [KNU-00-00-001-REQ-001](./KNU-00-00-001-REQ-001_program-glossary-requirements.md) | Glossary requirements |
| OPT-IN Framework Standard | Axis and lifecycle definitions |

---

## 3. Requirements

### 3.1 General ID Requirements

#### REQ-AMPEL-00-00-02-SE-300:
**Old ID:** REQ-DOC-001   Unique Identification
**Requirement:** Every artifact in the AMPEL360 Q100 program shall have a unique identifier that remains stable throughout the artifact's lifecycle.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Enables unambiguous reference and traceability |
| Verification | Inspection (uniqueness check) |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-301:
**Old ID:** REQ-DOC-002   ID Immutability
**Requirement:** Once assigned, an artifact ID shall not be reused for any other artifact, even after the original artifact is retired or deleted.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Prevents reference confusion in historical records |
| Verification | Review |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-302:
**Old ID:** REQ-DOC-003   Human-Readable Format
**Requirement:** All IDs shall be human-readable and interpretable without specialized tooling or lookup tables.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Aligns with human-readable first principle |
| Verification | Demonstration |
| Parent | KNOT-00-00-004 |

#### REQ-AMPEL-00-00-02-SE-303:
**Old ID:** REQ-DOC-004   Machine-Parseable Format
**Requirement:** All IDs shall be parseable by regular expressions to extract structural components (axis, ATA, section, type, sequence).

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Enables automated validation and cross-referencing |
| Verification | Test (regex extraction) |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-304:
**Old ID:** REQ-DOC-005   Character Set
**Requirement:** IDs shall use only ASCII alphanumeric characters (A-Z, a-z, 0-9) plus hyphen (-) and underscore (_) as separators.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Maximum compatibility across systems |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

---

### 3.2 ATA Address Requirements

#### REQ-AMPEL-00-00-02-SE-305:
**Old ID:** REQ-DOC-010   ATA Address Structure
**Requirement:** The ATA address shall follow the hierarchical structure:

```
ATA-CC-SS-SU-SB
```

| Component | Description | Format | Example |
|-----------|-------------|--------|---------|
| CC | Chapter | 2 digits (00–99) | 28 |
| SS | Section | 2 digits (00–99) | 10 |
| SU | Subject | 2 digits (00–99) | 00 |
| SB | Sub-subject | 2 digits (00–99) | 00 |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Aligns with ATA iSpec 2200 |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-306:
**Old ID:** REQ-DOC-011   ATA Chapter Range
**Requirement:** Valid ATA chapter numbers shall be:
- 00–05: O-ORGANIZATIONS
- 06–12: P-PROGRAMS  
- 20–57, 60–80: T-TECHNOLOGIES (standard ATA)
- 95, 97: T-TECHNOLOGIES (neural systems extension)
- 96, 98: N-NEURAL_NETWORKS
- 03*, 08*, 10*, 12*, 85*, IN-*: I-INFRASTRUCTURES (with suffix markers)

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Maps to OPT-IN axis structure |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-307:
**Old ID:** REQ-DOC-012   Reserved Sections
**Requirement:** Section 90 (xx-90) shall be reserved for tables, schemas, and indices within each ATA chapter.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Consistent location for reference material |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

---

### 3.3 KNU ID Requirements

#### REQ-AMPEL-00-00-02-SE-308:
**Old ID:** REQ-DOC-020   KNU ID Structure
**Requirement:** Knowledge Unit identifiers shall follow the structure:

```
KNU-CC-SS-NNN-TYP-SSS
```

| Component | Description | Format | Example |
|-----------|-------------|--------|---------|
| KNU | Prefix (literal) | "KNU" | KNU |
| CC-SS | ATA chapter-section | NN-NN | 00-00 |
| NNN | KNOT sequence within section | 3 digits | 001 |
| TYP | Artifact type code | 3 chars | REQ |
| SSS | Sequence within type | 3 digits | 001 |

**Full Example:** `KNU-00-00-001-REQ-001`

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Links KNU to parent KNOT and specifies artifact type |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-309:
**Old ID:** REQ-DOC-021   KNU Type Codes
**Requirement:** Valid KNU type codes shall be:

| Code | Full Name | Artifact Class | Target LC |
|------|-----------|----------------|-----------|
| REQ | Requirements | SSOT | LC02 |
| ICD | Interface Control Document | SSOT | LC04 |
| ANA | Analysis | SSOT | LC05 |
| SAF | Safety | SSOT | LC03 |
| TST | Test | SSOT | LC06 |
| VAL | Validation | SSOT | LC07 |
| CM | Configuration Management | SSOT | LC08 |
| PRD | Production | SSOT | LC09 |
| OPS | Operations | SSOT | LC10 |
| MNT | Maintenance | SSOT | LC11 |
| CUS | Customer Care | SSOT | LC12 |
| TRN | Training | SSOT | LC13 |
| RET | Retirement/Circularity | SSOT | LC14 |
| PUB | Publication | CSDB | PUB |
| PLAN | Plan Document | SSOT | Any |
| RPT | Report | SSOT | Any |
| LOG | Log/Record | SSOT | Any |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Standard type codes enable filtering and routing |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-310:
**Old ID:** REQ-DOC-022   KNU ID Uniqueness Scope
**Requirement:** KNU IDs shall be unique within the entire program (global scope), not just within a KNOT or section.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Enables cross-reference without context |
| Verification | Inspection (uniqueness check) |
| Parent | KNOT-00-00-002 |

---

### 3.4 KNOT ID Requirements

#### REQ-AMPEL-00-00-02-SE-311:
**Old ID:** REQ-DOC-030   KNOT ID Structure
**Requirement:** Known Unknown (KNOT) identifiers shall follow the structure:

```
KNOT-CC-SS-SU-NNN
```

| Component | Description | Format | Example |
|-----------|-------------|--------|---------|
| KNOT | Prefix (literal) | "KNOT" | KNOT |
| CC-SS-SU | ATA chapter-section-subject | NN-NN-NN | 00-00-00 |
| NNN | Sequence within subject | 3 digits | 001 |

**Full Example:** `KNOT-00-00-00-001`

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Locates uncertainty within ATA structure |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-02-SE-312: KNOT Sequence Assignment
**Old ID:** REQ-DOC-031
**Requirement:** KNOT sequence numbers shall be assigned in order of creation within each ATA subject and shall not be reused.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Maintains creation order and prevents reuse |
| Verification | Review |
| Parent | KNOT-00-00-002 |

---

### 3.5 Version and Revision Requirements

#### REQ-AMPEL-00-00-08-CM-040:
**Old ID:** REQ-DOC-040   Version-Revision Structure
**Requirement:** Document versions shall follow the structure:

```
Ixx-Ryy
```

| Component | Description | Increment Trigger |
|-----------|-------------|-------------------|
| I | Issue prefix | — |
| xx | Issue number (01–99) | Major baseline change |
| R | Revision prefix | — |
| yy | Revision number (01–99) | Minor update within issue |

**Examples:** `I01-R01`, `I01-R02`, `I02-R01`

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Aligns with aerospace documentation standards |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-041:
**Old ID:** REQ-DOC-041   Issue Increment Criteria
**Requirement:** The issue number (Ixx) shall increment when:
- Document scope changes significantly
- Document is re-baselined for a new program phase
- Certification authority requires new baseline
- Major structural reorganization occurs

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Distinguishes major from minor changes |
| Verification | Review |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-042:
**Old ID:** REQ-DOC-042   Revision Increment Criteria
**Requirement:** The revision number (Ryy) shall increment for:
- Content corrections
- Clarifications
- Minor additions within existing scope
- Editorial changes

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Tracks incremental changes |
| Verification | Review |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-043:
**Old ID:** REQ-DOC-043   Version Reset on Issue
**Requirement:** When the issue number increments, the revision number shall reset to 01.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Clean versioning per issue |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-044:
**Old ID:** REQ-DOC-044   Draft Marking
**Requirement:** Documents not yet approved shall include "DRAFT" status in the header; draft versions may use revision suffix "-DRAFTn" (e.g., `I01-R01-DRAFT1`).

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Clearly distinguishes working documents |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

---

### 3.6 Folder Naming Requirements

#### REQ-AMPEL-00-00-08-CM-050:
**Old ID:** REQ-DOC-050   Folder Naming Convention
**Requirement:** Folder names shall follow the pattern:

| Level | Pattern | Example |
|-------|---------|---------|
| Axis | `X-AXIS_NAME/` | `T-TECHNOLOGIES_AMEDEOPELLICCIA-ON_BOARD_SYSTEMS/` |
| Domain | `X#-DOMAIN_NAME/` | `I2-INTELLIGENCE/` |
| ATA Chapter | `ATA_CC-CHAPTER_NAME/` | `ATA_95-AI_ML_MODELS/` |
| ATA Path | `ATA-cc-chapter-name/` | `ATA-95-ai-ml-models/` |
| Section | `cc-ss-section-name/` | `95-00-general/` |
| LC Category | `LCnn_CATEGORY_NAME/` | `LC02_SYSTEM_REQUIREMENTS/` |
| PUB Type | `TYPE/` | `AMM/`, `CSDB/`, `DM/` |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Consistent navigation across repository |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-051:
**Old ID:** REQ-DOC-051   Lowercase Path Segments
**Requirement:** ATA path segments (below `ATA_CC-NAME/`) shall use lowercase with hyphens as word separators.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Consistency and URL compatibility |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-052:
**Old ID:** REQ-DOC-052   No Spaces in Paths
**Requirement:** Folder and file names shall not contain spaces; underscores or hyphens shall be used as word separators.

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Cross-platform compatibility |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

---

### 3.7 File Naming Requirements

#### REQ-AMPEL-00-00-08-CM-060:
**Old ID:** REQ-DOC-060   SSOT File Naming
**Requirement:** SSOT artifact files shall be named:

```
KNU-ID_short-title.ext
```

| Component | Description | Example |
|-----------|-------------|---------|
| KNU-ID | Full KNU identifier | KNU-00-00-001-REQ-001 |
| short-title | Descriptive slug (lowercase, hyphens) | program-glossary-requirements |
| ext | File extension | .md, .csv, .yaml |

**Full Example:** `KNU-00-00-001-REQ-001_program-glossary-requirements.md`

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Self-describing file names |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-061:
**Old ID:** REQ-DOC-061   LC01 Standard Files
**Requirement:** LC01_PROBLEM_STATEMENT folders shall contain these standard files:

| File | Required | Description |
|------|----------|-------------|
| README.md | MUST | Overview and context |
| KNOTS.csv | MUST | Uncertainty register |
| KNU_PLAN.csv | MUST | Planned artifacts |
| TIMELINE.csv | MUST | Milestone schedule |
| RACI.csv | MUST | Responsibility matrix |
| TOKENOMICS_TT.yaml | MUST | Reward configuration |
| AWARDS_TT.csv | MUST | Distribution ledger |

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Standard LC01 artifact set |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-08-CM-062:
**Old ID:** REQ-DOC-062   Supporting File Naming
**Requirement:** Supporting files (matrices, logs, indices) shall include the parent KNU ID or descriptive prefix:

```
KNU-ID_suffix.ext
```

**Examples:**
- `KNU-00-00-001-REQ-001_requirements-matrix.csv`
- `KNU-00-00-001-REQ-001_verification-log.csv`

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Associates supporting files with parent artifacts |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

---

### 3.8 Cross-Reference URI Requirements

#### REQ-AMPEL-00-00-04-SE-070:
**Old ID:** REQ-DOC-070   Internal URI Scheme
**Requirement:** Internal cross-references shall use relative paths from the referencing document:

```
[Link Text](../relative/path/to/artifact.md)
[Link Text](../relative/path/to/artifact.md#section-anchor)
```

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Portable references without absolute paths |
| Verification | Inspection |
| Parent | KNOT-00-00-004 |

#### REQ-AMPEL-00-00-04-SE-071:
**Old ID:** REQ-DOC-071   Anchor Naming
**Requirement:** Section anchors shall use lowercase with hyphens, matching the heading text:

| Heading | Anchor |
|---------|--------|
| `## 3.1 General Requirements` | `#31-general-requirements` |
| `### KNOT-00-00-001` | `#knot-00-00-001` |

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Consistent anchor generation |
| Verification | Inspection |
| Parent | KNOT-00-00-004 |

#### REQ-AMPEL-00-00-04-SE-072:
**Old ID:** REQ-DOC-072   External Reference Format
**Requirement:** References to external documents shall include:
- Document identifier
- Version (if applicable)
- Section/clause (if applicable)

**Format:** `[DOC-ID] Version, Section`  
**Example:** `[SAE ARP4754A] Rev B, §5.2.1`

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | Precise external traceability |
| Verification | Review |
| Parent | KNOT-00-00-004 |

---

### 3.9 S1000D Integration Requirements

#### REQ-AMPEL-00-00-CROSS-PUB-080:
**Old ID:** REQ-DOC-080   DMC Alignment
**Requirement:** S1000D Data Module Codes (DMC) shall align with the ATA address where applicable:

| DMC Component | Mapping |
|---------------|---------|
| System Code | ATA Chapter (2 digits) |
| Sub-system | ATA Section (2 digits) |
| Sub-sub-system | ATA Subject (2 digits) |
| Assembly | ATA Sub-subject (2 digits) |

| Attribute | Value |
|-----------|-------|
| Priority | SHOULD |
| Rationale | Maintains consistency between SSOT and PUB |
| Verification | Review |
| Parent | KNOT-00-00-002 |

#### REQ-AMPEL-00-00-CROSS-PUB-081:
**Old ID:** REQ-DOC-081   CSDB Folder Structure
**Requirement:** CSDB folders shall follow the S1000D component structure:

```
PUB/
└── AMM/
    ├── CSDB/
    │   ├── DM/           # Data Modules
    │   ├── PM/           # Publication Modules
    │   ├── DML/          # Data Module Lists
    │   ├── BREX/         # Business Rules
    │   ├── ICN/          # Illustrations
    │   ├── COMMON/       # Shared content
    │   └── APPLICABILITY/# ACT/PCT/CCT
    ├── EXPORT/           # Rendered outputs
    └── IETP/             # Interactive delivery
```

| Attribute | Value |
|-----------|-------|
| Priority | MUST |
| Rationale | S1000D standard structure |
| Verification | Inspection |
| Parent | KNOT-00-00-002 |

---

## 4. Requirements Summary

### 4.1 Requirements Count

| Category | MUST | SHOULD | MAY | Total |
|----------|------|--------|-----|-------|
| General ID | 5 | 0 | 0 | 5 |
| ATA Address | 3 | 0 | 0 | 3 |
| KNU ID | 3 | 0 | 0 | 3 |
| KNOT ID | 2 | 0 | 0 | 2 |
| Version/Revision | 4 | 1 | 0 | 5 |
| Folder Naming | 3 | 0 | 0 | 3 |
| File Naming | 2 | 1 | 0 | 3 |
| Cross-Reference | 2 | 1 | 0 | 3 |
| S1000D Integration | 1 | 1 | 0 | 2 |
| **Total** | **25** | **4** | **0** | **29** |

### 4.2 ID Grammar Summary

| Entity | Pattern | Example |
|--------|---------|---------|
| ATA Address | `ATA-CC-SS-SU-SB` | `ATA-28-10-00-00` |
| KNOT ID | `KNOT-CC-SS-SU-NNN` | `KNOT-28-10-00-001` |
| KNU ID | `KNU-CC-SS-NNN-TYP-SSS` | `KNU-28-10-001-REQ-001` |
| Version | `Ixx-Ryy` | `I01-R01` |
| File Name | `KNU-ID_short-title.ext` | `KNU-28-10-001-REQ-001_lh2-storage-requirements.md` |

---

## 5. Validation Rules

### 5.1 Regex Patterns

```regex
# ATA Address
^ATA-\d{2}-\d{2}-\d{2}-\d{2}$

# KNOT ID
^KNOT-\d{2}-\d{2}-\d{2}-\d{3}$

# KNU ID
^KNU-\d{2}-\d{2}-\d{3}-[A-Z]{2,4}-\d{3}$

# Version
^I\d{2}-R\d{2}(-DRAFT\d+)?$

# File Name (SSOT)
^KNU-\d{2}-\d{2}-\d{3}-[A-Z]{2,4}-\d{3}_[a-z0-9-]+\.[a-z]+$
```

### 5.2 CI Validation

**Requirement:** The program CI pipeline shall validate:
- ID uniqueness across repository
- ID format compliance with regex
- Cross-reference link integrity
- Folder naming compliance

---

## 6. Traceability

### 6.1 Upstream Traceability

| Source | Trace |
|--------|-------|
| KNOT-00-00-002 | Problem statement: document architecture conventions |
| KNOT-00-00-004 | Cross-reference system requirements |
| ATA iSpec 2200 | Chapter/section structure |
| S1000D Issue 5.0 | DMC structure |

### 6.2 Downstream Traceability

| Target | Trace |
|--------|-------|
| KNU-00-00-002-ICD-001 | Document ID Grammar Specification |
| KNU-00-00-002-CM-001 | Version Control Convention Guide |
| KNU-00-00-002-PUB-001 | Document Architecture Training DM |
| KNU-00-00-004-REQ-001 | Cross-Reference System Requirements |

---

## 7. Open Items

### 7.1 TBDs

| TBD ID | Description | Owner | Target Date |
|--------|-------------|-------|-------------|
| TBD-DOC-001 | Confirm KNOT ID includes subject (SU) level | STK_CM | 2026-02-28 |
| TBD-DOC-002 | Define sequence number allocation process | STK_DATA | 2026-03-01 |

### 7.2 TBRs

| TBR ID | Description | Owner | Target Date |
|--------|-------------|-------|-------------|
| TBR-DOC-001 | Review KNU type codes for completeness | STK_SE | 2026-02-20 |

---

## 8. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| I01-R01 | 2026-01-12 | STK_CM | Initial release |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*

*KNU-00-00-002-REQ-001 defines requirements for document numbering addressing KNOT-00-00-002.*
