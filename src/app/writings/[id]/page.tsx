import { BackButton } from "@/components/ui/back-button";
import { Typography } from "@/components/ui/typography";
import { portfolioData } from "@/data/portfolio-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "@/components/markdown/markdown-components";
import path from "path";
import fs from "fs/promises";
import { calculateReadingTime } from "@/lib/utils";

export default async function WritingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { writings } = portfolioData;
  const { id } = await params;

  const writing = writings.find((w) => w.id === id);

  if (!writing) {
    return (
      <main className="min-h-screen section-spacing">
        <div className="max-w-3xl mx-auto px-4">
          <Typography variant="heading1">Writing not found</Typography>
        </div>
      </main>
    );
  }

  const markdown = await getWritingContent(writing.contentPath);
  const readingTime = calculateReadingTime(markdown);

  return (
    <main className="min-h-screen pb-20">
      {/* Header with navigation */}
      <div className="sticky top-0 z-10 backdrop-blur-xl ">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <BackButton label="Back to writings" />
        </div>
      </div>

      {/* Article container */}
      <article className="max-w-3xl mx-auto px-4">
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
    </main>
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
