import React, { useState, CSSProperties } from 'react';

export interface CollapsibleSectionProps {
  /** Title of the collapsible section */
  title: string | React.ReactNode;
  /** Content to display when expanded */
  children: React.ReactNode;
  /** Initially expanded state */
  defaultExpanded?: boolean;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Callback when expanded state changes */
  onExpandChange?: (expanded: boolean) => void;
  /** CSS class name */
  className?: string;
  /** Show expand/collapse icon */
  showIcon?: boolean;
  /** Custom icon for collapsed state */
  collapsedIcon?: React.ReactNode;
  /** Custom icon for expanded state */
  expandedIcon?: React.ReactNode;
}

/**
 * CollapsibleSection Component
 * 
 * Expandable/collapsible content section for organizing IETP documentation.
 * 
 * @example
 * ```tsx
 * <CollapsibleSection title="Safety Procedures" defaultExpanded={true}>
 *   <p>1. Ensure all power systems are offline...</p>
 *   <p>2. Verify hydrogen valves are closed...</p>
 * </CollapsibleSection>
 * ```
 */
export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandChange,
  className = '',
  showIcon = true,
  collapsedIcon,
  expandedIcon,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    if (!isControlled) {
      setInternalExpanded(newExpanded);
    }
    onExpandChange?.(newExpanded);
  };

  const containerStyle: CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    marginBottom: '12px',
    overflow: 'hidden',
  };

  const headerStyle: CSSProperties = {
    padding: '12px 16px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    userSelect: 'none',
    transition: 'background-color 0.2s',
  };

  const titleStyle: CSSProperties = {
    fontWeight: '600',
    fontSize: '16px',
    margin: 0,
    flex: 1,
  };

  const iconStyle: CSSProperties = {
    marginLeft: '8px',
    transition: 'transform 0.3s',
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  const contentStyle: CSSProperties = {
    maxHeight: isExpanded ? '2000px' : '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
  };

  const innerContentStyle: CSSProperties = {
    padding: '16px',
  };

  const defaultCollapsedIcon = collapsedIcon || '▼';
  const defaultExpandedIcon = expandedIcon || '▼';

  return (
    <div className={`ietp-collapsible-section ${className}`} style={containerStyle}>
      <div
        className="ietp-collapsible-header"
        style={headerStyle}
        onClick={handleToggle}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        <div style={titleStyle}>{title}</div>
        {showIcon && (
          <div className="ietp-collapsible-icon" style={iconStyle}>
            {isExpanded ? defaultExpandedIcon : defaultCollapsedIcon}
          </div>
        )}
      </div>
      <div className="ietp-collapsible-content" style={contentStyle}>
        <div style={innerContentStyle}>{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
