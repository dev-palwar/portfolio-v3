import type { Writing } from "@/types/portfolio";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { RenderIcon } from "../reusables/RenderIcon";
import { Button } from "../ui/button";
import { SectionHeader } from "./experience";

interface RecentWritingProps {
  writings: Writing[];
  title?: string;
}

export function RecentWriting({
  writings,
  title = "Recent writings",
}: RecentWritingProps) {
  return (
    <section>
      <div className="spacing-secondary">
        {title && <SectionHeader title={title} />}

        <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-8">
          {writings.map((writing, index) => (
            <div
              key={writing.id}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <Link href={`/writings/${writing.id}`} key={writing.id}>
                <Typography variant="heading2" className="hover:underline">
                  {writing.title}
                </Typography>
              </Link>
              <Typography
                variant="helpText"
                className="sm:text-right uppercase tracking-[0.16em] shrink-0"
              >
                {writing.date}
              </Typography>
            </div>
          ))}
        </div>

        <Link
          href="/writings"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 hover:underline"
        >
          View all writings
          <RenderIcon name="next" />
        </Link>
      </div>
    </section>
  );
}
