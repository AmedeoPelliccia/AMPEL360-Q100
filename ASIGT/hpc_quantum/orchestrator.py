#!/usr/bin/env python3
"""
HPC+Quantum Agentic Orchestration Engine
=========================================

This module implements the orchestration layer for hybrid HPC-Quantum workloads
with BREX-governed agentic reasoning for the AMPEL360 Q100 program.

Supports:
- Multi-agent design space exploration
- BREX-governed deterministic decision paths
- Hybrid classical-quantum workflow scheduling
- MDO (Multidisciplinary Design Optimization) pipelines
- Certifiable, auditable engineering decisions

Version: 1.0.0
Effective Date: 2026-01-30
Classification: INTERNAL
"""

import json
import hashlib
import uuid
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional, Set, Tuple, Union


class WorkloadType(Enum):
    """Types of HPC/Quantum workloads."""
    CLASSICAL_HPC = "CLASSICAL_HPC"
    QUANTUM_OPTIMIZATION = "QUANTUM_OPTIMIZATION"
    HYBRID_CLASSICAL_QUANTUM = "HYBRID_CLASSICAL_QUANTUM"
    AI_ML_INFERENCE = "AI_ML_INFERENCE"
    CFD_SIMULATION = "CFD_SIMULATION"
    FEM_ANALYSIS = "FEM_ANALYSIS"
    MDO_OPTIMIZATION = "MDO_OPTIMIZATION"
    AGENTIC_REASONING = "AGENTIC_REASONING"


class WorkloadStatus(Enum):
    """Status of a workload execution."""
    PENDING = "PENDING"
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    ESCALATED = "ESCALATED"


class QuantumBackend(Enum):
    """Supported quantum computing backends."""
    SIMULATOR = "SIMULATOR"
    IBM_QUANTUM = "IBM_QUANTUM"
    GOOGLE_SYCAMORE = "GOOGLE_SYCAMORE"
    IONQ = "IONQ"
    RIGETTI = "RIGETTI"
    DWAVE_ANNEALER = "DWAVE_ANNEALER"


class OptimizationAlgorithm(Enum):
    """Quantum and classical optimization algorithms."""
    # Quantum algorithms
    QAOA = "QAOA"  # Quantum Approximate Optimization Algorithm
    VQE = "VQE"    # Variational Quantum Eigensolver
    QML = "QML"    # Quantum Machine Learning
    GROVER = "GROVER"  # Grover's search
    QPE = "QPE"    # Quantum Phase Estimation
    
    # Classical algorithms
    GENETIC = "GENETIC"
    PARTICLE_SWARM = "PARTICLE_SWARM"
    SIMULATED_ANNEALING = "SIMULATED_ANNEALING"
    GRADIENT_DESCENT = "GRADIENT_DESCENT"
    BAYESIAN = "BAYESIAN"
    
    # Hybrid
    HYBRID_QAOA_CLASSICAL = "HYBRID_QAOA_CLASSICAL"
    HYBRID_VQE_CLASSICAL = "HYBRID_VQE_CLASSICAL"


@dataclass
class ComputeResource:
    """Represents a compute resource in the HPC cluster."""
    resource_id: str
    resource_type: str  # "cpu", "gpu", "qpu", "fpga"
    node_count: int = 1
    cores_per_node: int = 1
    memory_gb: float = 0.0
    accelerators: List[str] = field(default_factory=list)
    quantum_qubits: int = 0
    availability: float = 1.0  # 0.0 to 1.0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "resource_id": self.resource_id,
            "resource_type": self.resource_type,
            "node_count": self.node_count,
            "cores_per_node": self.cores_per_node,
            "memory_gb": self.memory_gb,
            "accelerators": self.accelerators,
            "quantum_qubits": self.quantum_qubits,
            "availability": self.availability,
        }


@dataclass
class WorkloadDefinition:
    """Definition of a workload to be executed."""
    workload_id: str
    workload_type: WorkloadType
    name: str
    description: str
    parameters: Dict[str, Any]
    resource_requirements: ComputeResource
    dependencies: List[str] = field(default_factory=list)
    brex_rules: List[str] = field(default_factory=list)
    priority: int = 5  # 1-10, higher is more important
    timeout_seconds: int = 3600
    retry_count: int = 3
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "workload_id": self.workload_id,
            "workload_type": self.workload_type.value,
            "name": self.name,
            "description": self.description,
            "parameters": self.parameters,
            "resource_requirements": self.resource_requirements.to_dict(),
            "dependencies": self.dependencies,
            "brex_rules": self.brex_rules,
            "priority": self.priority,
            "timeout_seconds": self.timeout_seconds,
            "retry_count": self.retry_count,
        }


@dataclass
class WorkloadResult:
    """Result of a workload execution."""
    workload_id: str
    status: WorkloadStatus
    start_time: str
    end_time: Optional[str]
    result_data: Dict[str, Any]
    metrics: Dict[str, float]
    logs: List[str]
    brex_decisions: List[Dict[str, Any]]
    audit_hash: str

    def to_dict(self) -> Dict[str, Any]:
        return {
            "workload_id": self.workload_id,
            "status": self.status.value,
            "start_time": self.start_time,
            "end_time": self.end_time,
            "result_data": self.result_data,
            "metrics": self.metrics,
            "logs": self.logs,
            "brex_decisions": self.brex_decisions,
            "audit_hash": self.audit_hash,
        }


class BREXWorkloadValidator:
    """
    Validates workloads against BREX rules before and after execution.
    
    Ensures all HPC/Quantum workloads comply with deterministic business rules.
    """

    def __init__(self, brex_engine=None):
        """
        Initialize the BREX workload validator.
        
        Args:
            brex_engine: Optional BREX decision engine instance.
        """
        self.brex_engine = brex_engine
        self.validation_log: List[Dict[str, Any]] = []

    def validate_pre_execution(
        self,
        workload: WorkloadDefinition,
        context: Dict[str, Any],
    ) -> Tuple[bool, str, List[Dict[str, Any]]]:
        """
        Validate workload before execution.
        
        Args:
            workload: The workload definition to validate.
            context: Additional context for validation.
            
        Returns:
            Tuple of (is_valid, message, decisions)
        """
        decisions = []
        
        # Validate resource requirements
        resource_valid, resource_msg = self._validate_resources(workload)
        decisions.append({
            "check": "resource_requirements",
            "passed": resource_valid,
            "message": resource_msg,
        })
        
        # Validate BREX rules
        for rule_id in workload.brex_rules:
            rule_result = self._check_brex_rule(rule_id, workload, context)
            decisions.append(rule_result)
        
        # Validate dependencies
        deps_valid, deps_msg = self._validate_dependencies(workload)
        decisions.append({
            "check": "dependencies",
            "passed": deps_valid,
            "message": deps_msg,
        })
        
        # Overall result
        all_passed = all(d.get("passed", False) for d in decisions)
        message = "Pre-execution validation passed" if all_passed else "Pre-execution validation failed"
        
        self._log_validation("pre_execution", workload.workload_id, all_passed, decisions)
        
        return all_passed, message, decisions

    def validate_post_execution(
        self,
        workload: WorkloadDefinition,
        result: WorkloadResult,
        context: Dict[str, Any],
    ) -> Tuple[bool, str, List[Dict[str, Any]]]:
        """
        Validate workload results after execution.
        
        Args:
            workload: The original workload definition.
            result: The execution result.
            context: Additional context for validation.
            
        Returns:
            Tuple of (is_valid, message, decisions)
        """
        decisions = []
        
        # Validate result completeness
        complete_valid, complete_msg = self._validate_completeness(result)
        decisions.append({
            "check": "result_completeness",
            "passed": complete_valid,
            "message": complete_msg,
        })
        
        # Validate result against BREX rules
        for rule_id in workload.brex_rules:
            rule_result = self._check_brex_result_rule(rule_id, workload, result, context)
            decisions.append(rule_result)
        
        # Validate audit trail integrity
        audit_valid, audit_msg = self._validate_audit_integrity(result)
        decisions.append({
            "check": "audit_integrity",
            "passed": audit_valid,
            "message": audit_msg,
        })
        
        all_passed = all(d.get("passed", False) for d in decisions)
        message = "Post-execution validation passed" if all_passed else "Post-execution validation failed"
        
        self._log_validation("post_execution", workload.workload_id, all_passed, decisions)
        
        return all_passed, message, decisions

    def _validate_resources(self, workload: WorkloadDefinition) -> Tuple[bool, str]:
        """Validate resource requirements are reasonable."""
        req = workload.resource_requirements
        
        # Check for reasonable resource bounds
        if req.node_count < 1 or req.node_count > 10000:
            return False, f"Invalid node count: {req.node_count}"
        
        if req.memory_gb < 0 or req.memory_gb > 1000000:
            return False, f"Invalid memory: {req.memory_gb} GB"
        
        if req.quantum_qubits > 0 and req.resource_type != "qpu":
            return False, "Quantum qubits specified but resource type is not QPU"
        
        return True, "Resource requirements valid"

    def _validate_dependencies(self, workload: WorkloadDefinition) -> Tuple[bool, str]:
        """Validate workload dependencies."""
        # Check for circular dependencies (simplified check)
        if workload.workload_id in workload.dependencies:
            return False, "Circular dependency detected"
        
        return True, "Dependencies valid"

    def _validate_completeness(self, result: WorkloadResult) -> Tuple[bool, str]:
        """Validate result completeness."""
        if result.status not in [WorkloadStatus.COMPLETED, WorkloadStatus.FAILED]:
            return False, f"Unexpected status: {result.status.value}"
        
        if not result.audit_hash:
            return False, "Missing audit hash"
        
        return True, "Result complete"

    def _validate_audit_integrity(self, result: WorkloadResult) -> Tuple[bool, str]:
        """Validate audit trail integrity."""
        # Verify audit hash
        data_str = json.dumps({
            "workload_id": result.workload_id,
            "status": result.status.value,
            "result_data": result.result_data,
            "metrics": result.metrics,
        }, sort_keys=True)
        
        expected_hash = hashlib.sha256(data_str.encode()).hexdigest()[:16]
        
        if result.audit_hash != expected_hash:
            return False, "Audit hash mismatch"
        
        return True, "Audit integrity verified"

    def _check_brex_rule(
        self,
        rule_id: str,
        workload: WorkloadDefinition,
        context: Dict[str, Any],
    ) -> Dict[str, Any]:
        """Check a specific BREX rule."""
        # If we have a BREX engine, use it
        if self.brex_engine:
            try:
                record = self.brex_engine.evaluate_rule(rule_id, {
                    "workload": workload.to_dict(),
                    **context,
                })
                return {
                    "check": f"brex_rule_{rule_id}",
                    "passed": record.outcome.value in ["ACCEPT", "WARN"],
                    "message": record.explanation,
                }
            except Exception as e:
                # Fail-safe: if BREX cannot evaluate the rule, do not auto-approve
                return {
                    "check": f"brex_rule_{rule_id}",
                    "passed": False,
                    "message": f"BREX rule evaluation failed; manual review or rejection required: {str(e)}",
                }
        
        # Without BREX engine, fail-safe: do not auto-approve workloads
        return {
            "check": f"brex_rule_{rule_id}",
            "passed": False,
            "message": "BREX engine not available; validation cannot be completed safely (manual review or rejection required)",
        }

    def _check_brex_result_rule(
        self,
        rule_id: str,
        workload: WorkloadDefinition,
        result: WorkloadResult,
        context: Dict[str, Any],
    ) -> Dict[str, Any]:
        """Check BREX rule against result."""
        return self._check_brex_rule(rule_id, workload, {
            "result": result.to_dict(),
            **context,
        })

    def _log_validation(
        self,
        phase: str,
        workload_id: str,
        passed: bool,
        decisions: List[Dict[str, Any]],
    ):
        """Log validation for audit."""
        self.validation_log.append({
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "phase": phase,
            "workload_id": workload_id,
            "passed": passed,
            "decisions": decisions,
        })


class HPCQuantumOrchestrator:
    """
    Main orchestrator for HPC+Quantum agentic workloads.
    
    Manages:
    - Workload scheduling and execution
    - Resource allocation
    - BREX validation
    - Audit logging
    """

    def __init__(
        self,
        brex_engine=None,
        max_concurrent_workloads: int = 100,
        log_dir: Optional[Path] = None,
        session_id: Optional[str] = None,
    ):
        """
        Initialize the HPC+Quantum orchestrator.
        
        Args:
            brex_engine: Optional BREX decision engine.
            max_concurrent_workloads: Maximum concurrent workloads.
            log_dir: Directory for audit logs.
            session_id: Optional session identifier.
        """
        self.brex_engine = brex_engine
        self.validator = BREXWorkloadValidator(brex_engine)
        self.max_concurrent = max_concurrent_workloads
        
        self.log_dir = log_dir or Path(__file__).parent.parent / "logs"
        self.log_dir.mkdir(parents=True, exist_ok=True)
        
        # State tracking
        self.workloads: Dict[str, WorkloadDefinition] = {}
        self.results: Dict[str, WorkloadResult] = {}
        self.resource_pool: Dict[str, ComputeResource] = {}
        
        # Session tracking
        self.session_id = session_id or self._generate_session_id()
        self.audit_log: List[Dict[str, Any]] = []

    def _generate_session_id(self) -> str:
        """Generate unique session ID."""
        timestamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
        random_part = hashlib.sha256(str(uuid.uuid4()).encode()).hexdigest()[:8]
        return f"HPC-{timestamp}-{random_part}"

    def register_resource(self, resource: ComputeResource) -> None:
        """Register a compute resource with the orchestrator."""
        self.resource_pool[resource.resource_id] = resource
        self._log_event("resource_registered", {"resource": resource.to_dict()})

    def submit_workload(
        self,
        workload: WorkloadDefinition,
        context: Optional[Dict[str, Any]] = None,
    ) -> Tuple[bool, str]:
        """
        Submit a workload for execution.
        
        Args:
            workload: The workload to submit.
            context: Additional context for validation.
            
        Returns:
            Tuple of (accepted, message)
        """
        context = context or {}
        
        # Pre-execution validation
        valid, message, decisions = self.validator.validate_pre_execution(workload, context)
        
        if not valid:
            self._log_event("workload_rejected", {
                "workload_id": workload.workload_id,
                "reason": message,
                "decisions": decisions,
            })
            return False, message
        
        # Store workload
        self.workloads[workload.workload_id] = workload
        
        self._log_event("workload_accepted", {
            "workload_id": workload.workload_id,
            "workload_type": workload.workload_type.value,
            "priority": workload.priority,
        })
        
        return True, "Workload accepted for execution"

    def execute_workload(
        self,
        workload_id: str,
        executor: Optional[Callable] = None,
    ) -> WorkloadResult:
        """
        Execute a submitted workload.
        
        Args:
            workload_id: ID of the workload to execute.
            executor: Optional custom executor function.
            
        Returns:
            WorkloadResult with execution outcome.
        """
        if workload_id not in self.workloads:
            raise ValueError(f"Unknown workload: {workload_id}")
        
        workload = self.workloads[workload_id]
        start_time = datetime.now(timezone.utc).isoformat()
        
        self._log_event("workload_started", {
            "workload_id": workload_id,
            "start_time": start_time,
        })
        
        try:
            # Execute the workload
            if executor:
                result_data, metrics = executor(workload)
            else:
                result_data, metrics = self._default_executor(workload)
            
            status = WorkloadStatus.COMPLETED
            logs = ["Execution completed successfully"]
            
        except Exception as e:
            result_data = {"error": str(e)}
            metrics = {}
            status = WorkloadStatus.FAILED
            logs = [f"Execution failed: {str(e)}"]
        
        end_time = datetime.now(timezone.utc).isoformat()
        
        # Create audit hash
        audit_data = json.dumps({
            "workload_id": workload_id,
            "status": status.value,
            "result_data": result_data,
            "metrics": metrics,
        }, sort_keys=True)
        audit_hash = hashlib.sha256(audit_data.encode()).hexdigest()[:16]
        
        result = WorkloadResult(
            workload_id=workload_id,
            status=status,
            start_time=start_time,
            end_time=end_time,
            result_data=result_data,
            metrics=metrics,
            logs=logs,
            brex_decisions=self.validator.validation_log[-10:],  # Last 10 decisions
            audit_hash=audit_hash,
        )
        
        # Post-execution validation
        valid, message, decisions = self.validator.validate_post_execution(
            workload, result, {}
        )
        
        if not valid:
            result.status = WorkloadStatus.ESCALATED
            result.logs.append(f"Post-validation failed: {message}")
        
        self.results[workload_id] = result
        
        self._log_event("workload_completed", {
            "workload_id": workload_id,
            "status": result.status.value,
            "end_time": end_time,
            "audit_hash": audit_hash,
        })
        
        return result

    def _default_executor(
        self,
        workload: WorkloadDefinition,
    ) -> Tuple[Dict[str, Any], Dict[str, float]]:
        """Default executor for workloads (simulation mode)."""
        # Simulate execution based on workload type
        workload_handlers = {
            WorkloadType.CLASSICAL_HPC: self._simulate_hpc,
            WorkloadType.QUANTUM_OPTIMIZATION: self._simulate_quantum,
            WorkloadType.HYBRID_CLASSICAL_QUANTUM: self._simulate_hybrid,
            WorkloadType.AI_ML_INFERENCE: self._simulate_ml,
            WorkloadType.CFD_SIMULATION: self._simulate_cfd,
            WorkloadType.FEM_ANALYSIS: self._simulate_fem,
            WorkloadType.MDO_OPTIMIZATION: self._simulate_mdo,
            WorkloadType.AGENTIC_REASONING: self._simulate_agentic,
        }
        
        handler = workload_handlers.get(workload.workload_type, self._simulate_hpc)
        return handler(workload)

    def _simulate_hpc(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate HPC workload."""
        return {
            "type": "hpc_result",
            "iterations": workload.parameters.get("iterations", 1000),
            "converged": True,
        }, {"wall_time_s": 120.5, "cpu_hours": 1500.0}

    def _simulate_quantum(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate quantum workload."""
        return {
            "type": "quantum_result",
            "algorithm": workload.parameters.get("algorithm", "QAOA"),
            "optimal_value": -42.7,
            "shots": workload.parameters.get("shots", 1000),
        }, {"circuit_depth": 50, "gate_count": 200, "execution_time_ms": 500}

    def _simulate_hybrid(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate hybrid classical-quantum workload."""
        return {
            "type": "hybrid_result",
            "classical_iterations": 100,
            "quantum_calls": 50,
            "convergence": True,
        }, {"classical_time_s": 60.0, "quantum_time_s": 25.0}

    def _simulate_ml(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate ML inference workload."""
        return {
            "type": "ml_result",
            "predictions": [0.95, 0.87, 0.92],
            "confidence": 0.91,
        }, {"inference_time_ms": 50, "batch_size": 32}

    def _simulate_cfd(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate CFD workload."""
        return {
            "type": "cfd_result",
            "mesh_cells": workload.parameters.get("mesh_cells", 1000000),
            "lift_coefficient": 0.52,
            "drag_coefficient": 0.028,
            "residuals_converged": True,
        }, {"iterations": 5000, "wall_time_hours": 24.5}

    def _simulate_fem(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate FEM analysis workload."""
        return {
            "type": "fem_result",
            "elements": workload.parameters.get("elements", 500000),
            "max_stress_mpa": 245.7,
            "max_displacement_mm": 12.3,
            "safety_factor": 1.8,
        }, {"solution_time_s": 3600, "memory_peak_gb": 128}

    def _simulate_mdo(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate MDO workload."""
        return {
            "type": "mdo_result",
            "design_variables": workload.parameters.get("design_vars", 50),
            "objectives_evaluated": 10000,
            "pareto_solutions": 25,
            "optimal_design": {
                "wing_span_m": 35.2,
                "wing_area_m2": 124.5,
                "mtow_kg": 45000,
                "fuel_efficiency": 0.92,
            },
        }, {"evaluations": 10000, "generations": 500, "compute_hours": 5000}

    def _simulate_agentic(self, workload: WorkloadDefinition) -> Tuple[Dict, Dict]:
        """Simulate agentic reasoning workload."""
        return {
            "type": "agentic_result",
            "reasoning_steps": 150,
            "decisions_made": 45,
            "brex_compliance": True,
            "recommendations": [
                "Increase wing aspect ratio by 5%",
                "Consider hybrid propulsion architecture",
                "Optimize hydrogen tank placement",
            ],
        }, {"reasoning_time_s": 30, "brex_evaluations": 45}

    def get_workload_status(self, workload_id: str) -> Optional[WorkloadStatus]:
        """Get status of a workload."""
        if workload_id in self.results:
            return self.results[workload_id].status
        elif workload_id in self.workloads:
            return WorkloadStatus.QUEUED
        return None

    def get_session_summary(self) -> Dict[str, Any]:
        """Get summary of the orchestration session."""
        status_counts = {}
        for result in self.results.values():
            status = result.status.value
            status_counts[status] = status_counts.get(status, 0) + 1
        
        return {
            "session_id": self.session_id,
            "total_workloads": len(self.workloads),
            "completed_workloads": len(self.results),
            "status_breakdown": status_counts,
            "resources_registered": len(self.resource_pool),
            "audit_events": len(self.audit_log),
        }

    def _log_event(self, event_type: str, data: Dict[str, Any]) -> None:
        """Log an audit event."""
        event = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "session_id": self.session_id,
            "event_type": event_type,
            "data": data,
        }
        self.audit_log.append(event)

    def export_audit_log(self, filepath: Optional[Path] = None) -> Path:
        """Export audit log to file."""
        if filepath is None:
            filepath = self.log_dir / f"hpc_audit_{self.session_id}.jsonl"
        
        with open(filepath, "w") as f:
            for event in self.audit_log:
                f.write(json.dumps(event) + "\n")
        
        return filepath


# Factory functions for common workload types

def create_cfd_workload(
    name: str,
    mesh_cells: int = 1000000,
    turbulence_model: str = "k-omega-sst",
    mach_number: float = 0.85,
    brex_rules: Optional[List[str]] = None,
) -> WorkloadDefinition:
    """Create a CFD simulation workload."""
    return WorkloadDefinition(
        workload_id=f"CFD-{uuid.uuid4().hex[:8]}",
        workload_type=WorkloadType.CFD_SIMULATION,
        name=name,
        description=f"CFD simulation with {mesh_cells} cells",
        parameters={
            "mesh_cells": mesh_cells,
            "turbulence_model": turbulence_model,
            "mach_number": mach_number,
        },
        resource_requirements=ComputeResource(
            resource_id="hpc-cluster-01",
            resource_type="cpu",
            node_count=max(1, mesh_cells // 100000),
            cores_per_node=64,
            memory_gb=256.0,
        ),
        brex_rules=brex_rules or ["BREX-CONF-001", "BREX-SRC-001"],
        priority=7,
        timeout_seconds=86400,  # 24 hours
    )


def create_quantum_optimization_workload(
    name: str,
    algorithm: OptimizationAlgorithm = OptimizationAlgorithm.QAOA,
    qubits: int = 20,
    shots: int = 1000,
    backend: QuantumBackend = QuantumBackend.SIMULATOR,
    brex_rules: Optional[List[str]] = None,
) -> WorkloadDefinition:
    """Create a quantum optimization workload."""
    return WorkloadDefinition(
        workload_id=f"QOpt-{uuid.uuid4().hex[:8]}",
        workload_type=WorkloadType.QUANTUM_OPTIMIZATION,
        name=name,
        description=f"{algorithm.value} optimization with {qubits} qubits",
        parameters={
            "algorithm": algorithm.value,
            "qubits": qubits,
            "shots": shots,
            "backend": backend.value,
        },
        resource_requirements=ComputeResource(
            resource_id="quantum-processor-01",
            resource_type="qpu",
            node_count=1,
            quantum_qubits=qubits,
        ),
        brex_rules=brex_rules or ["BREX-CONF-001", "BREX-AI-001"],
        priority=8,
        timeout_seconds=3600,
    )


def create_mdo_workload(
    name: str,
    design_variables: int = 50,
    objectives: List[str] = None,
    constraints: List[str] = None,
    evaluations: int = 10000,
    brex_rules: Optional[List[str]] = None,
) -> WorkloadDefinition:
    """Create an MDO (Multidisciplinary Design Optimization) workload."""
    objectives = objectives or ["minimize_fuel", "minimize_weight", "maximize_range"]
    constraints = constraints or ["structural_safety", "noise_limits", "emissions"]
    
    return WorkloadDefinition(
        workload_id=f"MDO-{uuid.uuid4().hex[:8]}",
        workload_type=WorkloadType.MDO_OPTIMIZATION,
        name=name,
        description=f"MDO with {design_variables} variables, {len(objectives)} objectives",
        parameters={
            "design_variables": design_variables,
            "objectives": objectives,
            "constraints": constraints,
            "max_evaluations": evaluations,
        },
        resource_requirements=ComputeResource(
            resource_id="hpc-cluster-01",
            resource_type="cpu",
            node_count=50,
            cores_per_node=64,
            memory_gb=512.0,
            accelerators=["gpu"],
        ),
        brex_rules=brex_rules or ["BREX-CONF-002", "BREX-SRC-001", "BREX-EFF-001"],
        priority=9,
        timeout_seconds=172800,  # 48 hours
    )


if __name__ == "__main__":
    # Self-test
    print("HPC+Quantum Orchestrator - Self Test")
    print("=" * 50)
    
    # Create orchestrator
    orchestrator = HPCQuantumOrchestrator(session_id="TEST-HPC-001")
    
    # Register resources
    orchestrator.register_resource(ComputeResource(
        resource_id="hpc-cluster-01",
        resource_type="cpu",
        node_count=100,
        cores_per_node=64,
        memory_gb=256.0,
    ))
    
    orchestrator.register_resource(ComputeResource(
        resource_id="quantum-processor-01",
        resource_type="qpu",
        node_count=1,
        quantum_qubits=50,
    ))
    
    # Create and submit workloads
    cfd_workload = create_cfd_workload("Wing CFD Analysis", mesh_cells=2000000)
    quantum_workload = create_quantum_optimization_workload(
        "Route Optimization",
        algorithm=OptimizationAlgorithm.QAOA,
        qubits=15,
    )
    mdo_workload = create_mdo_workload("Full Aircraft MDO", design_variables=100)
    
    for workload in [cfd_workload, quantum_workload, mdo_workload]:
        accepted, message = orchestrator.submit_workload(workload)
        print(f"\n{workload.name}:")
        print(f"  Accepted: {accepted}")
        print(f"  Message: {message}")
        
        if accepted:
            result = orchestrator.execute_workload(workload.workload_id)
            print(f"  Status: {result.status.value}")
            print(f"  Metrics: {result.metrics}")
    
    # Show summary
    summary = orchestrator.get_session_summary()
    print("\n" + "=" * 50)
    print("Session Summary:")
    print(json.dumps(summary, indent=2))
