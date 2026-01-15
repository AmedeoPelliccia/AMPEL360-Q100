# KNU Reward Breakdown Methodology

**Purpose:** Define how Teknia Token (TT) rewards are allocated at the individual KNU level  
**Authority:** STK_PMO + TOKENOMICS_TT.yaml  
**Version:** 1.0

---

## 1. Overview

The **KNU_reward_breakdown** provides granular visibility into how TT rewards are distributed across individual Knowledge Units (KNUs) within a KNOT closure event.

---

## 2. KNU Allocation Formula

For each KNU within a KNOT:

```
TT_knu = (E_knu / E_total) × C_knu × U_knu × P_knot
```

Where:
- **E_knu** = Effort hours for this KNU
- **E_total** = Total effort hours across all KNUs in KNOT
- **C_knu** = Complexity factor (0.5 - 2.0)
- **U_knu** = Uncertainty contribution (% of total uncertainty resolved)
- **P_knot** = Total TT pool for the KNOT

---

## 3. Complexity Factor (C_knu)

Complexity factors adjust for KNU difficulty:

| Factor | Description | Examples |
|--------|-------------|----------|
| **0.5** | Simple/routine | Documentation updates, straightforward tests |
| **0.8** | Below average | Standard requirements, basic analyses |
| **1.0** | Average | Typical design work, standard verification |
| **1.2** | Above average | Complex requirements, integration work |
| **1.5** | High | Safety-critical analysis, novel designs |
| **2.0** | Exceptional | Breakthrough innovation, cross-domain integration |

**Assignment:** Determined by KNOT owner with STK_PMO approval during KNU planning (KNU_PLAN.csv).

---

## 4. Uncertainty Contribution (U_knu)

Measures the KNU's contribution to total uncertainty reduction:

```
U_knu = (Residual_before - Residual_after)_knu / (Residual_total_reduction)_knot
```

**Expressed as:** Percentage of total uncertainty resolved (0-100%)

**Example:**
- KNOT total reduction: 100% → 12% = 88% reduction
- KNU contributes 10% reduction
- U_knu = 10/88 = ~11.4% of total reduction

---

## 5. Contributor Attribution within KNU

### 5.0 Single Authorship Rule (Governance)

**CRITICAL RULE:** Each KNU artifact file has **1 single authorship assignment**.

If multiple contributors co-author the same KNU artifact files:
- **TT reward distribution** is conditioned by a **pre-committed agreement** between parties
- Agreement must be documented **before KNU execution begins** in `KNU_PLAN.csv` or `RACI.csv`
- Agreement specifies exact TT share allocation (e.g., 60/40, 50/50, or custom split)
- **Blockchain ledger records the agreement** in the KNU_reward_breakdown
- **Disputes avoided** through advance clarity

**Example:**
```
KNU: LC04-HMI-DESIGN
Primary author: ahmed.hassan (60% of KNU TT)
Co-author: john.smith (40% of KNU TT)
Pre-committed agreement signed: 2026-01-13T08:00:00Z
```

Without a pre-committed agreement, **default attribution = 100% to primary contributor**.

---

### 5.1 Primary Contributor

The main author/owner of the KNU:
- **contribution_type:** "primary"
- **tt_share:** Base allocation from TT_knu (or % per pre-committed agreement)

### 5.2 Co-Author Contributors

When multiple people co-author the same KNU artifacts:
- **contribution_type:** "co_author"
- **tt_share:** Per pre-committed agreement (mandatory)
- **agreement_reference:** Path to signed agreement document

### 5.3 Supporting Contributors

Collaborators who assist but don't co-author:
- **contribution_type:** "supporting"
- **tt_share:** Fraction of TT_knu (defined in RACI matrix)

### 5.4 Review Contributors

Reviewers/approvers:
- **contribution_type:** "review"
- **tt_share:** Small fraction of TT_knu (typically 5-10%)

### 5.5 Spillover Bonus

For cross-KNOT/cross-ATA contributions:
- **contribution_type:** "spillover_bonus"
- **spillover_multiplier:** 0.0 - 2.0 (λ parameter)
- **tt_share:** Additional TT on top of primary allocation

**Formula:** `TT_spillover = TT_base × λ`

---

## 6. Example: KNOT-25-10-001

### Total KNOT Pool: 150.0 TT

| KNU ID | Lifecycle | Title | TT Allocated | Complexity | Uncertainty % | Effort (h) |
|--------|-----------|-------|--------------|------------|---------------|------------|
| LC02-SEAT-LAYOUT | LC02 | Crew Seat Layout | 18.5 | 1.2 | 10% | 45 |
| LC03-SAFETY | LC03 | Safety Analysis | 28.0 | 1.5 | 18% | 65 |
| LC03-CERT | LC03 | Cert Compliance | 12.0 | 1.0 | 8% | 30 |
| LC04-ICD | LC04 | Compartment ICD | 16.2 | 1.1 | 12% | 42 |
| LC04-HMI | LC04 | HMI Design | 22.5 | 1.4 | 15% | 52 |
| LC05-ERGONOMICS | LC05 | Ergonomics | 10.8 | 1.0 | 9% | 33 |
| LC05-AI-ASSIST | LC05 | AI Crew Assist | 10.3 | 1.3 | 8% | 23 |
| LC06-MOCKUP | LC06 | Mockup Test | 11.8 | 1.1 | 10% | 28 |
| LC06-EGRESS | LC06 | Egress Test | 10.2 | 1.2 | 8% | 30 |
| LC06-VALIDATION | LC06 | Validation Report | 9.7 | 0.9 | 7% | 22 |

**Total:** 150.0 TT (with rounding adjustments)

### Detailed Example: LC04-HMI (Human-Machine Interface Design)

**TT_knu = 22.5**

**Contributors:**
1. **Ahmed Hassan (STK_AI)** - Primary
   - Effort: 52 hours
   - Base TT: 19.6
   - Spillover multiplier: 0.15 (cross-ATA contribution)
   - Spillover bonus: 2.9
   - **Total: 22.5 TT**

**Spillover justification:** HMI design for flight compartment also benefits:
- ATA-31 (Instruments) — cockpit display integration
- ATA-34 (Navigation) — navigation system interface

---

### Co-Authorship Example: LC02-SEAT-LAYOUT (Hypothetical)

**Scenario:** Two contributors co-author the same KNU artifact files.

**Pre-Committed Agreement:**
```yaml
knu_id: KNU-25-10-001-LC02-SEAT-LAYOUT-REQ
agreement_type: co_authorship
signed_date: 2026-01-09T10:00:00Z
signatories:
  - john.smith (STK_SE) - 70% TT share
  - susan.wong (STK_SE) - 30% TT share
agreement_path: "SSOT/LC01_PROBLEM_STATEMENT/KNOT-25-10-001/agreements/co_authorship_LC02.yaml"
witness: STK_PMO
```

**TT Allocation (TT_knu = 18.5):**
- **John Smith:** 18.5 × 0.70 = **12.95 TT**
- **Susan Wong:** 18.5 × 0.30 = **5.55 TT**

**Blockchain Record:**
```json
{
  "knu_id": "KNU-25-10-001-LC02-SEAT-LAYOUT-REQ",
  "lifecycle": "LC02",
  "title": "Crew Seat Layout Requirements",
  "tt_allocated": 18.5,
  "contributors": [
    {
      "contributor_id": "john.smith",
      "role": "STK_SE",
      "contribution_type": "primary",
      "effort_hours": 32,
      "tt_share": 12.95,
      "agreement_reference": "SSOT/.../agreements/co_authorship_LC02.yaml"
    },
    {
      "contributor_id": "susan.wong",
      "role": "STK_SE",
      "contribution_type": "co_author",
      "effort_hours": 13,
      "tt_share": 5.55,
      "agreement_reference": "SSOT/.../agreements/co_authorship_LC02.yaml"
    }
  ]
}
```

**Key Points:**
- ✅ Agreement signed **before** KNU execution
- ✅ Clear percentage split (70/30)
- ✅ Both contributors recorded in blockchain
- ✅ No disputes at closure time
- ✅ Single authorship maintained (john.smith = primary, susan.wong = co_author)

---

## 7. Validation Rules

### 7.1 Conservation Law

```
∑ TT_knu = P_knot
```

Sum of all KNU allocations must equal KNOT pool (within rounding tolerance).

### 7.2 Effort Proportionality

Higher effort generally receives higher TT, adjusted by complexity and uncertainty contribution.

### 7.3 Transparency

All allocations must be explainable and documented in:
- `TOKENOMICS_TT.yaml` (initial pool and complexity factors)
- `KNU_PLAN.csv` (KNU definitions and planned effort)
- `AWARDS_TT.csv` (final distribution after closure)

---

## 8. Blockchain Recording

Each KNU allocation is recorded in the blockchain ledger:

```json
"KNU_reward_breakdown": [
  {
    "knu_id": "KNU-25-10-001-LC02-SEAT-LAYOUT-REQ",
    "lifecycle": "LC02",
    "title": "Crew Seat Layout Requirements",
    "tt_allocated": 18.5,
    "complexity_factor": 1.2,
    "uncertainty_contribution": 10,
    "contributors": [
      {
        "contributor_id": "john.smith",
        "role": "STK_SE",
        "contribution_type": "primary",
        "effort_hours": 45,
        "tt_share": 18.5
      }
    ]
  }
]
```

---

## 9. Dispute Resolution

If contributors disagree with KNU allocation:

1. **Review:** KNOT owner reviews allocation methodology
2. **Justification:** Provide detailed breakdown of C_knu, U_knu, effort
3. **Escalation:** If unresolved, escalate to STK_PMO
4. **Adjustment:** If justified, adjust allocation and record in ledger
5. **Transparency:** All adjustments documented with rationale

---

## 10. Pre-Committed Agreements (Co-Authorship)

### 10.1 Purpose

When multiple contributors will co-author the same KNU artifact files, a **pre-committed agreement** must be established **before work begins**.

### 10.2 Agreement Template

```yaml
# Co-Authorship Agreement
knu_id: KNU-{ATA}-{SEC}-{SUB}-LC{NN}-{TITLE}
agreement_type: co_authorship
signed_date: YYYY-MM-DDTHH:MM:SSZ

signatories:
  - contributor_id: {user_id}
    role: {STK_role}
    tt_share_percentage: {0-100}
    responsibilities: "{description}"
  
  - contributor_id: {user_id}
    role: {STK_role}
    tt_share_percentage: {0-100}
    responsibilities: "{description}"

witness: STK_PMO
witness_signature_date: YYYY-MM-DDTHH:MM:SSZ

storage_path: "SSOT/LC01_PROBLEM_STATEMENT/{KNOT-ID}/agreements/co_authorship_{knu_short_id}.yaml"
```

### 10.3 Validation Rules

- ✅ Sum of `tt_share_percentage` must equal 100%
- ✅ Minimum 2 signatories required
- ✅ Agreement must be signed before KNU `_executions/` begin
- ✅ All signatories must have valid STK roles
- ✅ Witness signature required (STK_PMO or delegated authority)

### 10.4 Recording in Blockchain

Co-authored KNUs record agreement reference:

```json
"contributors": [
  {
    "contributor_id": "john.smith",
    "contribution_type": "primary",
    "tt_share": 12.95,
    "agreement_reference": "SSOT/.../co_authorship_LC02.yaml",
    "agreement_date": "2026-01-09T10:00:00Z"
  },
  {
    "contributor_id": "susan.wong",
    "contribution_type": "co_author",
    "tt_share": 5.55,
    "agreement_reference": "SSOT/.../co_authorship_LC02.yaml",
    "agreement_date": "2026-01-09T10:00:00Z"
  }
]
```

### 10.5 Default Behavior (No Agreement)

If no pre-committed agreement exists:
- **100% TT allocation to primary contributor** (first to commit to KNU_PLAN.csv)
- Supporting contributors receive separate TT for separate KNU contributions
- Co-authorship disputes **cannot be resolved retroactively**

### 10.6 Amendment Process

Agreements can be amended **only before KNU closure**:
1. All original signatories must approve amendment
2. Amendment recorded with new signature date
3. STK_PMO re-witnesses amended agreement
4. Blockchain records amendment history

---

## 11. Benefits of KNU-Level Breakdown

### 11.1 Granular Attribution

Contributors can see exactly which KNUs earned which TT amounts.

### 11.2 Fairness

Clear methodology prevents arbitrary or biased allocations.

### 11.3 Incentive Alignment

High-complexity, high-uncertainty KNUs receive proportionally higher rewards.

### 11.4 Audit Trail

Complete transparency for EU auditors and consortium partners.

### 11.5 Reusability

KNU allocation patterns can inform future TOKENOMICS_TT.yaml definitions.

---

## 12. Relation to Contributor-Level Rewards

**Contributor total TT** = Sum of TT shares across all KNUs they contributed to.

**Example: John Smith (STK_SE)**
- KNU-LC02-SEAT-LAYOUT: 18.5 TT
- KNU-LC04-ICD: 16.2 TT
- KNU-LC05-ERGONOMICS: 10.8 TT
- **Total: 45.5 TT**

This matches the contributor-level summary in the `contributors` array.

---

## 12. Schema Integration

The KNU_reward_breakdown integrates with:

- **tt_transaction_schema.json** — Transaction recording
- **nku_production_schema.json** — NKU completion events
- **ledger.json** — Blockchain ledger entries

---

## 13. References

### Internal

- [finance/README.md](../README.md) — KBL overview
- [finance/blockchain/ledger.json](../blockchain/ledger.json) — Blockchain ledger
- [TEKNIA_MANIFESTO.md](../../TEKNIA_MANIFESTO.md) — NKU concepts

### SSOT Artifacts

- `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS_TT.yaml` — Initial TT pool and parameters
- `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv` — KNU definitions
- `SSOT/LC01_PROBLEM_STATEMENT/AWARDS_TT.csv` — Final distribution
- `SSOT/LC01_PROBLEM_STATEMENT/{KNOT-ID}/agreements/co_authorship_*.yaml` — Pre-committed co-authorship agreements

---

## 14. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial KNU reward breakdown methodology |
| 2026-01-15 | STK_PMO | Added single authorship rule and pre-committed co-authorship agreements (Section 5.0, 10) |

---

*This methodology ensures fair, transparent, and auditable TT distribution at the granular KNU level.*
