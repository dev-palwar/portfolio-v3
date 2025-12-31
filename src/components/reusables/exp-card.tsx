import type { Experience as ExperienceType } from "@/types/portfolio";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { RenderIcon } from "@/components/reusables/RenderIcon";

interface ExpCardProps {
  exp: ExperienceType;
}

export function ExpCard({ exp }: ExpCardProps) {
  return (
    <div className="rounded-2xl border border-border p-4 sm:p-6 card-shadow space-y-3 sm:space-y-4">
      {/* Displays header details */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          {exp.logoUrl && (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src={exp.logoUrl}
                alt={exp.company}
                width={40}
                height={40}
                className="object-contain w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
          )}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Typography variant="heading2">{exp.company}</Typography>
            </div>
            <Typography variant="bodySm">{exp.role}</Typography>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1 sm:gap-2 text-left sm:text-right">
          <Typography variant="helpText">{exp.period}</Typography>
          <span className="sm:hidden text-muted-foreground">•</span>
          <Typography variant="helpText">{exp.place}</Typography>
        </div>
      </div>

      {/* Renders tech stack icons */}
      <div className="flex flex-wrap items-center gap-2">
        {exp.techStack?.map((tech, idx) => (
          <RenderIcon key={idx} name={tech} />
        ))}
      </div>

      {/* Lists highlights */}
      <ul className="space-y-2 mt-4 sm:mt-8">
        {exp.highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-baseline gap-2 sm:gap-3">
            <span className="shrink-0">•</span>
            <Typography variant="listItem">{highlight}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}
