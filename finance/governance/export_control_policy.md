# Data Export Control Policy

**Purpose:** Define data classification, export control rules, and compliance requirements  
**Authority:** STK_PMO + Consortium Agreement  
**Status:** Authoritative  
**Version:** 1.0

---

## 1. Overview

This policy governs the **classification, access control, and export** of AMPEL360 Q100 data in compliance with:

- **EU Dual-Use Regulation 2021/821**
- **ITAR (International Traffic in Arms Regulations)** — if applicable
- **EAR (Export Administration Regulations)** — if applicable
- **EU GDPR** — for personal data
- **Consortium Agreement** — partner rights and obligations

---

## 2. Data Classification

### 2.1 Classification Levels

| Level | Definition | Examples | Export Control |
|-------|------------|----------|----------------|
| **PUBLIC** | Publicly available, no restrictions | Publications, open-source code, marketing materials | ✅ Unrestricted |
| **CONSORTIUM** | Restricted to consortium partners under NDA | Test data, preliminary designs, internal reports | ⚠️ NDA required |
| **CONFIDENTIAL** | Highly sensitive, partner-proprietary | Proprietary IP, trade secrets, competitive data | ❌ Restricted export |
| **EXPORT_CONTROLLED** | Dual-use technology or ITAR/EAR regulated | H₂ propulsion specs, AI flight control algorithms | ❌ Government approval required |

### 2.2 Classification Assignment

**Responsibility:** Data owner (per RACI matrix) classifies artifacts at creation.

**Review:** STK_PMO reviews classification quarterly.

**Marking:** All files must include classification header:
```yaml
---
classification: CONSORTIUM
export_control: NONE
owner: STK_SE
reviewed_date: 2026-01-15
---
```

---

## 3. Access Control

### 3.1 Role-Based Access Control (RBAC)

Access is governed by role:

| Role | PUBLIC | CONSORTIUM | CONFIDENTIAL | EXPORT_CONTROLLED |
|------|--------|------------|--------------|-------------------|
| **STK_PMO** | RW | RW | RW | RW |
| **STK_CM** | RW | RW | R | R |
| **STK_SE** | RW | RW | R | R |
| **STK_SAF** | RW | RW | R | R |
| **STK_CERT** | RW | RW | R | None |
| **STK_PUB** | RW | R | None | None |
| **Partner_Lead** | RW | RW | RW (own IP) | R (approved) |
| **External_Reviewer** | R | None | None | None |

**Permissions:** R=Read, W=Write, RW=Read+Write, None=No Access

### 3.2 Access Request Process

1. Requester submits access request via `finance/tools/access_request.py`
2. Data owner reviews request
3. STK_PMO approves/rejects
4. Access granted if approved
5. Audit logged in `governance/audit_log.csv`

---

## 4. Export Control Compliance

### 4.1 Dual-Use Technology

**Applicable Regulation:** EU Regulation 2021/821

**Sensitive Areas in Q100:**
- H₂ fuel cell systems (potential dual-use)
- AI/ML flight control (autonomous systems)
- Advanced composite materials (if used)

**Compliance:**
- Export classification documented per artifact
- Government approval obtained before external export
- End-use statement required from recipient

### 4.2 ITAR (If Applicable)

**Applicability:** If Q100 involves US-origin technology or collaboration with US entities.

**Requirements:**
- ITAR classification in `data_classification.csv`
- Technical Assistance Agreement (TAA) for foreign partners
- No export without State Department approval

### 4.3 EAR (If Applicable)

**Applicability:** If Q100 involves commercial dual-use items.

**Requirements:**
- ECCN (Export Control Classification Number) assigned
- License exception verified or license obtained
- Destination screening against denied parties list

---

## 5. Data Export Process

### 5.1 Internal Transfer (CONSORTIUM)

**Allowed:** Between consortium partners under NDA.

**Process:**
1. Verify recipient is consortium member
2. Log transfer in `audit_log.csv`
3. No government approval required

### 5.2 External Transfer (NON-CONSORTIUM)

**Allowed:** Only for PUBLIC or approved CONSORTIUM/CONFIDENTIAL data.

**Process:**
1. Submit export request: `python finance/tools/export_request.py`
2. Classification check: `python finance/tools/export_compliance_checker.py`
3. STK_PMO approval required
4. Government approval if EXPORT_CONTROLLED
5. Transfer logged in `audit_log.csv`
6. Hash recorded in KBL

### 5.3 Publication (PUBLIC)

**Allowed:** After consortium review and EU acknowledgment added.

**Process:**
1. Draft publication prepared
2. Consortium review (2 weeks)
3. EU funding acknowledgment added
4. STK_PMO approval
5. Publication released
6. Metadata recorded in KBL

---

## 6. Data Retention

| Classification | Retention Period | Destruction Method |
|----------------|------------------|-------------------|
| **PUBLIC** | Permanent (archive) | N/A (public domain) |
| **CONSORTIUM** | Programme duration + 10 years | Secure deletion (NIST 800-88) |
| **CONFIDENTIAL** | Programme duration + 25 years | Secure deletion (NIST 800-88) |
| **EXPORT_CONTROLLED** | As required by regulation | Government-approved method |

---

## 7. Breach Response

### 7.1 Unauthorized Export Detected

1. **Immediate:** Notify STK_PMO and data owner
2. **Assessment:** Determine classification and impact
3. **Containment:** Revoke access, retrieve exported data if possible
4. **Notification:** Inform consortium, EU programme officer, government authorities (if required)
5. **Remediation:** Update access controls, re-classify data if needed
6. **Documentation:** Incident report filed, audit log updated

### 7.2 Classification Error

If data is mis-classified:
1. **Correction:** Update classification immediately
2. **Notification:** Inform all parties who accessed data
3. **Recall:** Request return/deletion if inappropriately exported
4. **Review:** Audit classification process, update training

---

## 8. Compliance Audit

### 8.1 Regular Audits

**Frequency:** Quarterly

**Scope:**
- Review `audit_log.csv` for anomalies
- Verify classification accuracy
- Check export approvals
- Validate hash chain integrity (KBL)

**Responsibility:** STK_PMO + STK_CM

### 8.2 EU Programme Audits

**Frequency:** As requested by EU programme officer

**Deliverables:**
- Export log summary
- Classification register
- Compliance attestation
- KBL provenance report

---

## 9. Training

All consortium members must complete:

- **Data classification training** (annual)
- **Export control compliance training** (annual, for relevant roles)
- **ITAR/EAR training** (if applicable)

**Tracking:** Training completion logged in `governance/training_log.csv`

---

## 10. References

### Regulations

- [EU Regulation 2021/821 (Dual-Use)](https://eur-lex.europa.eu/eli/reg/2021/821/oj)
- [US ITAR (22 CFR 120-130)](https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M)
- [US EAR (15 CFR 730-774)](https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear)
- [EU GDPR](https://gdpr.eu/)

### Internal

- [finance/governance/access_control_matrix.csv](./access_control_matrix.csv)
- [finance/governance/data_classification.csv](./data_classification.csv)
- [finance/blockchain/ledger.json](../blockchain/ledger.json)

---

## 11. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial export control policy |

---

*This policy is authoritative and binding on all AMPEL360 Q100 consortium members.*
