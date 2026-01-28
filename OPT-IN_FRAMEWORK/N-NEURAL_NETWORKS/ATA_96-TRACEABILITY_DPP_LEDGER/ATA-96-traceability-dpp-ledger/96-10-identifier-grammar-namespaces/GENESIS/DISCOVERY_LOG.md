# GENESIS Discovery Log — 96-10-identifier-grammar-namespaces

**Purpose:** Chronological narrative of uncertainty identification and resolution  
**Status:** Active

---

## Discovery Timeline

### 2026-01-28 — GENESIS Structure Initialized

- Established GENESIS folder structure for 96-10-identifier-grammar-namespaces
- Created O-KNOT and Y-KNOT registries
- Defined graduation criteria
- Ready for uncertainty capture

---

## Active Investigations

### Y-KNOT-96-10-001: Define URN Namespace Hierarchy

**Priority:** HIGH | **Status:** OPEN | **Graduation Candidate:** YES

Initial analysis suggests hierarchical structure:
- `urn:ampel360:ata96:component:*` for physical components
- `urn:ampel360:ata96:ledger:*` for ledger entries
- `urn:ampel360:ata96:actor:*` for users/systems
- `urn:ampel360:ata96:req:*` for requirements
- `urn:ampel360:ata96:dpp:*` for Digital Product Passports

**Next Steps:** Create formal namespace registry and allocation rules. Graduate to subject-level KNOT for detailed design.

### Y-KNOT-96-10-002: Collision-Free ID Generation

**Priority:** HIGH | **Status:** OPEN | **Graduation Candidate:** YES

Three candidate approaches identified:
1. **UUID v4**: Zero collision probability, 128-bit, widely supported
2. **Sequential with checksum**: Deterministic, human-readable (e.g., P123456-7)
3. **Semantic hierarchical**: Context-embedded but requires careful allocation

**Trade-offs:**
- UUIDs: Not human-readable, but globally unique
- Sequential: Requires centralized allocation service
- Semantic: Risk of namespace exhaustion

**Decision Point:** PDR milestone. Graduate to subject folder for detailed design study.

### O-KNOT-96-10-001: Legacy ID Migration Complexity

**Priority:** HIGH | **Status:** OPEN

Legacy systems have inconsistent ID formats:
- ERP: Material numbers (MAT-######)
- PLM: Part numbers (P#####-###)
- Legacy CAD: Drawing numbers (DWG-##-###-A)

**Challenge:** Bidirectional mapping with confidence levels required. Need fuzzy matching for partial data.

**Mitigation:** Create cross-system mapping table (implemented in ID_GRAMMAR_SCHEMA.yaml). Consider ML-based ID matching for uncertain cases.

---

## Resolved Items

_No resolved items at this time._

---

## Notes

- All Y-KNOTs with "graduation_candidate=true" should be reviewed at next design meeting
- O-KNOT-96-10-001 (Legacy ID migration) requires early engagement with data migration team
- ISO/IEC 21778 compliance review scheduled for requirements baseline
- Consider namespace reservation for future ATA chapters (97, 98, etc.)

