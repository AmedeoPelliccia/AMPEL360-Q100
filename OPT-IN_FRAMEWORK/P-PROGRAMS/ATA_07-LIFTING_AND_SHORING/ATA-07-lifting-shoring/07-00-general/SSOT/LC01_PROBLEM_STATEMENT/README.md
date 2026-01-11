# LC01 Problem Statement

This folder contains the uncertainty orchestration files for this ATA section.

## Purpose

LC01 (Problem Statement) captures Known Unknowns (KNOTs) — technical uncertainties that must be resolved during the system lifecycle. Each KNOT represents a gap in knowledge that requires investigation and resolution.

## Files

| File | Purpose | Required |
|------|---------|----------|
| `KNOTS.csv` | Uncertainty register with problem statements | Yes |
| `KNU_PLAN.csv` | Expected Knowledge Units (KNUs) per KNOT | Yes |
| `TIMELINE.csv` | Milestones and target dates | Yes |
| `RACI.csv` | Stakeholder responsibility matrix | Yes |
| `TOKENOMICS_TT.yaml` | Teknia Token reward allocation | Yes |
| `AWARDS_TT.csv` | Actual TT distributions at closure | Generated |

## KNOTS.csv Schema

```csv
KNOT_ID,Title,Problem_Statement,Scope,Status,Owner_AoR,Stakeholders,Residual_Before,Residual_Target,Dependencies,Target_Close_Date,Created_Date,Last_Updated
```

### Field Definitions

- **KNOT_ID**: Unique identifier (pattern: `KNOT-XX-YY-NNN`)
- **Title**: Short descriptive title
- **Problem_Statement**: Full description of the uncertainty
- **Scope**: In-scope and out-of-scope items
- **Status**: OPEN, IN_PROGRESS, COMPLETE, ACCEPTED, CANCELLED
- **Owner_AoR**: Responsible Area of Responsibility
- **Stakeholders**: Semicolon-separated list of stakeholders
- **Residual_Before**: Initial uncertainty level (0-100)
- **Residual_Target**: Target uncertainty level at closure (0-100)
- **Dependencies**: Semicolon-separated list of related KNOT_IDs
- **Target_Close_Date**: Expected resolution date (ISO 8601)
- **Created_Date**: KNOT creation date (ISO 8601)
- **Last_Updated**: Last modification date (ISO 8601)

## KNU_PLAN.csv Schema

```csv
KNU_ID,KNOT_ID,KNU_Type,Artifact_Class,Expected_Location,Title,Acceptance_Criteria,Verification_Method,Owner_AoR,Due_Date,Status,Effort_Predicted,Priority,REC
```

### KNU Types

- REQ: Requirement document
- ICD: Interface control document
- ANA: Analysis or model
- SAF: Safety/reliability artifact
- TEST: Test procedure or report
- CM: Configuration management artifact
- PUB-AMM: Publication data module

## TOKENOMICS_TT.yaml Structure

The tokenomics file defines reward allocation for uncertainty resolution:

- Node pool allocation
- Per-KNOT reward pools
- Eligibility rules
- Allocation algorithm
- Adjacency matrix (spillover relationships)
- Closure criteria
- Distribution process

## Usage

1. Create initial KNOTS.csv with identified uncertainties
2. Develop KNU_PLAN.csv with resolution artifacts
3. Define TIMELINE.csv milestones
4. Assign responsibilities in RACI.csv
5. Configure rewards in TOKENOMICS_TT.yaml
6. Track progress and update AWARDS_TT.csv at closure

## Related Documentation

- See [SSOT Structure](../../../README.md) for lifecycle phase organization
- Refer to adjacent LC folders for requirement flow-down
