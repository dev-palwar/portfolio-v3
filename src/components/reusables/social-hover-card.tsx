"use client";

import { useState } from "react";
import { RenderIcon } from "./RenderIcon";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/portfolio";

// Per-platform metadata shown inside the hover card
const SOCIAL_META: Record<
  SocialLink["platform"],
  { handle: string; description: string; displayUrl: string }
> = {
  github: {
    handle: "@dev-palwar",
    description: "Open-source projects and the source for my work.",
    displayUrl: "github.com/dev-palwar",
  },
  linkedin: {
    handle: "dev-palwar",
    description: "Professional experience and career updates.",
    displayUrl: "linkedin.com/in/dev-palwar",
  },
  twitter: {
    handle: "@dev_palwar2",
    description: "Building in public, sharing what I'm learning.",
    displayUrl: "x.com/dev_palwar2",
  },
  medium: {
    handle: "@devpalwar06",
    description: "Writing about code, systems, and side-projects.",
    displayUrl: "medium.com/@devpalwar06",
  },
  leetcode: {
    handle: "devpalwar",
    description: "Grinding DSA problems one day at a time.",
    displayUrl: "leetcode.com/devpalwar",
  },
  email: {
    handle: "devpalwar06@gmail.com",
    description: "Reach me directly for work or collaboration.",
    displayUrl: "devpalwar06@gmail.com",
  },
  website: {
    handle: "devpalwar.me",
    description: "My corner of the internet.",
    displayUrl: "devpalwar.me",
  },
};

interface SocialHoverCardProps {
  social: SocialLink;
}

export function SocialHoverCard({ social }: SocialHoverCardProps) {
  const [visible, setVisible] = useState(false);
  const meta = SOCIAL_META[social.platform];
  const label =
    social.label ??
    social.platform.charAt(0).toUpperCase() + social.platform.slice(1);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Icon trigger */}
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block text-xl text-muted-foreground transition-colors duration-200",
          visible && "text-foreground",
        )}
        tabIndex={0}
        aria-label={label}
      >
        <RenderIcon name={social.platform} className="text-xl" />
      </a>

      {/* Hover card */}
      <div
        className={cn(
          // Position: appears below the icon, left-aligned
          "absolute z-50 top-full left-1/2 -translate-x-1/2 mt-3",
          // Size
          "w-64",
          // Appearance
          "bg-popover border border-border rounded-xl shadow-lg overflow-hidden",
          // Animation via CSS classes
          "transition-none",
          visible
            ? "animate-social-card-in pointer-events-auto"
            : "animate-social-card-out pointer-events-none",
        )}
        role="tooltip"
      >
        {/* Icon header */}
        <div className="p-4 pb-3 flex items-center gap-3 border-b border-border/60">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
            <RenderIcon name={social.platform} withColor className="text-xl" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-lg text-foreground leading-tight">
              {label}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {meta.handle}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 pt-3 flex flex-col gap-2">
          {meta.description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {meta.description}
            </p>
          )}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary font-medium hover:underline truncate"
          >
            {meta.displayUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
