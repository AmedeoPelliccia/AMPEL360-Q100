# KNU-00-00-005-ICD-001: Unit Conversion Table Specification

**AMPEL360 Q100 BWB Hydrogen-Hybrid Aircraft Program**

---

## Document Information

| Field | Value |
|-------|-------|
| **KNU ID** | KNU-00-00-005-ICD-001 |
| **KNOT ID** | KNOT-00-00-005 |
| **Type** | Interface Control Document (ICD) |
| **Status** | 🔵 GENERATED |
| **Owner** | STK_SE |
| **Due Date** | 2026-03-10 |
| **Priority** | HIGH |
| **Lifecycle Stage** | LC04_DESIGN_DEFINITION |

---

## Purpose

This Interface Control Document specifies unit conversion tables, precision rules, and rounding conventions for the AMPEL360 Q100 program, with emphasis on H₂-specific units and safety-critical measurements.

---

## SI Base Units

| Quantity | SI Unit | Symbol | Dimension |
|----------|---------|--------|-----------|
| Length | meter | m | [L] |
| Mass | kilogram | kg | [M] |
| Time | second | s | [T] |
| Electric Current | ampere | A | [I] |
| Thermodynamic Temperature | kelvin | K | [Θ] |
| Amount of Substance | mole | mol | [N] |
| Luminous Intensity | candela | cd | [J] |

**Reference:** BIPM SI Brochure (9th edition, 2019)

---

## Common Conversions

### Length

**Base Unit:** meter (m)

```yaml
meter:
  symbol: m
  to_feet: 3.28084
  to_inches: 39.3701
  to_nautical_miles: 0.000539957
  to_kilometers: 0.001
  precision: 3  # decimal places
  rounding: half_even
```

**Examples:**
```
10 m = 32.808 ft
10 m = 393.701 in
1852 m = 1.000 NM (nautical mile)
```

**Conversion Formulas:**
```
feet = meters × 3.28084
inches = meters × 39.3701
nautical_miles = meters × 0.000539957
kilometers = meters × 0.001
```

---

### Mass

**Base Unit:** kilogram (kg)

```yaml
kilogram:
  symbol: kg
  to_pounds: 2.20462
  to_ounces: 35.274
  to_metric_tons: 0.001
  precision: 3
  rounding: half_even
```

**Examples:**
```
100 kg = 220.462 lb
1 kg = 35.274 oz
1000 kg = 1.000 t (metric ton)
```

**Conversion Formulas:**
```
pounds = kilograms × 2.20462
ounces = kilograms × 35.274
metric_tons = kilograms × 0.001
```

---

### Temperature

**Base Unit:** kelvin (K)

```yaml
kelvin:
  symbol: K
  to_celsius: "K - 273.15"
  to_fahrenheit: "(K - 273.15) × 9/5 + 32"
  precision: 2
  rounding: half_even
  absolute_zero: 0 K
```

**Examples:**
```
20.28 K = -252.87°C = -423.17°F  (LH₂ boiling point at 1 atm)
273.15 K = 0.00°C = 32.00°F     (water freezing point)
300 K = 26.85°C = 80.33°F       (typical ambient)
```

**Conversion Formulas:**
```python
celsius = kelvin - 273.15
fahrenheit = (kelvin - 273.15) * 9/5 + 32
kelvin = celsius + 273.15
kelvin = (fahrenheit - 32) * 5/9 + 273.15
```

**Critical Temperatures:**
| Substance | K | °C | °F | Context |
|-----------|-------|----------|----------|---------|
| LH₂ Boiling Point | 20.28 | -252.87 | -423.17 | Storage, transfer |
| LH₂ Triple Point | 13.80 | -259.35 | -434.83 | Phase diagram |
| Ambient (ISA) | 288.15 | 15.00 | 59.00 | Standard day |

---

### Pressure

**Base Unit:** pascal (Pa)

```yaml
pascal:
  symbol: Pa
  to_bar: 1e-5
  to_psi: 0.000145038
  to_atm: 9.86923e-6
  to_kilopascal: 0.001
  to_megapascal: 1e-6
  precision: 2
  rounding: half_even
```

**Examples:**
```
70,000,000 Pa = 700.00 bar = 10,152.64 psi  (H₂ storage at 700 bar)
35,000,000 Pa = 350.00 bar = 5,075.89 psi   (H₂ storage at 350 bar)
101,325 Pa = 1.01325 bar = 14.696 psi       (standard atmosphere)
```

**Conversion Formulas:**
```
bar = pascals × 1e-5
psi = pascals × 0.000145038
atm = pascals × 9.86923e-6
kilopascals = pascals × 0.001
megapascals = pascals × 1e-6
```

**H₂ Storage Pressures:**
| Type | Bar | PSI | MPa | Context |
|------|-------|---------|-------|---------|
| Type III | 350 | 5,076 | 35.0 | Compressed gas tanks |
| Type IV | 700 | 10,153 | 70.0 | Composite tanks |
| Atmospheric | 1.01325 | 14.696 | 0.101 | LH₂ storage (nominal) |

---

### Energy

**Base Unit:** joule (J)

```yaml
joule:
  symbol: J
  to_megajoule: 1e-6
  to_kilowatt_hour: 2.77778e-7
  to_btu: 0.000947817
  to_calorie: 0.239006
  precision: 3
  rounding: half_even
```

**Examples:**
```
120,000,000 J/kg = 120.000 MJ/kg = 33.333 kWh/kg = 51,613 BTU/lb  (H₂ LHV)
142,000,000 J/kg = 142.000 MJ/kg = 39.444 kWh/kg = 61,050 BTU/lb  (H₂ HHV)
43,000,000 J/kg = 43.000 MJ/kg = 11.944 kWh/kg = 18,495 BTU/lb    (Jet-A)
```

**Conversion Formulas:**
```
megajoules = joules × 1e-6
kilowatt_hours = joules × 2.77778e-7
btu = joules × 0.000947817
calories = joules × 0.239006
```

**Fuel Energy Comparison:**
| Fuel | MJ/kg (LHV) | kWh/kg | BTU/lb | Advantage |
|------|-------------|--------|--------|-----------|
| H₂ (gas/liquid) | 120 | 33.33 | 51,613 | 2.79× Jet-A |
| Jet-A | 43 | 11.94 | 18,495 | Reference |
| Battery (Li-ion) | 0.5-0.9 | 0.14-0.25 | 216-388 | 133-240× lower |

---

### Power

**Base Unit:** watt (W)

```yaml
watt:
  symbol: W
  to_kilowatt: 0.001
  to_megawatt: 1e-6
  to_horsepower: 0.00134102
  to_btu_per_hour: 3.41214
  precision: 3
  rounding: half_even
```

**Examples:**
```
1,500,000 W = 1,500 kW = 1.5 MW = 2,011.5 hp  (fuel cell output)
100,000 W = 100 kW = 0.1 MW = 134.1 hp        (electric motor)
```

**Conversion Formulas:**
```
kilowatts = watts × 0.001
megawatts = watts × 1e-6
horsepower = watts × 0.00134102
btu_per_hour = watts × 3.41214
```

---

## H₂-Specific Units

### Energy Density (Mass Basis)

**Unit:** MJ/kg (megajoules per kilogram)

```yaml
energy_density_mass:
  unit: MJ/kg
  symbol: MJ/kg
  conversions:
    to_kWh_per_kg: 0.277778
    to_Btu_per_lb: 429.923
  reference:
    lh2_lhv: 120
    lh2_hhv: 142
  precision: 2
  rounding: half_even
```

**Examples:**
```
120 MJ/kg = 33.33 kWh/kg = 51,590 BTU/lb  (H₂ lower heating value)
142 MJ/kg = 39.44 kWh/kg = 61,049 BTU/lb  (H₂ higher heating value)
```

**Notes:**
- **LHV (Lower Heating Value):** Excludes water condensation energy
- **HHV (Higher Heating Value):** Includes water condensation energy
- Q100 calculations use **LHV** for consistency with industry practice

---

### Energy Density (Volume Basis)

**Unit:** MJ/L (megajoules per liter)

```yaml
energy_density_volume:
  unit: MJ/L
  symbol: MJ/L
  conversions:
    to_kWh_per_L: 0.277778
    to_Btu_per_gal: 3775.87
    to_MJ_per_m3: 1000
  reference:
    lh2: 8.5
    jet_a: 34.7
  precision: 2
  rounding: half_even
```

**Examples:**
```
8.5 MJ/L = 2.36 kWh/L = 32,095 BTU/gal    (LH₂ at 70.8 kg/m³)
34.7 MJ/L = 9.64 kWh/L = 131,122 BTU/gal  (Jet-A at 810 kg/m³)
```

**Volume Energy Comparison:**
| Fuel | MJ/L | kWh/L | BTU/gal | Ratio to Jet-A |
|------|------|-------|---------|----------------|
| Jet-A | 34.7 | 9.64 | 131,122 | 1.00× |
| LH₂ | 8.5 | 2.36 | 32,095 | 0.24× (requires 4× volume) |
| GH₂ (700 bar) | 5.6 | 1.56 | 21,163 | 0.16× |

---

### Boil-Off Rate

**Unit:** % per day

```yaml
boil_off_rate:
  unit: percent_per_day
  symbol: %/day
  description: "Percentage of LH₂ inventory that vaporizes daily due to heat ingress"
  reference:
    q100_target: 0.3-0.5
    industry_typical: 0.5-2.0
    best_in_class: 0.1-0.3
  precision: 2
  rounding: half_down  # Conservative (safety)
```

**Examples:**
```
0.3 %/day = 3 kg/day per 1000 kg LH₂  (Q100 best-case target)
0.5 %/day = 5 kg/day per 1000 kg LH₂  (Q100 nominal target)
2.0 %/day = 20 kg/day per 1000 kg LH₂ (Early-generation tanks)
```

**Calculation:**
```python
def daily_boiloff(mass_kg: float, rate_percent: float) -> float:
    """Calculate daily boil-off mass."""
    return mass_kg * (rate_percent / 100.0)

# Example: 5000 kg LH₂, 0.4%/day boil-off
boiloff = daily_boiloff(5000, 0.4)  # 20 kg/day
```

**Impact on Mission:**
- **Short flights (<4 hours):** Negligible impact
- **Ground turnaround:** 0.1-0.2% loss per hour
- **Long-term storage:** Requires boil-off management (re-liquefaction or venting)

---

### Flow Rate

**Unit:** kg/s (kilograms per second)

```yaml
flow_rate:
  unit: kg_per_s
  symbol: kg/s
  conversions:
    to_kg_per_hour: 3600
    to_lb_per_hour: 7936.64
    to_lb_per_second: 2.20462
  reference:
    cruise_consumption: 0.5-1.5
  precision: 3
  rounding: half_even
```

**Examples:**
```
1.0 kg/s = 3,600 kg/h = 7,937 lb/h  (typical cruise consumption)
0.5 kg/s = 1,800 kg/h = 3,968 lb/h  (efficient cruise)
2.0 kg/s = 7,200 kg/h = 15,873 lb/h (high power demand)
```

**Conversion Formulas:**
```
kg_per_hour = kg_per_s × 3600
lb_per_hour = kg_per_s × 7936.64
lb_per_second = kg_per_s × 2.20462
```

---

## Precision and Rounding Rules

### By Unit Type

| Unit Type | Precision | Rounding Method | Example |
|-----------|-----------|-----------------|---------|
| Length | 3 decimal places | Half to even | 10.123 m |
| Mass | 3 decimal places | Half to even | 100.456 kg |
| Temperature | 2 decimal places | Half to even | 273.15 K |
| Pressure | 2 decimal places | Half to even | 700.00 bar |
| Energy | 3 significant figures | Half to even | 120 MJ/kg |
| Boil-off rate | 2 decimal places | Half down (conservative) | 0.50 %/day |

---

### Rounding Methods

**Half to Even (Banker's Rounding):**
- **Default method** for most calculations
- Rounds 0.5 to the nearest even number
- Reduces cumulative rounding bias

```python
# Examples
round(2.5) = 2  # rounds down to even
round(3.5) = 4  # rounds up to even
round(4.5) = 4  # rounds down to even
```

**Half Down (Conservative):**
- Used for **safety-critical** parameters (boil-off, margins)
- Always rounds 0.5 down
- Ensures conservative estimates

```python
import math

def round_half_down(x, decimals=0):
    multiplier = 10 ** decimals
    return math.floor(x * multiplier + 0.5 - 1e-10) / multiplier

# Examples
round_half_down(0.45, 1) = 0.4
round_half_down(0.55, 1) = 0.5  # Conservative
```

**Display vs Storage:**
- **Storage:** Full precision (double/float64)
- **Display:** Rounded to specified precision
- **Calculations:** Use full precision, round only for display

---

## Potential TBDs

The following uncertainties have been identified and require resolution:

### [TBD-00-010] Conversion Factor Database Format

**Description:** Determine database format for conversion factors (JSON vs YAML vs SQL)

**Context:** Need centralized, version-controlled conversion factor repository

**Proposed Solutions:**
1. **JSON:** Machine-readable, widely supported
2. **YAML:** Human-readable, supports comments
3. **SQL:** Queryable, supports complex relationships

**Recommendation:** **YAML** for source-of-truth, auto-generate JSON and SQL

**Classification:** CLASS II (affects tooling)

**Resolution Target:** 2026-03-15

---

## Triggered KNUs

The following KNUs are spawned by this ICD to address embedded TBDs:

### KNU-00-00-005-TEST-001: Unit Conversion Accuracy Tests

**Purpose:** All conversions within ±0.01% tolerance

**Acceptance Criteria:**
- Test coverage: 100% of conversion factors
- Accuracy: ±0.01% or better
- Round-trip conversions: Identity within tolerance
- Performance: <1μs per conversion

**Spawned By:** TBD-00-010

**Due Date:** 2026-03-20

---

## Implementation Example

**Python Conversion Library:**
```python
from typing import Dict
import yaml

class UnitConverter:
    def __init__(self, config_file: str):
        with open(config_file, 'r') as f:
            self.conversions = yaml.safe_load(f)
    
    def convert(self, value: float, from_unit: str, to_unit: str) -> float:
        """Convert value from one unit to another."""
        if from_unit == to_unit:
            return value
        
        # Get conversion factor
        factor = self.conversions[from_unit][f'to_{to_unit}']
        result = value * factor
        
        # Apply precision and rounding
        precision = self.conversions[from_unit]['precision']
        return round(result, precision)

# Usage
converter = UnitConverter('unit_conversions.yaml')
meters = 10
feet = converter.convert(meters, 'meter', 'feet')
print(f"{meters} m = {feet} ft")  # 10 m = 32.808 ft
```

---

## Traceability

### Satisfies Requirements

- **KNU-00-00-005-REQ-001:** Unit System Requirements

### Verified By

- **KNU-00-00-005-TEST-001:** Unit Conversion Accuracy Tests (to be created)

### Related Artifacts

- **KNU-00-00-005-PUB-001:** Unit Conversion Reference DM
- **KNU-00-00-005-ANA-001:** H₂-Specific Unit Analysis

---

## References

### Standards

- **BIPM SI Brochure (9th edition):** Official SI unit definitions
- **ISO 80000:** Quantities and units
- **NIST SP 811:** Guide for the Use of the International System of Units
- **IEEE 754:** Floating-point arithmetic standard

### Aviation Standards

- **ATA iSpec 2200:** Unit conventions for aerospace
- **EASA CS-25:** Certification specifications (unit requirements)

### Internal Documents

- **KNU-00-00-005-REQ-001:** Unit System Requirements
- **KNU-00-00-005-ANA-001:** H₂-Specific Unit Analysis

---

## Change History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| I001-R00 | 2026-01-12 | STK_SE | Initial baseline - GENERATED |

---

**Document Status:** 🔵 GENERATED

**Next Action:** Review and approval by STK_SE and engineering teams

**Notes:** This ICD establishes unit conversion standards for the AMPEL360 Q100 program, with particular attention to H₂-specific units and safety-critical precision requirements. All calculations and documentation must comply with these specifications.
