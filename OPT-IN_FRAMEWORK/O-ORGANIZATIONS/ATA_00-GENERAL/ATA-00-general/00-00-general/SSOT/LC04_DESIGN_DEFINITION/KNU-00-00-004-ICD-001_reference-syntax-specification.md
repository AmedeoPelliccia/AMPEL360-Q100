---
knu_id: KNU-00-00-004-ICD-001
knot_id: KNOT-00-00-004
title: Reference Syntax Specification
type: ICD
artifact_class: SSOT
status: GENERATED
owner: STK_DATA
due_date: 2026-04-30
priority: HIGH
lifecycle_stage: LC04_DESIGN_DEFINITION
ata_chapter: "00"
ata_section: "00"
program: AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft
version: I001-R00
date_created: 2026-01-12
spawned_by: BASELINE
related_tbds:
  - TBD-00-009
triggered_knus:
  - KNU-00-00-004-TEST-001
uri_schemes:
  - term://
  - knu://
  - knot://
  - tbd://
  - ampel360:
---

# KNU-00-00-004-ICD-001: Reference Syntax Specification

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-00-00-004-ICD-001 |
| **KNOT ID** | KNOT-00-00-004 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_DATA |
| **Due Date** | 2026-04-30 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |

---

## Purpose

This Interface Control Document specifies the URI schemes and cross-reference syntax for all artifacts in the AMPEL360 Q100 program, enabling seamless traceability from requirements through certification evidence.

---

## URI Schemes for SSOT Artifacts

### Term References

**Syntax:**
```
term://{term_id}
```

**Components:**
- **Scheme:** `term://`
- **Term ID:** Unique identifier from terminology database (lowercase, hyphen-separated)

**Examples:**
```
term://bwb
term://lh2
term://fuel-cell
term://learning-assurance
term://blended-wing-body
```

**Resolution:**
- **Target:** Terminology database entry
- **Returns:** Full term definition, examples, related terms, usage notes
- **Implementation:** Database query: `SELECT * FROM terms WHERE term_id = ?`

**Usage:**
```markdown
The [BWB](term://bwb) configuration offers improved aerodynamic efficiency.
Liquid hydrogen ([LH₂](term://lh2)) storage requires cryogenic tanks.
```

---

### KNU References

**Syntax:**
```
knu://{knu_id}
```

**Components:**
- **Scheme:** `knu://`
- **KNU ID:** Full KNU identifier (format: KNU-##-##-###-TYPE-###)

**Examples:**
```
knu://KNU-00-00-001-REQ-001
knu://KNU-28-10-005-ICD-002
knu://KNU-00-00-004-ICD-001
```

**Resolution:**
- **Target:** KNU_PLAN.csv entry → artifact file
- **Returns:** KNU metadata, file path, status, owner, dependencies
- **Implementation:** CSV lookup + file system access

**Usage:**
```markdown
This requirement is specified in [KNU-00-00-001-REQ-001](knu://KNU-00-00-001-REQ-001).
The fuel cell interface is defined in [KNU-28-10-005-ICD-002](knu://KNU-28-10-005-ICD-002).
```

---

### KNOT References

**Syntax:**
```
knot://{knot_id}
```

**Components:**
- **Scheme:** `knot://`
- **KNOT ID:** Full KNOT identifier (format: KNOT-##-##-###)

**Examples:**
```
knot://KNOT-00-00-001
knot://KNOT-28-10-005
knot://KNOT-96-10-001
```

**Resolution:**
- **Target:** KNOTS.csv entry
- **Returns:** KNOT details, associated KNUs, residual uncertainty, status
- **Implementation:** CSV lookup + aggregation of KNU statuses

**Usage:**
```markdown
The terminology system is managed under [KNOT-00-00-001](knot://KNOT-00-00-001).
This uncertainty is tracked in [KNOT-28-10-005](knot://KNOT-28-10-005).
```

---

### TBD References

**Syntax:**
```
tbd://{tbd_id}
```

**Components:**
- **Scheme:** `tbd://`
- **TBD ID:** Full TBD identifier (format: TBD-##-###)

**Examples:**
```
tbd://TBD-00-003
tbd://TBD-28-003
tbd://TBD-00-007
```

**Resolution:**
- **Target:** TBD register (inline [TBD-##-###] markers + centralized register)
- **Returns:** TBD description, classification, resolution target, spawned KNUs
- **Implementation:** Markdown scan + register lookup

**Usage:**
```markdown
The version numbering convention [TBD-00-007](tbd://TBD-00-007) needs resolution.
Database selection is addressed in [TBD-00-001](tbd://TBD-00-001).
```

---

### DPP References

**Syntax:**
```
ampel360:{namespace}:{identifier}
```

**Components:**
- **Prefix:** `ampel360:`
- **Namespace:** One of `term`, `unit`, `component`, `doc`, `knu`
- **Identifier:** Namespace-specific unique identifier

**Examples:**
```
ampel360:term:fuel-cell
ampel360:unit:kg
ampel360:component:FWD-LH2-TANK-001
ampel360:doc:DMC-AMPEL360-00-00-0-0-00-00A-001A-A
ampel360:knu:KNU-00-00-001-REQ-001
```

**Resolution:**
- **Target:** Digital Product Passport database
- **Returns:** Component/term lifecycle data, provenance, certifications
- **Implementation:** DPP API query

**Usage:**
```markdown
The forward LH₂ tank [FWD-LH2-TANK-001](ampel360:component:FWD-LH2-TANK-001) is rated for 700 bar.
Mass is measured in [kilograms](ampel360:unit:kg).
```

---

## S1000D Cross-References

### Internal References (within same DM)

**S1000D XML:**
```xml
<internalRef internalRefId="term-bwb" internalRefTargetType="irtt01">
  BWB
</internalRef>
```

**Attributes:**
- **internalRefId:** Target element ID within the same Data Module
- **internalRefTargetType:** Type of target (irtt01 = definition, irtt02 = figure, etc.)

**Markdown Equivalent:**
```markdown
[BWB](#term-bwb)
```

**Target Definition:**
```xml
<definitionListItem id="term-bwb">
  <listItemTerm>BWB</listItemTerm>
  <listItemDefinition>
    <para>Blended Wing Body...</para>
  </listItemDefinition>
</definitionListItem>
```

---

### Cross-DM References

**S1000D XML:**
```xml
<dmRef>
  <dmRefIdent>
    <dmCode modelIdentCode="AMPEL360" 
            systemCode="00" 
            subSystemCode="00" 
            subSubSystemCode="0" 
            assyCode="0" 
            disassyCode="00" 
            disassyCodeVariant="00" 
            infoCode="A" 
            infoCodeVariant="001" 
            itemLocationCode="A" 
            learnCode="A" 
            learnEventCode="00"/>
  </dmRefIdent>
  <dmRefAddressItems>
    <dmTitle>
      <techName>Program Glossary</techName>
    </dmTitle>
  </dmRefAddressItems>
</dmRef>
```

**Simplified Markdown:**
```markdown
[Program Glossary](DMC-AMPEL360-00-00-0-0-00-00A-001A-A)
```

**Attributes:**
- **dmCode:** Full Data Module Code per S1000D specification
- **dmTitle:** Human-readable title for display

---

### External Publication References

**S1000D XML:**
```xml
<externalPubRef>
  <externalPubRefIdent>
    <externalPubCode>S1000D Issue 5.0</externalPubCode>
  </externalPubRefIdent>
  <externalPubTitle>
    <externalPubTitleValue>
      International Specification for Technical Publications
    </externalPubTitleValue>
  </externalPubTitle>
</externalPubRef>
```

**Markdown Equivalent:**
```markdown
[S1000D Issue 5.0](https://s1000d.org)
```

**Common External References:**
- **S1000D Issue 5.0:** International technical publication standard
- **ATA iSpec 2200:** Air Transport Association specification
- **ISO 12620:** Terminology work — Computer applications
- **IEEE 1012:** Software Verification and Validation

---

## Traceability Matrix Format

### Requirements → Design

**YAML Format:**
```yaml
KNU-00-00-001-REQ-001:
  knu_id: KNU-00-00-001-REQ-001
  title: Program Glossary Requirements
  satisfies: []
  satisfied_by:
    - KNU-00-00-001-ICD-001
    - KNU-00-00-001-PUB-001
  traces_to:
    - S1000D Issue 5.0
    - ISO 12620
  status: GENERATED
  verification_method: Review
```

**Relationship Types:**
- **satisfies:** Parent requirements (empty for top-level requirements)
- **satisfied_by:** Child design/implementation artifacts
- **traces_to:** External standards or specifications
- **verified_by:** Test or verification artifacts

---

### Design → Test

**YAML Format:**
```yaml
KNU-00-00-001-ICD-001:
  knu_id: KNU-00-00-001-ICD-001
  title: Terminology Database Schema
  satisfies:
    - KNU-00-00-001-REQ-001
  verified_by:
    - KNU-00-00-001-TEST-001
  related_tbds:
    - TBD-00-003
    - TBD-00-005
  dependencies:
    - KNU-00-00-002-ICD-001  # ID grammar
    - KNU-96-10-001-ICD-002  # DPP integration
  status: GENERATED
```

**Relationship Types:**
- **satisfies:** Parent requirements
- **verified_by:** Test cases and validation procedures
- **related_tbds:** Unresolved uncertainties affecting this artifact
- **dependencies:** Other artifacts this depends on

---

### Test → Evidence

**YAML Format:**
```yaml
KNU-00-00-001-TEST-001:
  knu_id: KNU-00-00-001-TEST-001
  title: Schema Validation Tests
  verifies:
    - KNU-00-00-001-ICD-001
  test_cases:
    - TC-001: Term insertion with all fields
    - TC-002: Cross-reference integrity
    - TC-003: Version history tracking
  evidence:
    - TEST-REPORT-001.pdf
    - CI-BUILD-LOG-2026-02-20.txt
  pass_rate: 100%
  status: PLANNED
```

**Relationship Types:**
- **verifies:** Design artifacts under test
- **test_cases:** Individual test case identifiers
- **evidence:** Test reports, logs, certification packages
- **pass_rate:** Percentage of test cases passing

---

## Traceability Matrix Example

**Full Trace Path:**
```
External Standard (ISO 12620)
    ↓ traces_to
KNU-00-00-001-REQ-001 (Requirement)
    ↓ satisfied_by
KNU-00-00-001-ICD-001 (Design)
    ↓ verified_by
KNU-00-00-001-TEST-001 (Test)
    ↓ evidence
TEST-REPORT-001.pdf (Evidence)
```

**YAML Representation:**
```yaml
trace_path:
  - standard: ISO 12620
    relationship: traces_to
    knu: KNU-00-00-001-REQ-001
  - knu: KNU-00-00-001-REQ-001
    relationship: satisfied_by
    knu: KNU-00-00-001-ICD-001
  - knu: KNU-00-00-001-ICD-001
    relationship: verified_by
    knu: KNU-00-00-001-TEST-001
  - knu: KNU-00-00-001-TEST-001
    relationship: evidence
    artifact: TEST-REPORT-001.pdf
```

---

## Potential TBDs

The following uncertainties have been identified and require resolution:

### [TBD-00-009] External Standards Reference Resolution

**Description:** Define resolution mechanism for external standards references (IEEE, ISO, etc.)

**Context:** Need automated link checking and version tracking for external standards

**Proposed Solutions:**
1. **DOI-based resolution:** Use Digital Object Identifiers for stable links
2. **Local mirror:** Maintain local copies of referenced standards
3. **Version registry:** Track which version of each standard applies to Q100

**Impact:** Affects traceability completeness and certification evidence package

**Classification:** CLASS III (operational improvement)

**Resolution Target:** 2026-05-01

---

## Triggered KNUs

The following KNUs are spawned by this ICD to address embedded TBDs:

### KNU-00-00-004-TEST-001: Link Integrity Validation Tests

**Purpose:** 100% links resolve correctly

**Acceptance Criteria:**
- CI/CD pipeline validates all internal links
- External link checker runs nightly
- Broken link reports generated automatically
- Link resolution time <100ms per link

**Spawned By:** TBD-00-009

**Due Date:** 2026-05-05

---

## Implementation Notes

### Link Resolution Pipeline

**Stage 1: Parse References**
```python
import re

# Extract all URI-style references
uri_pattern = r'(term|knu|knot|tbd|ampel360)://[\w-]+'
refs = re.findall(uri_pattern, markdown_content)
```

**Stage 2: Resolve Targets**
```python
def resolve_reference(uri: str):
    scheme, target = uri.split('://', 1)
    
    if scheme == 'term':
        return database.query_term(target)
    elif scheme == 'knu':
        return csv_lookup('KNU_PLAN.csv', target)
    elif scheme == 'knot':
        return csv_lookup('KNOTS.csv', target)
    elif scheme == 'tbd':
        return tbd_register.lookup(target)
    elif scheme.startswith('ampel360'):
        return dpp_api.query(uri)
```

**Stage 3: Validate Links**
```python
def validate_links(markdown_file):
    refs = extract_references(markdown_file)
    broken_links = []
    
    for ref in refs:
        if not resolve_reference(ref):
            broken_links.append(ref)
    
    return broken_links
```

---

## Traceability

### Satisfies Requirements

- **KNU-00-00-004-REQ-001:** Cross-Reference System Requirements

### Verified By

- **KNU-00-00-004-TEST-001:** Link Integrity Validation Tests (to be created)

### Related Artifacts

- **KNU-00-00-002-ICD-001:** Document ID Grammar Specification
- **KNU-00-00-001-ICD-001:** Terminology Database Schema
- **KNU-96-10-001-ICD-002:** DPP-Terminology Namespace Integration

---

## References

### Standards

- **S1000D Issue 5.0:** Cross-reference and linking specifications
- **RFC 3986:** Uniform Resource Identifier (URI): Generic Syntax
- **ISO/IEC 19788:** Metadata for learning resources
- **OSLC:** Open Services for Lifecycle Collaboration

### Internal Documents

- **KNU-00-00-004-REQ-001:** Cross-Reference System Requirements
- **KNU_PLAN.csv:** Master KNU register
- **KNOTS.csv:** Master KNOT register

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-12 | STK_DATA | Initial baseline - GENERATED |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_DATA and STK_SE

**Notes:** This ICD establishes the URI schemes and cross-reference syntax for the AMPEL360 Q100 program. All artifacts must use these standardized reference formats to ensure traceability and link integrity.
