# ID Collision Prevention Workflow

## 1. Purpose
Define the automated and manual procedures to prevent identifier collisions across the AMPEL360 Q100 knowledge base.

## 2. Automated Prevention

### 2.1 GitHub Actions Workflow

```yaml
name: ID Collision Check

on:
  push:
    paths:
      - 'OPT-IN_FRAMEWORK/**/*.csv'
      - 'OPT-IN_FRAMEWORK/**/*.md'
  pull_request:
    paths:
      - 'OPT-IN_FRAMEWORK/**/*.csv'
      - 'OPT-IN_FRAMEWORK/**/*.md'

jobs:
  check-collisions:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Check KNU ID Collisions
        run: |
          # Extract all KNU IDs
          grep -rohE 'KNU-[0-9]{2}-[0-9]{2}-[0-9]{3}-[A-Z]+-[0-9]{3}' \
            OPT-IN_FRAMEWORK/ | sort | uniq -d > /tmp/knu_dups.txt
          
          if [ -s /tmp/knu_dups.txt ]; then
            echo "❌ Duplicate KNU IDs found:"
            cat /tmp/knu_dups.txt
            exit 1
          fi
          echo "✅ No KNU ID collisions"
      
      - name: Check TBD ID Collisions
        run: |
          # Extract all canonical TBD IDs
          grep -rohE 'TBD-[0-9]{2}-[0-9]{2}-[0-9]{3}-[A-Z]+-[0-9]{3}-[0-9]{3}' \
            OPT-IN_FRAMEWORK/ | sort | uniq -d > /tmp/tbd_dups.txt
          
          if [ -s /tmp/tbd_dups.txt ]; then
            echo "❌ Duplicate TBD IDs found:"
            cat /tmp/tbd_dups.txt
            exit 1
          fi
          echo "✅ No TBD ID collisions"
      
      - name: Validate ID References
        run: |
          # TODO: Implement detailed cross-file ID reference validation logic.
          # Placeholder to keep the workflow passing until validate_id_references.py is added.
          echo "Skipping ID reference validation (validator script not yet implemented)."
```

### 2.2 Pre-commit Hook

```bash
#!/bin/bash
# .git/hooks/pre-commit

echo "Checking for ID collisions..."

# Extract IDs from staged files
git diff --cached --name-only | xargs grep -hE 'KNU-[0-9]{2}' 2>/dev/null | \
  grep -oE 'KNU-[0-9]{2}-[0-9]{2}-[0-9]{3}-[A-Z]+-[0-9]{3}' | sort > /tmp/staged_knus.txt

# Build registry of existing KNU IDs from current HEAD
git grep -hE 'KNU-[0-9]{2}' HEAD -- OPT-IN_FRAMEWORK/ 2>/dev/null | \
  grep -oE 'KNU-[0-9]{2}-[0-9]{2}-[0-9]{3}-[A-Z]+-[0-9]{3}' | sort -u > /tmp/existing_knus.txt

# Check against existing registry
comm -12 /tmp/staged_knus.txt /tmp/existing_knus.txt > /tmp/collisions.txt

if [ -s /tmp/collisions.txt ]; then
  echo "❌ ID collision detected!"
  cat /tmp/collisions.txt
  exit 1
fi

echo "✅ No collisions detected"
exit 0
```

## 3. Manual Procedures

### 3.1 New ID Request

```
1. Submitter: Request ID via issue template
2. CM: Verify no existing ID covers the need
3. CM: Allocate next available sequence
4. CM: Update registry (reserve ID)
5. Submitter: Create artifact with reserved ID
6. Submitter: Submit PR including artifact
7. CI/CD: Validate no collision
8. Reviewer: Approve PR
9. Merge: ID now allocated
```

### 3.2 Collision Resolution

```
If collision detected in PR:

1. CI/CD fails with collision error
2. Submitter notified via PR comment
3. Submitter checks:
   a. Is their ID the duplicate?
   b. Or was it allocated to another PR?
4. If their ID is duplicate:
   a. Request new ID from CM
   b. Update artifact
   c. Re-submit PR
5. If concurrent PR collision:
   a. CM determines priority
   b. Later PR reassigned new ID
```

## 4. Registry Maintenance

### 4.1 Registry Files

| Registry | Location | Contents |
|----------|----------|----------|
| KNU_PLAN.csv | SSOT/LC01_PROBLEM_STATEMENT/ | All KNUs and KNOTs |
| TBD_REGISTER.csv | SSOT/LC01_PROBLEM_STATEMENT/ | All TBDs |
| DMC_REGISTER.csv | CSDB/REGISTRY/ | All S1000D DMCs |

### 4.2 Registry Integrity Checks

Weekly automated check:
- All IDs in artifacts exist in registry
- All IDs in registry have corresponding artifacts
- No orphaned IDs (registered but no artifact)
- No rogue IDs (artifact exists but not registered)

## 5. Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Collision rate | <0.1% of PRs | — |
| Average resolution time | <4 hours | — |
| Registry accuracy | >99.9% | — |

## 6. Resolves

**Resolves:** TBD-00-00-002-ICD-001-001 (spawned for collision prevention)

## 7. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-002-CM-001 | ID Management |
| KNU-00-00-002-TEST-001 | ID Validation Tests |

## 8. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_CM | Initial release |
