# BREX Decision Engine - Package Initialization
"""
BREX Decision Engine for Guided Reasoning
==========================================

This package provides a deterministic decision engine based on BREX 
(Business Rules EXchange) patterns for the AMPEL360 Q100 program.

Key Components:
- BREXDecisionEngine: Main engine for rule evaluation
- ExplainabilityLogger: Auditable logging with hash chains
- BREXRule: Individual business rule definition
- DecisionRecord: Immutable audit record

Example Usage:
    from ASIGT.brex import create_engine
    
    engine = create_engine()
    record = engine.evaluate_rule("BREX-CONF-001", {"confidence": 0.92})
    print(record.outcome)  # DecisionOutcome.ACCEPT
"""

from .brex_decision_engine import (
    BREXDecisionEngine,
    BREXRule,
    DecisionOutcome,
    DecisionRecord,
    ExplainabilityLogger,
    RuleCondition,
    RuleSeverity,
    create_engine,
)

__all__ = [
    "BREXDecisionEngine",
    "BREXRule",
    "DecisionOutcome",
    "DecisionRecord",
    "ExplainabilityLogger",
    "RuleCondition",
    "RuleSeverity",
    "create_engine",
]

__version__ = "1.0.0"
