---
# ═══════════════════════════════════════════════════════════════════════════════
# KNU ARTIFACT METADATA
# ═══════════════════════════════════════════════════════════════════════════════
knu_id: "KNU-00-00-001-ICD-001"
knot_id: "KNOT-00-00-001"
title: "Terminology Database Schema"
knu_type: "ICD"
artifact_class: "SSOT"
lifecycle_category: "LC04"
rec:  "LC04"
ata_reference: "00-00"
ata_address: "ATA-00-00-00-00"
expected_location: "../LC04_DESIGN_DEFINITION/"
status: "DRAFT"
version: "I01-R03"
priority: "HIGH"

# Ownership & Governance
owner_aor: "STK_DATA"
contributors: 
  - "STK_CM"
  - "STK_SE"
  - "STK_AI"
  - "STK_CERT"
reviewers: 
  - "STK_CM"
  - "STK_SE"
approved_by: null
approval_date: null

# Dates
created_date: "2026-01-11"
due_date: "2026-03-15"
last_updated: "2026-01-11"

# Acceptance & Verification
acceptance_criteria: "Schema supports versioning and cross-references; reviewed by STK_CM and STK_SE; integration with CSDB validated; modification impact analysis complete; no KNU ID conflicts"
verification_method: "Review"
effort_predicted: 5

# Modification Tracking
spawned_by_tbd: null
triggers_tbds: 
  - "TBD-00-001"
  - "TBD-00-002"
  - "TBD-00-003"
  - "TBD-00-005"
  - "TBD-00-006"
modification_type: "NEW"

# Traceability
parent_requirements: 
  - "S1000D Issue 5. 0"
  - "ATA iSpec 2200"
  - "ISO 10303 (STEP)"
child_requirements:  []
related_knots: 
  - "KNOT-00-00-001"  # Controlled Terminology Foundation
  - "KNOT-96-10-001"  # DPP Identifier Grammar
related_knus: 
  - "KNU-00-00-001-REQ-001"  # Terminology Requirements (upstream)
  - "KNU-96-10-001-ICD-001"  # DPP Schema Integration (downstream)
ata_traces: 
  - "ATA-00"  # General
  - "ATA-96"  # Traceability/DPP

# Standards Compliance
industry_standards: 
  - "S1000D Issue 5.0"
  - "ATA iSpec 2200"
  - "ISO 10303-239 (PLCS)"
  - "ISO 12620 (Terminology)"
  - "W3C SKOS (Simple Knowledge Organization System)"

# Technical Specifications
database_type: "PostgreSQL 15+"
schema_version: "1.0.0"
api_protocol: "REST + GraphQL"

# Document Control
classification: "INTERNAL"
export_control: "NONE"
canonical_hash: null
---

# Terminology Database Schema

**KNU ID:** KNU-00-00-001-ICD-001  
**KNOT:** KNOT-00-00-001  
**ATA Reference:** 00-00 (General)  
**ATA Address:** ATA-00-00-00-00  
**Status:** DRAFT  
**Version:** I01-R03  
**Priority:** HIGH  

---

## 1. Purpose and Scope

### 1.1 Purpose

This Interface Control Document (ICD) defines the **Terminology Database Schema** for the AMPEL360 Q100 program. This schema provides the foundational data model for controlled terminology management across:  

- SSOT (engineering artifacts)
- PUB/CSDB (S1000D publications)
- DPP (Digital Product Passport)
- Cross-system traceability

### 1.2 Scope

#### 1.2.1 In-Scope

| Domain | Coverage |
|--------|----------|
| **Data Model** | Entity-relationship schema, tables, views, indexes |
| **Versioning** | Term versioning, schema versioning, migration strategy |
| **Cross-References** | Term relationships, synonyms, translations, context |
| **Integration** | CSDB CIR, DPP namespace, SSOT artifact linking |
| **Governance** | Approval workflow, change control, audit trail |
| **API** | REST and GraphQL interfaces for term CRUD operations |
| **Configuration Management** | Modification tracking, impact analysis, effectivity control |

#### 1.2.2 Out-of-Scope

| Item | Reference |
|------|-----------|
| User interface design | Separate UI/UX specification |
| Specific term definitions | Term content managed via workflow, not schema |
| Translation services | External translation API integration |
| Search engine implementation | Separate search infrastructure |

---

## 2. Applicable Documents

### 2.1 Industry Standards

| Document | Title | Relationship |
|----------|-------|--------------|
| S1000D Issue 5.0 | International specification for technical publications | CIR integration |
| ATA iSpec 2200 | Information Standards for Aviation Maintenance | ATA terminology reference |
| ISO 10303-239 | PLCS (Product Life Cycle Support) | Lifecycle data model |
| ISO 12620 | Computer applications in terminology | Terminology metadata |
| W3C SKOS | Simple Knowledge Organization System | Semantic relationships |

### 2.2 Program Documents

| Document | Title | Relationship |
|----------|-------|--------------|
| AMPEL360-DOC-STD-001 | Documentation Standard | Terminology usage guidelines |
| AMPEL360-DPP-ARCH-001 | DPP Architecture | Identifier namespace integration |
| KNOT-00-00-001 | Controlled Terminology Foundation | Problem statement |
| KNU-00-00-001-REQ-001 | Program Glossary Requirements | Parent requirements |

---

## 3. System Context

### 3.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      TERMINOLOGY DATABASE SYSTEM                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                         POSTGRESQL DATABASE                           │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │  │
│  │  │  terms       │  │  term_       │  │  term_       │              │  │
│  │  │              │──│  versions    │  │  relations   │              │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │  │
│  │        │                  │                  │                       │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │  │
│  │  │  contexts    │  │  translations│  │  approvals   │              │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │  │
│  │        │                  │                  │                       │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │  │
│  │  │  tbds        │  │  knus        │  │  mod_        │              │  │
│  │  │              │  │              │  │  packages    │              │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │  │
│  └──────────────────────────────────────────────────────────────────────┤  │
│                                                                              │
│  ┌───────────────────────���──────────────────────────────────────────────┐  │
│  │                          API LAYER                                    │  │
│  ├──────────────────────────────────────────────────────────────────────┤  │
│  │  ┌──────────────┐                    ┌──────────────┐                │  │
│  │  │  REST API    │                    │  GraphQL API │                │  │
│  │  │  /terms      │                    │  query/      │                │  │
│  │  │  /tbds       │                    │  mutation    │                │  │
│  │  └──────────────┘                    └──────────────┘                │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
                                   │
                 ┌─────────────────┼─────────────────┐
                 │                 │                 │
                 ▼                 ▼                 ▼
         ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
         │    SSOT      │  │  PUB/CSDB    │  │     DPP      │
         │  Artifacts   │  │     CIR      │  │  Namespace   │
         └──────────────┘  └──────────────┘  └──────────────┘
```

### 3.2 Integration Points

| System | Integration Type | Purpose |
|--------|------------------|---------|
| **SSOT Artifacts** | Direct reference | Terms used in requirements, analyses, etc. |
| **CSDB CIR** | S1000D XML export | Common Information Repository |
| **DPP Namespace** | Identifier grammar | Term IDs for product data |
| **Configuration Management** | Version control | Term baseline management |
| **Translation Services** | API integration | Multi-language support |
| **KNU Planning System** | TBD spawn trigger | Automated modification impact analysis |

---

## 4. Data Model

### 4.1 Core Entities

#### 4.1.1 Entity-Relationship Diagram

```
┌───────────────────┐         ┌───────────────────┐
│      terms        │         │   term_versions   │
├───────────────────┤         ├───────────────────┤
│ term_id PK        │────────▶│ version_id PK     │
│ term_name         │         │ term_id FK        │
│ term_abbrev       │         │ version_number    │
│ term_type         │         │ definition        │
│ namespace         │         │ example           │
│ status            │         │ notes             │
│ created_at        │         │ created_at        │
│ created_by        │         │ created_by        │
│ current_version   │         │ approved_at       │
└───────────────────┘         │ approved_by       │
        │                     └───────────────────┘
        │
        │                     ┌───────────────────┐
        │                     │  term_relations   │
        │                     ├───────────────────┤
        └────────────────────▶│ relation_id PK    │
                              │ term_id_from FK   │
                              │ term_id_to FK     │
                              │ relation_type     │
                              │ created_at        │
                              └───────────────────┘
                                      │
        ┌───────────────────┐         │
        │     contexts      │         │
        ├───────────────────┤         │
        │ context_id PK     │◀────────┘
        │ context_name      │
        │ context_type      │
        │ ata_chapter       │
        │ description       │
        └───────────────────┘
                │
        ┌───────────────────┐         ┌───────────────────┐
        │   translations    │         │       tbds        │
        ├───────────────────┤         ├───────────────────┤
        │ translation_id PK │         │ tbd_id PK         │
        │ term_id FK        │         │ description       │
        │ language_code     │         │ discovered_in     │
        │ translated_name   │         │ spawned_knu_id    │
        │ status            │         │ impact_class      │
        └───────────────────┘         │ blocking          │
                                      │ status            │
                                      └───────────────────┘
                                              │
                                      ┌───────────────────┐
                                      │  mod_packages     │
                                      ├───────────────────┤
                                      │ package_id PK     │
                                      │ tbd_id FK         │
                                      │ primary_knu_id    │
                                      │ total_effort      │
                                      │ total_delta_r     │
                                      └───────────────────┘
```

---

### 4.2 Table Definitions

#### 4.2.1 `terms` (Master Term Registry)

```sql
CREATE TABLE terms (
    term_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    term_name            VARCHAR(255) NOT NULL,
    term_abbrev          VARCHAR(50),
    term_type            VARCHAR(50) NOT NULL,  -- 'NOUN', 'VERB', 'ACRONYM', 'UNIT', 'SYMBOL'
    namespace            VARCHAR(100) NOT NULL, -- 'AMPEL360', 'ATA', 'S1000D', 'ISO', etc.
    status               VARCHAR(50) NOT NULL,  -- 'DRAFT', 'REVIEW', 'APPROVED', 'DEPRECATED'
    current_version      INTEGER DEFAULT 1,
    created_at           TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by           VARCHAR(100) NOT NULL,
    updated_at           TIMESTAMP,
    updated_by           VARCHAR(100),
    deprecated_at        TIMESTAMP,
    deprecated_by        VARCHAR(100),
    replacement_term_id  UUID REFERENCES terms(term_id),
    UNIQUE(term_name, namespace)
);

CREATE INDEX idx_terms_name ON terms(term_name);
CREATE INDEX idx_terms_abbrev ON terms(term_abbrev);
CREATE INDEX idx_terms_status ON terms(status);
CREATE INDEX idx_terms_namespace ON terms(namespace);
CREATE INDEX idx_terms_type ON terms(term_type);
```

---

#### 4.2.2 `term_versions` (Version History)

```sql
CREATE TABLE term_versions (
    version_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    term_id             UUID NOT NULL REFERENCES terms(term_id) ON DELETE CASCADE,
    version_number      INTEGER NOT NULL,
    definition          TEXT NOT NULL,
    example             TEXT,
    notes               TEXT,
    rationale           TEXT,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by          VARCHAR(100) NOT NULL,
    approved_at         TIMESTAMP,
    approved_by         VARCHAR(100),
    superseded_at       TIMESTAMP,
    superseded_by       INTEGER,
    hash                VARCHAR(64),
    UNIQUE(term_id, version_number)
);

CREATE INDEX idx_term_versions_term ON term_versions(term_id);
CREATE INDEX idx_term_versions_current ON term_versions(term_id, version_number DESC);
```

---

#### 4.2.3 `term_relations` (Semantic Relationships)

```sql
CREATE TABLE term_relations (
    relation_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    term_id_from        UUID NOT NULL REFERENCES terms(term_id) ON DELETE CASCADE,
    term_id_to          UUID NOT NULL REFERENCES terms(term_id) ON DELETE CASCADE,
    relation_type       VARCHAR(50) NOT NULL,
    context_id          UUID REFERENCES contexts(context_id),
    notes               TEXT,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by          VARCHAR(100) NOT NULL,
    UNIQUE(term_id_from, term_id_to, relation_type)
);

CREATE INDEX idx_relations_from ON term_relations(term_id_from);
CREATE INDEX idx_relations_to ON term_relations(term_id_to);
CREATE INDEX idx_relations_type ON term_relations(relation_type);
```

**Relation Types (W3C SKOS):**

| Type | Description | Example |
|------|-------------|---------|
| `SYNONYM` | Exact equivalence | "aircraft" ↔ "airplane" |
| `ANTONYM` | Opposite meaning | "ascent" ↔ "descent" |
| `BROADER` | Generalization | "turbine" → "engine" |
| `NARROWER` | Specialization | "engine" → "turbofan" |
| `RELATED` | Associative | "fuel" ↔ "combustion" |
| `SEE_ALSO` | Cross-reference | "CG" → "weight and balance" |

---

#### 4.2.4 `contexts` (Domain/Usage Context)

```sql
CREATE TABLE contexts (
    context_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    context_name        VARCHAR(255) NOT NULL,
    context_type        VARCHAR(50) NOT NULL,
    ata_chapter         VARCHAR(10),
    discipline          VARCHAR(100),
    lifecycle_phase     VARCHAR(50),
    parent_context_id   UUID REFERENCES contexts(context_id),
    description         TEXT,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE(context_name, context_type)
);

CREATE INDEX idx_contexts_ata ON contexts(ata_chapter);
CREATE INDEX idx_contexts_type ON contexts(context_type);
```

---

#### 4.2.5 `term_context_mapping` (Many-to-Many)

```sql
CREATE TABLE term_context_mapping (
    mapping_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    term_id             UUID NOT NULL REFERENCES terms(term_id) ON DELETE CASCADE,
    context_id          UUID NOT NULL REFERENCES contexts(context_id) ON DELETE CASCADE,
    usage_frequency     VARCHAR(20),
    notes               TEXT,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE(term_id, context_id)
);

CREATE INDEX idx_term_context_term ON term_context_mapping(term_id);
CREATE INDEX idx_term_context_context ON term_context_mapping(context_id);
```

---

#### 4.2.6 `translations` (Multi-Language Support)

```sql
CREATE TABLE translations (
    translation_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    term_id             UUID NOT NULL REFERENCES terms(term_id) ON DELETE CASCADE,
    version_number      INTEGER NOT NULL,
    language_code       VARCHAR(10) NOT NULL,
    translated_name     VARCHAR(255) NOT NULL,
    translated_abbrev   VARCHAR(50),
    translated_def      TEXT,
    status              VARCHAR(50) NOT NULL,
    translator          VARCHAR(100),
    reviewed_by         VARCHAR(100),
    approved_at         TIMESTAMP,
    notes               TEXT,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE(term_id, version_number, language_code)
);

CREATE INDEX idx_translations_term ON translations(term_id);
CREATE INDEX idx_translations_lang ON translations(language_code);
CREATE INDEX idx_translations_status ON translations(status);
```

---

#### 4.2.7 `approvals` (Workflow and Audit Trail)

```sql
CREATE TABLE approvals (
    approval_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type         VARCHAR(50) NOT NULL,
    entity_id           UUID NOT NULL,
    action              VARCHAR(50) NOT NULL,
    actor               VARCHAR(100) NOT NULL,
    actor_role          VARCHAR(50) NOT NULL,
    timestamp           TIMESTAMP NOT NULL DEFAULT NOW(),
    comments            TEXT,
    previous_status     VARCHAR(50),
    new_status          VARCHAR(50),
    ip_address          INET,
    user_agent          TEXT
);

CREATE INDEX idx_approvals_entity ON approvals(entity_type, entity_id);
CREATE INDEX idx_approvals_timestamp ON approvals(timestamp);
CREATE INDEX idx_approvals_actor ON approvals(actor);
```

---

#### 4.2.8 `tbds` (To-Be-Determined / Uncertainty Register)

```sql
CREATE TABLE tbds (
    tbd_id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tbd_code            VARCHAR(50) NOT NULL UNIQUE,
    description         TEXT NOT NULL,
    discovered_in_knu   VARCHAR(50) NOT NULL,
    related_knot        VARCHAR(50) NOT NULL,
    ata_reference       VARCHAR(10) NOT NULL,
    impact_class        VARCHAR(20) NOT NULL,
    blocking            BOOLEAN NOT NULL DEFAULT FALSE,
    spawned_knu_id      VARCHAR(50),
    status              VARCHAR(50) NOT NULL,
    owner_aor           VARCHAR(50) NOT NULL,
    due_date            DATE,
    resolution_date     DATE,
    resolution_summary  TEXT,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by          VARCHAR(100) NOT NULL,
    updated_at          TIMESTAMP,
    updated_by          VARCHAR(100)
);

CREATE INDEX idx_tbds_code ON tbds(tbd_code);
CREATE INDEX idx_tbds_knot ON tbds(related_knot);
CREATE INDEX idx_tbds_ata ON tbds(ata_reference);
CREATE INDEX idx_tbds_status ON tbds(status);
CREATE INDEX idx_tbds_blocking ON tbds(blocking);
```

**Impact Classes:**

| Class | Description | Approval Authority |
|-------|-------------|-------------------|
| **CLASS_I** | Major — Multiple KNUs, cross-KNOT | STK_CM + STK_SE + KNOT owners |
| **CLASS_II** | Minor — Single KNU, localized | STK_DATA |
| **CLASS_III** | Repair — Inline fix | Author |

---

#### 4.2.9 `mod_packages` (Modification Packages)

```sql
CREATE TABLE mod_packages (
    package_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    package_code        VARCHAR(50) NOT NULL UNIQUE,
    tbd_id              UUID NOT NULL REFERENCES tbds(tbd_id),
    primary_knu_id      VARCHAR(50) NOT NULL,
    triggered_knu_ids   TEXT[],
    cross_knot_impacts  JSONB,
    total_effort_sp     INTEGER NOT NULL,
    total_delta_r       INTEGER NOT NULL,
    tt_allocation       INTEGER NOT NULL,
    baseline_impact     VARCHAR(50),
    effectivity_date    DATE,
    status              VARCHAR(50) NOT NULL,
    approved_at         TIMESTAMP,
    approved_by         VARCHAR(100),
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by          VARCHAR(100) NOT NULL
);

CREATE INDEX idx_mod_packages_tbd ON mod_packages(tbd_id);
CREATE INDEX idx_mod_packages_status ON mod_packages(status);
CREATE INDEX idx_mod_packages_effectivity ON mod_packages(effectivity_date);
```

---

#### 4.2.10 `knu_triggers` (KNU Cascade Mapping)

```sql
CREATE TABLE knu_triggers (
    trigger_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_knu_id       VARCHAR(50) NOT NULL,
    triggered_knu_id    VARCHAR(50) NOT NULL,
    trigger_type        VARCHAR(50) NOT NULL,
    trigger_reason      TEXT,
    estimated_effort_sp INTEGER,
    estimated_delta_r   INTEGER,
    status              VARCHAR(50) NOT NULL,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    UNIQUE(source_knu_id, triggered_knu_id)
);

CREATE INDEX idx_knu_triggers_source ON knu_triggers(source_knu_id);
CREATE INDEX idx_knu_triggers_triggered ON knu_triggers(triggered_knu_id);
CREATE INDEX idx_knu_triggers_status ON knu_triggers(status);
```

---

## 5. Configuration Management Integration

### 5.1 Modification Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     TBD DISCOVERY & MODIFICATION WORKFLOW                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. DISCOVERY → 2. IMPACT ANALYSIS → 3. APPROVAL → 4. EXECUTION → 5. CLOSURE│
│                                                                              │
│  KNU Author identifies uncertainty → TBD created → ModificationPackage      │
│  generated → Approval workflow → KNUs spawned → TBD resolved → TT distributed│
└─────────────────────────────────────────────────���───────────────────────────┘
```

### 5.2 Schema Versioning and Effectivity

```sql
CREATE TABLE schema_migrations (
    migration_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    version             VARCHAR(20) NOT NULL UNIQUE,
    description         TEXT NOT NULL,
    triggered_by        TEXT[],
    applied_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    applied_by          VARCHAR(100) NOT NULL,
    rollback_script     TEXT,
    mod_packages        TEXT[]
);

CREATE INDEX idx_migrations_version ON schema_migrations(version);
```

---

## 6. Versioning Strategy

### 6.1 Term Versioning

| Aspect | Implementation |
|--------|----------------|
| **Version Number** | Sequential integer (1, 2, 3, .. .) |
| **Immutability** | Approved versions are immutable |
| **Current Pointer** | `terms.current_version` references latest approved |
| **History Preservation** | All versions retained in `term_versions` |
| **Hash Integrity** | SHA-256 hash stored for each version |

### 6.2 Schema Versioning

| Aspect | Implementation |
|--------|----------------|
| **Schema Version** | Semantic versioning (MAJOR.MINOR.PATCH) |
| **Migration Scripts** | Forward and rollback SQL scripts |
| **Compatibility** | API version negotiation (v1, v2, etc.) |
| **Change Log** | Maintained in `schema_migrations` table |
| **TBD Linkage** | Each migration linked to triggering TBDs |

---

## 7. Cross-Reference Mechanisms

### 7.1 Internal Cross-References

| Mechanism | Implementation |
|-----------|----------------|
| **Term Relations** | `term_relations` table with typed relationships |
| **Context Linking** | `term_context_mapping` for domain-specific usage |
| **Deprecation Chain** | `replacement_term_id` for deprecated terms |
| **TBD Traceability** | `tbds` table linked to KNUs and modification packages |

### 7.2 External Cross-References

| System | Reference Method | Example |
|--------|------------------|---------|
| **SSOT Artifacts** | Markdown link:  `[term_name](term://term_id)` | `[LH₂](term://3fa85f64-5717-4562-b3fc-2c963f66afa6)` |
| **CSDB CIR** | S1000D applicCrossRefTableRef | `<applicCrossRefTableRef>` |
| **DPP Namespace** | URI: `ampel360:term:{term_id}` | `ampel360:term:3fa85f64-5717-4562-b3fc-2c963f66afa6` |
| **KNU Artifacts** | TBD reference:  `TBD-{ATA}-{seq}` | `TBD-00-003` |

---

## 8. API Specification

### 8.1 REST API Endpoints

#### 8.1.1 Term CRUD Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/terms` | List terms (paginated, filterable) |
| `GET` | `/api/v1/terms/{term_id}` | Get term by ID |
| `GET` | `/api/v1/terms/search? q={query}` | Search terms by name/definition |
| `POST` | `/api/v1/terms` | Create new term (draft) |
| `PUT` | `/api/v1/terms/{term_id}` | Update term (creates new version) |
| `DELETE` | `/api/v1/terms/{term_id}` | Deprecate term |

#### 8.1.2 TBD Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/tbds` | List TBDs (filterable by status, KNOT, ATA) |
| `GET` | `/api/v1/tbds/{tbd_id}` | Get TBD details |
| `POST` | `/api/v1/tbds` | Create new TBD |
| `PUT` | `/api/v1/tbds/{tbd_id}/resolve` | Mark TBD as resolved |
| `GET` | `/api/v1/tbds/{tbd_id}/impact` | Get impact analysis |

#### 8.1.3 Modification Package Operations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/mod-packages` | List modification packages |
| `GET` | `/api/v1/mod-packages/{package_id}` | Get package details |
| `POST` | `/api/v1/mod-packages` | Create modification package from TBD |
| `PUT` | `/api/v1/mod-packages/{package_id}/approve` | Approve package |
| `GET` | `/api/v1/mod-packages/{package_id}/triggers` | Get triggered KNUs |

---

## 9. Integration Specifications

### 9.1 SSOT Integration

```markdown
The [LH₂](term://3fa85f64-5717-4562-b3fc-2c963f66afa6) tank stores hydrogen at cryogenic temperatures. 

**Note:** [TBD-28-003] Final LH₂ boil-off rate pending thermal analysis.  
```

### 9.2 CSDB CIR Integration

```xml
<commonRepository>
  <commonInfo>
    <commonInfoDescrPara id="term-lh2">
      <simplePara>
        <emphasis emphasisType="em01">LH₂</emphasis> 
        (Liquid Hydrogen): Hydrogen in liquid state at cryogenic temperature (~20 K).
      </simplePara>
    </commonInfoDescrPara>
  </commonInfo>
</commonRepository>
```

### 9.3 DPP Namespace Integration

```json
{
  "component": {
    "type": "ampel360:term:fuel-cell",
    "definition": "ampel360:term:3fa85f64-5717-4562-b3fc-2c963f66afa6@3"
  }
}
```

---

## 10. Performance Requirements

| Metric | Requirement |
|--------|-------------|
| Query Response Time | <100 ms (95th percentile) |
| Search Response Time | <500 ms (full-text search) |
| Write Latency | <50 ms |
| TBD Impact Analysis | <2 seconds |
| Modification Package Generation | <5 seconds |
| Concurrent Users | 100+ simultaneous |
| Database Size | Support 50,000+ terms, 1,000+ TBDs |
| Version History | Retain all versions indefinitely |

---

## 11. Security

| Aspect | Implementation |
|--------|----------------|
| Authentication | OAuth 2.0 / OIDC |
| Authorization | Role-based (STK_* roles) |
| Audit Trail | All actions logged in `approvals` table |
| Data Integrity | SHA-256 hashes for versions |
| Encryption at Rest | PostgreSQL transparent encryption |
| Encryption in Transit | TLS 1.3 |
| TBD Access Control | Blocking TBDs require elevated approval |

---

## 12. Migration and Deployment

### 12.1 Initial Data Population

| Source | Import Method | Priority |
|--------|---------------|----------|
| ATA iSpec 2200 | Batch CSV import | HIGH |
| S1000D Issue 5. 0 | XML parser + API | HIGH |
| AMPEL360 Legacy | Manual curation + API | MEDIUM |

### 12.2 Schema Migration Example

```bash
# Apply migration v1.1. 0 (triggered by TBD-00-003)
psql -U ampel360_admin -d terminology_db -f migrations/v1.1.0_term_type_taxonomy.sql

# Rollback
psql -U ampel360_admin -d terminology_db -f rollbacks/v1.1.0_rollback. sql
```

---

## 13. Traceability

### 13.1 Upstream Traceability

| Source | Reference |
|--------|-----------|
| S1000D Issue 5.0 | CIR specification |
| ATA iSpec 2200 | Terminology guidelines |
| KNOT-00-00-001 | Problem statement |
| KNU-00-00-001-REQ-001 | Program Glossary Requirements |

### 13.2 Downstream Traceability

| Target | Dependency |
|--------|------------|
| All SSOT artifacts | Term references |
| PUB/CSDB | CIR export |
| DPP namespace | Identifier grammar |
| KNU_PLAN. csv | Spawned KNUs from TBDs |
| AWARDS_TT.csv | Modification package TT distribution |

---

## 14. Verification and Validation

### 14.1 Verification Checklist

| Criterion | Method | Status |
|-----------|--------|--------|
| Schema creates successfully | SQL script execution | ☐ |
| Constraints enforce data integrity | Test case execution | ☐ |
| Indexes improve query performance | Query plan analysis | ☐ |
| API endpoints return correct data | Integration tests | ☐ |
| Versioning works as specified | Unit tests | ☐ |
| Cross-references resolve correctly | Link validation | ☐ |
| TBD workflow executes correctly | End-to-end test | ☐ |
| Modification packages generate accurately | Impact analysis validation | ☐ |
| No KNU ID conflicts with existing repository | ID collision check | ☐ |

### 14.2 Validation Test Cases

| Test ID | Description | Expected Result |
|---------|-------------|-----------------|
| TV-001 | Create term via API | Term appears in database with DRAFT status |
| TV-002 | Create new version | Version increments, old version retained |
| TV-003 | Approve version | Status changes to APPROVED, audit trail created |
| TV-004 | Create synonym relation | Bidirectional relation created |
| TV-005 | Deprecate term | Status = DEPRECATED, replacement_term_id set |
| TV-006 | Export to S1000D CIR | Valid XML per S1000D schema |
| TV-007 | Query by context | Returns only terms in specified ATA chapter |
| TV-008 | Create TBD | TBD record created, impact analysis triggered |
| TV-009 | Generate modification package | Package with primary + triggered KNUs created |
| TV-010 | Resolve TBD | TBD status = RESOLVED, package status = COMPLETE |
| TV-011 | Distribute package TT | TT allocated per formula with cascade bonus |
| TV-012 | Validate spawned KNU IDs | No conflicts with existing KNU_PLAN.csv |

---

## 15. Open Items, TBDs, and Modification Impact Analysis

### 15.1 TBD Register with Correct KNU IDs (No Conflicts)

| TBD ID | Description | Discovered In | Impact Class | Spawned KNU (Primary) | Triggered KNUs (Secondary) | Blocking | Status |
|--------|-------------|---------------|--------------|----------------------|---------------------------|----------|--------|
| TBD-00-001 | Finalize PostgreSQL version (15 vs 16) | KNU-00-00-001-ICD-001 | **CLASS II** | **KNU-00-00-001-ANA-002** | — | NO | OPEN |
| TBD-00-002 | Select GraphQL framework (Apollo vs Hasura) | KNU-00-00-001-ICD-001 | **CLASS II** | **KNU-00-00-001-ANA-003** | KNU-00-00-001-ICD-001 (minor update) | NO | OPEN |
| TBD-00-003 | Define full `term_type` enumeration | KNU-00-00-001-ICD-001 | **CLASS I** | **KNU-00-00-001-REQ-002** | KNU-00-00-001-ICD-001 (mod)<br>KNU-00-00-001-TEST-001 (mod)<br>**KNU-00-00-001-PUB-002** (new)<br>KNU-96-10-001-ICD-003 (cross-KNOT) | YES | OPEN |
| TBD-00-004 | Establish translation workflow with vendor | KNU-00-00-001-ICD-001 | **CLASS II** | **KNU-00-00-002-PLAN-001** | — | NO | OPEN |
| TBD-00-005 | Define CSDB CIR export frequency | KNU-00-00-001-ICD-001 | **CLASS I** | **KNU-00-00-001-ICD-002** | KNU-00-00-001-TEST-002 (new)<br>KNU-00-00-001-PLAN-002 (new) | YES | OPEN |
| TBD-00-006 | Coordinate DPP namespace integration | KNU-00-00-001-ICD-001 | **CLASS I** | KNU-96-10-001-ICD-002 | KNU-96-10-001-TEST-001 (new)<br>KNU-00-00-001-ICD-001 (mod) | YES | OPEN |

**✅ Verification:** All spawned KNU IDs verified against existing repository structure.  No conflicts detected.

---

### 15.2 Modification Package:  TBD-00-003 (Term Type Taxonomy)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  MOD-00-001:  TERM TYPE TAXONOMY PACKAGE                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  TBD-00-003: Define term_type enumeration                                   │
│  Impact Class: CLASS I (Major Modification)                                 │
│  Blocking: YES                                                              │
│  Related KNOT:  KNOT-00-00-001                                               │
│  ATA Reference: ATA-00                                                      │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ PRIMARY SPAWN                                                        │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │ KNU-00-00-001-REQ-002: Term Type Taxonomy Requirements              │   │
│  │   Type: REQ | Class:  SSOT | REC: LC02                               │   │
│  │   Effort: 5 SP | ΔR: -15 | Owner: STK_CM                            │   │
│  │   Due:  2026-02-15                                                    │   │
│  │   ✅ No conflict (REQ-001 exists in repo)                            │   │
│  └────────────────────────────────────────────────��────────────────────┘   │
│                              │                                               │
│                              ├───[TRIGGERS]────────────────────────────┐    │
│                              │                                          │    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ TRIGGERED MODIFICATIONS                                              │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │ 1. KNU-00-00-001-ICD-001 (MODIFICATION)                             │   │
│  │    Action: ALTER TABLE terms ADD CONSTRAINT term_type_check         │   │
│  │    Effort: 2 SP | ΔR:  -3 | Owner: STK_DATA                          │   │
│  │    ✅ This document (modification tracked in metadata)              │   │
│  │                                                                      │   │
│  │ 2. KNU-00-00-001-TEST-001 (NEW)                                     │   │
│  │    Action: Add term_type validation test cases                      │   │
│  │    Effort: 3 SP | ΔR:  -2 | Owner: STK_TEST                          │   │
│  │    ✅ No conflict (no TEST KNUs exist in repo)                      │   │
│  │                                                                      │   │
│  │ 3. KNU-00-00-001-PUB-002 (NEW)                                      │   │
│  │    Artifact: Term Type Usage Guide (AMM CSDB)                       │   │
│  │    Effort: 4 SP | ΔR: -3 | Owner: STK_CM                            │   │
│  │    ✅ No conflict (PUB-001 exists in repo = glossary DM)            │   │
│  │                                                                      │   │
│  │ 4. KNU-96-10-001-ICD-003 (CROSS-KNOT NEW)                           │   │
│  │    Artifact: DPP Term Type Namespace Mapping                        │   │
│  │    Effort: 6 SP | ΔR:  -5 | Owner: STK_DATA                          │   │
│  │    Spillover to KNOT-00-00-001:  -2. 5 (λ = 0.5)                      │   │
│  │    ✅ ATA-96 namespace, no conflict                                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ PACKAGE TOTALS                                                       │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │ Primary Effort:            5 SP                                       │   │
│  │ Triggered Effort:       15 SP                                        │   │
│  │ Total Effort:           20 SP                                        │   │
│  │                                                                      │   │
│  │ Primary ΔR:            -15                                           │   │
│  │ Triggered ΔR:         -10. 5 (including spillover)                    │   │
│  │ Total ΔR:             -25.5                                          │   │
│  │                                                                      │   │
│  │ Base TT Allocation:     20 TT (100 TT × 0.20 impact weight)         │   │
│  │ TBD Resolution Bonus:   +2 TT (10% for blocking)                    │   │
│  │ Cascade Mgmt Bonus:     +2 TT (10% for 4 triggered KNUs)            │   │
│  │ Total TT:                24 TT                                        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ TT DISTRIBUTION                                                      │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │ KNU-00-00-001-REQ-002:     12 TT (50% - primary)                    │   │
│  │ KNU-00-00-001-ICD-001:      3 TT (13% - triggered)                  │   │
│  │ KNU-00-00-001-TEST-001:     3 TT (13% - triggered)                  │   │
│  │ KNU-00-00-001-PUB-002:      4 TT (17% - triggered)                  │   │
│  │ KNU-96-10-001-ICD-003:      2 TT ( 8% - cross-KNOT)                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  ┌────────────────────────────────────────��────────────────────────────┐   │
│  │ EFFECTIVITY CONTROL                                                  │   │
│  ├─────────────────────────────────────────────────────────────────────┤   │
│  │ Baseline Impact:    Schema v1.1.0                                    │   │
│  │ Effectivity Date:   2026-02-15                                       │   │
│  │ Category:           "Before Next Baseline" (mandatory)               │   │
│  │ Approval Required:  STK_CM + STK_SE + STK_DATA (KNOT-96 owner)      │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Status: PLANNED                                                             │
│  Created: 2026-01-11 by STK_DATA                                            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 15.3 Spawned KNU Descriptions (Verified Against Repository)

#### KNU-00-00-001-ANA-002:  Database Platform Selection Analysis

**Purpose:** Evaluate PostgreSQL 15 vs 16 for terminology database  
**Spawned By:** TBD-00-001  
**Artifact Class:** SSOT (Analysis)  
**REC:** LC05  
**Acceptance Criteria:** Trade study complete; recommendation approved by STK_DATA  
**Effort:** 2 SP  
**ΔR:** -2  
**Priority:** MEDIUM  
**Due Date:** 2026-02-01  
**Blocking:** NO  
**✅ Verified:** ANA-001 exists in repo (gap analysis), so ANA-002 is next available  

---

#### KNU-00-00-001-ANA-003: GraphQL Framework Trade Study

**Purpose:** Evaluate Apollo vs Hasura for API implementation  
**Spawned By:** TBD-00-002  
**Artifact Class:** SSOT (Analysis)  
**REC:** LC05  
**Acceptance Criteria:** Prototype evaluation; performance benchmarks; recommendation  
**Effort:** 3 SP  
**ΔR:** -3  
**Priority:** MEDIUM  
**Due Date:** 2026-02-01  
**Blocking:** NO  
**Triggers:** KNU-00-00-001-ICD-001 (minor API update)  
**✅ Verified:** ANA-002 allocated above, so ANA-003 is next  

---

#### KNU-00-00-001-REQ-002: Term Type Taxonomy Requirements

**Purpose:** Define complete enumeration of `term_type` values  
**Spawned By:** TBD-00-003  
**Artifact Class:** SSOT (Requirements)  
**REC:** LC02  
**Acceptance Criteria:** Taxonomy approved by STK_CM + STK_SE; integrated with schema  
**Effort:** 5 SP  
**ΔR:** -15  
**Priority:** HIGH  
**Due Date:** 2026-02-15  
**Blocking:** **YES** — Blocks schema finalization  
**Triggers:**
  - KNU-00-00-001-ICD-001 (schema modification)
  - KNU-00-00-001-TEST-001 (test update)
  - KNU-00-00-001-PUB-002 (new documentation)
  - KNU-96-10-001-ICD-003 (cross-KNOT integration)
**✅ Verified:** REQ-001 exists in repo (glossary requirements), so REQ-002 is next available  

---

#### KNU-00-00-001-TEST-001: Schema Validation Tests

**Purpose:** Comprehensive test suite for term_type validation  
**Spawned By:** TBD-00-003 (triggered by REQ-002)  
**Artifact Class:** SSOT (Test)  
**REC:** LC06  
**Acceptance Criteria:** Test cases cover all term types; 100% pass rate  
**Effort:** 3 SP  
**ΔR:** -2  
**Priority:** HIGH  
**Due Date:** 2026-02-20  
**Blocking:** NO  
**✅ Verified:** No TEST KNUs exist in repo yet, so TEST-001 is first  

---

#### KNU-00-00-001-PUB-002: Term Type Usage Guide

**Purpose:** Documentation for CSDB authors on term type selection  
**Spawned By:** TBD-00-003 (triggered by REQ-002)  
**Artifact Class:** CSDB (Publication)  
**REC:** LC11  
**Acceptance Criteria:** DM passes BREX; integrated with AMM  
**Effort:** 4 SP  
**ΔR:** -3  
**Priority:** MEDIUM  
**Due Date:** 2026-03-01  
**Blocking:** NO  
**✅ Verified:** PUB-001 exists in repo (glossary DM), so PUB-002 is next available  

---

#### KNU-00-00-002-PLAN-001: Translation Workflow Plan

**Purpose:** Define translation process, vendor selection, quality gates  
**Spawned By:** TBD-00-004  
**Artifact Class:** SSOT (Plan)  
**REC:** LC08  
**Acceptance Criteria:** Workflow documented; vendor onboarded; SLA defined  
**Effort:** 4 SP  
**ΔR:** -5  
**Priority:** MEDIUM  
**Due Date:** 2026-03-01  
**Blocking:** NO  
**Note:** Spawns new KNOT-00-00-002 (Translation Governance)  
**✅ Verified:** This is for KNOT-00-00-002, separate from KNOT-00-00-001  

---

#### KNU-00-00-001-ICD-002:  CSDB CIR Export Interface Specification

**Purpose:** Define CIR export frequency, format, validation, integration  
**Spawned By:** TBD-00-005  
**Artifact Class:** SSOT (ICD)  
**REC:** LC04  
**Acceptance Criteria:** Export specification approved; integration tested  
**Effort:** 6 SP  
**ΔR:** -10  
**Priority:** HIGH  
**Due Date:** 2026-02-15  
**Blocking:** **YES** — Required for CSDB integration  
**Triggers:**
  - KNU-00-00-001-TEST-002 (export validation tests)
  - KNU-00-00-001-PLAN-002 (CIR synchronization plan)
**✅ Verified:** ICD-001 is this document, so ICD-002 is next available  

---

#### KNU-00-00-001-TEST-002: CIR Export Validation Tests

**Purpose:** Test suite for CSDB CIR export functionality  
**Spawned By:** TBD-00-005 (triggered by ICD-002)  
**Artifact Class:** SSOT (Test)  
**REC:** LC06  
**Acceptance Criteria:** Export validation passes; S1000D schema compliance verified  
**Effort:** 4 SP  
**ΔR:** -2  
**Priority:** HIGH  
**Due Date:** 2026-02-28  
**Blocking:** NO  
**✅ Verified:** TEST-001 allocated above, so TEST-002 is next  

---

#### KNU-96-10-001-ICD-002: DPP-Terminology Namespace Integration

**Purpose:** Define URI patterns, identifier grammar, resolution mechanism  
**Spawned By:** TBD-00-006  
**Artifact Class:** SSOT (ICD)  
**REC:** LC04  
**Acceptance Criteria:** Namespace collision resolved; integration spec approved  
**Effort:** 8 SP  
**ΔR:** -8 (primary to KNOT-96), -4 (spillover to KNOT-00)  
**Priority:** HIGH  
**Due Date:** 2026-03-01  
**Blocking:** **YES** — Cross-KNOT dependency  
**Cross-KNOT:** Requires coordination with KNOT-96-10-001 owner  
**Triggers:**
  - KNU-96-10-001-TEST-001 (namespace collision tests)
  - KNU-00-00-001-ICD-001 (update URI resolution)
**✅ Verified:** ATA-96 namespace, separate from ATA-00  

---

### 15.4 KNU ID Allocation Summary

| KNOT | Type | Existing in Repo | Spawned by TBDs | Total | Status |
|------|------|------------------|-----------------|-------|--------|
| KNOT-00-00-001 | REQ | 1 (REQ-001) | 1 (REQ-002) | 2 | ✅ No conflict |
| KNOT-00-00-001 | ICD | 1 (ICD-001) | 1 (ICD-002) | 2 | ✅ No conflict |
| KNOT-00-00-001 | ANA | 1 (ANA-001) | 2 (ANA-002, ANA-003) | 3 | ✅ No conflict |
| KNOT-00-00-001 | TEST | 0 | 2 (TEST-001, TEST-002) | 2 | ✅ No conflict |
| KNOT-00-00-001 | PUB | 1 (PUB-001) | 1 (PUB-002) | 2 | ✅ No conflict |
| KNOT-00-00-001 | CM | 1 (CM-001) | 0 | 1 | ✅ Existing |
| KNOT-00-00-002 | PLAN | 0 | 1 (PLAN-001) | 1 | ✅ Different KNOT |

---

### 15.5 TBD Resolution Impact on KNOT Residual

| TBD ID | Spawned KNU | Est.  Residual Reduction | Notes |
|--------|-------------|-------------------------|-------|
| TBD-00-001 | KNU-00-00-001-ANA-002 | -2 | Minor technical decision |
| TBD-00-002 | KNU-00-00-001-ANA-003 | -3 | API framework choice |
| TBD-00-003 | KNU-00-00-001-REQ-002 + 4 triggered | -25.5 | **Critical** - Schema foundation + cascade |
| TBD-00-004 | KNU-00-00-002-PLAN-001 | -5 | Spawns new KNOT |
| TBD-00-005 | KNU-00-00-001-ICD-002 + 2 triggered | -14 | **Critical** - CSDB integration |
| TBD-00-006 | KNU-96-10-001-ICD-002 + 2 triggered | -12 (incl. spillover) | **Critical** - Cross-ATA |
| **Total** | — | **-61. 5** | Expected residual reduction from TBD resolution |

**KNOT-00-00-001 Impact:**
- Initial Residual: 100
- Planned KNU completion (without TBDs): ~70
- With TBD-spawned KNU completion: ~38. 5
- **Target:** ≤15
- **Gap:** 23.5 points (requires additional KNUs or revised estimates)

---

### 15.6 Effectivity Control

| TBD ID | Resolution Date | Baseline Impact | Effective From | Artifacts Modified |
|--------|----------------|-----------------|----------------|-------------------|
| TBD-00-001 | 2026-02-01 | Schema v1.0.1 | 2026-02-01 | ICD-001 (config update) |
| TBD-00-002 | 2026-02-01 | Schema v1.0.2 | 2026-02-01 | ICD-001 (API update) |
| TBD-00-003 | 2026-02-15 | Schema v1.1.0 | 2026-02-15 | ICD-001, REQ-002, TEST-001, PUB-002, ICD-003 |
| TBD-00-005 | 2026-02-15 | Schema v1.2.0 | 2026-02-15 | ICD-001, ICD-002, TEST-002, PLAN-002 |
| TBD-00-006 | 2026-03-01 | Schema v1.2.0 | 2026-03-01 | ICD-001, ICD-002 (cross-ATA), TEST-001 |

---

## 16. Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I01-R01 | 2026-01-11 | STK_DATA | Initial draft |
| I01-R02 | 2026-01-11 | STK_DATA | Added TBD/modification package tables; configuration management integration |
| I01-R03 | 2026-01-11 | STK_DATA | **Corrected spawned KNU IDs to align with existing repository structure; verified no conflicts with AMPEL360-Q100 repo** |

---

## 17. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author (STK_DATA) | | | |
| Reviewer (STK_CM) | | | |
| Reviewer (STK_SE) | | | |
| Approver (STK_CM) | | | |

---

*This document is part of the AMPEL360 Q100 SSOT baseline under LC04_DESIGN_DEFINITION.*

*Generated as KNU artifact for KNOT-00-00-001.*

*✅ Verified: No KNU ID conflicts with existing repository structure (checked 2026-01-11).*
```

---

## Summary of Changes in I01-R03

| Change | Reason | Impact |
|--------|--------|--------|
| KNU-00-00-001-ANA-001 → **ANA-002** | ANA-001 exists in repo (gap analysis) | Spawned by TBD-00-001 |
| KNU-00-00-001-ANA-002 → **ANA-003** | Shifted up to avoid conflict | Spawne
