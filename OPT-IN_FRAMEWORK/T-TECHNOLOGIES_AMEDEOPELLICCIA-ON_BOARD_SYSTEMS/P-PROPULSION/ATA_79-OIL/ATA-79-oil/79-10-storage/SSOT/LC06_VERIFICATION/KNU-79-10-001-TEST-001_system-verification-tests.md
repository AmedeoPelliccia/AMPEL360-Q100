# System Verification Test Specification - ATA 79-10 Oil Storage

## 1. Purpose

Define comprehensive test procedures to validate that the Oil Storage System meets all functional, performance, safety, and regulatory requirements as specified in KNU-79-10-001-REQ-001. The oil system is critical for engine lubrication, cooling, and bearing protection.

## 2. Scope

### Systems Under Test
- Oil Storage Tanks and Reservoirs
- Oil Level Monitoring Systems (Capacitance/Ultrasonic)
- Temperature Control and Monitoring
- Filtration Systems (Full-Flow and Bypass)
- Scavenge and Circulation Pumps
- Chip Detectors and Debris Monitoring
- Emergency Drain and Service Systems
- Oil Cooler Interface

### Verification Domains
1. Functional Requirements Validation
2. Performance Requirements Testing
3. Safety Critical Function Verification
4. Interface Compatibility Testing
5. Environmental Condition Testing
6. Oil Quality and Contamination Monitoring

## 3. Test Environment

### 3.1 Test Infrastructure

```
┌─────────────────────────────────────────────────────────────┐
│                    TEST ENVIRONMENT                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │ Engine      │    │ Oil Storage │    │ Oil Quality │     │
│  │ Simulator   │◄──►│ System SUT  │───►│ Analysis    │     │
│  │             │    │             │    │ Equipment   │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │    Level/Temp/Pressure/Contamination Monitoring      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Reference Standards

| Standard | Source | Purpose |
|----------|--------|---------|
| ATA Spec 100 Ch. 79 | Air Transport Association | Oil Systems |
| SAE AS5780 | SAE International | Aircraft engine oil quality |
| MIL-PRF-23699 | US DoD | Turbine engine lubricating oil specification |
| DO-160G | RTCA | Environmental testing |
| SAE AS8016 | SAE International | Aerospace testing standards |
| DO-160G | RTCA | Environmental testing |

## 4. Test Cases

### 4.1 TC-SYS-001: Functional Requirements Verification

**Objective:** Validate oil storage capacity and level indication

```yaml
Test ID: TC-SYS-001
Category: Functional
Priority: Critical
Preconditions: System installed and operational
Reference: TBD-79-10-001-TEST-001-001

Test Steps:
  1. Oil tank capacity verification
     Expected: Tank capacity per design (typically 15-25 gallons for turbine engine)
     Pass Threshold: Usable capacity ≥95% of design, unusable oil ≤5%
     
  2. Oil level indication accuracy
     Test: Compare sensor reading to calibrated dipstick measurement
     Expected: Level indication error <5% of full scale
     Pass Threshold: Accuracy ±5% across full range (0-100%)
     
  3. Low oil level warning
     Test: Drain oil to low level threshold
     Expected: Crew alert at 50% capacity (typical), emergency at 25%
     Pass Threshold: Warning at 50±5%, emergency alert at 25±3%
     
  4. Oil replenishment and servicing
     Expected: Ground service panel allows filling at ≥5 GPM
     Pass Threshold: Fill rate ≥5 GPM, no spills, level indication updates

Pass Criteria:
  - Tank capacity meets specification
  - Level indication accurate and reliable
  - Alerts function correctly
  - Ground servicing operational
```

### 4.2 TC-SYS-002: Performance Testing

**Objective:** Validate oil temperature control and filtration performance

```yaml
Test ID: TC-SYS-002
Category: Performance
Priority: High
Preconditions: System at operating conditions
Reference: TBD-79-10-001-TEST-001-001

Test Steps:
  1. Oil temperature range during operation
     Expected: Operating range 180-230°F (82-110°C)
     Pass Threshold: Temperature maintained 180-230°F throughout flight envelope
     Maximum: 250°F (121°C) for 30 minutes emergency
     
  2. Oil cooler effectiveness
     Test: Oil cooling at cruise conditions
     Expected: Oil outlet temp ≤230°F with full heat load
     Pass Threshold: Temperature regulation ±10°F of setpoint
     
  3. Filtration system pressure drop
     Test: Measure pressure drop across filters
     Expected: Clean filter ΔP <5 psi, bypass opens at 25-30 psi
     Pass Threshold: ΔP ≤5 psi (clean), bypass at 25-30 psi
     
  4. Oil circulation and scavenge rates
     Expected: Supply flow matches engine consumption, scavenge >supply
     Pass Threshold: Supply flow ±10% of engine demand, scavenge/supply ratio >1.2

Pass Criteria:
  - Temperature maintained in operating range
  - Oil cooling adequate for all conditions
  - Filtration system performance verified
  - Flow rates meet engine requirements
```

### 4.3 TC-SYS-003: Safety Critical Function Verification

**Objective:** Verify chip detection and oil quality monitoring

```yaml
Test ID: TC-SYS-003
Category: Safety
Priority: Critical
Preconditions: Safety systems operational
Reference: TBD-79-10-001-TEST-001-001

Test Steps:
  1. Chip detector functionality
     Test: Introduce calibrated ferrous/non-ferrous particles
     Expected: Detection of particles ≥150 microns (ferrous), ≥300 microns (non-ferrous)
     Pass Threshold: 100% detection rate, crew alert within 5 seconds
     
  2. High oil temperature alert
     Test: Simulate oil temperature >250°F
     Expected: Crew caution at 250°F, warning at 270°F
     Pass Threshold: Alerts at 250±5°F (caution), 270±5°F (warning)
     
  3. Oil pressure monitoring
     Test: Monitor oil supply pressure to engine
     Expected: Normal pressure 40-80 psi, low pressure alert <30 psi
     Pass Threshold: Low pressure alert at 30±2 psi, latency ≤2 seconds
     
  4. Oil quality degradation monitoring
     Test: Spectroscopic analysis of oil samples
     Expected: Detect viscosity changes, contamination, additive depletion
     Pass Threshold: Trending analysis detects ≥10% viscosity change

Pass Criteria:
  - Chip detection system 100% reliable
  - All temperature/pressure alerts functional
  - Oil quality monitoring operational
  - No false alarms or missed detections
```
### 4.4 TC-SYS-004: Interface Testing

**Objective:** Validate interfaces with other systems

```yaml
Test ID: TC-SYS-004
Category: Integration
Priority: High
Preconditions: Connected systems available

Test Steps:
  1. Control system interface
     Expected: Commands execute correctly
     
  2. Monitoring system interface
     Expected: Data transmitted accurately
     
  3. Maintenance system interface
     Expected: Status information correct
     
  4. Power system interface
     Expected: Power requirements met

Pass Criteria:
  - All interfaces function correctly
  - No communication errors
  - Data accuracy within specification
```

### 4.5 TC-SYS-005: Environmental Testing

**Objective:** Verify system operates in environmental extremes

```yaml
Test ID: TC-SYS-005
Category: Environmental
Priority: Medium
Preconditions: Environmental chamber available

Test Steps:
  1. Temperature extremes
     Expected: Operates at -40°C to +85°C
     
  2. Vibration testing
     Expected: No degradation per DO-160G
     
  3. Humidity testing
     Expected: Operates in 95% RH
     
  4. Altitude testing
     Expected: Operates up to specified altitude

Pass Criteria:
  - System functions in all environments
  - No permanent damage or degradation
  - Returns to normal operation after exposure
```

## 5. Test Execution Plan

### 5.1 Test Schedule

| Phase | Tests | Duration | Milestone |
|-------|-------|----------|-----------|
| Functional Verification | TC-001 | Week 1 | Basic functions validated |
| Performance Testing | TC-002 | Week 2 | Performance baseline |
| Safety Verification | TC-003 | Week 3 | Safety critical functions |
| Integration Testing | TC-004 | Week 4 | Interface validation |
| Environmental Testing | TC-005 | Week 5-6 | Environmental compliance |

### 5.2 Pass/Fail Criteria

**Overall Pass Criteria:**
- 100% of Critical tests pass
- ≥98% of High priority tests pass
- ≥95% of Medium priority tests pass
- Zero blocking defects
- Safety analysis complete and approved

### 5.3 Test Evidence

All test results stored in:
- `test_results/TC-SYS-XXX_results.json`
- Test procedure execution logs
- Measurement data and recordings
- Photographic evidence
- Certification evidence package

## 6. TBD Resolution Requirements

| TBD ID | Description | Resolution Requirement |
|--------|-------------|------------------------|
| TBD-79-10-001-TEST-001-001 | Final test acceptance criteria | Define specific acceptance thresholds for all test cases |

## 7. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-79-10-001-REQ-001 | System Requirements Document |
| KNU-79-10-001-SAF-001 | Safety Assessment |

| Traced From | Artifact |
|-------------|----------|
| KNOT-79-10-001 | Parent KNOT |
| TBD-79-10-001-TEST-001-001 | Test criteria TBD |

## 8. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-13 | STK_TEST | Initial test specification |
| 1.1 | 2026-01-13 | STK_TEST | Enhanced with oil system domain-specific criteria, chip detection, quality monitoring |
