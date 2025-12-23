import type { Writing } from "@/types/portfolio";
import { Typography } from "../ui/typography";

interface RecentWritingProps {
  writings: Writing[];
  title?: string;
}

export function RecentWriting({
  writings,
  title = "Recent writings",
}: RecentWritingProps) {
  return (
    <section className="">
      <div className="spacing-secondary">
        <Typography variant="heading1" className="animate-fade-in-up">
          <span className="text-muted-foreground">{">"}</span> {title}
        </Typography>

        <div className="mt-10 space-y-8">
          {writings.map((writing, index) => (
            <div
              key={writing.id}
              className="flex items-baseline justify-between gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <Typography variant="heading2">{writing.title}</Typography>
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
    </section>
  );
}
