# Icon Policy for AMPEL360 IETP Components

## Document Information

**Status**: NORMATIVE (MANDATORY)  
**Applies To**: All IETP components, portals, and UI elements  
**Effective Date**: 2026-01-14  
**Owner**: STK_PUB / STK_UI

---

## 1. Policy Statement

All icons used in AMPEL360 IETP runtime components, portals, and user interfaces **MUST** be vector-based SVG graphics. The use of ASCII characters, emoji, Unicode glyphs, or textual representations as icons is **PROHIBITED** in production UI components.

---

## 2. Requirements

### 2.1 Vector-Based (SVG)

All icons SHALL be:
- Scalable Vector Graphics (SVG) format
- Inline SVG for React components (preferred for flexibility)
- External SVG files loaded via `<img>` or sprite sheets (acceptable for asset management)

### 2.2 Style Consistency

All icons SHALL maintain:
- **Stroke Width**: Consistent across icon set (recommended: 1.5px or 2px)
- **ViewBox**: Standard dimensions (recommended: `0 0 24 24` or `0 0 16 16`)
- **Color**: Use `currentColor` to inherit from CSS/theme context
- **Line Caps**: Consistent line-cap and line-join settings (`round` preferred)

### 2.3 Accessibility

All icons SHALL include:
- **ARIA Attributes**: 
  - `aria-hidden="true"` for decorative icons
  - `aria-label` or `aria-labelledby` for semantic icons
  - `role="img"` when icon conveys meaning
- **Title Element**: `<title>` tag inside SVG for screen reader context when applicable
- **Fallback Text**: Adjacent visible text or `sr-only` text for screen readers

### 2.4 Performance

Icons SHALL be optimized:
- Minimized/compressed SVG markup
- No unnecessary metadata or editor artifacts
- Lazy-loaded for large icon sets
- Sprite sheets for repeated use

---

## 3. Prohibited Practices

The following are **NOT PERMITTED** in production IETP components:

### 3.1 ASCII Art Icons
```tsx
// ❌ PROHIBITED
const icon = '►';
const icon = '▼';
const icon = '⚠';
```

### 3.2 Emoji Icons
```tsx
// ❌ PROHIBITED
const icon = '✅';
const icon = '❌';
const icon = '⚪';
const icon = '🔵';
```

### 3.3 Unicode Symbols
```tsx
// ❌ PROHIBITED
const icon = '◄';
const icon = '►';
const icon = '▲';
const icon = '●';
```

### 3.4 Textual Glyphs
```tsx
// ❌ PROHIBITED
const icon = '[X]';
const icon = '(!)';
const icon = '>';
```

---

## 4. Approved Implementation Patterns

### 4.1 Inline SVG (Preferred for React Components)

```tsx
// ✅ APPROVED
const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
```

### 4.2 SVG Component with Props

```tsx
// ✅ APPROVED
interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  'aria-label'?: string;
}

const PlayIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  'aria-label': ariaLabel 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
  >
    <path
      d="M8 5V19L19 12L8 5Z"
      fill={color}
    />
  </svg>
);
```

### 4.3 Icon Library Integration

```tsx
// ✅ APPROVED (using external icon library)
import { ChevronDown, Play, Pause } from 'react-feather';
import { Icon } from '@iconify/react';

// Ensure library icons are SVG-based
<ChevronDown size={16} aria-hidden="true" />
<Icon icon="mdi:play" aria-label="Play video" />
```

### 4.4 SVG Sprite Sheet

```tsx
// ✅ APPROVED
const Icon: React.FC<{ name: string; size?: number }> = ({ name, size = 24 }) => (
  <svg width={size} height={size} aria-hidden="true">
    <use href={`/icons/sprite.svg#${name}`} />
  </svg>
);
```

---

## 5. Icon Component Standard

### 5.1 Required Icon Set for IETP Components

All IETP components SHALL include these standard icons:

| Icon Name | Usage | SVG Requirement |
|-----------|-------|-----------------|
| chevron-down | Collapsible sections (collapsed) | 16×16, stroke-based |
| chevron-up | Collapsible sections (expanded) | 16×16, stroke-based |
| chevron-right | Navigation, next | 16×16, stroke-based |
| chevron-left | Navigation, previous | 16×16, stroke-based |
| play | Media controls | 24×24, fill or stroke |
| pause | Media controls | 24×24, fill or stroke |
| volume-high | Media controls | 24×24, stroke-based |
| volume-mute | Media controls | 24×24, stroke-based |
| external-link | External links | 16×16, stroke-based |
| info | Tooltips, information | 16×16, stroke-based |
| close | Close buttons, modals | 24×24, stroke-based |
| alert | Warning messages | 24×24, stroke-based |
| check | Success states | 16×16, stroke-based |
| x-circle | Error states | 16×16, stroke-based |

### 5.2 Icon Component Template

```tsx
/**
 * Standard IETP Icon Component Template
 * Ensures consistency across all icon implementations
 */
export interface IETPIconProps {
  /** Icon size in pixels (default: 24) */
  size?: number;
  /** Icon color (default: currentColor) */
  color?: string;
  /** CSS class name */
  className?: string;
  /** ARIA label for semantic icons */
  'aria-label'?: string;
  /** Whether icon is decorative only */
  decorative?: boolean;
}

export const createIETPIcon = (
  displayName: string,
  svgPath: string | React.ReactNode
): React.FC<IETPIconProps> => {
  const IconComponent: React.FC<IETPIconProps> = ({
    size = 24,
    color = 'currentColor',
    className = '',
    'aria-label': ariaLabel,
    decorative = false,
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={ariaLabel && !decorative ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={decorative || !ariaLabel}
    >
      {typeof svgPath === 'string' ? (
        <path d={svgPath} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        svgPath
      )}
    </svg>
  );
  
  IconComponent.displayName = displayName;
  return IconComponent;
};
```

---

## 6. Migration Guidelines

### 6.1 Existing Components

Components using non-SVG icons SHALL be updated:

1. **Identify** all ASCII/emoji/Unicode icon usage
2. **Replace** with equivalent SVG icons
3. **Test** visual appearance and accessibility
4. **Document** icon choices in component documentation

### 6.2 Documentation Files

For markdown documentation (non-UI), emoji usage is **ACCEPTABLE** for status indicators:
- ✅ Complete
- ⚪ Planned
- 🔵 In Progress
- ❌ Blocked

However, when these documents are rendered in IETP portals, icons SHOULD be transformed to SVG badges.

---

## 7. Validation & Compliance

### 7.1 Code Review Checklist

Before merging, verify:
- [ ] No ASCII characters used as icons in UI components
- [ ] No emoji used in React components
- [ ] All icons are SVG format
- [ ] SVG icons include proper ARIA attributes
- [ ] Icons inherit color via `currentColor` (unless design requires fixed color)
- [ ] Icon size is configurable or appropriate for context

### 7.2 Automated Linting

Add ESLint rule (future):
```js
// .eslintrc.js
rules: {
  'no-unicode-icons': ['error', {
    message: 'Use SVG icons instead of Unicode/emoji. See ICON_POLICY.md',
  }],
}
```

---

## 8. Recommended Icon Libraries

For consistency and maintenance, consider these SVG icon libraries:

| Library | Style | License | Notes |
|---------|-------|---------|-------|
| **Lucide React** | Stroke-based | ISC | Clean, modern, highly consistent |
| **Heroicons** | Stroke & Solid | MIT | Tailwind design system icons |
| **React Feather** | Stroke-based | MIT | Feather icon set, minimal |
| **Iconify** | Multiple sets | Various | Unified API for many icon sets |
| **Custom AMPEL360 Set** | Stroke-based | Internal | Project-specific icons |

---

## 9. Certification & Standards Compliance

This policy ensures:
- **WCAG 2.1 Level AA**: Accessible icons with proper ARIA markup
- **S1000D IETP**: Vector graphics for scalability in technical publications
- **DO-178C**: Deterministic rendering for safety-critical documentation
- **Maintenance**: Consistent visual language across all AMPEL360 interfaces

---

## 10. Contact & Questions

- **Policy Owner**: STK_PUB
- **Technical Contact**: STK_UI
- **Related Documents**:
  - `/IETP_RUNTIME/README.md` - Component documentation
  - `/IETP_RUNTIME/DEVELOPER_GUIDE.md` - Development best practices
  - `KNU-00-00-006-PUB-001` - IETP Testing and Validation Report

---

**Version**: 1.0.0  
**Last Updated**: 2026-01-14  
**Next Review**: 2026-04-14
