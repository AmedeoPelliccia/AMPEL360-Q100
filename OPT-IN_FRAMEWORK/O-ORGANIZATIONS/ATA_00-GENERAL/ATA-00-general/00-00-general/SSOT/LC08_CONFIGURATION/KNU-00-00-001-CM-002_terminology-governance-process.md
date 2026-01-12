# Terminology Governance Process

## 1. Purpose
Establish governance framework for terminology lifecycle management, including review cadence, authority structure, and escalation procedures.

## 2. Governance Structure

### 2.1 Terminology Authority Hierarchy

```
                    ┌─────────────────────┐
                    │ Program Director    │
                    │ (Final Authority)   │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │ Configuration       │
                    │ Control Board (CCB) │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
┌─────────▼─────────┐ ┌────────▼────────┐ ┌────────▼────────┐
│ Domain Expert     │ │ Safety Authority│ │ Standards       │
│ Panels            │ │ (STK_SAF)       │ │ Authority       │
│                   │ │                 │ │ (STK_CM)        │
├───────────────────┤ └─────────────────┘ └─────────────────┘
│ • H₂ Propulsion   │
│ • BWB Structures  │
│ • AI/ML Systems   │
│ • DPP/Circularity │
└───────────────────┘
```

### 2.2 Review Cadence

| Review Type | Frequency | Participants | Scope |
|-------------|-----------|--------------|-------|
| Weekly Triage | Weekly (Tue) | STK_CM, STK_PUB | New CRs, quick items |
| CCB Meeting | Bi-weekly (Thu) | Full CCB | Category C/D changes |
| Domain Review | Monthly | Domain experts | Domain-specific terms |
| Baseline Review | Quarterly | All stakeholders | Full terminology audit |

### 2.3 Decision Authority Matrix

| Change Type | Authority | Escalation Path |
|-------------|-----------|-----------------|
| Typo/Format | Tech Writer | → CM Specialist |
| Definition Clarification | CM Specialist | → CCB |
| New Term | CCB | → Program Director |
| Term Deprecation | CCB | → Program Director |
| Safety Term | CCB + Safety | → Program Director + EASA liaison |
| Cross-program Impact | Program Director | → (no escalation) |

## 3. Review Procedures

### 3.1 Quarterly Terminology Audit

**Objective:** Ensure terminology consistency and completeness

**Process:**
1. Extract all terms from SSOT/CSDB
2. Compare against approved glossary
3. Identify:
   - Undefined terms (gaps)
   - Inconsistent usage
   - Deprecated terms still in use
4. Generate audit report
5. Create CRs for discrepancies

**Metrics:**
- Term coverage: Target >98%
- Consistency score: Target >95%
- Undefined term count: Target <10

### 3.2 Domain Expert Review

**Objective:** Validate technical accuracy of domain-specific terms

**Domains:**
1. **H₂ Propulsion** (ATA 28, 71, 73-80)
   - Reviewer: H₂ Systems Lead
   - Focus: Fuel cell, cryogenic, safety terms
   
2. **BWB Structures** (ATA 51-57)
   - Reviewer: Structures Lead
   - Focus: Novel configuration terms
   
3. **AI/ML Systems** (ATA 95)
   - Reviewer: AI/ML Lead
   - Focus: Learning assurance, neural system terms
   
4. **DPP/Circularity** (ATA 96)
   - Reviewer: Sustainability Lead
   - Focus: Lifecycle, passport, circularity terms

## 4. Escalation Procedures

### 4.1 Standard Escalation

```
Issue identified
       │
       ▼
CM Specialist attempts resolution (24h)
       │
       ├─ Resolved → Close
       │
       ▼ Not resolved
Domain Expert consultation (48h)
       │
       ├─ Resolved → Close
       │
       ▼ Not resolved
CCB agenda item (next meeting)
       │
       ├─ Resolved → Close
       │
       ▼ Not resolved
Program Director decision (48h)
```

### 4.2 Emergency Escalation (Safety-Critical)

```
Safety issue identified
       │
       ▼
Immediate notification to STK_SAF (1h)
       │
       ▼
Emergency CCB session (24h)
       │
       ▼
Resolution or interim mitigation
```

## 5. Metrics and Reporting

### 5.1 Key Performance Indicators

| KPI | Target | Current | Status |
|-----|--------|---------|--------|
| CR Resolution Time (Cat A) | <24h | — | — |
| CR Resolution Time (Cat B) | <1 week | — | — |
| CR Resolution Time (Cat C) | <2 weeks | — | — |
| Terminology Coverage | >98% | 72% | 🔴 |
| Audit Findings Closure | <30 days | — | — |

### 5.2 Monthly Report Contents
- CRs opened/closed
- Terms added/modified/deprecated
- Audit findings status
- Domain review outcomes
- Escalations summary

## 6. Resolves

**Resolves:** TBD-00-00-001-ANA-001-003 (Terminology review cadence)

## 7. Embedded TBDs

[TBD-00-00-001-CM-002-001] Define quorum requirements for each review type
Impact: CLASS III
Resolution: Inline (50% + 1 for CCB, domain lead required for domain review)

## 8. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-001-CM-001 | Change Control Process |
| KNU-00-00-001-REQ-001 | Glossary Requirements |

| Traced From | Artifact |
|-------------|----------|
| TBD-00-00-001-ANA-001-003 | Review cadence TBD (RESOLVED) |
| KNOT-00-00-001 | Parent KNOT |

## 9. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial release |
