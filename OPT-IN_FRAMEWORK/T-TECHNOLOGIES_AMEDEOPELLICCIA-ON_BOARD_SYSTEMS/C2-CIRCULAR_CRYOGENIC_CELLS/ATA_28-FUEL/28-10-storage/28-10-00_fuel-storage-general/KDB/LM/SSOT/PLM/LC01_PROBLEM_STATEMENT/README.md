# LC01 — Problem Statement
## ATA-28-10-00 Fuel Storage General

**Version:** 1.0.0  
**Status:** Active  
**Lifecycle Phase:** LC01 — Problem Statement  
**Last Updated:** 2026-01-27

---

## Overview

This LC01 Problem Statement defines the uncertainty orchestration and KNOT/KNU planning for the ATA-28-10-00 Fuel Storage General subject. It is the authoritative source for:

- Active KNOTs (Known uNknOwn Topics)
- KNU (Knowledge Unit) planning
- Timeline and milestones
- RACI responsibilities
- Tokenomics allocation

## Subject Scope

| Attribute | Value |
|-----------|-------|
| **ATA Chapter** | 28 — Fuel |
| **Section** | 28-10 — Storage |
| **Subject** | 28-10-00 — Fuel Storage General |
| **Scope** | LH₂ cryogenic storage system design, safety, and certification |

---

## Active KNOTs

The following KNOTs are active for this subject:

| KNOT ID | Title | Status | Residual | Target |
|---------|-------|--------|----------|--------|
| KNOT-ATA28-10-00-001 | Cryogenic Tank Design Specification | IN_PROGRESS | 65 | 10 |
| KNOT-ATA28-10-00-002 | Tank Safety Case Development | OPEN | 100 | 10 |
| KNOT-ATA28-10-00-003 | Insulation System Performance | IN_PROGRESS | 70 | 15 |
| KNOT-ATA28-10-00-004 | Structural Qualification Plan | OPEN | 100 | 10 |
| KNOT-ATA28-10-00-005 | Certification Strategy | IN_PROGRESS | 80 | 10 |

---

## KNU Planning Summary

| LC Phase | Planned KNUs | Status |
|----------|-------------|--------|
| LC02 (Requirements) | 15 | 5 COMPLETE, 10 IN_PROGRESS |
| LC03 (Safety) | 8 | 2 COMPLETE, 6 PLANNED |
| LC04 (Design) | 12 | 0 COMPLETE, 12 PLANNED |
| LC05 (Analysis) | 10 | 0 COMPLETE, 10 PLANNED |
| LC06 (Test) | 8 | 0 COMPLETE, 8 PLANNED |
| LC08 (Certification) | 6 | 0 COMPLETE, 6 PLANNED |

---

## Files in This Package

| File | Description |
|------|-------------|
| `KNOTS.csv` | Active KNOT register |
| `KNU_PLAN.csv` | Planned KNUs per KNOT |
| `TIMELINE.csv` | Milestones and target dates |
| `RACI.csv` | Stakeholder responsibilities |
| `TOKENOMICS_TT.yaml` | Token allocation |
| `TRACE_LC01.csv` | Traceability from KNOT to KNU |

---

## Related Documents

- [GENESIS Layer](../../GENESIS/README.md) — Source uncertainties
- [LC02 Requirements](../LC02_SYSTEM_REQUIREMENTS/README.md) — Requirements artifacts
- [LC03 Safety](../LC03_SAFETY_RELIABILITY/README.md) — Safety analysis

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-27 | 1.0.0 | STK_SE | Initial LC01 problem statement |
