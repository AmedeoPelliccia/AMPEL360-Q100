# ATA 00-01 — Programme Aggregation & Authority

**ATA Address:** ATA-00-01-00-00  
**Section:** 00-01  
**Title:** Programme — Aggregation, Authority, and Governance  
**Chapter:** [ATA 00 — General](../../)  
**Axis:** [O-ORGANIZATIONS](../../../)

---

## 1. Overview

**Section 00-01** establishes the **programmatic root of reality** for AMPEL360 Q100.

This section answers:
- **What is this programme?**
- **Why does it exist?**
- **Who has authority?**
- **How is the repository structured?**
- **Where is truth located?**

This is the **organizational genesis** that precedes technical GENESIS. Without this anchoring, GENESIS floats without authority.

---

## 2. Purpose

Section 00-01 provides:

1. **Programme Aggregator** — The single authoritative spine of AMPEL360 Q100
2. **Governance Model** — Decision rights, roles, and change rules
3. **Architecture Overview** — GENESIS / SSOT / CSDB / NU flows
4. **Navigation** — Repository map (human + machine readable)
5. **Registry Semantics** — Where registries live and what they mean

---

## 3. Folder Structure

```
00-01-programme/
├── README.md                               # This file
├── 00_INDEX.md                             # Quick navigation
│
├── GENESIS/                                 # Programme uncertainty & intent
│   ├── README.md                            # Why the programme exists
│   │
│   ├── 01_PROGRAM_AGGREGATOR/               # Single authoritative programme spine
│   │   ├── README.md
│   │   ├── 00_NAVIGATION.md                 # Repo map (human + machine)
│   │   ├── 01_ARCHITECTURE_OVERVIEW.md       # GENESIS / SSOT / CSDB / NU flows
│   │   ├── 02_GOVERNANCE_MODEL.md            # Decision rights, roles, change rules
│   │   └── 03_REGISTRIES.md                  # Where registries live + semantics
│   │
│   └── O-KNOT/                               # Programme-level uncertainties
│       └── O-KNOT-PRG-0001/
│           └── discovery.yaml
│
└── SSOT/                                     # Programme authority (light)
    └── LC00_PROGRAM_BASELINE/
        └── programme_baseline.md
```

---

## 4. Programme Aggregator

The **Programme Aggregator** ([01_PROGRAM_AGGREGATOR/](./GENESIS/01_PROGRAM_AGGREGATOR/)) is the **single authoritative spine** of AMPEL360 Q100.

It provides:

| Document | Purpose |
|----------|---------|
| **00_NAVIGATION.md** | Complete repository map and navigation guide |
| **01_ARCHITECTURE_OVERVIEW.md** | GENESIS → SSOT → CSDB → NU information flow |
| **02_GOVERNANCE_MODEL.md** | Who decides what, change control process |
| **03_REGISTRIES.md** | Registry locations, semantics, and management |

---

## 5. Ontological Position

**Programme aggregation comes BEFORE technical systems:**

```
EU Policy & Funding Intent (00-02)
    ↓
Programme Authority (00-01) ← YOU ARE HERE
    ↓
Information System Ontology (00-00)
    ↓
Technical Systems (T-TECHNOLOGIES)
```

This ensures:
- Programme has **public mandate** (from 00-02)
- Programme has **authority structure** (from 00-01)
- Systems have **information architecture** (from 00-00)
- Work is **organized and traceable** (everywhere else)

---

## 6. Key Principles

### Principle 1: Programme Authority is Explicit

The programme does not "emerge" from work. It is **declared** here with:
- **Purpose** — Why AMPEL360 Q100 exists
- **Scope** — What is included and excluded
- **Governance** — Who has decision rights
- **Structure** — How work is organized

### Principle 2: GENESIS Precedes SSOT (Even at Programme Level)

Even at the programme level:
- **GENESIS** contains intent, framing, and uncertainties
- **SSOT** contains authoritative baselines and decisions

Programme-level uncertainties (O-KNOT-PRG-*) live in GENESIS.

### Principle 3: This Enables Truthful Claims

With 00-01 in place, you can now legitimately say:

> **"AMPEL360 Q100 is a formally governed programme with explicit authority, structured information architecture, and traceable knowledge flows."**

---

## 7. Relationship to Other Sections

| Section | Relationship |
|---------|-------------|
| **00-00** (Information System) | Provides ontology, GENESIS/SSOT rules, TEKNIA/KBL framework |
| **00-02** (Policy & Funding) | Provides EU mandate and funding justification |
| **00-90** (Tables/Schemas) | Provides reference schemas and tables |
| **T-TECHNOLOGIES** | Consume programme structure for technical work |

---

## 8. Navigation

- ↑ [ATA 00 Chapter](../../)
- → [00_INDEX.md](./00_INDEX.md) — Quick navigation
- → [GENESIS/01_PROGRAM_AGGREGATOR/](./GENESIS/01_PROGRAM_AGGREGATOR/) — Programme spine
- → [SSOT/LC00_PROGRAM_BASELINE/](./SSOT/LC00_PROGRAM_BASELINE/) — Authoritative baseline
- → [00-00-general](../00-00-general/) — Information system ontology
- → [00-02-policy-and-funding](../00-02-policy-and-funding/) — EU policy anchors

---

## 9. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial section for programme aggregation & authority |

---

*Section 00-01 establishes the programmatic root of reality for AMPEL360 Q100.*

*This is where the programme begins.*
