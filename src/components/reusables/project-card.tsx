"use client";

import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { RenderIcon } from "../reusables/RenderIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, description, imageUrl, techStack, links, metadata } =
    project;

  const isBuilding = metadata?.status === "Building";
  const statusLabel = isBuilding ? "Building" : (metadata?.status ?? null);

  return (
    <article className="group h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Wrapper with Hover Controls */}
      <div className="relative aspect-video overflow-hidden group/image bg-muted border-b border-border">
        <Link href={`/projects/${id}`} className="absolute inset-0 block z-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover/image:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground/40 text-sm">No image</span>
            </div>
          )}
        </Link>

        {/* Hover Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10 pointer-events-none group-hover/image:pointer-events-auto">
          {links && links.length > 0 ? (
            links.map((link, idx) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 text-xs font-semibold bg-background hover:bg-background text-foreground border border-border/40 rounded-lg shadow-md flex items-center gap-2 hover:scale-[1.05] transition-all duration-300 ease-out transform translate-y-3 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100",
                  idx === 0 ? "delay-[0ms]" : "delay-[75ms]",
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <RenderIcon
                  name={link.label}
                  className="text-sm shrink-0"
                  withColor={true}
                />
                {/* <span>{link.label === "Live" ? "Live site" : link.label}</span> */}
              </a>
            ))
          ) : (
            <Link
              href={`/projects/${id}`}
              className="px-4 py-2 text-xs font-semibold bg-background/90 hover:bg-background text-foreground border border-border/40 rounded-lg shadow-md flex items-center gap-2 hover:scale-[1.05] transition-all duration-300 ease-out transform translate-y-3 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100"
            >
              <span>View details</span>
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col gap-3">
        {/* Title */}
        <Link href={`/projects/${id}`}>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight leading-tight hover:opacity-70 transition-opacity duration-200">
            {title}
          </h2>
        </Link>

        {/* Period + Status row */}
        <div className="flex items-center justify-between gap-2">
          {metadata?.timeline && (
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {metadata.timeline}
            </p>
          )}
          {statusLabel && (
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-widest",
                isBuilding
                  ? "text-yellow-500 animate-[softPulse_1.5s_ease-in-out_infinite]"
                  : "text-green-500",
              )}
            >
              {statusLabel}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="text-sm text-muted-foreground leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, "<br />"),
          }}
        />

        {/* Footer: tech stack only */}
        <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border/60">
          <div className="flex items-center gap-1.5 shrink-0">
            {techStack.slice(0, 4).map((tag) => (
              <RenderIcon
                key={tag}
                name={tag}
                className="text-base"
                withColor={true}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
