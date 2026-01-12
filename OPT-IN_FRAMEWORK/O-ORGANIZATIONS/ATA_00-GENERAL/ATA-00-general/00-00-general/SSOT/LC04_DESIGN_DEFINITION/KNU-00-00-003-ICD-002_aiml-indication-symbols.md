# AI/ML Decision Indication Symbols Specification

## 1. Purpose

Define visual indication symbols for AI/ML-assisted decisions in the AMPEL360 Q100 aircraft.

## 2. Symbol Categories

### Category 1: AI Status Indicators

| Symbol ID | Name | Visual | Meaning |
|-----------|------|--------|---------|
| AI-STAT-001 | AI Active | 🤖 (blue) | AI system providing recommendations |
| AI-STAT-002 | AI Confidence High | 🤖✓ (green) | >95% confidence in recommendation |
| AI-STAT-003 | AI Confidence Low | 🤖⚠ (amber) | <80% confidence, human review required |
| AI-STAT-004 | AI Degraded | 🤖✗ (red) | AI in fallback mode |
| AI-STAT-005 | AI Override | 👤 (white) | Human has overridden AI |

### Category 2: OOD (Out-of-Distribution) Indicators

| Symbol ID | Name | Visual | Meaning |
|-----------|------|--------|---------|
| AI-OOD-001 | OOD Detected | ⚠🤖 | Input outside training envelope |
| AI-OOD-002 | OOD Severe | 🔴🤖 | Significant deviation, manual required |

### Category 3: Learning Status

| Symbol ID | Name | Visual | Meaning |
|-----------|------|--------|---------|
| AI-LRN-001 | Learning Enabled | 📚 | System is learning from operations |
| AI-LRN-002 | Learning Frozen | 🔒📚 | Learning disabled (certified config) |

## 3. Display Requirements

### Cockpit Display
- Symbol size: Minimum 10mm height
- Position: Adjacent to affected parameter
- Contrast: WCAG AAA compliant
- Animation: Blink for state changes (max 3 seconds)

### Maintenance Display
- Symbol size: Minimum 8mm height
- Color coding per ATA iSpec 2200
- Tooltip on hover with detailed status

## 4. S1000D Integration

```xml
<symbol>
  <symbolIdent>AI-STAT-001</symbolIdent>
  <symbolName>AI Active</symbolName>
  <symbolType>status</symbolType>
  <symbolCategory>ai-ml</symbolCategory>
</symbol>
```

## 5. Certification Approach

Per EASA AI Roadmap 2.0:
1. Symbol clarity testing with pilots
2. Recognition time: <1 second
3. No confusion with existing symbols
4. Tested in all lighting conditions

## 6. Resolves

**RESOLVES:** TBD-00-00-003-ICD-001-001 (AI/ML decision indication symbol)

**UNBLOCKS:**
- KNU-00-00-003-PUB-001 (Safety labeling guide)
- ATA 95 documentation

## 7. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_SAF | Initial symbol set defined |
