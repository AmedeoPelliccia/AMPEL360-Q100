# AMPEL360 Q100 — Knowledge System Index

## Top-Level Aggregator and Navigation Hub

**Repository:** AMPEL360-Q100  
**Framework:** OPT-IN + TEKNIA + KBL  
**Version:** 1.0  
**Date:** 2026-01-15

---

## Quick Navigation

### 🎯 Start Here

| Role | Entry Point | Description |
|------|-------------|-------------|
| **Program Overview** | [README.md](./README.md) | Complete program description, structure, and quick start |
| **EU Funding** | [EU_FUNDING_ALIGNMENT.md](./EU_FUNDING_ALIGNMENT.md) | Clean Aviation, Horizon Europe, Innovation Fund alignment |
| **TEKNIA Framework** | [TEKNIA_MANIFESTO.md](./TEKNIA_MANIFESTO.md) | Knowledge management methodology and KBL concepts |
| **Technical Baseline** | [OPT-IN_FRAMEWORK/](./OPT-IN_FRAMEWORK/) | 79 ATA chapters organized in 5 axes |
| **Ontology** | [ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md](./ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md) | Knowledge lifecycle and uncertainty resolution |

---

## 📚 Core Documentation

### Foundation Documents

| Document | Purpose | Audience |
|----------|---------|----------|
| [README.md](./README.md) | Program overview, structure, LC01 orchestration | All stakeholders |
| [TEKNIA_MANIFESTO.md](./TEKNIA_MANIFESTO.md) | Knowledge management framework (NKU, KBL, TEKTOK) | Program managers, EU reviewers |
| [EU_FUNDING_ALIGNMENT.md](./EU_FUNDING_ALIGNMENT.md) | EU funding program mapping and application support | Grant writers, consortium leads |
| [ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md](./ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md) | Technical knowledge architecture | Engineers, data architects |

### GENESIS/SSOT Reference Implementation

| Location | Purpose |
|----------|---------|
| [OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/](./OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/) | Reference implementation of GENESIS/SSOT separation |
| [OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/GENESIS/README.md](./OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/GENESIS/README.md) | Uncertainty space rules and structure |
| [OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/SSOT/README.md](./OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/SSOT/README.md) | Certainty space rules and lifecycle artifacts |

---

## 🗂️ Repository Structure

### Top-Level Organization

```
AMPEL360-Q100/
├── README.md                               # Program overview
├── TEKNIA_MANIFESTO.md                     # Knowledge management framework
├── EU_FUNDING_ALIGNMENT.md                 # EU funding integration
├── ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md     # Technical knowledge architecture
├── KNOWLEDGE_SYSTEM_INDEX.md               # This file
│
├── OPT-IN_FRAMEWORK/                       # 79 ATA chapters (5 axes)
│   ├── O-ORGANIZATIONS/                    # ATA 00-05 (organizational)
│   ├── P-PROGRAMS/                         # ATA 06-12 (program-level)
│   ├── T-TECHNOLOGIES_.../                 # ATA 20-80 (technical systems)
│   ├── I-INFRASTRUCTURES/                  # Ground support, H₂ logistics
│   └── N-NEURAL_NETWORKS/                  # AI/ML, traceability, DPP
│
├── IETP_RUNTIME/                           # Interactive technical publications
├── EU_FUNDING/                             # Funding application support (to be created)
└── finance/                                # Teknia Token ledger
```

### GENESIS vs SSOT (Two-Space Rule)

Every ATA section implements:

```
Ch-SS-SB/
├── GENESIS/                    # Uncertainty space
│   ├── _registry/              # o-knot, y-knot, knot registries
│   ├── O-KNOT/                 # Discovery (problem identification)
│   ├── Y-KNOT/                 # Justification (decision logic)
│   └── KNOT/                   # Framing (planning intent)
│
├── SSOT/                       # Certainty space
│   ├── LC01_PROBLEM_STATEMENT/ # Authoritative KNOTs + KNU planning
│   ├── LC02_SYSTEM_REQUIREMENTS/
│   ├── LC03_SAFETY_RELIABILITY/
│   ├── LC04_DESIGN_DEFINITION/
│   ├── LC05_ANALYSIS_MODELS/
│   ├── LC06_VERIFICATION/
│   └── LC08_CONFIGURATION/
│
├── CSDB_REF/                   # Optional: operational consumables (NU)
└── PUB/                        # Publications (S1000D CSDB)
```

---

## 🌍 EU Funding Integration

### Target Programs

| Program | Budget | Timeline | Q100 Alignment |
|---------|--------|----------|---------------|
| **Clean Aviation JU** | €4.1B (2021-2031) | Active | H₂ propulsion, BWB, AI/ML |
| **Horizon Europe** | €95.5B (2021-2027) | Active | Cluster 5: Climate, Energy, Mobility |
| **Innovation Fund** | €40B+ (2020-2030) | Rolling calls | Large-scale breakthrough technologies |

### Key Alignments

- **European Green Deal:** Net-zero aviation by 2050
- **Clean Aviation Pillars:** Hybrid-electric & hydrogen, ultra-efficient aircraft, disruptive technologies
- **Horizon Europe Work Programmes:** HORIZON-CL5 (Climate, Energy, Mobility)
- **TEKNIA/KBL:** Verifiable uncertainty reduction → EU KPI reporting

**Details:** [EU_FUNDING_ALIGNMENT.md](./EU_FUNDING_ALIGNMENT.md)

---

## 🧠 TEKNIA Framework

### Core Concepts

| Concept | Definition | Location |
|---------|------------|----------|
| **TEKNIA** | Technology Extracting Knowledge into Net Value Aggregation | [TEKNIA_MANIFESTO.md](./TEKNIA_MANIFESTO.md) |
| **NKU** | Net Knowledge Unit (smallest verifiable understanding increment) | [TEKNIA_MANIFESTO.md#6-nku](./TEKNIA_MANIFESTO.md) |
| **KBL** | Knowledge Blockchain Ledger (immutable provenance trace) | [TEKNIA_MANIFESTO.md#10-kbl](./TEKNIA_MANIFESTO.md) |
| **TEKTOK** | Knowledge use governance (licensing, deployment) | [TEKNIA_MANIFESTO.md#8-tektok](./TEKNIA_MANIFESTO.md) |
| **GENESIS** | Uncertainty space (structure, not data) | [.../GENESIS/README.md](./OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/GENESIS/README.md) |
| **SSOT** | Certainty space (lifecycle-bound truth) | [.../SSOT/README.md](./OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/SSOT/README.md) |

### Knowledge Flow

```
O-KNOT (discovery) 
    → Y-KNOT (justification) 
    → KNOT (framing)
    → SSOT LC01 (authoritative problem statement)
    → KNU execution (LC02-LC14 artifacts)
    → CSDB publication
    → NU (atomic consumables)
```

---

## 🔬 Technical Implementation

### OPT-IN Framework (5 Axes × 79 ATA Chapters)

| Axis | Chapters | Focus |
|------|----------|-------|
| **O-ORGANIZATIONS** | ATA 00-05 | Organizational, maintenance policy, operations |
| **P-PROGRAMS** | ATA 06-12 | Program-level activities (dimensions, servicing, placards) |
| **T-TECHNOLOGIES** | ATA 20-80 | On-board systems (airframe, propulsion, avionics, environment) |
| **I-INFRASTRUCTURES** | ATA 03, 08, 10, 12, 85, IN-xx | Ground support, H₂ logistics, facilities |
| **N-NEURAL_NETWORKS** | ATA 95, 96, 97, 98 | AI/ML, traceability, DPP, ledger |

### LC01 Uncertainty Orchestration

Every ATA section contains:

| File | Purpose |
|------|---------|
| `KNOTS.csv` | Uncertainty register (known unknowns) |
| `KNU_PLAN.csv` | Planned artifacts to resolve KNOTs |
| `TIMELINE.csv` | Milestone schedule |
| `RACI.csv` | Stakeholder responsibility matrix |
| `TOKENOMICS_TT.yaml` | Teknia Token reward pool |
| `AWARDS_TT.csv` | Distribution ledger (populated at closure) |

**Formula:** `w_i = α·Ê_i + (1-α)·Î_i; T_i = P_k · w_i`
- Effort weight (α) + Impact weight (1-α)
- Spillover multiplier (λ) for cross-KNOT contributions

---

## 🚀 Quick Start by Role

### For Engineers

1. Navigate to relevant ATA chapter: `OPT-IN_FRAMEWORK/T-TECHNOLOGIES_.../ATA_XX-SYSTEM/`
2. Check `SSOT/LC01_PROBLEM_STATEMENT/` for active KNOTs
3. Review `GENESIS/` for discovery/justification context
4. Contribute artifacts to `SSOT/LC02-LC14/` as per KNU_PLAN.csv

### For Program Managers

1. Read [TEKNIA_MANIFESTO.md](./TEKNIA_MANIFESTO.md) for framework overview
2. Review [EU_FUNDING_ALIGNMENT.md](./EU_FUNDING_ALIGNMENT.md) for funding strategy
3. Monitor `SSOT/LC01_.../TIMELINE.csv` across all ATAs for milestones
4. Track TT distribution in `finance/ledger.json`

### For EU Grant Writers

1. Start with [EU_FUNDING_ALIGNMENT.md](./EU_FUNDING_ALIGNMENT.md)
2. Map Q100 work packages to ATAs in OPT-IN_FRAMEWORK
3. Use `SSOT/LC01_.../KNU_PLAN.csv` to generate deliverables lists
4. Extract consortium roles from `RACI.csv` matrices
5. Generate budget from `TOKENOMICS_TT.yaml` allocation

### For Certification Authorities

1. Review `SSOT/LC03_SAFETY_RELIABILITY/` for safety artifacts
2. Check `SSOT/LC06_VERIFICATION/` for test evidence
3. Inspect `PUB/AMM/CSDB/` for operational documentation
4. Verify traceability via KBL: `GENESIS/_registry/` → `SSOT/` → `PUB/`

---

## 📊 Progress Tracking

### KBL-Enabled Metrics

| Metric | Source | Reporting |
|--------|--------|-----------|
| **Uncertainty Reduction** | Residual values in KNOTS.csv | Per-KNOT dashboards |
| **TRL Progression** | LC06 verification artifacts | EU periodic reports |
| **Knowledge Production** | KNU completion count | NKU aggregation |
| **Budget vs. Actual** | TT distribution vs. effort | Financial reports |
| **Milestone Status** | TIMELINE.csv completion | Gantt charts |

### EU KPI Integration

- **CO₂ reduction:** LC05 analysis models → LCA studies
- **TRL advancement:** LC06 verification → test reports
- **Publications:** PUB/ → indexed journals
- **Standards contributions:** Participation logs → working group outputs

---

## 🛠️ Tools and Automation

### Available Scripts

```bash
# Validate OPT-IN structure
python tools/ci/optin_structure_validator.py --check

# Generate EU consortium summary
python tools/eu_funding/consortium_summary.py

# Export budget from tokenomics
python tools/eu_funding/budget_export.py

# Produce Gantt chart
python tools/eu_funding/gantt_generator.py

# Verify KBL integrity
python tools/tek_tokens.py verify
```

---

## 📞 Support and Contact

### Documentation Issues

- Open issue on [GitHub](https://github.com/AmedeoPelliccia/AMPEL360-Q100/issues)
- Tag with `documentation` label

### EU Funding Questions

- Email: [funding@ampel360.eu](mailto:funding@ampel360.eu) *(placeholder)*
- Slack: `#eu-funding` channel *(if consortium workspace exists)*

### Technical Questions

- Email: [technical@ampel360.eu](mailto:technical@ampel360.eu) *(placeholder)*
- GitHub Discussions: Technical Q&A

---

## 🔄 Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-15 | STK_PMO | Initial top-level aggregator and navigation hub |

---

## 📖 Related Documents

### Strategic

- [TEKNIA_MANIFESTO.md](./TEKNIA_MANIFESTO.md) — Knowledge management philosophy
- [EU_FUNDING_ALIGNMENT.md](./EU_FUNDING_ALIGNMENT.md) — Funding framework integration

### Technical

- [ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md](./ONTOLOGY_GENESIS_KNOWLEDGE_MODEL.md) — Technical architecture
- [README.md](./README.md) — Program overview and structure
- [DIGITAL_TWIN_CONTROL_LOOP.md](./DIGITAL_TWIN_CONTROL_LOOP.md) — Digital twin architecture

### Implementation

- [OPT-IN_FRAMEWORK/](./OPT-IN_FRAMEWORK/) — Complete ATA baseline
- [IETP_RUNTIME/](./IETP_RUNTIME/) — Interactive technical publications
- [.github/](./github/) — CI/CD, validation, hooks

---

*This index provides a comprehensive navigation hub for the AMPEL360 Q100 knowledge system, integrating technical baseline, EU funding frameworks, and TEKNIA methodology.*
