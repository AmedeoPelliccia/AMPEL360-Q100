# E1-ENVIRONMENT — Environmental Control Systems Domain

**OPT-IN Axis:** T-TECHNOLOGIES  
**Domain:** E1-ENVIRONMENT  
**Scope:** Environmental control systems including air conditioning, fire protection, ice protection, and related systems

---

## Overview

The E1-ENVIRONMENT domain encompasses all systems responsible for cabin and equipment environmental control, protection from environmental hazards, and related utility systems for the AMPEL360 Q100 BWB hydrogen-hybrid aircraft.

---

## ATA Chapters in This Domain

| ATA Chapter | System | Description |
|-------------|--------|-------------|
| **ATA 21** | Air Conditioning/Pressurization | Cabin environment control and pressurization |
| **ATA 26** | Fire Protection | Detection and suppression systems |
| **ATA 30** | Ice and Rain Protection | Anti-ice and de-ice systems |
| **ATA 35** | Oxygen | Crew and passenger oxygen systems |
| **ATA 36** | Pneumatic | Pneumatic distribution and services |
| **ATA 37** | Vacuum | Vacuum system and services |
| **ATA 38** | Water/Waste | Potable water and waste systems |
| **ATA 47** | Nitrogen Generation System | Fuel tank inerting |

---

## Domain Structure

```
E1-ENVIRONMENT/
├── README.md
├── 00_INDEX.md
│
├── ATA_21-AIR_CONDITIONING_PRESSURIZATION/
│   └── ATA-21-air-conditioning/
│       ├── 21-00-general/
│       ├── 21-10-compression/
│       ├── 21-20-distribution/
│       ├── 21-30-pressurization-control/
│       ├── 21-40-heating/
│       ├── 21-50-cooling/
│       ├── 21-60-temperature-control/
│       ├── 21-70-moisture-air-contaminant-control/
│       ├── 21-80-reserved-as-required/
│       └── 21-90-tables-schemas-index/
│
├── ATA_26-FIRE_PROTECTION/
│   └── ATA-26-fire-protection/
│       ├── 26-00-general/ to 26-90-tables-schemas-index/
│
├── ATA_30-ICE_RAIN_PROTECTION/
│   └── ATA-30-ice-rain-protection/
│       ├── 30-00-general/ to 30-90-tables-schemas-index/
│
├── ATA_35-OXYGEN/
│   └── ATA-35-oxygen/
│       ├── 35-00-general/ to 35-90-tables-schemas-index/
│
├── ATA_36-PNEUMATIC/
│   └── ATA-36-pneumatic/
│       ├── 36-00-general/ to 36-90-tables-schemas-index/
│
├── ATA_37-VACUUM/
│   └── ATA-37-vacuum/
│       ├── 37-00-general/ to 37-90-tables-schemas-index/
│
├── ATA_38-WATER_WASTE/
│   └── ATA-38-water-waste/
│       ├── 38-00-general/ to 38-90-tables-schemas-index/
│
└── ATA_47-NITROGEN_GENERATION_SYSTEM/
    └── ATA-47-nitrogen-generation/
        ├── 47-00-general/ to 47-90-tables-schemas-index/
```

---

## Key Considerations for Q100 BWB Hydrogen-Hybrid

### Air Conditioning (ATA 21)

The hydrogen-electric architecture influences ECS design:

- **Electric ECS**: No bleed air from turbine engines
- **Heat pump technology**: Efficient heating/cooling cycles
- **Cabin altitude optimization**: Lower cabin altitude for passenger comfort
- **CO₂ management**: Enhanced air quality monitoring and control

### Fire Protection (ATA 26)

Hydrogen systems require enhanced fire protection:

- **H₂ detection**: Hydrogen-specific leak and fire detection
- **Fuel cell compartment protection**: Dedicated suppression systems
- **Battery thermal runaway protection**: Advanced detection and containment

### Ice/Rain Protection (ATA 30)

Electric systems change anti-ice approaches:

- **Electro-thermal anti-ice**: Wing leading edge protection
- **Electro-expulsive de-ice**: Advanced de-icing technologies
- **Sensor protection**: Pitot/static heating

### Nitrogen Generation (ATA 47)

Critical for hydrogen aircraft fuel tank safety:

- **Fuel tank inerting**: Prevention of flammable atmosphere
- **Enhanced capacity**: Sized for hydrogen system requirements

---

## Dependencies

### Upstream

| Source | Dependency |
|--------|------------|
| ATA 24 | Electrical power for all ECS functions |
| ATA 28 | Fuel system integration (inerting) |
| ATA 85 | Fuel cell thermal management interface |
| LC03 | System safety requirements |

### Downstream

| Target | Dependency |
|--------|------------|
| ATA 25 | Cabin furnishing integration |
| ATA 44 | Cabin systems monitoring |
| ATA 45 | CMS integration |
| LC11 | Maintenance program |

---

## Key Stakeholders

| AoR | Role |
|-----|------|
| STK_SE | Environmental systems engineering |
| STK_SAF | Safety and reliability |
| STK_CERT | Certification authority liaison |
| STK_MRO | Maintenance program development |
| STK_OPS | Operations and crew procedures |

---

## Revision History

| Date | Author | Change |
|------|--------|--------|
| 2026-01-11 | AMPEL360 Baseline Architect | Initial domain creation |

---

<p align="center">
  <em>E1-ENVIRONMENT Domain — AMPEL360 Q100 OPT-IN Framework</em>
</p>
