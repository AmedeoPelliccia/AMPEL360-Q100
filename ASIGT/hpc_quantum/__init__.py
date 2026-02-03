# HPC+Quantum Orchestration Package
"""
HPC+Quantum Agentic Orchestration
=================================

This package provides hybrid HPC-Quantum workload orchestration
with BREX-governed agentic reasoning for the AMPEL360 Q100 program.

Key Components:
- HPCQuantumOrchestrator: Main orchestration engine
- BREXWorkloadValidator: Pre/post execution validation
- WorkloadDefinition: Workload specification
- Factory functions for common workload types

Example Usage:
    from ASIGT.hpc_quantum import (
        HPCQuantumOrchestrator,
        create_cfd_workload,
        create_quantum_optimization_workload,
    )
    
    orchestrator = HPCQuantumOrchestrator()
    workload = create_cfd_workload("Wing Analysis", mesh_cells=1000000)
    orchestrator.submit_workload(workload)
    result = orchestrator.execute_workload(workload.workload_id)
"""

from .orchestrator import (
    HPCQuantumOrchestrator,
    BREXWorkloadValidator,
    WorkloadDefinition,
    WorkloadResult,
    WorkloadType,
    WorkloadStatus,
    ComputeResource,
    QuantumBackend,
    OptimizationAlgorithm,
    create_cfd_workload,
    create_quantum_optimization_workload,
    create_mdo_workload,
)

__all__ = [
    "HPCQuantumOrchestrator",
    "BREXWorkloadValidator",
    "WorkloadDefinition",
    "WorkloadResult",
    "WorkloadType",
    "WorkloadStatus",
    "ComputeResource",
    "QuantumBackend",
    "OptimizationAlgorithm",
    "create_cfd_workload",
    "create_quantum_optimization_workload",
    "create_mdo_workload",
]

__version__ = "1.0.0"
