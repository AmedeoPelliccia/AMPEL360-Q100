---
# ═══════════════════════════════════════════════════════════════════════════════
# KNU ARTIFACT METADATA
# ═══════════════════════════════════════════════════════════════════════════════
knu_id: "KNU-00-00-005-ANA-001"
knot_id: "KNOT-00-00-005"
title: "H₂-Specific Unit Analysis"
knu_type: "ANA"
artifact_class: "SSOT"
lifecycle_category: "LC05"
rec: "LC05"
ata_reference: "00-00"
ata_address: "ATA-00-00-00-00"
expected_location: "../LC05_ANALYSIS_MODELS/"
status: "DRAFT"
version: "I01-R01"
priority: "MEDIUM"

# Ownership & Governance
owner_aor: "STK_SE"
contributors:
  - "STK_CM"
  - "STK_DATA"
  - "STK_CERT"
reviewers:
  - "STK_SE"
  - "STK_CM"
approved_by: null
approval_date: null

# Dates
created_date: "2026-01-12"
due_date: "2026-02-20"
last_updated: "2026-01-12"

# Acceptance & Verification
acceptance_criteria: "Energy density; flow rate; temperature conventions"
verification_method: "Review"
effort_predicted: 3

# Modification Tracking
spawned_by_tbd: null
triggers_tbds:
  - "TBD-00-00-005-ANA-001-002"
modification_type: "NEW"

# Traceability
parent_requirements:
  - "KNU-00-00-005-REQ-001"
child_requirements: []
related_knots:
  - "KNOT-00-00-005"
related_knus:
  - "KNU-00-00-005-REQ-001"
  - "KNU-00-00-005-ICD-001"
ata_traces:
  - "ATA-00"
  - "ATA-28"
  - "ATA-71"

# Standards Compliance
industry_standards:
  - "ISO 80000-1"
  - "SAE AS8015"
  - "ISO/TR 15916"
  - "NIST SP 811"

# Document Control
classification: "INTERNAL"
export_control: "NONE"
canonical_hash: null
---

# H₂-Specific Unit Analysis

**KNU ID:** KNU-00-00-005-ANA-001  
**KNOT:** KNOT-00-00-005  
**ATA Reference:** 00-00 (General)  
**Status:** DRAFT  
**Version:** I01-R01  
**Priority:** MEDIUM  

---

## 1. Executive Summary

This analysis defines H₂-specific units and conventions for the AMPEL360 Q100 hydrogen-hybrid aircraft program. The analysis identifies **6 H₂-specific unit categories** and proposes standard units, conversion factors, and precision rules.

### H₂-Specific Unit Categories

| Category | Standard Unit | Secondary Unit | Usage |
|----------|---------------|----------------|-------|
| **Energy Density** | MJ/kg | kWh/kg | Fuel performance comparison |
| **Cryogenic Temperature** | K (Kelvin) | °C, °F | LH₂ storage and handling |
| **Boil-Off Rate** | %/day | kg/day, kg/hr | Cryogenic tank losses |
| **Mass Flow Rate** | kg/s | kg/min, kg/hr | Fuel consumption |
| **Fuel Cell Efficiency** | % | — | Electrochemical conversion |
| **Power Density** | kW/kg | W/kg, kW/L | Fuel cell stack performance |

---

## 2. Detailed Unit Definitions

### 2.1 Energy Density

**Definition**: Energy content per unit mass or volume of hydrogen fuel.

#### Standard Units

| Unit | Definition | Typical Value | Usage |
|------|------------|---------------|-------|
| **MJ/kg** (Primary) | Megajoules per kilogram (mass basis) | 120 MJ/kg (LH₂ lower heating value) | Fuel performance comparison |
| **kWh/kg** (Secondary) | Kilowatt-hours per kilogram | 33.3 kWh/kg (LH₂ LHV) | Electrical system integration |
| **MJ/L** (Volume basis) | Megajoules per liter | 8.5 MJ/L (LH₂ at 20 K) | Tank volume planning |

#### Conversion Factors

```
1 kWh = 3.6 MJ
1 MJ/kg = 0.278 kWh/kg

LH₂ Lower Heating Value (LHV):
  - 120 MJ/kg (mass basis)
  - 33.3 kWh/kg (mass basis)
  - 8.5 MJ/L (volume basis, at 20 K)

LH₂ Higher Heating Value (HHV):
  - 142 MJ/kg (mass basis)
  - 39.4 kWh/kg (mass basis)
  - 10.0 MJ/L (volume basis, at 20 K)
```

#### Precision Rules

- **Mass basis**: 3 significant figures (e.g., 120 MJ/kg, not 120.0)
- **Volume basis**: 2 decimal places (e.g., 8.50 MJ/L)
- **Always specify** LHV (Lower Heating Value) vs HHV (Higher Heating Value)

#### Comparison with Conventional Fuels

| Fuel | Energy Density (MJ/kg, LHV) | Energy Density (MJ/L, LHV) | Q100 Advantage |
|------|------------------------------|----------------------------|----------------|
| **LH₂** | 120 | 8.5 | Baseline |
| **Jet-A** | 43 | 34.7 | **+179% mass**, -76% volume |
| **Gasoline** | 44 | 32.0 | **+173% mass**, -73% volume |
| **Diesel** | 43 | 36.0 | **+179% mass**, -76% volume |
| **LNG** | 50 | 22.2 | **+140% mass**, -62% volume |

**Key Insight**: H₂ has **2.8× higher energy density by mass** than Jet-A, but **4× lower energy density by volume** (requires larger tanks).

---

### 2.2 Cryogenic Temperature

**Definition**: Temperature scale for LH₂ storage and handling (-253°C / 20 K).

#### Standard Units

| Unit | Definition | Typical Range | Usage |
|------|------------|---------------|-------|
| **K** (Primary) | Kelvin (absolute temperature) | 20-300 K | Engineering calculations, cryogenic systems |
| **°C** (Secondary) | Degrees Celsius | -253 to +27°C | Operations, maintenance |
| **°F** (Tertiary) | Degrees Fahrenheit | -423 to +80°F | US operations, legacy systems |

#### Critical Temperatures

| Property | Value (K) | Value (°C) | Value (°F) |
|----------|-----------|------------|------------|
| **LH₂ Boiling Point** (1 atm) | 20.3 K | -252.87°C | -423.17°F |
| **LH₂ Triple Point** | 13.8 K | -259.35°C | -434.83°F |
| **LH₂ Critical Point** | 33.2 K | -239.95°C | -399.91°F |
| **Ambient (ISA)** | 288 K | +15°C | +59°F |
| **Cryogenic Threshold** | 123 K | -150°C | -238°F |

#### Conversion Factors

```
K = °C + 273.15
°C = (°F - 32) / 1.8
°F = (°C × 1.8) + 32

Example:
  LH₂ boiling point: 20.3 K = -252.87°C = -423.17°F
```

#### Precision Rules

- **Kelvin**: 1 decimal place (e.g., 20.3 K)
- **Celsius**: 2 decimal places (e.g., -252.87°C)
- **Fahrenheit**: 2 decimal places (e.g., -423.17°F)
- **Always use Kelvin** for engineering calculations (absolute scale avoids negative numbers)

---

### 2.3 Boil-Off Rate

**Definition**: Rate of LH₂ evaporation due to heat ingress into cryogenic tank.

#### Standard Units

| Unit | Definition | Typical Value | Usage |
|------|------------|---------------|-------|
| **%/day** (Primary) | Percent of tank capacity per day | 0.1-0.5%/day | Operations planning, mission range |
| **kg/day** (Secondary) | Kilograms per day | 5-25 kg/day (for 5,000 kg tank) | Maintenance, safety analysis |
| **kg/hr** (Tertiary) | Kilograms per hour | 0.2-1.0 kg/hr | Real-time monitoring |

#### Conversion Factors

```
Given:
  - Tank capacity: 5,000 kg LH₂
  - Boil-off rate: 0.3%/day

Calculate:
  - Boil-off rate (kg/day) = 5,000 kg × 0.3% = 15 kg/day
  - Boil-off rate (kg/hr) = 15 kg/day ÷ 24 hr/day = 0.625 kg/hr
```

#### Precision Rules

- **%/day**: 1 decimal place (e.g., 0.3%/day)
- **kg/day**: 0 decimal places (e.g., 15 kg/day)
- **kg/hr**: 2 decimal places (e.g., 0.63 kg/hr)

#### Factors Affecting Boil-Off Rate

| Factor | Impact | Mitigation |
|--------|--------|------------|
| **Tank insulation** | +0.1-0.5%/day | Multi-layer insulation (MLI), vacuum jacket |
| **Ambient temperature** | +0.05%/day per 10°C rise | Active cooling, sun shielding |
| **Tank size** | Smaller tanks → higher %/day | Optimize tank design for mission profile |
| **Flight profile** | +0.1%/day during takeoff (vibration, heat) | Boil-off management system |

**Q100 Target**: ≤0.2%/day (industry best practice: 0.1-0.5%/day)

---

### 2.4 Mass Flow Rate

**Definition**: Rate of H₂ consumption by fuel cell stacks.

#### Standard Units

| Unit | Definition | Typical Value | Usage |
|------|------------|---------------|-------|
| **kg/s** (Primary) | Kilograms per second | 0.5-2.0 kg/s (cruise) | Real-time fuel management |
| **kg/min** (Secondary) | Kilograms per minute | 30-120 kg/min | Operations planning |
| **kg/hr** (Tertiary) | Kilograms per hour | 1,800-7,200 kg/hr | Mission fuel budget |

#### Conversion Factors

```
1 kg/s = 60 kg/min = 3,600 kg/hr

Example:
  Cruise power: 10 MW
  Fuel cell efficiency: 50%
  H₂ LHV: 120 MJ/kg
  
  H₂ consumption = (10 MW × 2) / 120 MJ/kg = 0.167 kg/s = 10 kg/min = 600 kg/hr
```

#### Precision Rules

- **kg/s**: 2 decimal places (e.g., 0.17 kg/s)
- **kg/min**: 0 decimal places (e.g., 10 kg/min)
- **kg/hr**: 0 decimal places (e.g., 600 kg/hr)

#### Typical Flight Profile

| Phase | Power (MW) | H₂ Flow (kg/s) | H₂ Flow (kg/hr) | Duration | H₂ Consumed (kg) |
|-------|------------|----------------|-----------------|----------|------------------|
| **Takeoff** | 30 | 0.50 | 1,800 | 5 min | 150 |
| **Climb** | 20 | 0.33 | 1,200 | 20 min | 400 |
| **Cruise** | 10 | 0.17 | 600 | 180 min | 1,800 |
| **Descent** | 5 | 0.08 | 300 | 20 min | 100 |
| **Landing** | 15 | 0.25 | 900 | 5 min | 75 |
| **Reserve** | 10 | 0.17 | 600 | 45 min | 450 |
| **TOTAL** | — | — | — | **275 min** | **2,975 kg** |

**Mission Fuel**: 2,975 kg + 10% contingency = **3,275 kg** (65% of 5,000 kg tank capacity)

---

### 2.5 Fuel Cell Efficiency

**Definition**: Ratio of electrical power output to H₂ chemical energy input.

#### Standard Unit

| Unit | Definition | Typical Value | Usage |
|------|------------|---------------|-------|
| **%** (Percentage) | (Electrical Output / Chemical Input) × 100% | 45-60% | System performance analysis |

#### Efficiency Calculation

```
Fuel Cell Efficiency (%) = (P_elec / (ṁ_H₂ × LHV_H₂)) × 100%

Where:
  P_elec = Electrical power output (kW)
  ṁ_H₂ = H₂ mass flow rate (kg/s)
  LHV_H₂ = H₂ lower heating value (120 MJ/kg = 120,000 kJ/kg)

Example:
  P_elec = 10,000 kW (10 MW)
  ṁ_H₂ = 0.17 kg/s
  LHV_H₂ = 120,000 kJ/kg
  
  Efficiency = (10,000 kW / (0.17 kg/s × 120,000 kJ/kg)) × 100%
             = (10,000 / 20,400) × 100%
             = 49.0%
```

#### Precision Rules

- **Efficiency**: 1 decimal place (e.g., 49.0%)
- **Always specify** operating condition (full power, part power, idle)

#### Efficiency by Operating Condition

| Condition | Power (MW) | Efficiency (%) | Notes |
|-----------|------------|----------------|-------|
| **Full Power** | 30 | 45% | Maximum output; lower efficiency |
| **Cruise** | 10 | 55% | Optimal efficiency point |
| **Part Power** | 5 | 52% | Good efficiency; lower heat rejection |
| **Idle** | 1 | 35% | Low efficiency; keep-alive mode |

**Q100 Target**: ≥50% average efficiency (cruise-weighted)

---

### 2.6 Power Density

**Definition**: Electrical power output per unit mass or volume of fuel cell stack.

#### Standard Units

| Unit | Definition | Typical Value | Usage |
|------|------------|---------------|-------|
| **kW/kg** (Primary) | Kilowatts per kilogram (gravimetric) | 1.5-3.0 kW/kg | Weight optimization |
| **W/kg** (Secondary) | Watts per kilogram | 1,500-3,000 W/kg | Detailed analysis |
| **kW/L** (Volumetric) | Kilowatts per liter | 2.0-4.0 kW/L | Volume optimization |

#### Conversion Factors

```
1 kW/kg = 1,000 W/kg

Example:
  Fuel cell stack mass: 500 kg
  Fuel cell stack power: 10 MW (10,000 kW)
  
  Power density (kW/kg) = 10,000 kW / 500 kg = 20 kW/kg
```

#### Precision Rules

- **kW/kg**: 1 decimal place (e.g., 2.5 kW/kg)
- **W/kg**: 0 decimal places (e.g., 2,500 W/kg)
- **kW/L**: 1 decimal place (e.g., 3.5 kW/L)

#### Q100 Fuel Cell Stack Specifications

| Parameter | Value | Unit |
|-----------|-------|------|
| **Total Power** | 30 MW | (10 MW cruise + 20 MW reserve) |
| **Stack Mass** | 10,000 kg | (including BoP, cooling, controls) |
| **Stack Volume** | 8,000 L | (including packaging, insulation) |
| **Power Density (Gravimetric)** | **3.0 kW/kg** | Industry target: 2.5-3.5 kW/kg |
| **Power Density (Volumetric)** | **3.75 kW/L** | Industry target: 3.0-4.5 kW/L |

**Benchmark**: Q100 targets are within industry state-of-the-art (automotive: 1.5-2.0 kW/kg; aerospace target: 2.5-3.5 kW/kg).

---

## 3. Unit Conversion Table Summary

| From | To | Multiply By |
|------|-----|-------------|
| **Energy** |  |  |
| MJ/kg | kWh/kg | 0.278 |
| kWh/kg | MJ/kg | 3.6 |
| **Temperature** |  |  |
| K | °C | K - 273.15 |
| °C | K | °C + 273.15 |
| °C | °F | (°C × 1.8) + 32 |
| °F | °C | (°F - 32) / 1.8 |
| **Flow Rate** |  |  |
| kg/s | kg/min | 60 |
| kg/s | kg/hr | 3,600 |
| kg/min | kg/s | 0.0167 |
| kg/hr | kg/s | 0.000278 |
| **Power Density** |  |  |
| kW/kg | W/kg | 1,000 |
| W/kg | kW/kg | 0.001 |

---

## 4. Identified TBDs

### [TBD-00-00-005-ANA-001-002] H₂ Industry Standards Coordination

**Classification:** CLASS II  
**Description:** Coordinate with H₂ industry standards (ISO/TR 15916, SAE J2601, IEC 62282) to ensure unit consistency for certification and international operations.  
**Impact:** Unit definitions, conversion factors, precision rules may need adjustments for regulatory compliance.  
**Resolution Target:** 2026-03-01  
**Spawns:** KNU-00-00-005-ANA-002 (H₂ Standards Coordination Analysis)  

---

## 5. Recommendations

### 5.1 Immediate Actions (Within 2 Weeks)

1. 📋 **Resolve TBD-00-00-005-ANA-001-002** (H₂ standards coordination) — Align with ISO/TR 15916
2. 📋 **Update KNU-00-00-005-ICD-001** (Unit Conversion Table Specification) with H₂ units
3. 📋 **Training** — H₂ unit conventions for engineering, operations, maintenance teams

### 5.2 Short-Term Actions (2-4 Weeks)

1. 📋 **Generate KNU-00-00-005-ANA-002** (H₂ Standards Coordination Analysis) to resolve TBD-00-00-005-ANA-001-002
2. 📋 **Validation** — Cross-check all H₂ unit calculations in design documents
3. 📋 **Integration** — Update CSDB S1000D unit libraries with H₂ units

### 5.3 Medium-Term Actions (1-3 Months)

1. 📋 **Documentation** — Publish H₂ unit quick-reference card for operators
2. 📋 **Tooling** — Implement unit conversion calculators in engineering tools
3. 📋 **Certification** — Verify unit definitions with EASA/FAA for compliance

---

## 6. Traceability Matrix

### Upstream Traceability

| Parent Requirement | Relationship |
|--------------------|--------------|
| KNU-00-00-005-REQ-001 | Unit system requirements drive H₂-specific unit definitions |
| ISO 80000-1 | International standard for quantities and units |
| ISO/TR 15916 | H₂ safety guidance (unit conventions) |

### Downstream Traceability

| Child Artifact | Relationship |
|----------------|--------------|
| KNU-00-00-005-ICD-001 | Unit Conversion Table Specification implements H₂ units |
| KNU-00-00-005-ANA-002 | H₂ Standards Coordination Analysis (spawned by TBD-00-00-005-ANA-001-002) |

---

## 7. References

1. **ISO 80000-1:2009** — Quantities and units — Part 1: General
2. **ISO/TR 15916** — Basic considerations for the safety of hydrogen systems
3. **SAE AS8015** — e-Business Specification for Aerospace and Defense
4. **NIST SP 811** — Guide for the Use of the International System of Units (SI)

---

## 8. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| I01-R01 | 2026-01-12 | STK_SE | Initial analysis; 6 H₂-specific unit categories defined |

---

**Document Status:** DRAFT  
**Approval Authority:** STK_SE + STK_CM  

---

*This document is part of the AMPEL360 Q100 SSOT framework.*
