# Infrastructure Deployment Analysis: Cloud vs On-Premises

## 1. Executive Summary

**Decision: HYBRID CLOUD ARCHITECTURE**

Primary workloads on-premises with cloud backup and DR capabilities.

## 2. Candidates Evaluated

### Option A: Fully On-Premises
- All infrastructure in company-owned data centers
- Score: 72/100

### Option B: Fully Cloud (AWS/Azure/GCP)
- All infrastructure in public cloud
- Score: 78/100

### Option C: Hybrid Cloud (SELECTED)
- Primary: On-premises (development, sensitive data)
- Secondary: Cloud (backup, DR, burst capacity)
- Score: 89/100

## 3. Decision Matrix

| Criterion | Weight | On-Prem | Cloud | Hybrid |
|-----------|--------|---------|-------|--------|
| Data Sovereignty | 25% | 100 | 60 | 90 |
| Performance | 20% | 95 | 80 | 90 |
| Scalability | 15% | 60 | 100 | 85 |
| Cost (5-year TCO) | 15% | 70 | 75 | 80 |
| DR Capability | 15% | 50 | 95 | 95 |
| Certification Compliance | 10% | 90 | 70 | 85 |
| **Weighted Score** | 100% | **72** | **78** | **89** |

## 4. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    HYBRID ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ON-PREMISES (Primary)              CLOUD (Secondary)        │
│  ┌─────────────────────┐           ┌─────────────────────┐  │
│  │ Development Env     │           │ AWS eu-central-1    │  │
│  │ Production DB       │◄─────────►│ Backup Storage (S3) │  │
│  │ Sensitive Data      │  Encrypted│ DR Site (standby)   │  │
│  │ CI/CD Runners       │  Sync     │ Burst Compute       │  │
│  └─────────────────────┘           └─────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 5. Cloud Provider Selection

**Selected: AWS (Amazon Web Services)**

| Provider | Score | Rationale |
|----------|-------|-----------|
| AWS | 88/100 | Best aerospace certifications, EU regions |
| Azure | 82/100 | Good, but fewer aerospace references |
| GCP | 75/100 | Less enterprise aerospace presence |

## 6. Implementation Plan

| Phase | Timeline | Deliverable |
|-------|----------|-------------|
| Phase 1 | 2026-Q1 | On-prem infrastructure setup |
| Phase 2 | 2026-Q2 | AWS account, VPC, connectivity |
| Phase 3 | 2026-Q2 | Backup replication configured |
| Phase 4 | 2026-Q3 | DR site operational |

## 7. Cost Analysis (5-Year TCO)

| Component | On-Prem | Cloud | Hybrid |
|-----------|---------|-------|--------|
| Infrastructure | €500k | €0 | €350k |
| Cloud Services | €0 | €800k | €250k |
| Personnel | €400k | €300k | €350k |
| **Total** | **€900k** | **€1.1M** | **€950k** |

## 8. Resolves

**RESOLVES:** TBD-00-00-001-ANA-002-002 (Cloud vs on-premises deployment)

**UNBLOCKS:**
- TBD-00-00-001-CM-003-001 (Cloud provider for backup) → AWS
- KNU-00-00-001-ANA-006 (Cloud Provider Selection) → Completed inline
- KNU-00-00-001-TEST-003 (DR Test Procedure) → Can now proceed

## 9. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_DATA | Initial release - Decision: Hybrid/AWS |
