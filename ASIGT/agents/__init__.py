# Multi-Agent Design Exploration Package
"""
Multi-Agent Design Space Explorer
=================================

This package provides swarm-like design space exploration
with BREX-governed deterministic decision paths.

Key Components:
- MultiAgentDesignExplorer: Coordinates agent swarm
- DesignAgent: Base class for specialized agents
- DesignSpace: Design variable/objective/constraint definitions
- Factory functions for AMPEL360 design space

Example Usage:
    from ASIGT.agents import (
        MultiAgentDesignExplorer,
        create_ampel360_design_space,
    )
    
    design_space = create_ampel360_design_space()
    explorer = MultiAgentDesignExplorer(design_space)
    explorer.create_default_agents()
    results = explorer.run(iterations=100)
"""

from .design_explorer import (
    MultiAgentDesignExplorer,
    DesignAgent,
    ExplorerAgent,
    OptimizerAgent,
    ValidatorAgent,
    DesignSpace,
    DesignVariable,
    DesignObjective,
    DesignConstraint,
    DesignPoint,
    AgentDomain,
    AgentRole,
    DesignVariableType,
    create_ampel360_design_space,
)

__all__ = [
    "MultiAgentDesignExplorer",
    "DesignAgent",
    "ExplorerAgent",
    "OptimizerAgent",
    "ValidatorAgent",
    "DesignSpace",
    "DesignVariable",
    "DesignObjective",
    "DesignConstraint",
    "DesignPoint",
    "AgentDomain",
    "AgentRole",
    "DesignVariableType",
    "create_ampel360_design_space",
]

__version__ = "1.0.0"
