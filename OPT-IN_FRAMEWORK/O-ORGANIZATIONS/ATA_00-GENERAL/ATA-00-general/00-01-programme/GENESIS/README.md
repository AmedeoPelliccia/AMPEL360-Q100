# Programme GENESIS — Intent and Authority

**Location:** `O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-01-programme/GENESIS/`  
**Purpose:** Programme intent, authority, and organizational uncertainty  
**Nature:** Organizational genesis — **PRECEDES TECHNICAL GENESIS**

---

## 1. Overview

This GENESIS space contains the **programme-level intent and authority** that precedes all technical work.

It answers:
- **Why does AMPEL360 Q100 exist?**
- **What is the programme trying to achieve?**
- **Who has authority to make decisions?**
- **How is work organized and governed?**

---

## 2. Programme Intent

### 2.1 Programme Mission

AMPEL360 Q100 exists to:

1. **Demonstrate** climate-neutral aviation through hydrogen-electric propulsion
2. **Validate** BWB configuration for regional aircraft segment
3. **Establish** digital engineering baseline (GENESIS/SSOT/TEKNIA)
4. **Enable** EU NetZero objectives through verifiable knowledge production
5. **Create** certification-ready evidence for disruptive aircraft technologies

### 2.2 Programme Scope

| In-Scope | Out-of-Scope |
|----------|--------------|
| ~100 passenger regional aircraft concept | Wide-body or narrow-body commercial aircraft |
| H₂ PEM fuel cell propulsion | SAF or conventional turbofans |
| BWB aerodynamic configuration | Conventional tube-and-wing |
| Digital Product Passport (DPP) | Legacy paper-based traceability |
| TEKNIA/KBL knowledge management | Ad-hoc documentation |
| EU-funded demonstration | Commercial production |

---

## 3. Authority Structure

### 3.1 Programme Governance

Authority is vested in defined roles:

| Role | Authority | Location |
|------|-----------|----------|
| **Programme Director** | Overall programme decisions | Consortium agreement |
| **Technical Director** | System architecture, SSOT authority | GENESIS/02_GOVERNANCE_MODEL.md |
| **Configuration Manager** | GENESIS/SSOT structure | ATA 00-01, 00-00 |
| **Stakeholder Groups (STK_*)** | Domain-specific decisions | Per-ATA RACI matrices |

### 3.2 Change Control

All programme-level changes follow:

1. **Discovery** — O-KNOT-PRG-* for programme uncertainties
2. **Justification** — Y-KNOT-PRG-* for decision logic
3. **Framing** — KNOT-PRG-* for planning intent
4. **Authorization** — SSOT/LC00_PROGRAM_BASELINE update

See: [02_GOVERNANCE_MODEL.md](./01_PROGRAM_AGGREGATOR/02_GOVERNANCE_MODEL.md)

---

## 4. Programme Aggregator

The **Programme Aggregator** ([01_PROGRAM_AGGREGATOR/](./01_PROGRAM_AGGREGATOR/)) is the single authoritative spine containing:

- **Navigation** — Repository map
- **Architecture** — Information flows
- **Governance** — Decision rights
- **Registries** — Where truth is recorded

This is the **programmatic root of reality**.

---

## 5. Programme-Level Uncertainties

Programme-level uncertainties use the prefix **PRG**:

Example:
```
O-KNOT-PRG-0001: Programme Scope Boundary Definition
Y-KNOT-PRG-0001-001: Scope Decision Justification
KNOT-PRG-0001: Scope Framing & Acceptance Criteria
```

These are recorded in `O-KNOT/` within this GENESIS space.

---

## 6. Relationship to Other GENESIS Spaces

```
Programme GENESIS (00-01)           ← Organizational intent
    ↓
Information System GENESIS (00-00)  ← Structural ontology
    ↓
Technical System GENESIS (per-ATA)  ← System-specific uncertainties
```

Programme GENESIS is the **root**. All other GENESIS spaces derive authority from it.

---

## 7. Key Principle

> **Programme authority cannot be inferred from work products. It must be declared explicitly.**

This GENESIS space provides that declaration.

---

## 8. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial programme GENESIS README |

---

*Programme GENESIS provides the organizational intent that precedes all technical work.*
