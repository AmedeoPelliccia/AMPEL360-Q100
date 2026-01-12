---
# ═══════════════════════════════════════════════════════════════════════════════
# KNU ARTIFACT METADATA
# ═══════════════════════════════════════════════════════════════════════════════
knu_id: "KNU-00-00-001-REQ-002"
knot_id: "KNOT-00-00-001"
title: "Term Type Taxonomy Requirements"
knu_type: "REQ"
artifact_class: "SSOT"
lifecycle_category: "LC02"
rec:  "LC02"
ata_reference: "00-00"
ata_address: "ATA-00-00-00-00"
expected_location: "../LC02_SYSTEM_REQUIREMENTS/"
status: "DRAFT"
version: "I01-R01"
priority: "HIGH"

# Ownership & Governance
owner_aor: "STK_CM"
contributors: 
  - "STK_DATA"
  - "STK_SE"
  - "STK_PUB"
reviewers:
  - "STK_CM"
  - "STK_SE"
approved_by: null
approval_date: null

# Dates
created_date: "2026-01-11"
due_date: "2026-02-15"
last_updated: "2026-01-11"

# Acceptance & Verification
acceptance_criteria: "Taxonomy approved by STK_CM + STK_SE; integrated with schema; validation rules defined; cross-referenced with S1000D and ATA standards"
verification_method: "Review"
effort_predicted: 5

# Modification Tracking
spawned_by_tbd: "TBD-00-003"
origin:  "TBD-00-003"
discovered_in: "KNU-00-00-001-ICD-001"
modification_type: "NEW"
triggers_knus: 
  - "KNU-00-00-001-ICD-001"  # Schema modification
  - "KNU-00-00-001-TEST-001" # Validation tests
  - "KNU-00-00-001-PUB-002"  # Usage guide
  - "KNU-96-10-001-ICD-003"  # DPP namespace mapping
blocking:  true

# Traceability
parent_requirements: 
  - "KNU-00-00-001-REQ-001"  # Program Glossary Requirements
  - "KNU-00-00-001-ICD-001"  # Terminology Database Schema
  - "S1000D Issue 5. 0"
  - "ATA iSpec 2200"
child_requirements:  []
related_knots:
  - "KNOT-00-00-001"  # Controlled Terminology Foundation
  - "KNOT-96-10-001"  # DPP Identifier Grammar
related_knus:
  - "KNU-00-00-001-ICD-001"  # Schema requiring this taxonomy
  - "KNU-00-00-001-TEST-001" # Spawned validation tests
  - "KNU-00-00-001-PUB-002"  # Spawned usage guide
  - "KNU-96-10-001-ICD-003"  # Cross-KNOT DPP integration
ata_traces:
  - "ATA-00"  # General

# Standards Compliance
industry_standards:
  - "S1000D Issue 5.0"
  - "ATA iSpec 2200"
  - "ISO 12620 (Terminology)"
  - "W3C SKOS"

# Document Control
classification: "INTERNAL"
export_control: "NONE"
canonical_hash: null
---

# Term Type Taxonomy Requirements

**KNU ID:** KNU-00-00-001-REQ-002  
**KNOT:** KNOT-00-00-001  
**ATA Reference:** 00-00 (General)  
**ATA Address:** ATA-00-00-00-00  
**Status:** DRAFT  
**Version:** I01-R01  
**Priority:** HIGH  
**Blocking:** ⚠️ YES — Blocks schema finalization  

---

## 1. Purpose and Scope

### 1.1 Purpose

This document defines the complete taxonomy of term types for the AMPEL360 Q100 terminology database.  This taxonomy resolves **TBD-00-003** discovered during creation of the Terminology Database Schema (KNU-00-00-001-ICD-001).

The term type classification enables:
- **Automated validation** of term usage in technical documentation
- **Context-aware search** and filtering
- **Semantic reasoning** across terminology database
- **S1000D CIR integration** with proper categorization
- **DPP namespace mapping** for product data

### 1.2 Scope

#### 1.2.1 In-Scope

| Domain | Coverage |
|--------|----------|
| **Term Types** | Complete enumeration of grammatical/semantic types |
| **Validation Rules** | Constraints for each term type |
| **Usage Guidelines** | When to apply each type |
| **Examples** | Representative terms for each type |
| **Metadata** | Required and optional fields per type |
| **Integration** | S1000D, ATA, DPP mappings |

#### 1.2.2 Out-of-Scope

| Item | Reference |
|------|-----------|
| Specific term definitions | Managed via glossary workflow |
| Multi-word term handling | Grammar rules (separate specification) |
| Synonym detection algorithms | Search infrastructure |
| Translation methodology | KNU-00-00-002-PLAN-001 |

---

## 2. Applicable Documents

### 2.1 Industry Standards

| Document | Title | Relationship |
|----------|-------|--------------|
| S1000D Issue 5.0 | International specification for technical publications | Term categorization reference |
| ATA iSpec 2200 | Information Standards for Aviation Maintenance | Aviation terminology standards |
| ISO 12620 | Computer applications in terminology | Terminological metadata |
| W3C SKOS | Simple Knowledge Organization System | Semantic type hierarchies |

### 2.2 Program Documents

| Document | Title | Relationship |
|----------|-------|--------------|
| KNU-00-00-001-REQ-001 | Program Glossary Requirements | Parent requirements |
| KNU-00-00-001-ICD-001 | Terminology Database Schema | Database implementation |
| TBD-00-003 | Term Type Enumeration Undefined | Problem statement (resolved by this KNU) |

---

## 3. Definitions and Abbreviations

| Term | Definition |
|------|------------|
| **Term Type** | Classification of a term based on grammatical and semantic properties |
| **Part of Speech** | Grammatical category (noun, verb, adjective, etc.) |
| **Semantic Domain** | Subject area or context of term usage |
| **Term Entry** | Complete record for a single term in database |
| **Validation Rule** | Constraint that must be satisfied for term type assignment |

---

## 4. Term Type Taxonomy

### 4.1 Primary Classification

```
Term Types (12 categories)
├─ Grammatical Types (5)
│  ├─ NOUN
│  ├─ VERB
│  ├─ ADJECTIVE
│  ├─ ADVERB
│  └─ PHRASE
│
├─ Specialized Types (4)
│  ├─ ACRONYM
│  ├─ ABBREVIATION
│  ├─ SYMBOL
│  └─ FORMULA
│
└─ Domain-Specific Types (3)
   ├─ UNIT
   ├─ QUANTITY
   └─ CONCEPT
```

---

## 5. Requirements

### 5.1 General Requirements

#### REQ-TT-001: Complete Enumeration

**Requirement:** The term type taxonomy shall include exactly 12 distinct types as defined in section 4.1.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Comprehensive coverage of aviation technical terminology |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | TBD-00-003 |
| **Allocated To** | STK_CM |

---

#### REQ-TT-002: Mutual Exclusivity

**Requirement:** Each term shall be assigned exactly one primary term type.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Ensures unambiguous classification |
| **Verification** | Test |
| **Priority** | MUST |
| **Trace To** | Database integrity |
| **Allocated To** | STK_DATA |

**Exception:** Terms may have secondary type tags for cross-referencing purposes.

---

#### REQ-TT-003: Validation Enforcement

**Requirement:** The terminology database shall enforce validation rules specific to each term type.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Prevents invalid term entries |
| **Verification** | Test |
| **Priority** | MUST |
| **Trace To** | KNU-00-00-001-ICD-001 |
| **Allocated To** | STK_DATA |

---

### 5.2 Grammatical Types

#### 5.2.1 NOUN

#### REQ-TT-010: Noun Definition

**Requirement:** A term shall be classified as NOUN if it represents a person, place, thing, or concept.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Standard grammatical definition |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO 12620 |
| **Allocated To** | STK_CM |

**Examples:**
- Aircraft
- Fuselage
- Turbine
- LH₂ (liquid hydrogen)
- Center of Gravity

**Required Fields:**
- Definition (TEXT, NOT NULL)
- Plural form (VARCHAR, OPTIONAL)
- Gender (for languages requiring it)

**Validation Rules:**
```sql
CHECK (term_type = 'NOUN' AND definition IS NOT NULL)
CHECK (term_type = 'NOUN' AND LENGTH(definition) >= 10)
```

---

#### 5.2.2 VERB

#### REQ-TT-011: Verb Definition

**Requirement:** A term shall be classified as VERB if it represents an action, process, or state.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Action-oriented terminology |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO 12620 |
| **Allocated To** | STK_CM |

**Examples:**
- Inspect
- Torque
- Pressurize
- De-fuel
- Certify

**Required Fields:**
- Definition (TEXT, NOT NULL)
- Infinitive form (VARCHAR, NOT NULL)
- Conjugation notes (TEXT, OPTIONAL)

**Validation Rules:**
```sql
CHECK (term_type = 'VERB' AND definition IS NOT NULL)
CHECK (term_type = 'VERB' AND infinitive_form IS NOT NULL)
```

---

#### 5.2.3 ADJECTIVE

#### REQ-TT-012: Adjective Definition

**Requirement:** A term shall be classified as ADJECTIVE if it modifies or describes a noun.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Descriptive terminology |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO 12620 |
| **Allocated To** | STK_CM |

**Examples:**
- Cryogenic
- Structural
- Hydraulic
- Redundant
- Certified

**Required Fields:**
- Definition (TEXT, NOT NULL)
- Comparative form (VARCHAR, OPTIONAL)
- Superlative form (VARCHAR, OPTIONAL)

---

#### 5.2.4 ADVERB

#### REQ-TT-013: Adverb Definition

**Requirement:** A term shall be classified as ADVERB if it modifies a verb, adjective, or another adverb.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Process qualification terminology |
| **Verification** | Review |
| **Priority** | SHOULD |
| **Trace To** | ISO 12620 |
| **Allocated To** | STK_CM |

**Examples:**
- Continuously
- Immediately
- Properly
- Periodically

**Usage Note:** Adverbs are less common in technical terminology; often converted to adjectives.

---

#### 5.2.5 PHRASE

#### REQ-TT-014: Phrase Definition

**Requirement:** A term shall be classified as PHRASE if it consists of multiple words forming a single terminological unit.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Multi-word technical terms |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | S1000D, ATA iSpec 2200 |
| **Allocated To** | STK_CM |

**Examples:**
- Center of Gravity
- Maximum Takeoff Weight
- Liquid Hydrogen Storage System
- Non-Destructive Testing

**Required Fields:**
- Definition (TEXT, NOT NULL)
- Phrase structure (e.g., "NOUN + OF + NOUN")
- Component terms (ARRAY of term_ids)

**Validation Rules:**
```sql
CHECK (term_type = 'PHRASE' AND term_name LIKE '% %')  -- Contains space
CHECK (term_type = 'PHRASE' AND ARRAY_LENGTH(component_terms, 1) >= 2)
```

---

### 5.3 Specialized Types

#### 5.3.1 ACRONYM

#### REQ-TT-020: Acronym Definition

**Requirement:** A term shall be classified as ACRONYM if it is formed from the initial letters of a multi-word term and pronounced as a word.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Standard acronym definition |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | S1000D |
| **Allocated To** | STK_CM |

**Examples:**
- NASA (National Aeronautics and Space Administration)
- EASA (European Union Aviation Safety Agency)
- FADEC (Full Authority Digital Engine Control)
- SOPM (Standard Operating Procedures Manual)

**Required Fields:**
- Full expansion (VARCHAR, NOT NULL)
- Pronunciation guide (VARCHAR, OPTIONAL)
- Definition (TEXT, NOT NULL)

**Validation Rules:**
```sql
CHECK (term_type = 'ACRONYM' AND full_expansion IS NOT NULL)
CHECK (term_type = 'ACRONYM' AND term_name = UPPER(term_name))  -- All caps
CHECK (term_type = 'ACRONYM' AND term_name ~ '^[A-Z]{2,}$')      -- Letters only
```

---

#### 5.3.2 ABBREVIATION

#### REQ-TT-021: Abbreviation Definition

**Requirement:** A term shall be classified as ABBREVIATION if it is a shortened form of a word or phrase, typically pronounced as individual letters.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Distinguish from acronyms |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | S1000D |
| **Allocated To** | STK_CM |

**Examples:**
- LH₂ (Liquid Hydrogen) — pronounced "L-H-two"
- CG (Center of Gravity) — pronounced "C-G"
- APU (Auxiliary Power Unit) — pronounced "A-P-U"
- BWB (Blended Wing Body) — pronounced "B-W-B"

**Required Fields:**
- Full form (VARCHAR, NOT NULL)
- Definition (TEXT, NOT NULL)
- Pronunciation (VARCHAR, OPTIONAL)

**Validation Rules:**
```sql
CHECK (term_type = 'ABBREVIATION' AND full_form IS NOT NULL)
CHECK (term_type = 'ABBREVIATION' AND LENGTH(term_name) < LENGTH(full_form))
```

---

#### 5.3.3 SYMBOL

#### REQ-TT-022: Symbol Definition

**Requirement:** A term shall be classified as SYMBOL if it is a graphical or special character representation with technical meaning.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Mathematical and engineering symbols |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO standards |
| **Allocated To** | STK_CM |

**Examples:**
- α (angle of attack)
- Δ (delta, change in)
- ∞ (infinity)
- ≤ (less than or equal to)
- ⊕ (direct sum, XOR)

**Required Fields:**
- Symbol representation (VARCHAR, NOT NULL)
- Unicode code point (VARCHAR, NOT NULL)
- Definition (TEXT, NOT NULL)
- Context (e.g., "mathematics", "electronics")

**Validation Rules:**
```sql
CHECK (term_type = 'SYMBOL' AND unicode_codepoint IS NOT NULL)
CHECK (term_type = 'SYMBOL' AND LENGTH(term_name) <= 5)
```

---

#### 5.3.4 FORMULA

#### REQ-TT-023: Formula Definition

**Requirement:** A term shall be classified as FORMULA if it represents a mathematical or chemical expression.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Scientific notation |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO standards |
| **Allocated To** | STK_CM |

**Examples:**
- H₂O (water)
- LH₂ (liquid hydrogen — when referring to chemical formula)
- E=mc² (mass-energy equivalence)
- F=ma (Newton's second law)

**Required Fields:**
- Formula notation (VARCHAR, NOT NULL)
- Definition (TEXT, NOT NULL)
- Domain (e.g., "chemistry", "physics")
- Variables explanation (JSONB)

**Validation Rules:**
```sql
CHECK (term_type = 'FORMULA' AND formula_notation IS NOT NULL)
```

---

### 5.4 Domain-Specific Types

#### 5.4.1 UNIT

#### REQ-TT-030: Unit Definition

**Requirement:** A term shall be classified as UNIT if it represents a standard of measurement. 

| Attribute | Value |
|-----------|-------|
| **Rationale** | Measurement standardization |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | SI, ISO 80000 |
| **Allocated To** | STK_SE |

**Examples:**
- kilogram (kg)
- meter (m)
- Kelvin (K)
- Pascal (Pa)
- Newton (N)

**Required Fields:**
- Unit symbol (VARCHAR, NOT NULL)
- Unit system (e.g., "SI", "Imperial")
- Dimension (e.g., "length", "mass", "temperature")
- Conversion factor (to SI base unit, NUMERIC)

**Validation Rules:**
```sql
CHECK (term_type = 'UNIT' AND unit_symbol IS NOT NULL)
CHECK (term_type = 'UNIT' AND unit_system IN ('SI', 'Imperial', 'US Customary', 'Aviation'))
CHECK (term_type = 'UNIT' AND conversion_factor > 0)
```

---

#### 5.4.2 QUANTITY

#### REQ-TT-031: Quantity Definition

**Requirement:** A term shall be classified as QUANTITY if it represents a measurable property or attribute.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Physical properties |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO 80000 |
| **Allocated To** | STK_SE |

**Examples:**
- Temperature
- Pressure
- Velocity
- Energy Density
- Mass Flow Rate

**Required Fields:**
- Definition (TEXT, NOT NULL)
- Typical units (ARRAY of unit_ids)
- SI dimension (VARCHAR, e.g., "[M L T⁻²]")

**Validation Rules:**
```sql
CHECK (term_type = 'QUANTITY' AND typical_units IS NOT NULL)
CHECK (term_type = 'QUANTITY' AND ARRAY_LENGTH(typical_units, 1) >= 1)
```

---

#### 5.4.3 CONCEPT

#### REQ-TT-032: Concept Definition

**Requirement:** A term shall be classified as CONCEPT if it represents an abstract idea, principle, or methodology not fitting other categories.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Abstract terminology |
| **Verification** | Review |
| **Priority** | MUST |
| **Trace To** | ISO 12620 |
| **Allocated To** | STK_CM |

**Examples:**
- Airworthiness
- Traceability
- Certification
- Configuration Management
- Safety Case

**Required Fields:**
- Definition (TEXT, NOT NULL, MIN 50 characters)
- Conceptual domain (VARCHAR, e.g., "safety", "quality")
- Related concepts (ARRAY of term_ids)

**Validation Rules:**
```sql
CHECK (term_type = 'CONCEPT' AND LENGTH(definition) >= 50)
CHECK (term_type = 'CONCEPT' AND conceptual_domain IS NOT NULL)
```

---

## 6. Type-Specific Metadata Requirements

### 6.1 Metadata Matrix

| Term Type | Definition | Example | Full Form | Symbol | Unit Symbol | Dimension | Required |
|-----------|: ----------:|:-------:|:---------:|:------:|:-----------:|:---------:|----------|
| NOUN | ✓ | ✓ | — | — | — | — | **YES** |
| VERB | ✓ | ✓ | — | — | — | — | **YES** |
| ADJECTIVE | ✓ | ✓ | — | — | — | — | **YES** |
| ADVERB | ✓ | ✓ | — | — | — | — | **YES** |
| PHRASE | ✓ | ✓ | — | — | — | — | **YES** |
| ACRONYM | ✓ | ✓ | ✓ | — | — | — | **YES** |
| ABBREVIATION | ✓ | ✓ | ✓ | — | — | — | **YES** |
| SYMBOL | ✓ | ✓ | — | ✓ | — | — | **YES** |
| FORMULA | ✓ | ✓ | — | — | — | — | **YES** |
| UNIT | ✓ | ✓ | — | ✓ | ✓ | — | **YES** |
| QUANTITY | ✓ | ✓ | — | — | — | ✓ | **YES** |
| CONCEPT | ✓ | ✓ | — | — | — | — | **YES** |

---

## 7. Integration Requirements

### 7.1 S1000D Integration

#### REQ-TT-040: S1000D Mapping

**Requirement:** Each term type shall map to equivalent S1000D information code types where applicable.

| Term Type | S1000D Mapping |
|-----------|----------------|
| NOUN | `<definitionListItem>` with `@itemType="noun"` |
| ACRONYM | `<acronym>` with `<acronymTerm>` + `<acronymDefinition>` |
| ABBREVIATION | `<abbreviation>` with `<abbreviationTerm>` + `<abbreviationDefinition>` |
| SYMBOL | `<symbol>` with Unicode representation |
| UNIT | `<quantity>` with `@quantityUnitOfMeasure` |

| Attribute | Value |
|-----------|-------|
| **Rationale** | CIR export compatibility |
| **Verification** | Test |
| **Priority** | MUST |
| **Trace To** | KNU-00-00-001-ICD-002 |
| **Allocated To** | STK_CM |

---

### 7.2 DPP Integration

#### REQ-TT-041: DPP Namespace Mapping

**Requirement:** Each term type shall have a corresponding DPP namespace identifier pattern.

| Term Type | DPP URI Pattern | Example |
|-----------|-----------------|---------|
| NOUN | `ampel360:term:noun:{term_id}` | `ampel360:term:noun:fuel-cell` |
| ACRONYM | `ampel360:term:acronym:{acronym}` | `ampel360:term:acronym: EASA` |
| UNIT | `ampel360:unit:{symbol}` | `ampel360:unit:kg` |
| QUANTITY | `ampel360:quantity:{name}` | `ampel360:quantity:temperature` |

| Attribute | Value |
|-----------|-------|
| **Rationale** | Product data interoperability |
| **Verification** | Test |
| **Priority** | MUST |
| **Trace To** | KNU-96-10-001-ICD-003 |
| **Allocated To** | STK_DATA |

**Note:** This requirement spawns **KNU-96-10-001-ICD-003** (cross-KNOT).

---

## 8. Usage Guidelines

### 8.1 Type Selection Decision Tree

```
Is it a measurement unit? → YES → UNIT
    ↓ NO
Is it a measurable property? → YES → QUANTITY
    ↓ NO
Is it formed from initials? → YES → Is it pronounced as a word? → YES → ACRONYM
    ↓ NO                                      ↓ NO → ABBREVIATION
Is it a shortened form? → YES → ABBREVIATION
    ↓ NO
Is it a special character? → YES → SYMBOL
    ↓ NO
Is it a formula/equation? → YES → FORMULA
    ↓ NO
Is it multiple words? → YES → PHRASE
    ↓ NO
Is it an action/process? → YES → VERB
    ↓ NO
Is it descriptive? → YES → ADJECTIVE
    ↓ NO
Is it an abstract idea? → YES → CONCEPT
    ↓ NO
DEFAULT → NOUN
```

---

## 9. Validation and Testing

### 9.1 Validation Test Cases

#### REQ-TT-050: Test Coverage

**Requirement:** The term type taxonomy shall be validated with at least 10 representative examples per type.

| Attribute | Value |
|-----------|-------|
| **Rationale** | Ensures taxonomy completeness |
| **Verification** | Test |
| **Priority** | MUST |
| **Trace To** | KNU-00-00-001-TEST-001 |
| **Allocated To** | STK_TEST |

**Note:** This requirement spawns **KNU-00-00-001-TEST-001**. 

---

### 9.2 Edge Cases

| Edge Case | Resolution |
|-----------|------------|
| **LH₂** — Chemical formula or abbreviation?  | ABBREVIATION (when referring to substance); FORMULA (when referring to chemical composition H₂) |
| **BWB** — Acronym or abbreviation? | ACRONYM (pronounced "bwib" informally); ABBREVIATION (pronounced "B-W-B" formally) — Default:  ABBREVIATION |
| **kg·m/s²** — Unit or formula? | UNIT (derived SI unit for Newton) |
| **Center of Gravity** — Phrase or concept? | PHRASE (multi-word terminological unit); also tagged as CONCEPT |

---

## 10. Traceability

### 10.1 Upstream Traceability

| Source | Reference |
|--------|-----------|
| TBD-00-003 | Problem statement (resolved by this document) |
| KNU-00-00-001-ICD-001 | Terminology Database Schema (parent artifact) |
| KNU-00-00-001-REQ-001 | Program Glossary Requirements |
| S1000D Issue 5. 0 | Terminology standards |
| ISO 12620 | Terminological metadata |

---

### 10.2 Downstream Traceability (Triggered Artifacts)

| Target | Dependency | Type |
|--------|------------|------|
| **KNU-00-00-001-ICD-001** | Schema modification:  `ALTER TABLE terms ADD CONSTRAINT term_type_check` | MODIFICATION |
| **KNU-00-00-001-TEST-001** | Schema Validation Tests | NEW |
| **KNU-00-00-001-PUB-002** | Term Type Usage Guide (AMM) | NEW |
| **KNU-96-10-001-ICD-003** | DPP Term Type Namespace Mapping | NEW (cross-KNOT) |

---

## 11. Modification Package Impact

### 11.1 MOD-00-001: Term Type Taxonomy Package

```
TBD-00-003: Define term_type enumeration (RESOLVED by this document)
    │
    ├─ PRIMARY KNU:  KNU-00-00-001-REQ-002 (this document)
    │    Effort: 5 SP
    │    ΔR: -15
    │
    └─ TRIGGERED KNUs: 
         ├─ KNU-00-00-001-ICD-001 (MODIFICATION)
         │    Action: Add term_type constraint to database schema
         │    Effort: 2 SP | ΔR: -3
         │
         ├─ KNU-00-00-001-TEST-001 (NEW)
         │    Action: Create validation test suite
         │    Effort: 3 SP | ΔR: -2
         │
         ├─ KNU-00-00-001-PUB-002 (NEW)
         │    Action: Create term type usage guide for CSDB authors
         │    Effort: 4 SP | ΔR:  -3
         │
         └─ KNU-96-10-001-ICD-003 (NEW, cross-KNOT)
              Action: Define DPP namespace mapping
              Effort: 6 SP | ΔR:  -5 (primary), -2. 5 (spillover to KNOT-00-00-001)

TOTAL PACKAGE: 
    Total Effort:       20 SP
    Total ΔR:         -25. 5
    TT Allocation:     24 TT (includes cascade bonus)
    Baseline Impact:   Schema v1.1. 0
    Effectivity:       2026-02-15
```

---

## 12. Open Items and TBDs

**All TBDs from parent artifact (KNU-00-00-001-ICD-001) resolved by this document:**

| TBD ID | Description | Status |
|--------|-------------|--------|
| TBD-00-003 | Define full `term_type` enumeration | ✅ **RESOLVED** by this document |

**No new TBDs introduced.**

---

## 13. Verification Matrix

| Requirement | Review | Inspection | Analysis | Test | Demonstration |
|-------------|: ------:|: ----------:|:--------:|:----:|:-------------:|
| REQ-TT-001 | ✓ | | | | |
| REQ-TT-002 | | | | ✓ | |
| REQ-TT-003 | | | | ✓ | |
| REQ-TT-010 | ✓ | | | | |
| REQ-TT-011 | ✓ | | | | |
| REQ-TT-012 | ✓ | | | | |
| REQ-TT-013 | ✓ | | | | |
| REQ-TT-014 | ✓ | | | ✓ | |
| REQ-TT-020 | ✓ | | | ✓ | |
| REQ-TT-021 | ✓ | | | ✓ | |
| REQ-TT-022 | ✓ | | | ✓ | |
| REQ-TT-023 | ✓ | | | ✓ | |
| REQ-TT-030 | ✓ | | | ✓ | |
| REQ-TT-031 | ✓ | | | ✓ | |
| REQ-TT-032 | ✓ | | | | |
| REQ-TT-040 | | | | ✓ | |
| REQ-TT-041 | | | | ✓ | |
| REQ-TT-050 | | | | ✓ | |

**Summary:** 18 requirements | Review:  11 | Test: 13

---

## 14. Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I01-R01 | 2026-01-11 | STK_CM | Initial document resolving TBD-00-003; spawned from KNU-00-00-001-ICD-001 |

---

## 15. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author (STK_CM) | | | |
| Reviewer (STK_SE) | | | |
| Reviewer (STK_DATA) | | | |
| Approver (STK_CM) | | | |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under LC02_SYSTEM_REQUIREMENTS.*

*Spawned by TBD-00-003 discovered in KNU-00-00-001-ICD-001.*

*✅ Resolves:  TBD-00-003*  
*🔗 Triggers: KNU-00-00-001-ICD-001 (mod), KNU-00-00-001-TEST-001, KNU-00-00-001-PUB-002, KNU-96-10-001-ICD-003*
```

