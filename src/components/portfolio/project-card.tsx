import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { RenderIcon } from "../Icons";

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component.
 * Displays project with image (or placeholder), title, description, and tags.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imageUrl, tags, links } = project;

  return (
    <article className="group h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image or placeholder */}
      <div className="relative aspect-4/2 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-placeholder-bg border-b border-dashed border-placeholder-border flex items-center justify-center">
            <div className="text-muted-foreground/40 text-sm">
              Image placeholder
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col bg-[#171717]">
        <h3 className="text-xl font-medium mb-2 group-hover:text-portfolio-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <RenderIcon name={tag} />
          ))}
        </div>

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2 border-t border-border mt-auto">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
