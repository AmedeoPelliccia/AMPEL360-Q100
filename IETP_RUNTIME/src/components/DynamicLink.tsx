import React, { CSSProperties } from 'react';

export interface DynamicLinkProps {
  /** Target URL or section ID */
  href: string;
  /** Link text or element */
  children: React.ReactNode;
  /** Link type: 'internal' (same page), 'external', or 'document' */
  type?: 'internal' | 'external' | 'document';
  /** Open in new tab/window */
  newTab?: boolean;
  /** CSS class name */
  className?: string;
  /** Callback when link is clicked */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Show external link icon */
  showExternalIcon?: boolean;
  /** Smooth scroll for internal links */
  smoothScroll?: boolean;
}

/**
 * DynamicLink Component
 * 
 * Intelligent linking component for IETP navigation with support for
 * internal sections, external resources, and documents.
 * 
 * @example
 * ```tsx
 * // Internal section link
 * <DynamicLink href="#section-25-10" type="internal">
 *   Jump to Flight Compartment
 * </DynamicLink>
 * 
 * // External resource
 * <DynamicLink href="https://example.com/manual.pdf" type="external" newTab>
 *   View External Manual
 * </DynamicLink>
 * 
 * // Document reference
 * <DynamicLink href="./ATA-25-10-00.xml" type="document">
 *   View Data Module
 * </DynamicLink>
 * ```
 */
export const DynamicLink: React.FC<DynamicLinkProps> = ({
  href,
  children,
  type = 'internal',
  newTab = false,
  className = '',
  onClick,
  showExternalIcon = true,
  smoothScroll = true,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick handler if provided
    if (onClick) {
      onClick(e);
    }

    // Handle internal links with smooth scrolling
    if (type === 'internal' && smoothScroll && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        
        // Update URL hash without scrolling
        window.history.pushState(null, '', href);
      }
    }
  };

  const linkStyle: CSSProperties = {
    color: type === 'external' ? '#0066cc' : '#0052cc',
    textDecoration: 'none',
    cursor: 'pointer',
    borderBottom: '1px solid transparent',
    transition: 'border-bottom-color 0.2s',
  };

  const isExternal = type === 'external' || (href.startsWith('http://') || href.startsWith('https://'));
  const shouldOpenNewTab = newTab || isExternal;

  return (
    <a
      href={href}
      className={`ietp-dynamic-link ${type}-link ${className}`}
      style={linkStyle}
      onClick={handleClick}
      target={shouldOpenNewTab ? '_blank' : undefined}
      rel={shouldOpenNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
      {isExternal && showExternalIcon && (
        <span style={{ marginLeft: '4px', fontSize: '0.85em' }}>↗</span>
      )}
    </a>
  );
};

export default DynamicLink;
