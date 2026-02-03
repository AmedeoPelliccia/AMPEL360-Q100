# BREX Instruction Schema: Data Extraction
<!-- BREX-INSTRUCTION-ID: INSTR-EXTRACT-001 -->
<!-- VERSION: 1.0.0 -->
<!-- EFFECTIVE-DATE: 2026-01-30 -->

## Purpose

This instruction defines the BREX-compliant process for extracting data from source documents in the AMPEL360 Q100 program. All extractions must follow deterministic decision paths with full audit traceability.

## Applicable BREX Rules

| Rule ID | Rule Name | Severity |
|---------|-----------|----------|
| BREX-CONF-001 | Standard Confidence Threshold | HIGH |
| BREX-CONF-002 | Safety-Critical Confidence Threshold | CRITICAL |
| BREX-SRC-001 | Source Document Reference Required | CRITICAL |
| BREX-SRC-002 | Source Span Reference Required | HIGH |
| BREX-FAB-001 | Part Number Fabrication Prevention | CRITICAL |

## Instruction Steps

### Step 1: Source Identification

**BREX Check:** BREX-SRC-001

Before extracting any content:

1. Identify the source document with a unique `docId`
2. Record the document's authority level (regulatory, standard, program)
3. Verify the document is current and not superseded

```yaml
source:
  doc_id: "KNU-28-10-001"  # Required
  document_type: "engineering_specification"
  authority: "program"
  issue_date: "2026-01-15"
  status: "current"
```

**Decision Path:**
- ✓ Source identified → Continue to Step 2
- ✗ Source not identified → REJECT (BREX-SRC-001 violation)

### Step 2: Content Extraction

**BREX Check:** BREX-SRC-002, BREX-FAB-001

Extract content with precise span references:

1. Record character positions for extracted content
2. Include page references where applicable
3. Never invent or extrapolate data

```yaml
extracted_content:
  text: "Maximum operating pressure: 3.5 bar"
  spans: ["span:1245-1280"]
  page_refs: ["page:14"]
  extraction_method: "direct"  # Never "inferred" for critical data
```

**Decision Path:**
- ✓ Span reference provided → Continue to Step 3
- ⚠ No span reference → WARN, add span before proceeding
- ✗ Fabricated content detected → REJECT (BREX-FAB-001 violation)

### Step 3: Confidence Assessment

**BREX Check:** BREX-CONF-001, BREX-CONF-002

Assess extraction confidence:

| Extraction Method | Base Confidence |
|-------------------|-----------------|
| direct (structured) | 0.95 |
| direct (unstructured) | 0.90 |
| OCR | 0.75 |
| NLP-extracted | 0.80 |

Apply modifiers:
- Inference penalty: -0.15
- Cross-reference bonus: +0.05
- Ambiguous source penalty: -0.20

**Decision Path (Standard Content):**
- ✓ Confidence ≥ 0.85 → ACCEPT
- ⚠ Confidence 0.60-0.84 → ESCALATE_HITL (optional review)
- ✗ Confidence < 0.60 → REJECT

**Decision Path (Safety-Critical Content):**
- ✓ Confidence ≥ 0.90 → ACCEPT
- ⚠ Confidence 0.70-0.89 → ESCALATE_HITL (mandatory review)
- ✗ Confidence < 0.70 → REJECT

### Step 4: ATA Reference Validation

**BREX Check:** BREX-ATA-001, BREX-ATA-002

Validate ATA chapter reference:

```yaml
ata_reference:
  chapter: "28"
  section: "10"
  subject: "00"
  format: "28-10-00"  # Must match pattern
```

**Decision Path:**
- ✓ Valid ATA format → Continue to Step 5
- ⚠ Format warning → Correct format, then continue
- ✗ Invalid chapter range → REJECT

### Step 5: Audit Record Creation

Create immutable audit record:

```yaml
audit_record:
  decision_id: "BREX-20260130-114523-A1B2C3D4-D0001"
  timestamp: "2026-01-30T11:45:23Z"
  rules_evaluated:
    - rule_id: "BREX-SRC-001"
      passed: true
    - rule_id: "BREX-CONF-001"
      passed: true
  outcome: "ACCEPT"
  context_hash: "sha256:a1b2c3d4..."
  previous_hash: "sha256:..."  # Chain integrity
```

## Flowchart

```
┌─────────────────┐
│  START          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│ Source          │ No  │ REJECT          │
│ Identified?     ├────►│ (BREX-SRC-001)  │
└────────┬────────┘     └─────────────────┘
         │ Yes
         ▼
┌─────────────────┐     ┌─────────────────┐
│ Span Reference  │ No  │ WARN            │
│ Provided?       ├────►│ Add span refs   │
└────────┬────────┘     └────────┬────────┘
         │ Yes                   │
         ▼                       │
         ◄───────────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│ Confidence ≥    │ No  │ Check minimum   │
│ auto_accept?    ├────►│ threshold       │
└────────┬────────┘     └────────┬────────┘
         │ Yes                   │
         │                       ▼
         │              ┌─────────────────┐
         │              │ Confidence ≥    │ No  ┌─────────────────┐
         │              │ 0.60?           ├────►│ REJECT          │
         │              └────────┬────────┘     └─────────────────┘
         │                       │ Yes
         │                       ▼
         │              ┌─────────────────┐
         │              │ ESCALATE_HITL   │
         │              └─────────────────┘
         ▼
┌─────────────────┐     ┌─────────────────┐
│ Fabrication     │ Yes │ REJECT          │
│ Detected?       ├────►│ (BREX-FAB-001)  │
└────────┬────────┘     └─────────────────┘
         │ No
         ▼
┌─────────────────┐
│ ACCEPT          │
│ Create audit    │
│ record          │
└─────────────────┘
```

## Related Instructions

- [INSTR-TRANSFORM-001](./transform.instructions.md) - CSDB Transformation
- [INSTR-VALIDATE-001](./validate.instructions.md) - Content Validation
- [INSTR-HITL-001](./hitl.instructions.md) - HITL Escalation

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial release |
