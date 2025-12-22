import type { Experience as ExperienceType } from "@/types/portfolio";

interface ExperienceProps {
  experiences: ExperienceType[];
  title?: string;
}

/**
 * Experience section component.
 * Displays work experience with a clean timeline aesthetic.
 */
export function Experience({
  experiences,
  title = "Experience",
}: ExperienceProps) {
  return (
    <section className="section-spacing">
      <div className=" ">
        {/* Section header */}
        <h2 className="font-display text-2xl md:text-3xl font-medium mb-12 animate-fade-in-up">
          {title}
        </h2>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 border-[var(--portfolio-accent)] bg-background" />

              {/* Content card */}
              <div className="rounded-xl border border-border bg-card p-6 card-shadow">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-medium">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground/80 leading-relaxed flex gap-3"
                    >
                      <span className="text-[var(--portfolio-accent)] mt-1.5 flex-shrink-0">
                        •
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
