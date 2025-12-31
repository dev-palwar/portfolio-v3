import { NavigationButton } from "@/components/ui/navigation-button";
import { Typography } from "@/components/ui/typography";
import { writings } from "@/data/writings";
import Link from "next/link";

export default function WritingsPage() {
  return (
    <main className="min-h-screen section-spacing">
      <NavigationButton label="Back to home" />

      <div className="flex flex-col gap-3 sm:gap-4 border-b border-border pb-8 sm:pb-12">
        <Typography variant="heading1" className="uppercase font-bold">
          Writings.
        </Typography>
        <Typography variant="body">
          My thoughts, guides, and learnings. Mostly about development and
          tools.
        </Typography>
      </div>

      <div className="section-spacing">
        <div className="spacing-secondary">
          <Typography variant="heading2">
            All writings{" "}
            <span className="text-xs text-muted-foreground">
              ({writings.length})
            </span>
          </Typography>
          <div className="mt-6 sm:mt-10 space-y-6 sm:space-y-8">
            {writings.map((writing, index) => (
              <div
                key={writing.id}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Link href={`/writings/${writing.id}`}>
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
        </div>
      </div>
    </main>
  );
}
