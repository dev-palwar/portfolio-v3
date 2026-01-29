import React from "react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import {
  SiChakraui,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiNpm,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiMongodb,
  SiFramer,
  SiPrisma,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSocketdotio,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { GoArrowRight } from "react-icons/go";
import { SiLeetcode } from "react-icons/si";
import { SiMedium } from "react-icons/si";

// Maps icon names to color classes for colored display
const iconColorMap: Record<string, string> = {
  github: "text-github",
  linkedin: "text-linkedin",
  twitter: "text-twitter",
  email: "text-muted-foreground",
  website: "text-primary",
  react: "text-react",
  nextjs: "text-nextjs",
  tailwindcss: "text-tailwindcss",
  typescript: "text-typescript",
  javascript: "text-javascript",
  nodejs: "text-nodejs",
  mongodb: "text-mongodb",
  expressjs: "text-muted-foreground",
  graphql: "text-graphql",
  chakraui: "text-chakraui",
  sass: "text-sass",
  "framer-motion": "text-framer-motion",
  redux: "text-redux",
  webpack: "text-webpack",
  npm: "text-npm",
  firebase: "text-firebase",
  vite: "text-vite",
  live: "text-foreground",
  next: "text-muted-foreground",
  prisma: "text-prisma",
  python: "text-[#3776AB]",
  html: "text-html",
  css: "text-css",
  websocket: "text-websocket",
  leetcode: "text-leetcode",
  medium: "text-medium",
};

// Maps icon names to their React components
const iconComponentMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  github: FaGithub,
  linkedin: LiaLinkedinIn,
  twitter: BsTwitter,
  email: IoMdMail,
  website: CiGlobe,
  react: FaReact,
  nextjs: RiNextjsFill,
  tailwindcss: TbBrandTailwind,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nodejs: FaNodeJs,
  mongodb: SiMongodb,
  expressjs: SiExpress,
  graphql: SiGraphql,
  chakraui: SiChakraui,
  sass: SiSass,
  "framer-motion": SiFramer,
  redux: SiRedux,
  webpack: SiWebpack,
  npm: SiNpm,
  firebase: IoLogoFirebase,
  vite: SiVite,
  live: GoProjectSymlink,
  next: GoArrowRight,
  prisma: SiPrisma,
  python: SiPython,
  html: SiHtml5,
  css: SiCss3,
  websocket: SiSocketdotio,
  leetcode: SiLeetcode,
  medium: SiMedium,
};

interface RenderIconProps {
  name: string;
  url?: string;
  className?: string;
  withColor?: boolean;
}

export function RenderIcon({
  name,
  url,
  className,
  withColor = false,
}: RenderIconProps) {
  const normalized = name.toLowerCase();
  const IconComponent = iconComponentMap[normalized];

  const iconClassName = cn(
    withColor && iconColorMap[normalized],
    !withColor && "text-muted-foreground",
    className
  );

  // Renders icon node (component or fallback text node)
  const iconNode = IconComponent ? (
    <IconComponent className={iconClassName} />
  ) : (
    <div className={iconClassName}>{name}</div>
  );

  // Tooltip logic with group (for proper hover/focus behavior)
  const label =
    normalized === "framer-motion"
      ? "Framer Motion"
      : normalized.charAt(0).toUpperCase() + normalized.slice(1);

  const tooltipNode = (
    <div className="relative inline-block group focus-within:outline-none">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none"
          tabIndex={0}
        >
          {iconNode}
        </a>
      ) : (
        iconNode
      )}
      {/* Tooltip (visible on hover/focus) */}
      <div
        className={cn(
          "pointer-events-none absolute z-20 left-1/2 -translate-x-1/2",
          "bottom-full mb-2 px-2 py-1 rounded bg-popover text-xs text-popover-foreground shadow",
          "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150",
          "whitespace-nowrap"
        )}
        role="tooltip"
      >
        {label}
      </div>
    </div>
  );

  return tooltipNode;
}
