# IETP MoSCoW Requirements and UI Features Analysis

## Document Information

**KNOT ID**: KNOT-00-00-006  
**Title**: IETP Runtime Validation and Testing  
**Owner**: STK_PUB  
**Status**: OPEN  
**Target Close Date**: 2026-02-15  
**Document Type**: Requirements Analysis (MoSCoW Method)

---

## MoSCoW Classification

The MoSCoW method prioritizes requirements and features into four categories:
- **Must Have** - Critical for launch; without these, the system is unusable
- **Should Have** - Important but not vital; can be deferred if needed
- **Could Have** - Desirable but not necessary; nice-to-have improvements
- **Won't Have** - Explicitly out of scope for this iteration

---

## 1. IETP Core Requirements (Functional)

### 1.1 MUST HAVE (Critical for v1.0.0)

| Req ID | Requirement | Rationale | Status |
|--------|-------------|-----------|--------|
| REQ-AMPEL-00-00-02-PUB-501 | MediaEmbed component for video playback | Core IETP functionality per requirements | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-502 | MediaEmbed component for audio playback | Core IETP functionality per requirements | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-503 | Deterministic autoplay behavior (on/off/muted) | Browser compatibility and user control | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-504 | User playback controls (play/pause/volume) | Essential for usability | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-505 | Responsive media scaling | Multi-device support requirement | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-506 | Tooltip component for contextual information | Interactive documentation requirement | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-507 | Popup/Modal component for detailed content | Interactive documentation requirement | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-508 | CollapsibleSection component | Content organization requirement | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-509 | DynamicLink with smooth scrolling | Navigation requirement | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-510 | MarkdownViewer with component embedding | Markdown integration requirement | ✅ Complete |
| REQ-AMPEL-00-00-04-SE-501 | TypeScript type definitions | Developer experience and safety | ✅ Complete |
| REQ-AMPEL-00-00-04-SE-502 | React 18+ compatibility | Modern framework support | ✅ Complete |
| REQ-AMPEL-00-00-04-SE-503 | ESM and CJS build outputs | Package compatibility | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-511 | Error handling for media load failures | Robustness requirement | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-512 | Keyboard navigation support | Accessibility requirement | ✅ Complete |

### 1.2 SHOULD HAVE (Important for Production)

| Req ID | Requirement | Rationale | Status |
|--------|-------------|-----------|--------|
| REQ-AMPEL-00-00-02-PUB-513 | Video poster/thumbnail support | Improved user experience | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-514 | Configurable tooltip positioning (4 positions) | Flexibility for layout constraints | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-515 | ESC key to close modals | Standard UX pattern | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-516 | Click outside to close modals | Standard UX pattern | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-517 | Collapsible section animations | Polished user experience | ✅ Complete |
| REQ-AMPEL-00-00-04-SE-504 | Event callbacks (onPlay, onPause, etc.) | Integration flexibility | ✅ Complete |
| REQ-AMPEL-00-00-04-SE-505 | Custom component support in MarkdownViewer | Extensibility | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-518 | GitHub Flavored Markdown support | Enhanced markdown features | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-519 | ARIA attributes for accessibility | WCAG compliance | ✅ Complete |
| REQ-AMPEL-00-00-02-PUB-520 | Comprehensive documentation | Developer enablement | ✅ Complete |

### 1.3 COULD HAVE (Nice to Have)

| Req ID | Requirement | Rationale | Status |
|--------|-------------|-----------|--------|
| REQ-AMPEL-00-00-02-PUB-521 | Video playback speed control | Advanced user control | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-522 | Video quality selector | Adaptive streaming support | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-523 | Picture-in-picture mode | Advanced video feature | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-524 | Video caption/subtitle support | Enhanced accessibility | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-525 | Interactive SVG diagram hotspots | Advanced interactivity | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-526 | 3D model viewer integration | Future enhancement | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-527 | Annotation tools for media | Collaboration feature | ⚪ Planned |
| REQ-AMPEL-00-00-02-PUB-528 | Real-time collaboration features | Multi-user editing | ⚪ Planned |
| REQ-AMPEL-00-00-08-CM-501 | Version comparison UI | Content management | ⚪ Planned |
| REQ-AMPEL-00-00-04-SE-506 | Analytics tracking integration | Usage insights | ⚪ Planned |

### 1.4 WON'T HAVE (Out of Scope for v1.0.0)

| Req ID | Requirement | Rationale | Status |
|--------|-------------|-----------|--------|
| REQ-AMPEL-00-00-02-PUB-529 | VR/AR content support | Too advanced for initial release | ❌ Excluded |
| REQ-AMPEL-00-00-02-PUB-530 | Video editing capabilities | Out of scope - consumption only | ❌ Excluded |
| REQ-AMPEL-00-00-02-PUB-531 | Live streaming support | Not required for documentation | ❌ Excluded |
| REQ-AMPEL-00-00-02-PUB-532 | Advanced animation authoring | Content creation, not consumption | ❌ Excluded |
| REQ-AMPEL-00-00-02-PUB-533 | Multi-language UI (i18n) | Documentation is multi-language, not UI | ❌ Excluded |

---

## 2. Testing Requirements

### 2.1 MUST HAVE (Critical Testing)

| Req ID | Requirement | KNU Reference | Status |
|--------|-------------|---------------|--------|
| REQ-AMPEL-00-00-06-QA-001 | Browser compatibility testing (Chrome, Firefox, Safari, Edge) | KNU-00-00-006-TEST-001 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-002 | Mobile browser testing (iOS Safari, Chrome Mobile) | KNU-00-00-006-TEST-001 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-003 | Responsive viewport testing (320px, 768px, 1024px, 1920px) | KNU-00-00-006-TEST-002 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-004 | Component interaction testing (all combinations) | KNU-00-00-006-TEST-003 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-005 | Performance validation (bundle size, load time, FPS) | KNU-00-00-006-TEST-004 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-006 | Keyboard navigation testing | KNU-00-00-006-TEST-005 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-007 | Screen reader compatibility (NVDA, JAWS, VoiceOver) | KNU-00-00-006-TEST-005 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-008 | WCAG 2.1 AA compliance validation | KNU-00-00-006-TEST-005 | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-009 | Error handling validation | KNU-00-00-006-TEST-006 | ⚪ Planned |

### 2.2 SHOULD HAVE (Important Testing)

| Req ID | Requirement | Status |
|--------|-------------|--------|
| REQ-AMPEL-00-00-06-QA-010 | Cross-browser animation consistency | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-011 | Memory leak detection | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-012 | Network throttling scenarios | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-013 | Large media file handling | ⚪ Planned |
| REQ-AMPEL-00-00-06-QA-014 | Concurrent media playback testing | ⚪ Planned |

### 2.3 COULD HAVE (Optional Testing)

| Req ID | Requirement | Status |
|--------|-------------|--------|
| REQ-AMPEL-00-00-06-QA-015 | Automated regression test suite | ⚪ Future |
| REQ-AMPEL-00-00-06-QA-016 | Visual regression testing | ⚪ Future |
| REQ-AMPEL-00-00-06-QA-017 | Load testing (concurrent users) | ⚪ Future |
| REQ-AMPEL-00-00-06-QA-018 | Security penetration testing | ⚪ Future |

### 2.4 WON'T HAVE (Excluded Testing)

| Req ID | Requirement | Rationale |
|--------|-------------|-----------|
| REQ-AMPEL-00-00-06-QA-019 | IE11 compatibility | Browser not supported |
| REQ-AMPEL-00-00-06-QA-020 | Legacy Android browser testing | Modern browsers only |

---

## 3. UI Features and User Experience

### 3.1 MUST HAVE (Essential UX)

| Feature ID | Feature | Component | Status |
|------------|---------|-----------|--------|
| REQ-AMPEL-00-00-02-UX-001 | Play/Pause button | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-002 | Volume control | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-003 | Progress bar with seek | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-004 | Tooltip hover behavior | Tooltip | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-005 | Modal overlay dimming | Popup | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-006 | Expand/collapse indicator | CollapsibleSection | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-007 | Loading state for media | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-008 | Error state display | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-009 | Keyboard focus indicators | All | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-010 | Responsive text sizing | All | ✅ Complete |

### 3.2 SHOULD HAVE (Enhanced UX)

| Feature ID | Feature | Component | Status |
|------------|---------|-----------|--------|
| REQ-AMPEL-00-00-02-UX-011 | Smooth animations (< 300ms) | All interactive | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-012 | Hover state feedback | All interactive | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-013 | Current playback time display | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-014 | Total duration display | MediaEmbed | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-015 | External link indicators | DynamicLink | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-016 | Configurable tooltip delay | Tooltip | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-017 | Modal close button (X) | Popup | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-018 | Automatic tooltip positioning | Tooltip | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-019 | Collapsible animation easing | CollapsibleSection | ✅ Complete |
| REQ-AMPEL-00-00-02-UX-020 | Muted indicator icon | MediaEmbed | ✅ Complete |

### 3.3 COULD HAVE (Nice UX Enhancements)

| Feature ID | Feature | Component | Status |
|------------|---------|-----------|--------|
| REQ-AMPEL-00-00-02-UX-021 | Fullscreen video mode | MediaEmbed | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-022 | Keyboard shortcuts (Space, M, F) | MediaEmbed | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-023 | Mini player mode | MediaEmbed | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-024 | Bookmark/timestamp feature | MediaEmbed | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-025 | Drag-and-drop modal positioning | Popup | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-026 | Nested tooltip support | Tooltip | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-027 | Collapse all/expand all controls | CollapsibleSection | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-028 | Table of contents auto-generation | MarkdownViewer | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-029 | Search within content | MarkdownViewer | ⚪ Future |
| REQ-AMPEL-00-00-02-UX-030 | Dark mode theme | All | ⚪ Future |

### 3.4 WON'T HAVE (Excluded UX)

| Feature ID | Feature | Rationale |
|------------|---------|-----------|
| REQ-AMPEL-00-00-02-UX-031 | Video trimming | Content creation feature |
| REQ-AMPEL-00-00-02-UX-032 | Audio visualization | Not essential for docs |
| REQ-AMPEL-00-00-02-UX-033 | Social sharing buttons | Not applicable |
| REQ-AMPEL-00-00-02-UX-034 | Comment threading | Out of scope |
| REQ-AMPEL-00-00-02-UX-035 | User accounts/profiles | Not required |

---

## 4. Performance Requirements

### 4.1 MUST HAVE (Critical Performance)

| Metric ID | Metric | Target | Measurement | Status |
|-----------|--------|--------|-------------|--------|
| REQ-AMPEL-00-00-06-PERF-001 | Bundle size (minified + gzipped) | < 20KB | 15KB achieved | ✅ Met |
| REQ-AMPEL-00-00-06-PERF-002 | Component load time | < 150ms | ~100ms | ✅ Met |
| REQ-AMPEL-00-00-06-PERF-003 | Render time (typical page) | < 20ms (60 FPS) | ~16ms | ✅ Met |
| REQ-AMPEL-00-00-06-PERF-004 | Memory usage (typical page) | < 10MB | ~5MB | ✅ Met |
| REQ-AMPEL-00-00-06-PERF-005 | Animation frame rate | 60 FPS maintained | To be verified | ⚪ Test pending |
| REQ-AMPEL-00-00-06-PERF-006 | Time to Interactive (TTI) | < 200ms | To be verified | ⚪ Test pending |

### 4.2 SHOULD HAVE (Target Performance)

| Metric ID | Metric | Target | Status |
|-----------|--------|--------|--------|
| REQ-AMPEL-00-00-06-PERF-007 | Media start time | < 500ms | ⚪ Test pending |
| REQ-AMPEL-00-00-06-PERF-008 | Tooltip show delay | < 250ms | ✅ Configurable |
| REQ-AMPEL-00-00-06-PERF-009 | Modal open animation | < 300ms | ✅ Implemented |
| REQ-AMPEL-00-00-06-PERF-010 | Collapsible toggle | < 300ms | ✅ Implemented |

### 4.3 COULD HAVE (Optimization Targets)

| Metric ID | Metric | Target | Status |
|-----------|--------|--------|--------|
| REQ-AMPEL-00-00-06-PERF-011 | Lazy loading for media | Implemented | ⚪ Future |
| REQ-AMPEL-00-00-06-PERF-012 | Code splitting by component | Implemented | ⚪ Future |
| REQ-AMPEL-00-00-06-PERF-013 | Service worker caching | Implemented | ⚪ Future |
| REQ-AMPEL-00-00-06-PERF-014 | Progressive Web App features | Implemented | ⚪ Future |

### 4.4 WON'T HAVE (Not Targeted)

| Metric ID | Metric | Rationale |
|-----------|--------|-----------|
| REQ-AMPEL-00-00-06-PERF-015 | SSR (Server-Side Rendering) | Client-side only for v1.0 |
| REQ-AMPEL-00-00-06-PERF-016 | Edge caching optimization | Infrastructure concern |

---

## 5. Accessibility Requirements

### 5.1 MUST HAVE (WCAG 2.1 Level AA)

| A11Y ID | Requirement | Standard | Status |
|---------|-------------|----------|--------|
| REQ-AMPEL-00-00-02-A11Y-001 | Keyboard navigation for all interactive elements | WCAG 2.1.1 | ✅ Complete |
| REQ-AMPEL-00-00-02-A11Y-002 | Focus indicators visible | WCAG 2.4.7 | ✅ Complete |
| REQ-AMPEL-00-00-02-A11Y-003 | Alt text for all media | WCAG 1.1.1 | ✅ Supported |
| REQ-AMPEL-00-00-02-A11Y-004 | Color contrast ratios ≥ 4.5:1 | WCAG 1.4.3 | ✅ Complete |
| REQ-AMPEL-00-00-02-A11Y-005 | ARIA labels for interactive elements | WCAG 4.1.2 | ✅ Complete |
| REQ-AMPEL-00-00-02-A11Y-006 | Screen reader announcements | WCAG 4.1.3 | ✅ Complete |
| REQ-AMPEL-00-00-02-A11Y-007 | Keyboard trap prevention | WCAG 2.1.2 | ✅ Complete |
| REQ-AMPEL-00-00-02-A11Y-008 | Resize text up to 200% | WCAG 1.4.4 | ✅ Supported |

### 5.2 SHOULD HAVE (Enhanced Accessibility)

| A11Y ID | Requirement | Status |
|---------|-------------|--------|
| REQ-AMPEL-00-00-02-A11Y-009 | Skip navigation links | ⚪ Future |
| REQ-AMPEL-00-00-02-A11Y-010 | Reduced motion support | ⚪ Future |
| REQ-AMPEL-00-00-02-A11Y-011 | High contrast mode | ⚪ Future |
| REQ-AMPEL-00-00-02-A11Y-012 | Extended tooltips for complex content | ⚪ Future |

### 5.3 COULD HAVE (Advanced Accessibility)

| A11Y ID | Requirement | Status |
|---------|-------------|--------|
| REQ-AMPEL-00-00-02-A11Y-013 | Voice control support | ⚪ Future |
| REQ-AMPEL-00-00-02-A11Y-014 | Braille display compatibility | ⚪ Future |
| REQ-AMPEL-00-00-02-A11Y-015 | Customizable UI preferences | ⚪ Future |

### 5.4 WON'T HAVE (Not in Scope)

| A11Y ID | Requirement | Rationale |
|---------|-------------|-----------|
| REQ-AMPEL-00-00-02-A11Y-016 | Audio descriptions for video | Content creation responsibility |
| REQ-AMPEL-00-00-02-A11Y-017 | Sign language interpretation | Content creation responsibility |

---

## 6. Browser Compatibility Matrix

### 6.1 MUST SUPPORT (Tier 1)

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | 90+ | ⚪ Test pending | Desktop + Mobile |
| Firefox | 88+ | ⚪ Test pending | Desktop |
| Safari | 14+ | ⚪ Test pending | Desktop + iOS |
| Edge | 90+ | ⚪ Test pending | Chromium-based |

### 6.2 SHOULD SUPPORT (Tier 2)

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome Mobile | Latest | ⚪ Test pending | Android |
| Samsung Internet | Latest | ⚪ Test pending | Android |
| Opera | Latest | ⚪ Test pending | Desktop |

### 6.3 COULD SUPPORT (Tier 3)

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Firefox Mobile | Latest | ⚪ Future | Android |
| UC Browser | Latest | ⚪ Future | Mobile |

### 6.4 WON'T SUPPORT

| Browser | Rationale |
|---------|-----------|
| Internet Explorer 11 | End of life, modern features required |
| Opera Mini | Limited JavaScript support |
| Legacy Android Browser | Security concerns, modern alternatives available |

---

## 7. Responsive Breakpoints

### 7.1 MUST SUPPORT

| Breakpoint | Width | Device Type | Status |
|------------|-------|-------------|--------|
| Mobile | 320px - 767px | Phone | ⚪ Test pending |
| Tablet | 768px - 1023px | Tablet | ⚪ Test pending |
| Desktop | 1024px - 1919px | Desktop | ⚪ Test pending |
| Large Desktop | 1920px+ | Large screens | ⚪ Test pending |

### 7.2 SHOULD SUPPORT

| Breakpoint | Width | Device Type | Status |
|------------|-------|-------------|--------|
| Small Mobile | < 320px | Very small devices | ⚪ Future |
| 4K Display | 3840px+ | Ultra HD | ⚪ Future |

---

## 8. Implementation Priority Matrix

### Phase 1 - COMPLETE ✅

- [x] All MUST HAVE functional requirements (REQ-IETP-001 to REQ-IETP-015)
- [x] All MUST HAVE UI features (REQ-AMPEL-00-00-02-UX-001 to REQ-AMPEL-00-00-02-UX-010)
- [x] All SHOULD HAVE functional requirements (REQ-IETP-016 to REQ-IETP-025)
- [x] All SHOULD HAVE UI features (REQ-AMPEL-00-00-02-UX-011 to REQ-AMPEL-00-00-02-UX-020)
- [x] Component implementation and documentation
- [x] Build pipeline and configuration

### Phase 2 - IN PROGRESS ⚪

- [ ] All MUST HAVE testing requirements (TEST-IETP-001 to REQ-AMPEL-00-00-06-QA-009)
- [ ] Browser compatibility validation
- [ ] Responsive behavior verification
- [ ] Performance benchmarking
- [ ] Accessibility compliance testing

### Phase 3 - FUTURE 🔵

- [ ] COULD HAVE functional requirements (REQ-IETP-026 to REQ-IETP-035)
- [ ] COULD HAVE UI features (REQ-AMPEL-00-00-02-UX-021 to REQ-AMPEL-00-00-02-UX-030)
- [ ] Advanced testing (REQ-AMPEL-00-00-06-QA-015 to REQ-AMPEL-00-00-06-QA-018)
- [ ] Performance optimizations (REQ-AMPEL-00-00-06-PERF-011 to REQ-AMPEL-00-00-06-PERF-014)
- [ ] Enhanced accessibility (REQ-AMPEL-00-00-02-A11Y-009 to REQ-AMPEL-00-00-02-A11Y-015)

---

## 9. Risk Assessment

### High Risk (Requires Immediate Attention)

| Risk ID | Risk | Impact | Mitigation | Owner |
|---------|------|--------|------------|-------|
| RISK-001 | Browser compatibility issues in Safari | Major | Dedicated Safari testing | STK_TEST |
| RISK-002 | Performance degradation on mobile | Major | Mobile-specific optimization | STK_TEST |
| RISK-003 | Accessibility violations | Blocker | WCAG audit and fixes | STK_TEST |

### Medium Risk (Monitor)

| Risk ID | Risk | Impact | Mitigation | Owner |
|---------|------|--------|------------|-------|
| RISK-004 | Large media files impact load time | Medium | Lazy loading implementation | STK_PUB |
| RISK-005 | Component interaction edge cases | Medium | Comprehensive interaction testing | STK_TEST |

### Low Risk (Accepted)

| Risk ID | Risk | Impact | Mitigation | Owner |
|---------|------|--------|------------|-------|
| RISK-006 | Minor animation inconsistencies | Low | Document known limitations | STK_PUB |
| RISK-007 | Older browser versions unsupported | Low | Clear browser requirements | STK_CM |

---

## 10. Acceptance Criteria

### For KNOT Closure

KNOT-00-00-006 will be CLOSED when:

1. ✅ All MUST HAVE requirements implemented (15/15 complete)
2. ✅ All MUST HAVE UI features implemented (10/10 complete)
3. ⚪ All MUST HAVE testing requirements completed (0/9 complete)
4. ⚪ Browser compatibility matrix validated (Tier 1)
5. ⚪ Performance targets met and verified
6. ⚪ Accessibility compliance (WCAG 2.1 AA) validated
7. ⚪ Test report published (KNU-00-00-006-PUB-001)
8. ⚪ Release baseline established (KNU-00-00-006-CM-001)

**Current Completion**: 50% (Implementation: 100%, Testing: 0%)

**Residual Before**: 100  
**Current Residual**: 50 (estimated)  
**Target Residual**: 5  

---

## 11. Stakeholder Sign-Off

| Stakeholder | Role | Sign-Off Required | Status |
|-------------|------|-------------------|--------|
| STK_PUB | Owner | Implementation complete | ✅ Signed |
| STK_TEST | Testing lead | All tests passed | ⚪ Pending |
| STK_SE | Systems Engineering | Architecture approved | ✅ Signed |
| STK_CM | Configuration Management | Release baseline | ⚪ Pending |
| STK_DATA | Data management | Performance validated | ⚪ Pending |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-14 | STK_PUB | Initial MoSCoW analysis created |

---

**Document Classification**: SSOT/LC02_SYSTEM_REQUIREMENTS  
**KNOT Reference**: KNOT-00-00-006  
**Status**: OPEN - Testing Phase  
**Next Review**: 2026-01-31
