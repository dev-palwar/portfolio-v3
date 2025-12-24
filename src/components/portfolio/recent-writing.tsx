import type { Writing } from "@/types/portfolio";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { NavigationButton } from "@/components/ui/navigation-button";
import { RenderIcon } from "../Icons";
import { Button } from "../ui/button";

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
              <Link href={`/writings/${writing.id}`} key={writing.id}>
                <Typography variant="heading2">{writing.title}</Typography>
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

        <div className="flex gap-1">
          <Button
            variant={"link"}
            href="/writings"
            className="p-0 text-muted-foreground"
          >
            View all writings
            <RenderIcon name="next" />
          </Button>
        </div>
      </div>
    </section>
  );
}
