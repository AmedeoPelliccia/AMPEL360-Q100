# GENESIS Graduation Criteria — 96-20-schema-registry-and-canonical-models

**Purpose:** Define rules for promoting GENESIS items to subject-level KNOTs  
**Status:** Active

---

## Graduation Triggers

A GENESIS item should be graduated to a subject-level KNOT when it meets one or more of the following criteria:

### 1. Scope Clarity
- The uncertainty has been sufficiently defined to create actionable work
- Requirements or constraints are identified
- Impact area is clearly bounded

### 2. Resource Allocation
- Budget and schedule are allocated to resolve the uncertainty
- Personnel are assigned to investigate or resolve
- Tools and infrastructure are available

### 3. Traceability Established
- Item can be linked to specific requirements (REQ-96-XX-YY-ZZZZ)
- Work package assignment is clear (WP-96-XXXX)
- Downstream impact is understood

### 4. Criticality
- Item is blocking other work
- Item is on critical path
- Item affects baseline or milestone

### 5. Formal Review Required
- Item requires engineering review board consideration
- Item needs stakeholder approval
- Item impacts certification or compliance

---

## Graduation Process

1. **Candidate Identification** — Mark as `graduation_candidate=true` in CSV
2. **Criteria Validation** — Verify at least one trigger is met
3. **Subject Assignment** — Determine appropriate subject folder (96-XX-YY-subject/)
4. **KNOT Creation** — Create formal KNOT entry in subject's KDB/LM/SSOT/PLM/LC01_PROBLEM_STATEMENT/KNOTS.csv
5. **Traceability** — Update TRACE_MATRIX.csv to link GENESIS item to subject KNOT
6. **Archive** — Move GENESIS item to subject's GOVERNANCE/CHANGE_LOG.md as "Graduated from GENESIS"

---

## Review Cadence

- GENESIS items reviewed weekly during team standups
- Graduation candidates reviewed at monthly engineering review
- All GENESIS items reassessed at project milestones (PDR, CDR, etc.)
