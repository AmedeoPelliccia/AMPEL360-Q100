# LC02 — System Requirements
## ATA-28-10-00 LH₂ Fuel Storage System

**Version:** 1.0.0  
**Status:** Active  
**Lifecycle Phase:** LC02 — System Requirements  
**Last Updated:** 2026-01-27

---

## Overview

This LC02 System Requirements package contains the authoritative requirements for the AMPEL360 Q100 LH₂ Fuel Storage System. Requirements are derived from:

- GENESIS O-KNOTs and Y-KNOTs
- Aircraft-level requirements (Top-Level Aircraft Requirements)
- Regulatory requirements (CS-25 + Special Conditions)
- Customer requirements (Airlines)

---

## Requirements Summary

| Category | Count | Status |
|----------|-------|--------|
| **Functional Requirements** | 25 | 15 APPROVED, 10 DRAFT |
| **Performance Requirements** | 18 | 12 APPROVED, 6 DRAFT |
| **Interface Requirements** | 12 | 8 APPROVED, 4 DRAFT |
| **Safety Requirements** | 15 | 5 APPROVED, 10 DRAFT |
| **Environmental Requirements** | 8 | 6 APPROVED, 2 DRAFT |

**Total:** 78 requirements

---

## Key Performance Requirements

| ID | Requirement | Value | Rationale |
|----|-------------|-------|-----------|
| REQ-28-10-PER-001 | Gravimetric Efficiency | ≥ 6% | Competitive range |
| REQ-28-10-PER-002 | Volumetric Efficiency | ≥ 40 kg/m³ | Cabin volume constraints |
| REQ-28-10-PER-003 | Ground Boil-off Rate | ≤ 0.5%/day | Operational efficiency |
| REQ-28-10-PER-004 | Flight Boil-off Rate | ≤ 0.1%/hour | Mission fuel availability |
| REQ-28-10-PER-005 | Refuel Time (0-100%) | ≤ 30 minutes | Airline turnaround |
| REQ-28-10-PER-006 | Tank Life | ≥ 30,000 cycles | Service life target |
| REQ-28-10-PER-007 | Operating Pressure | 2-5 bar | System design envelope |
| REQ-28-10-PER-008 | Operating Temperature | 20-70 K | LH₂ storage conditions |

---

## Files in This Package

| File | Description |
|------|-------------|
| `README.md` | This overview document |
| `REQUIREMENTS_MANAGEMENT_PLAN.md` | Requirements engineering process |
| `TRACE_LC02.csv` | Requirements traceability matrix |
| `PACKAGES/REQ/` | Requirement specification documents |
| `PACKAGES/ICD/` | Interface Control Documents |

---

## Traceability

### Upstream (Source)
- GENESIS O-KNOTs and Y-KNOTs
- Top-Level Aircraft Requirements (TLAR)
- CS-25 Regulations + Special Conditions

### Downstream (Derived)
- LC03 Safety Requirements
- LC04 Design Specifications
- LC06 Test Requirements

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 1.0.0 | STK_SE | Initial LC02 requirements structure |
