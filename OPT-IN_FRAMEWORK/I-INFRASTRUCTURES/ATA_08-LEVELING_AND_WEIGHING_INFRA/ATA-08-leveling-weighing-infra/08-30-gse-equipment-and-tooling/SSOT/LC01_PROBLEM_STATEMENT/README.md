# LC01 — Problem Statement: GSE Equipment and Tooling

**ATA Reference:** 08-30 (Infrastructure)  
**OPT-IN Axis:** I-INFRASTRUCTURES  
**Parent System:** ATA 08 — Leveling and Weighing  
**Scope:** Ground Support Equipment for aircraft leveling and weighing operations

---

## 1. Overview

This LC01 node orchestrates uncertainty resolution for **Ground Support Equipment (GSE) and Tooling** required to support leveling and weighing operations on the AMPEL360 Q100 BWB hydrogen-hybrid aircraft.

The BWB configuration and hydrogen propulsion architecture introduce unique GSE requirements:

| Challenge | Impact on GSE |
|-----------|---------------|
| **BWB Geometry** | Non-conventional jack point locations; wider stance requirements |
| **Composite Airframe** | Load distribution sensitivity; specialized adapters required |
| **LH₂ Tank Mass Variation** | Extended weighing range; fuel state compensation algorithms |
| **CG Envelope** | Tighter tolerances due to BWB stability characteristics |
| **Certification Novelty** | GSE must support novel type certificate evidence collection |

---

## 2. Scope Definition

### 2.1 In-Scope

- Aircraft jacks and jack adapters (main gear, nose gear, wing)
- Electronic load cells and weighing platforms
- Leveling equipment (optical, laser, digital inclinometers)
- Jack control units and safety interlock systems
- Calibration standards and traceability artifacts
- Digital data acquisition and export interfaces
- Operator training equipment and simulators
- Tooling storage, transport, and lifecycle management

### 2.2 Out-of-Scope

- On-board weighing systems (see ATA 08-10)
- Airframe structural provisions for jacking (see ATA 53)
- Facility civil works and utilities (see 08-50)
- Metrology laboratory equipment (see 08-40)

---

## 3. KNOT Register Summary

| KNOT ID | Title | Status | Residual |
|---------|-------|--------|----------|
| KNOT-08-30-001 | BWB Jack Point Configuration | OPEN | 100 |
| KNOT-08-30-002 | Load Cell Range & Accuracy | OPEN | 100 |
| KNOT-08-30-003 | LH₂ State Compensation Algorithm | OPEN | 100 |
| KNOT-08-30-004 | Composite Adapter Materials | OPEN | 100 |
| KNOT-08-30-005 | Digital Integration Protocol | OPEN | 100 |
| KNOT-08-30-006 | Safety Interlock Architecture | OPEN | 100 |

See `KNOTS.csv` for complete register.

---

## 4. Closure Criteria

A KNOT in this LC01 node is **CLOSED** when:

1. ✅ All planned KNUs reach `COMPLETE` or `ACCEPTED` status
2. ✅ Residual uncertainty drops to or below target (typically ≤15)
3. ✅ All PUB artifacts pass BREX validation
4. ✅ All trace links resolve (SSOT ↔ PUB, KNU → artifact)
5. ✅ Stakeholder signoffs captured in evidence pack
6. ✅ TT rewards distributed and logged to `AWARDS_TT.csv`

### Node-Level Closure

The entire 08-30 LC01 node closes when:
- All 6 KNOTs reach CLOSED status
- Cross-KNOT dependencies resolved
- Consolidated evidence pack approved by STK_GSE and STK_CERT
- TT pools fully distributed

---

## 5. Key Stakeholders

| AoR Code | Role | Responsibility |
|----------|------|----------------|
| STK_GSE | GSE Engineering Lead | Technical ownership of GSE specifications |
| STK_SE | Systems Engineering | Integration with aircraft systems |
| STK_SAF | Safety Engineering | Hazard analysis, interlock requirements |
| STK_CERT | Certification | Compliance evidence, authority liaison |
| STK_MRO | MRO Operations | Operational feedback, maintainability |
| STK_TEST | Test Engineering | Validation procedures, acceptance tests |
| STK_DATA | Data Architecture | Digital interfaces, data standards |
| STK_CM | Configuration Management | Baseline control, change management |

---

## 6. Dependencies

### Upstream (This node depends on)

| Source | Dependency |
|--------|------------|
| ATA 53-xx | Fuselage jack point structural provisions |
| ATA 57-xx | Wing jack point structural provisions |
| ATA 32-xx | Landing gear interface geometry |
| LC04 (Design) | Aircraft mass properties baseline |
| LC03 (Safety) | GSE-related hazard identification |

### Downstream (Depends on this node)

| Target | Dependency |
|--------|------------|
| ATA 08-10 | On-board weighing system integration |
| ATA 08-40 | Metrology calibration requirements |
| ATA 08-80 | Digital traceability data schemas |
| LC09 (Production) | GSE procurement specifications |
| LC11 (Maintenance) | GSE maintenance program inputs |

---

## 7. Tokenomics Summary

| Parameter | Value |
|-----------|-------|
| **Total Pool (this node)** | 600 TT |
| **Per-KNOT Allocation** | 100 TT each |
| **Effort Weight (α)** | 0.30 |
| **Impact Weight (1-α)** | 0.70 |
| **Spillover Multiplier (λ)** | 0.50 |

See `TOKENOMICS_TT.yaml` for detailed configuration.

---

## 8. File Inventory

| File | Purpose |
|------|---------|
| `README.md` | This overview document |
| `KNOTS.csv` | Uncertainty register |
| `KNU_PLAN.csv` | Expected Knowledge Units per KNOT |
| `TIMELINE.csv` | Milestones and target dates |
| `RACI.csv` | Stakeholder responsibility matrix |
| `TOKENOMICS_TT.yaml` | TT reward pool configuration |
| `AWARDS_TT.csv` | Distribution ledger (populated at closure) |

---

## 9. REC (Required End Cycle) Mapping

Each KNU is assigned a **Required End Cycle (REC)** indicating the lifecycle stage at which the artifact must be complete.

### KNU Type → REC Mapping

| KNU_Type | Artifact_Class | REC | Description |
|----------|----------------|-----|-------------|
| `REQ` | SSOT | `LC02` | System Requirements |
| `SAF` | SSOT | `LC03` | Safety & Reliability |
| `ICD` | SSOT | `LC04` | Design Definition |
| `ANA` | SSOT | `LC05` | Analysis & Models |
| `TEST` | SSOT | `LC06` | Verification |
| `VAL` | SSOT | `LC07` | Validation |
| `CM` | SSOT | `LC08` | Configuration Management |
| `PROD` | SSOT | `LC09` | Production |
| `OPS` | SSOT | `LC10` | Operations |
| `MX` | SSOT | `LC11` | Maintenance |
| `CS` | SSOT | `LC12` | Customer Care |
| `TRN` | SSOT | `LC13` | Training |
| `EOL` | SSOT | `LC14` | Retirement & Circularity |
| `PUB-AMM` | CSDB | `LC11` | Aircraft Maintenance Manual |
| `PUB-IPC` | CSDB | `LC11` | Illustrated Parts Catalog |
| `PUB-TSM` | CSDB | `LC11` | Troubleshooting Manual |
| `PUB-AFM` | CSDB | `LC10` | Aircraft Flight Manual |
| `PUB-FCOM` | CSDB | `LC10` | Flight Crew Operating Manual |
| `PUB-TRN` | CSDB | `LC13` | Training Manuals |

Revision control is managed separately in LC08 Configuration Management.

---

## 10. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-11 | AMPEL360 Baseline Architect | Initial scaffold creation |
| 2026-01-11 | AMPEL360 Baseline Architect | Added REC column (revision-free) to KNU_PLAN.csv |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under the OPT-IN Framework.*
