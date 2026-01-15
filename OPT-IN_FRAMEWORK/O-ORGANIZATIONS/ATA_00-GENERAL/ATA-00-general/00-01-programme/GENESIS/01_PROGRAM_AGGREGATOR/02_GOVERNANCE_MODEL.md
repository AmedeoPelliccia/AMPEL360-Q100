# 02_GOVERNANCE_MODEL — Decision Rights and Change Control

**Purpose:** Define who decides what and how changes are managed  
**Audience:** Programme managers, technical leads, stakeholders  
**Status:** Authoritative

---

## 1. Governance Principle

> **Authority is explicit, traceable, and subject to change control.**

---

## 2. Stakeholder Roles (STK_*)

| Role | Area of Responsibility | Decision Authority |
|------|----------------------|-------------------|
| **STK_PMO** | Programme management | Programme-level decisions, funding, timeline |
| **STK_CM** | Configuration management | GENESIS/SSOT structure, change control |
| **STK_SE** | Systems engineering | Technical architecture, requirements |
| **STK_SAF** | Safety | Safety analysis, hazard management |
| **STK_CERT** | Certification | Regulatory compliance, cert evidence |
| **STK_OPS** | Operations | Operational procedures, maintenance |
| **STK_TEST** | Verification | Test plans, validation evidence |
| **STK_AI** | AI/ML systems | AI/ML models, synthetic data |
| **STK_DATA** | Data management | SSOT integrity, DPP, KBL |
| **STK_PUB** | Publications | CSDB, IETP, AMM deliverables |

---

## 3. Decision Levels

| Level | Examples | Authority | Process |
|-------|----------|-----------|---------|
| **Programme** | Scope changes, major milestones | STK_PMO + consortium agreement | O-KNOT-PRG-* → approval |
| **Technical** | System architecture, LC structure | STK_SE + STK_CM | O-KNOT → Y-KNOT → KNOT → SSOT |
| **Domain** | ATA-specific decisions | Domain STK (per RACI) | Per-ATA KNOT closure |
| **Operational** | Day-to-day execution | Artifact owners | Standard workflow |

---

## 4. Change Control Process

### 4.1 For Programme-Level Changes

```
1. Discovery: O-KNOT-PRG-* created in 00-01/GENESIS/O-KNOT/
2. Justification: Y-KNOT-PRG-* analyses options
3. Framing: KNOT-PRG-* defines scope
4. Authorization: SSOT/LC00_PROGRAM_BASELINE updated
5. Implementation: Changes cascade to affected ATAs
6. Verification: Change verified, KNOT closed
```

### 4.2 For Technical Changes

```
1. Discovery: O-KNOT created in ATA_XX/GENESIS/O-KNOT/
2. Justification: Y-KNOT analyses impact
3. Framing: KNOT defines work scope
4. Authorization: SSOT/LC01 KNOT approved
5. Execution: KNUs produced in LC02-LC14
6. Closure: Residual ≤ target, TT distributed
```

---

## 5. RACI Matrix (Programme Level)

| Activity | R (Responsible) | A (Accountable) | C (Consulted) | I (Informed) |
|----------|----------------|-----------------|---------------|--------------|
| Programme scope | STK_PMO | STK_PMO | All STKs | Consortium |
| Repository structure | STK_CM | STK_CM | STK_SE, STK_DATA | All STKs |
| GENESIS/SSOT rules | STK_CM | STK_PMO | STK_SE, STK_DATA | All STKs |
| Funding allocation | STK_PMO | Consortium | STK_CM | All STKs |
| Safety baseline | STK_SAF | STK_SAF | STK_SE, STK_CERT | STK_PMO |
| Certification strategy | STK_CERT | STK_CERT | STK_SAF, STK_SE | STK_PMO |

---

## 6. Conflict Resolution

**Hierarchy:**
1. Programme Director (final authority)
2. Technical Director (technical disputes)
3. Configuration Manager (structural disputes)
4. Domain STK leads (domain disputes)

---

## 7. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial governance model |

---

*This governance model defines decision authority for AMPEL360 Q100.*
