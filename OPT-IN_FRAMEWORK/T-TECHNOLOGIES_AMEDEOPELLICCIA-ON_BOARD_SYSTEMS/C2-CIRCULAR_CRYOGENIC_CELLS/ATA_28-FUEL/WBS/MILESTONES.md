# ATA-28 FUEL Systems — Milestones & Progress Tracking

**Version:** 1.0.0  
**Status:** Active  
**Last Updated:** 2026-01-27  
**ATA Chapter:** 28 — Fuel Systems (LH₂)

---

## Executive Summary

This document provides comprehensive milestone tracking, GANTT scheduling, and burndown metrics for the AMPEL360 Q100 ATA-28 LH₂ Fuel Systems development program.

| Metric | Value |
|--------|-------|
| **Total Milestones** | 21 |
| **Work Packages** | 7 |
| **Total Budget (TT)** | 650 |
| **Program Duration** | 2026-Q1 to 2029-Q4 |
| **Critical Path** | Storage → Safety → Integration → Certification |

---

## Program GANTT Chart

### Overall Program Timeline

```mermaid
gantt
    title ATA-28 FUEL Systems Development Program
    dateFormat  YYYY-MM-DD
    excludes    weekends
    
    section WBS-28-1.0 Storage
    Tank PDR                    :milestone, ms11, 2026-09-30, 0d
    Tank Design                 :task11, 2026-01-15, 2026-09-30
    Tank CDR                    :milestone, ms12, 2027-03-31, 0d
    Tank Development            :task12, 2026-10-01, 2027-03-31
    Tank Qualification          :milestone, ms13, 2028-06-30, 0d
    Tank Testing                :task13, 2027-04-01, 2028-06-30
    
    section WBS-28-2.0 Distribution
    Distribution PDR            :milestone, ms21, 2026-09-30, 0d
    Distribution Design         :task21, 2026-02-01, 2026-09-30
    Distribution CDR            :milestone, ms22, 2027-03-31, 0d
    Distribution Development    :task22, 2026-10-01, 2027-03-31
    Distribution Qualification  :milestone, ms23, 2028-06-30, 0d
    Distribution Testing        :task23, 2027-04-01, 2028-06-30
    
    section WBS-28-3.0 Delivery
    Delivery PDR                :milestone, ms31, 2026-12-31, 0d
    Delivery Design             :task31, 2026-03-01, 2026-12-31
    Delivery CDR                :milestone, ms32, 2027-06-30, 0d
    Delivery Development        :task32, 2027-01-01, 2027-06-30
    Delivery Qualification      :milestone, ms33, 2028-09-30, 0d
    Delivery Testing            :task33, 2027-07-01, 2028-09-30
    
    section WBS-28-4.0 Indicating
    Indicating PDR              :milestone, ms41, 2026-12-31, 0d
    Indicating Design           :task41, 2026-04-01, 2026-12-31
    Indicating CDR              :milestone, ms42, 2027-06-30, 0d
    Indicating Development      :task42, 2027-01-01, 2027-06-30
    Indicating Qualification    :milestone, ms43, 2028-06-30, 0d
    Indicating Testing          :task43, 2027-07-01, 2028-06-30
    
    section WBS-28-5.0 Management
    Management PDR              :milestone, ms51, 2027-03-31, 0d
    Management Design           :task51, 2026-06-01, 2027-03-31
    Management CDR              :milestone, ms52, 2027-09-30, 0d
    Management Development      :task52, 2027-04-01, 2027-09-30
    Management Qualification    :milestone, ms53, 2028-09-30, 0d
    Management Testing          :task53, 2027-10-01, 2028-09-30
    
    section WBS-28-6.0 Safety
    Safety PDR                  :milestone, ms61, 2026-09-30, 0d
    Safety Design               :task61, 2026-01-15, 2026-09-30
    Safety CDR                  :milestone, ms62, 2027-03-31, 0d
    Safety Development          :task62, 2026-10-01, 2027-03-31
    Safety Qualification        :milestone, ms63, 2028-03-31, 0d
    Safety Testing              :task63, 2027-04-01, 2028-03-31
    
    section WBS-28-7.0 Integration
    System Integration Test     :milestone, ms71, 2028-06-30, 0d
    Integration Activities      :task71, 2028-01-01, 2028-06-30
    Ground Test Complete        :milestone, ms72, 2028-12-31, 0d
    Ground Test Campaign        :task72, 2028-07-01, 2028-12-31
    Type Certification          :milestone, ms73, 2029-12-31, 0d
    Certification Activities    :task73, 2029-01-01, 2029-12-31
```

### Critical Path Analysis

```mermaid
gantt
    title ATA-28 Critical Path (Safety-Critical Systems)
    dateFormat  YYYY-MM-DD
    
    section Critical Path
    Storage Tank Design         :crit, cp1, 2026-01-15, 2026-09-30
    Safety System Design        :crit, cp2, 2026-01-15, 2026-09-30
    Tank & Safety CDR           :crit, milestone, cp3, 2027-03-31, 0d
    Tank Qualification          :crit, cp4, 2027-04-01, 2028-06-30
    Safety Qualification        :crit, cp5, 2027-04-01, 2028-03-31
    System Integration          :crit, cp6, 2028-01-01, 2028-12-31
    Type Certification          :crit, cp7, 2029-01-01, 2029-12-31
```

---

## Milestone Register

### All Program Milestones

| ID | Milestone | Work Package | Target Date | Status | Dependencies |
|----|-----------|--------------|-------------|--------|--------------|
| MS-28-1.1 | Tank PDR | WBS-28-1.0 Storage | 2026-Q3 | 🔵 PLANNED | — |
| MS-28-1.2 | Tank CDR | WBS-28-1.0 Storage | 2027-Q1 | 🔵 PLANNED | MS-28-1.1 |
| MS-28-1.3 | Tank Qualification | WBS-28-1.0 Storage | 2028-Q2 | 🔵 PLANNED | MS-28-1.2 |
| MS-28-2.1 | Distribution PDR | WBS-28-2.0 Distribution | 2026-Q3 | 🔵 PLANNED | — |
| MS-28-2.2 | Distribution CDR | WBS-28-2.0 Distribution | 2027-Q1 | 🔵 PLANNED | MS-28-2.1 |
| MS-28-2.3 | Distribution Qualification | WBS-28-2.0 Distribution | 2028-Q2 | 🔵 PLANNED | MS-28-2.2 |
| MS-28-3.1 | Delivery PDR | WBS-28-3.0 Delivery | 2026-Q4 | 🔵 PLANNED | MS-28-1.1 |
| MS-28-3.2 | Delivery CDR | WBS-28-3.0 Delivery | 2027-Q2 | 🔵 PLANNED | MS-28-3.1 |
| MS-28-3.3 | Delivery Qualification | WBS-28-3.0 Delivery | 2028-Q3 | 🔵 PLANNED | MS-28-3.2 |
| MS-28-4.1 | Indicating PDR | WBS-28-4.0 Indicating | 2026-Q4 | 🔵 PLANNED | — |
| MS-28-4.2 | Indicating CDR | WBS-28-4.0 Indicating | 2027-Q2 | 🔵 PLANNED | MS-28-4.1 |
| MS-28-4.3 | Indicating Qualification | WBS-28-4.0 Indicating | 2028-Q2 | 🔵 PLANNED | MS-28-4.2 |
| MS-28-5.1 | Management PDR | WBS-28-5.0 Management | 2027-Q1 | 🔵 PLANNED | MS-28-4.1 |
| MS-28-5.2 | Management CDR | WBS-28-5.0 Management | 2027-Q3 | 🔵 PLANNED | MS-28-5.1 |
| MS-28-5.3 | Management Qualification | WBS-28-5.0 Management | 2028-Q3 | 🔵 PLANNED | MS-28-5.2 |
| MS-28-6.1 | Safety PDR | WBS-28-6.0 Safety | 2026-Q3 | 🔵 PLANNED | — |
| MS-28-6.2 | Safety CDR | WBS-28-6.0 Safety | 2027-Q1 | 🔵 PLANNED | MS-28-6.1 |
| MS-28-6.3 | Safety Qualification | WBS-28-6.0 Safety | 2028-Q1 | 🔵 PLANNED | MS-28-6.2 |
| MS-28-7.1 | System Integration Test | WBS-28-7.0 Integration | 2028-Q2 | 🔵 PLANNED | MS-28-1.3, MS-28-6.3 |
| MS-28-7.2 | Ground Test Complete | WBS-28-7.0 Integration | 2028-Q4 | 🔵 PLANNED | MS-28-7.1 |
| MS-28-7.3 | Type Certification | WBS-28-7.0 Integration | 2029-Q4 | 🔵 PLANNED | MS-28-7.2 |

**Status Legend:** 🟢 COMPLETE | 🟡 IN_PROGRESS | 🔵 PLANNED | 🔴 AT_RISK | ⚫ BLOCKED

---

## Burndown Charts

### Overall Uncertainty Burndown (KNOT Residuals)

```mermaid
%%{init: {'theme': 'default'}}%%
xychart-beta
    title "ATA-28 Uncertainty Burndown - Target vs Actual"
    x-axis ["2026-Q1", "2026-Q2", "2026-Q3", "2026-Q4", "2027-Q1", "2027-Q2", "2027-Q3", "2027-Q4", "2028-Q1", "2028-Q2"]
    y-axis "Total Residual Uncertainty" 0 --> 500
    line "Planned Burndown" [500, 450, 380, 310, 240, 180, 120, 80, 50, 25]
    line "Actual Progress" [500, 485, 415]
```

### KNOT-Level Burndown Status

| KNOT ID | Title | Initial | Current | Target | Status | Trend |
|---------|-------|---------|---------|--------|--------|-------|
| KNOT-ATA28-10-00-001 | Cryogenic Tank Design | 100 | 65 | 10 | 🟡 IN_PROGRESS | ↓ On Track |
| KNOT-ATA28-10-00-002 | Tank Safety Case | 100 | 100 | 10 | 🔵 PLANNED | — Not Started |
| KNOT-ATA28-10-00-003 | Insulation Performance | 100 | 70 | 15 | 🟡 IN_PROGRESS | ↓ On Track |
| KNOT-ATA28-10-00-004 | Structural Qualification | 100 | 100 | 10 | 🔵 PLANNED | — Not Started |
| KNOT-ATA28-10-00-005 | Certification Strategy | 100 | 80 | 10 | 🟡 IN_PROGRESS | ↓ On Track |

**Current Total Residual:** 415 / 500 initial (17% reduction)

### Token Budget Burndown

```mermaid
%%{init: {'theme': 'default'}}%%
xychart-beta
    title "Teknia Token Budget Consumption"
    x-axis ["2026-Q1", "2026-Q2", "2026-Q3", "2026-Q4", "2027-Q1", "2027-Q2", "2027-Q3", "2027-Q4", "2028-Q1", "2028-Q2", "2028-Q3", "2028-Q4", "2029-Q4"]
    y-axis "Remaining TT Budget" 0 --> 700
    line "Planned Budget" [650, 620, 570, 500, 420, 340, 280, 220, 170, 120, 80, 40, 0]
    line "Actual Spent" [650, 630, 580]
```

---

## Work Package Progress

### Budget Allocation by Work Package

```mermaid
pie showData
    title "TT Budget Allocation by Work Package"
    "WBS-28-1.0 Storage" : 150
    "WBS-28-2.0 Distribution" : 100
    "WBS-28-3.0 Delivery" : 80
    "WBS-28-4.0 Indicating" : 60
    "WBS-28-5.0 Management" : 70
    "WBS-28-6.0 Safety" : 90
    "WBS-28-7.0 Integration" : 100
```

### Work Package Status Summary

| WBS ID | Title | Budget TT | Spent TT | Remaining TT | Progress |
|--------|-------|-----------|----------|--------------|----------|
| WBS-28-1.0 | Fuel Storage Systems | 150 | 25 | 125 | ▓▓░░░░░░░░ 17% |
| WBS-28-2.0 | Fuel Distribution Systems | 100 | 15 | 85 | ▓▓░░░░░░░░ 15% |
| WBS-28-3.0 | Fuel Delivery Systems | 80 | 10 | 70 | ▓░░░░░░░░░ 13% |
| WBS-28-4.0 | Fuel Indicating Systems | 60 | 8 | 52 | ▓░░░░░░░░░ 13% |
| WBS-28-5.0 | Fuel Management Systems | 70 | 5 | 65 | ▓░░░░░░░░░ 7% |
| WBS-28-6.0 | Safety and Monitoring | 90 | 15 | 75 | ▓▓░░░░░░░░ 17% |
| WBS-28-7.0 | System Integration | 100 | 0 | 100 | ░░░░░░░░░░ 0% |
| **TOTAL** | — | **650** | **78** | **572** | **12%** |

---

## Implementation Plan

### Phase 1: Design (2026-Q1 to 2027-Q1)

```mermaid
gantt
    title Phase 1: Design Phase
    dateFormat  YYYY-MM-DD
    
    section Requirements
    System Requirements         :done, req1, 2026-01-15, 2026-03-31
    Safety Requirements         :active, req2, 2026-02-01, 2026-06-30
    Interface Definitions       :req3, 2026-03-01, 2026-06-30
    
    section Preliminary Design
    Storage PDR Prep            :active, pdr1, 2026-04-01, 2026-09-30
    Distribution PDR Prep       :pdr2, 2026-04-01, 2026-09-30
    Safety PDR Prep             :pdr3, 2026-04-01, 2026-09-30
    
    section Reviews
    Tank PDR                    :milestone, m1, 2026-09-30, 0d
    Distribution PDR            :milestone, m2, 2026-09-30, 0d
    Safety PDR                  :milestone, m3, 2026-09-30, 0d
    Delivery PDR                :milestone, m4, 2026-12-31, 0d
    Indicating PDR              :milestone, m5, 2026-12-31, 0d
    
    section Critical Design
    Tank CDR Prep               :cdr1, 2026-10-01, 2027-03-31
    Distribution CDR Prep       :cdr2, 2026-10-01, 2027-03-31
    Safety CDR Prep             :cdr3, 2026-10-01, 2027-03-31
```

### Phase 2: Development & Test (2027-Q1 to 2028-Q4)

```mermaid
gantt
    title Phase 2: Development & Test Phase
    dateFormat  YYYY-MM-DD
    
    section Prototyping
    Tank Prototype Build        :proto1, 2027-04-01, 2027-09-30
    Distribution Prototype      :proto2, 2027-04-01, 2027-09-30
    Safety System Prototype     :proto3, 2027-04-01, 2027-09-30
    
    section Component Testing
    Tank Pressure Testing       :test1, 2027-07-01, 2027-12-31
    Tank Thermal Testing        :test2, 2027-10-01, 2028-03-31
    Distribution Flow Testing   :test3, 2027-10-01, 2028-03-31
    Safety System Validation    :test4, 2027-10-01, 2028-03-31
    
    section Qualification
    Tank Qualification          :qual1, 2028-01-01, 2028-06-30
    Distribution Qualification  :qual2, 2028-01-01, 2028-06-30
    Safety Qualification        :qual3, 2027-10-01, 2028-03-31
    
    section Integration
    System Integration          :integ, 2028-04-01, 2028-06-30
    Ground Test Campaign        :gnd, 2028-07-01, 2028-12-31
```

### Phase 3: Certification (2029)

```mermaid
gantt
    title Phase 3: Certification Phase
    dateFormat  YYYY-MM-DD
    
    section Flight Test
    Flight Test Prep            :ft1, 2029-01-01, 2029-03-31
    Flight Test Campaign        :ft2, 2029-04-01, 2029-09-30
    
    section Certification
    Compliance Documentation    :cert1, 2029-01-01, 2029-06-30
    Authority Reviews           :cert2, 2029-07-01, 2029-10-31
    Type Certification          :milestone, tc, 2029-12-31, 0d
```

---

## Risk-Adjusted Schedule

### Schedule Risk Analysis

| Risk | Probability | Impact | Mitigation | Schedule Buffer |
|------|-------------|--------|------------|-----------------|
| LH₂ tank certification delays | MEDIUM | HIGH | Early engagement with EASA | +3 months |
| MLI performance shortfall | LOW | MEDIUM | Parallel active cooling development | +2 months |
| Supply chain disruption | MEDIUM | MEDIUM | Dual-source strategy | +2 months |
| Test facility availability | LOW | HIGH | Early booking, backup facilities | +1 month |

### Contingency Timeline

```mermaid
gantt
    title Risk-Adjusted Schedule (with contingency)
    dateFormat  YYYY-MM-DD
    
    section Baseline
    Baseline Schedule           :baseline, 2026-01-15, 2029-12-31
    
    section With Contingency
    Tank Development            :cont1, 2026-01-15, 2028-09-30
    Safety Qualification        :cont2, 2026-01-15, 2028-06-30
    System Integration          :cont3, 2028-04-01, 2029-03-31
    Type Certification          :cont4, 2029-01-01, 2030-03-31
    
    section Milestones
    Baseline TC Target          :milestone, m1, 2029-12-31, 0d
    Risk-Adjusted TC Target     :milestone, m2, 2030-03-31, 0d
```

---

## Reporting & Governance

### Monthly Status Report Template

| Section | Content |
|---------|---------|
| **Executive Summary** | Key achievements, risks, decisions needed |
| **Milestone Status** | Updated milestone table with RAG status |
| **Burndown Update** | Current vs planned uncertainty reduction |
| **Budget Status** | TT consumption vs plan |
| **Risk Register** | New/changed risks, mitigation status |
| **Action Items** | Open actions with owners and due dates |
| **Next Period Plan** | Planned activities for coming month |

### Review Cadence

| Review | Frequency | Participants | Purpose |
|--------|-----------|--------------|---------|
| Weekly Status | Weekly | WP Leads | Tactical progress, blockers |
| Monthly Review | Monthly | STK_PM, WP Leads | Milestone tracking, budget |
| Quarterly Review | Quarterly | STK_PM, STK_SE, STK_SF | Strategic alignment, risks |
| Gate Reviews | Per milestone | Full team + stakeholders | Design maturity gates |

---

## Task Implementation Checklist

### Immediate Tasks (2026-Q1)

- [x] Establish GENESIS layer with O-KNOTs and Y-KNOTs
- [x] Define LC01 problem statement and KNOT register
- [x] Create KNU planning matrix
- [x] Set up tokenomics allocation
- [ ] Complete system requirements baseline (LC02)
- [ ] Initiate safety assessment (FHA)
- [ ] Begin tank preliminary design studies

### Near-Term Tasks (2026-Q2)

- [ ] Complete functional hazard assessment
- [ ] Finalize tank sizing trade study
- [ ] Complete MLI design selection
- [ ] Establish interface control documents
- [ ] Prepare PDR packages for Q3 reviews

### Medium-Term Tasks (2026-Q3/Q4)

- [ ] Conduct Storage PDR (MS-28-1.1)
- [ ] Conduct Distribution PDR (MS-28-2.1)
- [ ] Conduct Safety PDR (MS-28-6.1)
- [ ] Begin CDR preparation activities
- [ ] Initiate prototype procurement

---

## Appendix: Milestone Data (CSV Format)

```csv
milestone_id,title,work_package,target_date,status,dependencies,critical_path
MS-28-1.1,Tank PDR,WBS-28-1.0,2026-09-30,PLANNED,,YES
MS-28-1.2,Tank CDR,WBS-28-1.0,2027-03-31,PLANNED,MS-28-1.1,YES
MS-28-1.3,Tank Qualification,WBS-28-1.0,2028-06-30,PLANNED,MS-28-1.2,YES
MS-28-2.1,Distribution PDR,WBS-28-2.0,2026-09-30,PLANNED,,NO
MS-28-2.2,Distribution CDR,WBS-28-2.0,2027-03-31,PLANNED,MS-28-2.1,NO
MS-28-2.3,Distribution Qualification,WBS-28-2.0,2028-06-30,PLANNED,MS-28-2.2,NO
MS-28-3.1,Delivery PDR,WBS-28-3.0,2026-12-31,PLANNED,MS-28-1.1,NO
MS-28-3.2,Delivery CDR,WBS-28-3.0,2027-06-30,PLANNED,MS-28-3.1,NO
MS-28-3.3,Delivery Qualification,WBS-28-3.0,2028-09-30,PLANNED,MS-28-3.2,NO
MS-28-4.1,Indicating PDR,WBS-28-4.0,2026-12-31,PLANNED,,NO
MS-28-4.2,Indicating CDR,WBS-28-4.0,2027-06-30,PLANNED,MS-28-4.1,NO
MS-28-4.3,Indicating Qualification,WBS-28-4.0,2028-06-30,PLANNED,MS-28-4.2,NO
MS-28-5.1,Management PDR,WBS-28-5.0,2027-03-31,PLANNED,MS-28-4.1,NO
MS-28-5.2,Management CDR,WBS-28-5.0,2027-09-30,PLANNED,MS-28-5.1,NO
MS-28-5.3,Management Qualification,WBS-28-5.0,2028-09-30,PLANNED,MS-28-5.2,NO
MS-28-6.1,Safety PDR,WBS-28-6.0,2026-09-30,PLANNED,,YES
MS-28-6.2,Safety CDR,WBS-28-6.0,2027-03-31,PLANNED,MS-28-6.1,YES
MS-28-6.3,Safety Qualification,WBS-28-6.0,2028-03-31,PLANNED,MS-28-6.2,YES
MS-28-7.1,System Integration Test,WBS-28-7.0,2028-06-30,PLANNED,"MS-28-1.3,MS-28-6.3",YES
MS-28-7.2,Ground Test Complete,WBS-28-7.0,2028-12-31,PLANNED,MS-28-7.1,YES
MS-28-7.3,Type Certification,WBS-28-7.0,2029-12-31,PLANNED,MS-28-7.2,YES
```

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 1.0.0 | STK_PM | Initial milestones document with GANTT and burndown charts |

---

*This document supports automated follow-ups and reporting for the ATA-28 FUEL Systems development program.*
