# IETP Runtime Integration

This directory contains the IETP (Interactive Electronic Technical Publication) Runtime configuration for ATA 11-00 Placards and Markings - General.

## Runtime Location

The IETP Runtime components are centrally located at:
```
/IETP_RUNTIME/
```

## Usage

To use the IETP Runtime in this section:

1. **For Development:**
   ```bash
   cd /IETP_RUNTIME
   npm install
   npm run dev
   ```

2. **For Production:**
   ```bash
   cd /IETP_RUNTIME
   npm run build
   ```

3. **Reference Components:**
   ```typescript
   import { MediaEmbed, Tooltip, Popup, CollapsibleSection } from '../../../../../IETP_RUNTIME/dist';
   ```

## Available Components

- **MediaEmbed**: Video/audio embedding with autoplay control
- **Tooltip**: Contextual information on hover
- **Popup**: Modal dialogs for detailed content
- **CollapsibleSection**: Expandable documentation sections
- **DynamicLink**: Smart navigation with smooth scrolling
- **MarkdownViewer**: Markdown rendering with embedded components

## Example Content

See `/IETP_RUNTIME/examples/` for:
- `simple-example.html` - Basic HTML demonstration
- `markdown-example.md` - Markdown with embedded components

## Documentation

Full documentation: `/IETP_RUNTIME/README.md`

## Configuration

IETP configuration for this section can be customized in `config.json`:

```json
{
  "section": "ATA-11-00",
  "title": "Placards and Markings - General",
  "mediaPath": "../ICN/",
  "features": {
    "autoplay": "muted",
    "responsiveMedia": true,
    "interactiveComponents": true
  }
}
```
