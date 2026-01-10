# AMPEL360 Q100 (AMPEL360-AIR-T) — Hydrogen-Hybrid Electric BWB Aircraft

<p align="center">
  <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Status-Active%20Development-brightgreen" alt="Status">
  <img src="https://img.shields.io/badge/ATA%20Chapters-79-orange" alt="ATA Chapters">
  <img src="https://img.shields.io/badge/Framework-OPT--IN-purple" alt="Framework">
  <img src="https://img.shields.io/badge/Publications-S1000D-teal" alt="S1000D">
</p>

<p align="center">
  <strong>Digital engineering baseline and publication-grade CSDB for a next-generation hydrogen-electric BWB aircraft. </strong>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#how-this-repo-is-organized">Repo Organization</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#publishing-model-csdb--ietp">Publishing Model</a> •
  <a href="#standards--compliance">Standards</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## Overview

**AMPEL360 Q100** is a next-generation **~100 passenger regional aircraft concept** featuring: 

| Technology | Description |
|------------|-------------|
| **Blended Wing Body (BWB)** | High aerodynamic efficiency and integrated volume |
| **H₂ PEM Fuel Cells** | Primary electrical power generation from hydrogen |
| **Distributed / Open-Fan Propulsors** | Distributed propulsion architecture for efficiency and noise reduction |
| **Peak-Power Buffering** | Buffer strategy for transients (energy management and load leveling) |
| **Circularity + DPP** | Digital Product Passport foundations for lifecycle traceability |

This repository contains a **certification-grade digital baseline** organized under the **OPT-IN Framework** and structured for **SSOT + PUB** workflows. 

**Live Spec (demo):** [v0-ampel-360-aircraft-specification.vercel.app](https://v0-ampel-360-aircraft-specification.vercel.app)

---

## How This Repo Is Organized

At a high level, the repo separates **engineering truth** from **publishable deliverables**:

```
┌─────────────────────────────────────────────────────────────────┐
│                         AMPEL360-AIR-T                          │
├─────────────────────────────┬───────────────────────────────────┤
│          SSOT (Back)        │           PUB (Front)             │
│   Lifecycle Engineering     │    Controlled Deliverables        │
│   • Requirements            │    • CSDB (S1000D)                │
│   • Safety Evidence         │    • EXPORT (PDF/HTML)            │
│   • Design/ICDs             │    • IETP (Runtime)               │
│   • V&V Artifacts           │                                   │
└─────────────────────────────┴───────────────────────────────────┘
```

### SSOT (Single Source of Truth)

**SSOT** is the *system of record* for lifecycle engineering artifacts (LC01–LC14):

| Folder | Content |
|--------|---------|
| `LC01_PROBLEM_STATEMENT` | Problem definition, scope, constraints |
| `LC02_SYSTEM_REQUIREMENTS` | Requirements and traceability |
| `LC03_SAFETY_RELIABILITY` | Safety analysis, hazard logs, FMEA |
| `LC04_DESIGN_DEFINITION` | Design specs, ICDs, architecture |
| `LC05_ANALYSIS_MODELS` | FEA, CFD, thermal, performance models |
| `LC06_VERIFICATION` | Test procedures, evidence, compliance |
| `LC07_VALIDATION` | Integration and validation artifacts |
| `LC08_CONFIGURATION` | Baselines, effectivity, change control |
| `LC09_PRODUCTION` | Manufacturing specs, tooling |
| `LC10_OPERATIONS` | Operational documentation sources |
| `LC11_MAINTENANCE` | Maintenance program sources |
| `LC12_CUSTOMER_CARE` | Customer support, technical services, post-delivery care |
| `LC13_TRAINING` | Training content sources |
| `LC14_RETIREMENT_CIRCULARITY` | End-of-life, recycling, DPP |

### PUB (Publications)

**PUB** is the controlled *delivery surface*:

| Component | Purpose |
|-----------|---------|
| **CSDB** | S1000D Common Source Database (DM/PM/DML/BREX/ICN/APPLICABILITY) |
| **EXPORT** | Rendered deliverables (PDF, HTML, other outputs) per publication |
| **IETP** | Runtime "image" (viewer/config/index + packaging) for interactive delivery |

### Rule of Thumb

| If artifact is...  | Place in... |
|-------------------|-------------|
| Authoritative engineering evidence | `SSOT/` |
| Publishable or deliverable | `PUB/` |

---

## OPT-IN Framework (5-Axis Topology)

The OPT-IN Framework organizes all 79 ATA chapters across five axes:

```
OPT-IN_FRAMEWORK/
├── O-ORGANIZATIONS/                                       # ATA 00–05 (governance / limits / checks)
│   ├── ATA_00-GENERAL/
│   │   └── ATA-00-general/
│   │       └── 00-00-general/
│   ├── ATA_01-MAINTENANCE_POLICY/
│   │   └── ATA-01-maintenance-policy/
│   │       └── 01-00-general/
│   ├── ATA_02-OPERATIONS_ORG/
│   │   └── ATA-02-operations-organization/
│   │       └── 02-00-general/
│   ├── ATA_03-SUPPORT_INFORMATION/
│   │   └── ATA-03-support-information/
│   │       └── 03-00-general/
│   ├── ATA_04-AIRWORTHINESS_LIMITATIONS/
│   │   └── ATA-04-airworthiness-limitations/
│   │       └── 04-00-general/
│   └── ATA_05-TIME_LIMITS_MAINT_CHECKS/
│       └── ATA-05-time-limits-maintenance-checks/
│           └── 05-00-general/
│
├── P-PROGRAMS/                                            # ATA 06–12 (geometry/handling/servicing)
│   ├── ATA_06-DIMENSIONS_AND_AREAS/
│   │   └── ATA-06-dimensions-areas/
│   │       └── 06-00-general/
│   ├── ATA_07-LIFTING_AND_SHORING/
│   │   └── ATA-07-lifting-shoring/
│   │       ├── 07-00-general/
│   │       ├── 07-10-jacking/
│   │       └── 07-20-shoring/
│   ├── ATA_08-LEVELING_AND_WEIGHING/
│   │   └── ATA-08-leveling-weighing/
│   │       ├── 08-00-general/
│   │       ├── 08-10-weighing-balancing/
│   │       └── 08-20-leveling/
│   ├── ATA_09-TOWING_AND_TAXIING/
│   │   └── ATA-09-towing-taxiing/
│   │       ├── 09-00-general/
│   │       ├── 09-10-towing/
│   │       └── 09-20-taxiing/
│   ├── ATA_10-PARKING_MOORING_STORAGE_RETURN_TO_SERVICE/
│   │   └── ATA-10-parking-mooring-storage-rts/
│   │       └── 10-00-general/
│   ├── ATA_11-PLACARDS_AND_MARKINGS/
│   │   └── ATA-11-placards-markings/
│   │       ├── 11-00-general/
│   │       ├── 11-10-exterior-color-schemes-markings/
│   │       ├── 11-20-exterior-placards-markings/
│   │       └── 11-30-interior-placards/
│   └── ATA_12-SERVICING/
│       └── ATA-12-servicing/
│           ├── 12-00-general/
│           ├── 12-10-replenishing/
│           ├── 12-20-scheduled-servicing/
│           └── 12-30-unscheduled-servicing/
│
├── T-TECHNOLOGIES_AMEDEOPELLICCIA-ON_BOARD_SYSTEMS/
│   ├── A-AIRFRAME_CABINS/
│   │   ├── ATA_20-STANDARD_PRACTICES_AIRFRAME/
│   │   │   └── ATA-20-standard-practices-airframe/
│   │   │       ├── 20-00-general/
│   │   │       └── 20-90-reserved-airline-use/
│   │   ├── ATA_25-EQUIPMENT_FURNISHINGS/
│   │   │   └── ATA-25-equipment-furnishings/
│   │   │       ├── 25-00-general/
│   │   │       ├── 25-10-flight-compartment/
│   │   │       ├── 25-20-passenger-compartment/
│   │   │       ├── 25-30-galley/
│   │   │       ├── 25-40-lavatories/
│   │   │       ├── 25-50-additional-compartments/
│   │   │       ├── 25-60-emergency/
│   │   │       ├── 25-70-available/
│   │   │       └── 25-80-insulation/
│   │   ├── ATA_44-CABIN_SYSTEMS/
│   │   │   └── ATA-44-cabin-systems/
│   │   │       ├── 44-00-general/
│   │   │       ├── 44-10-cabin-core-system/
│   │   │       ├── 44-20-in-flight-entertainment-system/
│   │   │       ├── 44-30-external-communication-system/
│   │   │       ├── 44-40-cabin-mass-memory-system/
│   │   │       ├── 44-50-cabin-monitoring-system/
│   │   │       └── 44-60-miscellaneous-cabin-system/
│   │   ├── ATA_50-CARGO_AND_ACCESSORY_COMPARTMENTS/
│   │   │   └── ATA-50-cargo-accessory-compartments/
│   │   │       ├── 50-00-general/
│   │   │       ├── 50-10-cargo-compartments/
│   │   │       ├── 50-20-cargo-loading-systems/
│   │   │       ├── 50-30-cargo-related-systems/
│   │   │       ├── 50-40-available/
│   │   │       ├── 50-50-accessory-compartments/
│   │   │       └── 50-60-insulation/
│   │   ├── ATA_51-STANDARD_PRACTICES_GENERAL/
│   │   │   └── ATA-51-standard-practices-general/
│   │   │       ├── 51-00-general/
│   │   │       ├── 51-10-investigation-cleanup-aero-smoothness/
│   │   │       ├── 51-20-processes/
│   │   │       ├── 51-30-materials/
│   │   │       ├── 51-40-fasteners/
│   │   │       ├── 51-50-support-for-repair-alignment-check/
│   │   │       ├── 51-60-control-surface-balancing/
│   │   │       ├── 51-70-repairs/
│   │   │       └── 51-80-electrical-bonding/
│   │   ├── ATA_52-DOORS/
│   │   │   └── ATA-52-doors/
│   │   │       ├── 52-00-general/
│   │   │       ├── 52-10-passenger-crew/
│   │   │       ├── 52-20-emergency-exit/
│   │   │       ├── 52-30-cargo/
│   │   │       ├── 52-40-service/
│   │   │       ├── 52-50-fixed-interior/
│   │   │       ├── 52-60-entrance-stairs/
│   │   │       ├── 52-70-door-warning-monitoring-operation/
│   │   │       └── 52-80-landing-gear/
│   │   ├── ATA_53-FUSELAGE/
│   │   │   └── ATA-53-fuselage/
│   │   │       ├── 53-00-general/
│   │   │       └── 53-10-thru-90-fuselage-sections-as-required/
│   │   ├── ATA_54-NACELLES_PYLONS/
│   │   │   └── ATA-54-nacelles-pylons/
│   │   │       ├── 54-00-general/
│   │   │       ├── 54-10-thru-40-nacelle-sections-as-required/
│   │   │       └── 54-50-thru-80-pylon-as-required/
│   │   ├── ATA_55-STABILIZERS/
│   │   │   └── ATA-55-stabilizers/
│   │   │       ├── 55-00-general/
│   │   │       ├── 55-10-horizontal-stabilizer-or-canard/
│   │   │       ├── 55-20-elevator/
│   │   │       ├── 55-30-vertical-stabilizer/
│   │   │       └── 55-40-rudder/
│   │   ├── ATA_56-WINDOWS/
│   │   │   └── ATA-56-windows/
│   │   │       ├── 56-00-general/
│   │   │       ├── 56-10-flight-compartment/
│   │   │       ├── 56-20-passenger-compartment/
│   │   │       ├── 56-30-door/
│   │   │       └── 56-40-inspection-observation/
│   │   └── ATA_57-WINGS/
│   │       └── ATA-57-wings/
│   │           ├── 57-00-general/
│   │           ├── 57-10-center-wing/
│   │           ├── 57-20-outer-wing/
│   │           ├── 57-30-wing-tip/
│   │           ├── 57-40-leading-edge-and-devices/
│   │           ├── 57-50-trailing-edge-and-devices/
│   │           ├── 57-60-ailerons-and-elevons/
│   │           ├── 57-70-spoilers/
│   │           ├── 57-80-as-required/
│   │           └── 57-90-wing-folding-system/
│   │
│   ├── M-MECHANICS/
│   │   ├── ATA_27-FLIGHT_CONTROLS/
│   │   │   └── ATA-27-flight-controls/
│   │   │       ├── 27-00-general/
│   │   │       ├── 27-10-aileron-tab/
│   │   │       ├── 27-20-rudder-tab/
│   │   │       ├── 27-30-elevator-tab/
│   │   │       ├── 27-40-horizontal-stabilizer/
│   │   │       ├── 27-50-flaps/
│   │   │       ├── 27-60-spoiler-drag-devices-variable-fairings/
│   │   │       ├── 27-70-gust-lock-dampener/
│   │   │       └── 27-80-lift-augmenting/
│   │   ├── ATA_29-HYDRAULIC_POWER/
│   │   │   └── ATA-29-hydraulic-power/
│   │   │       ├── 29-00-general/
│   │   │       ├── 29-10-main/
│   │   │       ├── 29-20-auxiliary/
│   │   │       └── 29-30-indicating/
│   │   └── ATA_32-LANDING_GEAR/
│   │       └── ATA-32-landing-gear/
│   │           ├── 32-00-general/
│   │           ├── 32-10-main-gear-and-doors/
│   │           ├── 32-20-nose-gear-and-doors/
│   │           ├── 32-30-extension-and-retraction/
│   │           ├── 32-40-wheels-and-brakes/
│   │           ├── 32-50-steering/
│   │           ├── 32-60-position-and-warning/
│   │           └── 32-70-supplementary-gear/
│   │
│   ├── E1-ENVIRONMENT/
│   │   ├── ATA_21-AIR_CONDITIONING_PRESSURIZATION/
│   │   │   └── ATA-21-air-conditioning/
│   │   │       ├── 21-00-general/
│   │   │       ├── 21-10-compression/
│   │   │       ├── 21-20-distribution/
│   │   │       ├── 21-30-pressurization-control/
│   │   │       ├── 21-40-heating/
│   │   │       ├── 21-50-cooling/
│   │   │       ├── 21-60-temperature-control/
│   │   │       └── 21-70-moisture-air-contaminant-control/
│   │   ├── ATA_26-FIRE_PROTECTION/
│   │   │   └── ATA-26-fire-protection/
│   │   │       ├── 26-00-general/
│   │   │       ├── 26-10-detection/
│   │   │       ├── 26-20-extinguishing/
│   │   │       └── 26-30-explosion-suppression/
│   │   ├── ATA_30-ICE_RAIN_PROTECTION/
│   │   │   └── ATA-30-ice-rain-protection/
│   │   │       ├── 30-00-general/
│   │   │       ├── 30-10-airfoil/
│   │   │       ├── 30-20-air-intakes/
│   │   │       ├── 30-30-pitot-and-static/
│   │   │       ├── 30-40-windows-windshields-and-doors/
│   │   │       ├── 30-50-antennas-and-radomes/
│   │   │       ├── 30-60-propellers-rotors/
│   │   │       ├── 30-70-water-lines/
│   │   │       └── 30-80-detection/
│   ��   ├── ATA_35-OXYGEN/
│   │   │   └── ATA-35-oxygen/
│   │   │       ├── 35-00-general/
│   │   │       ├── 35-10-crew/
│   │   │       ├── 35-20-passenger/
│   │   │       └── 35-30-portable/
│   │   ├── ATA_36-PNEUMATIC/
│   │   │   └── ATA-36-pneumatic/
│   │   │       ├── 36-00-general/
│   │   │       ├── 36-10-distribution/
│   │   │       └── 36-20-indicating/
│   │   ├── ATA_37-VACUUM/
│   │   │   └── ATA-37-vacuum/
│   │   │       ├── 37-00-general/
│   │   │       ├── 37-10-distribution/
│   │   │       └── 37-20-indicating/
│   │   ├── ATA_38-WATER_WASTE/
│   │   │   └── ATA-38-water-waste/
│   │   │       ├── 38-00-general/
│   │   │       ├── 38-10-potable/
│   │   │       ├── 38-20-wash/
│   │   │       ├── 38-30-waste-disposal/
│   │   │       └── 38-40-air-supply/
│   │   └── ATA_47-NITROGEN_GENERATION_SYSTEM/
│   │       └── ATA-47-nitrogen-generation/
│   │           └── 47-00-general/
│   │
│   ├── D-DATA/
│   │   ├── ATA_31-INDICATING_RECORDING/
│   │   │   └── ATA-31-indicating-recording/
│   │   │       ├── 31-00-general/
│   │   │       ├── 31-10-instrument-control-panels/
│   │   │       ├── 31-20-independent-instruments/
│   │   │       ├── 31-30-recorders/
│   │   │       ├── 31-40-central-computers/
│   │   │       ├── 31-50-central-warning-systems/
│   │   │       ├── 31-60-central-display-systems/
│   │   │       └── 31-70-automatic-data-reporting-systems/
│   │   ├── ATA_45-CENTRAL_MAINTENANCE_SYSTEM_CMS/
│   │   │   └── ATA-45-central-maintenance-system/
│   │   │       ├── 45-00-general/
│   │   │       ├── 45-05-cms-aircraft-general/
│   │   │       ├── 45-20-cms-airframe-systems/
│   │   │       ├── 45-45-central-maintenance-system/
│   │   │       ├── 45-50-cms-structures/
│   │   │       ├── 45-60-cms-propellers/
│   │   │       └── 45-70-cms-power-plant/
│   │   └── ATA_46-INFORMATION_SYSTEMS/
│   │       └── ATA-46-information-systems/
│   │           ├── 46-00-general/
│   │           ├── 46-10-airplane-general-information-systems/
│   │           ├── 46-20-flight-deck-information-systems/
│   │           ├── 46-30-maintenance-information-systems/
│   │           ├── 46-40-passenger-cabin-information-systems/
│   │           └── 46-50-miscellaneous-information-systems/
│   │
│   ├── E2-ENERGY/
│   │   ├── ATA_24-ELECTRICAL_POWER/
│   │   │   └── ATA-24-electrical-power/
│   │   │       ├── 24-00-general/
│   │   │       ├── 24-10-generator-drive/
│   │   │       ├── 24-20-ac-generation/
│   │   │       ├── 24-30-dc-generation/
│   │   │       ├── 24-40-external-power/
│   │   │       ├── 24-50-ac-load-distribution/
│   │   │       └── 24-60-dc-load-distribution/
│   │   └── ATA_49-AIRBORNE_AUXILIARY_POWER_APU/
│   │       └── ATA-49-airborne-auxiliary-power/
│   │           ├── 49-00-general/
│   │           ├── 49-10-power-plant/
│   │           ├── 49-20-engine/
│   │           ├── 49-30-engine-fuel-and-control/
│   │           ├── 49-40-ignition-starting/
│   │           ├── 49-50-air/
│   │           ├── 49-60-engine-controls/
│   │           ├── 49-70-indicating/
│   │           ├── 49-80-exhaust/
│   │           └── 49-90-oil/
│   │
│   ├── E3-ELECTRICS/
│   │   ├── ATA_33-LIGHTS/
│   │   │   └── ATA-33-lights/
│   │   │       ├── 33-00-general/
│   │   │       ├── 33-10-flight-compartment/
│   │   │       ├── 33-20-passenger-compartment/
│   │   │       ├── 33-30-cargo-and-service-compartments/
│   │   │       ├── 33-40-exterior/
│   │   │       └── 33-50-emergency-lighting/
│   │   └── ATA_39-ELECTRICAL_ELECTRONIC_PANELS_MULTIPURPOSE_COMPONENTS/
│   │       └── ATA-39-electrical-electronic-panels-components/
│   │           └── 39-00-general/
│   │
│   ├── L2-LINKS/
│   │   └── ATA_34-NAVIGATION/
│   │       └── ATA-34-navigation/
│   │           ├── 34-00-general/
│   │           ├── 34-10-flight-environment-data/
│   │           ├── 34-20-attitude-and-direction/
│   │           ├── 34-30-landing-and-taxiing-aids/
│   │           ├── 34-40-independent-position-determining/
│   │           ├── 34-50-dependent-position-determining/
│   │           └── 34-60-flight-management-computing/
│   │
│   ├── C1-COMMS/
│   │   └── ATA_23-COMMUNICATIONS/
│   │       └── ATA-23-communications/
│   │           ├── 23-00-general/
│   │           ├── 23-10-speech-communications/
│   │           ├── 23-15-satcom/
│   │           ├── 23-20-data-transmission-auto-calling/
│   │           ├── 23-30-comfort/
│   │           ├── 23-40-interphone/
│   │           ├── 23-50-audio-integrating/
│   │           ├── 23-60-static-discharging/
│   │           ├── 23-70-audio-video-monitoring/
│   │           └── 23-80-integrated-automatic/
│   │
│   ├── C2-CIRCULAR_CRYOGENIC_CELLS/
│   │   └── ATA_28-FUEL/
│   │       └── ATA-28-fuel/
│   │           ├── 28-00-general/
│   │           ├── 28-10-storage/
│   │           ├── 28-20-distribution/
│   │           ├── 28-30-dump/
│   │           └── 28-40-indicating/
│   │
│   ├── A2-AVIONICS/
│   │   ├── ATA_22-AUTO_FLIGHT/
│   │   │   └── ATA-22-auto-flight/
│   │   │       ├── 22-00-general/
│   │   │       ├── 22-10-autopilot/
│   │   │       ├── 22-20-speed-attitude-correction/
│   │   │       ├── 22-30-auto-throttle/
│   │   │       ├── 22-40-system-monitors/
│   │   │       └── 22-50-aerodynamic-load-alleviating/
│   │   └── ATA_42-INTEGRATED_MODULAR_AVIONICS/
│   │       └── ATA-42-integrated-modular-avionics/
│   │           └── 42-00-general/
│   │
│   ├── O-OPERATING_SYSTEMS/
│   │   └── ATA_40-MULTISYSTEM/
│   │       └── ATA-40-multisystem/
│   │           └── 40-00-general/
│   │
│   └── P-PROPULSION/
│       ├── ATA_60-STANDARD_PRACTICES_PROPELLER_ROTOR/
│       │   └── ATA-60-standard-practices-prop-rotor/
│       │       └── 60-00-general/
│       ├── ATA_61-PROPELLERS_PROPULSORS/
│       │   └── ATA-61-propellers-propulsors/
│       │       ├── 61-00-general/
│       │       ├── 61-10-propeller-assembly/
│       │       ├── 61-20-controlling/
│       │       ├── 61-30-braking/
│       │       ├── 61-40-indicating/
│       │       └── 61-50-propulsor-duct/
│       ├── ATA_71-POWER_PLANT/
│       │   └── ATA-71-power-plant/
│       │       ├── 71-00-general/
│       │       ├── 71-10-cowling/
│       │       ├── 71-20-mounts/
│       │       ├── 71-30-fire-seals/
│       │       ├── 71-40-attach-fittings/
│       │       ├── 71-50-electrical-harness/
│       │       ├── 71-60-air-intakes/
│       │       └── 71-70-engine-drains/
│       ├── ATA_72-ENGINE_TURBINE_TURBOPROP_DUCTED_UNDUCTED_FAN/
│       │   └── ATA-72-engine/
│       │       ├── 72-00-general/
│       │       ├── 72-10-reduction-gear-shaft-section/
│       │       ├── 72-20-air-inlet-section/
│       │       ├── 72-30-compressor-section/
│       │       ├── 72-40-combustion-section/
│       │       ├── 72-50-turbine-section/
│       │       ├��─ 72-60-accessory-drives/
│       │       ├── 72-70-by-pass-section/
│       │       └── 72-80-propulsor-section-rear-mounted/
│       ├── ATA_73-ENGINE_FUEL_AND_CONTROL/
│       │   └── ATA-73-engine-fuel-control/
│       │       ├── 73-00-general/
│       │       ├── 73-10-distribution/
│       │       ├── 73-20-controlling/
│       │       └── 73-30-indicating/
│       ├── ATA_74-IGNITION/
│       │   └── ATA-74-ignition/
│       │       ├── 74-00-general/
│       │       ├── 74-10-electrical-power-supply/
│       │       ├── 74-20-distribution/
│       │       └── 74-30-switching/
│       ├── ATA_75-AIR/
│       │   └── ATA-75-air/
│       │       ├── 75-00-general/
│       │       ├── 75-10-engine-anti-icing/
│       │       ├── 75-20-cooling/
│       │       ├── 75-30-compressor-control/
│       │       └── 75-40-indicating/
│       ├── ATA_76-ENGINE_CONTROLS/
│       │   └── ATA-76-engine-controls/
│       │       ├── 76-00-general/
│       │       ├── 76-10-power-control/
│       │       └── 76-20-emergency-shutdown/
│       ├── ATA_77-ENGINE_INDICATING/
│       │   └── ATA-77-engine-indicating/
│       │       ├── 77-00-general/
│       │       ├── 77-10-power/
│       │       ├── 77-20-temperature/
│       │       ├── 77-30-analyzers/
│       │       └── 77-40-integrated-engine-instrument-systems/
│       ├── ATA_78-EXHAUST/
│       │   └── ATA-78-exhaust/
│       │       ├── 78-00-general/
│       │       ├── 78-10-collector-nozzle/
│       │       ├── 78-20-noise-suppressor/
│       │       ├── 78-30-thrust-reverser/
│       │       └── 78-40-supplementary-air/
│       ├── ATA_79-OIL/
│       │   └── ATA-79-oil/
│       │       ├── 79-00-general/
│       │       ├── 79-10-storage/
│       │       └── 79-30-indicating/
│       └── ATA_80-STARTING/
│           └── ATA-80-starting/
│               ├── 80-00-general/
│               └── 80-10-cranking/
│
├── I-INFRASTRUCTURES/                                     # Ground support / H₂ logistics / facilities
│   ├── ATA_02-WEIGHT_BALANCE_INFRA/
│   │   └── ATA-02-weight-balance-infra/
│   │       └── 02-00-general/
│   ├── ATA_03-SUPPORT_INFRA/
│   │   └── ATA-03-support-infra/
│   │       └── 03-00-general/
│   ├── ATA_10-PARKING_MOORING_STORAGE_RTS_INFRA/
│   │   └── ATA-10-parking-infra/
│   │       └── 10-00-general/
│   ├── ATA_12-SERVICING_INFRA/
│   │   └── ATA-12-servicing-infra/
│   │       └── 12-00-general/
│   └── ATA_85-H2_GSE_AND_SUPPLY_CHAIN_INFRA/
│       └── ATA-85-h2-gse-supply-chain-infra/
│           └── 85-00-general/
│
└── N-NEURAL_NETWORKS/                                     # AI/ML, DPP, traceability (ATA 95–98)
    ├── ATA_95-AI_ML_MODELS/
    │   └── ATA-95-ai-ml-models/
    │       └── 95-00-general/
    ├── ATA_96-TRACEABILITY_DPP_LEDGER/
    │   └── ATA-96-traceability-dpp-ledger/
    │       └── 96-00-general/
    ├── ATA_97-SYNTHETIC_DATA_VALIDATION/
    │   └── ATA-97-synthetic-data-validation/
    │       └── 97-00-general/
    └── ATA_98-RESERVED_PROGRAM_SLOT/
        └── ATA-98-program-slot/
            └── 98-00-general/
```

---

## Canonical ATA Content Pattern (Sub-Subject Level)

**CSDB lives at sub-subject (subproduct) level.** Each sub-subject carries both SSOT and PUB: 

```
ATA_XX-<SYSTEM>/
└── xx-yy-zz-<sub-subject>/
    ├── SSOT/
    │   ├── LC01_PROBLEM_STATEMENT/
    │   ├── LC02_SYSTEM_REQUIREMENTS/
    │   ├── LC03_SAFETY_RELIABILITY/
    │   ├── ... 
    │   └── LC14_RETIREMENT_CIRCULARITY/
    │
    └── PUB/
        └── <SUB_ID>/                    # AMM / IPC / WDM / TSM / etc.
            ├── CSDB/
            │   ├── DM/                  # Data Modules
            │   ├── PM/                  # Publication Modules
            │   ├── DML/                 # Data Module Lists
            │   ├── BREX/                # Business Rules Exchange
            │   ├── ICN/                 # Illustrations (SVG preferred)
            │   ├── COMMON/              # Reusable primitives
            │   └── APPLICABILITY/       # ACT/PCT/CCT filtering
            ├── EXPORT/                  # Rendered outputs
            └── IETP/
                ├── RUNTIME/             # Viewer application
                ├── PKG/                 # Package manifests
                └── DEPLOY/              # Deployment artifacts
```

---

## Quick Start

### Prerequisites
- Python 3.9+
- Git

### Clone and Setup

```bash
git clone https://github.com/AmedeoPelliccia/AMPEL360-AIR-T.git
cd AMPEL360-AIR-T

pip install -r requirements. txt
bash . github/hooks/setup-hooks.sh
```

### Validate Structure

```bash
python tools/ci/optin_structure_validator.py --check
python tools/ci/optin_structure_validator.py --check --chapter 31
```

### Navigate

```bash
cd OPT-IN_FRAMEWORK/
ls
```

### Entry Points by Role

| Role | Start Here |
|------|------------|
| **Engineers** | [`OPT-IN_FRAMEWORK/README.md`](./OPT-IN_FRAMEWORK/README.md) |
| **Publication Authors** | Example: `.../PUB/AMM/CSDB/README.md` (pattern at each sub-subject) |
| **Program Managers** | [`IMPLEMENTATION_SUMMARY.md`](./IMPLEMENTATION_SUMMARY.md) |
| **CAOS / Airworthiness** | [`CAOS/CAOS_INDEX.md`](./CAOS/CAOS_INDEX. md) |
| **Certification** | `XX-00-10_Certification/` folders |

---

## CAOS — Continuous Airworthiness for Operational Sustainment

**CAOS** is the framework for maintaining airworthiness throughout the operational lifecycle: 

| Domain | Scope |
|--------|-------|
| **Continued Airworthiness** | AD compliance, SB tracking, modification status |
| **Reliability Programs** | MSG-3, condition monitoring, fleet trends |
| **Operational Feedback** | In-service data, SDR/MOR analysis, operator liaison |
| **Technical Services** | Field support, AOG response, technical bulletins |
| **Configuration Control** | As-maintained vs. as-designed reconciliation |

CAOS artifacts reside primarily in: 
- `LC11_MAINTENANCE` — maintenance program sources
- `LC12_CUSTOMER_CARE` — technical services and post-delivery support
- `CAOS/` — cross-cutting CAOS documentation and dashboards

See:  [`CAOS/CAOS_INDEX. md`](./CAOS/CAOS_INDEX.md) • [`CAOS/CAOS_ARCHITECTURE.md`](./CAOS/CAOS_ARCHITECTURE.md) • [`CAOS/CAOS_OPERATIONS_FRAMEWORK.md`](./CAOS/CAOS_OPERATIONS_FRAMEWORK.md)

---

## Publishing Model (CSDB + IETP)

### CSDB (S1000D Common Source Database)

The CSDB is the **single source for modular publications**: 

| Component | Purpose |
|-----------|---------|
| **DM** | Atomic content modules (descriptive, procedural, fault isolation, IPD, etc.) |
| **PM** | Publication structures that assemble DMs into deliverables |
| **DML** | Controlled lists of DMs with status and applicability |
| **BREX** | Business rules for validation and compliance checking |
| **ICN** | Graphics (SVG preferred) referenced by DMs |
| **APPLICABILITY** | ACT/PCT/CCT for product/condition filtering |
| **COMMON** | Reusable content primitives (warnings, cautions, notes) |

### IETP (Interactive Electronic Technical Publication)

HTML/PDF are outputs; the **IETP runtime** is the deliverable software "image" that: 
- Consumes PM/DM sets from CSDB
- Applies applicability rules (ACT/PCT/CCT)
- Provides interactive navigation, search, and filtering
- Is packaged and versioned in `PUB/<SUB_ID>/IETP/`

---

## KNOT → KNU (Controlled Uncertainty Handling)

Work in this repository is managed through **KNOTs** and **KNUs**:

| Concept | Definition |
|---------|------------|
| **KNOT** | A *known unknown* — an identified uncertainty or problem node requiring resolution |
| **KNU** | A *Knowledge Unit* — a concrete artifact that addresses a KNOT |

### How It Works

1. **KNOT Identification**: An uncertainty is logged (e.g., "H₂ tank thermal cycling limits undefined")
2. **KNU Production**: Work produces artifacts in SSOT and/or PUB (requirements, ICDs, analyses, DMs, ICNs, etc.)
3. **KNOT Closure**: The KNOT is "done" when required KNUs exist, are linked, and reduce residual uncertainty to acceptable levels

This provides **traceability from uncertainty to evidence** across the engineering and publication lifecycle.

---

## Standards & Compliance

| Standard | Application |
|----------|-------------|
| **EASA CS-25 / FAA Part 25** | Airworthiness requirements framing |
| **ATA iSpec 2200** | Chapter/section/subject scaffolding for system breakdown |
| **S1000D (+ project BREX)** | Technical publications CSDB (DM/PM/DML/ICN/APPLICABILITY) |
| **DO-178C** | Software considerations in airborne systems |
| **DO-254** | Hardware design assurance |
| **DO-160** | Environmental qualification |
| **ISO 15926** | Industrial data standards |

---

## Key Documentation

| Document | Description |
|----------|-------------|
| [OPT-IN Framework Standard](./OPT-IN_FRAMEWORK_STANDARD.md) | Complete framework specification |
| [Documentation Standard](./AMPEL360_DOCUMENTATION_STANDARD.md) | Formatting and structure guidelines |
| [AI→ASI Transition Proposal](./AI-ASI-TP. md) | AI→ASI transition roadmap:  governance, assurance, and certification-grade adoption across SSOT+PUB |
| [Digital Twin Control Loop](./DIGITAL_TWIN_CONTROL_LOOP.md) | Digital twin architecture and data flows |
| [CAOS Index](./CAOS/CAOS_INDEX.md) | Continuous Airworthiness for Operational Sustainment |
| [CAOS Architecture](./CAOS/CAOS_ARCHITECTURE.md) | CAOS system architecture |
| [CAOS Operations Framework](./CAOS/CAOS_OPERATIONS_FRAMEWORK.md) | CAOS operational playbook |

---

## Contributing

1. **Fork** the repository
2. **Setup hooks**:  `bash .github/hooks/setup-hooks.sh`
3. **Follow** the SSOT + PUB pattern and OPT-IN structure
4. **Validate**:  `python tools/ci/optin_structure_validator.py --check`
5. **Submit** a pull request

### Contribution Rules

| Rule | Guidance |
|------|----------|
| **Narrative docs** | Use Markdown (`.md`) — not `.pdf`, `.docx` |
| **Matrices/logs** | Use CSV (`.csv`) — not `.xlsx` |
| **Graphics** | Prefer SVG for illustrations (ICN) |
| **S1000D content** | Keep XML/BREX compliant under `PUB/**/CSDB/**` |
| **References** | Ensure DM ↔ ICN ↔ PM ↔ DML ↔ APPLICABILITY resolve correctly |
| **Safety-critical** | Include DO-178C compliance tags where applicable |

---

## License

Apache 2.0 — see [LICENSE](./LICENSE).

---

## Acknowledgments

- **Concept & Direction**:  Amedeo Pelliccia
- **AI Assistance**: GitHub Copilot (documentation generation)
- **Framework Design**: OPT-IN Framework

---

<p align="center">
  <strong>AMPEL360 Q100</strong> — Digital engineering, traceability, and publication-grade CSDB for sustainable aviation. 
</p>

<p align="center">
  <em>By Amedeo Pelliccia • AI-Assisted Development</em>
</p>

<p align="center">
  <i>Last updated: 2026-01-10</i>
</p>
