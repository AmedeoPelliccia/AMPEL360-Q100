# Multi-Language Documentation Strategy

## 1. Executive Summary

**Decision: 3 LANGUAGES (EN, ES, FR) + DEFERRED EXPANSION**

Initial release in 3 languages with architecture supporting 9+ languages.

## 2. Language Requirements Analysis

### Regulatory Requirements
- EASA: English required, national language recommended
- FAA: English required
- Customer Airlines: Varies by region

### Market Analysis
| Region | Primary Language | Market Share Target |
|--------|------------------|---------------------|
| Europe | EN, FR, DE, ES, IT | 40% |
| Americas | EN, ES, PT | 35% |
| Asia-Pacific | EN, ZH, JA, KO | 25% |

## 3. Decision: Phased Approach

### Phase 1: Initial Type Certification (2028)
Languages: **English (EN), Spanish (ES), French (FR)**

Rationale:
- EN: Mandatory for certification
- ES: Large market (Spain, LATAM)
- FR: EASA requirement for French operators

File Impact: 3× multiplier on PUB documents

### Phase 2: Post-Certification (2029+)
Languages: German (DE), Portuguese (PT), Chinese (ZH)

### Phase 3: Full Global (2030+)
Languages: Italian (IT), Japanese (JA), Korean (KO)

## 4. Volume Impact

| Scenario | Languages | PUB Files | Total Pages |
|----------|-----------|-----------|-------------|
| Minimum | 1 (EN only) | 43,500 | 880,000 |
| Phase 1 | 3 (EN, ES, FR) | 130,500 | 2,640,000 |
| Phase 2 | 6 | 261,000 | 5,280,000 |
| Full | 9 | 391,500 | 7,920,000 |

**Decision: Phase 1 = 3× multiplier**

## 5. Translation Architecture

```
Source Language: English (EN-US)
       │
       ▼
┌──────────────────────────────────────┐
│     Translation Memory (TM)          │
│     Terminology Database             │
│     Machine Translation + Review     │
└──────────────────────────────────────┘
       │
       ├──► Spanish (ES-ES) - Human review
       ├──► French (FR-FR) - Human review
       └──► [Future languages]
```

## 6. Cost Estimate

| Item | Per Language | 3 Languages |
|------|--------------|-------------|
| Initial Translation | €150,000 | €300,000 |
| Annual Maintenance | €30,000 | €60,000 |
| Tools/Infrastructure | €50,000 | €50,000 |
| **Year 1 Total** | — | **€350,000** |

## 7. Resolves

**RESOLVES:** TBD-00-00-002-ANA-001-002 (Multi-language requirements)

**Updates Required:**
- KNU-00-00-002-ANA-001 (Volume Projection) → Update to 3× multiplier
- All PUB file counts → Multiply by 3

## 8. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_PUB | Decision: 3 languages Phase 1 |
