import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";

import { Typography } from "@/components/ui/typography";
import { portfolioData } from "@/data/portfolio-data";
import ReactMarkdown from "react-markdown";

async function getWritingContent(contentPath: string) {
  try {
    const absolutePath = path.join(process.cwd(), contentPath);
    const file = await fs.readFile(absolutePath, "utf8");
    return file;
  } catch (error) {
    // Returns a simple fallback if content file does not exist
    return "Content comes soon.";
  }
}

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
        <Typography variant="heading1">Writing not found</Typography>
      </main>
    );
  }

  const markdown = await getWritingContent(writing.contentPath);

  return (
    <main className="min-h-screen section-spacing max-w-3xl mx-auto space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>

      <div className="space-y-4">
        <Typography variant="helpText">{writing.date}</Typography>
        <Typography variant="heading1" className="text-3xl md:text-4xl">
          {writing.title}
        </Typography>
      </div>

      {writing.coverImageUrl && (
        <div className="relative mt-4 overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            src={writing.coverImageUrl}
            alt={writing.title}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      <div className="mt-6">
        <ReactMarkdown
          //   className="space-y-4"
          components={{
            p({ node, ...props }) {
              return <Typography {...props} />;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </main>
  );
}
