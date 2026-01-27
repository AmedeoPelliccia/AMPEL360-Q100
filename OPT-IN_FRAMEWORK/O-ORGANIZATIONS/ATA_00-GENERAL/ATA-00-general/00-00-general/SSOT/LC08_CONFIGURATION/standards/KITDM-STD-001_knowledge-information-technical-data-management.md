---
document_id: "KITDM-STD-001"
title: "Knowledge & Information Technical Data Management Standard"
version: "I01-R01"
status: "DRAFT"
effective_date: "2026-01-19"
owner_aor: "STK_CM"
co_owners: ["STK_SE", "STK_SAF", "STK_CERT", "STK_MRO", "STK_OPS", "STK_DATA"]
supersedes: null
references:
  - "OPT-IN Framework Structure v2026-01"
  - "ASIT Principles (AMPEL360 GENESIS)"
  - "S1000D Issue 5.0"
  - "ATA iSpec 2200"
golden_rule: "Truth in KDB, Information in IDB, Connected by Contracts"
---

# KITDM-STD-001: Knowledge & Information Technical Data Management Standard

**Golden Rule:** *Truth in KDB, Information in IDB, Connected by Contracts*

---

## Section 0 — Control del Documento

### 0.1 Purpose

This standard establishes the **Knowledge & Information Technical Data Management (KITDM)** framework, which formalizes the separation between authoritative technical knowledge (KDB) and derived informational projections (IDB) within the AMPEL360-Q100 program.

KITDM provides:
- **Ontological separation** between knowledge creation and information consumption
- **Traceability contracts** ensuring all derived information is traceable to authoritative sources
- **Governance framework** for configuration control, maturity management, and auditing
- **Conformance criteria** for verifying adherence to the separation model

### 0.2 Scope

This standard applies to:
- **All technical data** managed within the AMPEL360-Q100 program
- **KDB (Knowledge Data Base):** GENESIS + SSOT structures
- **IDB (Information Data Base):** PUB structures (CSDB/EXPORT/IETP)
- **All stakeholders** involved in technical data creation, transformation, and consumption

**In Scope:**
- Knowledge unit (KNU) registration in GENESIS/SSOT
- Publication generation from KDB sources
- Traceability contract definition and enforcement
- Configuration baseline management
- Conformance verification procedures

**Out of Scope:**
- Financial data management (covered by finance policies)
- Personnel data management (covered by HR policies)
- Non-technical program management artifacts

### 0.3 Exclusions

The following are explicitly excluded from KITDM governance:
- **Transient working files** (local drafts, temporary computations)
- **External reference documents** (industry standards, regulatory documents)
- **Training materials** not derived from KDB
- **Marketing and promotional content**

### 0.4 Change History

| Version | Date | Author | Change Summary |
|---------|------|--------|----------------|
| I01-R01 | 2026-01-19 | STK_CM | Initial release — formalization of KDB/IDB separation |

---

## Section 1 — Términos y Definiciones

### 1.1 Core Concepts

**KITDM (Knowledge & Information Technical Data Management)**  
The governance framework that enforces separation between authoritative knowledge (KDB) and derived information (IDB), connected through formal traceability contracts.

**KDB (Knowledge Data Base)**  
The authoritative technical knowledge repository comprising:
- **GENESIS:** Uncertainty management, discovery, justification, and framing
- **SSOT (Single Source of Truth):** Lifecycle-bound executed artifacts (requirements, designs, analyses, configurations)

**IDB (Information Data Base)**  
The derived projection layer comprising consumable publications:
- **PUB/CSDB:** S1000D Common Source Database publications
- **PUB/EXPORT:** Format-converted exports (PDF, HTML, interactive)
- **PUB/IETP:** Interactive Electronic Technical Publications

**GENESIS**  
The uncertainty space containing structured discovery (O-KNOT), justification (Y-KNOT), and framing (KNOT) layers. GENESIS is upstream of SSOT and manages knowledge gaps.

**SSOT (Single Source of Truth)**  
The certainty space containing authoritative lifecycle-bound artifacts (LC01-LC14) with timestamped executions. SSOT is downstream of GENESIS and upstream of IDB.

**Contract (Traceability Contract)**  
A formal, versioned specification that defines the transformation rules, scope, and acceptance criteria for deriving IDB artifacts from KDB sources. All KDB → IDB flows require contracts.

**Audience**  
The intended consumer role for an IDB artifact (e.g., maintenance technician, flight crew, certification authority, system engineer).

**Process**  
The operational context in which an IDB artifact is consumed (e.g., scheduled maintenance, troubleshooting, pre-flight check, design review).

### 1.2 Key Identifiers

**KNU (Knowledge Unit)**  
A discrete, traceable unit of authoritative knowledge in SSOT, identified by `KNU-{ATA}-{SUB}-{SEQ}-LC{NN}-{DESC}` (e.g., `KNU-28-10-005-LC02-FUEL_SYS_REQ`).

**KNOT (Knowledge Node of Uncertainty Tracking)**  
A framing-level artifact in GENESIS that defines scope and plan outline, identified by `KNOT-{ATA}-{SUB}-{SEQ}` (e.g., `KNOT-28-10-005`).

**DMC (Data Module Code)**  
An S1000D identifier for data modules in IDB, following S1000D conventions (e.g., `DMC-AMPEL360-28-10-05-00A-001A-A`).

**Baseline**  
A configuration-controlled snapshot of KDB content at a specific point in time, used to ensure reproducibility of IDB releases.

---

## Section 2 — Principios Normativos

### 2.1 Separación Ontológica Obligatoria

**P1: Mandatory Separation**  
KDB and IDB **MUST** be ontologically separated. No artifact may exist simultaneously in both spaces.

- **Rationale:** Prevents circular dependencies and ensures clear responsibility for truth vs. projection.
- **Enforcement:** Directory structure, tooling, and audit checks enforce separation.

**P2: KDB is Authoritative**  
All authoritative technical knowledge **MUST** reside in KDB (GENESIS + SSOT). IDB contains only derived projections.

- **Rationale:** Establishes single source of truth for technical data.
- **Enforcement:** Write access to SSOT is controlled; IDB is generated, not authored.

**P3: IDB is Read-Only (Generated)**  
IDB artifacts **MUST** be generated from KDB via contracts. Direct authoring in IDB is prohibited.

- **Rationale:** Prevents drift between authoritative knowledge and published information.
- **Enforcement:** IDB directories are protected; generation pipelines enforce contracts.

### 2.2 Precedencia y No-Regresión

**P4: KDB Precedence**  
In case of conflict or discrepancy, KDB content takes precedence over IDB content.

- **Rationale:** Ensures authoritative truth is always the reference.
- **Enforcement:** Issue resolution process always updates KDB first, then regenerates IDB.

**P5: No Regression from IDB to KDB**  
Knowledge **MUST NOT** flow backward from IDB to KDB. Feedback loops must close through GENESIS (O-KNOT).

- **Rationale:** Prevents information pollution of authoritative knowledge.
- **Enforcement:** Change process requires GENESIS KNOT registration for new knowledge.

**P6: Contract-Mediated Flow Only**  
All KDB → IDB transformations **MUST** be governed by explicit, versioned contracts.

- **Rationale:** Ensures traceability, reproducibility, and auditability.
- **Enforcement:** Contract registry and validation checks enforce this rule.

### 2.3 Trazabilidad, Madurez y Auditoría

**P7: Mandatory Traceability**  
Every IDB artifact **MUST** be traceable to its KDB sources and transformation contract.

- **Rationale:** Enables impact analysis, change management, and regulatory compliance.
- **Enforcement:** Contract metadata, audit trails, and verification checks.

**P8: Maturity Gate Enforcement**  
IDB generation **MUST** respect KNU maturity levels. Immature KDB content cannot be published without explicit waiver.

- **Rationale:** Prevents premature or incomplete information from reaching consumers.
- **Enforcement:** Maturity checks in generation pipelines.

**P9: Audit Trail Retention**  
All KDB → IDB transformations **MUST** maintain an auditable history including source versions, contract versions, and timestamps.

- **Rationale:** Supports compliance, certification, and continuous improvement.
- **Enforcement:** Automated logging, version control, and audit reporting.

---

## Section 3 — Modelo de Referencia KITDM

### 3.1 Structure

```
┌─────────────────────────────────────────────────────────────┐
│                     KITDM Architecture                      │
└─────────────────────────────────────────────────────────────┘

    UNCERTAINTY              CERTAINTY              CONSUMPTION
    ┌─────────┐             ┌─────────┐            ┌─────────┐
    │ GENESIS │────────────>│  SSOT   │───────────>│   PUB   │
    │ (O/Y/K) │             │(LC01-14)│            │ (IDB)   │
    └─────────┘             └─────────┘            └─────────┘
        │                        │                       │
        │ Discovery         Authoritative         Audience-
        │ Justification     Lifecycle-Bound       Specific
        │ Framing           Executed Work         Projections
        │                        │                       │
        └────────── KDB ─────────┘                       │
                                                          │
                                            IDB ──────────┘

    ┌───────────────────────────────────────────────────────┐
    │         Traceability Contracts (KDB → IDB)            │
    │  - Scope (sources, targets)                           │
    │  - Transformation rules (ASIT, mapping, filtering)    │
    │  - Acceptance criteria                                │
    │  - Baseline anchoring                                 │
    └───────────────────────────────────────────────────────┘
```

### 3.2 KDB Components

**GENESIS (Uncertainty Management)**
- **O-KNOT:** Discovery layer (identify knowledge gaps)
- **Y-KNOT:** Justification layer (analyze options, record decisions)
- **KNOT:** Framing layer (define scope, plan outline)
- **Registries:** Cross-ATA tracking of uncertainty nodes

**SSOT (Authoritative Knowledge)**
- **LC01:** Problem Statement (authoritative KNOT registry, KNU plan)
- **LC02-LC14:** Lifecycle-bound work products (requirements, designs, tests, configurations)
- **_derivation.yaml:** Links back to GENESIS provenance
- **_executions/:** Timestamped, immutable execution artifacts

### 3.3 IDB Components

**PUB/CSDB (Common Source Database)**
- S1000D data modules (DMC-based)
- Publication modules (PMC-based)
- Illustrations, multimedia, procedural content

**PUB/EXPORT**
- PDF exports (for print distribution)
- HTML exports (for web viewing)
- Offline packages (for disconnected use)

**PUB/IETP (Interactive Electronic Technical Publications)**
- Viewer-ready packages
- Interactive diagnostics
- Effectivity-filtered content

### 3.4 Responsibilities

| Component | Owner | Responsibility |
|-----------|-------|----------------|
| GENESIS | STK_CM + Domain SMEs | Uncertainty discovery, justification, framing |
| SSOT | STK_CM (structure) + Domain owners (content) | Authoritative lifecycle artifacts |
| Contracts | STK_DATA + Domain owners | Transformation rule definition and validation |
| PUB/IDB | STK_DATA (generation) + Domain owners (approval) | Audience-specific publication generation |

---

## Section 4 — Requisitos Normativos para KDB

### KDB-R1: KNOT Registration Requirements

**Requirement:**  
Every authoritative knowledge unit (KNU) in SSOT **MUST** be traceable to a registered KNOT in GENESIS/LC01.

**Verification:**
- Check `_derivation.yaml` for `parent_knot` reference
- Verify KNOT exists in `GENESIS/KNOT/` or `SSOT/LC01_PROBLEM_STATEMENT/`

**Rationale:**  
Ensures all executed work has documented provenance and justification.

### KDB-R2: GENESIS Resolution Produces SSOT

**Requirement:**  
GENESIS (O-KNOT → Y-KNOT → KNOT) **MUST** produce SSOT LC01 entries before any LC02+ work begins.

**Verification:**
- Check that LC01 KNOT entry exists before any related KNU in LC02+
- Verify chronological ordering via `created_date` timestamps

**Rationale:**  
Enforces uncertainty resolution before commitment to authoritative work.

### KDB-R3: SSOT Asset Declaration Requirements

**Requirement:**  
Every SSOT KNU **MUST** declare:
- Lifecycle category (LC01-LC14)
- Parent KNOT reference
- Maturity status
- Downstream targets (via `_downstream.yaml`)

**Verification:**
- Validate `_derivation.yaml` completeness
- Validate `_downstream.yaml` presence and structure

**Rationale:**  
Ensures complete metadata for traceability and configuration management.

### KDB-R4: No Direct Publication from KDB

**Requirement:**  
KDB content **MUST NOT** be directly published or exposed to end users. All publications must flow through IDB via contracts.

**Verification:**
- Audit external access controls to KDB directories
- Verify no direct links from user-facing systems to KDB

**Rationale:**  
Maintains separation and ensures audience-appropriate formatting and filtering.

---

## Section 5 — Requisitos Normativos para IDB

### IDB-R1: Mandatory KDB Reference

**Requirement:**  
Every IDB artifact **MUST** reference its KDB sources and the contract governing its generation.

**Verification:**
- Check IDB artifact metadata for `kdb_sources` and `contract_id`
- Validate referenced sources exist and are accessible

**Rationale:**  
Enables traceability and impact analysis.

### IDB-R2: No New Knowledge in IDB

**Requirement:**  
IDB artifacts **MUST NOT** introduce new technical knowledge. All knowledge must originate in KDB.

**Verification:**
- Review IDB generation process for creative authoring steps
- Verify all content has KDB source attribution

**Rationale:**  
Prevents drift and ensures single source of truth.

**Procedure for Gaps:**  
If IDB generation identifies missing knowledge:
1. **STOP** generation process
2. Open O-KNOT in GENESIS to capture gap
3. Resolve through Y-KNOT → KNOT → SSOT
4. Update contract to reference new KDB source
5. Resume IDB generation

### IDB-R3: Organization by Process/Audience

**Requirement:**  
IDB artifacts **MUST** be organized and filtered for specific audience roles and operational processes.

**Verification:**
- Check IDB artifact metadata for `audience` and `process` tags
- Verify content filtering matches intended audience

**Rationale:**  
Optimizes usability and reduces information overload.

### IDB-R4: Supported Projection Types

**Requirement:**  
IDB **MUST** support the following projection types:
- **CSDB:** S1000D-compliant data modules
- **EXPORT:** PDF, HTML, offline packages
- **IETP:** Interactive viewer-ready publications

**Verification:**
- Validate projection type is one of the supported formats
- Check generation pipeline supports the declared type

**Rationale:**  
Standardizes output formats for consistency and interoperability.

---

## Section 6 — Contratos KDB → IDB

### 6.1 Contract Flow

```
┌─────────────────────────────────────────────────────────┐
│              Traceability Contract Flow                 │
└─────────────────────────────────────────────────────────┘

    KDB Sources                Contract              IDB Targets
    ┌──────────┐              ┌────────┐            ┌──────────┐
    │ GENESIS  │              │        │            │  CSDB    │
    │  SSOT    │─────────────>│ CTR-   │───────────>│  EXPORT  │
    │  KNUs    │   defines    │ 001    │  generates │  IETP    │
    └──────────┘   transform  └────────┘            └──────────┘
         │                          │                      │
         │                          │                      │
         │ Maturity Gate       Validation             Effectivity
         │ Version Lock        Acceptance             Filtering
         │                     Criteria               Audience
         │                          │                      │
         └──────────────────────────┴──────────────────────┘
                         Audit Trail
```

### CTR-R1: Contract Content Requirements

**Requirement:**  
Every KDB → IDB contract **MUST** specify:

1. **Identification:**
   - Unique contract ID (e.g., `CTR-28-10-001`)
   - Version number (e.g., `v1.2`)
   - Status (draft, approved, active, retired)

2. **Ownership:**
   - Owner AOR (Area of Responsibility)
   - Technical owner
   - Approvers (roles required to approve)

3. **Scope:**
   - KDB sources (KNU IDs, versions, LC categories)
   - IDB targets (DMC patterns, publication modules)

4. **Transformation Rules:**
   - ASIT rules (Aggregation, Selection, Interpretation, Transformation)
   - Mapping specifications
   - Filtering criteria
   - Aggregation logic

5. **Restrictions:**
   - Audience constraints
   - Export control markings
   - Classification levels
   - Geographic restrictions

6. **Acceptance Criteria:**
   - Quality gates
   - Verification methods
   - Evidence requirements

7. **Baseline Anchoring:**
   - KDB baseline ID
   - IDB release ID
   - Freeze requirements

8. **Effectivity:**
   - Aircraft applicability
   - Modification applicability

9. **Audit Trail:**
   - Change log with timestamps and approvers

**Verification:**
- Validate contract YAML against schema
- Check all required fields are present
- Verify approvers have signed off

**Rationale:**  
Ensures contracts are complete, traceable, and enforceable.

### CTR-R2: Baseline Anchoring for Releases

**Requirement:**  
Before any IDB release, the contract **MUST** reference a frozen KDB baseline.

**Verification:**
- Check contract `kdb_baseline_id` field
- Verify baseline exists and is tagged as frozen
- Confirm no drift between baseline and IDB generation run

**Rationale:**  
Ensures reproducibility and configuration control for released publications.

**Baseline Process:**
1. Declare intent to release IDB
2. Identify KDB sources (KNUs, versions)
3. Create KDB baseline snapshot
4. Lock baseline (no further changes)
5. Update contract to reference baseline
6. Generate IDB from baseline
7. Verify acceptance criteria
8. Release IDB with baseline traceability

---

## Section 7 — Roles y Responsabilidades

### 7.1 RACI Matrix

| Activity | STK_CM | STK_DATA | STK_SE | STK_SAF | STK_CERT | STK_OPS | STK_MRO |
|----------|--------|----------|--------|---------|----------|---------|---------|
| **GENESIS Management** | A/R | C | C | C | C | I | I |
| **SSOT LC01 (KNOT Registry)** | A/R | C | C | C | C | I | I |
| **SSOT LC02+ (KNU Authoring)** | A | C | R | R | R | C | C |
| **Contract Definition** | A | R | C | C | C | C | C |
| **Contract Approval** | A | C | R (LC02/04) | R (LC03) | R (LC12) | C | C |
| **IDB Generation** | A | R | I | I | I | C | C |
| **IDB Release Approval** | A | C | C | R (design) | R (cert) | R (ops) | R (maint) |
| **Conformance Audit** | A/R | C | I | I | I | I | I |
| **Baseline Management** | A/R | C | C | C | C | I | I |
| **Change Process** | A/R | C | C | C | C | C | C |

**Legend:**
- **R** = Responsible (does the work)
- **A** = Accountable (final authority, one per activity)
- **C** = Consulted (provides input)
- **I** = Informed (kept aware)

### 7.2 Role Descriptions

**STK_CM (Configuration Management)**
- Accountable for KITDM framework governance
- Maintains GENESIS and SSOT structure
- Enforces baseline and change control
- Conducts conformance audits

**STK_DATA (Data Management)**
- Responsible for contract definition and validation
- Executes IDB generation pipelines
- Maintains traceability databases
- Supports audit trail reporting

**STK_SE (Systems Engineering)**
- Authors KNUs in LC02 (requirements) and LC04 (design)
- Reviews contracts for technical accuracy
- Approves releases for design consistency

**STK_SAF (Safety)**
- Authors KNUs in LC03 (safety & reliability)
- Reviews contracts for safety implications
- Approves releases for safety compliance

**STK_CERT (Certification)**
- Authors KNUs in LC12 (certification)
- Reviews contracts for regulatory compliance
- Approves releases for certification readiness

**STK_OPS (Operations)**
- Provides operational requirements for IDB content
- Reviews contracts for operational usability
- Approves releases for operational deployment

**STK_MRO (Maintenance, Repair, Overhaul)**
- Provides maintenance requirements for IDB content
- Reviews contracts for maintainability
- Approves releases for field use

---

## Section 8 — Conformidad y Verificación

### 8.1 Conformance Criteria

**C1: Structural Separation**  
KDB and IDB directories are physically separated with no overlap.

**Verification:**
- Directory tree analysis
- Access control review

**C2: Traceability Completeness**  
Every IDB artifact has a valid contract and KDB source reference.

**Verification:**
- Contract registry audit
- Metadata completeness check

**C3: Contract Validity**  
All active contracts are approved, current, and reference valid KDB baselines.

**Verification:**
- Contract validation script
- Baseline integrity check

**C4: Maturity Compliance**  
No immature KDB content is published without explicit waiver.

**Verification:**
- Maturity gate audit
- Waiver documentation review

**C5: Audit Trail Integrity**  
All KDB → IDB transformations have complete, tamper-evident audit logs.

**Verification:**
- Audit log review
- Timestamp and signature validation

### 8.2 Non-Conformities

**NC-001: Direct KDB Publication**  
**Description:** KDB content exposed to end users without IDB projection.  
**Severity:** Critical  
**Remediation:** Remove direct access; generate IDB via contract.

**NC-002: IDB Authoring (New Knowledge)**  
**Description:** New technical knowledge created directly in IDB.  
**Severity:** Critical  
**Remediation:** Open O-KNOT in GENESIS; migrate knowledge to KDB; regenerate IDB.

**NC-003: Missing Contract**  
**Description:** IDB artifact exists without governing contract.  
**Severity:** Major  
**Remediation:** Create retroactive contract with full traceability; validate artifact against KDB.

**NC-004: Contract-Source Drift**  
**Description:** IDB artifact does not match specified KDB sources or transformation rules.  
**Severity:** Major  
**Remediation:** Regenerate IDB from baseline; validate acceptance criteria.

**NC-005: Incomplete Audit Trail**  
**Description:** KDB → IDB transformation lacks complete audit log.  
**Severity:** Minor  
**Remediation:** Reconstruct audit trail from version control; implement logging improvements.

---

## Section 9 — Gestión de Cambios

### CHG-R1: Change Process for KITDM

**Requirement:**  
All changes to KITDM framework, contracts, or baseline content **MUST** follow this process:

#### Step 1: Request for Change (RFC)
- Submitter opens RFC with justification
- STK_CM assigns RFC number (e.g., `RFC-KITDM-001`)
- Initial triage (accept, reject, defer)

#### Step 2: Impact Analysis
- Identify affected KDB sources, contracts, IDB targets
- Assess maturity gate implications
- Estimate effort and timeline

#### Step 3: Approval
- STK_CM convenes Change Control Board (CCB)
- Domain owners review and vote
- Decision: approved, rejected, deferred

#### Step 4: Implementation
- **If KDB change:**
  1. Open O-KNOT in GENESIS (if new knowledge)
  2. Resolve through Y-KNOT → KNOT → SSOT
  3. Update affected KNUs
  4. Update contracts referencing changed KNUs
  5. Regenerate affected IDB artifacts
  6. Validate acceptance criteria

- **If contract change:**
  1. Update contract with version bump
  2. Re-approve contract
  3. Regenerate affected IDB artifacts
  4. Validate acceptance criteria

- **If IDB-only change (formatting, filtering):**
  1. Update contract transformation rules
  2. Regenerate IDB artifacts
  3. Validate acceptance criteria

#### Step 5: Verification
- STK_CM conducts conformance audit
- Verify traceability is intact
- Close RFC with evidence

**Change Process Diagram:**

```
┌──────────────────────────────────────────────────────────┐
│                  KITDM Change Process                    │
└──────────────────────────────────────────────────────────┘

    RFC                Impact             Approval
  ┌─────┐           ┌────────┐          ┌─────────┐
  │Issue│──────────>│Analyze │─────────>│   CCB   │
  │ Rec.│           │Scope   │          │Decide   │
  └─────┘           └────────┘          └─────────┘
     │                  │                     │
     │                  │                 Approved
     │                  │                     │
     │                  └─────────────────────┘
     │                                        │
     │                                        ▼
     │                              ┌──────────────────┐
     │                              │  Implementation  │
     │                              ├──────────────────┤
     │                              │ GENESIS/SSOT     │
     │                              │ Contract Update  │
     │                              │ IDB Regeneration │
     │                              └──────────────────┘
     │                                        │
     │                                        ▼
     │                              ┌──────────────────┐
     └─────────────────────────────>│  Verification    │
                                    │  & Close RFC     │
                                    └──────────────────┘
```

---

## Section 10 — Anexos

### Anexo A: Traceability Matrix Template

**CSV Fields:**

```csv
IDB_Artifact_ID, KDB_Source_KNU_ID, KDB_Source_Version, Contract_ID, Contract_Version, Generation_Date, Baseline_ID, Approver, Status
```

**Example:**

```csv
IDB_Artifact_ID,KDB_Source_KNU_ID,KDB_Source_Version,Contract_ID,Contract_Version,Generation_Date,Baseline_ID,Approver,Status
DMC-AMPEL360-28-10-05-00A-001A-A,KNU-28-10-005-LC02-FUEL_SYS_REQ,v2.1,CTR-28-10-001,v1.3,2026-01-19T10:30:00Z,BL-2026-Q1-001,STK_SE,active
PMC-AMPEL360-28-00-00-AMM,KNU-28-00-001-LC10-MAINT_PLAN,v1.5,CTR-28-00-002,v2.0,2026-01-19T11:00:00Z,BL-2026-Q1-001,STK_MRO,active
```

### Anexo B: Golden Rule Summary

**Three Golden Rules of KITDM:**

1. **Truth in KDB**  
   All authoritative technical knowledge resides in GENESIS + SSOT. No exceptions.

2. **Information in IDB**  
   All consumable publications are derived projections from KDB. No direct authoring.

3. **Connected by Contracts**  
   All KDB → IDB flows are governed by explicit, versioned, traceable contracts.

**Corollary:** If you find knowledge in IDB that doesn't exist in KDB, open an O-KNOT immediately.

### Anexo C: Conformance Checklist Reference

**Reference File:** `KITDM-STD-001_conformance-checklist.csv`

**Usage:**
- Run quarterly conformance audits
- Check all 20 verification criteria
- Document evidence for each check
- Report non-conformities to STK_CM

**Severity Levels:**
- **Critical:** Immediate remediation required
- **Major:** Remediation within 30 days
- **Minor:** Remediation within 90 days

### Anexo D: KITDM ↔ OPT-IN Framework Mapping

| KITDM Component | OPT-IN Framework Location | Purpose |
|-----------------|---------------------------|---------|
| **KDB: GENESIS** | `GENESIS/` | Uncertainty management (O-KNOT, Y-KNOT, KNOT) |
| **KDB: SSOT** | `SSOT/` | Authoritative lifecycle artifacts (LC01-LC14) |
| **IDB: CSDB** | `PUB/CSDB/` | S1000D data modules |
| **IDB: EXPORT** | `PUB/EXPORT/` | PDF, HTML exports |
| **IDB: IETP** | `PUB/IETP/` | Interactive publications |
| **Contracts** | `SSOT/LC08_CONFIGURATION/standards/` | Traceability contract templates |
| **Baselines** | `SSOT/LC08_CONFIGURATION/baselines/` | Configuration snapshots |

**Traceability Files:**
- `_derivation.yaml` — Links KNU back to GENESIS (KNOT/Y-KNOT/O-KNOT)
- `_downstream.yaml` — Links KNU forward to IDB artifacts

---

## Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Owner (STK_CM) | [Pending] | [Pending] | [Pending] |
| Co-Owner (STK_SE) | [Pending] | [Pending] | [Pending] |
| Co-Owner (STK_SAF) | [Pending] | [Pending] | [Pending] |
| Co-Owner (STK_CERT) | [Pending] | [Pending] | [Pending] |
| Co-Owner (STK_MRO) | [Pending] | [Pending] | [Pending] |
| Co-Owner (STK_OPS) | [Pending] | [Pending] | [Pending] |
| Co-Owner (STK_DATA) | [Pending] | [Pending] | [Pending] |

---

**END OF DOCUMENT**
