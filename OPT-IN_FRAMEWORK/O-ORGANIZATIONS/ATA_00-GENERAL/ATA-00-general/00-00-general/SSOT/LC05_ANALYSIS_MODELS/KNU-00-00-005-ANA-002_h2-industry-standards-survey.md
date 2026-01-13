# H₂ Industry Standards Survey

## 1. Executive Summary

This document surveys hydrogen industry standards and best practices for unit conventions, providing recommendations for AMPEL360 Q100 alignment with global H₂ infrastructure and regulatory frameworks.

## 2. Scope

### 2.1 Standards Organizations Reviewed

| Organization | Abbreviation | Geographic Scope | Primary Focus |
|--------------|--------------|------------------|---------------|
| International Organization for Standardization | ISO | Global | Technical standards |
| Society of Automotive Engineers | SAE | Global (US-led) | Aerospace/automotive |
| European Industrial Gases Association | EIGA | Europe | Industrial gas safety |
| Compressed Gas Association | CGA | North America | Gas handling |
| Japanese Industrial Standards | JIS | Japan | Industrial standards |
| US Department of Energy | DOE | United States | H₂ research/deployment |

### 2.2 Review Period

Standards reviewed from 2020-2026, focusing on recent updates reflecting emerging hydrogen economy.

## 3. Key Standards Analysis

### 3.1 ISO 80000 Series: Quantities and Units

**Standard:** ISO 80000-1:2022 — Quantities and units — Part 1: General  
**Relevance:** ★★★★★ Critical

**Key Provisions:**
- SI units as primary system
- Temperature: Kelvin (K) for scientific/engineering; Celsius (°C) acceptable for general use
- Pressure: Pascal (Pa) primary; bar widely accepted in industrial applications
- Energy: Joule (J) primary

**AMPEL360 Q100 Alignment:**
✅ Full alignment — SI primary with bar for pressure systems

---

### 3.2 ISO/TR 15916:2015 — Basic considerations for the safety of hydrogen systems

**Standard:** ISO/TR 15916:2015  
**Relevance:** ★★★★★ Critical

**Key Provisions:**
- Temperature reporting: Kelvin for cryogenic systems
- Pressure: bar or MPa for high-pressure systems (350-700 bar)
- Boil-off rate: Percentage per day (%/day) or absolute mass rate (kg/day)
- Energy density: MJ/kg (gravimetric) and MJ/L (volumetric)

**Recommended Conventions:**
| Parameter | Unit | Notes |
|-----------|------|-------|
| Cryogenic temp | K | Primary; °C supplementary |
| Storage pressure | bar | Preferred over psi in Europe/Asia |
| Boil-off rate | %/day | With absolute kg/day clarification |
| Heat ingress | W | Direct correlation to boil-off |

**AMPEL360 Q100 Alignment:**
✅ Full alignment — Our conventions match ISO/TR 15916

---

### 3.3 SAE E-39 Committee Standards

**Committee:** SAE E-39 Hydrogen Technologies  
**Relevance:** ★★★★★ Critical (Aerospace H₂)

**Key Standards:**
- SAE AS8015: Liquid hydrogen systems for aircraft
- SAE AS8016: Ground support equipment for liquid hydrogen aircraft
- SAE AIR5715: Guidelines for liquid hydrogen fueling facilities

**Unit Conventions (AS8015/AS8016):**
| Quantity | Primary Unit | Secondary Unit |
|----------|--------------|----------------|
| Temperature | K | °F (US operators) |
| Pressure | bar | psi (US operators) |
| Mass flow | kg/s | lb/min (US operators) |
| Energy | MJ/kg | Btu/lb (US operators) |
| Volume | L or m³ | US gallon |

**Key Finding:** SAE standards allow dual-unit presentation (SI primary, Imperial secondary) specifically for operator convenience.

**AMPEL360 Q100 Alignment:**
✅ Full alignment — Dual-unit approach matches SAE guidance

---

### 3.4 EIGA IGC Doc 121/04 — Hydrogen Transportation Pipelines

**Standard:** EIGA IGC Doc 121/04 and IGC Doc 06/02  
**Relevance:** ★★★★☆ High (Ground infrastructure)

**Key Provisions:**
- Pressure: bar (European preference)
- Flow rate: Nm³/h (Normal cubic meters per hour at STP)
- Energy content: MJ or kWh

**Note:** EIGA emphasizes bar over psi for European operations.

**AMPEL360 Q100 Alignment:**
✅ Compatible — bar primary aligns with EIGA

---

### 3.5 CGA P-28 — Standard for Gaseous Hydrogen

**Standard:** CGA P-28 (2020 Edition)  
**Relevance:** ★★★☆☆ Medium (North American industrial)

**Key Provisions:**
- Pressure: psi primary (US/Canada preference)
- Temperature: °F primary for ambient; K for cryogenic
- Mass: pounds (lb) common in US industrial gas

**Regional Difference:** CGA reflects US industrial practice (Imperial preference).

**AMPEL360 Q100 Alignment:**
⚠️ Partial — We provide Imperial as secondary (CGA users may prefer Imperial primary)

**Recommendation:** Include Imperial conversions prominently in US operator documentation.

---

### 3.6 DOE Hydrogen and Fuel Cells Program

**Source:** DOE H₂ at Scale Roadmap, Technical Targets  
**Relevance:** ★★★★☆ High (R&D reference)

**Unit Conventions:**
| Parameter | DOE Standard Unit | Notes |
|-----------|-------------------|-------|
| Gravimetric density | kWh/kg | Often used alongside MJ/kg |
| Volumetric density | kWh/L | Often used alongside MJ/L |
| Cost | $/kg or $/MJ | Economic metrics |
| Production rate | kg/day | Large-scale production |
| Compression energy | kWh/kg | Parasitic energy loss |

**Key Insight:** DOE frequently uses kWh (kilowatt-hour) for energy in addition to MJ, reflecting electrical industry influence.

**AMPEL360 Q100 Alignment:**
✅ Compatible — We provide both MJ and kWh conversions

---

### 3.7 JIS B 8277:2018 — Hydrogen Fuel Cell Vehicles

**Standard:** JIS B 8277:2018  
**Relevance:** ★★★☆☆ Medium (Japanese market)

**Key Provisions:**
- Pressure: MPa (megapascals) preferred
- Temperature: °C for operational, K for technical
- Energy: MJ/kg

**Regional Note:** Japan uses MPa more than bar (1 MPa = 10 bar).

**AMPEL360 Q100 Alignment:**
✅ Compatible — 700 bar = 70 MPa; easy conversion

---

## 4. Comparative Analysis

### 4.1 Temperature Conventions

| Standard | Cryogenic | Ambient | US Operator Exception |
|----------|-----------|---------|----------------------|
| ISO 80000 | K | K or °C | — |
| ISO/TR 15916 | K | °C | — |
| SAE E-39 | K | °F or °C | °F common |
| EIGA | K | °C | — |
| CGA | K | °F | °F primary |
| DOE | K | °C | — |

**Consensus:** Kelvin (K) universal for cryogenic; Celsius (°C) preferred for ambient except US operators (°F).

**AMPEL360 Q100 Decision:**
- Primary: K (cryogenic), °C (ambient)
- Secondary: °F (US operators)
✅ Aligned with global consensus

---

### 4.2 Pressure Conventions

| Standard | High Pressure H₂ | Low Pressure | Notes |
|----------|------------------|--------------|-------|
| ISO 80000 | Pa (bar accepted) | Pa | SI primary |
| ISO/TR 15916 | bar or MPa | bar | Industrial preference |
| SAE E-39 | bar (psi secondary) | bar | Aerospace standard |
| EIGA | bar | bar | European standard |
| CGA | psi | psi | US industrial |
| JIS | MPa | MPa | Japanese preference |

**Consensus:** bar is the global standard for high-pressure H₂ (except US industrial using psi).

**AMPEL360 Q100 Decision:**
- Primary: bar
- Secondary: psi (especially for 700 bar = 10,153 psi tanks)
✅ Aligned with aerospace/European standards; accommodates US operators

---

### 4.3 Energy Density Conventions

| Standard | Gravimetric | Volumetric | Alternative |
|----------|-------------|------------|-------------|
| ISO/TR 15916 | MJ/kg | MJ/L | — |
| SAE E-39 | MJ/kg | MJ/L | Btu/lb (US) |
| DOE | kWh/kg | kWh/L | MJ also used |
| EIGA | MJ/kg | MJ/L | — |

**Consensus:** MJ/kg and MJ/L are standard; kWh/kg and kWh/L common in electrical contexts.

**AMPEL360 Q100 Decision:**
- Primary: MJ/kg, MJ/L
- Secondary: kWh/kg, kWh/L
- Tertiary (US only): Btu/lb
✅ Multi-unit approach covers all stakeholder preferences

---

### 4.4 Boil-Off Rate Conventions

| Standard | Preferred Unit | Alternative | Notes |
|----------|----------------|-------------|-------|
| ISO/TR 15916 | %/day | kg/day | Both recommended |
| SAE AS8015 | %/day | — | Relative loss rate |
| EIGA | %/day or g/day/kg | — | Normalized rate |

**Consensus:** %/day (percentage per day) is universal, with absolute mass rate (kg/day) as clarification.

**AMPEL360 Q100 Decision:**
- Primary: %/day (relative)
- Secondary: kg/day (absolute)
✅ Matches industry standard

---

## 5. Regional Variations

### 5.1 United States

**Pressure:** psi remains common in US industrial gas sector (CGA standards)  
**Temperature:** °F common for ambient; K for cryogenic  
**Energy:** Btu and kWh used alongside MJ

**Recommendation:** Always provide psi, °F, and Btu conversions for US operators.

### 5.2 Europe

**Pressure:** bar universal  
**Temperature:** °C for ambient; K for cryogenic  
**Energy:** MJ and kWh

**Recommendation:** SI primary is sufficient; Imperial secondary optional.

### 5.3 Asia-Pacific

**Japan:** MPa (= 10 bar) common  
**China:** Follows ISO standards (Pa, but bar accepted)  
**Other:** Generally follow ISO

**Recommendation:** Provide MPa conversions for Japanese operators.

---

## 6. Recommendations for AMPEL360 Q100

### 6.1 Primary/Secondary System

**Confirmed:** SI primary, Imperial secondary approach is correct and aligns with global aerospace hydrogen standards (SAE E-39).

### 6.2 Critical Unit Choices

| Quantity | Primary | Secondary | Justification |
|----------|---------|-----------|---------------|
| Cryogenic temp | K | °C, °F | ISO/TR 15916, SAE AS8015 |
| High pressure | bar | psi, MPa | SAE AS8015, ISO/TR 15916 |
| Energy density | MJ/kg | kWh/kg, Btu/lb | ISO/TR 15916, DOE, SAE |
| Boil-off rate | %/day | kg/day | ISO/TR 15916, SAE AS8015 |
| Flow rate | kg/s | kg/h, lb/s | SAE AS8015 |

### 6.3 Display Strategy

**Cockpit Displays:**
- Primary: SI units (K, bar, MJ/kg)
- Operator-configurable: Imperial option (°F, psi, Btu/lb)

**Maintenance Manuals:**
- Dual-unit presentation: SI primary (Imperial secondary in parentheses)

**Engineering Documentation:**
- SI units only (highest precision)

### 6.4 Alignment Summary

✅ **Fully Aligned:** ISO 80000, ISO/TR 15916, SAE E-39, EIGA  
⚠️ **Partially Aligned:** CGA (US preference for Imperial primary)  
✅ **Compatible:** DOE, JIS

**Overall Assessment:** AMPEL360 Q100 unit system is fully compliant with global aerospace hydrogen standards and compatible with regional variations through secondary unit provision.

---

## 7. Gaps and Future Work

### 7.1 Emerging Standards

**SAE AS8015 Rev C (expected 2027):** May introduce additional H₂ safety symbols and updated boil-off calculation methods. Monitor for updates.

**ISO 19880 Series (Hydrogen Fueling Stations):** Part 8 (Fuel Quality) may impact impurity reporting units. Review when finalized.

### 7.2 Regulatory Alignment

**EASA/FAA Hydrogen Aircraft Certification:** Standards under development. Ensure unit conventions align with emerging airworthiness requirements.

---

## 8. Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-12 | STK_SE | Initial standards survey |

## 9. References

1. ISO 80000-1:2022, Quantities and units — Part 1: General
2. ISO/TR 15916:2015, Basic considerations for the safety of hydrogen systems
3. SAE AS8015, Liquid Hydrogen Systems for Aircraft (Draft Rev C)
4. SAE AS8016, Ground Support Equipment for Liquid Hydrogen Aircraft
5. SAE AIR5715, Guidelines for Liquid Hydrogen Fueling Facilities
6. EIGA IGC Doc 121/04, Hydrogen Transportation Pipelines
7. EIGA IGC Doc 06/02, Gaseous Hydrogen Stations
8. CGA P-28, Standard for Gaseous Hydrogen (2020 Edition)
9. DOE H₂ at Scale Roadmap (2024)
10. JIS B 8277:2018, Hydrogen Fuel Cell Vehicles — Safety specifications
