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
    mediaembed: (props: any) => {
      const { src, type, title, autoplay, controls, loop, width, height, responsive, poster } = props;
      return (
        <MediaEmbed
          src={src}
          type={type as 'video' | 'audio'}
          title={title}
          autoplay={autoplay as 'on' | 'off' | 'muted'}
          controls={controls !== 'false'}
          loop={loop === 'true'}
          width={width}
          height={height}
          responsive={responsive !== 'false'}
          poster={poster}
        />
      );
    },
    tooltip: (props: any) => {
      const { content, position, children } = props;
      return (
        <Tooltip content={content} position={position}>
          {children}
        </Tooltip>
      );
    },
    popup: (props: any) => {
      const { title, width, trigger, children } = props;
      return (
        <Popup
          trigger={trigger || <button>Open</button>}
          title={title}
          width={width}
        >
          {children}
        </Popup>
      );
    },
    collapsiblesection: (props: any) => {
      const { title, defaultexpanded, children } = props;
      return (
        <CollapsibleSection
          title={title}
          defaultExpanded={defaultexpanded === 'true'}
        >
          {children}
        </CollapsibleSection>
      );
    },
    // Enhanced standard markdown elements
    a: (props: any) => {
      const { href, children } = props;
      const type = href?.startsWith('#') ? 'internal' : 
                   href?.startsWith('http') ? 'external' : 'document';
      return (
        <DynamicLink href={href} type={type}>
          {children}
        </DynamicLink>
      );
    },
    // Code blocks with syntax highlighting placeholder
    code: (props: any) => {
      const { inline, className, children } = props;
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
          <code className={className}>{children}</code>
        </pre>
      );
    },
    // Tables
    table: (props: any) => (
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
    th: (props: any) => (
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
    td: (props: any) => (
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
