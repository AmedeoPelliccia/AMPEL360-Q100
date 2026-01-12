---
knu_id: KNU-00-00-001-ICD-002
knot_id: KNOT-00-00-001
title: CSDB CIR Export Interface Specification
type: ICD
artifact_class: SSOT
status: GENERATED
owner: STK_CM
due_date: 2026-02-15
priority: HIGH
lifecycle_stage: LC04_DESIGN_DEFINITION
ata_chapter: "00"
ata_section: "00"
program: AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft
version: I001-R00
date_created: 2026-01-12
spawned_by: TBD-00-00-001-ICD-001-005
related_tbds:
  - TBD-00-00-001-ICD-001-005
tbd_status: RESOLVED
triggered_knus:
  - KNU-00-00-001-TEST-002
  - KNU-00-00-001-PLAN-002
export_frequency: daily_02:00_UTC
export_format: S1000D_5.0_CIR
---

# KNU-00-00-001-ICD-002: CSDB CIR Export Interface Specification

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-00-00-001-ICD-002 |
| **KNOT ID** | KNOT-00-00-001 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_CM |
| **Due Date** | 2026-02-15 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |
| **Spawned By** | TBD-00-00-001-ICD-001-005 (RESOLVED) |

---

## Purpose

This Interface Control Document specifies the export interface between the terminology database and the S1000D Common Information Repository (CIR), defining export frequency, format, schema mapping, and validation procedures.

---

## Export Frequency

### Automated Triggers

**Database Update Events:**
```yaml
triggers:
  - event: term_added
    action: queue_export
    delay: "5_minutes"
  
  - event: term_modified
    action: queue_export
    delay: "5_minutes"
  
  - event: term_approved
    action: immediate_export
    delay: "0_minutes"
  
  - event: term_deprecated
    action: queue_export
    delay: "5_minutes"
```

**Scheduled Exports:**
```yaml
schedule:
  frequency: daily
  time: "02:00 UTC"
  timezone: UTC
  enabled: true
```

**Manual Triggers:**
```yaml
manual:
  method: CI/CD workflow dispatch
  workflow: export-terminology-cir
  permissions: STK_CM, STK_DATA
  parameters:
    - full_export: boolean  # true = all terms, false = incremental
    - dry_run: boolean      # true = validate only, no export
```

---

### Export Scope

**Included Content:**
- All approved terms (status = APPROVED)
- Term type metadata
- Cross-references to related terms
- Change history (last 30 days)
- Etymology and usage notes
- Examples and context

**Excluded Content:**
- Draft terms (status = DRAFT)
- Rejected terms (status = REJECTED)
- Internal-only notes
- Audit logs (beyond 30 days)

**Incremental Export Logic:**
```python
def get_export_scope(full_export: bool = False):
    if full_export:
        return db.query("SELECT * FROM terms WHERE status = 'APPROVED'")
    else:
        # Incremental: only terms modified since last export
        last_export_time = get_last_export_timestamp()
        return db.query(
            "SELECT * FROM terms WHERE status = 'APPROVED' "
            "AND updated_at > ?",
            last_export_time
        )
```

---

## S1000D CIR Format

### Repository Structure

**XML Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<repository 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="http://www.s1000d.org/S1000D_5-0/xml_schema_flat/repository.xsd">
  
  <identAndStatusSection>
    <repositoryAddress>
      <repositoryIdent>
        <repositoryCode>AMPEL360-TERM-CIR</repositoryCode>
        <repositoryType repositoryTypeCode="ct">Terminology Repository</repositoryType>
      </repositoryIdent>
      <repositoryTitle>AMPEL360 Q100 Terminology Common Information Repository</repositoryTitle>
    </repositoryAddress>
    
    <repositoryStatus>
      <security securityClassification="01">Unclassified</security>
      <responsiblePartnerCompany enterpriseCode="AMPEL360">
        <enterpriseName>AMPEL Technologies</enterpriseName>
      </responsiblePartnerCompany>
      <originator enterpriseCode="AMPEL360">
        <enterpriseName>AMPEL Technologies</enterpriseName>
      </originator>
      <qualityAssurance>
        <firstVerification verificationType="tabtop"/>
      </qualityAssurance>
    </repositoryStatus>
  </identAndStatusSection>
  
  <content>
    <cirContent>
      <definitionList>
        
        <!-- Term: BWB -->
        <definitionListItem id="term-bwb">
          <listItemTerm>BWB</listItemTerm>
          <listItemDefinition>
            <para>
              <emphasis emphasisType="em01">Blended Wing Body</emphasis>
              — An aircraft configuration where the fuselage and wings blend smoothly 
              into a unified lifting surface, eliminating traditional wing-fuselage 
              junction. Offers improved aerodynamic efficiency and increased cabin volume 
              compared to conventional tube-and-wing designs.
            </para>
            <para role="full-form">Blended Wing Body</para>
            <para role="example">
              The Q100 adopts a BWB configuration to maximize lift-to-drag ratio 
              and provide additional volume for LH₂ storage.
            </para>
            <para role="related-terms">
              See also: <internalRef internalRefId="term-fuselage"/>, 
              <internalRef internalRefId="term-wing"/>
            </para>
          </listItemDefinition>
        </definitionListItem>
        
        <!-- Term: LH₂ -->
        <definitionListItem id="term-lh2">
          <listItemTerm>LH₂</listItemTerm>
          <listItemDefinition>
            <para>
              <emphasis emphasisType="em01">Liquid Hydrogen</emphasis>
              — Hydrogen cooled to cryogenic temperatures (-253°C / -423°F) for 
              high-density storage. Provides 2.8× higher gravimetric energy density 
              than Jet-A, but requires specialized insulated tanks.
            </para>
            <para role="full-form">Liquid Hydrogen</para>
            <para role="example">
              LH₂ is stored in double-walled vacuum-insulated tanks with 
              boil-off rates of 0.3-0.5% per day.
            </para>
            <para role="properties">
              <randomList>
                <listItem><para>Boiling point: 20.28 K (-252.87°C)</para></listItem>
                <listItem><para>Density: 70.8 kg/m³</para></listItem>
                <listItem><para>Energy density: 8.5 MJ/L (LHV)</para></listItem>
              </randomList>
            </para>
          </listItemDefinition>
        </definitionListItem>
        
        <!-- Additional terms... -->
        
      </definitionList>
    </cirContent>
  </content>
  
</repository>
```

---

### Schema Mapping

**Database Schema → S1000D Elements:**

```javascript
const mapping = {
  // Core fields
  term_id: 'definitionListItem/@id',
  term_name: 'listItemTerm',
  definition: 'listItemDefinition/para',
  
  // Metadata
  term_type: 'listItemDefinition/para/@termType',
  status: 'listItemDefinition/para/@status',
  
  // Extended fields
  full_form: 'listItemDefinition/para[@role="full-form"]',
  abbreviation: 'listItemDefinition/para[@role="abbreviation"]',
  symbol: 'listItemDefinition/para[@role="symbol"]',
  etymology: 'listItemDefinition/para[@role="etymology"]',
  
  // Examples and usage
  example: 'listItemDefinition/para[@role="example"]',
  usage_notes: 'listItemDefinition/para[@role="usage"]',
  context: 'listItemDefinition/para[@role="context"]',
  
  // Relationships
  related_terms: 'listItemDefinition/para[@role="related-terms"]/internalRef',
  synonyms: 'listItemDefinition/para[@role="synonyms"]',
  antonyms: 'listItemDefinition/para[@role="antonyms"]',
  
  // References
  source: 'listItemDefinition/para[@role="source"]',
  standards: 'listItemDefinition/para[@role="standards"]',
  
  // Versioning
  created_date: 'listItemDefinition/@created',
  modified_date: 'listItemDefinition/@modified',
  version: 'listItemDefinition/@version'
};
```

**Python Mapping Implementation:**
```python
from typing import Dict, Any
from xml.etree import ElementTree as ET

def map_term_to_s1000d(term: Dict[str, Any]) -> ET.Element:
    """Map database term to S1000D XML element."""
    
    # Create definitionListItem
    item = ET.Element('definitionListItem', id=f"term-{term['term_id']}")
    
    # Add term name
    term_elem = ET.SubElement(item, 'listItemTerm')
    term_elem.text = term['term_name']
    
    # Add definition
    definition = ET.SubElement(item, 'listItemDefinition')
    
    # Main definition paragraph
    para = ET.SubElement(definition, 'para')
    if term.get('full_form'):
        emphasis = ET.SubElement(para, 'emphasis', emphasisType='em01')
        emphasis.text = term['full_form']
        para.text = f" — {term['definition']}"
    else:
        para.text = term['definition']
    
    # Add full form if present
    if term.get('full_form'):
        full_form_para = ET.SubElement(definition, 'para', role='full-form')
        full_form_para.text = term['full_form']
    
    # Add example if present
    if term.get('example'):
        example_para = ET.SubElement(definition, 'para', role='example')
        example_para.text = term['example']
    
    # Add related terms
    if term.get('related_terms'):
        related_para = ET.SubElement(definition, 'para', role='related-terms')
        related_para.text = "See also: "
        for related_id in term['related_terms']:
            ref = ET.SubElement(related_para, 'internalRef', 
                              internalRefId=f"term-{related_id}")
            ref.text = related_id
    
    return item
```

---

### Validation

**S1000D 5.0 Schema Compliance:**
```bash
xmllint --schema repository.xsd AMPEL360-TERM-CIR.xml --noout
```

**BREX Validation:**
```xml
<!-- BREX Data Module: DMC-AMPEL360-00-00-00-00A-022A-A -->
<brex>
  <contextRules>
    <objectUse objectPath="//definitionListItem" mustHave="true">
      <objectValue valueForm="valuePattern">^term-[a-z0-9-]+$</objectValue>
    </objectUse>
    <objectUse objectPath="//listItemTerm" mustHave="true"/>
    <objectUse objectPath="//listItemDefinition" mustHave="true"/>
  </contextRules>
</brex>
```

**UTF-8 Encoding:**
```python
def validate_encoding(xml_file: str) -> bool:
    """Validate XML is valid UTF-8."""
    try:
        with open(xml_file, 'r', encoding='utf-8') as f:
            content = f.read()
        return True
    except UnicodeDecodeError:
        return False
```

**Well-Formed XML:**
```python
import xml.etree.ElementTree as ET

def validate_wellformed(xml_file: str) -> bool:
    """Validate XML is well-formed."""
    try:
        ET.parse(xml_file)
        return True
    except ET.ParseError:
        return False
```

---

## Integration Testing

### Test Cases

**TC-001: Export with 0 terms (empty CIR)**
```yaml
test_case: TC-001
description: Verify export handles empty database gracefully
preconditions:
  - Database contains no approved terms
expected_result:
  - Export succeeds with empty <definitionList/>
  - CIR validates against S1000D schema
  - No errors or warnings
```

**TC-002: Export with 1000+ terms (performance)**
```yaml
test_case: TC-002
description: Verify export completes within 60 seconds for 1000 terms
preconditions:
  - Database contains 1000+ approved terms
expected_result:
  - Export completes in <60 seconds
  - All terms present in CIR
  - Memory usage <500 MB
```

**TC-003: Export with special characters (UTF-8 handling)**
```yaml
test_case: TC-003
description: Verify export handles UTF-8 characters correctly
preconditions:
  - Database contains terms with: ², ₂, °, ±, α, β, γ
expected_result:
  - All special characters preserved
  - UTF-8 declaration in XML header
  - Validates against schema
```

**TC-004: Export with cross-references (link integrity)**
```yaml
test_case: TC-004
description: Verify cross-references resolve correctly
preconditions:
  - Database contains terms with related_terms relationships
expected_result:
  - All internalRef elements have valid internalRefId
  - No dangling references
  - Bidirectional links preserved
```

**TC-005: Incremental export (only changed terms)**
```yaml
test_case: TC-005
description: Verify incremental export includes only modified terms
preconditions:
  - Previous full export completed
  - 10 terms modified since last export
expected_result:
  - Export includes exactly 10 terms
  - Export completes in <5 seconds
  - CIR merge succeeds without conflicts
```

---

### Acceptance Criteria

**Performance:**
- ✅ Export completes in <60 seconds for 1000 terms
- ✅ Export completes in <5 seconds for 100 terms (incremental)
- ✅ Memory usage <500 MB during export
- ✅ CPU usage <50% on standard CI/CD runner

**Correctness:**
- ✅ 100% schema compliance (S1000D 5.0)
- ✅ 100% BREX compliance
- ✅ Zero broken cross-references
- ✅ UTF-8 encoding preserved

**Reliability:**
- ✅ Rollback capability on failure
- ✅ Transaction log for audit trail
- ✅ Atomic export (all-or-nothing)
- ✅ Retry logic for transient failures (max 3 retries)

---

## Rollback Capability

**Backup Strategy:**
```yaml
backup:
  frequency: before_each_export
  retention: 30_days
  location: s3://ampel360-backups/cir-exports/
  format: compressed_xml  # .xml.gz
```

**Rollback Procedure:**
```bash
#!/bin/bash
# Rollback to previous CIR export

BACKUP_FILE="$1"
TARGET_FILE="AMPEL360-TERM-CIR.xml"

# Validate backup file exists
if [ ! -f "$BACKUP_FILE" ]; then
  echo "Error: Backup file not found: $BACKUP_FILE"
  exit 1
fi

# Decompress if needed
if [[ "$BACKUP_FILE" == *.gz ]]; then
  gunzip -c "$BACKUP_FILE" > "${TARGET_FILE}.tmp"
else
  cp "$BACKUP_FILE" "${TARGET_FILE}.tmp"
fi

# Validate XML
xmllint --schema repository.xsd "${TARGET_FILE}.tmp" --noout
if [ $? -eq 0 ]; then
  mv "${TARGET_FILE}.tmp" "$TARGET_FILE"
  echo "Rollback successful: $TARGET_FILE"
else
  echo "Error: Backup file failed validation"
  rm "${TARGET_FILE}.tmp"
  exit 1
fi
```

---

## Resolves TBD

**TBD-00-00-001-ICD-001-005: CIR Export Frequency Determination**

**Resolution:**
- **Automated Exports:** Triggered on term modifications (5-minute delay)
- **Scheduled Exports:** Daily at 02:00 UTC
- **Manual Exports:** Via CI/CD workflow dispatch
- **Incremental:** Supported for efficiency

**Rationale:**
- Daily exports ensure CIR stays current
- Event-driven exports provide near-real-time updates
- Incremental exports minimize processing time
- Manual triggers support emergency updates

---

## Triggered KNUs

The following KNUs are triggered by this ICD:

### KNU-00-00-001-TEST-002: CIR Export Validation Tests

**Purpose:** Validate CSDB CIR export functionality

**Acceptance Criteria:**
- All test cases (TC-001 through TC-005) pass
- S1000D schema compliance: 100%
- Performance benchmarks met
- Rollback procedure tested

**Due Date:** 2026-02-28

---

### KNU-00-00-001-PLAN-002: CIR Synchronization Plan

**Purpose:** Define operational CIR synchronization procedures

**Acceptance Criteria:**
- Synchronization workflow documented
- Frequency defined and approved
- Rollback procedures documented
- Monitoring and alerting configured

**Due Date:** 2026-03-01

---

## Traceability

### Satisfies Requirements

- **KNU-00-00-001-REQ-001:** Program Glossary Requirements

### Verified By

- **KNU-00-00-001-TEST-002:** CIR Export Validation Tests (to be created)

### Related Artifacts

- **KNU-00-00-001-ICD-001:** Terminology Database Schema
- **KNU-00-00-001-PLAN-002:** CIR Synchronization Plan (to be created)

---

## References

### Standards

- **S1000D Issue 5.0:** Common Information Repository specification
- **ISO 12620:** Terminology work — Computer applications
- **UTF-8 (RFC 3629):** Character encoding standard

### Internal Documents

- **KNU-00-00-001-REQ-001:** Program Glossary Requirements
- **KNU-00-00-001-ICD-001:** Terminology Database Schema
- **DMC-AMPEL360-00-00-00-00A-022A-A:** BREX Data Module

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-12 | STK_CM | Initial baseline - GENERATED (resolves TBD-00-00-001-ICD-001-005) |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_CM and STK_DATA

**Notes:** This ICD resolves TBD-00-00-001-ICD-001-005 by specifying CIR export frequency, format, and validation procedures. Implementation to begin under KNU-00-00-001-TEST-002.
