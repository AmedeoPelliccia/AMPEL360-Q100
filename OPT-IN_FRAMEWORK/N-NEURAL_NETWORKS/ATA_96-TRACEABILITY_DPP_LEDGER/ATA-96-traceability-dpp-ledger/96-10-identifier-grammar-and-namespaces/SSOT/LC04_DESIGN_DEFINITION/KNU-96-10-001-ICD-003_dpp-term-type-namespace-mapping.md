---
knu_id: KNU-96-10-001-ICD-003
knot_id: KNOT-96-10-001
title: DPP Term Type Namespace Mapping
type: ICD
artifact_class: SSOT
status: GENERATED
owner: STK_DATA
due_date: 2026-02-28
priority: HIGH
lifecycle_stage: LC04_DESIGN_DEFINITION
ata_chapter: "96"
ata_section: "10"
program: AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft
version: I001-R00
date_created: 2026-01-12
triggered_by: KNU-00-00-001-REQ-002
spawned_by: TBD-00-003
related_tbds:
  - TBD-00-003
cross_knot: KNOT-00-00-001
term_types:
  - NOUN
  - VERB
  - PHRASE
  - ACRONYM
  - ABBREVIATION
  - SYMBOL
  - UNIT
  - QUANTITY
  - CONCEPT
ontologies:
  - SKOS
  - QUDT
---

# KNU-96-10-001-ICD-003: DPP Term Type Namespace Mapping

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-96-10-001-ICD-003 |
| **KNOT ID** | KNOT-96-10-001 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_DATA |
| **Due Date** | 2026-02-28 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |
| **Triggered By** | KNU-00-00-001-REQ-002 (cross-KNOT) |
| **Cross-KNOT** | KNOT-00-00-001 → KNOT-96-10-001 |

---

## Purpose

This Interface Control Document specifies the mapping between terminology term types and Digital Product Passport (DPP) namespace hierarchies, integrating with SKOS (Simple Knowledge Organization System) vocabulary for semantic interoperability.

---

## Term Type → DPP Type Mapping

### Grammatical Types

**NOUN:**
```yaml
term_type: NOUN
dpp_type: skos:Concept
namespace: ampel360:term:noun:{term_id}
description: Common or proper noun (e.g., fuselage, tank, wing)
skos_broader: ampel360:term:concept:physical-object
example: ampel360:term:noun:fuselage
```

**VERB:**
```yaml
term_type: VERB
dpp_type: skos:Concept
namespace: ampel360:term:verb:{term_id}
description: Action or process (e.g., pressurize, liquify, oxidize)
skos_broader: ampel360:term:concept:process
example: ampel360:term:verb:pressurize
```

**PHRASE:**
```yaml
term_type: PHRASE
dpp_type: skos:Concept
namespace: ampel360:term:phrase:{term_id}
description: Multi-word term (e.g., center-of-gravity, boil-off-rate)
skos_broader: ampel360:term:concept:composite-term
example: ampel360:term:phrase:center-of-gravity
```

---

### Specialized Types

**ACRONYM:**
```yaml
term_type: ACRONYM
dpp_type: skos:Concept
namespace: ampel360:term:acronym:{acronym}
description: Abbreviated form using initial letters (e.g., BWB, LH2, NASA)
skos_broader: ampel360:term:concept:abbreviation
skos_altLabel: Full form stored as alternative label
example: ampel360:term:acronym:BWB
full_form: Blended Wing Body
```

**ABBREVIATION:**
```yaml
term_type: ABBREVIATION
dpp_type: skos:Concept
namespace: ampel360:term:abbr:{abbr}
description: Shortened form of word or phrase (e.g., max, min, approx)
skos_broader: ampel360:term:concept:abbreviation
example: ampel360:term:abbr:LH2
full_form: Liquid Hydrogen
```

**SYMBOL:**
```yaml
term_type: SYMBOL
dpp_type: skos:Symbol
namespace: ampel360:term:symbol:{unicode}
description: Mathematical or scientific symbol (e.g., α, β, ±, °)
skos_broader: ampel360:term:concept:notation
unicode_notation: U+{hexcode}
example: ampel360:term:symbol:U+03B1
display_form: α (alpha)
```

---

### Domain-Specific Types

**UNIT:**
```yaml
term_type: UNIT
dpp_type: qudt:Unit
namespace: ampel360:unit:{symbol}
description: Physical unit of measurement (e.g., kg, K, bar)
skos_broader: qudt:Unit
qudt_alignment: qudt:{UnitName}
example: ampel360:unit:kg
qudt_alignment: qudt:Kilogram
dimension: [M]
```

**QUANTITY:**
```yaml
term_type: QUANTITY
dpp_type: qudt:QuantityKind
namespace: ampel360:quantity:{name}
description: Physical quantity type (e.g., mass, temperature, pressure)
skos_broader: qudt:QuantityKind
qudt_alignment: qudt:{QuantityName}
example: ampel360:quantity:mass
qudt_alignment: qudt:Mass
dimension: [M]
```

**CONCEPT:**
```yaml
term_type: CONCEPT
dpp_type: skos:Concept
namespace: ampel360:term:concept:{term_id}
description: Abstract concept or principle (e.g., airworthiness, traceability)
skos_broader: skos:Concept
example: ampel360:term:concept:airworthiness
```

---

## Namespace Hierarchy

```
ampel360:
├── term:
│   ├── noun:*
│   │   └── Example: ampel360:term:noun:fuselage
│   ├── verb:*
│   │   └── Example: ampel360:term:verb:pressurize
│   ├── phrase:*
│   │   └── Example: ampel360:term:phrase:center-of-gravity
│   ├── acronym:*
│   │   └── Example: ampel360:term:acronym:BWB
│   ├── abbr:*
│   │   └── Example: ampel360:term:abbr:LH2
│   ├── symbol:*
│   │   └── Example: ampel360:term:symbol:U+03B1
│   └── concept:*
│       └── Example: ampel360:term:concept:airworthiness
├── unit:*
│   └── Example: ampel360:unit:kg
└── quantity:*
    └── Example: ampel360:quantity:mass
```

**Hierarchy Rules:**
1. **Top-level namespace:** `ampel360:`
2. **Second-level namespace:** Term type category (`term:`, `unit:`, `quantity:`)
3. **Third-level namespace:** Specific term type (`noun:`, `verb:`, etc.)
4. **Identifier:** Unique term identifier (lowercase, hyphenated)

---

## SKOS Alignment

### SKOS Vocabulary Integration

**SKOS (Simple Knowledge Organization System):**
- W3C standard for knowledge organization
- Supports concepts, labels, definitions, relationships
- Enables semantic interoperability

**RDF/Turtle Representation:**
```turtle
@prefix ampel: <http://ampel360.aero/ontology/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix qudt: <http://qudt.org/schema/qudt/> .

# Example: BWB term
ampel:term:acronym:BWB a skos:Concept ;
  skos:prefLabel "BWB"@en ;
  skos:altLabel "Blended Wing Body"@en ;
  skos:definition "An aircraft configuration where the fuselage and wings blend smoothly into a unified lifting surface, eliminating traditional wing-fuselage junction."@en ;
  skos:related ampel:term:noun:fuselage, ampel:term:noun:wing ;
  skos:broader ampel:term:concept:aircraft-configuration .

# Example: kilogram unit
ampel:unit:kg a qudt:Unit ;
  skos:prefLabel "kilogram"@en ;
  skos:altLabel "kg"@en ;
  skos:definition "SI base unit of mass."@en ;
  qudt:symbol "kg" ;
  qudt:dimension "M" ;
  skos:exactMatch qudt:Kilogram .

# Example: mass quantity
ampel:quantity:mass a qudt:QuantityKind ;
  skos:prefLabel "mass"@en ;
  skos:definition "Physical property representing the amount of matter in an object."@en ;
  qudt:dimension "M" ;
  skos:exactMatch qudt:Mass .
```

---

### SKOS Relationship Types

**Hierarchical Relationships:**
```turtle
# Broader/Narrower
ampel:term:noun:lh2-tank skos:broader ampel:term:noun:tank .
ampel:term:noun:tank skos:narrower ampel:term:noun:lh2-tank .

# Top Concept
ampel:term:concept:aircraft skos:topConceptOf ampel:terminology-scheme .
```

**Associative Relationships:**
```turtle
# Related terms
ampel:term:acronym:BWB skos:related ampel:term:noun:fuselage .
ampel:term:acronym:BWB skos:related ampel:term:noun:wing .

# See also
ampel:term:noun:lh2 skos:related ampel:term:noun:gh2 .
```

**Label Relationships:**
```turtle
# Preferred label
ampel:term:acronym:BWB skos:prefLabel "BWB"@en .

# Alternative labels
ampel:term:acronym:BWB skos:altLabel "Blended Wing Body"@en .
ampel:term:acronym:BWB skos:altLabel "Blended-Wing Body"@en .

# Hidden labels (for search)
ampel:term:acronym:BWB skos:hiddenLabel "blended wing"@en .
```

---

## Mapping Implementation

### Database Schema

```sql
-- Extend terms table with DPP mapping
ALTER TABLE terms ADD COLUMN dpp_type VARCHAR(50);
ALTER TABLE terms ADD COLUMN dpp_namespace VARCHAR(255) UNIQUE;
ALTER TABLE terms ADD COLUMN skos_broader VARCHAR(255);
ALTER TABLE terms ADD COLUMN qudt_alignment VARCHAR(255);

-- Create index for fast namespace lookups
CREATE INDEX idx_dpp_namespace ON terms(dpp_namespace);
CREATE INDEX idx_term_type ON terms(term_type);

-- Update existing terms with DPP mappings
UPDATE terms
SET dpp_type = CASE term_type
  WHEN 'NOUN' THEN 'skos:Concept'
  WHEN 'VERB' THEN 'skos:Concept'
  WHEN 'PHRASE' THEN 'skos:Concept'
  WHEN 'ACRONYM' THEN 'skos:Concept'
  WHEN 'ABBREVIATION' THEN 'skos:Concept'
  WHEN 'SYMBOL' THEN 'skos:Symbol'
  WHEN 'UNIT' THEN 'qudt:Unit'
  WHEN 'QUANTITY' THEN 'qudt:QuantityKind'
  WHEN 'CONCEPT' THEN 'skos:Concept'
  ELSE 'skos:Concept'
END;

UPDATE terms
SET dpp_namespace = CASE term_type
  WHEN 'NOUN' THEN 'ampel360:term:noun:' || term_id
  WHEN 'VERB' THEN 'ampel360:term:verb:' || term_id
  WHEN 'PHRASE' THEN 'ampel360:term:phrase:' || term_id
  WHEN 'ACRONYM' THEN 'ampel360:term:acronym:' || term_id
  WHEN 'ABBREVIATION' THEN 'ampel360:term:abbr:' || term_id
  WHEN 'SYMBOL' THEN 'ampel360:term:symbol:' || unicode_value
  WHEN 'UNIT' THEN 'ampel360:unit:' || term_id
  WHEN 'QUANTITY' THEN 'ampel360:quantity:' || term_id
  WHEN 'CONCEPT' THEN 'ampel360:term:concept:' || term_id
  ELSE 'ampel360:term:' || term_id
END;
```

---

### Automatic Namespace Generation

**Python Implementation:**
```python
def generate_dpp_namespace(term_id: str, term_type: str) -> str:
    """Generate DPP namespace URI for a term."""
    
    # Normalize term ID
    normalized_id = term_id.lower().replace('_', '-')
    
    # Map term type to namespace
    type_to_namespace = {
        'NOUN': f'ampel360:term:noun:{normalized_id}',
        'VERB': f'ampel360:term:verb:{normalized_id}',
        'PHRASE': f'ampel360:term:phrase:{normalized_id}',
        'ACRONYM': f'ampel360:term:acronym:{normalized_id}',
        'ABBREVIATION': f'ampel360:term:abbr:{normalized_id}',
        'SYMBOL': f'ampel360:term:symbol:{normalized_id}',  # Unicode handling separate
        'UNIT': f'ampel360:unit:{normalized_id}',
        'QUANTITY': f'ampel360:quantity:{normalized_id}',
        'CONCEPT': f'ampel360:term:concept:{normalized_id}',
    }
    
    namespace = type_to_namespace.get(term_type, f'ampel360:term:{normalized_id}')
    
    # Validate uniqueness
    if dpp_database.namespace_exists(namespace):
        raise ValueError(f"DPP namespace collision: {namespace}")
    
    return namespace

# Usage examples
generate_dpp_namespace('bwb', 'ACRONYM')
# Result: ampel360:term:acronym:bwb

generate_dpp_namespace('fuselage', 'NOUN')
# Result: ampel360:term:noun:fuselage

generate_dpp_namespace('kg', 'UNIT')
# Result: ampel360:unit:kg
```

---

## Dependencies

### Prerequisite KNUs

**KNU-00-00-001-REQ-002: Term Type Taxonomy Requirements**
- **Status:** 🔵 GENERATED
- **Dependency:** MUST be APPROVED before this ICD is implemented
- **Reason:** Term type enumeration must be stable before namespace mapping

**KNU-96-10-001-ICD-002: DPP-Terminology Namespace Integration**
- **Status:** 🔵 GENERATED
- **Dependency:** Parallel development, coordination required
- **Reason:** Base namespace structure defined in ICD-002

---

## Resolves TBD

**TBD-00-003: Term Type Enumeration (Cross-KNOT Spillover)**

**Resolution:**
- **Term Type Taxonomy:** Defined in KNU-00-00-001-REQ-002
- **DPP Namespace Mapping:** Defined in this ICD
- **SKOS Alignment:** Mapped to standard vocabularies (SKOS, QUDT)
- **Collision Prevention:** Namespace hierarchy prevents conflicts

**Rationale:**
- Namespace hierarchy reflects term type taxonomy
- SKOS alignment enables semantic interoperability
- QUDT integration standardizes units and quantities
- Hierarchical namespaces prevent identifier collisions

---

## Triggered KNUs

**None (cascade already complete)**

All downstream KNUs from TBD-00-003 have been spawned:
- ✅ KNU-00-00-001-REQ-002 (GENERATED)
- ✅ KNU-00-00-001-TEST-001 (PLANNED)
- ✅ KNU-00-00-001-PUB-002 (GENERATED)
- ✅ KNU-96-10-001-ICD-003 (this ICD)

---

## Cross-KNOT Dependency

**KNOT-00-00-001 (Terminology) → KNOT-96-10-001 (DPP)**

**Dependency Type:** Unidirectional (Terminology → DPP)

**Integration Flow:**
1. Term type defined in KNOT-00-00-001 (KNU-00-00-001-REQ-002)
2. DPP namespace generated based on term type
3. SKOS/QUDT alignment applied
4. Namespace registered in DPP system

**Coordination Required:**
- Term type changes must propagate to DPP mappings
- Namespace changes require approval from both teams
- SKOS alignment updates need semantic review

---

## Traceability

### Satisfies Requirements

- **KNU-00-00-001-REQ-002:** Term Type Taxonomy Requirements

### Verified By

- **KNU-00-00-001-TEST-001:** Schema Validation Tests (validates term type implementation)
- **KNU-96-10-001-TEST-001:** DPP Namespace Collision Tests

### Related Artifacts

- **KNU-00-00-001-ICD-001:** Terminology Database Schema
- **KNU-96-10-001-ICD-002:** DPP-Terminology Namespace Integration
- **KNU-00-00-001-PUB-002:** Term Type Usage Guide

---

## References

### Standards

- **SKOS (W3C):** Simple Knowledge Organization System
- **QUDT:** Quantities, Units, Dimensions and Types ontology
- **RDF (W3C):** Resource Description Framework
- **OWL (W3C):** Web Ontology Language

### Internal Documents

- **KNU-00-00-001-REQ-002:** Term Type Taxonomy Requirements
- **KNU-96-10-001-ICD-002:** DPP-Terminology Namespace Integration
- **KNU-00-00-001-ICD-001:** Terminology Database Schema

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-12 | STK_DATA | Initial baseline - GENERATED (triggered by KNU-00-00-001-REQ-002) |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_DATA (requires coordination between KNOT-00-00-001 and KNOT-96-10-001 teams)

**Notes:** This ICD completes the term type → DPP namespace mapping, enabling semantic interoperability via SKOS and QUDT standards. Dependent on KNU-00-00-001-REQ-002 approval before implementation.
