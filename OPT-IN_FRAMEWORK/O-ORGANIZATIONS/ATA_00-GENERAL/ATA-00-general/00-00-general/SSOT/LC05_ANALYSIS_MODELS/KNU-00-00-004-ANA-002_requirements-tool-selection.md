# Requirements Management Tool Selection

## 1. Executive Summary

**Decision: OPEN-SOURCE STACK (Doorstop + Git + Custom Dashboard)**

Cost-effective, Git-native solution aligned with SSOT architecture.

## 2. Candidates Evaluated

### Candidate 1: IBM DOORS Next
- Enterprise standard, powerful
- Score: 75/100
- Con: High cost (€50k+/year), vendor lock-in

### Candidate 2: Jama Connect
- Modern UI, good collaboration
- Score: 78/100
- Con: Medium cost (€30k+/year), cloud dependency

### Candidate 3: Polarion
- Good Siemens integration
- Score: 72/100
- Con: Complex, aerospace adoption limited

### Candidate 4: Doorstop + Git (SELECTED)
- Open-source, Git-native
- Score: 85/100
- Pro: Aligns with SSOT, no license cost

## 3. Decision Matrix

| Criterion | Weight | DOORS | Jama | Polarion | Doorstop |
|-----------|--------|-------|------|----------|----------|
| Cost (5-yr) | 25% | 40 | 60 | 50 | 100 |
| Git Integration | 20% | 50 | 70 | 60 | 100 |
| Certification | 20% | 95 | 85 | 80 | 75 |
| Scalability | 15% | 90 | 85 | 80 | 80 |
| Team Skill | 10% | 70 | 75 | 65 | 90 |
| Vendor Support | 10% | 95 | 90 | 85 | 60 |
| **Weighted** | 100% | **70** | **75** | **69** | **87** |

## 4. Architecture

```
┌─────────────────────────────────────────────────────────────┐
│               REQUIREMENTS MANAGEMENT STACK                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │  Doorstop   │◄──►│    Git      │◄──►│  Dashboard  │     │
│  │  (YAML/MD)  │    │  (Version)  │    │  (Web UI)   │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Traceability Engine                     │   │
│  │         (Links REQ ↔ Design ↔ Test ↔ Evidence)      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 5. Implementation Plan

| Phase | Timeline | Deliverable |
|-------|----------|-------------|
| Phase 1 | 2026-Q1 | Doorstop setup, initial requirements |
| Phase 2 | 2026-Q2 | Traceability engine development |
| Phase 3 | 2026-Q3 | Dashboard deployment |
| Phase 4 | 2026-Q4 | Full integration with SSOT |

## 6. Certification Approach

Doorstop qualification strategy:
1. Tool Qualification Plan (per DO-330)
2. Verification of traceability accuracy
3. Audit trail demonstration
4. Configuration management integration

## 7. Resolves

**RESOLVES:** TBD-00-00-004-ANA-001-001 (Requirements tool selection)

**UNBLOCKS:**
- KNU-00-00-004-REQ-002 (Coverage Requirements)
- Full traceability matrix implementation

## 8. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_SE | Decision: Doorstop + Git |
