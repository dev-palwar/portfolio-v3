import type { Experience as ExperienceType } from "@/types/portfolio";
import Image from "next/image";
import { RenderIcon } from "../Icons";

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
  title = "Experiences",
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
              <div className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 " />

              {/* Content card */}
              <div className="rounded-2xl border border-border bg-card p-6 card-shadow space-y-4">
                {/* Header */}
                <div className="flex items-center gap-4 justify-between">
                  {/* Company Logo */}
                  <div className="flex items-center gap-4">
                    {exp.logoUrl && (
                      <div className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center overflow-hidden shrink-0">
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
                        <h3 className="font-display text-base md:text-lg font-medium text-white">
                          {exp.company}
                        </h3>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.place}
                    </span>
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
                    <li
                      key={idx}
                      className="text-sm text-foreground/80 leading-relaxed flex gap-3"
                    >
                      <span className="shrink-0">•</span>
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
