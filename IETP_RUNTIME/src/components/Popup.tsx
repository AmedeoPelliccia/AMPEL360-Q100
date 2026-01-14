import React, { useState, useEffect, CSSProperties } from 'react';

export interface PopupProps {
  /** Trigger element for the popup */
  trigger: React.ReactNode;
  /** Content to display in the popup */
  children: React.ReactNode;
  /** Title of the popup */
  title?: string;
  /** Width of the popup */
  width?: string | number;
  /** Whether popup is initially open */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when popup state changes */
  onOpenChange?: (open: boolean) => void;
  /** CSS class name */
  className?: string;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
}

/**
 * Popup Component
 * 
 * Modal popup for displaying detailed information or interactive content.
 * 
 * @example
 * ```tsx
 * <Popup 
 *   trigger={<button>View Details</button>}
 *   title="System Architecture"
 *   width="600px"
 * >
 *   <p>Detailed system architecture information...</p>
 * </Popup>
 * ```
 */
export const Popup: React.FC<PopupProps> = ({
  trigger,
  children,
  title,
  width = '500px',
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  className = '',
  closeOnOverlayClick = true,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = () => {
    const newOpen = !isOpen;
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleClose = () => {
    if (!isControlled) {
      setInternalOpen(false);
    }
    onOpenChange?.(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.3s, visibility 0.3s',
  };

  const popupStyle: CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    maxWidth: '90vw',
    maxHeight: '90vh',
    width: typeof width === 'number' ? `${width}px` : width,
    display: 'flex',
    flexDirection: 'column',
    transform: isOpen ? 'scale(1)' : 'scale(0.95)',
    transition: 'transform 0.3s',
  };

  const headerStyle: CSSProperties = {
    padding: '16px 20px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const contentStyle: CSSProperties = {
    padding: '20px',
    overflowY: 'auto',
    flex: 1,
  };

  const closeButtonStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#6b7280',
    padding: '0',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
  };

  return (
    <>
      <div onClick={handleToggle} style={{ display: 'inline-block', cursor: 'pointer' }}>
        {trigger}
      </div>

      <div
        className={`ietp-popup-overlay ${className}`}
        style={overlayStyle}
        onClick={handleOverlayClick}
      >
        <div className="ietp-popup" style={popupStyle} onClick={(e) => e.stopPropagation()}>
          {(title || true) && (
            <div className="ietp-popup-header" style={headerStyle}>
              {title && <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>{title}</h3>}
              <button
                className="ietp-popup-close"
                style={closeButtonStyle}
                onClick={handleClose}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          )}
          <div className="ietp-popup-content" style={contentStyle}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
