import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MediaEmbed, MediaEmbedProps } from './MediaEmbed';
import { Tooltip } from './Tooltip';
import { Popup } from './Popup';
import { CollapsibleSection } from './CollapsibleSection';
import { DynamicLink } from './DynamicLink';

export interface MarkdownViewerProps {
  /** Markdown content to render */
  content: string;
  /** CSS class name */
  className?: string;
  /** Allow HTML in markdown */
  allowHtml?: boolean;
  /** Custom components for markdown elements */
  components?: Record<string, React.ComponentType<any>>;
}

interface CustomElementProps {
  [key: string]: string | boolean | undefined;
  children?: React.ReactNode;
}

// Helper function to parse string booleans safely
const parseBoolean = (value: string | boolean | undefined, defaultValue = false): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value !== 'string') return defaultValue;
  const normalized = value.toLowerCase().trim();
  return normalized === 'true' || normalized === '1' || normalized === 'yes';
};

/**
 * MarkdownViewer Component
 * 
 * Renders markdown content with support for embedded IETP components.
 * Supports custom HTML-like syntax for interactive elements.
 * 
 * Supported custom elements:
 * - `<MediaEmbed src="..." type="video|audio" ... />`
 * - `<Tooltip content="...">text</Tooltip>`
 * - `<Popup title="...">content</Popup>`
 * - `<CollapsibleSection title="...">content</CollapsibleSection>`
 * 
 * @example
 * ```tsx
 * const markdown = `
 * # System Overview
 * 
 * <MediaEmbed src="/video/intro.mp4" type="video" title="Introduction" />
 * 
 * The <Tooltip content="Hydrogen Proton Exchange Membrane">H₂ PEM</Tooltip> fuel cell...
 * 
 * <CollapsibleSection title="Technical Details">
 * More information here...
 * </CollapsibleSection>
 * `;
 * 
 * <MarkdownViewer content={markdown} />
 * ```
 */
export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  content,
  className = '',
  allowHtml = true,
  components: customComponents = {},
}) => {
  // Default component mappings for markdown
  const defaultComponents = {
    // Custom IETP components
    mediaembed: (props: CustomElementProps) => {
      const { src, type, title, autoplay, controls, loop, width, height, responsive, poster } = props;
      return (
        <MediaEmbed
          src={src as string}
          type={type as 'video' | 'audio'}
          title={title as string}
          autoplay={autoplay as 'on' | 'off' | 'muted'}
          controls={parseBoolean(controls, true)}
          loop={parseBoolean(loop, false)}
          width={width as string}
          height={height as string}
          responsive={parseBoolean(responsive, true)}
          poster={poster as string}
        />
      );
    },
    tooltip: (props: CustomElementProps) => {
      const { content: tooltipContent, position, children } = props;
      return (
        <Tooltip content={tooltipContent as string} position={position as any}>
          {children}
        </Tooltip>
      );
    },
    popup: (props: CustomElementProps) => {
      const { title, width, trigger, children } = props;
      return (
        <Popup
          trigger={trigger || <button>Open</button>}
          title={title as string}
          width={width as string}
        >
          {children}
        </Popup>
      );
    },
    collapsiblesection: (props: CustomElementProps) => {
      const { title, defaultexpanded, children } = props;
      return (
        <CollapsibleSection
          title={title as string}
          defaultExpanded={parseBoolean(defaultexpanded, false)}
        >
          {children}
        </CollapsibleSection>
      );
    },
    // Enhanced standard markdown elements
    a: (props: CustomElementProps) => {
      const { href, children } = props;
      const hrefStr = href as string;
      const type = hrefStr?.startsWith('#') ? 'internal' : 
                   hrefStr?.startsWith('http') ? 'external' : 'document';
      return (
        <DynamicLink href={hrefStr} type={type}>
          {children}
        </DynamicLink>
      );
    },
    // Code blocks with syntax highlighting placeholder
    code: (props: CustomElementProps) => {
      const { inline, className: codeClassName, children } = props;
      if (inline) {
        return (
          <code
            style={{
              backgroundColor: '#f5f5f5',
              padding: '2px 6px',
              borderRadius: '3px',
              fontFamily: 'monospace',
              fontSize: '0.9em',
            }}
          >
            {children}
          </code>
        );
      }
      return (
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '6px',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: '0.9em',
          }}
        >
          <code className={codeClassName as string}>{children}</code>
        </pre>
      );
    },
    // Tables
    table: (props: CustomElementProps) => (
      <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid #e5e7eb',
          }}
          {...props}
        />
      </div>
    ),
    th: (props: CustomElementProps) => (
      <th
        style={{
          backgroundColor: '#f9fafb',
          padding: '12px',
          textAlign: 'left',
          borderBottom: '2px solid #e5e7eb',
          fontWeight: '600',
        }}
        {...props}
      />
    ),
    td: (props: CustomElementProps) => (
      <td
        style={{
          padding: '12px',
          borderBottom: '1px solid #e5e7eb',
        }}
        {...props}
      />
    ),
  };

  const mergedComponents = {
    ...defaultComponents,
    ...customComponents,
  };

  return (
    <div className={`ietp-markdown-viewer ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={allowHtml ? [rehypeRaw] : []}
        components={mergedComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
