# IETP Developer Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Component Library](#component-library)
4. [Creating IETP Content](#creating-ietp-content)
5. [Markdown Integration](#markdown-integration)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## Introduction

The IETP (Interactive Electronic Technical Publication) Runtime provides a comprehensive toolkit for creating interactive, multimedia-rich technical documentation for the AMPEL360 Q100 aircraft.

### Key Features

- **Multimedia Embedding**: Seamlessly embed videos and audio files
- **Interactive Components**: Tooltips, popups, and collapsible sections
- **Markdown Support**: Write documentation in Markdown with embedded components
- **S1000D Compatible**: Designed to work with S1000D Data Modules
- **Responsive Design**: Automatically adapts to different screen sizes
- **Accessibility**: Built with ARIA attributes and keyboard navigation

## Getting Started

### Installation

```bash
cd /IETP_RUNTIME
npm install
```

### Development Mode

```bash
npm run dev
```

This starts Rollup in watch mode, automatically rebuilding when you make changes.

### Production Build

```bash
npm run build
```

Generates optimized bundles in the `dist/` directory.

### Project Structure

```
IETP_RUNTIME/
├── src/
│   ├── components/
│   │   ├── MediaEmbed.tsx           # Video/audio component
│   │   ├── Tooltip.tsx              # Tooltip component
│   │   ├── Popup.tsx                # Modal popup component
│   │   ├── CollapsibleSection.tsx   # Collapsible content
│   │   ├── DynamicLink.tsx          # Smart navigation
│   │   └── MarkdownViewer.tsx       # Markdown renderer
│   └── index.ts                     # Main export
├── examples/
│   ├── simple-example.html          # Basic HTML example
│   └── markdown-example.md          # Markdown example
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## Component Library

### MediaEmbed

Embeds video or audio content with full playback control.

**Basic Usage:**

```tsx
import { MediaEmbed } from 'ampel360-ietp-runtime';

<MediaEmbed
  src="/media/safety-video.mp4"
  type="video"
  title="Safety Procedures"
  autoplay="muted"
  controls={true}
  responsive={true}
/>
```

**Autoplay Options:**

- `'off'` - No autoplay (default)
- `'on'` - Autoplay with sound (may be blocked by browser)
- `'muted'` - Autoplay without sound (recommended)

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | required | Media file URL |
| type | 'video' \| 'audio' | required | Media type |
| title | string | undefined | Optional caption |
| autoplay | 'on' \| 'off' \| 'muted' | 'off' | Autoplay behavior |
| controls | boolean | true | Show controls |
| loop | boolean | false | Loop playback |
| width | string \| number | '100%' | Player width |
| height | string \| number | auto | Player height |
| responsive | boolean | true | Responsive scaling |
| poster | string | undefined | Video thumbnail |

### Tooltip

Displays contextual information on hover.

**Basic Usage:**

```tsx
import { Tooltip } from 'ampel360-ietp-runtime';

<Tooltip content="Hydrogen Proton Exchange Membrane" position="top">
  <span>H₂ PEM</span>
</Tooltip>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | string \| ReactNode | required | Tooltip content |
| children | ReactNode | required | Trigger element |
| position | 'top' \| 'bottom' \| 'left' \| 'right' | 'top' | Position |
| delay | number | 200 | Show delay (ms) |

### Popup

Modal popup for detailed information.

**Basic Usage:**

```tsx
import { Popup } from 'ampel360-ietp-runtime';

<Popup
  trigger={<button>View Details</button>}
  title="System Architecture"
  width="600px"
>
  <p>Detailed information here...</p>
</Popup>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| trigger | ReactNode | required | Element that opens popup |
| children | ReactNode | required | Popup content |
| title | string | undefined | Popup title |
| width | string \| number | '500px' | Popup width |
| defaultOpen | boolean | false | Initially open |
| closeOnOverlayClick | boolean | true | Close on overlay click |

### CollapsibleSection

Expandable content sections.

**Basic Usage:**

```tsx
import { CollapsibleSection } from 'ampel360-ietp-runtime';

<CollapsibleSection title="Safety Procedures" defaultExpanded={true}>
  <ol>
    <li>Step 1...</li>
    <li>Step 2...</li>
  </ol>
</CollapsibleSection>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string \| ReactNode | required | Section title |
| children | ReactNode | required | Collapsible content |
| defaultExpanded | boolean | false | Initially expanded |
| showIcon | boolean | true | Show expand icon |

### DynamicLink

Intelligent navigation with smooth scrolling.

**Basic Usage:**

```tsx
import { DynamicLink } from 'ampel360-ietp-runtime';

// Internal link
<DynamicLink href="#section-25-10" type="internal">
  Jump to Section
</DynamicLink>

// External link
<DynamicLink href="https://example.com/manual.pdf" type="external">
  External Manual
</DynamicLink>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| href | string | required | Target URL or section ID |
| children | ReactNode | required | Link content |
| type | 'internal' \| 'external' \| 'document' | 'internal' | Link type |
| newTab | boolean | false | Open in new tab |
| smoothScroll | boolean | true | Smooth scroll for internal |

### MarkdownViewer

Renders markdown with embedded components.

**Basic Usage:**

```tsx
import { MarkdownViewer } from 'ampel360-ietp-runtime';

const content = `
# Title

<MediaEmbed src="/video.mp4" type="video" />

Regular markdown content...
`;

<MarkdownViewer content={content} />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | string | required | Markdown content |
| allowHtml | boolean | true | Allow HTML in markdown |
| components | object | {} | Custom component overrides |

## Creating IETP Content

### HTML-Based IETP

For creating standalone HTML IETP pages:

```html
<!DOCTYPE html>
<html>
<head>
  <title>ATA 25-10: Flight Compartment</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="/IETP_RUNTIME/dist/index.js"></script>
</head>
<body>
  <div id="root"></div>
  <script>
    const { MediaEmbed } = IETPRuntime;
    
    ReactDOM.render(
      React.createElement(MediaEmbed, {
        src: '/media/video.mp4',
        type: 'video',
        title: 'Demo Video'
      }),
      document.getElementById('root')
    );
  </script>
</body>
</html>
```

### React Application

For integrating into a React application:

```tsx
import React from 'react';
import { MediaEmbed, CollapsibleSection, MarkdownViewer } from 'ampel360-ietp-runtime';

function FlightCompartmentPage() {
  return (
    <div>
      <h1>ATA 25-10: Flight Compartment</h1>
      
      <MediaEmbed
        src="/media/cockpit-tour.mp4"
        type="video"
        title="Cockpit Tour"
        autoplay="muted"
        responsive={true}
      />
      
      <CollapsibleSection title="Safety Procedures">
        <ol>
          <li>Check seats are locked</li>
          <li>Verify harnesses are secure</li>
        </ol>
      </CollapsibleSection>
    </div>
  );
}
```

## Markdown Integration

### Writing Markdown with Components

The MarkdownViewer supports custom HTML-like syntax for embedding components:

```markdown
# System Overview

<MediaEmbed 
  src="/media/intro.mp4" 
  type="video" 
  title="Introduction"
  autoplay="muted"
/>

The <Tooltip content="Hydrogen fuel cell">H₂ PEM</Tooltip> system...

<CollapsibleSection title="Technical Details">
Detailed information here...
</CollapsibleSection>
```

### Component Syntax in Markdown

**MediaEmbed:**
```markdown
<MediaEmbed 
  src="/path/to/media.mp4"
  type="video"
  title="Video Title"
  autoplay="muted"
  controls="true"
  responsive="true"
/>
```

**Tooltip:**
```markdown
<Tooltip content="Explanation text">Term</Tooltip>
```

**CollapsibleSection:**
```markdown
<CollapsibleSection title="Section Title" defaultExpanded="false">
Content goes here...
</CollapsibleSection>
```

**Popup:**
```markdown
<Popup trigger={<button>Open</button>} title="Popup Title">
Content goes here...
</Popup>
```

### Markdown Best Practices

1. **Use GitHub Flavored Markdown**: Tables, task lists, and strikethrough are supported
2. **Semantic Headings**: Use proper heading hierarchy (h1 → h2 → h3)
3. **Alt Text**: Always provide descriptive titles for media
4. **Internal Links**: Use `#section-id` for same-page navigation
5. **External Links**: Clearly mark external links with indicators

## Best Practices

### Performance

1. **Lazy Loading**: Use the `loading="lazy"` attribute for images
2. **Video Posters**: Always provide poster images for videos
3. **Optimize Media**: Compress videos and use appropriate formats
4. **Bundle Size**: Only import components you need

```tsx
// Good - only import what you need
import { MediaEmbed, Tooltip } from 'ampel360-ietp-runtime';

// Avoid - imports everything
import * as IETP from 'ampel360-ietp-runtime';
```

### Accessibility

1. **Keyboard Navigation**: All interactive components support keyboard
2. **ARIA Labels**: Provide descriptive labels for screen readers
3. **Color Contrast**: Ensure sufficient contrast for text
4. **Focus Indicators**: Don't remove default focus outlines

```tsx
// Good
<button aria-label="View safety procedures">View Details</button>

// Avoid
<button>Click here</button>
```

### Responsive Design

1. **Always Enable Responsive**: Set `responsive={true}` for MediaEmbed
2. **Flexible Widths**: Use percentages instead of fixed pixels
3. **Test on Mobile**: Verify all components work on mobile devices
4. **Touch Targets**: Ensure buttons are at least 44×44 pixels

### Content Organization

1. **Use Collapsible Sections**: Group related content
2. **Progressive Disclosure**: Show summary first, details on demand
3. **Clear Navigation**: Provide table of contents for long documents
4. **Consistent Structure**: Follow ATA chapter patterns

## Troubleshooting

### Video Won't Autoplay

**Problem**: Video doesn't autoplay even with `autoplay="on"`

**Solution**: Use `autoplay="muted"` instead. Most browsers block autoplay with sound.

```tsx
<MediaEmbed
  src="/video.mp4"
  type="video"
  autoplay="muted"  // Recommended
/>
```

### Components Not Rendering in Markdown

**Problem**: Custom components appear as plain text in markdown

**Solution**: Ensure `allowHtml={true}` in MarkdownViewer:

```tsx
<MarkdownViewer content={markdown} allowHtml={true} />
```

### Build Errors

**Problem**: TypeScript compilation errors

**Solution**: 
1. Ensure all dependencies are installed: `npm install`
2. Check TypeScript version compatibility: `npm list typescript`
3. Clear build cache: `rm -rf dist/ && npm run build`

### Tooltip Not Positioning Correctly

**Problem**: Tooltip appears in wrong location

**Solution**: Ensure parent container has `position: relative`:

```css
.container {
  position: relative;
}
```

### Media Files Not Loading

**Problem**: 404 errors for media files

**Solution**:
1. Check file paths are correct relative to HTML file
2. Verify media files are in correct directory (typically `CSDB/ICN/`)
3. Check file extensions match (`. mp4`, `.mp3`, etc.)

## Additional Resources

- [S1000D Specification](http://www.s1000d.org/)
- [ATA iSpec 2200](https://publications.airlines.org/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

For issues or questions:
1. Check this guide first
2. Review examples in `/IETP_RUNTIME/examples/`
3. Open an issue in the AMPEL360-Q100 repository

---

*Last Updated: 2026-01-14*
