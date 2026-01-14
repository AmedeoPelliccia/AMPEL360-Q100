# IETP Runtime - Interactive Electronic Technical Publication

## Overview

The IETP Runtime is a React-based component library for creating Interactive Electronic Technical Publications (IETP) for the AMPEL360 Q100 aircraft project. It provides a rich set of components for embedding multimedia content, creating interactive UI elements, and rendering markdown documentation with embedded components.

## Features

- **MediaEmbed**: Video and audio embedding with responsive scaling, autoplay control, and user controls
- **Tooltip**: Contextual information display on hover
- **Popup**: Modal dialogs for detailed information
- **CollapsibleSection**: Expandable content sections for organized documentation
- **DynamicLink**: Intelligent navigation with smooth scrolling and external link handling
- **MarkdownViewer**: Markdown rendering with support for embedded IETP components

## Installation

```bash
cd IETP_RUNTIME
npm install
npm run build
```

## Usage

### Basic Import

```typescript
import {
  MediaEmbed,
  Tooltip,
  Popup,
  CollapsibleSection,
  DynamicLink,
  MarkdownViewer
} from 'ampel360-ietp-runtime';
```

### MediaEmbed Component

Embed video or audio content with full control over playback behavior.

```tsx
// Video embedding
<MediaEmbed
  src="/media/preflight-safety.mp4"
  type="video"
  title="Pre-Flight Safety Briefing"
  autoplay="muted"
  controls={true}
  responsive={true}
  poster="/media/thumbnails/safety-briefing.jpg"
  width="100%"
  height="450px"
/>

// Audio embedding
<MediaEmbed
  src="/media/fuel-cell-operation.mp3"
  type="audio"
  title="Fuel Cell Operation Guide"
  controls={true}
  loop={false}
/>
```

**Props:**
- `src` (string, required): Media file URL
- `type` ('video' | 'audio', required): Media type
- `title` (string): Optional title/caption
- `autoplay` ('on' | 'off' | 'muted'): Deterministic autoplay behavior
- `controls` (boolean): Show playback controls (default: true)
- `loop` (boolean): Loop playback (default: false)
- `width` (string | number): Player width (default: '100%')
- `height` (string | number): Player height
- `responsive` (boolean): Enable responsive scaling (default: true)
- `poster` (string): Video thumbnail (video only)

### Tooltip Component

Display contextual information on hover.

```tsx
<Tooltip content="Hydrogen Proton Exchange Membrane Fuel Cell" position="top">
  <span>H₂ PEM Fuel Cell</span>
</Tooltip>

<Tooltip 
  content={<div>
    <strong>BWB Design</strong>
    <p>Blended Wing Body provides high aerodynamic efficiency</p>
  </div>}
  position="right"
  delay={300}
>
  <span>BWB Architecture</span>
</Tooltip>
```

**Props:**
- `content` (string | ReactNode, required): Tooltip content
- `children` (ReactNode, required): Trigger element
- `position` ('top' | 'bottom' | 'left' | 'right'): Position (default: 'top')
- `delay` (number): Show delay in milliseconds (default: 200)

### Popup Component

Modal popup for detailed information or interactive content.

```tsx
<Popup
  trigger={<button>View System Architecture</button>}
  title="H₂ Fuel Cell System Architecture"
  width="800px"
>
  <h3>System Components</h3>
  <ul>
    <li>PEM Stack Assembly</li>
    <li>Hydrogen Storage System</li>
    <li>Thermal Management</li>
    <li>Power Electronics</li>
  </ul>
  <MediaEmbed
    src="/media/fuel-cell-diagram.mp4"
    type="video"
    controls={true}
  />
</Popup>
```

**Props:**
- `trigger` (ReactNode, required): Element that opens the popup
- `children` (ReactNode, required): Popup content
- `title` (string): Popup title
- `width` (string | number): Popup width (default: '500px')
- `defaultOpen` (boolean): Initially open (default: false)
- `closeOnOverlayClick` (boolean): Close when clicking overlay (default: true)

### CollapsibleSection Component

Expandable content sections for organized documentation.

```tsx
<CollapsibleSection title="Safety Procedures" defaultExpanded={true}>
  <ol>
    <li>Ensure all power systems are offline</li>
    <li>Verify hydrogen valves are closed</li>
    <li>Check pressure relief systems</li>
    <li>Confirm area ventilation is operational</li>
  </ol>
</CollapsibleSection>

<CollapsibleSection 
  title="⚠️ Critical Warnings"
  defaultExpanded={false}
  showIcon={true}
>
  <p>Do not operate fuel cell system without proper ventilation...</p>
</CollapsibleSection>
```

**Props:**
- `title` (string | ReactNode, required): Section title
- `children` (ReactNode, required): Collapsible content
- `defaultExpanded` (boolean): Initially expanded (default: false)
- `showIcon` (boolean): Show expand/collapse icon (default: true)

### DynamicLink Component

Intelligent navigation with smooth scrolling for internal links.

```tsx
// Internal section link
<DynamicLink href="#ata-25-10" type="internal">
  Jump to Flight Compartment Section
</DynamicLink>

// External resource
<DynamicLink href="https://example.com/manual.pdf" type="external" newTab>
  View External Manual
</DynamicLink>

// Document reference
<DynamicLink href="./DMC-ATA-25-10-00.xml" type="document">
  View Data Module
</DynamicLink>
```

**Props:**
- `href` (string, required): Target URL or section ID
- `children` (ReactNode, required): Link content
- `type` ('internal' | 'external' | 'document'): Link type (default: 'internal')
- `newTab` (boolean): Open in new tab (default: false)
- `smoothScroll` (boolean): Smooth scroll for internal links (default: true)

### MarkdownViewer Component

Render markdown with embedded IETP components.

```tsx
const markdownContent = `
# ATA 25-10: Flight Compartment

## Overview

The flight compartment features a modern glass cockpit design with integrated avionics.

<MediaEmbed src="/media/cockpit-tour.mp4" type="video" title="Cockpit Tour" autoplay="muted" />

## Key Systems

The <Tooltip content="Electronic Flight Instrument System">EFIS</Tooltip> provides primary flight display information.

<CollapsibleSection title="Display Units">

### Primary Flight Display (PFD)
- Attitude indicator
- Airspeed indicator
- Altitude indicator
- Vertical speed indicator

### Navigation Display (ND)
- Route information
- Weather radar
- Traffic information

</CollapsibleSection>

## Safety Considerations

<Popup trigger={<button>⚠️ View Critical Warnings</button>} title="Critical Safety Warnings">
  <p><strong>WARNING:</strong> Do not operate controls during system tests...</p>
</Popup>

For more information, see [ATA 25-00 General](#ata-25-00).
`;

<MarkdownViewer content={markdownContent} />
```

**Props:**
- `content` (string, required): Markdown content
- `allowHtml` (boolean): Allow HTML in markdown (default: true)
- `components` (object): Custom component overrides

## Markdown Syntax for Embedded Components

### MediaEmbed in Markdown

```markdown
<MediaEmbed 
  src="/media/video.mp4" 
  type="video" 
  title="Demo Video"
  autoplay="muted"
  controls="true"
  responsive="true"
/>
```

### Tooltip in Markdown

```markdown
The <Tooltip content="Blended Wing Body">BWB</Tooltip> design...
```

### CollapsibleSection in Markdown

```markdown
<CollapsibleSection title="Details" defaultExpanded="false">
Content here...
</CollapsibleSection>
```

## Architecture

The IETP Runtime is built on:
- **React 18+**: Modern React with hooks and JSX transform
- **TypeScript**: Full type safety
- **react-markdown**: Markdown parsing and rendering
- **remark-gfm**: GitHub Flavored Markdown support
- **rehype-raw**: HTML support in markdown

## Integration with S1000D

The IETP Runtime is designed to work with S1000D Data Modules:

1. **CSDB Structure**: Components reference content in `PUB/*/CSDB/`
2. **Data Modules**: Markdown files can be generated from DM XML
3. **ICN References**: Media files are stored in `CSDB/ICN/`
4. **Applicability**: Components support filtering based on ACT/PCT/CCT

## Example IETP Page Structure

```
ATA-25-10-00/
├── PUB/
│   └── AMM/
│       ├── CSDB/
│       │   ├── DM/           # Data Modules (XML)
│       │   ├── ICN/          # Graphics and media
│       │   └── PM/           # Publication Modules
│       ├── EXPORT/
│       │   └── index.html    # Generated IETP page
│       └── IETP/
│           ├── config.json   # IETP configuration
│           └── assets/       # Runtime assets
```

## Best Practices

1. **Responsive Design**: Always use `responsive={true}` for MediaEmbed
2. **Accessibility**: Provide meaningful titles and alt text
3. **Performance**: Lazy load media files when possible
4. **Browser Compatibility**: Test autoplay across browsers (may be blocked)
5. **File Paths**: Use relative paths for CSDB references
6. **Error Handling**: Provide fallback content for media load failures

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with HTML5 video/audio support

## License

Creative Commons Zero v1.0 Universal (CC0-1.0)

## Contributing

See the main AMPEL360 Q100 repository for contribution guidelines.

## Support

For issues or questions, please open an issue in the AMPEL360-Q100 repository.
