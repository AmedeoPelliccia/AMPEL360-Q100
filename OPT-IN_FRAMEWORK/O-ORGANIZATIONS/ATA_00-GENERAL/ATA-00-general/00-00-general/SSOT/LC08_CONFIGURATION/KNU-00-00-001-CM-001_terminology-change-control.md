# Terminology Change Control Process

## 1. Purpose
Define the configuration management process for terminology entries in the AMPEL360 Q100 Program Glossary.

## 2. Scope
- All terminology entries in the Program Glossary (KNU-00-00-001-PUB-001)
- Database schema changes (KNU-00-00-001-ICD-001)
- CIR export configurations

## 3. Change Categories

### Category A: Administrative Changes
- Typo corrections
- Formatting improvements
- No technical impact
- **Approval:** Tech Writer (STK_PUB)
- **Process:** Direct commit, no review required

### Category B: Minor Technical Changes
- Definition clarifications
- Additional context/examples
- Cross-reference updates
- **Approval:** CM Specialist (STK_CM)
- **Process:** PR with single reviewer

### Category C: Major Technical Changes
- New term additions
- Definition modifications affecting requirements
- Term deprecation/removal
- **Approval:** Configuration Control Board (CCB)
- **Process:** Formal change request, CCB review, impact analysis

### Category D: Safety-Critical Changes
- Terms affecting safety documentation
- H₂ hazard terminology
- AI/ML indication terminology
- **Approval:** CCB + Safety (STK_SAF)
- **Process:** Formal CR + safety impact assessment

## 4. Change Request Workflow

### 4.1 Initiation
1. Submitter creates Change Request (CR)
2. CR includes:
   - Term ID(s) affected
   - Current definition
   - Proposed change
   - Rationale
   - Impact assessment

### 4.2 Classification
CM Specialist classifies CR:
- Category A/B/C/D
- Priority (Critical/High/Medium/Low)
- Affected KNUs/KNOTs

### 4.3 Review
Based on category:
- A: Auto-approve
- B: Single reviewer (48h SLA)
- C: CCB meeting (bi-weekly)
- D: CCB + Safety review (dedicated session)

### 4.4 Implementation
1. Update terminology database
2. Regenerate affected Data Modules
3. Update CIR export
4. Notify subscribers

### 4.5 Verification
- Schema validation
- Cross-reference integrity
- S1000D BREX compliance

## 5. Configuration Items

| Item | Baseline | Owner | Change Category |
|------|----------|-------|-----------------|
| Program Glossary DM | BL-001 | STK_PUB | C |
| Database Schema | BL-001 | STK_DATA | C |
| CIR Export Config | BL-001 | STK_DATA | B |
| Term Type Taxonomy | BL-001 | STK_CM | C |

## 6. Baseline Management

### Current Baseline: BL-001 (2026-01-12)
- Initial terminology set: 250 terms
- 95 Q100-specific terms identified
- 4 domain categories established

### Baseline Schedule
- BL-002: Post-PDR (2026-Q2)
- BL-003: Post-CDR (2027-Q1)
- BL-004: Pre-certification (2028-Q4)

## 7. Audit Trail
All changes logged in:
- Git commit history
- TBD_REGISTER.csv (if TBD-related)
- Change log section of affected DMs

## 8. Embedded TBDs

[TBD-00-00-001-CM-001-001] Define CCB meeting frequency and quorum requirements
Impact: CLASS II
Spawns: KNU-00-00-001-PLAN-003 (CCB Charter)

[TBD-00-00-001-CM-001-002] Establish change request template format
Impact: CLASS III
Resolution: Inline (use standard CR template)

## 9. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-001-REQ-001 | Glossary Requirements |
| KNU-00-00-001-ICD-001 | Database Schema |
| KNU-00-00-001-PUB-001 | Glossary DM |

| Traced From | Artifact |
|-------------|----------|
| TBD-00-00-001-ANA-001-003 | Review cadence TBD (RESOLVED by this document) |
| KNOT-00-00-001 | Parent KNOT |

## 10. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial release |
