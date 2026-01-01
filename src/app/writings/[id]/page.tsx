import { Typography } from "@/components/ui/typography";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "@/components/markdown/markdown-components";
import path from "path";
import fs from "fs/promises";
import { calculateReadingTime } from "@/lib/utils";
import { writings } from "@/data/writings";

export default async function WritingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const writing = writings?.find((w) => w.id === id);

  if (!writing) {
    return (
      <main className="min-h-screen section-spacing">
        <Typography variant="heading1">Writing not found</Typography>
      </main>
    );
  }

  const markdown = await getWritingContent(writing.contentPath);
  const readingTime = calculateReadingTime(markdown);

  return (
    <>
      {/* Article container */}
      <article>
        {/* Markdown content */}
        <div className="prose-container">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}

/**
 * Reads the markdown content from the specified path.
 * Returns fallback message if file doesn't exist.
 */
export async function getWritingContent(contentPath: string) {
  try {
    const absolutePath = path.join(process.cwd(), contentPath);
    const file = await fs.readFile(absolutePath, "utf8");
    return file;
  } catch (error) {
    return "Content coming soon.";
  }
}
