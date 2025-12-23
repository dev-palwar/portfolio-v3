"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { RenderIcon } from "../Icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component.
 * Displays project with image (or placeholder), title, description, and tags.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imageUrl, tags, links } = project;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="group h-full flex flex-col rounded-md border border-border bg-card overflow-hidden card-shadow">
      {/* Image or placeholder */}
      <div className="relative aspect-4/2 overflow-hidden">
        {imageUrl ? (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={cn(
                "object-cover transition-all brightness-100",
                isHovered && "blur-xs brightness-50"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {isHovered && (
              // Overlay
              <div className="absolute bottom-0 left-0 w-full h-full p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {links && links.length > 0 && (
                  <div className="h-full flex justify-center items-center flex-wrap gap-8">
                    {links.map((link) => (
                      <RenderIcon
                        key={link.label}
                        name={link.label}
                        url={link.url}
                        className="cursor-pointer text-4xl"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full bg-placeholder-bg border-b border-dashed border-placeholder-border flex items-center justify-center">
            <div className="text-muted-foreground/40 text-sm">
              Image placeholder
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col bg-[#171717] justify-between">
        <div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag) => (
            <RenderIcon key={tag} name={tag} className="text-xl" />
          ))}
        </div>

        {/* Links */}
        {/* {links && links.length > 0 && (
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
        )} */}
      </div>
    </article>
  );
}
