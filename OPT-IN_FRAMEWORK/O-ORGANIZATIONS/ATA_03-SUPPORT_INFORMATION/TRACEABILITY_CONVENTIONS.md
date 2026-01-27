# Traceability Conventions — ATA 03

**Chapter:** SUPPORT INFORMATION  
**Status:** Scaffold Ready  
**Last Updated:** 2026-01-27

---

## Relationship Types

| Type | Description | Direction |
|------|-------------|-----------|
| derives_from | Requirement derivation | Child → Parent |
| satisfies | Design satisfies requirement | Design → Requirement |
| verifies | Test verifies requirement | Test → Requirement |
| implements | Code implements design | Code → Design |

---

## Trace Link Semantics

### Upstream Links
- Requirements trace to regulations
- Design traces to requirements

### Downstream Links
- Requirements flow to design
- Design flows to implementation

---

## Directionality Rules

1. All links must be bidirectional in traceability matrices
2. Parent-child relationships use `derives_from`
3. Verification relationships use `verifies`
