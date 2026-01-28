# GENESIS — Uncertainty Discovery

**Section:** 96-50-audit-evidence-packs-and-signoffs  
**Purpose:** Systematic discovery and management of unknowns before they become subject-level KNOTs  
**Status:** Active Discovery

---

## Overview

The GENESIS folder captures uncertainties, gaps, and unknowns identified during the development lifecycle. This serves as a structured discovery mechanism before items graduate to formal subject-level KNOT management.

---

## KNOT Types

### O-KNOTs (Origin KNOTs)
- **Definition:** Inherited uncertainties or experience-gap unknowns
- **Source:** Legacy systems, prior projects, industry knowledge gaps
- **Location:** `O-KNOTS.csv`

### Y-KNOTs (Derived KNOTs)
- **Definition:** Regulatory, requirement-driven, or analysis-discovered unknowns
- **Source:** Regulations, standards, requirements analysis, design studies
- **Location:** `Y-KNOTS.csv`

---

## Discovery Process

1. **Identify** — Capture uncertainty as it emerges
2. **Classify** — Determine if O-KNOT or Y-KNOT
3. **Document** — Record in appropriate CSV file
4. **Track** — Update DISCOVERY_LOG.md with narrative
5. **Graduate** — Move to subject-level KNOTs when criteria met

---

## Graduation Criteria

See `GRADUATION_CRITERIA.md` for detailed rules on when GENESIS items should be promoted to subject-level KNOT management.

---

## Files

- `O-KNOTS.csv` — Origin KNOTs registry
- `Y-KNOTS.csv` — Derived KNOTs registry
- `DISCOVERY_LOG.md` — Chronological discovery narrative
- `GRADUATION_CRITERIA.md` — Rules for KNOT promotion
