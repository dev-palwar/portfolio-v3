"use client";

import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { RenderIcon } from "../reusables/RenderIcon";
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
    <article className="h-full flex flex-col rounded-md border border-border bg-card overflow-hidden">
      {/* Image or placeholder */}
      <div className="relative aspect-video">
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            {isHovered && (
              // Overlay
              <div className="absolute bottom-0 left-0 w-full h-full p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {links && links.length > 0 && (
                  <div className="h-full flex justify-center items-center flex-wrap gap-4 sm:gap-8">
                    {links.map((link) => (
                      <RenderIcon
                        key={link.label}
                        name={link.label}
                        url={link.url}
                        className="cursor-pointer text-2xl sm:text-4xl text-white"
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
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 sm:gap-8">
        <div className="flex flex-col gap-2 sm:gap-4">
          <Link href={`/projects/${id}`}>
            <Typography variant="heading2" className="hover:underline">
              {title}
            </Typography>

            {metadata?.status && (
              metadata.status === "Building" ? (
                <Typography
                  variant="helpText"
                  className="border-none rounded-md px-2 py-1 w-fit mt-2
                  text-yellow-600 bg-yellow-500/10
                 animate-[softPulse_1.5s_ease-in-out_infinite]"
                >
                  {metadata.status.toLowerCase()}
                </Typography>
              ) : (
                <Typography
                  variant="helpText"
                  className="border-none rounded-md px-2 py-1 w-fit mt-2
                 border-green-500 text-green-600 bg-green-500/10"
                >
                  {metadata.status.toLowerCase()}
                </Typography>
              )
            )}


          </Link>
          <Typography
            variant="bodySm"
            className="line-clamp-3 sm:text-base"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br />"),
            }}
          />
        </div>

        <div className="flex justify-between items-center">
          {/* techStack */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {techStack.map((tag) => (
              <RenderIcon
                key={tag}
                name={tag}
                className="text-lg sm:text-xl"
                withColor={true}
              />
            ))}
          </div>

          <Link
            href={`/projects/${id}`}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 hover:underline"
          >
            <Typography
              variant="bodySm"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
            >
              View details
            </Typography>
            <RenderIcon name="next" />
          </Link>
        </div>
      </div>
    </article>
  );
}
