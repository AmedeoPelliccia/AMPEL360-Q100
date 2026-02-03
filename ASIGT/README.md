# ASIGT - Aircraft Standard Information Guided Treatment

**Version:** 1.1.0  
**Effective Date:** 2026-01-30  
**Classification:** INTERNAL

---

## Overview

ASIGT (Aircraft Standard Information Guided Treatment) provides the guided reasoning framework for the AMPEL360 Q100 program. It implements BREX-driven decision making with full audit traceability, including HPC+Quantum orchestration and multi-agent design exploration.

## Directory Structure

```
ASIGT/
├── README.md                           # This file
├── BREX_REASONING_FLOWCHART.md         # Deterministic reasoning documentation
├── brex/                               # BREX Decision Engine
│   ├── __init__.py                     # Package initialization
│   └── brex_decision_engine.py         # Core engine implementation
├── brex_integration.py                 # Validator integration wrapper
├── hpc_quantum/                        # HPC+Quantum Orchestration
│   ├── __init__.py                     # Package initialization
│   └── orchestrator.py                 # Workload orchestration engine
├── agents/                             # Multi-Agent Design Exploration
│   ├── __init__.py                     # Package initialization
│   └── design_explorer.py              # Design space exploration
├── instructions/                       # BREX-based instruction schemas
│   ├── extract.instructions.md         # Data extraction instructions
│   ├── hitl.instructions.md            # HITL escalation instructions
│   └── safety.instructions.md          # Safety-critical content handling
└── logs/                               # Audit log storage
    └── (generated at runtime)
```

## Key Components

### 1. BREX Decision Engine

The core decision engine (`brex/brex_decision_engine.py`) provides:

- **Deterministic Rule Evaluation**: Every decision follows defined paths
- **Auditable Logging**: Hash-chained logs for tamper-evident audit trails
- **Configurable Thresholds**: ATA chapter-specific confidence requirements
- **HITL Integration**: Automatic escalation for uncertain decisions

**Quick Start:**

```python
from ASIGT.brex import create_engine

# Create engine with default authority file
engine = create_engine()

# Evaluate content against BREX rules
context = {
    "confidence": 0.92,
    "source": {"doc_id": "KNU-28-10-001", "spans": ["span:100-150"]},
    "ata_chapter": "28",
    "safety_critical": True
}

# Evaluate a specific rule
record = engine.evaluate_rule("BREX-CONF-002", context)
print(f"Outcome: {record.outcome.value}")  # ACCEPT or ESCALATE_HITL

# Evaluate a group of rules
records = engine.evaluate_group("safety_critical_validation", context)

# Finalize session and get summary
summary = engine.finalize_session()
```

### 2. HPC+Quantum Orchestrator

The HPC+Quantum orchestration engine (`hpc_quantum/orchestrator.py`) provides:

- **Workload Scheduling**: Submit and execute HPC/Quantum workloads
- **BREX Validation**: Pre/post execution validation
- **Resource Management**: CPU, GPU, QPU allocation
- **Audit Logging**: Hash-chained workload logs

**Quick Start:**

```python
from ASIGT.hpc_quantum import (
    HPCQuantumOrchestrator,
    create_cfd_workload,
    create_quantum_optimization_workload,
    create_mdo_workload,
)

# Create orchestrator
orchestrator = HPCQuantumOrchestrator()

# Create and submit CFD workload
cfd = create_cfd_workload("Wing Analysis", mesh_cells=1000000)
accepted, msg = orchestrator.submit_workload(cfd)
if accepted:
    result = orchestrator.execute_workload(cfd.workload_id)
    print(f"Status: {result.status.value}")

# Create quantum optimization
quantum = create_quantum_optimization_workload("Route Opt", qubits=20)
orchestrator.submit_workload(quantum)
```

### 3. Multi-Agent Design Explorer

The multi-agent explorer (`agents/design_explorer.py`) provides:

- **Swarm Exploration**: Parallel design space exploration
- **Domain Agents**: Specialized agents for each engineering domain
- **Pareto Optimization**: Multi-objective design selection
- **BREX Compliance**: Deterministic decision paths

**Quick Start:**

```python
from ASIGT.agents import (
    MultiAgentDesignExplorer,
    create_ampel360_design_space,
)

# Create AMPEL360 design space
design_space = create_ampel360_design_space()

# Create explorer with default agents
explorer = MultiAgentDesignExplorer(design_space)
explorer.create_default_agents()  # Creates 18 agents

# Run exploration
results = explorer.run(iterations=100)
print(f"Best design: {results['best_design']}")
```

### 4. Master BREX Authority

The authority file (`../ASIT/GOVERNANCE/master_brex_authority.yaml`) defines:

- **20 Core Rules**: Confidence, traceability, fabrication prevention, ATA-specific
- **8 Rule Groups**: Standard, safety-critical, LH2, AI/ML, CSDB compliance
- **Confidence Thresholds**: Per ATA chapter and content type
- **Decision Flowchart**: Formal specification of reasoning paths

### 5. Instruction Schemas

BREX-driven instruction files in `instructions/`:

| File | Purpose |
|------|---------|
| `extract.instructions.md` | Data extraction workflow |
| `hitl.instructions.md` | Human-in-the-loop escalation |
| `safety.instructions.md` | Safety-critical content handling |

### 6. Reasoning Flowchart

`BREX_REASONING_FLOWCHART.md` documents:

- Master decision flowchart
- Node specifications
- Outcome definitions
- Integration points

## Integration

### With Existing Validators

The BREX engine integrates with existing validation infrastructure:

```python
# In your validator script
import sys
sys.path.insert(0, '/path/to/AMPEL360-Q100')

from ASIGT.brex import create_engine, DecisionOutcome

engine = create_engine()

def validate_content(content, ata_chapter):
    """Validate content using BREX rules."""
    context = {
        "confidence": content.get("confidence", 0.0),
        "source": content.get("source"),
        "ata_chapter": ata_chapter,
        "safety_critical": ata_chapter in ["28", "71", "72", "27", "32"]
    }
    
    # Select appropriate rule group
    if context["safety_critical"]:
        records = engine.evaluate_group("safety_critical_validation", context)
    else:
        records = engine.evaluate_group("standard_validation", context)
    
    # Check for any rejections
    rejected = [r for r in records if r.outcome == DecisionOutcome.REJECT]
    if rejected:
        return False, rejected[0].explanation
    
    # Check for HITL escalation
    escalated = [r for r in records if r.outcome == DecisionOutcome.ESCALATE_HITL]
    if escalated:
        return None, "HITL required: " + escalated[0].explanation
    
    return True, "Validation passed"
```

### With CI/CD Pipelines

Example GitHub Actions integration:

```yaml
- name: Run BREX Validation
  run: |
    python -c "
    from ASIGT.brex import create_engine
    import json
    
    engine = create_engine()
    # Run validation logic
    summary = engine.finalize_session()
    
    # Check outcomes
    if summary['outcomes']['REJECT'] > 0:
        print('❌ BREX validation failed')
        exit(1)
    print('✅ BREX validation passed')
    "
```

## Audit & Compliance

### Log Location

Audit logs are stored in `ASIGT/logs/`:

- `brex_decisions_{session_id}.jsonl` - Decision log (append-only)
- `brex_summary_{session_id}.json` - Session summary
- `hpc_audit_{session_id}.jsonl` - HPC workload audit log
- `exploration_{session_id}.json` - Design exploration results

### Log Verification

Verify log integrity:

```python
from ASIGT.brex import create_engine

engine = create_engine(session_id="existing-session-id")
valid, message = engine.verify_audit_log()
print(f"Integrity: {'✓ VALID' if valid else '✗ INVALID'}")
print(f"Details: {message}")
```

### Certification Evidence

The audit logs provide certification evidence for:

- DO-178C/ED-12C (software assurance)
- DO-200B (data quality)
- S1000D Issue 5.0 (technical publication)

## Dependencies

The BREX Decision Engine requires:

- Python 3.8+
- PyYAML (for authority file parsing)
- No external dependencies for core functionality

Install if needed:
```bash
pip install pyyaml
```

## References

- [ASIT Copilot Instructions](../.github/copilot-instructions.txt)
- [CSDB Compliance Documentation](../docs/CSDB_COMPLIANCE_VALIDATION.md)
- [Master BREX Authority](../ASIT/GOVERNANCE/master_brex_authority.yaml)
- [HPC+Quantum Architecture](../docs/HPC_QUANTUM_AGENTIC_ARCHITECTURE.md)
- [BREX Instruction System Spec](../docs/BREX_INSTRUCTION_SYSTEM_SPEC.md)

---

**Revision History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-30 | ASIT System | Initial release |
| 1.1.0 | 2026-01-30 | ASIT System | Added HPC+Quantum and Multi-Agent components |

---

*This documentation is maintained by the ASIT Development Team.*
