# KNU-00-00-002-ICD-001: Document ID Grammar Specification

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-00-00-002-ICD-001 |
| **KNOT ID** | KNOT-00-00-002 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_DATA |
| **Due Date** | 2026-03-31 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |

---

## Purpose

This Interface Control Document specifies the grammar and validation rules for all document identifiers used in the AMPEL360 Q100 program, including KNU IDs, KNOT IDs, DMC codes, TBD IDs, and file naming conventions.

---

## Document Numbering Syntax

### KNU ID Grammar

**Regular Expression:**
```regex
^KNU-(\d{2})-(\d{2})-(\d{3})-(REQ|ICD|ANA|TEST|PUB|CM|PLAN|SAF)-(\d{3})$
```

**Components:**
- **ATA Chapter** (00-99): Two-digit ATA iSpec 2200 chapter code
- **ATA Section** (00-99): Two-digit section within the ATA chapter
- **KNU Sequence** (001-999): Three-digit sequential identifier within the section
- **KNU Type**: One of the following:
  - `REQ` - Requirements
  - `ICD` - Interface Control Document
  - `ANA` - Analysis
  - `TEST` - Test/Verification
  - `PUB` - Publication (AMM, TRN, etc.)
  - `CM` - Configuration Management
  - `PLAN` - Planning
  - `SAF` - Safety
- **Type Sequence** (001-999): Three-digit sequential identifier within the type

**Valid Examples:**
```
✅ KNU-00-00-001-REQ-001
✅ KNU-28-10-005-ICD-002
✅ KNU-96-10-001-TEST-001
✅ KNU-00-00-002-ICD-001
```

**Invalid Examples:**
```
❌ KNU-100-00-001-REQ-001  (invalid ATA chapter > 99)
❌ KNU-00-00-1-REQ-001     (missing leading zeros in KNU sequence)
❌ KNU-00-00-001-REQ-1     (missing leading zeros in type sequence)
❌ KNU-00-00-001-DOC-001   (invalid type code)
```

---

### KNOT ID Grammar

**Regular Expression:**
```regex
^KNOT-(\d{2})-(\d{2})-(\d{3})$
```

**Components:**
- **ATA Chapter** (00-99): Two-digit ATA iSpec 2200 chapter code
- **ATA Section** (00-99): Two-digit section within the ATA chapter
- **KNOT Sequence** (001-999): Three-digit sequential identifier within the section

**Valid Examples:**
```
✅ KNOT-00-00-001
✅ KNOT-28-10-005
✅ KNOT-96-10-001
```

**Invalid Examples:**
```
❌ KNOT-0-0-1       (missing leading zeros)
❌ KNOT-00-00-1000  (sequence exceeds 999)
❌ KNT-00-00-001    (incorrect prefix)
```

---

### DMC (Data Module Code) Grammar

**Regular Expression:**
```regex
^DMC-([A-Z0-9]+)-(\d{2})-(\d{2})-(\d)-(\d)-(\d{2})-(\d{2})([A-Z])-(\d{3})([A-Z])-([A-Z])_(\d{3})-(\d{2})_([a-z]{2})-([A-Z]{2})$
```

**Components (S1000D 5.0 Standard):**
- **Model Identification Code**: AMPEL360
- **System Code** (00-99): ATA chapter
- **Subsystem Code** (00-99): ATA section
- **Assembly Code** (0-9): Assembly within subsystem
- **Disassembly Code** (0-9): Disassembly level
- **Information Code** (00-99): Type of information
- **Information Code Variant** (00-99A): Variant identifier
- **Item Location Code** (000-999A): Location within assembly
- **Learn Code** (A-Z): Learning level
- **Issue Number** (001-999): Version number
- **In-work Issue** (00-99): In-work revision
- **Language Code** (en, fr, de, etc.): ISO 639-1 code
- **Country Code** (US, GB, DE, etc.): ISO 3166-1 alpha-2 code

**Example:**
```
DMC-AMPEL360-00-00-0-0-00-00A-001A-A_001-00_en-US
```

**Breakdown:**
- Model: AMPEL360
- System: 00 (General)
- Subsystem: 00 (General)
- Assembly: 0
- Disassembly: 0
- Info Code: 00A (Descriptive)
- Item Location: 001A
- Learn: A (Basic)
- Issue: 001-00
- Language: en-US (English, United States)

---

### TBD ID Grammar

**Regular Expression:**
```regex
^TBD-(\d{2})-(\d{3})$
```

**Components:**
- **ATA Chapter** (00-99): Two-digit ATA iSpec 2200 chapter code
- **TBD Sequence** (001-999): Three-digit sequential identifier within the chapter

**Valid Examples:**
```
✅ TBD-00-001
✅ TBD-28-003
✅ TBD-00-007
✅ TBD-03-001
```

**Invalid Examples:**
```
❌ TBD-0-001    (missing leading zero in chapter)
❌ TBD-00-1     (missing leading zeros in sequence)
❌ TBD00001     (missing hyphens)
```

---

## File Naming Conventions

### SSOT Artifacts

**Pattern:**
```
KNU-{ATA}-{section}-{seq}-{TYPE}-{seq}_{kebab-case-title}.md
```

**Examples:**
```
KNU-00-00-001-REQ-001_program-glossary-requirements.md
KNU-00-00-002-ICD-001_document-id-grammar-specification.md
KNU-28-10-005-ICD-002_fuel-cell-interface-specification.md
```

**Rules:**
- Use lowercase for descriptive title
- Replace spaces with hyphens (kebab-case)
- Use `.md` extension for markdown files
- Match the KNU ID prefix exactly

---

### S1000D Data Modules

**Pattern:**
```
DMC-{full-dmc-code}_{lang}.{ext}
```

**Examples:**
```
DMC-AMPEL360-00-00-0-0-00-00A-001A-A_001-00_en-US.xml
DMC-AMPEL360-28-10-0-0-05-10A-001A-A_001-00_en-US.xml
DMC-AMPEL360-96-10-0-0-01-00A-001A-A_001-00_en-US.xml
```

**Rules:**
- Use the full DMC code as defined by S1000D
- Include language suffix (`_en-US`, `_fr-FR`, etc.)
- Use `.xml` extension for S1000D XML files
- Use `.pdf` extension for PDF renderings

---

## Validation Rules

### Uniqueness

**All IDs must be unique within their namespace:**

| Namespace | Scope | Collision Check |
|-----------|-------|-----------------|
| KNU ID | Program-wide | Pre-commit hook validates against KNU_PLAN.csv |
| KNOT ID | Program-wide | Pre-commit hook validates against KNOTS.csv |
| TBD ID | Program-wide | Pre-commit hook validates against TBD register |
| DMC | Repository-wide | File system check + CI/CD validation |

**Retired IDs must never be reused:**
- Maintain a retired ID registry
- Mark retired IDs with status and retirement date
- Prevent assignment of retired IDs through automation

**Collision detection via pre-commit hooks:**
```bash
#!/bin/bash
# Example pre-commit hook for KNU ID validation
grep -E "^KNU-\d{2}-\d{2}-\d{3}-(REQ|ICD|ANA|TEST|PUB|CM|PLAN|SAF)-\d{3}" KNU_PLAN.csv | \
  cut -d',' -f1 | sort | uniq -d
```

---

### Immutability

**IDs assigned at creation:**
- IDs are assigned when a KNU/KNOT/TBD is first created
- Assignment is recorded in the appropriate register (CSV file)
- Assignment timestamp and creator are logged

**No ID changes allowed (even for corrections):**
- If an ID is assigned incorrectly, retire it and assign a new ID
- Update all references to point to the new ID
- Document the correction in the notes field

**Errata handled via new version, not ID change:**
- Errors in content are fixed via version updates
- Issue numbers in DMC codes are incremented
- Original ID remains unchanged

---

### Regex Validation

**JavaScript Implementation:**
```javascript
const validators = {
  knu: /^KNU-\d{2}-\d{2}-\d{3}-(REQ|ICD|ANA|TEST|PUB|CM|PLAN|SAF)-\d{3}$/,
  knot: /^KNOT-\d{2}-\d{2}-\d{3}$/,
  tbd: /^TBD-\d{2}-\d{3}$/,
  dmc: /^DMC-[A-Z0-9]+-\d{2}-\d{2}-\d-\d-\d{2}-\d{2}[A-Z]-\d{3}[A-Z]-[A-Z]_\d{3}-\d{2}_[a-z]{2}-[A-Z]{2}$/
};

function validateId(id, type) {
  const regex = validators[type];
  if (!regex) {
    throw new Error(`Unknown ID type: ${type}`);
  }
  return regex.test(id);
}

// Usage
console.log(validateId('KNU-00-00-001-REQ-001', 'knu')); // true
console.log(validateId('KNOT-00-00-001', 'knot')); // true
console.log(validateId('TBD-00-007', 'tbd')); // true
```

**Python Implementation:**
```python
import re

VALIDATORS = {
    'knu': r'^KNU-\d{2}-\d{2}-\d{3}-(REQ|ICD|ANA|TEST|PUB|CM|PLAN|SAF)-\d{3}$',
    'knot': r'^KNOT-\d{2}-\d{2}-\d{3}$',
    'tbd': r'^TBD-\d{2}-\d{3}$',
    'dmc': r'^DMC-[A-Z0-9]+-\d{2}-\d{2}-\d-\d-\d{2}-\d{2}[A-Z]-\d{3}[A-Z]-[A-Z]_\d{3}-\d{2}_[a-z]{2}-[A-Z]{2}$'
}

def validate_id(id_str: str, id_type: str) -> bool:
    """Validate an ID against its type regex."""
    if id_type not in VALIDATORS:
        raise ValueError(f"Unknown ID type: {id_type}")
    pattern = re.compile(VALIDATORS[id_type])
    return bool(pattern.match(id_str))

# Usage
assert validate_id('KNU-00-00-001-REQ-001', 'knu') == True
assert validate_id('KNOT-00-00-001', 'knot') == True
assert validate_id('TBD-00-007', 'tbd') == True
```

---

## Potential TBDs

The following uncertainties have been identified and require resolution:

### [TBD-00-007] Version Numbering Convention for SSOT Artifacts

**Description:** Determine version numbering convention for SSOT artifacts (Issue/Revision format I##-R## vs semantic versioning vMAJOR.MINOR.PATCH)

**Impact:** Affects file naming, traceability, and configuration management

**Recommendation:** Align with S1000D issue numbering (I001-R00, I001-R01, etc.) for consistency with publications

**Classification:** CLASS II (affects multiple KNUs)

**Resolution Target:** 2026-02-15

---

### [TBD-00-008] Cross-Repository Reference Syntax

**Description:** Define syntax for cross-repository references in multi-repo projects

**Impact:** Affects reference syntax specification (KNU-00-00-004-ICD-001)

**Example:** `ampel360:repo:AMPEL360-Q100:knu:KNU-00-00-001-REQ-001` vs `knu://AMPEL360-Q100/KNU-00-00-001-REQ-001`

**Classification:** CLASS III (future enhancement)

**Resolution Target:** 2026-06-01

---

## Triggered KNUs

The following KNUs are spawned by this ICD to address embedded TBDs:

### KNU-00-00-002-TEST-001: ID Validation Test Suite

**Purpose:** Automated regex checks for ID grammar compliance

**Acceptance Criteria:**
- Regex validators achieve 100% test coverage
- All valid ID formats pass validation
- All invalid ID formats fail validation
- Performance: <10ms per validation

**Spawned By:** TBD-00-007

**Due Date:** 2026-03-20

---

### KNU-00-00-002-CM-002: ID Collision Prevention Workflow

**Purpose:** Pre-commit hooks prevent ID reuse and collisions

**Acceptance Criteria:**
- Pre-commit hooks installed in all repositories
- Hooks validate IDs against master registers
- Collision detection prevents commit
- Rollback mechanism for failed validations

**Spawned By:** TBD-00-007

**Due Date:** 2026-03-25

---

## Traceability

### Satisfies Requirements

- **KNU-00-00-002-REQ-001:** Document Numbering Requirements

### Verified By

- **KNU-00-00-002-TEST-001:** ID Validation Test Suite (to be created)

### Related Artifacts

- **KNU-00-00-001-ICD-001:** Terminology Database Schema
- **KNU-00-00-004-ICD-001:** Reference Syntax Specification

---

## References

### Standards

- **ATA iSpec 2200:** Air Transport Association specification for aircraft systems
- **S1000D Issue 5.0:** International specification for technical publications
- **ISO 639-1:** Two-letter language codes
- **ISO 3166-1 alpha-2:** Two-letter country codes

### Internal Documents

- **KNU_PLAN.csv:** Master KNU register
- **KNOTS.csv:** Master KNOT register
- **KNU-00-00-002-REQ-001:** Document Numbering Requirements

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-12 | STK_DATA | Initial baseline - GENERATED |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_CM and STK_DATA

**Notes:** This ICD establishes the foundation for document identification across the AMPEL360 Q100 program. All future artifacts must comply with these grammar specifications.
