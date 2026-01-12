# Document ID Management and Collision Prevention

## 1. Purpose
Define procedures for managing unique identifiers across all AMPEL360 Q100 documentation artifacts, preventing collisions and ensuring traceability.

## 2. Scope

### Identifier Types Managed

| ID Type | Format | Example |
|---------|--------|---------|
| KNOT | KNOT-AA-SS-KKK | KNOT-00-00-001 |
| KNU | KNU-AA-SS-KKK-TYPE-OOO | KNU-00-00-001-ANA-001 |
| TBD | TBD-AA-SS-KKK-TYPE-OOO-TTT | TBD-00-00-001-ANA-001-001 |
| DMC | DMC-AMPEL360-AA-SS-SS-SSAA-AAAA-A | DMC-AMPEL360-00-00-00-00A-001A-A |
| REQ | REQ-AA-SYS-NNN | REQ-28-SYS-001 |

## 3. ID Allocation Process

### 3.1 Centralized Registry

All IDs are registered in:
- `KNU_PLAN.csv` — KNUs and KNOTs
- `TBD_REGISTER.csv` — TBDs
- `DMC_REGISTER.csv` — S1000D Data Module Codes (TBD: to be created)
- `REQ_REGISTER.csv` — Requirements (TBD: to be created)

### 3.2 Allocation Workflow

```
1. Requester identifies need for new artifact
2. Check registry for existing ID
3. If new ID needed:
   a. Determine ID type
   b. Look up next available sequence
   c. Reserve ID in registry
   d. Create artifact with reserved ID
4. Commit both registry update and artifact
5. CI/CD validates no collision
```

### 3.3 Sequence Management

| ID Type | Sequence Counter Location | Increment |
|---------|---------------------------|-----------|
| KNOT | Per ATA chapter-section | +1 |
| KNU | Per KNOT + Type | +1 |
| TBD | Per origin KNU | +1 |
| DMC | Per system/subsystem | +1 |

## 4. Collision Prevention

### 4.1 CI/CD Validation

```yaml
# GitHub Action: id-collision-check.yml

Checks performed:
- No duplicate KNU IDs across all CSV files
- No duplicate TBD IDs (canonical format)
- No duplicate DMC codes
- All referenced IDs exist in registries
- ID format matches grammar specification
```

### 4.2 Pre-commit Hooks

```bash
# .git/hooks/pre-commit

1. Extract all new IDs from staged files
2. Check against registries
3. Reject commit if collision detected
4. Warn if ID not in registry
```

### 4.3 Collision Resolution

If collision detected:
1. Identify which artifact was created first (git blame)
2. Reassign ID to newer artifact
3. Update all references
4. Document incident in CM log

## 5. Cross-Repository References

### 5.1 Reference Format

```
[REPO:OWNER/NAME:ID]

Examples:
[REPO:AmedeoPelliccia/AMPEL360-Q100:KNU-00-00-001-ANA-001]
[REPO:AmedeoPelliccia/AMPEL360-Q100-CSDB:DMC-AMPEL360-00-00-00-00A-001A-A]
```

### 5.2 Reference Validation

- CI/CD checks external references via GitHub API
- Broken references flagged as warnings
- Quarterly audit of all external references

## 6. Versioning Convention

### 6.1 Semantic Versioning for KNUs

```
KNU artifact versioning:

Major.Minor.Patch

Where:
- Major: Breaking change (structure, interface)
- Minor: New content, non-breaking
- Patch: Corrections, typos
```

### 6.2 Issue Numbers for S1000D

```
DMC issue numbering:

Issue-Inwork (e.g., 001-00, 002-00)

Where:
- Issue: Published version
- Inwork: Draft iterations
```

## 7. Resolves

**Resolves:** TBD-00-00-002-ICD-001-001 (Version numbering convention)

## 8. Embedded TBDs

[TBD-00-00-002-CM-001-001] Define ID reservation timeout (auto-release if unused)
Impact: CLASS III
Resolution: Inline (30-day reservation, then auto-release with notification)

## 9. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-002-ICD-001 | Document Architecture Spec |
| KNU-00-00-002-REQ-001 | Document Requirements |

| Traced From | Artifact |
|-------------|----------|
| TBD-00-00-002-ICD-001-001 | Version numbering TBD (RESOLVED) |
| KNOT-00-00-002 | Parent KNOT |

## 10. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial release |
