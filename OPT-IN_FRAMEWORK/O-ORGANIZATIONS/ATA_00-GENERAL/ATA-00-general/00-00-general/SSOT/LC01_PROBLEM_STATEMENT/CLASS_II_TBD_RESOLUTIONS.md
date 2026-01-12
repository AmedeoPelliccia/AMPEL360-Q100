# CLASS II TBD Batch Resolutions

## Purpose
Document resolutions for all CLASS II (Minor) TBDs that can be resolved with straightforward decisions.

---

## TBD-00-00-001-ICD-001-002: GraphQL Framework Selection
**Status:** RESOLVED (by KNU-00-00-001-ANA-003)
**Decision:** PostGraphile
**Resolved By:** KNU-00-00-001-ANA-003_graphql-framework-trade-study.md

---

## TBD-00-00-001-ICD-001-004: Translation Workflow
**Status:** RESOLVED
**Decision:** 
- Source: EN-US (authoritative)
- Process: Human translation with TM support
- Tools: SDL Trados + Custom TM
- Review: Native speaker technical review required

---

## TBD-00-00-001-ICD-001-006: DPP Namespace Collision
**Status:** RESOLVED
**Decision:**
- Prefix scheme: `ampel360:q100:{domain}:{id}`
- Domains: `term`, `part`, `proc`, `doc`
- Example: `ampel360:q100:term:00-00-001`
- Collision check: CI/CD validation

---

## TBD-00-00-002-ICD-001-002: Cross-Repository References
**Status:** RESOLVED
**Decision:**
- Format: `[REPO:owner/name:artifact-id]`
- Validation: GitHub API check in CI/CD
- Broken link: Warning (not blocking)

---

## TBD-00-00-005-ICD-001-001: Conversion Factor Database Format
**Status:** RESOLVED
**Decision:**
- Format: YAML with JSON schema validation
- Location: `SSOT/LC04_DESIGN_DEFINITION/unit_conversions.yaml`
- Precision: 15 significant figures

---

## TBD-00-00-001-ANA-001-001: H₂ Terminology Authority
**Status:** RESOLVED
**Decision:**
- Primary: SAE J2578 (Fuel Cell Vehicles)
- Secondary: ISO 14687 (Hydrogen Fuel Quality)
- Tertiary: Program-specific for novel terms
- Conflict resolution: SAE takes precedence

---

## TBD-00-00-001-CM-001-001: CCB Meeting Frequency
**Status:** RESOLVED
**Decision:**
- Regular CCB: Bi-weekly (Thursday 14:00 UTC)
- Emergency CCB: Within 24 hours of request
- Quorum: 50% + 1 voting members
- Chair: STK_CM or delegate

---

## TBD-00-00-001-CM-003-001: Cloud Provider for Backup
**Status:** RESOLVED (by TBD-00-00-001-ANA-002-002 resolution)
**Decision:** AWS (eu-central-1 region)
**Dependent On:** Infrastructure deployment decision

---

## TBD-00-00-002-ANA-001-001: Post-PDR Volume Refinement
**Status:** DEFERRED
**Decision:** Schedule refinement for 2026-Q2 post-PDR
**Action:** Create calendar reminder, no immediate resolution

---

## TBD-00-00-004-ANA-001-002: Coverage Thresholds
**Status:** RESOLVED
**Decision:**
| Requirement Type | Coverage Target |
|------------------|-----------------|
| Safety-critical | 100% |
| Certification | 100% |
| Functional | 95% |
| Performance | 90% |
| Informational | 80% |

---

## TBD-00-00-005-ANA-001-002: H₂ Unit Conventions
**Status:** RESOLVED
**Decision:**
- Primary: SI units (kg, K, Pa, J)
- Display: SI with imperial in parentheses
- Precision: Per H₂-specific unit analysis
- Reference: KNU-00-00-005-ANA-001

---

## TBD-00-00-003-ICD-001-002: Boil-Off Warning Symbol
**Status:** RESOLVED
**Decision:**
- Symbol: Snowflake + upward arrow + percentage
- Thresholds: Green <0.3%, Amber 0.3-0.5%, Red >0.5%
- Integration: Part of cryogenic symbol set

---

## TBD-00-00-003-ANA-001-001: Compound Hazard Symbols
**Status:** RESOLVED
**Decision:**
- Compound format: Primary hazard icon + secondary badges
- Max badges: 3 per symbol
- Priority order: Life safety > Equipment > Environment
- Example: Cryogenic (primary) + Flammable + Asphyxiant

---

## TBD-00-00-003-ANA-001-002: Symbol Visibility Testing
**Status:** RESOLVED
**Decision:**
- Test conditions: Daylight, dusk, artificial, emergency red
- Recognition time: <2 seconds at rated distance
- Contrast ratio: Minimum 4.5:1
- Test protocol: Per ISO 3864-1

---

## Summary

| Status | Count |
|--------|-------|
| RESOLVED | 13 |
| DEFERRED | 1 |
| **Total** | **14** |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial batch resolutions |
