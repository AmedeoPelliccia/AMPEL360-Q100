import React, { useState, useRef, useEffect, CSSProperties } from 'react';

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: string | React.ReactNode;
  /** Element that triggers the tooltip */
  children: React.ReactNode;
  /** Position of tooltip relative to trigger */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay before showing tooltip (ms) */
  delay?: number;
  /** CSS class name */
  className?: string;
}

/**
 * Tooltip Component
 * 
 * Displays contextual information on hover for IETP content.
 * 
 * @example
 * ```tsx
 * <Tooltip content="This is the fuel cell system" position="top">
 *   <span>H₂ PEM Fuel Cell</span>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShouldShow(true);
      setVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShouldShow(false);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    backgroundColor: '#333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.2s',
    pointerEvents: 'none',
    ...(position === 'top' && {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px',
    }),
    ...(position === 'bottom' && {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px',
    }),
    ...(position === 'left' && {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px',
    }),
    ...(position === 'right' && {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px',
    }),
  };

  const arrowStyle: CSSProperties = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    ...(position === 'top' && {
      bottom: '-6px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderWidth: '6px 6px 0 6px',
      borderColor: '#333 transparent transparent transparent',
    }),
    ...(position === 'bottom' && {
      top: '-6px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderWidth: '0 6px 6px 6px',
      borderColor: 'transparent transparent #333 transparent',
    }),
    ...(position === 'left' && {
      right: '-6px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderWidth: '6px 0 6px 6px',
      borderColor: 'transparent transparent transparent #333',
    }),
    ...(position === 'right' && {
      left: '-6px',
      top: '50%',
      transform: 'translateY(-50%)',
      borderWidth: '6px 6px 6px 0',
      borderColor: 'transparent #333 transparent transparent',
    }),
  };

  return (
    <span
      className={`ietp-tooltip-container ${className}`}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {shouldShow && (
        <div className="ietp-tooltip" style={tooltipStyle}>
          {content}
          <div className="ietp-tooltip-arrow" style={arrowStyle} />
        </div>
      )}
    </span>
  );
};

export default Tooltip;
