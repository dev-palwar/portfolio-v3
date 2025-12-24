import type { Experience as ExperienceType } from "@/types/portfolio";
import Image from "next/image";
import { RenderIcon } from "../Icons";
import { Typography } from "../ui/typography";

interface ExperienceProps {
  experiences: ExperienceType[];
  title?: string;
}

/**
 * Experience section component.
 * Displays work experience with a clean timeline aesthetic.
 */
export function Experience({ experiences, title }: ExperienceProps) {
  return (
    <section className="">
      <div className="spacing-secondary">
        {/* Section header */}
        <Typography variant="heading1" className="animate-fade-in-up">
          <span className="text-muted-foreground">{">"}</span> {title}
        </Typography>

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
              <div className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 " />

              {/* Content card */}
              <div className="rounded-2xl border border-border p-6 card-shadow space-y-4">
                {/* Header */}
                <div className="flex items-center gap-4 justify-between">
                  {/* Company Logo */}
                  <div className="flex items-center gap-4">
                    {exp.logoUrl && (
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden shrink-0">
                        <Image
                          src={exp.logoUrl}
                          alt={exp.company}
                          width={40}
                          height={40}
                          className="object-contain w-8 h-8"
                        />
                      </div>
                    )}

                    {/* Company, links, and role */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <Typography variant="heading2">
                          {exp.company}
                        </Typography>
                      </div>
                      <Typography variant="bodySm">{exp.role}</Typography>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Typography variant="helpText">{exp.period}</Typography>
                    <Typography variant="helpText">{exp.place}</Typography>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {exp.techStack?.map((tech, idx) => (
                    <RenderIcon key={idx} name={tech} />
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mt-8">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-baseline gap-3">
                      <span className="shrink-0">•</span>
                      <Typography variant="listItem">{highlight}</Typography>
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
