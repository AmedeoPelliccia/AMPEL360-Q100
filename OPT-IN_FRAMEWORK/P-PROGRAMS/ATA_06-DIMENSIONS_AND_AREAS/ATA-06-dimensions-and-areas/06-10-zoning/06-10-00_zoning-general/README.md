# ATA 06-10-00 — Zoning General
## AMPEL360 Q100 BWB Zoning Scheme

**Subject ID:** ATA06-10-00
**Version:** 1.0.0
**Status:** Active Development
**Last Updated:** 2026-02-09

---

## Overview

This subject folder contains the complete knowledge and information architecture for the **AMPEL360 Q100 Zoning Scheme**. It implements the full canonical ATA-XX schema with:

- **KDB** — Knowledge Data Base (SSOT/PLM lifecycle artifacts)
- **CONTRACTS** — KDB→IDB transformation governance
- **IDB** — Information Data Base (OPS + PUB deliverables)

---

## Quick Navigation

| Layer | Path | Description |
|-------|------|-------------|
| **KDB/SSOT** | `KDB/LM/SSOT/PLM/` | Baselined engineering artifacts (LC01-LC08) |
| **IDB/PUB** | `IDB/PUB/` | S1000D publications (zonal diagrams, AMM references) |

---

## System Scope

### In Scope

✅ Zone numbering scheme (BWB-adapted macro ranges)
✅ Baseline zone register (boundaries, access, ATA links)
✅ Left/right and vertical subzone conventions
✅ Hazard overlay tagging (LH₂ / HV / hot / rotating)
✅ Zone-to-access-point mapping

### Out of Scope

❌ Zonal inspection task definition (see ATA 05)
❌ Structural repair zone references (see ATA 51/53)
❌ EWIS installation zone assignments (see ATA 20)

---

## Current Status

### KNOT Progress

| KNOT ID | Title | Status | Residual |
|---------|-------|--------|----------|
| KNOT-ATA06-10-00-001 | Zone scheme/register completeness | OPEN | 100/10 |

### Milestone Timeline

```
2026-Q2  ─────  Zoning Scheme PDR
2026-Q3  ─────  Zone Register Freeze
```

---

## Key Documents

### LC01 Problem Statement
- [KNOTS.csv](KDB/LM/SSOT/PLM/LC01_PROBLEM_STATEMENT/KNOTS.csv) — Active uncertainty register
- [KNU_PLAN.csv](KDB/LM/SSOT/PLM/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv) — Planned artifacts

### LC02 System Requirements (Upstream Inputs)
- [ATA06-10-00_TLAR_INPUT.md](KDB/LM/SSOT/PLM/LC02_SYSTEM_REQUIREMENTS/ATA06-10-00_TLAR_INPUT.md) — TLAR constraints (KNU-REQ-001)

### LC04 Design Definition (SSOT)
- [ATA06-10-00_BWB_GEOMETRY_DEFINITION.md](KDB/LM/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/PACKAGES/DESIGN/ATA06-10-00_BWB_GEOMETRY_DEFINITION.md) — BWB Geometry Definition (KNU-DES-002)
- [ATA06-10-00_ZONING_SCHEME.md](KDB/LM/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/PACKAGES/DESIGN/ATA06-10-00_ZONING_SCHEME.md) — Zoning scheme document
- [ZONES_REGISTER.csv](KDB/LM/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/PACKAGES/DESIGN/ZONES_REGISTER.csv) — Authoritative zone register
- [ZONES_ACCESS_POINTS.csv](KDB/LM/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/PACKAGES/DESIGN/ZONES_ACCESS_POINTS.csv) — Access point mapping
- [ZONES_HAZARD_TAGS.yaml](KDB/LM/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/PACKAGES/DESIGN/ZONES_HAZARD_TAGS.yaml) — Hazard overlay definitions
- [ATA06-10-00_TRACEABILITY_MATRIX.csv](KDB/LM/SSOT/PLM/LC04_DESIGN_DEFINITION_DMU/PACKAGES/DESIGN/ATA06-10-00_TRACEABILITY_MATRIX.csv) — TLAR → Geometry → Zoning traceability

---

## Traceability

### Dependency Chain

```
TLAR (KNU-ATA06-10-00-001-REQ-001)
  ↓ derives_from
BWB Geometry Definition (KNU-ATA06-10-00-001-DES-002)
  ↓ derives_from
Zoning Scheme (KNU-ATA06-10-00-001-DES-001)
  ↓ satisfies
Zone Register / Hazard Tags / Publications (DATA-001, SAF-001, PUB-001)
```

### Source Tracking

| Source | Lifecycle | Reason |
|--------|-----------|--------|
| LC02 System Requirements | Upstream | Zone boundaries derive from requirements |
| LC04 Design Definition | **Authoritative** | SSOT zoning scheme + registers |
| LC06 Integration & Test | Downstream | Test plans reference zone IDs |
| PUB (S1000D) | Downstream | Generated zonal diagrams / AMM zoning |

---

## Contacts

| Role | Stakeholder | Email |
|------|-------------|-------|
| Subject Owner | STK_SE | systems@ampel360.eu |
| Safety Lead | STK_SAF | safety@ampel360.eu |
| Data Lead | STK_DATA | data@ampel360.eu |

---

## Related Documents

- [ATA-06 Chapter README](../../README.md)
- [ATA Chapter Scaling Framework](/docs/ATA_CHAPTER_SCALING_FRAMEWORK.md)

---

## Revision History

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-02-09 | 1.0.0 | STK_SE | Initial subject structure |
