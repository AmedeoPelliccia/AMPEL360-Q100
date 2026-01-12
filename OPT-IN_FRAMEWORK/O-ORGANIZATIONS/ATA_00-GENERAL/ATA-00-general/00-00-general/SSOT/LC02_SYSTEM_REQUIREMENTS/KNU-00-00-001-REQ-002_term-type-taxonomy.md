# Term Type Taxonomy Specification

## 1. Purpose

Define the hierarchical taxonomy for classifying terminology entries in the AMPEL360 Q100 Program Glossary.

## 2. Taxonomy Structure

### Level 1: Primary Categories

| Code | Category | Description |
|------|----------|-------------|
| ACRO | Acronym | Abbreviated forms (e.g., BWB, LH₂) |
| TERM | Technical Term | Domain-specific terminology |
| UNIT | Unit of Measure | SI and derived units |
| SYMB | Symbol | Graphical symbols, placards |
| PROC | Procedure Term | Action/process terminology |
| ROLE | Role/Stakeholder | Organizational roles |

### Level 2: Domain Subcategories

| L1 | L2 Code | Subcategory |
|----|---------|-------------|
| TERM | TERM-AERO | Aerodynamics |
| TERM | TERM-STRU | Structures |
| TERM | TERM-PROP | Propulsion |
| TERM | TERM-H2 | Hydrogen Systems |
| TERM | TERM-ELEC | Electrical |
| TERM | TERM-AIML | AI/ML Systems |
| TERM | TERM-SAFE | Safety |
| TERM | TERM-CERT | Certification |
| TERM | TERM-DPP | Digital Product Passport |

### Level 3: Specificity Tags

| Tag | Meaning |
|-----|---------|
| -STD | Standard (from ATA/S1000D/SAE) |
| -Q100 | Q100-specific (novel) |
| -DEP | Deprecated |
| -CAND | Candidate (pending approval) |

## 3. Complete Taxonomy Code

```
FORMAT: L1-L2-L3

Examples:
  ACRO-PROP-Q100    → Q100-specific propulsion acronym
  TERM-H2-STD       → Standard hydrogen term
  SYMB-SAFE-Q100    → Q100-specific safety symbol
  UNIT-ELEC-STD     → Standard electrical unit
```

## 4. Database Schema Update

```sql
ALTER TABLE terms ADD COLUMN term_type_l1 VARCHAR(4);
ALTER TABLE terms ADD COLUMN term_type_l2 VARCHAR(10);
ALTER TABLE terms ADD COLUMN term_type_l3 VARCHAR(5);
ALTER TABLE terms ADD CONSTRAINT valid_l1 
  CHECK (term_type_l1 IN ('ACRO','TERM','UNIT','SYMB','PROC','ROLE'));
```

## 5. Migration Plan

| Phase | Action | Timeline |
|-------|--------|----------|
| 1 | Add columns to schema | Week 1 |
| 2 | Classify existing 250 terms | Week 2-3 |
| 3 | Validate classifications | Week 4 |
| 4 | Update UI/API | Week 5 |

## 6. Resolves

**RESOLVES:** TBD-00-00-001-ICD-001-003 (Term type taxonomy definition)

**UNBLOCKS:**
- KNU-00-00-001-ICD-001 (Schema update)
- KNU-00-00-001-TEST-001 (Schema validation tests)
- KNU-00-00-001-PUB-002 (Term type usage guide)

## 7. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Decision: 3-level taxonomy |
