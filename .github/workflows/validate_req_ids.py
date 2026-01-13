#!/usr/bin/env python3
"""
Requirement ID Validator for AMPEL360 Q100

Validates requirement IDs against the ORIGIN-based naming convention:
REQ-{ORIGIN}-{ATA_CODE}-{LC_CODE}-{AOR_CODE}-{SEQ}

Pattern: ^REQ-([A-Z0-9]{2,6})-(CROSS|[0-9]{2}-[0-9]{2})-(CROSS|[0-9]{2})-([A-Z]{2,4})-([0-9]{3})$
"""

import re
import sys
import csv
from pathlib import Path
from typing import List, Dict, Optional

# Requirement ID pattern
REQ_ID_PATTERN = re.compile(
    r"^REQ-([A-Z0-9]{2,6})-(CROSS|[0-9]{2}-[0-9]{2})-(CROSS|[0-9]{2})-([A-Z]{2,4})-([0-9]{3})$"
)

# Valid ORIGIN codes
VALID_ORIGINS = {
    "AMPEL", "DERIV",  # Program-generated
    "EASA", "FAA", "ICAO",  # Regulatory
    "SAE", "ISO", "RTCA", "EUROCAE", "ATA", "S1000D",  # Industry standards
    "CUST", "MARKET",  # Customer
    "SUPP",  # Supplier
    "TECH", "ASIT",  # Research
    "LEGACY"  # Legacy
}


def validate_requirement_id(req_id: str) -> tuple[bool, Optional[str]]:
    """
    Validate a requirement ID against the pattern.
    
    Returns:
        (is_valid, error_message)
    """
    match = REQ_ID_PATTERN.match(req_id)
    
    if not match:
        return False, f"Does not match pattern REQ-ORIGIN-ATA-LC-AOR-SEQ"
    
    origin, ata, lc, aor, seq = match.groups()
    
    # Validate ORIGIN
    if origin not in VALID_ORIGINS:
        return False, f"Unknown ORIGIN code: {origin}"
    
    return True, None


def scan_csv_file(filepath: Path) -> List[Dict]:
    """Scan a CSV file for requirement IDs."""
    results = []
    
    try:
        with open(filepath, 'r') as f:
            reader = csv.DictReader(f)
            for row_num, row in enumerate(reader, start=2):
                if 'REQ_ID' in row:
                    req_id = row['REQ_ID']
                    is_valid, error = validate_requirement_id(req_id)
                    
                    if not is_valid:
                        results.append({
                            'file': str(filepath),
                            'line': row_num,
                            'id': req_id,
                            'error': error
                        })
    except Exception as e:
        print(f"Error reading {filepath}: {e}", file=sys.stderr)
    
    return results


def scan_markdown_file(filepath: Path) -> List[Dict]:
    """Scan a markdown file for requirement IDs in headers."""
    results = []
    
    try:
        with open(filepath, 'r') as f:
            for line_num, line in enumerate(f, start=1):
                # Look for requirement headers like "#### REQ-..."
                match = re.search(r'####\s+(REQ-[A-Z0-9-]+)', line)
                if match:
                    req_id = match.group(1)
                    is_valid, error = validate_requirement_id(req_id)
                    
                    if not is_valid:
                        results.append({
                            'file': str(filepath),
                            'line': line_num,
                            'id': req_id,
                            'error': error
                        })
    except Exception as e:
        print(f"Error reading {filepath}: {e}", file=sys.stderr)
    
    return results


def main():
    """Main validation function."""
    # Get repository root - script is in .github/workflows/
    repo_root = Path(__file__).parent.parent.parent
    ssot_path = repo_root / "OPT-IN_FRAMEWORK" / "O-ORGANIZATIONS" / "ATA_00-GENERAL" / "ATA-00-general" / "00-00-general" / "SSOT"
    
    print("=" * 70)
    print("AMPEL360 Q100 - Requirement ID Validator")
    print("=" * 70)
    print(f"\nScanning: {ssot_path}")
    print()
    
    if not ssot_path.exists():
        print(f"Error: Path does not exist: {ssot_path}")
        return 1
    
    # Scan CSV files
    csv_files = list(ssot_path.glob("**/*requirements-matrix.csv"))
    print(f"Found {len(csv_files)} requirement matrix CSV files")
    
    csv_errors = []
    for csv_file in csv_files:
        errors = scan_csv_file(csv_file)
        csv_errors.extend(errors)
    
    # Scan markdown files
    md_files = list(ssot_path.glob("**/*requirements.md"))
    print(f"Found {len(md_files)} requirement markdown files")
    
    md_errors = []
    for md_file in md_files:
        errors = scan_markdown_file(md_file)
        md_errors.extend(errors)
    
    # Report results
    all_errors = csv_errors + md_errors
    
    print("\n" + "=" * 70)
    if all_errors:
        print(f"❌ Found {len(all_errors)} invalid requirement IDs:")
        print("=" * 70)
        
        for error in all_errors:
            print(f"\n  File: {error['file']}")
            print(f"  Line: {error['line']}")
            print(f"    ID: {error['id']}")
            print(f" Error: {error['error']}")
        
        return 1
    else:
        print("✅ All requirement IDs are valid!")
        print("=" * 70)
        return 0


if __name__ == "__main__":
    sys.exit(main())
