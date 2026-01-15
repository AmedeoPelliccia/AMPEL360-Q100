# 00_NAVIGATION — Repository Map

**Purpose:** Complete navigation guide for AMPEL360-Q100 repository  
**Audience:** All stakeholders (engineers, managers, reviewers, auditors)  
**Status:** Authoritative

---

## 1. Repository Root

```
AMPEL360-Q100/
├── README.md                               # Programme overview
├── KNOWLEDGE_SYSTEM_INDEX.md               # Top-level aggregator (navigation hub)
├── TEKNIA_MANIFESTO.md                     # KBL/NKU/TEKTOK framework
├── EU_FUNDING_ALIGNMENT.md                 # EU funding integration
├── ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md     # Technical knowledge architecture
│
├── OPT-IN_FRAMEWORK/                       # 79 ATA chapters (5 axes)
│   ├── O-ORGANIZATIONS/                    # ATA 00-05 (organizational)
│   │   └── ATA_00-GENERAL/                 # Information system & programme root
│   │       └── ATA-00-general/
│   │           ├── 00-00-general/          # Information system ontology
│   │           ├── 00-01-programme/        # Programme authority ← ROOT
│   │           └── 00-02-policy-and-funding/ # EU policy anchors
│   │
│   ├── P-PROGRAMS/                         # ATA 06-12 (program-level)
│   ├── T-TECHNOLOGIES_.../                 # ATA 20-80 (technical systems)
│   ├── I-INFRASTRUCTURES/                  # Ground support, H₂ logistics
│   └── N-NEURAL_NETWORKS/                  # AI/ML, traceability, DPP
│
├── IETP_RUNTIME/                           # Interactive technical publications
├── EU_FUNDING/                             # Funding application support
└── finance/                                # Teknia Token ledger
```

---

## 2. Organizational Hierarchy

### 2.1 Programme Root (ATA 00)

| Section | Purpose | Authority Level |
|---------|---------|-----------------|
| **00-01** | **Programme authority** | **HIGHEST** (root of reality) |
| **00-02** | **EU policy & funding** | **PUBLIC MANDATE** |
| **00-00** | **Information system** | **STRUCTURAL ONTOLOGY** |
| 00-90 | Tables/schemas/index | Reference |

### 2.2 Information Flow

```
00-02 (EU Policy) — provides mandate
    ↓
00-01 (Programme) — establishes authority ← YOU START HERE
    ↓
00-00 (Info System) — defines structure
    ↓
T-TECHNOLOGIES (Systems) — execute work
    ↓
PUB (Publications) — deliver outputs
```

---

## 3. Navigation by Role

### 3.1 Programme Managers

**Start:** [00-01-programme/](../../../00-01-programme/)  
**Key docs:**
- Programme authority and governance
- SSOT/LC00_PROGRAM_BASELINE for authoritative decisions
- TEKNIA_MANIFESTO.md for knowledge management philosophy

### 3.2 Engineers

**Start:** Relevant ATA chapter in `T-TECHNOLOGIES/`  
**Key docs:**
- `SSOT/LC01_PROBLEM_STATEMENT/` for active KNOTs
- `GENESIS/` for discovery/justification context
- `PUB/AMM/CSDB/` for publications

### 3.3 EU Grant Writers

**Start:** [00-02-policy-and-funding/](../../../00-02-policy-and-funding/)  
**Key docs:**
- EU_FUNDING_ALIGNMENT.md for funding framework
- EU_FUNDING/ directory for application support
- SSOT/LC01_.../KNU_PLAN.csv for deliverables

### 3.4 Certification Authorities

**Start:** `SSOT/LC03_SAFETY_RELIABILITY/` (per-ATA)  
**Key docs:**
- Safety analysis artifacts
- LC06 verification evidence
- PUB/AMM/CSDB/ for operational documentation

---

## 4. GENESIS vs SSOT Navigation

### 4.1 Finding GENESIS (Uncertainty)

**Pattern:** `Ch-SS-SB/GENESIS/`

**Contains:**
- O-KNOT/ — Discovery (problem identification)
- Y-KNOT/ — Justification (decision logic)
- KNOT/ — Framing (planning intent)
- _registry/ — Cross-cutting registries

**When to use:** Understanding *why* decisions were made, exploring alternatives

### 4.2 Finding SSOT (Certainty)

**Pattern:** `Ch-SS-SB/SSOT/LCxx_.../`

**Contains:**
- LC01_PROBLEM_STATEMENT/ — Authoritative KNOTs
- LC02_SYSTEM_REQUIREMENTS/
- LC03_SAFETY_RELIABILITY/
- LC04_DESIGN_DEFINITION/
- LC05_ANALYSIS_MODELS/
- LC06_VERIFICATION/
- LC08_CONFIGURATION/

**When to use:** Finding *what* is authoritative, accessing executed artifacts

---

## 5. Registry Locations

### 5.1 Programme-Level Registries

| Registry | Location | Purpose |
|----------|----------|---------|
| **Programme uncertainties** | `00-01/GENESIS/O-KNOT/` | Programme-level O-KNOTs |
| **Information system** | `00-00/GENESIS/_registry/` | Ontology registries |

### 5.2 System-Level Registries

| Registry | Location | Purpose |
|----------|----------|---------|
| **Per-ATA discoveries** | `ATA_XX-.../GENESIS/_registry/o-knot_registry.csv` | System-specific O-KNOTs |
| **Per-ATA justifications** | `ATA_XX-.../GENESIS/_registry/y-knot_registry.csv` | System-specific Y-KNOTs |
| **Per-ATA framings** | `ATA_XX-.../GENESIS/_registry/knot_registry.csv` | System-specific KNOTs |

### 5.3 Knowledge Blockchain Ledger

| Component | Location | Purpose |
|-----------|----------|---------|
| **Token ledger** | `finance/ledger.json` | TT distribution and hash chain |
| **Provenance** | `GENESIS/_registry/` → `SSOT/` links | Full traceability |

---

## 6. Quick Find

### 6.1 Finding a Specific ATA Chapter

```bash
cd OPT-IN_FRAMEWORK/

# By axis
cd O-ORGANIZATIONS/    # ATA 00-05
cd P-PROGRAMS/         # ATA 06-12
cd T-TECHNOLOGIES_.../  # ATA 20-80
cd I-INFRASTRUCTURES/   # Ground support
cd N-NEURAL_NETWORKS/   # AI/ML, DPP

# By chapter
cd O-ORGANIZATIONS/ATA_00-GENERAL/
cd T-TECHNOLOGIES_.../A-AIRFRAME_CABINS/ATA_25-EQUIPMENT_FURNISHINGS/
```

### 6.2 Finding a Specific KNOT

1. Check `SSOT/LC01_PROBLEM_STATEMENT/KNOTS.csv` for the ATA chapter
2. Look up KNOT ID (e.g., KNOT-25-10-001)
3. Check provenance in `GENESIS/_registry/` if needed
4. Review artifacts in `SSOT/LC02-LC14/`

### 6.3 Finding EU Funding Info

```bash
# High-level alignment
cat EU_FUNDING_ALIGNMENT.md

# Application support
cd EU_FUNDING/
cat README.md
```

---

## 7. Machine-Readable Navigation

### 7.1 Repository Manifest

*TBD: Generate `manifest.json` with full repository tree*

### 7.2 Ontology Graph

*TBD: Generate RDF/OWL graph of GENESIS → SSOT relationships*

### 7.3 API Endpoints

*TBD: REST API for programmatic navigation*

---

## 8. Lost? Start Here

| If you're looking for... | Go to... |
|--------------------------|----------|
| **Why this programme exists** | [00-01/GENESIS/](../../) |
| **EU funding justification** | [00-02/](../../../00-02-policy-and-funding/) |
| **Information architecture** | [00-00/](../../../00-00-general/) |
| **Technical system** | `T-TECHNOLOGIES/.../ATA_XX-SYSTEM/` |
| **Requirements for ATA XX** | `ATA_XX-.../SSOT/LC02_SYSTEM_REQUIREMENTS/` |
| **Safety analysis for ATA XX** | `ATA_XX-.../SSOT/LC03_SAFETY_RELIABILITY/` |
| **Publications** | `ATA_XX-.../PUB/AMM/CSDB/` |
| **Top-level overview** | [KNOWLEDGE_SYSTEM_INDEX.md](../../../../../../KNOWLEDGE_SYSTEM_INDEX.md) |

---

## 9. Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-15 | STK_PMO | Initial navigation document |

---

*This navigation guide provides the authoritative map for AMPEL360-Q100 repository.*
