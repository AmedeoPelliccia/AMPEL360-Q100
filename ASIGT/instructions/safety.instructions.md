# BREX Instruction Schema: Safety-Critical Content
<!-- BREX-INSTRUCTION-ID: INSTR-SAFETY-001 -->
<!-- VERSION: 1.0.0 -->
<!-- EFFECTIVE-DATE: 2026-01-30 -->

## Purpose

This instruction defines the BREX-compliant process for handling safety-critical content in the AMPEL360 Q100 program. Safety-critical content includes warnings, cautions, hazardous material information, and any data that could impact flight safety if incorrect.

## Applicable BREX Rules

| Rule ID | Rule Name | Severity |
|---------|-----------|----------|
| BREX-CONF-002 | Safety-Critical Confidence Threshold | CRITICAL |
| BREX-FAB-001 | Part Number Fabrication Prevention | CRITICAL |
| BREX-FAB-002 | Torque Specification Fabrication Prevention | CRITICAL |
| BREX-FAB-003 | Pressure Limit Fabrication Prevention | CRITICAL |
| BREX-LH2-001 | Cryogenic Temperature Unit Validation | HIGH |
| BREX-LH2-002 | Hydrogen Safety Warning Required | CRITICAL |

## Safety-Critical Content Categories

### Category 1: Warnings

**Severity Level:** CRITICAL
**Confidence Threshold:** 0.95

Content that alerts to potential personal injury or death:

```yaml
warning:
  type: "WARNING"
  icon: "⚠️"
  format: "BOLD_UPPERCASE"
  content: "HYDROGEN IS HIGHLY FLAMMABLE. ENSURE ADEQUATE VENTILATION."
  preservation_rule: "NEVER_SUMMARIZE"
  hitl_required: true
```

### Category 2: Cautions

**Severity Level:** HIGH
**Confidence Threshold:** 0.90

Content that alerts to potential equipment damage:

```yaml
caution:
  type: "CAUTION"
  icon: "⚠️"
  format: "BOLD"
  content: "Do not exceed 3.5 bar operating pressure."
  preservation_rule: "PRESERVE_EXACT"
```

### Category 3: Safety Limits

**Severity Level:** CRITICAL
**Confidence Threshold:** 0.95

Numerical limits that define safe operating ranges:

```yaml
safety_limit:
  type: "pressure"
  min_value: 1.0
  max_value: 3.5
  unit: "bar"
  context: "LH2 tank operating pressure"
  source:
    doc_id: "SPEC-28-001"
    spans: ["span:450-480"]
  hitl_required: true
```

### Category 4: Hazardous Materials

**Severity Level:** CRITICAL
**Confidence Threshold:** 0.95

Information about hazardous substances:

```yaml
hazmat:
  substance: "Liquid Hydrogen"
  un_number: "UN1966"
  hazard_class: "2.1 (Flammable Gas)"
  cryogenic: true
  additional_hazards:
    - "Frostbite risk from cryogenic temperatures"
    - "Oxygen displacement in enclosed spaces"
    - "Flammability range: 4-75% in air"
```

## Instruction Steps

### Step 1: Identify Safety-Critical Content

Detect content matching safety-critical patterns:

**Detection Patterns:**
| Pattern | Category | Action |
|---------|----------|--------|
| "WARNING:" | Warning | Flag CRITICAL |
| "CAUTION:" | Caution | Flag HIGH |
| "DANGER:" | Warning | Flag CRITICAL |
| "⚠️" or "🔴" | Safety marker | Flag for review |
| "pressure: X bar" | Safety limit | Validate value |
| "temperature: X K" | Safety limit | Validate value |
| "torque: X Nm" | Safety limit | Mandatory HITL |

**Decision Path:**
- Safety-critical detected → Apply elevated thresholds
- Not safety-critical → Continue with standard rules

### Step 2: Apply Elevated Confidence Threshold

**BREX Check:** BREX-CONF-002

Safety-critical content requires elevated confidence:

| Content Type | Standard Threshold | Safety Threshold | Gap Handling |
|--------------|-------------------|------------------|--------------|
| Text extraction | 0.85 | 0.90 | HITL if below |
| Numerical values | 0.85 | 0.95 | HITL required |
| Warnings/Cautions | 0.85 | 0.95 | Never auto-accept |
| Part numbers | 0.85 | 0.95 | HITL if below |

```yaml
confidence_evaluation:
  content_type: "pressure_limit"
  measured_confidence: 0.88
  required_threshold: 0.95
  gap: 0.07
  decision: "ESCALATE_HITL"
  reason: "Safety-critical numerical value below threshold"
```

### Step 3: Verify Source Authority

Safety-critical content must come from authoritative sources:

**Acceptable Sources:**
| Source Type | Authority Level | Example |
|-------------|----------------|---------|
| Type Design | HIGHEST | Design specifications, drawings |
| Engineering | HIGH | Engineering reports, analyses |
| Test Data | HIGH | Test reports, validation data |
| Regulatory | HIGHEST | FAA/EASA requirements |

**Unacceptable Sources:**
- Marketing materials
- Informal communications
- Unverified third-party documents
- Superseded documents

**Decision Path:**
- ✓ Authoritative source → Continue to Step 4
- ✗ Non-authoritative source → REJECT, require proper source

### Step 4: Preserve Content Integrity

**BREX Check:** BREX-LH2-002, BREX-FAB-002, BREX-FAB-003

Safety content must be preserved exactly:

```yaml
preservation_rules:
  warnings:
    action: "PRESERVE_EXACT"
    summarize: false
    reorder: false
    combine: false
    
  numerical_values:
    action: "PRESERVE_EXACT"
    convert_units: false  # Unless explicitly required
    round: false
    interpolate: false
    
  procedures:
    action: "PRESERVE_SEQUENCE"
    reorder_steps: false
    combine_steps: false
```

### Step 5: Validate Unit Standards

**BREX Check:** BREX-LH2-001

Ensure safety-critical values use correct units:

| Measurement | Standard Unit | AMPEL360 Convention |
|-------------|--------------|---------------------|
| Cryogenic Temperature | Kelvin (K) | K (never °C for cryo) |
| Pressure | bar | bar |
| Torque | Newton-meters (Nm) | Nm |
| Mass flow | kg/s | kg/s |
| Electrical current | Amperes (A) | A |
| Voltage | Volts (V) | V |

**Decision Path:**
- ✓ Correct units → Continue to Step 6
- ⚠ Non-standard units → Convert with HITL verification
- ✗ Unknown units → ESCALATE_HITL

### Step 6: Mandatory HITL Verification

For certain safety-critical content, HITL is **always** required regardless of confidence:

**Mandatory HITL Content:**
- [ ] Torque specifications (all)
- [ ] Life-limited part data
- [ ] Emergency procedure changes
- [ ] Hazardous material handling changes
- [ ] Structural limits (load, pressure, temperature)
- [ ] Electrical safety limits

```yaml
hitl_requirement:
  content_type: "torque_specification"
  value: "25 Nm"
  confidence: 0.96  # Even with high confidence
  hitl_required: true
  reason: "BREX-FAB-002 mandates HITL for all torque specs"
  review_category: "SME_SAFETY"
```

### Step 7: Create Safety-Tagged Audit Record

Create enhanced audit record with safety flags:

```yaml
safety_audit_record:
  decision_id: "BREX-20260130-SAF-001"
  safety_classification: "CRITICAL"
  
  content_summary:
    type: "pressure_limit"
    value: "3.5 bar max"
    ata_chapter: "28"
    
  verification_chain:
    - step: "Source verification"
      passed: true
      verifier: "BREX-SRC-001"
    - step: "Confidence threshold"
      passed: true
      verifier: "BREX-CONF-002"
    - step: "HITL review"
      passed: true
      verifier: "SME-SAFETY-001"
      timestamp: "2026-01-30T14:30:00Z"
      
  safety_sign_off:
    reviewer: "Jane Doe, Safety Engineer"
    certification: "SMS-CERT-2026-001"
    date: "2026-01-30"
```

## Flowchart

```
┌──────────────────────┐
│  Content Received    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐     ┌──────────────────────┐
│ Safety-Critical      │ No  │ Apply Standard       │
│ Content?             ├────►│ Rules                │
└──────────┬───────────┘     └──────────────────────┘
           │ Yes
           ▼
┌──────────────────────┐     ┌──────────────────────┐
│ Authoritative        │ No  │ REJECT               │
│ Source?              ├────►│ Require proper source│
└──────────┬───────────┘     └──────────────────────┘
           │ Yes
           ▼
┌──────────────────────┐     ┌──────────────────────┐
│ Confidence ≥ 0.90    │ No  │ ESCALATE_HITL        │
│ (or 0.95 for values)?├────►│ Mandatory review     │
└──────────┬───────────┘     └──────────────────────┘
           │ Yes
           ▼
┌──────────────────────┐     ┌──────────────────────┐
│ Mandatory HITL       │ Yes │ ESCALATE_HITL        │
│ Content Type?        ├────►│ Always required      │
└──────────┬───────────┘     └──────────────────────┘
           │ No
           ▼
┌──────────────────────┐     ┌──────────────────────┐
│ Units Correct?       │ No  │ Convert + Verify     │
│                      ├────►│ HITL                 │
└──────────┬───────────┘     └──────────────────────┘
           │ Yes
           ▼
┌──────────────────────┐
│ ACCEPT               │
│ Create safety-tagged │
│ audit record         │
└──────────────────────┘
```

## ATA Chapter-Specific Rules

### ATA 28 (Fuel - LH₂ Systems)

Additional requirements:
- All cryogenic temperatures in Kelvin
- Hydrogen safety warnings mandatory for all procedures
- Pressure limits require dual verification

### ATA 71 (Power Plant - Fuel Cell)

Additional requirements:
- Electrical safety limits require HITL
- Thermal management data requires SME review
- Cell voltage limits are safety-critical

### ATA 27 (Flight Controls)

Additional requirements:
- Control surface travel limits are CRITICAL
- Hydraulic pressure limits require HITL
- Rigging tolerances require dual verification

## Related Instructions

- [INSTR-EXTRACT-001](./extract.instructions.md) - Data Extraction
- [INSTR-HITL-001](./hitl.instructions.md) - HITL Escalation
- [INSTR-LH2-001](./lh2.instructions.md) - LH₂ Specific Handling

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial release |
