# System Verification Test Specification - ATA 80-00 Starting System

## 1. Purpose

Define comprehensive test procedures to validate that the Starting System meets all functional, performance, safety, and regulatory requirements as specified in KNU-80-00-001-REQ-001. The AMPEL360-Q100 hydrogen-hybrid propulsion system utilizes an advanced electric start system with dual-fuel capability considerations.

## 2. Scope

### Systems Under Test
- Electric Starter/Generator (Integrated Starter-Generator, ISG)
- Starter Control Unit (SCU)
- Power Electronics (Inverter/Converter)
- Engine Accessory Gearbox Interface
- Start Valve (Pneumatic Backup, if equipped)
- Ground Power Receptacle and Start Provisions
- APU Start Interface
- Cross-Start (Cross-Bleed) System
- Start Sequence Logic (FADEC Integration)

### Verification Domains
1. Functional Requirements Validation
2. Performance Requirements Testing
3. Safety Critical Function Verification
4. Interface Compatibility Testing
5. Environmental Condition Testing
6. Hydrogen-Hybrid Start Mode Testing

### Hydrogen-Hybrid Considerations
The AMPEL360-Q100 propulsion system presents unique starting challenges:
- Electric-primary starting reduces APU dependency
- Hydrogen fuel introduction timing critical for light-off
- Regenerative capability during windmill conditions
- Integration with hybrid-electric propulsion architecture

## 3. Test Environment

### 3.1 Test Infrastructure

```
┌─────────────────────────────────────────────────────────────┐
│                    TEST ENVIRONMENT                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │ Electrical  │    │ Starting    │    │ Engine/     │     │
│  │ Power       │───►│ System SUT  │───►│ Gearbox     │     │
│  │ Simulator   │    │ (ISG+SCU)   │    │ Simulator   │     │
│  └─────────────┘    └─────────────┘    └─────────────┘     │
│         │                  │                  │             │
│         ▼                  ▼                  ▼             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │    Torque/Speed/Current/Temperature Monitoring       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Reference Standards

| Standard | Source | Purpose |
|----------|--------|---------|
| ATA Spec 100 Ch. 80 | Air Transport Association | Starting Systems |
| SAE AS755 | SAE International | Aircraft starter specifications |
| MIL-STD-704F | US DoD | Aircraft electrical power characteristics |
| DO-160G | RTCA | Environmental testing |
| DO-160G | RTCA | Environmental testing |

## 4. Test Cases

### 4.1 TC-SYS-001: Functional Requirements Verification

**Objective:** Validate ISG starting capability and FADEC integration

```yaml
Test ID: TC-SYS-001
Category: Functional
Priority: Critical
Preconditions: System installed and operational
Reference: TBD-80-00-001-TEST-001-001

Test Steps:
  1. ISG motoring torque capability
     Expected: Minimum torque 500 Nm at starter speed (2000-3000 RPM)
     Pass Threshold: Torque ≥500 Nm, current draw ≤600 A at 270 VDC
     
  2. Engine light-off sequence
     Test: 50 consecutive starts (25 Jet-A, 25 H2 mode)
     Expected: Light-off at 20-25% N2 for Jet-A, 15-20% N2 for H2
     Pass Threshold: 100% success rate, light-off time ≤45 seconds
     
  3. FADEC start sequence coordination
     Expected: Perfect synchronization of fuel, ignition, starter
     Pass Threshold: Sequence timing ±0.5s, no hung starts
     
  4. ISG disengagement after start
     Expected: Automatic disconnect at 55-60% N2
     Pass Threshold: Disconnect at 55-60% N2, no over-torque

Pass Criteria:
  - ISG performance meets torque/current specifications
  - Start reliability 100% in both fuel modes
  - FADEC integration verified
```

### 4.2 TC-SYS-002: Performance Testing

**Objective:** Validate system performance under operational conditions

```yaml
Test ID: TC-SYS-002
Category: Performance
Priority: High
Preconditions: System at operating conditions

Test Steps:
  1. Performance parameter testing
     Expected: Meets minimum/maximum specifications
     
  2. Response time testing
     Expected: Within specified response times
     
  3. Accuracy testing
     Expected: Measurements within tolerance
     
  4. Efficiency testing
     Expected: Meets efficiency requirements

Pass Criteria:
  - Performance meets all requirements
  - No performance degradation over test duration
  - Consistent results across multiple runs
```

### 4.3 TC-SYS-003: Safety Critical Function Verification

**Objective:** Verify all safety-critical functions operate correctly

```yaml
Test ID: TC-SYS-003
Category: Safety
Priority: Critical
Preconditions: Safety systems operational

Test Steps:
  1. Safety monitoring functions
     Expected: All safety parameters monitored
     
  2. Emergency procedures
     Expected: Emergency shutdown operates correctly
     
  3. Fault detection and isolation
     Expected: Faults detected and isolated properly
     
  4. Safety interlocks
     Expected: Interlocks prevent unsafe operation

Pass Criteria:
  - All safety functions operate correctly
  - No false alarms or missed detections
  - Response times within requirements
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
     
  3. Power system interface
     Expected: Power requirements met
     
  4. Communication interfaces
     Expected: All protocols function correctly

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
     Expected: Operates at specified temperature range
     
  2. Vibration testing
     Expected: No degradation per DO-160G
     
  3. Humidity testing
     Expected: Operates in specified humidity range
     
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
| TBD-80-00-001-TEST-001-001 | Final test acceptance criteria | Define specific acceptance thresholds for all test cases |

## 7. Traceability

| Traces To | Artifact |
|-----------|----------|
| KNU-80-00-001-REQ-001 | System Requirements Document |

| Traced From | Artifact |
|-------------|----------|
| KNOT-80-00-001 | Parent KNOT |
| TBD-80-00-001-TEST-001-001 | Test criteria TBD |

## 8. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-13 | STK_TEST | Initial test specification |
| 1.1 | 2026-01-13 | STK_TEST | Enhanced with ISG electric start criteria, hydrogen-hybrid start modes |
