# EU Funding Application Support

## Directory Structure

This directory contains supporting materials for EU funding applications (Clean Aviation, Horizon Europe, Innovation Fund).

---

## Contents

### Application Documents (To Be Created)

| Document | Purpose | Status |
|----------|---------|--------|
| `CONSORTIUM_AGREEMENT.md` | Consortium partnership framework | Planned |
| `WORK_PACKAGE_DESCRIPTIONS.md` | WP breakdown mapped to ATAs | Planned |
| `BUDGET_JUSTIFICATION.md` | Detailed cost breakdowns | Planned |
| `IMPACT_PATHWAYS.md` | Exploitation and dissemination strategy | Planned |
| `DATA_MANAGEMENT_PLAN.md` | FAIR data principles implementation | Planned |
| `RISK_MANAGEMENT_PLAN.md` | Risk register and mitigation | Planned |
| `DISSEMINATION_PLAN.md` | Communication and knowledge transfer | Planned |
| `INNOVATION_FUND_APPLICATION.md` | Innovation Fund specific materials | Planned |

### Supporting Materials

| File | Purpose |
|------|---------|
| `CALL_MONITORING.md` | Active and upcoming call tracker |
| `CONSORTIUM_COMPOSITION.md` | Partner roles and capabilities |
| `LETTER_OF_SUPPORT_TEMPLATE.md` | Template for industry/regulator support letters |

---

## Automation Tools

The following scripts help generate EU application materials from the AMPEL360 Q100 baseline:

### Located in `tools/eu_funding/`

```bash
# Generate consortium summary from RACI matrices
python tools/eu_funding/consortium_summary.py

# Export budget from TT tokenomics
python tools/eu_funding/budget_export.py --output EU_FUNDING/budget_breakdown.csv

# Produce Gantt chart from TIMELINE.csv
python tools/eu_funding/gantt_generator.py --output EU_FUNDING/project_schedule.png

# Compile deliverables list from KNU_PLAN.csv
python tools/eu_funding/deliverables_list.py --output EU_FUNDING/deliverables.xlsx
```

---

## Integration with AMPEL360 Q100

### Data Sources

| EU Requirement | Q100 Source | Location |
|----------------|-------------|----------|
| **Work Packages** | ATA chapters | `OPT-IN_FRAMEWORK/.../` |
| **Deliverables** | KNU_PLAN.csv | `SSOT/LC01_PROBLEM_STATEMENT/KNU_PLAN.csv` |
| **Milestones** | TIMELINE.csv | `SSOT/LC01_PROBLEM_STATEMENT/TIMELINE.csv` |
| **Budget** | TOKENOMICS_TT.yaml | `SSOT/LC01_PROBLEM_STATEMENT/TOKENOMICS_TT.yaml` |
| **Responsibilities** | RACI.csv | `SSOT/LC01_PROBLEM_STATEMENT/RACI.csv` |
| **Technical Baseline** | SSOT/LC02-LC14 | Per-ATA SSOT artifacts |
| **Impact Evidence** | Analysis & verification | `SSOT/LC05_ANALYSIS_MODELS/`, `SSOT/LC06_VERIFICATION/` |

### TEKNIA/KBL Integration

- **NKU tracking** → EU KPI reporting
- **Knowledge Blockchain Ledger** → Audit trail for EU reviewers
- **TEKTOK** → Exploitation and IP management
- **Uncertainty reduction** → TRL progression evidence

See: [EU_FUNDING_ALIGNMENT.md](../EU_FUNDING_ALIGNMENT.md)

---

## Quick Start

### 1. Identify Target Call

- Visit [Clean Aviation portal](https://www.clean-aviation.eu/)
- Check [Horizon Europe Funding & Tenders](https://ec.europa.eu/info/funding-tenders/opportunities/portal/)
- Monitor [Innovation Fund](https://climate.ec.europa.eu/eu-action/funding-climate-action/innovation-fund_en)

### 2. Map Q100 to Call Requirements

- Review call topics and eligibility criteria
- Map Q100 technical content to call scope
- Identify required TRL progression
- Align budget with call funding limits

### 3. Assemble Consortium

- Review `CONSORTIUM_COMPOSITION.md` (to be created)
- Ensure SME participation ≥20%
- Include research institution(s) for dissemination
- Engage certification authority for regulatory pathway

### 4. Draft Proposal

- Use `WORK_PACKAGE_DESCRIPTIONS.md` template
- Generate deliverables list: `python tools/eu_funding/deliverables_list.py`
- Export budget breakdown: `python tools/eu_funding/budget_export.py`
- Prepare Gantt chart: `python tools/eu_funding/gantt_generator.py`

### 5. Submit Application

- Complete EU portal forms
- Upload proposal documents
- Submit letters of support
- Meet call deadline

---

## Support

For EU funding questions:
- Email: funding@ampel360.eu *(placeholder)*
- See: [KNOWLEDGE_SYSTEM_INDEX.md](../KNOWLEDGE_SYSTEM_INDEX.md)
- GitHub Issues: Tag with `eu-funding`

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 0.1 | 2026-01-15 | STK_PMO | Initial directory structure and README |

---

*This directory supports EU funding applications for the AMPEL360 Q100 program.*
