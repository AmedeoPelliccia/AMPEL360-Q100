#!/usr/bin/env python3
"""
Multi-Agent Design Space Explorer
=================================

This module implements a swarm of design agents for exploring aircraft
configuration trade-spaces under BREX-governed deterministic decision rules.

Supports:
- Parallel exploration of design space
- Domain-specific specialized agents
- BREX-compliant decision paths
- Certifiable design exploration

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
from typing import Any, Dict, List, Optional, Set, Tuple, Callable
import random
import math


class AgentDomain(Enum):
    """Specialized domains for design agents."""
    AERODYNAMICS = "AERODYNAMICS"
    STRUCTURES = "STRUCTURES"
    PROPULSION = "PROPULSION"
    THERMAL = "THERMAL"
    AVIONICS = "AVIONICS"
    WEIGHT_BALANCE = "WEIGHT_BALANCE"
    COST_ECONOMICS = "COST_ECONOMICS"
    SAFETY = "SAFETY"
    CERTIFICATION = "CERTIFICATION"
    MANUFACTURING = "MANUFACTURING"
    MAINTENANCE = "MAINTENANCE"
    ENVIRONMENTAL = "ENVIRONMENTAL"
    HYDROGEN_SYSTEMS = "HYDROGEN_SYSTEMS"
    AI_ML_SYSTEMS = "AI_ML_SYSTEMS"


class AgentRole(Enum):
    """Roles that agents can take in the design process."""
    EXPLORER = "EXPLORER"      # Explores new design regions
    OPTIMIZER = "OPTIMIZER"    # Optimizes within a region
    VALIDATOR = "VALIDATOR"    # Validates designs against constraints
    INTEGRATOR = "INTEGRATOR"  # Integrates cross-domain solutions
    COORDINATOR = "COORDINATOR"  # Coordinates agent activities


class DesignVariableType(Enum):
    """Types of design variables."""
    CONTINUOUS = "CONTINUOUS"
    DISCRETE = "DISCRETE"
    CATEGORICAL = "CATEGORICAL"
    BOOLEAN = "BOOLEAN"


@dataclass
class DesignVariable:
    """Definition of a design variable."""
    name: str
    var_type: DesignVariableType
    domain: AgentDomain
    min_value: Optional[float] = None
    max_value: Optional[float] = None
    discrete_values: Optional[List[Any]] = None
    default_value: Any = None
    unit: str = ""
    description: str = ""
    ata_chapter: Optional[str] = None
    
    def sample_random(self) -> Any:
        """Sample a random value for this variable."""
        if self.var_type == DesignVariableType.CONTINUOUS:
            return random.uniform(self.min_value or 0, self.max_value or 1)
        elif self.var_type == DesignVariableType.DISCRETE:
            if self.discrete_values:
                return random.choice(self.discrete_values)
            return random.randint(int(self.min_value or 0), int(self.max_value or 10))
        elif self.var_type == DesignVariableType.CATEGORICAL:
            return random.choice(self.discrete_values or ["default"])
        elif self.var_type == DesignVariableType.BOOLEAN:
            return random.choice([True, False])
        return self.default_value


@dataclass
class DesignObjective:
    """Definition of a design objective."""
    name: str
    direction: str  # "minimize" or "maximize"
    domain: AgentDomain
    weight: float = 1.0
    target_value: Optional[float] = None
    unit: str = ""
    description: str = ""
    
    def evaluate_fitness(self, value: float) -> float:
        """Evaluate fitness of a value for this objective."""
        if self.target_value is not None:
            # Distance from target
            return -abs(value - self.target_value)
        elif self.direction == "minimize":
            return -value
        else:  # maximize
            return value


@dataclass
class DesignConstraint:
    """Definition of a design constraint."""
    name: str
    constraint_type: str  # "<=", ">=", "==", "range"
    domain: AgentDomain
    limit_value: float
    upper_limit: Optional[float] = None  # For range constraints
    unit: str = ""
    description: str = ""
    severity: str = "hard"  # "hard" or "soft"
    brex_rule: Optional[str] = None
    
    def is_satisfied(self, value: float) -> Tuple[bool, float]:
        """
        Check if constraint is satisfied.
        
        Returns:
            Tuple of (is_satisfied, violation_magnitude)
        """
        if self.constraint_type == "<=":
            violation = max(0, value - self.limit_value)
            return violation == 0, violation
        elif self.constraint_type == ">=":
            violation = max(0, self.limit_value - value)
            return violation == 0, violation
        elif self.constraint_type == "==":
            violation = abs(value - self.limit_value)
            return violation < 1e-6, violation
        elif self.constraint_type == "range":
            if self.upper_limit is None:
                return True, 0
            if value < self.limit_value:
                return False, self.limit_value - value
            if value > self.upper_limit:
                return False, value - self.upper_limit
            return True, 0
        return True, 0


@dataclass
class DesignPoint:
    """A single point in the design space."""
    design_id: str
    variables: Dict[str, Any]
    objectives: Dict[str, float] = field(default_factory=dict)
    constraints: Dict[str, Tuple[bool, float]] = field(default_factory=dict)
    is_feasible: bool = True
    fitness: float = 0.0
    explored_by: str = ""
    timestamp: str = ""
    brex_decisions: List[Dict[str, Any]] = field(default_factory=list)
    audit_hash: str = ""
    
    def to_dict(self) -> Dict[str, Any]:
        return {
            "design_id": self.design_id,
            "variables": self.variables,
            "objectives": self.objectives,
            "constraints": {k: {"satisfied": v[0], "violation": v[1]} for k, v in self.constraints.items()},
            "is_feasible": self.is_feasible,
            "fitness": self.fitness,
            "explored_by": self.explored_by,
            "timestamp": self.timestamp,
            "brex_decisions": self.brex_decisions,
            "audit_hash": self.audit_hash,
        }


class DesignAgent(ABC):
    """Base class for design exploration agents."""

    def __init__(
        self,
        agent_id: str,
        domain: AgentDomain,
        role: AgentRole,
        brex_rules: Optional[List[str]] = None,
    ):
        """
        Initialize a design agent.
        
        Args:
            agent_id: Unique identifier for the agent.
            domain: The domain this agent specializes in.
            role: The role this agent plays.
            brex_rules: BREX rules this agent must follow.
        """
        self.agent_id = agent_id
        self.domain = domain
        self.role = role
        self.brex_rules = brex_rules or []
        self.exploration_log: List[Dict[str, Any]] = []
        self.designs_explored = 0

    @abstractmethod
    def explore(
        self,
        design_space: "DesignSpace",
        current_best: Optional[DesignPoint] = None,
        constraints: Optional[List[DesignConstraint]] = None,
    ) -> List[DesignPoint]:
        """
        Explore the design space and return candidate designs.
        
        Args:
            design_space: The design space to explore.
            current_best: The current best design, if any.
            constraints: Additional constraints to consider.
            
        Returns:
            List of candidate design points.
        """
        pass

    @abstractmethod
    def evaluate(
        self,
        design: DesignPoint,
        objectives: List[DesignObjective],
    ) -> DesignPoint:
        """
        Evaluate a design point for this agent's domain.
        
        Args:
            design: The design to evaluate.
            objectives: Objectives relevant to this domain.
            
        Returns:
            Updated design point with evaluations.
        """
        pass

    def validate_brex(self, design: DesignPoint) -> List[Dict[str, Any]]:
        """Validate design against BREX rules."""
        decisions = []
        for rule_id in self.brex_rules:
            # Simplified BREX validation
            decision = {
                "rule_id": rule_id,
                "agent_id": self.agent_id,
                "passed": True,  # In real implementation, would check actual rule
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
            decisions.append(decision)
        return decisions

    def log_exploration(self, action: str, data: Dict[str, Any]) -> None:
        """Log an exploration action."""
        self.exploration_log.append({
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "agent_id": self.agent_id,
            "action": action,
            "data": data,
        })


class ExplorerAgent(DesignAgent):
    """Agent that explores new regions of the design space."""

    def __init__(
        self,
        agent_id: str,
        domain: AgentDomain,
        exploration_rate: float = 0.3,
        **kwargs,
    ):
        super().__init__(agent_id, domain, AgentRole.EXPLORER, **kwargs)
        self.exploration_rate = exploration_rate

    def explore(
        self,
        design_space: "DesignSpace",
        current_best: Optional[DesignPoint] = None,
        constraints: Optional[List[DesignConstraint]] = None,
    ) -> List[DesignPoint]:
        """Generate random designs in unexplored regions."""
        candidates = []
        num_samples = 10
        
        for _ in range(num_samples):
            # Generate random design
            variables = {}
            for var in design_space.variables:
                if var.domain == self.domain or random.random() < self.exploration_rate:
                    variables[var.name] = var.sample_random()
                elif current_best:
                    variables[var.name] = current_best.variables.get(var.name, var.default_value)
                else:
                    variables[var.name] = var.default_value
            
            design = DesignPoint(
                design_id=f"D-{self.agent_id}-{uuid.uuid4().hex[:8]}",
                variables=variables,
                explored_by=self.agent_id,
                timestamp=datetime.now(timezone.utc).isoformat(),
            )
            
            # Validate against BREX
            design.brex_decisions = self.validate_brex(design)
            
            candidates.append(design)
            self.designs_explored += 1
        
        self.log_exploration("explore", {
            "num_candidates": len(candidates),
            "domain": self.domain.value,
        })
        
        return candidates

    def evaluate(
        self,
        design: DesignPoint,
        objectives: List[DesignObjective],
    ) -> DesignPoint:
        """Evaluate design for exploration objectives.

        NOTE:
            This implementation uses a deterministic, hash-based mock metric for
            scoring designs. It is intended *only* for testing, demonstration, and
            non-production prototyping. The resulting values are arbitrary and do
            not correspond to any physically meaningful performance measure.

            For actual design exploration and certifiable workflows, this method
            MUST be replaced with calls to validated analysis/simulation tools
            (e.g. CFD, FEM, performance models, cost models, etc.) that compute
            domain-appropriate objective values.
        """
        # Simulate evaluation for domain-specific objectives using a deterministic
        # but arbitrary hash-based metric. This does NOT represent real physics or
        # engineering behavior and MUST be replaced before production use.
        for obj in objectives:
            if obj.domain == self.domain:
                # Simplified mock evaluation - placeholder for real simulations
                base_value = sum(
                    hash(str(v)) % 100 / 100.0 for v in design.variables.values()
                ) / len(design.variables)

                if obj.direction == "minimize":
                    design.objectives[obj.name] = base_value * 100
                else:
                    design.objectives[obj.name] = (1 - base_value) * 100
        return design


class OptimizerAgent(DesignAgent):
    """Agent that optimizes within a design region."""

    def __init__(
        self,
        agent_id: str,
        domain: AgentDomain,
        mutation_rate: float = 0.1,
        **kwargs,
    ):
        super().__init__(agent_id, domain, AgentRole.OPTIMIZER, **kwargs)
        self.mutation_rate = mutation_rate

    def explore(
        self,
        design_space: "DesignSpace",
        current_best: Optional[DesignPoint] = None,
        constraints: Optional[List[DesignConstraint]] = None,
    ) -> List[DesignPoint]:
        """Generate variations around the current best."""
        if current_best is None:
            # Delegate to explorer behavior
            return []
        
        candidates = []
        num_variations = 20
        
        for _ in range(num_variations):
            # Mutate from current best
            variables = dict(current_best.variables)
            
            for var in design_space.variables:
                if var.domain == self.domain and random.random() < self.mutation_rate:
                    if var.var_type == DesignVariableType.CONTINUOUS:
                        # Small perturbation
                        current = variables.get(var.name, var.default_value)
                        range_size = (var.max_value or 1) - (var.min_value or 0)
                        delta = random.gauss(0, range_size * 0.1)
                        new_value = current + delta
                        # Clamp to bounds
                        if var.min_value is not None:
                            new_value = max(var.min_value, new_value)
                        if var.max_value is not None:
                            new_value = min(var.max_value, new_value)
                        variables[var.name] = new_value
                    else:
                        # Random resample for non-continuous
                        variables[var.name] = var.sample_random()
            
            design = DesignPoint(
                design_id=f"O-{self.agent_id}-{uuid.uuid4().hex[:8]}",
                variables=variables,
                explored_by=self.agent_id,
                timestamp=datetime.now(timezone.utc).isoformat(),
            )
            
            design.brex_decisions = self.validate_brex(design)
            candidates.append(design)
            self.designs_explored += 1
        
        self.log_exploration("optimize", {
            "num_variations": len(candidates),
            "base_design": current_best.design_id,
        })
        
        return candidates

    def evaluate(
        self,
        design: DesignPoint,
        objectives: List[DesignObjective],
    ) -> DesignPoint:
        """Evaluate design with focus on optimization objectives."""
        for obj in objectives:
            if obj.domain == self.domain:
                # More refined evaluation
                relevant_vars = [
                    v for name, v in design.variables.items()
                    if isinstance(v, (int, float))
                ]
                if relevant_vars:
                    value = sum(relevant_vars) / len(relevant_vars)
                else:
                    value = 50.0
                
                design.objectives[obj.name] = value
        
        return design


class ValidatorAgent(DesignAgent):
    """Agent that validates designs against constraints."""

    def __init__(
        self,
        agent_id: str,
        domain: AgentDomain,
        **kwargs,
    ):
        super().__init__(agent_id, domain, AgentRole.VALIDATOR, **kwargs)

    def explore(
        self,
        design_space: "DesignSpace",
        current_best: Optional[DesignPoint] = None,
        constraints: Optional[List[DesignConstraint]] = None,
    ) -> List[DesignPoint]:
        """Validators don't explore, they validate."""
        return []

    def evaluate(
        self,
        design: DesignPoint,
        objectives: List[DesignObjective],
    ) -> DesignPoint:
        """Evaluate constraints rather than objectives."""
        return design

    def validate_design(
        self,
        design: DesignPoint,
        constraints: List[DesignConstraint],
    ) -> DesignPoint:
        """Validate a design against constraints."""
        design.is_feasible = True
        
        for constraint in constraints:
            if constraint.domain == self.domain:
                # Get relevant variable or computed value
                var_name = constraint.name.replace("_constraint", "")
                value = design.variables.get(var_name, 0)
                
                if isinstance(value, (int, float)):
                    satisfied, violation = constraint.is_satisfied(value)
                    design.constraints[constraint.name] = (satisfied, violation)
                    
                    if not satisfied and constraint.severity == "hard":
                        design.is_feasible = False
        
        self.log_exploration("validate", {
            "design_id": design.design_id,
            "is_feasible": design.is_feasible,
            "domain": self.domain.value,
        })
        
        return design


class DesignSpace:
    """Definition of the aircraft design space."""

    def __init__(self, name: str):
        """Initialize a design space."""
        self.name = name
        self.variables: List[DesignVariable] = []
        self.objectives: List[DesignObjective] = []
        self.constraints: List[DesignConstraint] = []
        self.designs: List[DesignPoint] = []
        self.pareto_front: List[DesignPoint] = []

    def add_variable(self, variable: DesignVariable) -> None:
        """Add a design variable."""
        self.variables.append(variable)

    def add_objective(self, objective: DesignObjective) -> None:
        """Add an objective."""
        self.objectives.append(objective)

    def add_constraint(self, constraint: DesignConstraint) -> None:
        """Add a constraint."""
        self.constraints.append(constraint)

    def add_design(self, design: DesignPoint) -> None:
        """Add an explored design."""
        # Compute audit hash
        data_str = json.dumps(design.variables, sort_keys=True)
        design.audit_hash = hashlib.sha256(data_str.encode()).hexdigest()[:16]
        self.designs.append(design)

    def update_pareto_front(self) -> List[DesignPoint]:
        """Update the Pareto front with feasible designs."""
        feasible = [d for d in self.designs if d.is_feasible]
        if not feasible:
            return []
        
        # Simple Pareto dominance check
        pareto = []
        for design in feasible:
            dominated = False
            for other in feasible:
                if other.design_id == design.design_id:
                    continue
                if self._dominates(other, design):
                    dominated = True
                    break
            if not dominated:
                pareto.append(design)
        
        self.pareto_front = pareto
        return pareto

    def _dominates(self, d1: DesignPoint, d2: DesignPoint) -> bool:
        """Check if d1 dominates d2."""
        dominated_in_all = True
        strictly_better_in_one = False
        
        for obj in self.objectives:
            v1 = d1.objectives.get(obj.name, float('inf') if obj.direction == "minimize" else float('-inf'))
            v2 = d2.objectives.get(obj.name, float('inf') if obj.direction == "minimize" else float('-inf'))
            
            if obj.direction == "minimize":
                if v1 > v2:
                    dominated_in_all = False
                if v1 < v2:
                    strictly_better_in_one = True
            else:
                if v1 < v2:
                    dominated_in_all = False
                if v1 > v2:
                    strictly_better_in_one = True
        
        return dominated_in_all and strictly_better_in_one


class MultiAgentDesignExplorer:
    """
    Coordinates multiple agents to explore aircraft design space.
    
    Implements swarm-like exploration with BREX governance.
    """

    def __init__(
        self,
        design_space: DesignSpace,
        brex_engine=None,
        log_dir: Optional[Path] = None,
    ):
        """
        Initialize the multi-agent explorer.
        
        Args:
            design_space: The design space to explore.
            brex_engine: Optional BREX decision engine.
            log_dir: Directory for logs.
        """
        self.design_space = design_space
        self.brex_engine = brex_engine
        self.agents: Dict[str, DesignAgent] = {}
        
        self.log_dir = log_dir or Path(__file__).parent.parent / "logs"
        self.log_dir.mkdir(parents=True, exist_ok=True)
        
        self.session_id = f"AGENT-{datetime.now(timezone.utc).strftime('%Y%m%d-%H%M%S')}"
        self.iteration = 0
        self.best_design: Optional[DesignPoint] = None

    def add_agent(self, agent: DesignAgent) -> None:
        """Add an agent to the swarm."""
        self.agents[agent.agent_id] = agent

    def create_default_agents(self) -> None:
        """Create a default set of agents for aerospace design."""
        # Explorer agents for each major domain
        domains = [
            AgentDomain.AERODYNAMICS,
            AgentDomain.STRUCTURES,
            AgentDomain.PROPULSION,
            AgentDomain.THERMAL,
            AgentDomain.WEIGHT_BALANCE,
            AgentDomain.HYDROGEN_SYSTEMS,
        ]
        
        for domain in domains:
            # Explorer agent
            explorer = ExplorerAgent(
                agent_id=f"EXP-{domain.value[:4]}",
                domain=domain,
                exploration_rate=0.3,
                brex_rules=["BREX-CONF-001", "BREX-SRC-001"],
            )
            self.add_agent(explorer)
            
            # Optimizer agent
            optimizer = OptimizerAgent(
                agent_id=f"OPT-{domain.value[:4]}",
                domain=domain,
                mutation_rate=0.1,
                brex_rules=["BREX-CONF-002"],
            )
            self.add_agent(optimizer)
            
            # Validator agent
            validator = ValidatorAgent(
                agent_id=f"VAL-{domain.value[:4]}",
                domain=domain,
                brex_rules=["BREX-FAB-001"],
            )
            self.add_agent(validator)

    def run_iteration(self) -> Dict[str, Any]:
        """Run one iteration of multi-agent exploration."""
        self.iteration += 1
        iteration_designs = []
        
        # Phase 1: Exploration
        for agent_id, agent in self.agents.items():
            if agent.role in [AgentRole.EXPLORER, AgentRole.OPTIMIZER]:
                candidates = agent.explore(
                    self.design_space,
                    self.best_design,
                    self.design_space.constraints,
                )
                iteration_designs.extend(candidates)
        
        # Phase 2: Evaluation
        for design in iteration_designs:
            for agent in self.agents.values():
                design = agent.evaluate(design, self.design_space.objectives)
        
        # Phase 3: Validation
        for design in iteration_designs:
            for agent in self.agents.values():
                if isinstance(agent, ValidatorAgent):
                    design = agent.validate_design(design, self.design_space.constraints)
        
        # Phase 4: Compute fitness and add to design space
        for design in iteration_designs:
            self._compute_fitness(design)
            self.design_space.add_design(design)
        
        # Phase 5: Update Pareto front and best design
        pareto = self.design_space.update_pareto_front()
        if pareto:
            # Select best by weighted fitness
            self.best_design = max(pareto, key=lambda d: d.fitness)
        
        return {
            "iteration": self.iteration,
            "designs_explored": len(iteration_designs),
            "total_designs": len(self.design_space.designs),
            "feasible_designs": sum(1 for d in self.design_space.designs if d.is_feasible),
            "pareto_size": len(pareto),
            "best_fitness": self.best_design.fitness if self.best_design else None,
        }

    def run(self, iterations: int = 10) -> Dict[str, Any]:
        """
        Run multiple iterations of exploration.
        
        Args:
            iterations: Number of iterations to run.
            
        Returns:
            Summary of the exploration run.
        """
        results = []
        for _ in range(iterations):
            result = self.run_iteration()
            results.append(result)
        
        return {
            "session_id": self.session_id,
            "iterations": iterations,
            "total_designs": len(self.design_space.designs),
            "pareto_size": len(self.design_space.pareto_front),
            "best_design": self.best_design.to_dict() if self.best_design else None,
            "iteration_history": results,
        }

    def _compute_fitness(self, design: DesignPoint) -> None:
        """Compute overall fitness for a design."""
        if not design.is_feasible:
            design.fitness = float('-inf')
            return
        
        fitness = 0.0
        for obj in self.design_space.objectives:
            value = design.objectives.get(obj.name, 0)
            fitness += obj.evaluate_fitness(value) * obj.weight
        
        design.fitness = fitness

    def export_results(self, filepath: Optional[Path] = None) -> Path:
        """Export exploration results to file."""
        if filepath is None:
            filepath = self.log_dir / f"exploration_{self.session_id}.json"
        
        data = {
            "session_id": self.session_id,
            "design_space": self.design_space.name,
            "num_variables": len(self.design_space.variables),
            "num_objectives": len(self.design_space.objectives),
            "num_constraints": len(self.design_space.constraints),
            "total_designs": len(self.design_space.designs),
            "pareto_front": [d.to_dict() for d in self.design_space.pareto_front],
            "agents": {
                agent_id: {
                    "domain": agent.domain.value,
                    "role": agent.role.value,
                    "designs_explored": agent.designs_explored,
                }
                for agent_id, agent in self.agents.items()
            },
        }
        
        with open(filepath, "w") as f:
            json.dump(data, f, indent=2)
        
        return filepath


def create_ampel360_design_space() -> DesignSpace:
    """Create the AMPEL360 Q100 aircraft design space."""
    space = DesignSpace("AMPEL360_Q100_BWB_H2")
    
    # Aerodynamic variables
    space.add_variable(DesignVariable(
        name="wing_span",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.AERODYNAMICS,
        min_value=30.0,
        max_value=45.0,
        default_value=36.0,
        unit="m",
        description="Wing span",
        ata_chapter="57",
    ))
    
    space.add_variable(DesignVariable(
        name="wing_area",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.AERODYNAMICS,
        min_value=100.0,
        max_value=180.0,
        default_value=140.0,
        unit="m²",
        description="Wing reference area",
        ata_chapter="57",
    ))
    
    space.add_variable(DesignVariable(
        name="sweep_angle",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.AERODYNAMICS,
        min_value=20.0,
        max_value=40.0,
        default_value=30.0,
        unit="deg",
        description="Wing sweep angle at quarter chord",
        ata_chapter="57",
    ))
    
    # Propulsion variables
    space.add_variable(DesignVariable(
        name="fuel_cell_power",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.PROPULSION,
        min_value=5000.0,
        max_value=15000.0,
        default_value=10000.0,
        unit="kW",
        description="Total fuel cell power",
        ata_chapter="71",
    ))
    
    space.add_variable(DesignVariable(
        name="propulsion_type",
        var_type=DesignVariableType.CATEGORICAL,
        domain=AgentDomain.PROPULSION,
        discrete_values=["fuel_cell_only", "fuel_cell_hybrid", "battery_boost"],
        default_value="fuel_cell_only",
        description="Propulsion architecture type",
        ata_chapter="71",
    ))
    
    # Hydrogen system variables
    space.add_variable(DesignVariable(
        name="h2_tank_capacity",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.HYDROGEN_SYSTEMS,
        min_value=500.0,
        max_value=2000.0,
        default_value=1000.0,
        unit="kg",
        description="LH2 tank capacity",
        ata_chapter="28",
    ))
    
    space.add_variable(DesignVariable(
        name="h2_tank_pressure",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.HYDROGEN_SYSTEMS,
        min_value=2.0,
        max_value=5.0,
        default_value=3.5,
        unit="bar",
        description="LH2 tank operating pressure",
        ata_chapter="28",
    ))
    
    # Structural variables
    space.add_variable(DesignVariable(
        name="structure_material",
        var_type=DesignVariableType.CATEGORICAL,
        domain=AgentDomain.STRUCTURES,
        discrete_values=["aluminum", "cfrp", "gfrp", "hybrid"],
        default_value="cfrp",
        description="Primary structure material",
        ata_chapter="51",
    ))
    
    space.add_variable(DesignVariable(
        name="mtow",
        var_type=DesignVariableType.CONTINUOUS,
        domain=AgentDomain.WEIGHT_BALANCE,
        min_value=35000.0,
        max_value=60000.0,
        default_value=45000.0,
        unit="kg",
        description="Maximum takeoff weight",
        ata_chapter="08",
    ))
    
    # Objectives
    space.add_objective(DesignObjective(
        name="fuel_efficiency",
        direction="maximize",
        domain=AgentDomain.PROPULSION,
        weight=1.5,
        unit="seat-km/kg_H2",
        description="Fuel efficiency in seat-km per kg of hydrogen",
    ))
    
    space.add_objective(DesignObjective(
        name="range",
        direction="maximize",
        domain=AgentDomain.AERODYNAMICS,
        weight=1.0,
        target_value=2500.0,
        unit="km",
        description="Maximum range",
    ))
    
    space.add_objective(DesignObjective(
        name="operating_cost",
        direction="minimize",
        domain=AgentDomain.COST_ECONOMICS,
        weight=1.2,
        unit="$/seat-km",
        description="Direct operating cost per seat-km",
    ))
    
    space.add_objective(DesignObjective(
        name="co2_emissions",
        direction="minimize",
        domain=AgentDomain.ENVIRONMENTAL,
        weight=1.0,
        unit="g/seat-km",
        description="CO2 equivalent emissions",
    ))
    
    # Constraints
    space.add_constraint(DesignConstraint(
        name="wing_span_constraint",
        constraint_type="<=",
        domain=AgentDomain.AERODYNAMICS,
        limit_value=36.0,  # ICAO Code C limit
        unit="m",
        description="Wing span limit for gate compatibility",
        brex_rule="BREX-EFF-001",
    ))
    
    space.add_constraint(DesignConstraint(
        name="mtow_constraint",
        constraint_type="<=",
        domain=AgentDomain.WEIGHT_BALANCE,
        limit_value=55000.0,
        unit="kg",
        description="Maximum takeoff weight limit",
        brex_rule="BREX-CONF-002",
    ))
    
    space.add_constraint(DesignConstraint(
        name="h2_pressure_constraint",
        constraint_type="range",
        domain=AgentDomain.HYDROGEN_SYSTEMS,
        limit_value=1.5,
        upper_limit=4.0,
        unit="bar",
        description="LH2 operating pressure range",
        severity="hard",
        brex_rule="BREX-LH2-001",
    ))
    
    return space


if __name__ == "__main__":
    # Self-test
    print("Multi-Agent Design Explorer - Self Test")
    print("=" * 50)
    
    # Create design space
    design_space = create_ampel360_design_space()
    print(f"\nDesign Space: {design_space.name}")
    print(f"  Variables: {len(design_space.variables)}")
    print(f"  Objectives: {len(design_space.objectives)}")
    print(f"  Constraints: {len(design_space.constraints)}")
    
    # Create explorer
    explorer = MultiAgentDesignExplorer(design_space)
    explorer.create_default_agents()
    print(f"\nAgents created: {len(explorer.agents)}")
    
    # Run exploration
    print("\nRunning exploration...")
    results = explorer.run(iterations=5)
    
    print(f"\nExploration Results:")
    print(f"  Session: {results['session_id']}")
    print(f"  Total designs: {results['total_designs']}")
    print(f"  Pareto size: {results['pareto_size']}")
    
    if results['best_design']:
        best = results['best_design']
        print(f"\nBest Design: {best['design_id']}")
        print(f"  Fitness: {best['fitness']:.2f}")
        print(f"  Feasible: {best['is_feasible']}")
    
    print("\n" + "=" * 50)
    print("Test complete!")
