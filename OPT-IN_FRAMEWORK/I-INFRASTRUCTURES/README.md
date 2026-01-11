# I-INFRASTRUCTURES

This axis of the OPT-IN Framework covers **Ground Support, H₂ Logistics, and Facilities** for the AMPEL360 Q100 aircraft.

## Overview

The I-INFRASTRUCTURES axis encompasses all ground-based infrastructure systems required to support hydrogen-electric aircraft operations, including:

- Ground support equipment and facilities
- Leveling and weighing infrastructure
- Parking, mooring, and storage infrastructure
- Servicing facilities
- Fuel cell systems infrastructure
- Hydrogen GSE and supply chain (non-ATA namespace)

## Structure

```
I-INFRASTRUCTURES/
├── README.md
├── 00_INDEX.md
│
├── ATA_03-SUPPORT_INFRA/
│   └── ATA-03-support-infra/
│       ├── 03-00-general/
│       ├── 03-10-reserved-as-required/
│       ├── 03-20-reserved-as-required/
│       ├── 03-30-reserved-as-required/
│       ├── 03-40-reserved-as-required/
│       ├── 03-50-reserved-as-required/
│       ├── 03-60-reserved-as-required/
│       ├── 03-70-reserved-as-required/
│       ├── 03-80-reserved-as-required/
│       └── 03-90-tables-schemas-index/
│
├── ATA_08-LEVELING_AND_WEIGHING_INFRA/
│   └── ATA-08-leveling-weighing-infra/
│       ├── 08-30-gse-equipment-and-tooling/
│       ├── 08-40-metrology-calibration-and-certificates/
│       ├── 08-50-facility-readiness-layout-and-utilities/
│       ├── 08-60-safety-zoning-permits-and-emergency/
│       ├── 08-70-training-competency-and-authorization/
│       ├── 08-80-digital-logs-traceability-and-data-exports/
│       └── 08-90-tables-schemas-index/
│
├── ATA_10-PARKING_MOORING_STORAGE_RTS_INFRA/
│   └── ATA-10-parking-mooring-storage-rts-infra/
│       ├── 10-00-general/
│       ├── 10-10-parking-and-storage-facilities/
│       ├── 10-20-mooring-tie-down-and-stands/
│       ├── 10-30-return-to-service-enablement/
│       ├── 10-40-reserved-as-required/
│       ├── 10-50-reserved-as-required/
│       ├── 10-60-reserved-as-required/
│       ├── 10-70-reserved-as-required/
│       ├── 10-80-reserved-as-required/
│       └── 10-90-tables-schemas-index/
│
├── ATA_12-SERVICING_INFRA/
│   └── ATA-12-servicing-infra/
│       ├── 12-00-general/
│       ├── 12-10-replenishing-equipment-and-points/
│       ├── 12-20-scheduled-servicing-enablement/
│       ├── 12-30-unscheduled-servicing-enablement/
│       ├── 12-40-reserved-as-required/
│       ├── 12-50-reserved-as-required/
│       ├── 12-60-reserved-as-required/
│       ├── 12-70-reserved-as-required/
│       ├── 12-80-reserved-as-required/
│       └── 12-90-tables-schemas-index/
│
├── ATA_85-FUEL_CELL_SYSTEMS_INFRA/
│   └── ATA-85-fuel-cell-systems-infra/
│       ├── 85-00-general/
│       ├── 85-10-test-rigs-and-bench-infrastructure/
│       ├── 85-20-h2-handling-safety-permits-for-fcs/
│       ├── 85-30-power-interface-racks-load-banks/
│       ├── 85-40-thermal-management-test-support-equipment/
│       ├── 85-50-maintenance-support-tooling-and-gse/
│       ├── 85-60-spares-repair-warehouse-enablement/
│       ├── 85-70-training-qualification-and-cert-support/
│       ├── 85-80-digital-traceability-dpp-and-data-exports/
│       └── 85-90-tables-schemas-index/
│
└── IN_H2_GSE_AND_SUPPLY_CHAIN/
    └── IN-h2-gse-supply-chain/
        ├── IN-00-00-general/
        ├── IN-10-00-h2-production-and-sourcing/
        ├── IN-20-00-liquefaction-compression-and-storage/
        ├── IN-30-00-transport-logistics-and-delivery/
        ├── IN-40-00-airport-facilities-civil-works-and-permits/
        ├── IN-50-00-h2-gse-couplings-hoses-interfaces/
        ├── IN-60-00-safety-zoning-emergency-response/
        ├── IN-70-00-quality-assurance-sampling-and-metering/
        ├── IN-80-00-digital-traceability-dpp-and-audit/
        └── IN-90-00-tables-schemas-index/
```

## ATA Chapters and Namespaces Covered

| Chapter/Namespace | Description |
|-------------------|-------------|
| ATA 03 | Support Infrastructure |
| ATA 08 | Leveling and Weighing Infrastructure (complementary only) |
| ATA 10 | Parking, Mooring, Storage & Return to Service Infrastructure |
| ATA 12 | Servicing Infrastructure |
| ATA 85 | Fuel Cell Systems Infrastructure (enablement only) |
| IN (non-ATA) | H₂ GSE and Supply Chain |

## Sub-Subject Structure

Each sub-subject folder contains SSOT (Single Source of Truth) and PUB (Publications) subdirectories:

```
<sub-subject>/
├── SSOT/                              # Lifecycle Engineering Artifacts
│   ├── LC01_PROBLEM_STATEMENT/
│   ├── LC02_SYSTEM_REQUIREMENTS/
│   ├── LC03_SAFETY_RELIABILITY/
│   ├── LC04_DESIGN_DEFINITION/
│   ├── LC05_ANALYSIS_MODELS/
│   ├── LC06_VERIFICATION/
│   ├── LC07_VALIDATION/
│   ├── LC08_CONFIGURATION/
│   ├── LC09_PRODUCTION/
│   ├── LC10_OPERATIONS/
│   ├── LC11_MAINTENANCE/
│   ├── LC12_CUSTOMER_CARE/
│   ├── LC13_TRAINING/
│   └── LC14_RETIREMENT_CIRCULARITY/
│
└── PUB/                               # Controlled Deliverables
    └── AMM/
        ├── CSDB/
        │   ├── APPLICABILITY/
        │   ├── BREX/
        │   ├── COMMON/
        │   ├── DM/
        │   ├── DML/
        │   ├── ICN/
        │   └── PM/
        ├── EXPORT/
        └── IETP/
            ├── DEPLOY/
            ├── PKG/
            └── RUNTIME/
```

## Related Documentation

- See the main [OPT-IN Framework](../README.md) documentation for overall structure
- Refer to [00_INDEX.md](./00_INDEX.md) for the complete index
- Refer to individual ATA chapter folders for detailed content
