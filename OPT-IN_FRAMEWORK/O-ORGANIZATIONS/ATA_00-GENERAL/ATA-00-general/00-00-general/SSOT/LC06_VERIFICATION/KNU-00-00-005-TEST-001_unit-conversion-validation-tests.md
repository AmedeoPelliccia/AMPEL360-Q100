# Unit Conversion Validation Test Specification

## 1. Purpose

Define comprehensive test procedures to validate unit conversion accuracy, precision, and reliability across all AMPEL360 Q100 measurement systems.

## 2. Scope

### Systems Under Test
- Terminology database unit conversions
- Flight display unit switching
- Maintenance manual unit presentation
- Data export/import conversions
- Real-time telemetry conversions

### Unit Categories Tested
1. Length/Distance (m, ft, nm)
2. Mass (kg, lb)
3. Temperature (K, °C, °F)
4. Pressure (Pa, bar, psi)
5. Energy (J, kWh, Btu)
6. H₂-Specific (MJ/kg, %/day, kg/s)

## 3. Test Environment

### 3.1 Test Infrastructure

```
┌─────────────────────────────────────────────────────────────┐
│                    TEST ENVIRONMENT                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │ Test        │    │ Unit        │    │ Reference   │     │
│  │ Framework   │───►│ Conversion  │◄───│ Database    │     │
│  │ (pytest)    │    │ Engine      │    │ (NIST)      │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Test Results Database                   │   │
│  │         (PostgreSQL + Test Evidence)                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Reference Standards

| Standard | Source | Purpose |
|----------|--------|---------|
| NIST SP 811 | US National Institute of Standards | SI unit definitions |
| ISO 80000-1 | International Organization for Standardization | Quantities and units |
| BIPM SI Brochure | Bureau International des Poids et Mesures | SI reference |
| SAE AS8016 | SAE International | Aerospace unit conventions |

## 4. Test Cases

### 4.1 TC-UNIT-001: SI Base Unit Conversions

**Objective:** Validate conversions between SI base units

```yaml
Test ID: TC-UNIT-001
Category: Base Units
Priority: Critical
Preconditions: Unit conversion engine initialized

Test Steps:
  1. Input: 1000 meters
     Expected: 1 kilometer (±0.0001%)
     
  2. Input: 1 kilogram
     Expected: 1000 grams (exact)
     
  3. Input: 273.15 Kelvin
     Expected: 0°C (±0.001 K)
     
  4. Input: 101325 Pascal
     Expected: 1 atmosphere (±0.0001%)

Pass Criteria:
  - All conversions within specified tolerance
  - No rounding errors accumulate
  - Bidirectional conversion yields original value
```

### 4.2 TC-UNIT-002: Temperature Scale Conversions

**Objective:** Validate critical temperature conversions for cryogenic systems

```yaml
Test ID: TC-UNIT-002
Category: Temperature
Priority: Critical (Safety)
Preconditions: Cryogenic reference data loaded

Test Steps:
  1. LH₂ Boiling Point:
     Input: 20.28 K
     Expected: -252.87°C (±0.01°C)
     Expected: -423.17°F (±0.02°F)
     
  2. Ambient Reference:
     Input: 288.15 K
     Expected: 15°C (exact)
     Expected: 59°F (exact)
     
  3. Extreme Cold:
     Input: 0 K (absolute zero)
     Expected: -273.15°C (exact)
     Expected: -459.67°F (exact)
     
  4. Temperature Difference:
     Input: ΔT = 10 K
     Expected: ΔT = 10°C (exact)
     Expected: ΔT = 18°F (exact)

Pass Criteria:
  - Absolute temperatures within ±0.01 K
  - Temperature differences exact
  - No sign errors at negative values
  - Handles absolute zero correctly
```

### 4.3 TC-UNIT-003: H₂ Energy Density Conversions

**Objective:** Validate hydrogen-specific energy unit conversions

```yaml
Test ID: TC-UNIT-003
Category: H₂-Specific
Priority: Critical
Preconditions: H₂ reference values loaded

Test Steps:
  1. Gravimetric Energy Density:
     Input: 120 MJ/kg (LH₂ reference)
     Expected: 33.33 kWh/kg (±0.01)
     Expected: 51,571 Btu/lb (±1)
     
  2. Volumetric Energy Density:
     Input: 8.5 MJ/L (LH₂ at 1 atm)
     Expected: 2.36 kWh/L (±0.01)
     
  3. Comparison Conversion:
     Input: 43 MJ/kg (Jet-A reference)
     Ratio to LH₂: 2.79× (±0.01)
     
  4. Battery Comparison:
     Input: 0.9 MJ/kg (Li-ion reference)
     Ratio to LH₂: 133× (±1)

Pass Criteria:
  - Energy conversions within 0.1%
  - Ratio calculations correct
  - Consistent with published references
```

### 4.4 TC-UNIT-004: Boil-Off Rate Conversions

**Objective:** Validate boil-off rate unit conversions

```yaml
Test ID: TC-UNIT-004
Category: H₂-Specific
Priority: High
Preconditions: Tank parameters defined

Test Steps:
  1. Percentage to Absolute:
     Input: 0.4 %/day, Tank: 2000 kg
     Expected: 8 kg/day (exact)
     
  2. Daily to Hourly:
     Input: 8 kg/day
     Expected: 0.333 kg/h (±0.001)
     
  3. Cumulative Loss:
     Input: 0.4 %/day, Duration: 10 days
     Expected: 3.92% total (compound) (±0.01%)
     Expected: 78.4 kg loss (±0.1 kg)
     
  4. Heat Ingress Correlation:
     Input: 50 W heat ingress
     LH₂ latent heat: 448 kJ/kg
     Expected: 9.64 kg/day boil-off (±0.1)

Pass Criteria:
  - Linear and compound calculations correct
  - Heat-to-boiloff correlation validated
  - Multi-day projections accurate
```

### 4.5 TC-UNIT-005: Pressure Unit Conversions

**Objective:** Validate pressure conversions for H₂ systems

```yaml
Test ID: TC-UNIT-005
Category: Pressure
Priority: Critical (Safety)
Preconditions: Pressure reference data loaded

Test Steps:
  1. Tank Operating Pressure:
     Input: 700 bar
     Expected: 70 MPa (exact)
     Expected: 10,153 psi (±1)
     Expected: 689.5 atm (±0.1)
     
  2. Fuel Cell Feed Pressure:
     Input: 10 bar
     Expected: 1 MPa (exact)
     Expected: 145.04 psi (±0.01)
     
  3. Atmospheric Reference:
     Input: 101.325 kPa
     Expected: 1.01325 bar (exact)
     Expected: 14.696 psi (±0.001)
     Expected: 1 atm (exact)

Pass Criteria:
  - High pressure conversions within 0.01%
  - Low pressure conversions exact
  - No precision loss at extreme values
```

### 4.6 TC-UNIT-006: Flow Rate Conversions

**Objective:** Validate mass and volumetric flow rate conversions

```yaml
Test ID: TC-UNIT-006
Category: Flow
Priority: High
Preconditions: Fluid properties loaded

Test Steps:
  1. Mass Flow Rate:
     Input: 0.5 kg/s
     Expected: 1800 kg/h (exact)
     Expected: 1.1 lb/s (±0.01)
     
  2. Volumetric (LH₂):
     Input: 0.5 kg/s, Density: 70.85 kg/m³
     Expected: 7.06 L/s (±0.01)
     
  3. Volumetric (GH₂ at 10 bar, 80°C):
     Input: 0.5 kg/s, Density: 0.72 kg/m³
     Expected: 694.4 L/s (±0.1)
     
  4. Phase Transition:
     LH₂ → GH₂ expansion ratio
     Expected: ~850× volume increase (±10)

Pass Criteria:
  - Phase-dependent conversions correct
  - Density properly applied
  - Expansion ratios validated
```

### 4.7 TC-UNIT-007: Display Precision Tests

**Objective:** Validate display rounding and precision rules

```yaml
Test ID: TC-UNIT-007
Category: Display
Priority: Medium
Preconditions: Display format rules loaded

Test Steps:
  1. Temperature Display:
     Internal: 293.156789 K
     Display (cockpit): 293.16 K (2 decimal)
     Display (maintenance): 293.1568 K (4 decimal)
     
  2. Pressure Display:
     Internal: 701.23456 bar
     Display: 701.2 bar (1 decimal)
     
  3. Percentage Display:
     Internal: 0.4123456 %/day
     Display: 0.41 %/day (2 decimal)
     
  4. Rounding Edge Cases:
     Input: 0.4999999
     Expected: 0.50 (round half up)
     
     Input: -252.875
     Expected: -252.88 (negative rounding)

Pass Criteria:
  - Consistent rounding method
  - No display overflow
  - Proper handling of negative values
```

### 4.8 TC-UNIT-008: Bidirectional Conversion Integrity

**Objective:** Validate round-trip conversion accuracy

```yaml
Test ID: TC-UNIT-008
Category: Integrity
Priority: Critical
Preconditions: All conversion paths available

Test Steps:
  For each conversion pair (A ↔ B):
  1. Convert A → B
  2. Convert B → A
  3. Compare result to original A
  
Test Data:
  - 273.15 K → °C → K = 273.15 K
  - 100 bar → psi → bar = 100 bar
  - 120 MJ/kg → kWh/kg → MJ/kg = 120 MJ/kg
  
Iterations: 1000 random values per unit pair

Pass Criteria:
  - Maximum drift: 1 part per billion (10⁻⁹)
  - No systematic bias
  - No edge case failures
```

### 4.9 TC-UNIT-009: Boundary Value Tests

**Objective:** Test extreme and boundary values

```yaml
Test ID: TC-UNIT-009
Category: Boundary
Priority: High
Preconditions: Extended precision enabled

Test Steps:
  1. Near Absolute Zero:
     Input: 0.001 K
     Expected: -273.149°C (±0.001)
     
  2. Extreme Pressure:
     Input: 1000 bar (1.43× tank max)
     Expected: 14,504 psi (±1)
     
  3. Very Small Values:
     Input: 0.0001 kg/s
     Expected: 0.36 kg/h (±0.001)
     
  4. Very Large Values:
     Input: 1,000,000 MJ
     Expected: 277,778 kWh (±1)
     
  5. Zero Handling:
     Input: 0 K
     Expected: -273.15°C (exact)
     No division by zero errors

Pass Criteria:
  - No overflow/underflow
  - Precision maintained at extremes
  - Zero handled correctly
```

### 4.10 TC-UNIT-010: Performance Tests

**Objective:** Validate conversion performance under load

```yaml
Test ID: TC-UNIT-010
Category: Performance
Priority: Medium
Preconditions: Performance monitoring enabled

Test Steps:
  1. Single Conversion:
     Target: <1 ms per conversion
     
  2. Batch Conversion (1000 values):
     Target: <100 ms total
     
  3. Concurrent Conversions (100 threads):
     Target: <500 ms, no race conditions
     
  4. Memory Usage:
     Target: <10 MB for conversion engine
     
  5. Cache Effectiveness:
     Repeated conversions should be faster
     Target: >90% cache hit rate

Pass Criteria:
  - All performance targets met
  - No memory leaks
  - Thread-safe operation
```

## 5. Test Execution Plan

### 5.1 Test Schedule

| Phase | Tests | Duration | Milestone |
|-------|-------|----------|-----------|
| Unit Tests | TC-001 to TC-007 | Week 1 | Basic validation |
| Integration Tests | TC-008, TC-009 | Week 2 | System integration |
| Performance Tests | TC-010 | Week 3 | Performance baseline |
| Regression Suite | All | Ongoing | CI/CD integration |

### 5.2 Pass/Fail Criteria

**Overall Pass Criteria:**
- 100% of Critical tests pass
- ≥98% of High priority tests pass
- ≥95% of Medium priority tests pass
- Zero blocking defects

### 5.3 Test Evidence

All test results stored in:
- `test_results/TC-UNIT-XXX_results.json`
- Screenshots of display tests
- Performance logs
- Certification evidence package

## 6. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-00-00-005-REQ-001 | Unit System Requirements |
| KNU-00-00-005-ICD-001 | Unit Conversion Interface |
| KNU-00-00-005-ANA-001 | H₂-Specific Unit Analysis |

| Traced From | Artifact |
|-------------|----------|
| KNOT-00-00-005 | Parent KNOT |
| TBD-00-00-005-ICD-001-001 | Conversion format (RESOLVED) |

## 7. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_VER | Initial test specification |
