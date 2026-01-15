# EU Funding Alignment

## AMPEL360 Q100 — European Funding Framework Integration

**Version:** 1.0  
**Date:** 2026-01-15  
**Status:** Active Alignment Document  
**Target Programs:** Clean Aviation, Horizon Europe, Innovation Fund

---

## 1. Overview

The AMPEL360 Q100 program is strategically aligned with European Union funding mechanisms and policy objectives for **climate-neutral aviation by 2050**.

This document maps project elements to EU funding programs, policy frameworks, and reporting requirements.

---

## 2. EU Policy Framework Alignment

### 2.1 European Green Deal

**Target:** Climate-neutral Europe by 2050

| Q100 Element | Green Deal Contribution |
|--------------|-------------------------|
| **H₂ PEM Fuel Cells** | Zero-emission propulsion system |
| **BWB Configuration** | 30%+ aerodynamic efficiency improvement |
| **Distributed Propulsion** | Noise reduction + efficiency gains |
| **Digital Product Passport (DPP)** | Circular economy + lifecycle traceability |
| **TEKNIA/KBL** | Verifiable progress tracking on Net-Zero objectives |

**Evidence Location:** `OPT-IN_FRAMEWORK/T-TECHNOLOGIES_AMEDEOPELLICCIA-ON_BOARD_SYSTEMS/C2-CIRCULAR_CRYOGENIC_CELLS/ATA_28-FUEL/`

---

### 2.2 Clean Aviation Joint Undertaking

**Program:** Horizon Europe Partnership (2021-2031)  
**Budget:** €4.1 billion (€1.7B EU + €2.4B industry)  
**Focus:** Disruptive technologies for climate-neutral aviation

#### Q100 Alignment with Clean Aviation Pillars

| Pillar | Q100 Contribution | Evidence Location |
|--------|-------------------|-------------------|
| **Hybrid-Electric & Hydrogen** | Primary propulsion via H₂ PEM fuel cells | `ATA_28-FUEL/`, `ATA_49-AIRBORNE_AUXILIARY_POWER/` |
| **Ultra-Efficient Aircraft** | BWB configuration, distributed propulsion | `ATA_53-FUSELAGE/`, `ATA_57-WINGS/`, `ATA_61-PROPELLERS_PROPULSORS/` |
| **Disruptive Technologies** | AI/ML flight envelope protection, neural systems | `N-NEURAL_NETWORKS/ATA_95-AI_ML_MODELS/` |
| **System Integration** | Full digital twin, SSOT+PUB workflow | `ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md`, `DIGITAL_TWIN_CONTROL_LOOP.md` |

**Call Alignment:**
- HORIZON-JU-Clean-Aviation-2024-01: Hydrogen propulsion systems
- HORIZON-JU-Clean-Aviation-2024-02: Advanced aircraft configurations
- HORIZON-JU-Clean-Aviation-2025-01: Digital technologies for aviation

---

### 2.3 Horizon Europe

**Program Period:** 2021-2027  
**Total Budget:** €95.5 billion  
**Relevant Clusters:**

#### Cluster 5: Climate, Energy and Mobility

| Work Programme | Q100 Alignment | TRL Target |
|----------------|----------------|------------|
| **HORIZON-CL5-2024-D5-01** | Hydrogen aviation technologies | TRL 4-6 |
| **HORIZON-CL5-2024-D5-02** | Zero-emission aircraft concepts | TRL 3-5 |
| **HORIZON-CL5-2025-D5-01** | Sustainable aviation fuels & propulsion | TRL 5-7 |

**Evidence:**
- Requirements: `OPT-IN_FRAMEWORK/.../SSOT/LC02_SYSTEM_REQUIREMENTS/`
- Safety analysis: `SSOT/LC03_SAFETY_RELIABILITY/`
- Verification: `SSOT/LC06_VERIFICATION/`

---

### 2.4 Innovation Fund

**Purpose:** Support breakthrough low-carbon technologies  
**Budget:** €40+ billion (2020-2030)  
**Call Type:** Large-scale projects (€7.5M - €40M CAPEX)

#### Q100 Applicability

| Innovation Fund Criterion | Q100 Position |
|---------------------------|---------------|
| **GHG Avoidance** | ~75% reduction vs. conventional aircraft |
| **Technology Readiness** | TRL 4-6 (demonstration phase) |
| **Scalability** | 100-passenger regional aircraft segment |
| **Market Deployment** | 2035+ entry into service target |
| **Innovation** | BWB + H₂ + distributed propulsion + AI integration |

**Application Support:** `EU_FUNDING/INNOVATION_FUND_APPLICATION.md`

---

## 3. TEKNIA/KBL Integration with EU Reporting

### 3.1 NKU Mapping to EU KPIs

| EU KPI | NKU Measurement | Evidence Location |
|--------|----------------|-------------------|
| **CO₂ reduction (%)** | Baseline vs. achieved emissions | `SSOT/LC05_ANALYSIS_MODELS/` |
| **Energy efficiency improvement** | Aerodynamic & propulsion gains | `ATA_57-WINGS/`, `ATA_72-ENGINE/` |
| **TRL advancement** | Component & system TRL progression | `SSOT/LC06_VERIFICATION/` |
| **Certification progress** | Compliance artifacts produced | `SSOT/LC03_SAFETY_RELIABILITY/` |
| **Knowledge dissemination** | Publications, patents, training | `PUB/`, `SSOT/LC13_TRAINING/` |

### 3.2 Knowledge Blockchain Ledger for EU Audits

The KBL provides **immutable traceability** for EU auditors:

```
O-KNOT (problem identification)
    ↓ timestamp + hash
Y-KNOT (justification & options)
    ↓ timestamp + hash
KNOT (planning & framing)
    ↓ timestamp + hash
SSOT LC01 (authoritative problem statement)
    ↓ timestamp + hash
KNU execution (LC02-LC14 artifacts)
    ↓ timestamp + hash
CSDB publication (deliverables)
    ↓ timestamp + hash
```

**Audit Trail:** `finance/ledger.json` + `OPT-IN_FRAMEWORK/.../GENESIS/_registry/`

---

## 4. Funding Enablers

### 4.1 Consortium Structure (Example)

| Partner Type | Role | EU Requirement Met |
|--------------|------|-------------------|
| **Aircraft OEM** | Prime integrator | Industrial leadership |
| **Research Institution** | Technology validation | Research excellence |
| **SME (H₂ systems)** | Fuel cell development | SME participation (≥20%) |
| **University** | AI/ML research | Knowledge dissemination |
| **Certification Authority** | Regulatory liaison | Certification pathway |

**Location:** `EU_FUNDING/CONSORTIUM_COMPOSITION.md`

### 4.2 Budget Categories

| EU Cost Category | Q100 Allocation Example | SSOT Evidence |
|------------------|------------------------|---------------|
| **Personnel** | Engineering, research staff | `SSOT/LC01_PROBLEM_STATEMENT/RACI.csv` |
| **Subcontracting** | Specialized testing, analysis | `SSOT/LC06_VERIFICATION/` |
| **Travel** | Consortium meetings, conferences | Project management logs |
| **Equipment** | Test rigs, lab infrastructure | `I-INFRASTRUCTURES/` |
| **Other** | Materials, consumables | Per-ATA SSOT artifacts |

### 4.3 Indirect Costs

**Flat Rate:** 25% of eligible direct costs (standard EU rate for Horizon Europe)

**Calculation:** Automated via TEKNIA Token tracking system
- TT awards reflect effort → budget allocation
- `TOKENOMICS_TT.yaml` per KNOT → cost center mapping

---

## 5. Deliverables Mapping

### 5.1 EU Reporting Deliverables

| EU Deliverable Type | Q100 Equivalent | Location |
|---------------------|-----------------|----------|
| **D: Report** | SSOT artifact (REQ, ANA, TEST) | `SSOT/LCxx_.../` |
| **R: Public Deliverable** | Publication (AMM, TRN) | `PUB/AMM/`, `PUB/TRN/` |
| **DEC: Websites, patents, etc.** | Open documentation | `README.md`, `.../PUB/EXPORT/` |
| **OTHER** | Data Management Plan | `EU_FUNDING/DATA_MANAGEMENT_PLAN.md` |

### 5.2 Milestones Mapping

| EU Milestone | Q100 KNOT Closure | Verification |
|--------------|-------------------|--------------|
| **MS1: Requirements defined** | KNOT-00-00-001 CLOSED | `SSOT/LC02_SYSTEM_REQUIREMENTS/` |
| **MS2: Concept validated** | KNOT-28-10-001 CLOSED | `SSOT/LC05_ANALYSIS_MODELS/` |
| **MS3: Prototype tested** | KNOT-72-00-001 CLOSED | `SSOT/LC06_VERIFICATION/` |
| **MS4: Certification evidence** | KNOT-26-00-001 CLOSED | `SSOT/LC03_SAFETY_RELIABILITY/` |

---

## 6. Data Management Plan (DMP)

### 6.1 FAIR Principles

| Principle | Q100 Implementation |
|-----------|-------------------|
| **Findable** | Unique DMC/PM identifiers (S1000D), DOIs for reports |
| **Accessible** | Public repository (GitHub), restricted CSDB for sensitive data |
| **Interoperable** | S1000D XML, CSV data, standard formats |
| **Reusable** | CC0/Apache 2.0 licenses, metadata in `_derivation.yaml` |

### 6.2 Data Categories

| Data Type | Openness Level | Retention | Location |
|-----------|---------------|-----------|----------|
| **Requirements** | Open | Permanent | `SSOT/LC02_SYSTEM_REQUIREMENTS/` |
| **Test data** | Restricted | 10 years | `SSOT/LC06_VERIFICATION/` |
| **Publications** | Open | Permanent | `PUB/` |
| **Proprietary designs** | Confidential | 25 years | Export-controlled CSDB |

**Full DMP:** `EU_FUNDING/DATA_MANAGEMENT_PLAN.md`

---

## 7. Exploitation and Impact

### 7.1 Exploitation Routes

| Route | Q100 Application | EU Impact Criterion |
|-------|------------------|---------------------|
| **Commercialization** | Aircraft production & sales | Economic growth, job creation |
| **Licensing** | TEKTOK-based IP licensing | Knowledge transfer, SME access |
| **Standards** | Contribute to H₂ aviation standards | Regulatory harmonization |
| **Training** | Workforce upskilling programs | Skills development |

### 7.2 Impact Indicators

| Indicator | Target | Measurement |
|-----------|--------|-------------|
| **Patents filed** | 5+ | Patent office registrations |
| **Publications** | 10+ peer-reviewed | Indexed journals |
| **Standards contributions** | 3+ working groups | EASA, ISO, SAE participation |
| **Job creation** | 50+ FTEs | Consortium employment data |
| **CO₂ savings (per flight)** | 75% vs. baseline | LCA study results |

---

## 8. Risk Management

### 8.1 EU-Specific Risks

| Risk | Mitigation | TEKNIA/KBL Role |
|------|------------|----------------|
| **Underspending** | Quarterly budget reviews | TT distribution tracking |
| **Delays** | Agile KNOT closure milestones | `SSOT/LC01_.../TIMELINE.csv` |
| **Partner withdrawal** | Redundant expertise in consortium | RACI matrix visibility |
| **IP disputes** | Clear TEKTOK agreements | Provenance in KBL |
| **Regulatory changes** | Early certification authority engagement | SSOT/LC03 updates |

### 8.2 Contingency Planning

**Budget Reserve:** 10% for unforeseen costs  
**Schedule Buffer:** 3-month float per major milestone  
**Technical Alternatives:** Documented in `GENESIS/Y-KNOT/` (options analysis)

---

## 9. Communication and Dissemination

### 9.1 Mandatory EU Activities

| Activity | Frequency | Q100 Implementation |
|----------|-----------|---------------------|
| **Project website** | Continuous | Public GitHub repository |
| **EU acknowledgment** | All publications | Automated template in `PUB/` |
| **Periodic reports** | M12, M24, M36 | Auto-generated from SSOT |
| **Final report** | Project end | Consolidated from `PUB/EXPORT/` |

### 9.2 Target Audiences

| Audience | Channel | Content |
|----------|---------|---------|
| **Scientific community** | Conferences, journals | Technical papers from SSOT |
| **Industry** | Trade shows, webinars | Case studies from PUB |
| **Policymakers** | EU events, briefings | Impact summaries |
| **Public** | Social media, press | Simplified infographics |

---

## 10. Next Steps for Funding Application

### 10.1 Pre-Proposal Checklist

- [ ] Identify target call (Clean Aviation / Horizon Europe / Innovation Fund)
- [ ] Assemble consortium (OEM + research + SME + certification)
- [ ] Draft work package structure mapped to ATAs
- [ ] Prepare budget breakdown by partner and WP
- [ ] Develop Gantt chart aligned with KNOT timeline
- [ ] Write impact narrative using TEKNIA/NKU framework
- [ ] Prepare letters of support from industry/regulators
- [ ] Complete Data Management Plan template

### 10.2 Supporting Documents

Create in `EU_FUNDING/` directory:
- `CONSORTIUM_AGREEMENT.md`
- `WORK_PACKAGE_DESCRIPTIONS.md`
- `BUDGET_JUSTIFICATION.md`
- `IMPACT_PATHWAYS.md`
- `DISSEMINATION_PLAN.md`

### 10.3 Application Support Tools

```bash
# Generate consortium summary from RACI matrices
python tools/eu_funding/consortium_summary.py

# Export budget from TT tokenomics
python tools/eu_funding/budget_export.py

# Produce Gantt chart from TIMELINE.csv
python tools/eu_funding/gantt_generator.py

# Compile deliverables list from KNU_PLAN.csv
python tools/eu_funding/deliverables_list.py
```

---

## 11. References

### EU Programs

- [Clean Aviation Joint Undertaking](https://www.clean-aviation.eu/)
- [Horizon Europe Funding & Tenders Portal](https://ec.europa.eu/info/funding-tenders/opportunities/portal/)
- [Innovation Fund](https://climate.ec.europa.eu/eu-action/funding-climate-action/innovation-fund_en)
- [European Green Deal](https://ec.europa.eu/info/strategy/priorities-2019-2024/european-green-deal_en)

### Q100 Program Documents

- [TEKNIA_MANIFESTO.md](./TEKNIA_MANIFESTO.md) — Conceptual framework
- [ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md](./ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md) — Technical implementation
- [README.md](./README.md) — Program overview
- [OPT-IN_FRAMEWORK/](./OPT-IN_FRAMEWORK/) — Technical baseline

---

## 12. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-15 | STK_PMO | Initial EU funding alignment document |

---

*This document provides the strategic bridge between the AMPEL360 Q100 technical program and European Union funding mechanisms.*
