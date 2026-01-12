# TBD Identifier Grammar Specification

## Purpose

This document defines the canonical grammar for TBD (To Be Determined) identifiers in the AMPEL360 Q100 program.

## Grammar Definition

### Canonical Format

```
TBD-AA-SS-KKK-TYPE-OOO-TTT
```

### Components

| Component | Format | Range | Description |
|-----------|--------|-------|-------------|
| TBD | Literal | — | Entity type marker |
| AA | \d{2} | 00-99 | ATA chapter |
| SS | \d{2} | 00-99 | ATA section |
| KKK | \d{3} | 001-999 | KNOT sequence |
| TYPE | [A-Z]+ | REQ\|ICD\|ANA\|TEST\|SAF\|CM\|PLAN\|PUB | Origin KNU type |
| OOO | \d{3} | 001-999 | Origin KNU type sequence |
| TTT | \d{3} | 001-999 | TBD sequence within origin KNU |

### Regex Pattern

```regex
^TBD-(\d{2})-(\d{2})-(\d{3})-(REQ|ICD|ANA|TEST|SAF|CM|PLAN|PUB)-(\d{3})-(\d{3})$
```

### Semantic Derivation

From a canonical TBD ID, the following can be automatically derived:

| Derived Value | Extraction |
|---------------|------------|
| ATA Chapter | Segments 1-2 |
| ATA Section | Segments 2-3 |
| Parent KNOT | `KNOT-{AA}-{SS}-{KKK}` |
| Origin KNU | `KNU-{AA}-{SS}-{KKK}-{TYPE}-{OOO}` |
| TBD Index | Segment 7 |

### Examples

| Canonical ID | Parent KNOT | Origin KNU | Meaning |
|--------------|-------------|------------|---------|
| TBD-00-00-001-ANA-001-001 | KNOT-00-00-001 | KNU-00-00-001-ANA-001 | 1st TBD in Terminology Gap Analysis |
| TBD-00-00-001-ANA-002-002 | KNOT-00-00-001 | KNU-00-00-001-ANA-002 | 2nd TBD in Database Platform Analysis |
| TBD-28-10-005-ICD-001-001 | KNOT-28-10-005 | KNU-28-10-005-ICD-001 | 1st TBD in Tank Interface Spec |
| TBD-96-10-001-ICD-003-001 | KNOT-96-10-001 | KNU-96-10-001-ICD-003 | 1st TBD in DPP Namespace Mapping |

## Impact Classification

| Class | Description | Action |
|-------|-------------|--------|
| I | Major uncertainty affecting architecture, safety, or certification | Spawns KNU(s), requires escalation |
| II | Minor uncertainty affecting specific artifact | Spawns single resolution KNU |
| III | Repair-level uncertainty | Inline resolution, no KNU spawn |

## Legacy ID Mapping

During transition, legacy IDs (format `TBD-##-###`) are preserved as aliases in the `TBD_LEGACY_ID` column of TBD_REGISTER.csv.

## Validation

All new TBDs MUST use the canonical format. CI/CD validation enforces this rule.

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | Amedeo Pelliccia | Initial specification |
