import { NavigationButton } from "@/components/ui/navigation-button";
import { Typography } from "@/components/ui/typography";
import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";

export default function WritingsPage() {
  const { writings } = portfolioData;

  return (
    <main className="min-h-screen section-spacing">
      <div className="mb-12">
        <NavigationButton label="Back to home" />
      </div>

      <div className="flex flex-col gap-4 border-b border-border pb-12">
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
          <div className="mt-10 space-y-8">
            {writings.map((writing, index) => (
              <div
                key={writing.id}
                className="flex items-baseline justify-between gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <Link href={`/writings/${writing.id}`}>
                  <Typography variant="heading2" className="hover:underline">
                    {writing.title}
                  </Typography>
                </Link>
                <Typography
                  variant="helpText"
                  className="text-right uppercase tracking-[0.16em]"
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
