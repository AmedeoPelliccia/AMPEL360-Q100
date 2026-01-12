# Class I Decision Log

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

*Generated: 2026-01-12 18:45:00 UTC*

---

## Purpose

This document tracks **Class I TBDs** — program-level decisions requiring executive approval due to significant impact on cost, schedule, architecture, or compliance. Failure to resolve these TBDs will block downstream work and jeopardize program milestones.

---

## Class I TBD Summary

| TBD ID | Description | Decision Owner | Decision Date Target | Blocked KNUs/KNOTs | Status |
|--------|-------------|----------------|----------------------|-------------------|--------|
| **TBD-00-015** | Cloud vs on-premises deployment | STK_DATA | 2026-02-28 | KNU-00-00-001-ANA-005 | 🔴 OPEN |
| **TBD-00-019** | Multi-language requirements | STK_CM | 2026-03-15 | KNU-00-00-002-ANA-003 | 🔴 OPEN |
| **TBD-00-020** | Requirements tool selection | STK_SE | 2026-03-01 | KNU-00-00-004-ANA-002 | 🔴 OPEN |

---

## TBD-00-015: Cloud vs On-Premises Deployment

### Decision Required

Select deployment model for terminology database and supporting infrastructure:

**Options:**
1. **Cloud-hosted** (AWS RDS, Azure Database for PostgreSQL)
2. **On-premises** (Self-managed infrastructure)
3. **Hybrid** (Critical data on-prem, non-critical in cloud)

### Impact Analysis

| Factor | Cloud | On-Premises | Hybrid |
|--------|-------|-------------|--------|
| **Initial Cost** | Low ($5k setup) | High ($150k infrastructure) | Medium ($75k) |
| **10-Year TCO** | $805k | $1.2M | $950k |
| **Operational Complexity** | Low (managed service) | High (dedicated ops team) | Medium |
| **Security/Export Control** | ⚠️ Risk (data sovereignty) | ✅ Full control | ⚠️ Partial risk |
| **Disaster Recovery** | ✅ Built-in (multi-region) | ❌ Manual (requires planning) | ⚠️ Complex |
| **Scalability** | ✅ Elastic | ❌ Fixed capacity | ⚠️ Limited |

### Recommendation

**Recommendation:** **Hybrid deployment**

**Rationale:**
- SSOT data (requirements, ICDs, ANAs) → **On-premises** (export control, certification audit trail)
- CSDB publications (S1000D DMs) → **Cloud** (global distribution, CDN-friendly)
- Development/test environments → **Cloud** (cost-effective, ephemeral)

**Cost Impact:** +$145k vs full cloud, but mitigates export control risk and certification compliance.

### Decision Owner

**Owner:** STK_DATA (Data Architecture Lead)  
**Escalation:** Program Manager (if >$200k TCO delta)  
**Due Date:** 2026-02-28  

### Blocked Work

- **KNU-00-00-001-ANA-005** (Cloud Deployment Trade Study) — Cannot finalize until decision made
- **KNU-00-00-001-CM-003** (Database Backup Procedure) — Backup strategy differs by deployment model
- Infrastructure procurement and provisioning (6-week lead time for on-prem hardware)

### MoSCoW Priority

**MUST HAVE:** Decision by 2026-02-28 (blocks database provisioning)  
**SHOULD HAVE:** Vendor selection (AWS vs Azure vs on-prem vendor) by 2026-03-15  
**COULD HAVE:** Multi-cloud strategy (AWS + Azure redundancy)  
**WON'T HAVE:** Self-hosted Kubernetes cluster (operational complexity too high)  

---

## TBD-00-019: Multi-Language Requirements

### Decision Required

Define multi-language documentation strategy for international certification and operations:

**Options:**
1. **English-only** (1.0x page multiplier)
2. **2-language** (EN + FR, 1.5x multiplier)
3. **4-language** (EN + FR + DE + ES, 2.5x multiplier)

### Impact Analysis

| Factor | English-only | 2-Language | 4-Language |
|--------|--------------|------------|------------|
| **Page Count** | 1.7M pages | 2.55M pages (+50%) | 4.25M pages (+150%) |
| **Translation Cost** | $0 | $3.8M | $9.5M |
| **Staffing** | Baseline | +2 translators | +6 translators + 1 manager |
| **Schedule Impact** | Baseline | +3 months | +6 months |
| **Certification** | EASA only (English) | EASA + DGAC (French) | EASA + DGAC + LBA (German) + AESA (Spanish) |
| **Market Access** | 60% addressable | 85% addressable | 95% addressable |

### Recommendation

**Recommendation:** **2-Language (EN + FR)** with **4-language expansion post-PDR**

**Rationale:**
- **EASA + DGAC** cover 85% of European market (primary certification authorities)
- Deferred 4-language support reduces initial certification complexity
- Post-PDR translation pipeline can scale incrementally (DE + ES added in 2027)

**Cost Impact:** +$3.8M for 2-language, deferred $5.7M to post-PDR phase

### Decision Owner

**Owner:** STK_CM (Configuration Management Lead)  
**Escalation:** Program Manager (multi-million dollar impact)  
**Due Date:** 2026-03-15  

### Blocked Work

- **KNU-00-00-002-ANA-003** (Multi-Language Strategy Analysis) — Cannot finalize resource planning
- **KNU-00-00-002-PLAN-001** (Translation Workflow Plan) — Workflow differs by language count
- Document volume projection refinement (1.7M vs 2.55M vs 4.25M pages)
- CSDB language module procurement ($150k per language)

### MoSCoW Priority

**MUST HAVE:** English-only baseline (certification requirement)  
**SHOULD HAVE:** French translation (DGAC compliance, 25% market increase)  
**COULD HAVE:** German + Spanish (LBA + AESA, additional 10% market)  
**WON'T HAVE:** Chinese, Japanese, Russian (no near-term certification path)  

---

## TBD-00-020: Requirements Tool Selection

### Decision Required

Select requirements management tool for traceability matrix implementation:

**Options:**
1. **IBM DOORS Next** (Industry standard, $500k license)
2. **Jama Connect** (Aerospace focus, $300k license)
3. **ReqView** (Affordable, $50k license, limited features)
4. **Custom Python solution** (Open-source, $150k development)

### Impact Analysis

| Factor | DOORS Next | Jama Connect | ReqView | Custom Python |
|--------|------------|--------------|---------|---------------|
| **License Cost (10-year)** | $500k | $300k | $50k | $0 |
| **Implementation Cost** | $150k | $100k | $30k | $150k |
| **Integration** | ✅ Excellent (IBM ecosystem) | ✅ Good (REST API) | ⚠️ Limited (CSV/Excel) | ✅ Full control |
| **YAML Support** | ❌ Poor | ⚠️ Partial | ✅ Good | ✅ Native |
| **Certification Reports** | ✅ DO-178C/DO-254/ARP4754A | ✅ DO-178C/DO-254 | ❌ None | ⚠️ Custom dev |
| **Aerospace Heritage** | ✅ Boeing, Airbus, Lockheed | ✅ SpaceX, Blue Origin | ❌ None | ⚠️ Depends on impl |
| **Git Integration** | ❌ Poor (proprietary DB) | ⚠️ Partial (export only) | ✅ Excellent (file-based) | ✅ Native |

### Recommendation

**Recommendation:** **Jama Connect** for certification-critical requirements + **Custom Python tooling** for YAML/Git integration

**Rationale:**
- Jama Connect provides aerospace-grade certification reports (DO-178C, DO-254)
- Custom Python bridge handles YAML metadata ↔ Jama sync (best of both worlds)
- Total cost: $400k ($300k Jama + $100k Python bridge) — middle ground between DOORS ($650k) and ReqView ($80k)

**Risk Mitigation:** Proof-of-concept Python bridge must be validated by 2026-03-15 (2 weeks post-decision)

### Decision Owner

**Owner:** STK_SE (Systems Engineering Lead)  
**Escalation:** Chief Engineer (if >$500k total cost)  
**Due Date:** 2026-03-01  

### Blocked Work

- **KNU-00-00-004-ANA-002** (Requirements Tool Trade Study) — Trade study cannot finalize without decision
- Traceability matrix implementation (all 48,500 trace links)
- Certification compliance matrix generation (DO-178C, DO-254, ARP4754A)
- Tool procurement and team training (12-week lead time)

### MoSCoW Priority

**MUST HAVE:** Tool selection by 2026-03-01 (blocks traceability implementation)  
**SHOULD HAVE:** Tool procurement by 2026-03-15 (12-week lead time for training)  
**COULD HAVE:** Custom Python bridge (if Jama YAML integration inadequate)  
**WON'T HAVE:** Multiple parallel tools (DOORS + Jama) — excessive complexity  

---

## Decision Approval Workflow

### Approval Authority

| Decision Impact | Approval Authority | Escalation Path |
|-----------------|-------------------|-----------------|
| **<$100k** | Discipline Lead (STK_DATA, STK_CM, STK_SE) | Program Manager |
| **$100k-$500k** | Program Manager | Chief Engineer |
| **>$500k** | Chief Engineer | Executive Steering Committee |

### Required Documentation

For each Class I TBD, the following artifacts are required **before** approval:

1. **Decision Brief** (PowerPoint, 10 slides max)
   - Problem statement
   - Options analysis (table format)
   - Recommendation with rationale
   - Cost/schedule impact
   - Risk mitigation

2. **Impact Analysis** (Excel)
   - Cost breakdown (capital, operational, lifecycle)
   - Schedule impact (Gantt chart delta)
   - Resource impact (FTE, contractors, vendors)

3. **Risk Register Update**
   - New risks introduced by decision
   - Mitigations and contingencies

---

## Escalation Triggers

### Automatic Escalation Conditions

A Class I TBD automatically escalates to the next approval level if:

1. **Cost overrun:** Actual cost >20% higher than estimated
2. **Schedule slip:** Decision date missed by >2 weeks
3. **Blocked critical path:** KNU/KNOT on critical path blocked >30 days
4. **Cross-program impact:** Decision affects other programs (e.g., AMPEL500)

### Current Escalations

**None** — All Class I TBDs are within normal decision timeline.

---

## Next Steps

### Immediate Actions (This Week)

1. **TBD-00-020 (Requirements Tool):** Schedule decision brief with STK_SE + Chief Engineer by 2026-01-17
2. **TBD-00-015 (Cloud Deployment):** Complete KNU-00-00-001-ANA-005 (Cloud Deployment Trade Study) by 2026-01-24
3. **TBD-00-019 (Multi-Language):** Complete KNU-00-00-002-ANA-003 (Multi-Language Strategy) by 2026-01-31

### Decision Checkpoints

| Date | Checkpoint | Decision |
|------|------------|----------|
| **2026-02-01** | Requirements Tool Decision Deadline | TBD-00-020 (MUST decide) |
| **2026-02-28** | Cloud Deployment Decision Deadline | TBD-00-015 (MUST decide) |
| **2026-03-15** | Multi-Language Decision Deadline | TBD-00-019 (MUST decide) |

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| I01-R01 | 2026-01-12 | STK_CM | Initial decision log; 3 Class I TBDs identified |

---

**Document Status:** DRAFT  
**Next Review:** 2026-01-19 (weekly until all Class I TBDs resolved)  
**Approval Authority:** Program Manager  

---

*This document is part of the AMPEL360 Q100 program decision governance framework. All Class I TBDs require executive approval before implementation.*
