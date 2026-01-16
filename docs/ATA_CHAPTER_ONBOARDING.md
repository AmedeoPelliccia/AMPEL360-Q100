# ATA Chapter Onboarding Playbook

**Version:** 1.0.0  
**Last Updated:** 2026-01-16  
**Applies To:** AMPEL360 Q100 Program

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Onboarding Checklist](#step-by-step-onboarding-checklist)
4. [Chapter-Specific Customization Guide](#chapter-specific-customization-guide)
5. [HITL Escalation Decision Tree](#hitl-escalation-decision-tree)
6. [Source-Tracking Requirements](#source-tracking-requirements)
7. [Effectivity Rules Configuration](#effectivity-rules-configuration)
8. [Validation & Compliance](#validation--compliance)
9. [Common Pitfalls](#common-pitfalls)

---

## Overview

This playbook provides a comprehensive guide for onboarding new ATA Chapters into the AMPEL360 Q100 OPT-IN Framework, implementing the full **GENESIS → SSOT → LLM ENGINE → CSDB → PUBS → EXPORT** pipeline.

### End-to-End Process Flow

```
GENESIS (Uncertainty Space)
    ├── O-KNOT: Discovery Layer
    ├── Y-KNOT: Justification Layer
    └── KNOT: Framing Layer
         ↓
SSOT (Certainty Space)
    ├── LC01: Problem Statement (KNOTS, KNU_PLAN, TOKENOMICS, TBD_REGISTER)
    ├── LC02-LC14: Lifecycle-bound artifacts with _derivation.yaml
         ↓
LLM ENGINE METADATA LAYER
    ├── Enrichment with confidence scores
    ├── Source tracking (docId, span references)
    ├── HITL escalation for low-confidence inferences
         ↓
CSDB (S1000D Compliant Data Modules)
    ├── DM: Data Modules (YAML → XML)
    ├── BREX: Business Rules Validation
    ├── Transforms: XSLT for format conversion
         ↓
PUBS (Publications)
    ├── AMM: Aircraft Maintenance Manual
    ├── TRN: Training Materials
         ↓
EXPORT
    └── Multiple formats (PDF, HTML, IETP)
```

---

## Prerequisites

Before starting chapter onboarding:

- [ ] **Framework Understanding**: Read [ATA-00-00 Reference Implementation](../OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/README.md)
- [ ] **Axis Assignment**: Determine which OPT-IN axis (O/N/T/P/I) the chapter belongs to
- [ ] **Stakeholder Identification**: Identify chapter owner and key stakeholders
- [ ] **Domain Expertise**: Ensure domain expert availability for HITL review
- [ ] **Tools Setup**: Python 3.8+, XSLT processor, JSON Schema validator

---

## Step-by-Step Onboarding Checklist

### Phase 1: Scaffold Generation

- [ ] **1.1 Run Scaffold Script**
  ```bash
  cd OPT-IN_FRAMEWORK/_templates
  python scaffold_chapter.py --chapter XX --title "Chapter Title" --axis AXIS_NAME
  ```
  
- [ ] **1.2 Verify Folder Structure**
  ```
  AXIS_NAME/
  └── ATA_XX-TITLE/
      └── ATA-XX-title/
          └── XX-00-general/
              ├── GENESIS/
              ├── SSOT/
              └── PUB/
  ```

### Phase 2: GENESIS Layer Population

- [ ] **2.1 O-KNOT Discovery**
  - [ ] Edit `GENESIS/O-KNOT/O-KNOT-XX-00-001/discovery.yaml`
  - [ ] Document chapter-specific knowledge gaps
  - [ ] Assess impact hypothesis (safety, certification, cost, schedule, ops)
  - [ ] Identify heritage sources
  - [ ] Add domain-specific concerns
  
- [ ] **2.2 Y-KNOT Justification**
  - [ ] Edit `GENESIS/Y-KNOT/Y-KNOT-XX-00-001-001/justification.yaml`
  - [ ] Document decision context and constraints
  - [ ] Create `options_analysis.md` with at least 2 options
  - [ ] Create `decision_record.md` documenting final decision
  - [ ] Obtain stakeholder signoff
  
- [ ] **2.3 KNOT Framing**
  - [ ] Edit `GENESIS/KNOT/KNOT-XX-00-001/framing.yaml`
  - [ ] Define scope_in and scope_out clearly
  - [ ] Specify acceptance criteria (intent level)
  - [ ] Map upstream/downstream dependencies
  - [ ] Set residual_target based on chapter complexity
  - [ ] Create `plan_outline.md` with high-level approach

- [ ] **2.4 Registry Updates**
  - [ ] Update `GENESIS/_registry/o-knot_registry.csv`
  - [ ] Update `GENESIS/_registry/y-knot_registry.csv`
  - [ ] Update `GENESIS/_registry/knot_registry.csv`

### Phase 3: SSOT Layer Configuration

- [ ] **3.1 LC01 Problem Statement**
  - [ ] Edit `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS.yaml`
    - [ ] Set total_tt based on chapter complexity (200-600 TT typical)
    - [ ] Configure knot_pools with complexity_multipliers
    - [ ] Adjust lambda_spillover for chapter interdependencies
  - [ ] Edit `SSOT/LC01_PROBLEM_STATEMENT/KNOTS.csv`
    - [ ] List all KNOTs for this chapter
  - [ ] Edit `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv`
    - [ ] List planned KNUs across LC02-LC14
  - [ ] Edit `SSOT/LC01_PROBLEM_STATEMENT/TBD_REGISTER.csv`
    - [ ] Document initial TBDs with confidence levels
    - [ ] Set owners and target dates

- [ ] **3.2 LC02-LC14 Preparation**
  - [ ] For each relevant LC folder:
    - [ ] Create `_derivation.yaml` for baseline KNUs
    - [ ] Link back to parent KNOT via derivation_lineage
    - [ ] Set lifecycle_binding correctly
    - [ ] Document creation_record with UTC timestamp

### Phase 4: LLM Engine Metadata Layer Integration

- [ ] **4.1 Source Tracking Setup**
  - [ ] Define docId schema for chapter (e.g., `ATA-XX-DOC-NNNN`)
  - [ ] Implement span referencing in all extracted content
  - [ ] Configure confidence scoring thresholds:
    - [ ] High confidence: ≥ 0.85 (auto-accept)
    - [ ] Medium confidence: 0.60-0.84 (HITL review)
    - [ ] Low confidence: < 0.60 (mandatory HITL)
  
- [ ] **4.2 HITL Escalation Configuration**
  - [ ] Define escalation paths for:
    - [ ] Missing data (null values)
    - [ ] Ambiguous terminology
    - [ ] Conflicting requirements
    - [ ] Novel/non-standard content
  - [ ] Assign HITL reviewers per domain
  - [ ] Set SLA for HITL response (24-72 hours typical)

- [ ] **4.3 Metadata Enrichment**
  - [ ] Configure chapter-specific entity extraction:
    - [ ] Part numbers (if applicable)
    - [ ] Torque specifications (if applicable)
    - [ ] Electrical parameters (if applicable)
    - [ ] Safety-critical items
  - [ ] **CRITICAL**: Never invent part numbers or specs - extract only or mark null

### Phase 5: CSDB Integration

- [ ] **5.1 Data Module Structure**
  - [ ] Edit `PUB/AMM/CSDB/DM/data-module.yaml.template`
  - [ ] Set S1000D metadata:
    - [ ] dm_code format: `DMC-AMPEL360-XX-SS-SU-SB-SX-AAA-NNN-V`
    - [ ] info_code: Select appropriate code (000-999)
    - [ ] language: en-US (or as required)
  - [ ] Configure BREX reference: `DMC-AMPEL360-00-00-00-00A-022A-A`
  - [ ] Set applicability rules for Q100 aircraft variants

- [ ] **5.2 BREX Validation Setup**
  - [ ] Review BREX business rules for chapter-specific constraints
  - [ ] Add custom validation rules if needed
  - [ ] Configure CI/CD pipeline for automatic BREX checks
  - [ ] Test sample DM against BREX

- [ ] **5.3 Transform Configuration**
  - [ ] Review `PUB/AMM/CSDB/DM/transforms/s1000d-to-markdown.xslt`
  - [ ] Customize for chapter-specific content patterns
  - [ ] Add templates for chapter-specific elements
  - [ ] Test transform with sample XML

### Phase 6: Publication & Export

- [ ] **6.1 AMM Configuration**
  - [ ] Define chapter structure in AMM
  - [ ] Configure cross-references to other chapters
  - [ ] Set up illustration references (ICN)
  - [ ] Configure applicability filtering

- [ ] **6.2 TRN Materials** (if applicable)
  - [ ] Define training data module structure
  - [ ] Link to AMM procedural content
  - [ ] Configure for IETP delivery

- [ ] **6.3 Export Pipeline**
  - [ ] Test EXPORT to PDF
  - [ ] Test EXPORT to HTML
  - [ ] Test IETP integration
  - [ ] Verify metadata preservation across formats

### Phase 7: Validation & Quality Assurance

- [ ] **7.1 Schema Validation**
  - [ ] Validate all YAML files against JSON Schema
  - [ ] Check CSV files for format compliance
  - [ ] Verify XSLT syntax

- [ ] **7.2 Traceability Validation**
  - [ ] Verify O-KNOT → Y-KNOT → KNOT lineage
  - [ ] Verify KNOT → KNU _derivation links
  - [ ] Verify KNU → CSDB DM references
  - [ ] Check for orphaned artifacts

- [ ] **7.3 CSDB Compliance**
  - [ ] Run BREX validation on all DMs
  - [ ] Verify S1000D Issue 5.0 compliance
  - [ ] Check DMC uniqueness
  - [ ] Validate cross-references

- [ ] **7.4 End-to-End Test**
  - [ ] Create one complete artifact through entire pipeline
  - [ ] GENESIS → SSOT → LLM → CSDB → PUBS → EXPORT
  - [ ] Document any gaps or issues
  - [ ] Obtain stakeholder signoff

---

## Chapter-Specific Customization Guide

### High-Priority Chapters

#### ATA 28 (Fuel) - T-TECHNOLOGIES

**Domain Specifics:**
- LH₂ storage systems
- Cryogenic handling procedures
- H₂-specific terminology (mass flow kg/s, energy density kJ/kg)
- Safety-critical considerations (flammability, embrittlement)

**Customization Points:**
- TOKENOMICS: Higher TT allocation (500-600 TT) due to novel technology
- TBD_REGISTER: High volume of TBDs expected for novel H₂ systems
- LLM Confidence: Lower auto-accept threshold (0.80) for safety-critical content
- HITL: Mandatory review for all H₂ safety procedures

#### ATA 71 (Power Plant) - T-TECHNOLOGIES

**Domain Specifics:**
- Fuel cell stacks
- Electric motors and power electronics
- Thermal management
- Hybrid propulsion architecture

**Customization Points:**
- KNOT Dependencies: Heavy dependency on ATA 28 (Fuel)
- SSOT/LC04: Detailed design interfaces with ATA 24 (Electrical Power)
- CSDB: High illustration count (ICN) for complex assemblies
- Effectivity: Variant-specific for different fuel cell configurations

#### ATA 95 (AI/ML) - T-TECHNOLOGIES

**Domain Specifics:**
- Novel Q100 extension chapter
- Learning assurance and certification challenges
- AI model versioning and traceability
- Explainability requirements

**Customization Points:**
- GENESIS: Extensive O-KNOT discovery phase (regulatory uncertainty)
- TBD_REGISTER: High TBD count for certification approach
- LLM Metadata: Special handling for AI training data provenance
- BREX: Custom validation rules for AI artifact documentation

#### ATA 96 (DPP/Traceability) - N-NEURAL_NETWORKS

**Domain Specifics:**
- Digital Product Passport integration
- Blockchain/DLT for traceability
- Lifecycle data capture
- Regulatory compliance (EU DPP requirements)

**Customization Points:**
- SSOT/LC08: Enhanced configuration management
- Source Tracking: Bidirectional traceability to physical components
- CSDB: Extended metadata fields for DPP attributes
- Export: Additional format for DPP data exchange (JSON-LD)

---

## HITL Escalation Decision Tree

```
┌─────────────────────────────┐
│   Content Extracted/        │
│   Generated by LLM          │
└──────────┬──────────────────┘
           │
           ▼
    ┌──────────────┐
    │ Confidence   │
    │ Score?       │
    └──┬───────┬───┘
       │       │
   ≥0.85│      │<0.60
       │       │
       ▼       ▼
    ┌────┐  ┌─────────────────┐
    │AUTO│  │  MANDATORY HITL │
    │PASS│  │  - Human Review │
    └────┘  │  - Mark source  │
            │  - Escalate     │
            └─────────────────┘
       │
   0.60-0.84
       │
       ▼
    ┌─────────────────────┐
    │  Content Type?      │
    └──┬──────┬───────┬───┘
       │      │       │
   Safety  Part#  Other
       │      │       │
       ▼      ▼       ▼
    ┌────┐ ┌────┐ ┌────────┐
    │HITL│ │HITL│ │Optional│
    │REQ │ │REQ │ │Review  │
    └────┘ └────┘ └────────┘
```

### HITL Triggers

**Always Escalate:**
- Safety-critical procedures (any confidence level)
- Part numbers or specifications (unless ≥0.90 confidence AND verified against parts DB)
- Torque specifications (never auto-accept)
- Novel terminology not in glossary
- Conflicting information from multiple sources

**Conditionally Escalate:**
- Medium confidence (0.60-0.84) AND first occurrence in chapter
- Cross-chapter dependencies
- Regulatory references
- Revision/update to existing approved content

**HITL Response Template:**
```yaml
hitl_review:
  artifact_id: "KNU-XX-YY-NNN-REQ-001"
  span_reference: "docId:ATA-XX-DOC-1234, span:567-890"
  confidence_score: 0.72
  issue: "Ambiguous terminology for H₂ flow rate unit"
  reviewer: "{{REVIEWER_NAME}}"
  review_date: "{{DATE}}"
  decision: "ACCEPT|REJECT|MODIFY"
  resolution: "Clarified to use kg/s per ATA-28 convention"
  confidence_after: 0.95
```

---

## Source-Tracking Requirements

### docId Schema

**Format:** `ATA-{CHAPTER}-{DOCTYPE}-{SEQUENCE}`

**Examples:**
- `ATA-28-REQ-0001` - Requirements document
- `ATA-71-DESIGN-0023` - Design document
- `ATA-95-CERT-0005` - Certification evidence

**Implementation:**
```yaml
source_tracking:
  doc_id: "ATA-28-REQ-0001"
  doc_title: "H₂ Storage System Requirements"
  doc_version: "1.2"
  doc_date: "2026-01-15"
  doc_owner: "STK_SE"
```

### Span Referencing

**Format:** `docId:{DOC_ID}, span:{START}-{END}[, page:{PAGE}]`

**Examples:**
```yaml
extracted_content: "The minimum fuel cell operating temperature is -40°C."
source_span: "docId:ATA-71-DESIGN-0012, span:2345-2398, page:14"
confidence: 0.89
```

**Span Types:**
- **Character Offset**: `span:2345-2398` (byte or character position)
- **Line Range**: `lines:45-47` (line numbers)
- **Section**: `section:3.2.1` (document structure)
- **Page**: `page:14` (PDF page number)

### Bidirectional Traceability

All KNUs must maintain:
1. **Upstream Trace**: Link to source documents via docId/span
2. **Derivation Trace**: Link to parent KNOT via _derivation.yaml
3. **Downstream Trace**: Link to CSDB DMs and publications

**Example:**
```yaml
knu_id: "KNU-28-10-001-REQ-001"
derivation_lineage:
  parent_knot: "KNOT-28-10-001"
  source_documents:
    - doc_id: "ATA-28-REQ-0001"
      spans: ["span:100-250", "span:500-750"]
      confidence: 0.92
downstream_artifacts:
  - "DMC-AMPEL360-28-10-00-00A-001A-A"
  - "KNU-28-10-001-ICD-001"
```

---

## Effectivity Rules Configuration

### Effectivity Dimensions

1. **Aircraft Serial Number Range**: Q100-001 to Q100-999
2. **Configuration**: Baseline, Option A (extended range), Option B (cargo)
3. **Modification State**: Pre-MOD-XXX, Post-MOD-XXX
4. **Certification Basis**: FAA, EASA, CAAC

### Effectivity Expression Syntax

```yaml
applicability:
  aircraft_serial_numbers:
    from: "Q100-001"
    to: "Q100-999"
  
  configurations:
    include: ["BASELINE", "OPTION_A"]
    exclude: ["OPTION_B"]
  
  modifications:
    required: ["MOD-28-001"]  # H₂ tank upgrade
    incompatible: ["MOD-71-005"]  # Legacy fuel system
  
  certification:
    authorities: ["FAA", "EASA"]
    special_conditions: ["SC-28-H2-001"]
```

### Chapter-Specific Effectivity

**ATA 28 (Fuel):**
```yaml
effectivity:
  fuel_type:
    - configuration: "BASELINE"
      fuel: "LH2"
      applicability: "ALL"
    - configuration: "HYBRID"
      fuel: "LH2+BATTERY"
      applicability: "Q100-501 onwards"
```

**ATA 71 (Power Plant):**
```yaml
effectivity:
  propulsion_type:
    - type: "FUEL_CELL_PRIMARY"
      serial_range: "Q100-001 to Q100-500"
    - type: "FUEL_CELL_HYBRID"
      serial_range: "Q100-501 onwards"
```

### CSDB Effectivity Integration

Link effectivity to S1000D applicability:
```xml
<applic>
  <assert applicPropertyIdent="Q100_CONFIG" applicPropertyType="prodattr" applicPropertyValues="BASELINE OPTION_A"/>
  <assert applicPropertyIdent="Q100_SERIAL" applicPropertyType="prodattr" applicPropertyValues="Q100-001:Q100-999"/>
</applic>
```

---

## Validation & Compliance

### Pre-Deployment Checklist

- [ ] **Schema Validation**
  ```bash
  # Validate all YAML files
  find . -name "*.yaml" -exec python validate_schema.py {} \;
  ```

- [ ] **BREX Validation**
  ```bash
  # Run S1000D BREX check
  s1000d-brex-check --brex DMC-AMPEL360-00-00-00-00A-022A-A --dm DMC-*.XML
  ```

- [ ] **Traceability Audit**
  ```bash
  # Check for broken links
  python audit_traceability.py --chapter XX
  ```

- [ ] **Confidence Score Analysis**
  ```bash
  # Report on low-confidence items
  python confidence_report.py --chapter XX --threshold 0.85
  ```

### Continuous Integration Pipeline

```yaml
# .github/workflows/ata-chapter-validation.yml
name: ATA Chapter Validation
on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: Validate YAML Schemas
        run: python scripts/validate_all_schemas.py
      
      - name: BREX Validation
        run: |
          python scripts/brex_validate.py --chapter ${{ matrix.chapter }}
      
      - name: Traceability Check
        run: python scripts/check_traceability.py
      
      - name: Confidence Report
        run: |
          python scripts/confidence_report.py > confidence_summary.txt
          cat confidence_summary.txt
      
      - name: Upload Results
        uses: actions/upload-artifact@v2
        with:
          name: validation-results
          path: confidence_summary.txt
```

---

## Common Pitfalls

### 1. **Inventing Data**
❌ **Wrong:** LLM generates part number `P/N: FCS-28-1234` when not in source  
✅ **Right:** Mark as `null` with confidence < 0.60, escalate to HITL

### 2. **Skipping _derivation.yaml**
❌ **Wrong:** Create KNU without derivation metadata  
✅ **Right:** Every KNU must have _derivation.yaml linking to parent KNOT

### 3. **Inconsistent ATA Addressing**
❌ **Wrong:** Mix of `ATA-28-10` and `ATA-2810` formats  
✅ **Right:** Enforce `ATA-{CC}-{SS}-{SU}-{SB}-{SX}` format consistently (full addressing) or `ATA-{CC}-{SS}` (chapter-section only)

### 4. **Missing Source Tracking**
❌ **Wrong:** Content without docId/span reference  
✅ **Right:** Every extracted fact has source_span with docId and position

### 5. **Over-Ambitious Auto-Accept**
❌ **Wrong:** Auto-accept all content with confidence > 0.70  
✅ **Right:** Safety-critical content requires HITL regardless of confidence

### 6. **Ignoring BREX Failures**
❌ **Wrong:** "BREX validation failed but content looks OK"  
✅ **Right:** Fix BREX errors before merging; BREX compliance is mandatory

### 7. **Circular Dependencies**
❌ **Wrong:** KNOT-28-10-001 depends on KNOT-28-10-002 which depends on KNOT-28-10-001  
✅ **Right:** Use topological sort to verify dependency DAG

### 8. **Effectivity Conflicts**
❌ **Wrong:** DM applies to both "BASELINE" and "excludes: BASELINE"  
✅ **Right:** Validate effectivity expressions for logical consistency

---

## Support & Resources

- **Framework Documentation**: [OPT-IN_FRAMEWORK/README.md](../OPT-IN_FRAMEWORK/README.md)
- **ATA-00-00 Reference**: [00-00-general/README.md](../OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/README.md)
- **Template Library**: [_templates/](../OPT-IN_FRAMEWORK/_templates/)
- **Scaffold Script**: [scaffold_chapter.py](../OPT-IN_FRAMEWORK/_templates/scaffold_chapter.py)

---

**Revision History**

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-16 | 1.0.0 | STK_CM | Initial onboarding playbook |

---

*This playbook is a living document. Submit updates via pull request with changelog entry.*
