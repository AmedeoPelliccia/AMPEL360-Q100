# Unit Systems Usage Guide

**Data Module Code:** DMC-AMPEL360-00-00-05-00A-001A-A  
**Issue:** 001-00  
**Language:** EN-US

---

## 1. Introduction

### 1.1 Purpose

This guide defines the unit systems, conventions, and display standards for all AMPEL360 Q100 technical documentation, maintenance procedures, and operational displays.

### 1.2 Applicability

- Aircraft Maintenance Manual (AMM)
- Component Maintenance Manual (CMM)
- Illustrated Parts Catalog (IPC)
- Flight Crew Operating Manual (FCOM)
- Training materials
- Engineering documentation

## 2. Primary Unit System

### 2.1 SI Units (Primary)

The AMPEL360 Q100 uses the **International System of Units (SI)** as the primary measurement system.

| Quantity | SI Unit | Symbol | Notes |
|----------|---------|--------|-------|
| Length | meter | m | Primary for dimensions |
| Mass | kilogram | kg | Primary for weights |
| Time | second | s | Primary for durations |
| Temperature | Kelvin | K | Primary for cryogenics |
| Temperature | Celsius | °C | Primary for ambient |
| Pressure | Pascal | Pa | Base unit |
| Pressure | bar | bar | Preferred for high pressure |
| Energy | Joule | J | Base unit |
| Energy | megajoule | MJ | Preferred for H₂ energy |
| Power | Watt | W | Standard |
| Power | kilowatt | kW | Preferred for motors |

### 2.2 Imperial Units (Secondary)

Imperial units shown in parentheses for reference where required by operator or regulatory convention.

| SI Unit | Imperial Equivalent | Conversion |
|---------|---------------------|------------|
| 1 meter | 3.281 feet | × 3.281 |
| 1 kilogram | 2.205 pounds | × 2.205 |
| 1 bar | 14.504 psi | × 14.504 |
| 1 liter | 0.264 US gallon | × 0.264 |

## 3. H₂-Specific Units

### 3.1 Energy Density

| Parameter | Preferred Unit | Display Format |
|-----------|----------------|----------------|
| Gravimetric | MJ/kg | XXX.X MJ/kg |
| Volumetric | MJ/L | X.XX MJ/L |
| Comparison | kWh/kg | XX.XX kWh/kg |

**Reference Values:**
- LH₂: 120 MJ/kg (gravimetric)
- LH₂: 8.5 MJ/L (volumetric at 1 atm)

### 3.2 Cryogenic Temperatures

| Context | Unit | Display Format | Example |
|---------|------|----------------|---------|
| LH₂ systems | Kelvin | XXX.XX K | 20.28 K |
| Cockpit display | Celsius | -XXX.X°C | -252.9°C |
| US operators | Fahrenheit | -XXX.X°F | -423.2°F |

**Critical Reference Points:**

| Point | Kelvin | Celsius | Fahrenheit |
|-------|--------|---------|------------|
| LH₂ Boiling | 20.28 K | -252.87°C | -423.17°F |
| LH₂ Triple | 13.80 K | -259.35°C | -434.83°F |
| LH₂ Critical | 33.20 K | -239.95°C | -399.91°F |

### 3.3 Boil-Off Rate

| Parameter | Unit | Display | Interpretation |
|-----------|------|---------|----------------|
| Rate | %/day | X.XX %/day | Percentage of mass lost per day |
| Absolute | kg/day | XX.X kg/day | Mass lost per day |
| Threshold | — | Green/Amber/Red | Status indication |

**Thresholds:**
- 🟢 Green: <0.30 %/day (excellent)
- 🟡 Amber: 0.30-0.50 %/day (acceptable)
- 🔴 Red: >0.50 %/day (requires attention)

### 3.4 Fuel Cell Parameters

| Parameter | Unit | Display | Range |
|-----------|------|---------|-------|
| Efficiency | % | XX.X % | 50-65% |
| Power output | kW | XXXX kW | 0-2500 kW |
| Stack temp | °C | XXX.X°C | 60-90°C |
| H₂ flow | kg/s | X.XXX kg/s | 0-1.5 kg/s |

## 4. Display Conventions

### 4.1 Precision Rules

| Context | Precision | Example |
|---------|-----------|---------|
| Cockpit primary | 2 significant figures after decimal | 293.15 K |
| Cockpit advisory | 1 decimal | 701.2 bar |
| Maintenance | 4 decimals | 293.1568 K |
| Engineering | Full precision | 293.15678901 K |

### 4.2 Dual Unit Display

When both SI and Imperial units are shown:

**Format:** `SI_value SI_unit (Imperial_value Imperial_unit)`

**Examples:**
- `2000 kg (4409 lb)`
- `700 bar (10,153 psi)`
- `-253°C (-423°F)`

### 4.3 Separator Conventions

| Convention | Format | Example |
|------------|--------|---------|
| Decimal | Period (.) | 123.456 |
| Thousands | Comma (,) or space | 1,234,567 or 1 234 567 |
| Negative | Minus sign (−) | −273.15 |

## 5. Unit Conversion Procedures

### 5.1 Temperature Conversion

**Kelvin to Celsius:**
```
°C = K − 273.15
```

**Celsius to Fahrenheit:**
```
°F = (°C × 9/5) + 32
```

**Kelvin to Fahrenheit:**
```
°F = (K − 273.15) × 9/5 + 32
```

### 5.2 Pressure Conversion

```
1 bar = 100,000 Pa = 100 kPa
1 bar = 14.5038 psi
1 atm = 101.325 kPa = 1.01325 bar
```

### 5.3 Energy Conversion

```
1 MJ = 1,000,000 J
1 MJ = 0.27778 kWh
1 kWh = 3.6 MJ
1 Btu = 1.055 kJ
```

## 6. Warnings and Cautions

### ⚠️ WARNING
**Incorrect unit conversion in cryogenic systems can result in equipment damage, hydrogen release, or personnel injury. Always verify unit consistency before performing calculations or adjustments.**

### ⚠️ CAUTION
**Temperature displays in cockpit may show Celsius or Fahrenheit depending on operator configuration. Verify display mode before interpreting cryogenic system temperatures.**

## 7. Quick Reference Card

### 7.1 Common Conversions

| From | To | Multiply by |
|------|-----|-------------|
| bar | psi | 14.504 |
| psi | bar | 0.06895 |
| kg | lb | 2.205 |
| lb | kg | 0.4536 |
| MJ/kg | kWh/kg | 0.2778 |
| K | °C | −273.15 (subtract) |

### 7.2 H₂ Quick Facts

| Property | Value |
|----------|-------|
| LH₂ Density | 70.85 kg/m³ |
| GH₂ Density (STP) | 0.0899 kg/m³ |
| Energy Density | 120 MJ/kg |
| Boiling Point | 20.28 K (−252.87°C) |
| Flammability Range | 4-75% in air |
| Ignition Energy | 0.02 mJ |

## 8. Document Control

| Issue | Date | Author | Changes |
|-------|------|--------|---------|
| 001-00 | 2026-01-12 | STK_PUB | Initial release |
