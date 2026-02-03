#!/usr/bin/env python3
"""
BREX Integration Wrapper for Existing Validators
=================================================

This module provides integration between the BREX Decision Engine and
existing validation infrastructure in the AMPEL360 Q100 program.

Version: 1.0.0
Effective Date: 2026-01-30
"""

import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

# Ensure ASIGT module is importable
repo_root = Path(__file__).parent.parent
if str(repo_root) not in sys.path:
    sys.path.insert(0, str(repo_root))

from ASIGT.brex.brex_decision_engine import (
    BREXDecisionEngine,
    DecisionOutcome,
    DecisionRecord,
    create_engine,
)


class BREXValidator:
    """
    High-level BREX validation interface for integration with existing validators.
    
    This class provides simplified methods for common validation scenarios.
    """

    # Safety-critical ATA chapters
    SAFETY_CRITICAL_CHAPTERS = {"27", "28", "29", "32", "71", "72"}
    
    # AI/ML chapters
    AI_ML_CHAPTERS = {"95"}
    
    # DPP chapters
    DPP_CHAPTERS = {"96"}

    def __init__(
        self,
        authority_file: Optional[Path] = None,
        session_id: Optional[str] = None,
    ):
        """
        Initialize the BREX validator.
        
        Args:
            authority_file: Path to BREX authority YAML file.
            session_id: Unique session identifier.
        """
        if authority_file is None:
            authority_file = repo_root / "ASIT" / "GOVERNANCE" / "master_brex_authority.yaml"
        
        self.engine = create_engine(
            authority_file=authority_file if authority_file.exists() else None,
            session_id=session_id,
        )

    def validate_content(
        self,
        content: Dict[str, Any],
        ata_chapter: Optional[str] = None,
    ) -> Tuple[bool, str, List[DecisionRecord]]:
        """
        Validate content using appropriate BREX rules.
        
        Args:
            content: Dictionary with content to validate.
            ata_chapter: Optional ATA chapter code.
            
        Returns:
            Tuple of (is_valid, message, records)
        """
        # Determine validation group based on content and chapter
        group = self._select_rule_group(content, ata_chapter)
        
        # Build context from content
        context = self._build_context(content, ata_chapter)
        
        # Evaluate rules
        records = self.engine.evaluate_group(group, context, ata_chapter)
        
        # Determine overall result using explicit status values
        rejected = [r for r in records if r.outcome == DecisionOutcome.REJECT]
        escalated = [r for r in records if r.outcome == DecisionOutcome.ESCALATE_HITL]
        
        if rejected:
            message = f"Validation failed: {rejected[0].explanation}"
            # Return (False, message, records) - explicitly failed
            return False, message, records
        elif escalated:
            message = f"HITL required: {escalated[0].explanation}"
            # Return ("HITL", message, records) - indicates HITL needed
            # Using string "HITL" instead of None for clearer semantics
            return "HITL", message, records
        else:
            return True, "Validation passed", records

    def validate_requirement(
        self,
        req_id: str,
        source: Optional[Dict[str, Any]] = None,
        confidence: float = 0.85,
    ) -> Tuple[bool, str]:
        """
        Validate a requirement ID with source traceability.
        
        Args:
            req_id: Requirement ID string.
            source: Source reference dictionary.
            confidence: Confidence score.
            
        Returns:
            Tuple of (is_valid, message)
        """
        # Safe extraction of doc_id from req_id
        if source is None:
            parts = req_id.split("-")
            doc_id = parts[1] if len(parts) > 1 else req_id
            source = {"doc_id": doc_id}
        
        context = {
            "req_id": req_id,
            "confidence": confidence,
            "source": source,
        }
        
        # Use standard validation
        records = self.engine.evaluate_group("standard_validation", context)
        
        rejected = [r for r in records if r.outcome == DecisionOutcome.REJECT]
        if rejected:
            return False, rejected[0].explanation
        
        return True, "Requirement validation passed"

    def validate_csdb_content(
        self,
        dmc: str,
        content: Dict[str, Any],
    ) -> Tuple[bool, str, List[Dict]]:
        """
        Validate CSDB Data Module content.
        
        Args:
            dmc: Data Module Code.
            content: Content dictionary.
            
        Returns:
            Tuple of (is_valid, message, violations)
        """
        context = {
            "dmc": dmc,
            "brex_ref": content.get("brex_ref"),
            "effectivity": content.get("effectivity"),
            "confidence": 0.95,  # Structured XML = high confidence
        }
        
        # Extract ATA chapter from DMC
        ata_chapter = self._extract_ata_from_dmc(dmc)
        
        records = self.engine.evaluate_group("csdb_validation", context, ata_chapter)
        
        violations = [
            {
                "rule": r.rule_id,
                "severity": r.severity.value,
                "message": r.explanation,
            }
            for r in records
            if r.outcome != DecisionOutcome.ACCEPT
        ]
        
        is_valid = len(violations) == 0
        message = "CSDB validation passed" if is_valid else f"{len(violations)} violations found"
        
        return is_valid, message, violations

    def validate_safety_content(
        self,
        content: Dict[str, Any],
        ata_chapter: str,
    ) -> Tuple[bool, str]:
        """
        Validate safety-critical content with elevated thresholds.
        
        Args:
            content: Content dictionary.
            ata_chapter: ATA chapter code.
            
        Returns:
            Tuple of (is_valid, message)
        """
        # Force safety-critical flag
        content["safety_critical"] = True
        
        context = self._build_context(content, ata_chapter)
        
        records = self.engine.evaluate_group("safety_critical_validation", context, ata_chapter)
        
        rejected = [r for r in records if r.outcome == DecisionOutcome.REJECT]
        if rejected:
            return False, f"Safety validation failed: {rejected[0].explanation}"
        
        escalated = [r for r in records if r.outcome == DecisionOutcome.ESCALATE_HITL]
        if escalated:
            return False, f"Safety content requires HITL: {escalated[0].explanation}"
        
        return True, "Safety validation passed"

    def get_session_summary(self) -> Dict[str, Any]:
        """Get summary of validation session."""
        return self.engine.get_decision_summary()

    def finalize(self) -> Dict[str, Any]:
        """Finalize validation session and return summary."""
        return self.engine.finalize_session()

    def _select_rule_group(
        self,
        content: Dict[str, Any],
        ata_chapter: Optional[str],
    ) -> str:
        """Select appropriate rule group based on content and chapter."""
        if content.get("safety_critical"):
            return "safety_critical_validation"
        elif ata_chapter in self.SAFETY_CRITICAL_CHAPTERS:
            return "safety_critical_validation"
        elif ata_chapter in self.AI_ML_CHAPTERS:
            return "ata_95_ai_validation"
        elif ata_chapter in self.DPP_CHAPTERS:
            return "ata_96_dpp_validation"
        elif ata_chapter == "28":
            return "ata_28_lh2_validation"
        elif ata_chapter == "71":
            return "ata_71_powerplant_validation"
        else:
            return "standard_validation"

    def _build_context(
        self,
        content: Dict[str, Any],
        ata_chapter: Optional[str],
    ) -> Dict[str, Any]:
        """Build evaluation context from content."""
        context = dict(content)
        
        if ata_chapter:
            context["ata_chapter"] = ata_chapter
            context["ata_reference"] = ata_chapter
            
            # Set safety-critical flag for known safety chapters
            if ata_chapter in self.SAFETY_CRITICAL_CHAPTERS:
                context.setdefault("safety_critical", True)
        
        # Ensure source structure
        if "source" not in context:
            context["source"] = {}
        
        return context

    def _extract_ata_from_dmc(self, dmc: str) -> Optional[str]:
        """Extract ATA chapter from DMC code."""
        # DMC format: DMC-AMPEL360-CC-SS-SU-SB...
        if not dmc:
            return None
        parts = dmc.split("-")
        if len(parts) >= 3:
            chapter = parts[2]
            # Validate chapter is a 2-digit number
            if chapter.isdigit() and len(chapter) == 2:
                return chapter
        return None


# Convenience function for quick validation
def validate_with_brex(
    content: Dict[str, Any],
    ata_chapter: Optional[str] = None,
    session_id: Optional[str] = None,
) -> Tuple[bool, str]:
    """
    Quick validation function for one-off checks.
    
    Args:
        content: Content to validate.
        ata_chapter: Optional ATA chapter.
        session_id: Optional session identifier.
        
    Returns:
        Tuple of (is_valid: bool, message: str)
        Note: Returns False for both validation failures and HITL-required cases.
        Use BREXValidator directly for distinguishing these cases.
    """
    validator = BREXValidator(session_id=session_id)
    result, message, _ = validator.validate_content(content, ata_chapter)
    validator.finalize()
    # Convert "HITL" or any non-True to False for simple boolean interface
    return result is True, message


if __name__ == "__main__":
    # Example usage and self-test
    print("BREX Integration Wrapper - Self Test")
    print("=" * 50)
    
    validator = BREXValidator(session_id="INTEGRATION-TEST")
    
    # Test standard validation
    print("\nTest 1: Standard content validation")
    content = {
        "confidence": 0.88,
        "source": {"doc_id": "DOC-001", "spans": ["span:100-200"]},
    }
    result, message, _ = validator.validate_content(content)
    print(f"  Result: {result}")
    print(f"  Message: {message}")
    
    # Test safety-critical validation
    print("\nTest 2: Safety-critical validation (ATA 28)")
    content = {
        "confidence": 0.92,
        "source": {"doc_id": "KNU-28-001", "spans": ["span:50-100"]},
        "safety_critical": True,
        "extraction_method": "direct",
    }
    result, message, _ = validator.validate_content(content, ata_chapter="28")
    print(f"  Result: {result}")
    print(f"  Message: {message}")
    
    # Test low confidence triggering HITL
    print("\nTest 3: Low confidence triggering HITL")
    content = {
        "confidence": 0.72,
        "source": {"doc_id": "DOC-002"},
    }
    result, message, _ = validator.validate_content(content)
    print(f"  Result: {result}")  # "HITL" = HITL required
    print(f"  Message: {message}")
    
    # Get summary
    summary = validator.finalize()
    print("\nSession Summary:")
    print(f"  Total decisions: {summary['total_decisions']}")
    print(f"  Outcomes: {summary['outcomes']}")
    
    print("\n" + "=" * 50)
    print("Integration test complete!")
