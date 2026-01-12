# Blocking Relationships and Dependency Chains

## Purpose
Document all blocking relationships between TBDs, KNUs, and KNOTs to enable critical path analysis and prioritization.

## Blocking Chains

### Chain 1: Cloud Infrastructure Decision

```
TBD-00-00-001-ANA-002-002 (Cloud vs on-prem)
    │
    ├── BLOCKS ──► TBD-00-00-001-CM-003-001 (Cloud provider for backup)
    │                   │
    │                   └── BLOCKS ──► KNU-00-00-001-ANA-006 (Cloud Provider Selection)
    │
    └── BLOCKS ──► KNU-00-00-001-CM-003 (Backup Strategy - partial)
                        │
                        └── BLOCKS ──► KNU-00-00-001-TEST-003 (DR Test Procedure)
```

**Impact:** 4 artifacts blocked
**Priority:** CLASS I — Requires immediate escalation
**Owner:** STK_DATA
**Target Resolution:** 2026-03-31

---

### Chain 2: Requirements Tool Decision

```
TBD-00-00-004-ANA-001-001 (Requirements tool selection)
    │
    ├── BLOCKS ──► KNU-00-00-004-ANA-002 (Tool Selection Analysis)
    │
    └── BLOCKS ──► Full traceability matrix implementation
```

**Impact:** 2 artifacts blocked + downstream impact
**Priority:** CLASS I
**Owner:** STK_SE
**Target Resolution:** 2026-02-15

---

### Chain 3: Multi-Language Decision

```
TBD-00-00-002-ANA-001-002 (Multi-language requirements)
    │
    └── BLOCKS ──► KNU-00-00-002-ANA-003 (Multi-language Strategy)
                        │
                        └── BLOCKS ──► All PUB multiplicity calculations
```

**Impact:** Affects total file count projections
**Priority:** CLASS I
**Owner:** STK_PUB
**Target Resolution:** 2026-02-01

---

## Blocking Matrix

| Blocked Item | Blocked By | Chain Length | Estimated Delay |
|--------------|------------|--------------|-----------------|
| KNU-00-00-001-ANA-006 | TBD-00-00-001-ANA-002-002 | 2 | 8 weeks |
| KNU-00-00-001-TEST-003 | TBD-00-00-001-ANA-002-002 | 3 | 10 weeks |
| KNU-00-00-004-ANA-002 | TBD-00-00-004-ANA-001-001 | 1 | 2 weeks |
| KNU-00-00-002-ANA-003 | TBD-00-00-002-ANA-001-002 | 1 | 2 weeks |

## Critical Path

The longest blocking chain is **Cloud Infrastructure Decision** with 3 levels of dependency.

**Critical Path Length:** 4 weeks
**Critical Path Items:**
1. TBD-00-00-001-ANA-002-002 (decision)
2. TBD-00-00-001-CM-003-001 (dependent TBD)
3. KNU-00-00-001-CM-003 (artifact update)
4. KNU-00-00-001-TEST-003 (dependent artifact)

## Resolution Priority Order

1. 🔴 TBD-00-00-001-ANA-002-002 — Unblocks most items
2. 🔴 TBD-00-00-004-ANA-001-001 — Required for traceability
3. 🔴 TBD-00-00-002-ANA-001-002 — Affects projections
4. 🟡 TBD-00-00-001-CM-003-001 — Depends on #1
5. 🟡 Remaining CLASS II TBDs

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial release |
