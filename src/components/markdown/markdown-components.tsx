import type { Components } from "react-markdown";

/**
 * Resolves image source paths from Notion exports.
 * Handles external URLs, relative paths, and simple filenames.
 */
function resolveImageSrc(src: string | undefined): string {
  if (!src) return "";

  // External URLs - uses as-is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  // Handles relative paths from Notion exports (e.g., ../../assets/writings/image.jpg)
  // Extracts just the filename and maps to public folder
  const filename = src.split("/").pop() || src;

  // Checks if it's already a proper path
  if (src.startsWith("/")) {
    return src;
  }

  // Maps to the public assets folder
  return `/assets/writings/${filename}`;
}

/**
 * Custom markdown components for Notion-like rendering.
 * Provides a clean, professional reading experience.
 */
export const markdownComponents: Components = {
  // Headings with proper hierarchy and spacing
  h1({ node, children, ...props }) {
    return (
      <h1
        className="text-3xl md:text-4xl font-bold text-foreground mt-12 mb-6 first:mt-0 tracking-tight"
        {...props}
      >
        {children}
      </h1>
    );
  },

  h2({ node, children, ...props }) {
    return (
      <h2
        className="text-2xl md:text-[1.75rem] font-semibold text-foreground mt-10 mb-4 first:mt-0 tracking-tight border-b border-border/40 pb-3"
        {...props}
      >
        {children}
      </h2>
    );
  },

  h3({ node, children, ...props }) {
    return (
      <h3
        className="text-xl md:text-[1.375rem] font-semibold text-foreground mt-8 mb-3 first:mt-0 tracking-tight"
        {...props}
      >
        {children}
      </h3>
    );
  },

  h4({ node, children, ...props }) {
    return (
      <h4
        className="text-lg font-semibold text-foreground mt-6 mb-2 first:mt-0"
        {...props}
      >
        {children}
      </h4>
    );
  },

  // Paragraph with optimal line height for readability
  p({ node, children, ...props }) {
    return (
      <p
        className="text-[1.0625rem] leading-[1.8] text-muted-foreground mb-5 last:mb-0"
        {...props}
      >
        {children}
      </p>
    );
  },

  // Lists with proper styling
  ul({ node, children, ...props }) {
    return (
      <ul
        className="my-5 ml-1 space-y-2.5 list-none"
        {...props}
      >
        {children}
      </ul>
    );
  },

  ol({ node, children, ...props }) {
    return (
      <ol
        className="my-5 ml-1 space-y-2.5 list-none counter-reset-list"
        {...props}
      >
        {children}
      </ol>
    );
  },

  li({ node, children, ...props }) {
    return (
      <li
        className="relative pl-6 text-[1.0625rem] leading-[1.75] text-muted-foreground before:content-['•'] before:absolute before:left-0 before:text-muted-foreground/60 before:font-bold"
        {...props}
      >
        {children}
      </li>
    );
  },

  // Inline code with subtle background
  code({ node, className, children, ...props }: any) {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-muted text-foreground text-[0.9375rem] font-mono border border-border"
          {...props}
        >
          {children}
        </code>
      );
    }

    // Code blocks - handled by pre
    return (
      <code className="text-[0.875rem] font-mono" {...props}>
        {children}
      </code>
    );
  },

  // Code blocks with syntax highlighting feel
  pre({ node, children, ...props }) {
    return (
      <pre
        className="my-6 p-4 rounded-xl bg-card border border-border overflow-x-auto"
        {...props}
      >
        {children}
      </pre>
    );
  },

  // Images with proper aspect ratio and rounded corners
  // Uses span wrappers to avoid hydration errors (figure can't be inside p)
  img({ node, src, alt, ...props }: any) {
    const resolvedSrc = resolveImageSrc(src);

    return (
      <span className="block my-8">
        <span className="block relative rounded-xl overflow-hidden border border-border bg-card/50">
          <img
            src={resolvedSrc}
            alt={alt || ""}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </span>
        {alt && alt !== src?.split("/").pop() && (
          <span className="block mt-3 text-center text-sm text-muted-foreground italic">
            {alt}
          </span>
        )}
      </span>
    );
  },

  // Links with underline on hover
  a({ node, href, children, ...props }: any) {
    const isExternal = href?.startsWith("http");

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-2 hover:decoration-primary/60 transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },

  // Bold text
  strong({ node, children, ...props }) {
    return (
      <strong className="font-semibold text-foreground" {...props}>
        {children}
      </strong>
    );
  },

  // Italic text
  em({ node, children, ...props }) {
    return (
      <em className="italic text-foreground/90" {...props}>
        {children}
      </em>
    );
  },

  // Blockquotes with left border accent
  blockquote({ node, children, ...props }) {
    return (
      <blockquote
        className="my-6 pl-5 border-l-[3px] border-border italic text-muted-foreground"
        {...props}
      >
        {children}
      </blockquote>
    );
  },

  // Horizontal rules
  hr({ node, ...props }) {
    return (
      <hr
        className="my-10 border-none h-px bg-gradient-to-r from-transparent via-border to-transparent"
        {...props}
      />
    );
  },

  // Tables with clean styling
  table({ node, children, ...props }) {
    return (
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table
          className="w-full text-sm text-left"
          {...props}
        >
          {children}
        </table>
      </div>
    );
  },

  thead({ node, children, ...props }) {
    return (
      <thead className="bg-card text-foreground border-b border-border" {...props}>
        {children}
      </thead>
    );
  },

  tbody({ node, children, ...props }) {
    return (
      <tbody className="divide-y divide-border" {...props}>
        {children}
      </tbody>
    );
  },

  tr({ node, children, ...props }) {
    return (
      <tr className="hover:bg-muted/30 transition-colors" {...props}>
        {children}
      </tr>
    );
  },

  th({ node, children, ...props }) {
    return (
      <th className="px-4 py-3 font-semibold text-foreground" {...props}>
        {children}
      </th>
    );
  },

  td({ node, children, ...props }) {
    return (
      <td className="px-4 py-3 text-muted-foreground" {...props}>
        {children}
      </td>
    );
  },
};
