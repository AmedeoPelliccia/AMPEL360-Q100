# ATA 25-10: Flight Compartment

## Overview

The AMPEL360 Q100 flight compartment features a state-of-the-art glass cockpit design optimized for the unique **BWB** (Blended Wing Body) configuration.

<MediaEmbed 
  src="/media/cockpit-tour.mp4" 
  type="video" 
  title="Flight Compartment Overview Tour"
  autoplay="muted"
  controls="true"
  responsive="true"
  width="100%"
/>

## Key Systems

### Electronic Flight Instrument System (EFIS)

The <Tooltip content="Electronic Flight Instrument System - Primary flight display and navigation">EFIS</Tooltip> provides comprehensive flight information across six high-resolution displays.

<CollapsibleSection title="Display Configuration" defaultExpanded="true">

#### Normal Mode Display Layout

1. **PFD (Captain)** - Primary flight data for left seat
2. **ND (Captain)** - Navigation and route information  
3. **MFD (Upper)** - Systems, EICAS, checklist display
4. **MFD (Lower)** - Secondary systems, backup displays
5. **ND (F/O)** - Navigation and route information
6. **PFD (F/O)** - Primary flight data for right seat

Each display can be reconfigured in case of failures to maintain essential flight information.

</CollapsibleSection>

### Control Systems

<CollapsibleSection title="Primary Flight Controls">

#### Sidestick Controllers

Active sidestick controllers with force feedback provide pitch and roll commands to the fly-by-wire system.

<MediaEmbed 
  src="/media/sidestick-operation.mp3" 
  type="audio" 
  title="Audio Guide: Sidestick Operation"
  controls="true"
/>

**Key Features:**
- Force feedback: 5-15 N operational range
- Priority takeover logic
- Independent operation for each pilot

</CollapsibleSection>

<CollapsibleSection title="Throttle Quadrant">

The center pedestal throttle quadrant controls the distributed electric propulsion system powered by <Tooltip content="Hydrogen Proton Exchange Membrane Fuel Cells">H₂ PEM fuel cells</Tooltip>.

**Power Settings:**
- IDLE - Minimum power
- MCT - Maximum Continuous Thrust
- TOGA - Takeoff/Go-Around

</CollapsibleSection>

## Safety Procedures

> **⚠️ WARNING:** Do not adjust seat positions during flight. Ensure all seat adjustments are complete and locked before takeoff.

> **⚡ CAUTION:** The H₂ fuel cell system requires special handling procedures. Refer to [ATA 28-00](./ATA-28-00-fuel.md) for hydrogen safety protocols.

<CollapsibleSection title="Emergency Egress Procedure">

### Steps for Emergency Evacuation

1. Release 5-point harness (single-point release)
2. Open side cockpit door (pull red handle)
3. Deploy emergency escape rope (if required)
4. Exit in order: Captain, F/O, Observer
5. Move to safe distance (min 100m from aircraft)

<MediaEmbed 
  src="/media/emergency-egress.mp4" 
  type="video" 
  title="Emergency Egress Demonstration"
  controls="true"
  width="100%"
  height="400px"
/>

</CollapsibleSection>

## Technical Specifications

| Component | Specification | Notes |
|-----------|--------------|-------|
| Seat Positions | 3 (Captain, F/O, Observer) | All with adjustable headrests |
| Display Count | 6 × 10.4" LCD | Full redundancy |
| Sidestick Force | 5-15 N | Adjustable sensitivity |
| Window Material | Polycarbonate laminate | Bird-strike resistant |
| Emergency Egress | <120 seconds | Both crew members |

## Related Documentation

For more information, see:

- [ATA 25-00: Equipment & Furnishings - General](./ATA-25-00-general.md)
- [ATA 27-00: Flight Controls](./ATA-27-00-flight-controls.md) 
- [ATA 31-00: Indicating & Recording Systems](./ATA-31-00-indicating-recording.md)
- [ATA 34-00: Navigation](./ATA-34-00-navigation.md)

<Popup 
  trigger={<button>📋 View Complete Pre-Flight Checklist</button>}
  title="Pre-Flight Checklist - Flight Compartment"
  width="600px"
>

### External Inspection
- [ ] Windows - Clean, no cracks
- [ ] Cockpit door - Secure, hinges lubricated
- [ ] External lights - Functional

### Internal Setup
- [ ] Seats - Adjusted and locked
- [ ] Harnesses - Inspected, no damage
- [ ] Rudder pedals - Adjusted for both pilots
- [ ] Circuit breakers - All in (unless MEL)
- [ ] Fire extinguisher - Charged, accessible
- [ ] Oxygen masks - Tested, pressure checked

### Avionics & Displays
- [ ] All displays - Powered up, BIT passed
- [ ] EFIS - Configuration verified
- [ ] Navigation - Flight plan loaded
- [ ] Communications - Frequencies set

</Popup>

---

**Document Information:**
- DMC: DMC-AMPEL360-A-25-10-00-00A-040A-A
- Issue Date: 2026-01-14
- Status: Draft
- Responsible: STK_SE

*This document is part of the AMPEL360 Q100 IETP (Interactive Electronic Technical Publication) system.*
