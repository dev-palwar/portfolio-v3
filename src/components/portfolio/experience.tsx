import type { Experience as ExperienceType } from "@/types/portfolio";
import { Typography } from "@/components/ui/typography";
import { ExpCard } from "@/components/reusables/exp-card";

interface ExperienceProps {
  experiences: ExperienceType[];
  title?: string;
}

export function Experience({ experiences, title }: ExperienceProps) {
  return (
    <div className="spacing-secondary">
      {/* Section header */}
      {title && <SectionHeader title={title} />}

      {/* Experience list */}
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <article
            key={exp.id}
            className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2" />

            {/* Content card */}
            <ExpCard exp={exp} />
          </article>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ title }: { title: string }) {
  return (
    <Typography
      variant="heading1"
      className="animate-fade-in-up flex gap-2 items-center"
    >
      <span className="text-muted-foreground text-base sm:text-lg">{">"}</span> {title}
    </Typography>
  );
}
