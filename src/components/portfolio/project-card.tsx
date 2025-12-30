"use client";

import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { RenderIcon } from "../Icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, description, imageUrl, techStack, links, metadata } =
    project;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="h-full flex flex-col rounded-md border border-border bg-card overflow-hidden card-shadow">
      {/* Image or placeholder */}
      <div className="relative aspect-9/6 overflow-hidden">
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
                isHovered && "blur-md brightness-50"
              )}
              // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        className="cursor-pointer text-4xl text-foreground"
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
      <div className="p-5 flex-1 flex flex-col bg-card-bg justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Link href={`/projects/${id}`}>
            <Typography variant="heading2" className="hover:underline">
              {title}
            </Typography>
            {metadata?.status && (
              <Typography
                variant="helpText"
                className="border border-border rounded-md px-2 py-1 w-fit max-w-fit mt-2 text-green-500 bg-green-500/10"
              >
                {metadata?.status.toLowerCase()}
              </Typography>
            )}
          </Link>
          <Typography variant="body" className="line-clamp-3">
            {description}
          </Typography>
        </div>

        {/* techStack */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((tag) => (
            <RenderIcon
              key={tag}
              name={tag}
              className="text-xl"
              withColor={true}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
