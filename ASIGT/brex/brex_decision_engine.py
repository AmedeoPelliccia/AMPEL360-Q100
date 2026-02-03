#!/usr/bin/env python3
"""
BREX Decision Engine for Guided Reasoning
==========================================

This module implements a deterministic decision engine based on BREX (Business Rules EXchange)
patterns for the AMPEL360 Q100 program. It provides guided reasoning with auditable
explainability logging for all decision paths.

Version: 1.0.0
Effective Date: 2026-01-30
Classification: INTERNAL
"""

import json
import logging
import os
import hashlib
from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional, Union

import yaml


class DecisionOutcome(Enum):
    """Possible outcomes of a BREX decision evaluation."""
    ACCEPT = "ACCEPT"
    REJECT = "REJECT"
    ESCALATE_HITL = "ESCALATE_HITL"
    WARN = "WARN"
    PENDING = "PENDING"


class RuleSeverity(Enum):
    """Severity levels for BREX rules."""
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"
    INFO = "INFO"


@dataclass
class RuleCondition:
    """Represents a single condition within a BREX rule."""
    field: str
    operator: str
    value: Any
    description: str = ""

    def evaluate(self, context: Dict[str, Any]) -> bool:
        """Evaluate the condition against a context dictionary."""
        import re
        
        field_value = self._get_nested_value(context, self.field)
        
        def safe_regex_match(value: Any, pattern: str) -> bool:
            """Safely evaluate regex with timeout protection."""
            if value is None:
                return False
            try:
                # Limit pattern complexity by checking length
                if len(pattern) > 500:
                    raise ValueError("Regex pattern too long")
                return bool(re.match(pattern, str(value)))
            except re.error:
                return False
        
        operators = {
            "eq": lambda a, b: a == b,
            "ne": lambda a, b: a != b,
            "gt": lambda a, b: a > b if a is not None and b is not None else False,
            "gte": lambda a, b: a >= b if a is not None and b is not None else False,
            "lt": lambda a, b: a < b if a is not None and b is not None else False,
            "lte": lambda a, b: a <= b if a is not None and b is not None else False,
            "in": lambda a, b: a in b if b is not None else False,
            "not_in": lambda a, b: a not in b if b is not None else True,
            "contains": lambda a, b: b in a if a else False,
            "regex": safe_regex_match,
            "is_null": lambda a, _: a is None,
            "is_not_null": lambda a, _: a is not None,
        }
        
        op_func = operators.get(self.operator)
        if not op_func:
            raise ValueError(f"Unknown operator: {self.operator}")
        
        return op_func(field_value, self.value)

    @staticmethod
    def _get_nested_value(data: Dict[str, Any], path: str) -> Any:
        """Get a value from a nested dictionary using dot notation."""
        keys = path.split(".")
        result = data
        for key in keys:
            if isinstance(result, dict):
                result = result.get(key)
            else:
                return None
        return result


@dataclass
class BREXRule:
    """Represents a single BREX business rule."""
    rule_id: str
    name: str
    description: str
    severity: RuleSeverity
    conditions: List[RuleCondition]
    outcome_on_pass: DecisionOutcome
    outcome_on_fail: DecisionOutcome
    ata_chapters: List[str] = field(default_factory=list)
    tags: List[str] = field(default_factory=list)
    rationale: str = ""
    remediation: str = ""
    enabled: bool = True

    def evaluate(self, context: Dict[str, Any]) -> tuple:
        """
        Evaluate the rule against the provided context.
        
        Returns:
            Tuple of (passed: bool, outcome: DecisionOutcome, explanation: str)
        """
        if not self.enabled:
            return True, DecisionOutcome.ACCEPT, "Rule disabled"
        
        failed_conditions = []
        passed_conditions = []
        condition_errors = []
        
        for condition in self.conditions:
            try:
                if condition.evaluate(context):
                    passed_conditions.append(condition)
                else:
                    failed_conditions.append(condition)
            except Exception as e:
                # Log the error for debugging but treat as failure
                condition_errors.append((condition, str(e)))
                failed_conditions.append(condition)
        
        passed = len(failed_conditions) == 0
        outcome = self.outcome_on_pass if passed else self.outcome_on_fail
        
        explanation = self._generate_explanation(
            passed, passed_conditions, failed_conditions, condition_errors
        )
        
        return passed, outcome, explanation

    def _generate_explanation(
        self, 
        passed: bool, 
        passed_conditions: List[RuleCondition], 
        failed_conditions: List[RuleCondition],
        condition_errors: Optional[List[tuple]] = None
    ) -> str:
        """Generate a human-readable explanation of the rule evaluation."""
        lines = [f"Rule: {self.name} ({self.rule_id})"]
        lines.append(f"Result: {'PASSED' if passed else 'FAILED'}")
        
        if passed_conditions:
            lines.append("Conditions met:")
            for c in passed_conditions:
                desc = c.description or f"{c.field} {c.operator} {c.value}"
                lines.append(f"  ✓ {desc}")
        
        if failed_conditions:
            lines.append("Conditions not met:")
            for c in failed_conditions:
                desc = c.description or f"{c.field} {c.operator} {c.value}"
                lines.append(f"  ✗ {desc}")
        
        if condition_errors:
            lines.append("Condition evaluation errors:")
            for condition, error_msg in condition_errors:
                lines.append(f"  ⚠ {condition.field}: {error_msg}")
        
        if not passed and self.remediation:
            lines.append(f"Remediation: {self.remediation}")
        
        return "\n".join(lines)


@dataclass
class DecisionRecord:
    """Immutable record of a decision for audit purposes."""
    decision_id: str
    timestamp: str
    rule_id: str
    rule_name: str
    context_hash: str
    outcome: DecisionOutcome
    passed: bool
    explanation: str
    severity: RuleSeverity
    ata_chapter: Optional[str] = None
    session_id: Optional[str] = None
    actor: str = "BREX_ENGINE"

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for serialization."""
        return {
            "decision_id": self.decision_id,
            "timestamp": self.timestamp,
            "rule_id": self.rule_id,
            "rule_name": self.rule_name,
            "context_hash": self.context_hash,
            "outcome": self.outcome.value,
            "passed": self.passed,
            "explanation": self.explanation,
            "severity": self.severity.value,
            "ata_chapter": self.ata_chapter,
            "session_id": self.session_id,
            "actor": self.actor,
        }


class ExplainabilityLogger:
    """
    Auditable logging system for BREX decision explainability.
    
    Provides tamper-evident logging with hash chains for audit compliance.
    """

    def __init__(self, log_dir: Optional[Path] = None, session_id: Optional[str] = None):
        """
        Initialize the explainability logger.
        
        Args:
            log_dir: Directory for storing audit logs. Defaults to ASIGT/logs.
            session_id: Unique identifier for this decision session.
        """
        self.log_dir = log_dir or Path(__file__).parent.parent / "logs"
        self.log_dir.mkdir(parents=True, exist_ok=True)
        
        self.session_id = session_id or self._generate_session_id()
        self.decision_count = 0
        self.previous_hash = "0" * 64  # Genesis hash
        
        # Set up file logging
        self.log_file = self.log_dir / f"brex_decisions_{self.session_id}.jsonl"
        self.summary_file = self.log_dir / f"brex_summary_{self.session_id}.json"
        
        # Initialize summary data
        self.summary = {
            "session_id": self.session_id,
            "started_at": datetime.now(timezone.utc).isoformat(),
            "ended_at": None,
            "total_decisions": 0,
            "outcomes": {
                "ACCEPT": 0,
                "REJECT": 0,
                "ESCALATE_HITL": 0,
                "WARN": 0,
                "PENDING": 0,
            },
            "by_severity": {
                "CRITICAL": 0,
                "HIGH": 0,
                "MEDIUM": 0,
                "LOW": 0,
                "INFO": 0,
            },
        }

    def _generate_session_id(self) -> str:
        """Generate a unique session identifier."""
        timestamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
        random_suffix = hashlib.sha256(os.urandom(16)).hexdigest()[:8]
        return f"BREX-{timestamp}-{random_suffix}"

    def _compute_hash(self, data: str) -> str:
        """Compute SHA-256 hash of data."""
        return hashlib.sha256(data.encode()).hexdigest()

    def _generate_decision_id(self) -> str:
        """Generate a unique decision identifier."""
        self.decision_count += 1
        return f"{self.session_id}-D{self.decision_count:04d}"

    def log_decision(self, record: DecisionRecord) -> str:
        """
        Log a decision record with hash chain for integrity.
        
        Args:
            record: The decision record to log.
            
        Returns:
            The hash of this log entry for verification.
        """
        # Create entry with hash chain
        entry = record.to_dict()
        entry["previous_hash"] = self.previous_hash
        entry["entry_hash"] = self._compute_hash(
            json.dumps(entry, sort_keys=True) + self.previous_hash
        )
        
        # Update hash chain
        self.previous_hash = entry["entry_hash"]
        
        # Write to log file (append)
        with open(self.log_file, "a") as f:
            f.write(json.dumps(entry) + "\n")
        
        # Update summary
        self.summary["total_decisions"] += 1
        self.summary["outcomes"][record.outcome.value] += 1
        self.summary["by_severity"][record.severity.value] += 1
        
        return entry["entry_hash"]

    def finalize(self) -> Dict[str, Any]:
        """
        Finalize the logging session and write summary.
        
        Returns:
            The session summary dictionary.
        """
        self.summary["ended_at"] = datetime.now(timezone.utc).isoformat()
        self.summary["final_hash"] = self.previous_hash
        
        with open(self.summary_file, "w") as f:
            json.dump(self.summary, f, indent=2)
        
        return self.summary

    def verify_integrity(self) -> tuple:
        """
        Verify the integrity of the log file using hash chain.
        
        Returns:
            Tuple of (is_valid: bool, message: str)
        """
        if not self.log_file.exists():
            return False, "Log file does not exist"
        
        previous_hash = "0" * 64
        line_number = 0
        
        with open(self.log_file, "r") as f:
            for line in f:
                line_number += 1
                try:
                    entry = json.loads(line.strip())
                except json.JSONDecodeError:
                    return False, f"Invalid JSON at line {line_number}"
                
                if entry.get("previous_hash") != previous_hash:
                    return False, f"Hash chain broken at line {line_number}"
                
                # Verify entry hash without modifying the original entry
                stored_hash = entry.get("entry_hash")
                # Create a copy without entry_hash for verification
                entry_for_hash = {k: v for k, v in entry.items() if k != "entry_hash"}
                expected_hash = self._compute_hash(
                    json.dumps(entry_for_hash, sort_keys=True) + previous_hash
                )
                
                if stored_hash != expected_hash:
                    return False, f"Entry hash mismatch at line {line_number}"
                
                previous_hash = stored_hash
        
        return True, f"Verified {line_number} entries successfully"


class BREXDecisionEngine:
    """
    Main BREX Decision Engine for guided reasoning.
    
    Provides deterministic rule evaluation with full audit trail.
    """

    def __init__(
        self,
        authority_file: Optional[Path] = None,
        log_dir: Optional[Path] = None,
        session_id: Optional[str] = None,
    ):
        """
        Initialize the BREX Decision Engine.
        
        Args:
            authority_file: Path to master BREX authority YAML file.
            log_dir: Directory for audit logs.
            session_id: Unique session identifier.
        """
        self.rules: Dict[str, BREXRule] = {}
        self.rule_groups: Dict[str, List[str]] = {}
        self.authority_metadata: Dict[str, Any] = {}
        
        # Initialize logger
        self.logger = ExplainabilityLogger(log_dir=log_dir, session_id=session_id)
        
        # Load authority file if provided
        if authority_file:
            self.load_authority(authority_file)

    def load_authority(self, authority_file: Path) -> None:
        """
        Load BREX rules from a master authority YAML file.
        
        Args:
            authority_file: Path to the YAML file.
        """
        with open(authority_file, "r") as f:
            data = yaml.safe_load(f)
        
        self.authority_metadata = data.get("metadata", {})
        
        # Load rules
        for rule_data in data.get("rules", []):
            rule = self._parse_rule(rule_data)
            self.rules[rule.rule_id] = rule
        
        # Load rule groups
        self.rule_groups = data.get("rule_groups", {})

    def _parse_rule(self, rule_data: Dict[str, Any]) -> BREXRule:
        """Parse a rule dictionary into a BREXRule object."""
        conditions = []
        for cond_data in rule_data.get("conditions", []):
            condition = RuleCondition(
                field=cond_data["field"],
                operator=cond_data["operator"],
                value=cond_data.get("value"),
                description=cond_data.get("description", ""),
            )
            conditions.append(condition)
        
        return BREXRule(
            rule_id=rule_data["rule_id"],
            name=rule_data["name"],
            description=rule_data.get("description", ""),
            severity=RuleSeverity[rule_data.get("severity", "MEDIUM").upper()],
            conditions=conditions,
            outcome_on_pass=DecisionOutcome[rule_data.get("outcome_on_pass", "ACCEPT").upper()],
            outcome_on_fail=DecisionOutcome[rule_data.get("outcome_on_fail", "REJECT").upper()],
            ata_chapters=rule_data.get("ata_chapters", []),
            tags=rule_data.get("tags", []),
            rationale=rule_data.get("rationale", ""),
            remediation=rule_data.get("remediation", ""),
            enabled=rule_data.get("enabled", True),
        )

    def add_rule(self, rule: BREXRule) -> None:
        """Add a rule to the engine."""
        self.rules[rule.rule_id] = rule

    def evaluate_rule(
        self,
        rule_id: str,
        context: Dict[str, Any],
        ata_chapter: Optional[str] = None,
    ) -> DecisionRecord:
        """
        Evaluate a single rule against a context.
        
        Args:
            rule_id: The ID of the rule to evaluate.
            context: Dictionary containing the data to evaluate.
            ata_chapter: Optional ATA chapter for context.
            
        Returns:
            DecisionRecord with the evaluation results.
        """
        if rule_id not in self.rules:
            raise ValueError(f"Unknown rule: {rule_id}")
        
        rule = self.rules[rule_id]
        passed, outcome, explanation = rule.evaluate(context)
        
        # Create decision record with safe context hashing
        try:
            context_hash = hashlib.sha256(
                json.dumps(context, sort_keys=True, default=str).encode()
            ).hexdigest()[:16]
        except (TypeError, ValueError):
            # Fallback for non-serializable objects
            context_hash = hashlib.sha256(repr(context).encode()).hexdigest()[:16]
        
        record = DecisionRecord(
            decision_id=self.logger._generate_decision_id(),
            timestamp=datetime.now(timezone.utc).isoformat(),
            rule_id=rule_id,
            rule_name=rule.name,
            context_hash=context_hash,
            outcome=outcome,
            passed=passed,
            explanation=explanation,
            severity=rule.severity,
            ata_chapter=ata_chapter or (rule.ata_chapters[0] if rule.ata_chapters else None),
            session_id=self.logger.session_id,
        )
        
        # Log the decision
        self.logger.log_decision(record)
        
        return record

    def evaluate_rules(
        self,
        rule_ids: List[str],
        context: Dict[str, Any],
        ata_chapter: Optional[str] = None,
        stop_on_reject: bool = False,
    ) -> List[DecisionRecord]:
        """
        Evaluate multiple rules against a context.
        
        Args:
            rule_ids: List of rule IDs to evaluate.
            context: Dictionary containing the data to evaluate.
            ata_chapter: Optional ATA chapter for context.
            stop_on_reject: If True, stop evaluation on first REJECT.
            
        Returns:
            List of DecisionRecords.
        """
        records = []
        
        for rule_id in rule_ids:
            record = self.evaluate_rule(rule_id, context, ata_chapter)
            records.append(record)
            
            if stop_on_reject and record.outcome == DecisionOutcome.REJECT:
                break
        
        return records

    def evaluate_group(
        self,
        group_name: str,
        context: Dict[str, Any],
        ata_chapter: Optional[str] = None,
    ) -> List[DecisionRecord]:
        """
        Evaluate all rules in a named group.
        
        Args:
            group_name: Name of the rule group.
            context: Dictionary containing the data to evaluate.
            ata_chapter: Optional ATA chapter for context.
            
        Returns:
            List of DecisionRecords.
        """
        if group_name not in self.rule_groups:
            raise ValueError(f"Unknown rule group: {group_name}")
        
        rule_ids = self.rule_groups[group_name]
        return self.evaluate_rules(rule_ids, context, ata_chapter)

    def evaluate_for_ata(
        self,
        ata_chapter: str,
        context: Dict[str, Any],
    ) -> List[DecisionRecord]:
        """
        Evaluate all rules applicable to an ATA chapter.
        
        Args:
            ata_chapter: ATA chapter code (e.g., "28", "71").
            context: Dictionary containing the data to evaluate.
            
        Returns:
            List of DecisionRecords.
        """
        applicable_rules = [
            rule_id for rule_id, rule in self.rules.items()
            if not rule.ata_chapters or ata_chapter in rule.ata_chapters
        ]
        
        return self.evaluate_rules(applicable_rules, context, ata_chapter)

    def get_decision_summary(self) -> Dict[str, Any]:
        """Get a summary of decisions made in this session."""
        return self.logger.summary

    def finalize_session(self) -> Dict[str, Any]:
        """Finalize the session and return summary."""
        return self.logger.finalize()

    def verify_audit_log(self) -> tuple:
        """Verify integrity of the audit log."""
        return self.logger.verify_integrity()


# Convenience function for creating decision engine with default authority
def create_engine(
    authority_file: Optional[Path] = None,
    session_id: Optional[str] = None,
) -> BREXDecisionEngine:
    """
    Create a BREX Decision Engine with optional authority file.
    
    Args:
        authority_file: Path to authority YAML file. If None, looks for
                       default at ASIT/GOVERNANCE/master_brex_authority.yaml
        session_id: Optional session identifier.
        
    Returns:
        Configured BREXDecisionEngine instance.
    """
    if authority_file is None:
        # Try to find default authority file
        repo_root = Path(__file__).parent.parent.parent
        default_authority = repo_root / "ASIT" / "GOVERNANCE" / "master_brex_authority.yaml"
        if default_authority.exists():
            authority_file = default_authority
    
    return BREXDecisionEngine(
        authority_file=authority_file,
        session_id=session_id,
    )


if __name__ == "__main__":
    # Example usage and self-test
    print("BREX Decision Engine - Self Test")
    print("=" * 50)
    
    # Create engine
    engine = create_engine(session_id="TEST-SESSION")
    
    # Add a test rule
    test_rule = BREXRule(
        rule_id="TEST-001",
        name="Confidence Threshold Check",
        description="Verify confidence meets minimum threshold",
        severity=RuleSeverity.HIGH,
        conditions=[
            RuleCondition(
                field="confidence",
                operator="gte",
                value=0.85,
                description="Confidence must be at least 0.85",
            ),
        ],
        outcome_on_pass=DecisionOutcome.ACCEPT,
        outcome_on_fail=DecisionOutcome.ESCALATE_HITL,
        ata_chapters=["28", "71"],
        rationale="Safety-critical systems require high confidence",
        remediation="Review source data and increase confidence or escalate to SME",
    )
    engine.add_rule(test_rule)
    
    # Test contexts
    test_contexts = [
        {"confidence": 0.92, "ata_chapter": "28"},
        {"confidence": 0.75, "ata_chapter": "71"},
        {"confidence": 0.50, "ata_chapter": "28"},
    ]
    
    for context in test_contexts:
        record = engine.evaluate_rule("TEST-001", context)
        print(f"\nContext: {context}")
        print(f"Outcome: {record.outcome.value}")
        print(f"Passed: {record.passed}")
        print(f"Explanation:\n{record.explanation}")
    
    # Finalize and show summary
    summary = engine.finalize_session()
    print("\n" + "=" * 50)
    print("Session Summary:")
    print(json.dumps(summary, indent=2))
    
    # Verify integrity
    valid, message = engine.verify_audit_log()
    print(f"\nAudit Log Integrity: {'✓ VALID' if valid else '✗ INVALID'}")
    print(f"Message: {message}")
