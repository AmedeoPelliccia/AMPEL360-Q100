# N-NEURAL_NETWORKS — Index

**ATA-like Chapters 95–98 | N-AXIS**

> ATA 95–98 are internal ATA-like chapters reserved for N-AXIS (AI/ML, traceability, synthetic data). They do not replace canonical ATA iSpec2200 chapters.

---

## ATA 95 — AI/ML Models

| Section | Title | Description |
|---------|-------|-------------|
| [95-00](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-00-general/) | General | Overview and governance of AI/ML models |
| [95-10](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-10-model-registry-and-metadata/) | Model Registry & Metadata | IDs, versions, owners, intended use, limits |
| [95-20](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-20-data-and-feature-contracts/) | Data & Feature Contracts | Inputs/outputs, schemas, ICD-like definitions |
| [95-30](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-30-training-pipelines-and-reproducibility/) | Training Pipelines & Reproducibility | Reproducibility, seeds, environments, artifacts |
| [95-40](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-40-evaluation-validation-and-benchmarks/) | Evaluation, Validation & Benchmarks | Metrics, acceptance criteria, test sets |
| [95-50](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-50-deployment-inference-and-integration/) | Deployment, Inference & Integration | Runtime constraints, integration points, rollback |
| [95-60](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-60-monitoring-drift-and-continued-airworthiness/) | Monitoring, Drift & Continued Airworthiness | Drift, alerts, in-service evidence |
| [95-70](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-70-safety-assurance-and-compliance/) | Safety Assurance & Compliance | DO-178C-like tagging, MoC evidence |
| [95-80](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-80-exports-packaging-and-delivery/) | Exports, Packaging & Delivery | Model cards, export bundles, delivery manifests |
| [95-90](./ATA_95-AI_ML_MODELS/ATA-95-ai-ml-models/95-90-schemas-icd-and-catalogs/) | Schemas, ICD & Catalogs | JSON/YAML schemas, controlled vocabularies |

---

## ATA 96 — Traceability / DPP / Ledger

| Section | Title | Description |
|---------|-------|-------------|
| [96-00](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-00-general/) | General | Overview and governance of traceability systems |
| [96-10](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-10-identifier-grammar-and-namespaces/) | Identifier Grammar & Namespaces | Ties to K06 "Identifier grammar" work |
| [96-20](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-20-trace-links-and-evidence-model/) | Trace Links & Evidence Model | REQ→DES→V&V→PUB, KNOT→KNU |
| [96-30](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-30-ledger-events-and-hash-chain/) | Ledger Events & Hash Chain | Hash-chain, anchors, deterministic event format |
| [96-40](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-40-dpp-views-effectivity-and-applicability/) | DPP Views, Effectivity & Applicability | Product variants/serials |
| [96-50](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-50-change-control-configuration-and-baselines/) | Change Control, Configuration & Baselines | K-gates, baselining rules |
| [96-60](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-60-auditability-signoffs-and-governance/) | Auditability, Signoffs & Governance | Who can approve what; evidence packs |
| [96-70](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-70-interop-export-formats-and-apis/) | Interop, Export Formats & APIs | Exports, API surfaces, pack formats |
| [96-80](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-80-security-integrity-and-access-control/) | Security, Integrity & Access Control | Access control, tamper evidence |
| [96-90](./ATA_96-TRACEABILITY_DPP_LEDGER/ATA-96-traceability-dpp-ledger/96-90-schemas-tables-and-registries/) | Schemas, Tables & Registries | Registry index, schema packs |

---

## ATA 97 — Synthetic Data + Validation

| Section | Title | Description |
|---------|-------|-------------|
| [97-00](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-00-general/) | General | Overview and governance of synthetic data |
| [97-10](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-10-synthetic-data-generation/) | Synthetic Data Generation | Parametric, simulation, augmentation methods |
| [97-20](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-20-scenario-edge-case-and-coverage-model/) | Scenario, Edge Case & Coverage Model | Edge cases, completeness metrics |
| [97-30](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-30-labeling-truth-models-and-annotation/) | Labeling, Truth Models & Annotation | Ground truth definition + provenance |
| [97-40](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-40-validation-statistics-and-quality-gates/) | Validation Statistics & Quality Gates | Statistical validation, acceptance criteria |
| [97-50](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-50-domain-shift-bias-and-representativeness/) | Domain Shift, Bias & Representativeness | Representativeness + risk controls |
| [97-60](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-60-toolchain-reproducibility-and-provenance/) | Toolchain Reproducibility & Provenance | Toolchain versions, seeds, provenance |
| [97-70](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-70-safety-use-constraints-and-approval/) | Safety Use Constraints & Approval | Approved uses, prohibited uses, signoffs |
| [97-80](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-80-datasets-packaging-and-delivery/) | Datasets Packaging & Delivery | Manifests, delivery, retention rules |
| [97-90](./ATA_97-SYNTHETIC_DATA_VALIDATION/ATA-97-synthetic-data-validation/97-90-schemas-catalogs-and-checklists/) | Schemas, Catalogs & Checklists | BREX-like checks for datasets |

---

## ATA 98 — Reserved Program Slot

| Section | Title | Description |
|---------|-------|-------------|
| [98-00](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-00-general/) | General | Reserved for future N-AXIS expansions |
| [98-10](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-10-reserved/) | Reserved | Placeholder |
| [98-20](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-20-reserved/) | Reserved | Placeholder |
| [98-30](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-30-reserved/) | Reserved | Placeholder |
| [98-40](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-40-reserved/) | Reserved | Placeholder |
| [98-50](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-50-reserved/) | Reserved | Placeholder |
| [98-60](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-60-reserved/) | Reserved | Placeholder |
| [98-70](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-70-reserved/) | Reserved | Placeholder |
| [98-80](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-80-reserved/) | Reserved | Placeholder |
| [98-90](./ATA_98-RESERVED_PROGRAM_SLOT/ATA-98-program-slot/98-90-schemas-index/) | Schemas Index | Index of schemas for reserved sections |

---

<p align="center">
  <em>AMPEL360 Q100 — N-NEURAL_NETWORKS Index</em>
</p>
