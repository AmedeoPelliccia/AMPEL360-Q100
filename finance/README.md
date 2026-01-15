# Finance — Teknia Token Blockchain Ledger

**Purpose:** Knowledge Blockchain Ledger (KBL) implementation for Teknia Token (TT) rewards, transactions, and data governance  
**Status:** Active  
**Version:** 1.0

---

## 1. Overview

The **finance/** directory implements the **Knowledge Blockchain Ledger (KBL)** for AMPEL360 Q100, providing:

1. **Teknia Token (TT) Ledger** — Immutable reward and transaction tracking
2. **Transaction Hash Registry** — Cryptographic provenance chain
3. **Data Export Control Governance** — Compliance and access control
4. **Data Transfer Schemas** — Standardized data exchange formats

---

## 2. Directory Structure

```
finance/
├── README.md                           # This file
│
├── blockchain/                         # Blockchain ledger implementation
│   ├── ledger.json                     # Main KBL ledger (immutable chain)
│   ├── genesis_block.json              # Genesis block (programme initialization)
│   ├── transaction_registry.csv        # Queryable transaction index
│   └── hash_chain_validator.py         # Ledger integrity validator
│
├── schemas/                            # Data transfer schemas
│   ├── tt_transaction_schema.json      # TT reward transaction format
│   ├── nku_production_schema.json      # NKU completion event format
│   ├── knot_closure_schema.json        # KNOT closure event format
│   ├── data_export_schema.json         # Export control metadata format
│   └── tektok_license_schema.json      # TEKTOK knowledge use license
│
├── governance/                         # Export control and governance
│   ├── export_control_policy.md        # Data classification and export rules
│   ├── access_control_matrix.csv       # Role-based access control (RBAC)
│   ├── data_classification.csv         # Data sensitivity classification
│   └── audit_log.csv                   # Access and export audit trail
│
└── tools/                              # Utility scripts
    ├── tt_distributor.py               # Calculate and distribute TT rewards
    ├── ledger_query.py                 # Query ledger for analytics
    └── export_compliance_checker.py    # Validate export control compliance
```

---

## 3. Teknia Token (TT) System

### 3.1 Purpose

**Teknia Tokens (TT)** incentivize **verifiable uncertainty reduction** by rewarding contributors for:
- Producing Net Knowledge Units (NKUs)
- Closing Knowledge Nodes (KNOTs)
- Creating reusable knowledge artifacts

### 3.2 Token Economics

| Metric | Value |
|--------|-------|
| **Base Unit** | 1 TT = 1 hour of effort-equivalent uncertainty reduction |
| **Pool per KNOT** | Defined in `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS_TT.yaml` |
| **Distribution Formula** | `T_i = P_k · w_i` where `w_i = α·Ê_i + (1-α)·Î_i` |
| **Spillover Multiplier** | `λ` for cross-KNOT contributions |

### 3.3 Distribution Trigger

TT distribution occurs when:
1. KNOT status = **CLOSED**
2. Residual uncertainty ≤ target
3. All KNUs completed and verified
4. Artifacts published to SSOT

---

## 4. Knowledge Blockchain Ledger (KBL)

### 4.1 Ledger Structure

The KBL is an **immutable, append-only ledger** that records:

```json
{
  "ledger_version": "1.0",
  "genesis_hash": "sha256:...",
  "entries": [
    {
      "block_id": 1,
      "timestamp": "2026-01-15T12:00:00Z",
      "event_type": "knot_closure",
      "knot_id": "KNOT-25-10-001",
      "tt_pool": 150.0,
      "contributors": [...],
      "hash": "sha256:...",
      "prev_hash": "sha256:..."
    }
  ]
}
```

### 4.2 Hash Chain

Each block's hash includes:
- Block content (event data, TT distribution, contributors)
- Previous block hash (chain integrity)
- Timestamp (temporal ordering)

**Formula:** `hash(block_n) = SHA256(content + prev_hash + timestamp)`

### 4.3 Integrity Validation

```bash
python finance/blockchain/hash_chain_validator.py
```

Validates:
- ✅ Hash chain continuity
- ✅ No tampering or retroactive changes
- ✅ Timestamp monotonicity
- ✅ TT conservation (total distributed ≤ total allocated)

---

## 5. Transaction Registry

### 5.1 Purpose

`transaction_registry.csv` provides a **queryable index** of all TT transactions:

```csv
Transaction_ID,Timestamp,Event_Type,KNOT_ID,Contributor,TT_Awarded,Block_ID,Hash
TXN-0001,2026-01-15T12:00:00Z,knot_closure,KNOT-25-10-001,STK_SE,45.5,1,sha256:abc...
TXN-0002,2026-01-15T12:00:00Z,knot_closure,KNOT-25-10-001,STK_AI,32.2,1,sha256:abc...
```

### 5.2 Query Examples

```bash
# Get all transactions for a contributor
python finance/tools/ledger_query.py --contributor STK_SE

# Get all transactions for a KNOT
python finance/tools/ledger_query.py --knot KNOT-25-10-001

# Get total TT earned by stakeholder
python finance/tools/ledger_query.py --summary --group-by contributor
```

---

## 6. Data Export Control Governance

### 6.1 Classification Levels

| Level | Description | Export Control | Examples |
|-------|-------------|----------------|----------|
| **PUBLIC** | Open data, no restrictions | ✅ Unrestricted | Publications, open-source code |
| **CONSORTIUM** | Restricted to partners | ⚠️ NDA required | Test data, preliminary designs |
| **CONFIDENTIAL** | Highly sensitive | ❌ Controlled export | Proprietary IP, trade secrets |
| **EXPORT_CONTROLLED** | Dual-use / ITAR | ❌ Gov't approval required | H₂ propulsion specs, AI flight control |

### 6.2 Governance Policy

See: [governance/export_control_policy.md](./governance/export_control_policy.md)

### 6.3 Access Control Matrix

`governance/access_control_matrix.csv` defines role-based permissions:

```csv
Role,PUBLIC,CONSORTIUM,CONFIDENTIAL,EXPORT_CONTROLLED
STK_PMO,RW,RW,RW,RW
STK_SE,RW,RW,R,R
STK_PUB,RW,R,None,None
External_Reviewer,R,None,None,None
```

**Permissions:** R=Read, W=Write, RW=Read+Write, None=No Access

---

## 7. Data Transfer Schemas

### 7.1 Purpose

Standardized JSON schemas for data exchange ensure:
- **Interoperability** across tools and systems
- **Validation** of data integrity
- **Auditability** of data provenance

### 7.2 Key Schemas

| Schema | Purpose | Location |
|--------|---------|----------|
| **tt_transaction_schema.json** | TT reward distribution event | [schemas/](./schemas/) |
| **nku_production_schema.json** | NKU completion and evidence | [schemas/](./schemas/) |
| **knot_closure_schema.json** | KNOT closure certification | [schemas/](./schemas/) |
| **data_export_schema.json** | Export metadata and classification | [schemas/](./schemas/) |
| **tektok_license_schema.json** | Knowledge use license (TEKTOK) | [schemas/](./schemas/) |

### 7.3 Validation

```bash
# Validate transaction against schema
python finance/tools/schema_validator.py \
  --schema schemas/tt_transaction_schema.json \
  --data blockchain/ledger.json
```

---

## 8. Integration with AMPEL360 Q100

### 8.1 GENESIS → SSOT → KBL Flow

```
O-KNOT created
    ↓
Y-KNOT justifies
    ↓
KNOT framed (TOKENOMICS_TT.yaml pool defined)
    ↓
SSOT LC01 authorizes
    ↓
KNUs executed (LC02-LC14)
    ↓
KNOT closed (residual ≤ target)
    ↓
TT distributed (finance/blockchain/ledger.json updated)
    ↓
Hash chain extended (immutable provenance)
```

### 8.2 Provenance Links

Each blockchain entry links back to:
- **GENESIS provenance:** `O-KNOT → Y-KNOT → KNOT`
- **SSOT artifacts:** `KNOT → KNU_PLAN.csv → LC02-LC14 executions`
- **Publications:** `CSDB DMCs`, `PUB/` deliverables

---

## 9. EU Compliance

### 9.1 FAIR Data Principles

| Principle | Implementation |
|-----------|----------------|
| **Findable** | Ledger queryable via `ledger_query.py`, unique transaction IDs |
| **Accessible** | Public blockchain data (non-sensitive), RBAC for sensitive data |
| **Interoperable** | JSON schemas, CSV exports, standard formats |
| **Reusable** | Immutable provenance, clear licenses (TEKTOK) |

### 9.2 Audit Trail

All access and exports logged in `governance/audit_log.csv`:

```csv
Timestamp,User,Action,Resource,Classification,Approved_By,Export_Destination
2026-01-15T12:00:00Z,STK_SE,EXPORT,ATA_28-FUEL-LC04,CONFIDENTIAL,STK_PMO,Internal Review
```

---

## 10. Tools and Automation

### 10.1 TT Distribution

```bash
# Calculate and distribute TT for closed KNOT
python finance/tools/tt_distributor.py \
  --knot KNOT-25-10-001 \
  --execute
```

### 10.2 Ledger Analytics

```bash
# Generate TT distribution report
python finance/tools/ledger_query.py --report --output report.pdf

# Export to EU reporting format
python finance/tools/ledger_query.py --export-eu --output eu_report.csv
```

### 10.3 Export Compliance

```bash
# Check if data export is compliant
python finance/tools/export_compliance_checker.py \
  --resource ATA_28-FUEL/SSOT/LC04_DESIGN_DEFINITION/ \
  --destination EXTERNAL
```

---

## 11. Security

### 11.1 Ledger Integrity

- **Immutable:** No deletion or modification of existing blocks
- **Cryptographic:** SHA-256 hash chain prevents tampering
- **Timestamped:** RFC 3339 timestamps with UTC timezone

### 11.2 Access Control

- **RBAC:** Role-based access control (governance/access_control_matrix.csv)
- **Audit:** All access logged (governance/audit_log.csv)
- **Encryption:** Sensitive data encrypted at rest (AES-256)

### 11.3 Backup and Recovery

- **Versioned:** Git-tracked ledger.json (blockchain immutability + version control)
- **Replicated:** Consortium nodes maintain ledger copies
- **Validated:** Regular integrity checks via `hash_chain_validator.py`

---

## 12. Next Steps

### 12.1 Implementation Roadmap

- [x] Define finance/ directory structure
- [x] Create ledger.json schema
- [x] Define transaction schemas
- [x] Document export control governance
- [ ] Implement genesis block (programme initialization)
- [ ] Develop tt_distributor.py tool
- [ ] Develop ledger_query.py analytics tool
- [ ] Integrate with SSOT/LC01 KNOT closure workflow
- [ ] Deploy ledger validator in CI/CD

### 12.2 Future Enhancements

- **Smart contracts:** Automate TT distribution on KNOT closure
- **Multi-signature:** Require multiple STK approvals for sensitive exports
- **Zero-knowledge proofs:** Verify contributions without revealing proprietary details
- **Distributed ledger:** Replicate across consortium partner nodes

---

## 13. References

### Internal Documents

- [TEKNIA_MANIFESTO.md](../TEKNIA_MANIFESTO.md) — NKU, KBL, TEKTOK concepts
- [ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md](../ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md) — Knowledge lifecycle
- [00-01-programme/GENESIS/01_PROGRAM_AGGREGATOR/](../OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-01-programme/GENESIS/01_PROGRAM_AGGREGATOR/) — Programme governance

### External Standards

- **ISO/IEC 27001:** Information security management
- **EU GDPR:** Data protection and privacy
- **EU Dual-Use Regulation 2021/821:** Export control
- **RFC 3339:** Timestamp format

---

## 14. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial finance/ structure and blockchain ledger implementation |

---

*This directory implements the Knowledge Blockchain Ledger (KBL) for AMPEL360 Q100, providing immutable tracking of Teknia Token rewards, transaction provenance, and data governance.*
