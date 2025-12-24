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
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { GoArrowRight } from "react-icons/go";

// Maps icon names to color classes for colored display
const iconColorMap: Record<string, string> = {
  github: "text-[#181717] dark:text-[#f5f5f5]",
  linkedin: "text-[#0A66C2]",
  twitter: "text-[#1DA1F2]",
  email: "text-gray-400",
  website: "text-blue-500",
  react: "text-[#61DAFB]",
  nextjs: "text-[#000] dark:text-white",
  tailwindcss: "text-[#38BDF8]",
  typescript: "text-[#3178C6]",
  javascript: "text-[#F7DF1E]",
  nodejs: "text-[#339933]",
  mongodb: "text-[#47A248]",
  expressjs: "text-gray-400",
  graphql: "text-[#E10098]",
  chakraui: "text-[#319795]",
  sass: "text-[#CC6699]",
  "framer-motion": "text-[#0055FF] dark:text-white",
  redux: "text-[#764ABC]",
  webpack: "text-[#8DD6F9]",
  npm: "text-[#CB3837]",
  firebase: "text-[#FFCA28]",
  vite: "text-[#646CFF]",
  live: "text-white",
  next: "text-muted-foreground",
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
