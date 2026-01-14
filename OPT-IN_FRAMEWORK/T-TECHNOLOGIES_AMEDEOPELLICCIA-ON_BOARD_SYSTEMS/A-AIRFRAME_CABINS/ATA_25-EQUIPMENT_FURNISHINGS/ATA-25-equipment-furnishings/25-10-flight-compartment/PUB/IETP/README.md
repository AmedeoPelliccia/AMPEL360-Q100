# IETP Integration for ATA 25-10: Flight Compartment

This directory contains the IETP (Interactive Electronic Technical Publication) runtime configuration for the Flight Compartment section.

## Quick Links

- **IETP Runtime**: `/IETP_RUNTIME/` (root of repository)
- **Documentation**: `/IETP_RUNTIME/README.md`
- **Developer Guide**: `/IETP_RUNTIME/DEVELOPER_GUIDE.md`
- **Quick Start**: `/IETP_RUNTIME/QUICKSTART.md`

## Setup

### 1. Install Dependencies

From the IETP Runtime directory:

```bash
cd /IETP_RUNTIME
npm install
npm run build
```

### 2. Use Components

Import the IETP components in your React application:

```tsx
import {
  MediaEmbed,
  Tooltip,
  Popup,
  CollapsibleSection,
  DynamicLink,
  MarkdownViewer
} from '../../../../../IETP_RUNTIME/dist';
```

### 3. Create IETP Content

Create interactive documentation using the components. See `examples/` for templates.

## Example: Flight Compartment IETP Page

```tsx
import React from 'react';
import { MediaEmbed, Tooltip, CollapsibleSection } from '../../../../../IETP_RUNTIME/dist';

function FlightCompartmentPage() {
  return (
    <div className="ietp-page">
      <h1>ATA 25-10: Flight Compartment</h1>
      
      <section>
        <h2>Overview</h2>
        <p>
          The AMPEL360 Q100 flight compartment features a modern 
          <Tooltip content="Electronic Flight Instrument System">
            EFIS
          </Tooltip>
          glass cockpit design.
        </p>
        
        <MediaEmbed
          src="../CSDB/ICN/video/cockpit-tour.mp4"
          type="video"
          title="Flight Compartment Tour"
          autoplay="muted"
          controls={true}
          responsive={true}
        />
      </section>
      
      <section>
        <h2>Safety Procedures</h2>
        
        <CollapsibleSection title="Pre-Flight Checklist" defaultExpanded={true}>
          <ol>
            <li>Verify all seats are adjusted and locked</li>
            <li>Check harnesses for damage</li>
            <li>Test emergency equipment</li>
            <li>Confirm circuit breakers are set</li>
          </ol>
        </CollapsibleSection>
        
        <CollapsibleSection title="Emergency Procedures">
          <h3>Emergency Egress</h3>
          <ol>
            <li>Release 5-point harness</li>
            <li>Open cockpit door</li>
            <li>Exit in order: Captain, F/O, Observer</li>
          </ol>
          
          <MediaEmbed
            src="../CSDB/ICN/video/emergency-egress.mp4"
            type="video"
            title="Emergency Egress Demonstration"
            controls={true}
          />
        </CollapsibleSection>
      </section>
    </div>
  );
}

export default FlightCompartmentPage;
```

## Markdown Integration

Alternatively, write content in Markdown with embedded components:

```markdown
# ATA 25-10: Flight Compartment

## Overview

<MediaEmbed 
  src="../CSDB/ICN/video/cockpit-tour.mp4" 
  type="video" 
  title="Flight Compartment Tour"
  autoplay="muted"
/>

The flight compartment features <Tooltip content="Electronic Flight Instrument System">EFIS</Tooltip> displays.

<CollapsibleSection title="Safety Procedures">
1. Check seats are locked
2. Verify harnesses are secure
</CollapsibleSection>
```

Then render with:

```tsx
import { MarkdownViewer } from '../../../../../IETP_RUNTIME/dist';
import markdownContent from './content.md';

<MarkdownViewer content={markdownContent} />
```

## Media File Organization

Store media files in the CSDB/ICN directory:

```
25-10-flight-compartment/
└── PUB/
    ├── CSDB/
    │   └── ICN/                    # Media files
    │       ├── video/
    │       │   ├── cockpit-tour.mp4
    │       │   ├── emergency-egress.mp4
    │       │   └── efis-overview.mp4
    │       ├── audio/
    │       │   └── safety-briefing.mp3
    │       └── images/
    │           └── cockpit-layout.svg
    └── IETP/
        ├── config.json            # IETP configuration
        ├── index.html             # Main IETP page
        └── README.md              # This file
```

## Configuration

Customize IETP behavior in `config.json`:

```json
{
  "section": "ATA-25-10",
  "title": "Flight Compartment",
  "version": "1.0.0",
  "paths": {
    "media": "../CSDB/ICN/",
    "dataModules": "../CSDB/DM/"
  },
  "features": {
    "autoplay": "muted",
    "responsiveMedia": true,
    "interactiveComponents": true
  }
}
```

See `/IETP_RUNTIME/config.schema.json` for full configuration options.

## Component Reference

| Component | Purpose | Documentation |
|-----------|---------|---------------|
| MediaEmbed | Video/audio embedding | [README](../../../../../IETP_RUNTIME/README.md#mediaembed-component) |
| Tooltip | Contextual information | [README](../../../../../IETP_RUNTIME/README.md#tooltip-component) |
| Popup | Modal dialogs | [README](../../../../../IETP_RUNTIME/README.md#popup-component) |
| CollapsibleSection | Expandable content | [README](../../../../../IETP_RUNTIME/README.md#collapsiblesection-component) |
| DynamicLink | Smart navigation | [README](../../../../../IETP_RUNTIME/README.md#dynamiclink-component) |
| MarkdownViewer | Markdown rendering | [README](../../../../../IETP_RUNTIME/README.md#markdownviewer-component) |

## Support

- **Examples**: `/IETP_RUNTIME/examples/`
- **API Docs**: `/IETP_RUNTIME/README.md`
- **Best Practices**: `/IETP_RUNTIME/DEVELOPER_GUIDE.md`
- **Issues**: Open an issue in the repository

---

*Part of AMPEL360 Q100 IETP System*
