# BREX Instruction Schema: HITL Escalation
<!-- BREX-INSTRUCTION-ID: INSTR-HITL-001 -->
<!-- VERSION: 1.0.0 -->
<!-- EFFECTIVE-DATE: 2026-01-30 -->

## Purpose

This instruction defines the BREX-compliant process for Human-In-The-Loop (HITL) escalation in the AMPEL360 Q100 program. HITL ensures human oversight for decisions that exceed automated confidence thresholds or involve safety-critical content.

## Applicable BREX Rules

| Rule ID | Rule Name | Severity |
|---------|-----------|----------|
| BREX-CONF-002 | Safety-Critical Confidence Threshold | CRITICAL |
| BREX-FAB-002 | Torque Specification Fabrication Prevention | CRITICAL |
| BREX-LH2-002 | Hydrogen Safety Warning Required | CRITICAL |
| BREX-AI-002 | AI Decision Explainability Required | CRITICAL |

## HITL Trigger Conditions

### Automatic Triggers

The following conditions **automatically** trigger HITL escalation:

| Trigger | Condition | Priority | Review Category |
|---------|-----------|----------|-----------------|
| Low Confidence | confidence < 0.60 | HIGH | SME_TECHNICAL |
| Safety-Critical Below Threshold | safety_critical AND confidence < 0.90 | CRITICAL | SME_SAFETY |
| Conflicting Sources | sources.conflict_detected == true | HIGH | SME_TECHNICAL |
| Missing Effectivity | effectivity == null | MEDIUM | CM_REVIEW |
| Novel Technical Content | content.is_novel == true | MEDIUM | SME_TECHNICAL |
| Torque Specification | has_torque_spec == true | HIGH | SME_SAFETY |
| Part Number Uncertainty | part_number.confidence < 0.90 | HIGH | CM_REVIEW |

### Agent-Initiated Triggers

Agents may initiate HITL escalation using the `REQUEST_HITL` directive:

```yaml
hitl_request:
  trigger_phrase: "REQUEST_HITL"
  reason: "Conflicting pressure specifications between source A and source B"
  specific_question: "Which pressure limit should be used for configuration HYBRID?"
  source_context:
    source_a: "Design Spec v2.1, page 45, span:1200-1250"
    source_b: "Test Report TR-2026-001, page 12, span:340-390"
  confidence_assessment: 0.55
```

## HITL Review Categories

### SME_TECHNICAL (Subject Matter Expert - Technical)

**Applicable For:**
- Novel hydrogen systems content
- AI/ML algorithm specifications
- Structural analysis data
- Complex system interactions

**Reviewer Qualifications:**
- Domain expertise in relevant ATA chapter
- Minimum 5 years aerospace experience
- Familiarity with Q100 systems

### SME_SAFETY (Safety Engineering Review)

**Applicable For:**
- Warning/caution content
- Hazardous material handling
- Failure mode documentation
- Emergency procedures

**Reviewer Qualifications:**
- Safety engineering certification
- HAZOP/FMEA experience
- Regulatory compliance background

### SME_CERTIFICATION (Certification/DER Review)

**Applicable For:**
- Compliance statements
- Special condition interpretation
- Regulatory cross-references
- Type certificate data

**Reviewer Qualifications:**
- DER/CVE designation or equivalent
- Regulatory expertise (FAA/EASA)
- Program-specific training

### CM_REVIEW (Configuration Management)

**Applicable For:**
- Effectivity determination
- Part number validation
- Modification applicability
- Serial number assignments

**Reviewer Qualifications:**
- Configuration management certification
- CSDB familiarity
- Program data systems access

## Instruction Steps

### Step 1: Identify Escalation Trigger

Determine which condition triggered HITL:

```yaml
escalation:
  trigger_type: "automatic"  # or "agent_initiated"
  trigger_rule: "BREX-CONF-002"
  trigger_condition: "safety_critical AND confidence < 0.90"
  detected_at: "2026-01-30T12:00:00Z"
```

**Decision Path:**
- Automatic trigger → Continue to Step 2
- Agent-initiated → Validate request, then continue to Step 2

### Step 2: Categorize Review Type

Assign to appropriate review category:

```yaml
review_assignment:
  category: "SME_SAFETY"
  priority: "CRITICAL"
  sla_hours: 4  # Time to first response
  escalation_path: ["SME_SAFETY_PRIMARY", "SME_SAFETY_BACKUP", "CHIEF_ENGINEER"]
```

**Priority SLAs:**
| Priority | First Response | Resolution |
|----------|---------------|------------|
| CRITICAL | 4 hours | 24 hours |
| HIGH | 8 hours | 48 hours |
| MEDIUM | 24 hours | 72 hours |
| LOW | 48 hours | 1 week |

### Step 3: Prepare Review Package

Assemble complete context for reviewer:

```yaml
review_package:
  hitl_id: "HITL-20260130-001"
  
  # Original content and sources
  content:
    extracted_text: "Maximum cryogenic tank pressure: 3.5 bar"
    source:
      doc_id: "KNU-28-10-005"
      spans: ["span:2340-2380"]
      page_refs: ["page:23"]
  
  # Decision context
  decision_context:
    confidence: 0.78
    threshold_required: 0.90
    gap: 0.12
  
  # Specific question for reviewer
  question: |
    Please verify the maximum tank pressure value.
    Source confidence is below safety-critical threshold.
    Is 3.5 bar correct for all Q100 configurations?
  
  # Options for reviewer
  response_options:
    - action: "APPROVE"
      effect: "Accept value as extracted"
    - action: "MODIFY"
      effect: "Correct value with justification"
    - action: "REJECT"
      effect: "Return to source for re-extraction"
    - action: "ESCALATE"
      effect: "Escalate to higher authority"
```

### Step 4: Process Review Response

Handle the HITL response:

**Response: APPROVED**
```yaml
hitl_response:
  action: "APPROVE"
  reviewer: "John Smith, SME-SAFETY-001"
  timestamp: "2026-01-30T14:30:00Z"
  justification: "Value verified against design baseline DB-2026-001"
  
  # Apply to original content
  result:
    confidence_update: 0.95  # HITL verified bonus
    extraction_method: "hitl-verified"
    proceed: true
```

**Response: MODIFIED**
```yaml
hitl_response:
  action: "MODIFY"
  reviewer: "John Smith, SME-SAFETY-001"
  timestamp: "2026-01-30T14:30:00Z"
  
  modification:
    original_value: "3.5 bar"
    corrected_value: "3.2 bar"
    justification: "Updated per ECN-2026-0045, effective Q100-201 onwards"
    additional_source: "ECN-2026-0045, span:45-80"
  
  result:
    update_source_reference: true
    confidence_update: 0.95
    proceed_after_validation: true
```

**Response: REJECTED**
```yaml
hitl_response:
  action: "REJECT"
  reviewer: "John Smith, SME-SAFETY-001"
  timestamp: "2026-01-30T14:30:00Z"
  
  rejection:
    reason: "Source document superseded by Rev C"
    correct_source: "KNU-28-10-005-C"
    action_required: "Re-extract from updated source"
  
  result:
    mark_transformation_failed: true
    return_to_source: true
    log_rejection_reason: true
```

### Step 5: Create Audit Record

Log HITL interaction for compliance:

```yaml
hitl_audit_record:
  hitl_id: "HITL-20260130-001"
  
  timeline:
    escalated_at: "2026-01-30T12:00:00Z"
    assigned_at: "2026-01-30T12:01:00Z"
    reviewed_at: "2026-01-30T14:30:00Z"
    
  reviewer:
    id: "SME-SAFETY-001"
    name: "John Smith"
    category: "SME_SAFETY"
    
  decision:
    action: "APPROVE"
    justification: "Value verified against design baseline"
    
  hash_chain:
    previous_hash: "sha256:abc123..."
    entry_hash: "sha256:def456..."
```

## Flowchart

```
┌─────────────────────┐
│  HITL Triggered     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Identify Trigger    │
│ (Rule + Condition)  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Categorize Review   │
│ (SME/Safety/CM)     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Prepare Review      │
│ Package             │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Assign to Reviewer  │
└──────────┬──────────┘
           │
           ▼
    ┌──────┴──────┐
    │             │
    ▼             │ (Timeout)
┌─────────────────┐    │
│ Await Response  │────┘
└────────┬────────┘    │
         │             ▼
         │    ┌─────────────────┐
         │    │ Escalate to     │
         │    │ Backup Reviewer │
         │    └─────────────────┘
         │
    ┌────┴────┬────────┬────────┐
    │         │        │        │
    ▼         ▼        ▼        ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│APPROVE│ │MODIFY │ │REJECT │ │ESCALATE│
└───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘
    │         │        │         │
    ▼         ▼        ▼         ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│Update │ │Apply  │ │Return │ │Route  │
│Conf.  │ │Correct│ │to     │ │to     │
│to 0.95│ │Value  │ │Source │ │Higher │
│PROCEED│ │PROCEED│ │       │ │Auth.  │
└───────┘ └───────┘ └───────┘ └───────┘
```

## Related Instructions

- [INSTR-EXTRACT-001](./extract.instructions.md) - Data Extraction
- [INSTR-TRANSFORM-001](./transform.instructions.md) - CSDB Transformation
- [INSTR-VALIDATE-001](./validate.instructions.md) - Content Validation

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial release |
