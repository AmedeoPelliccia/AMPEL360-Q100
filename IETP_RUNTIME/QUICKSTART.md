# IETP Quick Start Guide

## 5-Minute Setup

Get started with IETP (Interactive Electronic Technical Publication) in just a few minutes.

### Step 1: Install Dependencies

```bash
cd /path/to/AMPEL360-Q100/IETP_RUNTIME
npm install
```

### Step 2: Build the Runtime

```bash
npm run build
```

This creates the component library in `dist/` directory.

### Step 3: Create Your First IETP Page

Create a new file `my-ietp-page.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First IETP Page</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    video, audio {
      width: 100%;
      max-width: 800px;
    }
  </style>
</head>
<body>
  <h1>ATA 25-10: Flight Compartment</h1>
  
  <!-- Video Example -->
  <h2>Cockpit Tour</h2>
  <video controls>
    <source src="your-video.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
  
  <!-- Audio Example -->
  <h2>Safety Briefing</h2>
  <audio controls>
    <source src="your-audio.mp3" type="audio/mpeg">
    Your browser does not support audio.
  </audio>
</body>
</html>
```

### Step 4: Open in Browser

Open `my-ietp-page.html` in your web browser to see your IETP page with embedded media!

## Next Steps

### Add Interactive Components

For a React application, import and use the components:

```tsx
import React from 'react';
import { 
  MediaEmbed, 
  Tooltip, 
  CollapsibleSection 
} from './IETP_RUNTIME/dist';

function MyIETPPage() {
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
      
      <p>
        The flight compartment features a modern 
        <Tooltip content="Electronic Flight Instrument System">
          EFIS
        </Tooltip>
        display.
      </p>
      
      <CollapsibleSection title="Safety Procedures">
        <ol>
          <li>Check all seats are locked</li>
          <li>Verify harnesses are secure</li>
          <li>Test emergency equipment</li>
        </ol>
      </CollapsibleSection>
    </div>
  );
}
```

### Use Markdown

Write your content in Markdown with embedded components:

```markdown
# Flight Compartment

<MediaEmbed src="/video.mp4" type="video" title="Tour" />

The <Tooltip content="Glass cockpit display">EFIS</Tooltip> system...

<CollapsibleSection title="Details">
More information here...
</CollapsibleSection>
```

Then render it with:

```tsx
import { MarkdownViewer } from './IETP_RUNTIME/dist';

<MarkdownViewer content={markdownContent} />
```

## Common Use Cases

### 1. Embedding a Training Video

```tsx
<MediaEmbed
  src="/media/training/fuel-cell-operation.mp4"
  type="video"
  title="H₂ Fuel Cell Operation"
  controls={true}
  responsive={true}
  poster="/media/thumbnails/fuel-cell.jpg"
/>
```

### 2. Adding Tooltips for Technical Terms

```tsx
The <Tooltip content="Hydrogen Proton Exchange Membrane">
  H₂ PEM
</Tooltip> fuel cell generates electrical power.
```

### 3. Creating Collapsible Safety Warnings

```tsx
<CollapsibleSection title="⚠️ Safety Warning" defaultExpanded={true}>
  <p>Do not operate without proper ventilation...</p>
</CollapsibleSection>
```

### 4. Adding Interactive Diagrams

```tsx
<Popup
  trigger={<button>View System Diagram</button>}
  title="Fuel Cell System Architecture"
  width="800px"
>
  <img src="/diagrams/fuel-cell-system.svg" alt="System diagram" />
  <p>Click on any component for more details...</p>
</Popup>
```

## Tips for Success

1. **Start Simple**: Begin with basic HTML and media embedding
2. **Test Early**: View your IETP pages in different browsers
3. **Optimize Media**: Compress videos before embedding
4. **Use Responsive Design**: Set `responsive={true}` for all media
5. **Follow ATA Structure**: Organize content by ATA chapters

## Getting Help

- **Examples**: Check `/IETP_RUNTIME/examples/`
- **Documentation**: Read `/IETP_RUNTIME/README.md`
- **Developer Guide**: See `/IETP_RUNTIME/DEVELOPER_GUIDE.md`
- **Issues**: Open an issue in the repository

## Sample Project Structure

```
ATA-25-10-flight-compartment/
├── PUB/
│   └── AMM/
│       ├── CSDB/
│       │   ├── DM/                    # Data Modules (XML)
│       │   ├── ICN/                   # Media files
│       │   │   ├── video/
│       │   │   │   └── cockpit-tour.mp4
│       │   │   └── audio/
│       │   │       └── safety-brief.mp3
│       │   └── PM/                    # Publication Modules
│       ├── EXPORT/
│       │   └── index.html            # Your IETP page
│       └── IETP/
│           ├── config.json           # IETP configuration
│           └── README.md             # Integration notes
```

## Quick Reference

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| MediaEmbed | Video/audio | src, type, autoplay |
| Tooltip | Contextual help | content, position |
| Popup | Modal dialogs | trigger, title, width |
| CollapsibleSection | Expandable content | title, defaultExpanded |
| DynamicLink | Smart navigation | href, type, smoothScroll |
| MarkdownViewer | Render markdown | content, allowHtml |

---

**Ready to build amazing IETP content!** 🚀

For detailed documentation, see [README.md](./README.md) and [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md).
