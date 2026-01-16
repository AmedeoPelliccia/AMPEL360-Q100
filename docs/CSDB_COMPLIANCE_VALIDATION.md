# CSDB Compliance & Validation Strategy

**Version:** 1.0.0  
**Last Updated:** 2026-01-16 (Update this date when making changes)  
**Applies To:** AMPEL360 Q100 Program - All ATA Chapters

---

## Table of Contents

1. [Overview](#overview)
2. [S1000D Schema Compliance](#s1000d-schema-compliance)
3. [BREX Business Rules](#brex-business-rules)
4. [CI/CD Pipeline for Validation](#cicd-pipeline-for-validation)
5. [Validation Tools](#validation-tools)
6. [Common Validation Issues](#common-validation-issues)

---

## Overview

This document defines the compliance strategy for ensuring all CSDB (Common Source Database) content adheres to S1000D specifications and AMPEL360 Q100 program-specific business rules (BREX).

### Compliance Requirements

All Data Modules (DMs) must:
1. ✅ Validate against S1000D Issue 5.0 XML Schema
2. ✅ Pass AMPEL360 Q100 BREX validation
3. ✅ Have unique DMC (Data Module Code)
4. ✅ Reference valid applicability rules
5. ✅ Maintain traceability to source KNUs

---

## S1000D Schema Compliance

### S1000D Issue 5.0 Structure

All Data Modules follow the standard S1000D structure:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dmodule xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="http://www.s1000d.org/S1000D_5-0/xml_schema_flat/descript.xsd">
  
  <identAndStatusSection>
    <dmAddress>
      <dmIdent>
        <dmCode modelIdentCode="AMPEL360"
                systemDiffCode="XX"
                systemCode="YY"
                subSystemCode="00"
                subSubSystemCode="00"
                assyCode="A"
                disassyCode="NNN"
                disassyCodeVariant="A"
                infoCode="XXX"
                infoCodeVariant="A"
                itemLocationCode="A"/>
        <language languageIsoCode="en" countryIsoCode="US"/>
        <issueInfo issueNumber="001" inWork="00"/>
      </dmIdent>
      <dmAddressItems>
        <issueDate year="2026" month="01" day="16"/>
        <dmTitle>
          <techName>Technical Name</techName>
        </dmTitle>
      </dmAddressItems>
    </dmAddress>
    <dmStatus issueType="new">
      <security securityClassification="01"/>
      <responsiblePartnerCompany enterpriseCode="AMPEL360"/>
    </dmStatus>
  </identAndStatusSection>
  
  <content>
    <description>
      <!-- Content here -->
    </description>
  </content>
  
</dmodule>
```

### DMC Naming Convention

**Format:** `DMC-AMPEL360-{CC}-{SS}-{SU}-{SB}A-{DIS}{VAR}-{INFO}{VAR}`

Where:
- **CC** = ATA Chapter (e.g., 28, 71, 95)
- **SS** = ATA Section (e.g., 00, 10, 20)
- **SU** = Subject (2 digits)
- **SB** = Sub-subject (2 digits)
- **DIS** = Disassembly code (3 digits)
- **VAR** = Variant (A-Z)
- **INFO** = Information code (3 digits, see table below)
- **VAR** = Information code variant (A-Z)

### Information Codes (infoCode)

| Code Range | Purpose | Example |
|------------|---------|---------|
| 000-039 | Function, general data | 001 (Description) |
| 040-049 | Operation | 040 (Operation) |
| 050-099 | Maintenance | 052 (Troubleshooting) |
| 100-199 | Parts data | 100 (Parts list) |
| 200-299 | Process data | 200 (Process spec) |
| 300-399 | Wiring data | 300 (Wiring diagram) |
| 400-499 | Tools & equipment | 400 (Tools list) |
| 500-599 | Consumables | 500 (Consumables list) |

### Schema Validation

```bash
# Validate single DM against S1000D schema
xmllint --noout --schema /path/to/s1000d-5.0/descript.xsd DMC-AMPEL360-28-00-00-00A-001A-A.XML

# Validate all DMs in directory
find PUB/AMM/CSDB/DM/ -name "*.XML" -exec xmllint --noout --schema /path/to/s1000d-5.0/descript.xsd {} \;
```

---

## BREX Business Rules

### AMPEL360 Q100 BREX Structure

The program uses a master BREX Data Module: **DMC-AMPEL360-00-00-00-00A-022A-A**

This BREX defines:
1. **Structural Rules**: Mandatory/optional elements
2. **Value Rules**: Allowed attribute values
3. **Context Rules**: Element combinations and sequences
4. **Notation Rules**: Naming conventions

### BREX Reference in Data Modules

All DMs must reference the BREX:

```xml
<dmStatus>
  <security securityClassification="01"/>
  <qualityAssurance>
    <unverified/>
  </qualityAssurance>
  <brexDmRef>
    <dmRef>
      <dmRefIdent>
        <dmCode modelIdentCode="AMPEL360"
                systemDiffCode="00"
                systemCode="00"
                subSystemCode="00"
                subSubSystemCode="00"
                assyCode="A"
                disassyCode="022"
                disassyCodeVariant="A"
                infoCode="022"
                infoCodeVariant="A"
                itemLocationCode="A"/>
      </dmRefIdent>
    </dmRef>
  </brexDmRef>
</dmStatus>
```

### Chapter-Specific BREX Rules

#### General Rules (All Chapters)

1. **DMC Format**: Must follow AMPEL360 model identifier
2. **Language**: Primary language is en-US
3. **Security**: Classification must be "01" (Unclassified)
4. **Applicability**: Must reference valid Q100 configurations
5. **Traceability**: Must include reference to source KNU

#### ATA 28 (Fuel) Specific Rules

1. **H₂ Safety Warnings**: Mandatory warning elements for cryogenic procedures
2. **Unit Notation**: Must use kg/s for mass flow, kJ/kg for energy density
3. **Temperature**: Cryogenic temps must specify K (Kelvin) not °C
4. **Illustrations**: Mandatory for all tank assembly procedures

#### ATA 71 (Power Plant) Specific Rules

1. **Electrical Parameters**: Voltage, current, power must be specified
2. **Thermal Limits**: Operating temperature ranges mandatory
3. **Safety Interlocks**: All safety systems must be documented
4. **Efficiency Metrics**: Fuel cell efficiency specs required

#### ATA 95 (AI/ML) Specific Rules

1. **Model Version**: AI model version must be traceable
2. **Training Data**: Reference to training data provenance required
3. **Confidence Metrics**: Prediction confidence thresholds documented
4. **Explainability**: Decision rationale for safety-critical AI

#### ATA 96 (DPP) Specific Rules

1. **Traceability IDs**: Unique identifiers for all tracked components
2. **Blockchain Hash**: Immutable ledger references required
3. **Lifecycle Events**: Timestamp and actor for all events
4. **Regulatory Compliance**: EU DPP requirements flagged

### BREX Validation

```bash
# Using s1000d-brex-check tool (if available)
s1000d-brex-check --brex DMC-AMPEL360-00-00-00-00A-022A-A.XML \
                   --dm DMC-AMPEL360-28-00-00-00A-001A-A.XML

# Output shows violations:
# ERROR: Element 'warning' is mandatory for cryogenic procedures
# ERROR: Unit 'kg/s' not specified for fuel flow rate
# PASS: DMC format complies with AMPEL360 convention
```

---

## CI/CD Pipeline for Validation

### GitHub Actions Workflow

Create `.github/workflows/csdb-validation.yml`:

```yaml
name: CSDB Validation

on:
  push:
    paths:
      - 'OPT-IN_FRAMEWORK/**/PUB/AMM/CSDB/**'
  pull_request:
    paths:
      - 'OPT-IN_FRAMEWORK/**/PUB/AMM/CSDB/**'

jobs:
  validate-s1000d:
    name: Validate S1000D Schema
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3
      
      - name: Install Dependencies
        run: |
          sudo apt-get update
          sudo apt-get install -y libxml2-utils
      
      - name: Download S1000D Schema
        run: |
          # Download schema - note: s1000d.org may not support HTTPS
          # If HTTPS is unavailable, consider hosting schema internally or verifying checksum
          wget -O /tmp/S1000D_5-0.zip http://www.s1000d.org/Downloads/S1000D_5-0.zip
          # TODO: Add checksum verification when official checksum is available
          # echo "EXPECTED_SHA256  /tmp/S1000D_5-0.zip" | sha256sum -c -
          unzip /tmp/S1000D_5-0.zip -d /tmp/s1000d-schema/
      
      - name: Validate XML Files
        run: |
          EXIT_CODE=0
          for xml_file in $(find OPT-IN_FRAMEWORK -name "DMC-*.XML"); do
            echo "Validating: $xml_file"
            xmllint --noout --schema /tmp/s1000d-schema/xml_schema_flat/descript.xsd "$xml_file" || EXIT_CODE=1
          done
          
          if [ "$EXIT_CODE" -eq 0 ]; then
            echo "✅ All Data Modules passed S1000D schema validation"
          else
            echo "❌ Some Data Modules failed S1000D schema validation"
          fi
          exit $EXIT_CODE
      
      - name: Report Results
        if: always()
        run: |
          echo "Validation complete. Check previous step for results."

  validate-brex:
    name: Validate BREX Business Rules
    runs-on: ubuntu-latest
    needs: validate-s1000d
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      
      - name: Install BREX Validator
        run: |
          pip install lxml pyyaml
      
      - name: Run BREX Validation
        run: |
          python scripts/brex_validator.py \
            --brex OPT-IN_FRAMEWORK/O-ORGANIZATIONS/ATA_00-GENERAL/ATA-00-general/00-00-general/PUB/AMM/CSDB/BREX/DMC-AMPEL360-00-00-00-00A-022A-A.XML \
            --data-modules OPT-IN_FRAMEWORK/**/PUB/AMM/CSDB/DM/DMC-*.XML \
            --output brex-report.json
      
      - name: Upload BREX Report
        uses: actions/upload-artifact@v3
        with:
          name: brex-validation-report
          path: brex-report.json
      
      - name: Check BREX Compliance
        run: |
          python -c "
          import json
          with open('brex-report.json') as f:
              report = json.load(f)
          violations = sum(len(dm['violations']) for dm in report['data_modules'])
          if violations > 0:
              print(f'❌ {violations} BREX violations found')
              exit(1)
          else:
              print('✅ All Data Modules passed BREX validation')
          "

  validate-dmc-uniqueness:
    name: Validate DMC Uniqueness
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3
      
      - name: Check for Duplicate DMCs
        run: |
          # Extract all DMC codes
          DMC_LIST=$(find OPT-IN_FRAMEWORK -name "DMC-*.XML" -o -name "DMC-*.yaml" | \
                     xargs basename -a | \
                     sed 's/_.*$//' | \
                     sort)
          
          # Check for duplicates
          DUPLICATES=$(echo "$DMC_LIST" | uniq -d)
          
          if [ -n "$DUPLICATES" ]; then
            echo "❌ Duplicate DMC codes found:"
            echo "$DUPLICATES"
            exit 1
          else
            echo "✅ All DMC codes are unique"
          fi

  validate-traceability:
    name: Validate KNU Traceability
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      
      - name: Check DM to KNU Traceability
        run: |
          python scripts/validate_traceability.py \
            --check-dm-to-knu \
            --output traceability-report.txt
      
      - name: Upload Traceability Report
        uses: actions/upload-artifact@v3
        with:
          name: traceability-report
          path: traceability-report.txt
```

### Pre-Commit Hooks

Create `.git/hooks/pre-commit`:

```bash
#!/bin/bash
# Pre-commit hook to validate CSDB changes

STAGED_XML=$(git diff --cached --name-only --diff-filter=ACM | grep "DMC-.*\.XML$")

if [ -n "$STAGED_XML" ]; then
    echo "Validating staged Data Modules..."
    
    for xml_file in $STAGED_XML; do
        echo "  Checking: $xml_file"
        
        # Basic XML well-formedness check
        xmllint --noout "$xml_file" 2>/dev/null
        if [ $? -ne 0 ]; then
            echo "❌ ERROR: $xml_file is not well-formed XML"
            exit 1
        fi
        
        # Check DMC naming convention
        filename=$(basename "$xml_file")
        if ! [[ $filename =~ ^DMC-AMPEL360-[0-9]{2}-[0-9]{2}- ]]; then
            echo "❌ ERROR: $xml_file does not follow DMC naming convention"
            exit 1
        fi
    done
    
    echo "✅ All staged Data Modules passed validation"
fi

exit 0
```

---

## Validation Tools

### 1. xmllint (LibXML2)

**Purpose:** XML schema validation  
**Installation:**
```bash
# Ubuntu/Debian
sudo apt-get install libxml2-utils

# macOS
brew install libxml2
```

**Usage:**
```bash
xmllint --noout --schema schema.xsd file.xml
```

### 2. Python BREX Validator

Create `scripts/brex_validator.py`:

```python
#!/usr/bin/env python3
"""
BREX Business Rules Validator
Validates Data Modules against AMPEL360 Q100 BREX
"""

import sys
import argparse
from lxml import etree
import json

def load_brex_rules(brex_file):
    """Load BREX rules from XML."""
    tree = etree.parse(brex_file)
    # Extract business rules
    # (Implementation depends on BREX structure)
    return {}

def validate_dm(dm_file, brex_rules):
    """Validate a single Data Module."""
    violations = []
    tree = etree.parse(dm_file)
    
    # Example: Check for mandatory elements
    if tree.find('.//warning') is None:
        violations.append({
            'rule': 'MANDATORY_WARNING',
            'severity': 'ERROR',
            'message': 'Warning element is mandatory for safety-critical procedures'
        })
    
    return violations

def main():
    parser = argparse.ArgumentParser(description='BREX Validator')
    parser.add_argument('--brex', required=True, help='BREX file')
    parser.add_argument('--data-modules', required=True, nargs='+', help='Data Module files')
    parser.add_argument('--output', help='Output report file (JSON)')
    
    args = parser.parse_args()
    
    brex_rules = load_brex_rules(args.brex)
    
    report = {'data_modules': []}
    
    for dm_file in args.data_modules:
        violations = validate_dm(dm_file, brex_rules)
        report['data_modules'].append({
            'file': dm_file,
            'violations': violations
        })
    
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(report, f, indent=2)
    
    # Exit with error if violations found
    total_violations = sum(len(dm['violations']) for dm in report['data_modules'])
    sys.exit(1 if total_violations > 0 else 0)

if __name__ == '__main__':
    main()
```

### 3. DMC Uniqueness Checker

```bash
#!/bin/bash
# check_dmc_uniqueness.sh

find OPT-IN_FRAMEWORK -name "DMC-*.XML" -o -name "DMC-*.yaml" | \
    xargs basename -a | \
    sed 's/_.*$//' | \
    sort | \
    uniq -d | \
    while read dmc; do
        echo "DUPLICATE: $dmc"
        exit 1
    done

echo "✅ All DMC codes are unique"
```

---

## Common Validation Issues

### Issue 1: Invalid DMC Format

**Error:**
```
ERROR: DMC code does not follow AMPEL360 convention
Found: DMC-Q100-28-00-00-00A-001A-A
Expected: DMC-AMPEL360-28-00-00-00A-001A-A
```

**Fix:** Update modelIdentCode to "AMPEL360"

### Issue 2: Missing BREX Reference

**Error:**
```
ERROR: Data Module does not reference BREX
```

**Fix:** Add brexDmRef in dmStatus section

### Issue 3: Invalid Security Classification

**Error:**
```
ERROR: Security classification "02" not allowed
Allowed values: 01 (Unclassified)
```

**Fix:** Use securityClassification="01"

### Issue 4: Missing Mandatory Elements

**Error:**
```
ERROR: Element 'warning' is mandatory for cryogenic procedures (ATA 28)
```

**Fix:** Add appropriate warning/caution/note elements

### Issue 5: Unit Notation Inconsistency

**Error:**
```
ERROR: Fuel flow rate must use 'kg/s' unit notation
Found: 'kg/sec'
```

**Fix:** Use standard unit abbreviations per TOKENOMICS.yaml

---

## Compliance Checklist

Before finalizing a Data Module:

- [ ] XML validates against S1000D Issue 5.0 schema
- [ ] DMC follows AMPEL360 naming convention
- [ ] BREX reference is included
- [ ] All mandatory elements are present
- [ ] Security classification is correct
- [ ] Applicability rules are defined
- [ ] Traceability to source KNU documented
- [ ] Chapter-specific BREX rules satisfied
- [ ] No duplicate DMC in repository
- [ ] Cross-references are valid
- [ ] Illustrations (ICN) are referenced correctly

---

## Support & Resources

- **S1000D Specification**: [http://www.s1000d.org](http://www.s1000d.org)
- **BREX Master**: `DMC-AMPEL360-00-00-00-00A-022A-A.XML`
- **Validation Scripts**: `scripts/brex_validator.py`, `scripts/validate_traceability.py`
- **CI/CD Pipeline**: `.github/workflows/csdb-validation.yml`

---

**Revision History**

| Date | Version | Author | Change |
|------|---------|--------|--------|
| 2026-01-16 | 1.0.0 | STK_CM | Initial CSDB compliance documentation |

---

*This document is maintained by the Configuration Management team. Submit updates via pull request.*
