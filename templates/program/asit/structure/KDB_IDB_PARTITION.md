# KDB / IDB Partition

## Overview

The data partition separates verified knowledge (KDB) from working instances (IDB).

## Knowledge Database (KDB)

- Contains **verified, baselined** artifacts
- Read-only during normal operations
- Changes require formal change control (ECR/ECO)
- Organized by lifecycle phase

## Instance Database (IDB)

- Contains **working, in-progress** artifacts
- Writable during development
- Promoted to KDB after verification and approval
- May contain draft, experimental, or temporary data

## Promotion Rules

1. Artifact passes all BREX validation rules
2. Artifact is reviewed and approved
3. Artifact is assigned to a baseline
4. Artifact is copied from IDB to KDB
5. IDB copy is marked as superseded or removed
