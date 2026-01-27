# OPT-IN Framework

**Version:** 1.0.0  
**Status:** Scaffold Ready  
**Last Updated:** 2026-01-27

---

## Overview

The OPT-IN Framework organizes all 79 ATA chapters across five axes:

| Axis | Name | ATA Chapters | Scope |
|------|------|--------------|-------|
| **O** | Organizations | 00–05 | General, maintenance policy, operations org, airworthiness |
| **P** | Programs | 06–12 | Dimensions, lifting, leveling, towing, parking, servicing |
| **T** | Technologies | 20–80 | All on-board systems (airframe, avionics, propulsion, etc.) |
| **I** | Infrastructures | 03*, 08*, 10*, 12*, 85, IN-XX | Ground support, H₂ logistics, facilities |
| **N** | Neural Networks | 95, 96, 97, 98 | AI/ML, traceability, DPP, governance |

*Note: Some chapters appear in multiple axes with different sub-scopes*

---

## Directory Structure

```
OPT-IN_FRAMEWORK/
├── O-ORGANIZATIONS/                # ATA 00–05
├── P-PROGRAMS/                     # ATA 06–12
├── T-TECHNOLOGIES_.../             # ATA 20–80 (on-board systems)
├── I-INFRASTRUCTURES/              # Ground support, H₂ logistics
└── N-NEURAL_NETWORKS/              # Governance, ledger, AI/ML
```

---

## Quick Start

### 1. Navigate by Axis

Choose the axis that matches your domain:

- **[O-ORGANIZATIONS](./O-ORGANIZATIONS/README.md)** — General documentation, maintenance policy, airworthiness
- **[P-PROGRAMS](./P-PROGRAMS/README.md)** — Dimensions, lifting, parking, servicing procedures
- **[T-TECHNOLOGIES](./T-TECHNOLOGIES_AMEDEOPELLICCIA-ON_BOARD_SYSTEMS/README.md)** — All on-board aircraft systems
- **[I-INFRASTRUCTURES](./I-INFRASTRUCTURES/README.md)** — Ground support equipment, H₂ supply chain
- **[N-NEURAL_NETWORKS](./N-NEURAL_NETWORKS/README.md)** — AI/ML, traceability, DPP ledger

### 2. Find Your ATA Chapter

See [00_INDEX.md](./00_INDEX.md) for a complete cross-reference of all ATA chapters and their locations.

### 3. Start Contributing

Follow the [ATA Chapter Onboarding Guide](../docs/ATA_CHAPTER_ONBOARDING.md) for step-by-step instructions.

---

## Architecture Principles

### Knowledge-Information Separation

Every ATA chapter follows the KI-DM (Knowledge and Information Data Model):

- **GENESIS** — Uncertainty discovery (O-KNOT, Y-KNOT, KNOT)
- **KDB** — Knowledge Data Base (authoritative engineering truth)
- **IDB** — Information Data Base (consumable publications)

### Contract-Based Transformation

ASIT (Aircraft System Information Transponder) agents execute deterministic transformations:

- KDB → CSDB (S1000D data modules)
- CSDB → EXPORT (PDF/HTML deliverables)
- CSDB → IETP (Interactive viewer)

---

## Related Documentation

- [ATA Chapter Scaling Framework](../docs/ATA_CHAPTER_SCALING_FRAMEWORK.md)
- [ATA Chapter Onboarding Guide](../docs/ATA_CHAPTER_ONBOARDING.md)
- [CSDB Compliance & Validation](../docs/CSDB_COMPLIANCE_VALIDATION.md)
- [AMPEL360 Q100 Main README](../README.md)

---

## License

This framework is part of the AMPEL360 Q100 program and follows the project's licensing terms (CC0 1.0 Universal).
