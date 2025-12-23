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
} from "react-icons/si";
import { SiMongodb, SiFramer } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { cn } from "@/lib/utils";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

interface Props {
  name: string;
  url?: string;
  className?: string;
}

export function RenderIcon({ name, url, className }: Props) {
  const normalized = name.toLowerCase();

  // Renders an icon as a clickable link if url provided,
  // with special style for "live" icons.
  const renderLinkIcon = (icon: React.ReactNode) => {
    if (!url) return icon;

    // All other links
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        tabIndex={0}
      >
        {icon}
      </a>
    );
  };

  switch (normalized) {
    case "github":
      return renderLinkIcon(
        <FaGithub
          className={cn("text-[#181717] dark:text-[#f5f5f5]", className)}
        />
      );
    case "linkedin":
      return renderLinkIcon(
        <LiaLinkedinIn className={cn("text-[#0A66C2]", className)} />
      );
    case "twitter":
      return renderLinkIcon(
        <BsTwitter className={cn("text-[#1DA1F2]", className)} />
      );
    case "email":
      return renderLinkIcon(
        <IoMdMail className={cn("text-gray-400", className)} />
      );
    case "website":
      return renderLinkIcon(
        <CiGlobe className={cn("text-blue-500", className)} />
      );
    case "react":
      return renderLinkIcon(
        <FaReact className={cn("text-[#61DAFB]", className)} />
      );
    case "nextjs":
      return renderLinkIcon(
        <RiNextjsFill
          className={cn("text-[#000] dark:text-white", className)}
        />
      );
    case "tailwindcss":
      return renderLinkIcon(
        <TbBrandTailwind className={cn("text-[#38BDF8]", className)} />
      );
    case "typescript":
      return renderLinkIcon(
        <SiTypescript className={cn("text-[#3178C6]", className)} />
      );
    case "javascript":
      return renderLinkIcon(
        <SiJavascript className={cn("text-[#F7DF1E]", className)} />
      );
    case "nodejs":
      return renderLinkIcon(
        <FaNodeJs className={cn("text-[#339933]", className)} />
      );
    case "mongodb":
      return renderLinkIcon(
        <SiMongodb className={cn("text-[#47A248]", className)} />
      );
    case "expressjs":
      return renderLinkIcon(
        <SiExpress className={cn("text-gray-400", className)} />
      );
    case "graphql":
      return renderLinkIcon(
        <SiGraphql className={cn("text-[#E10098]", className)} />
      );
    case "chakraui":
      return renderLinkIcon(
        <SiChakraui className={cn("text-[#319795]", className)} />
      );
    case "sass":
      return renderLinkIcon(
        <SiSass className={cn("text-[#CC6699]", className)} />
      );
    case "framer-motion":
      return renderLinkIcon(
        <SiFramer className={cn("text-[#0055FF] dark:text-white", className)} />
      );
    case "redux":
      return renderLinkIcon(
        <SiRedux className={cn("text-[#764ABC]", className)} />
      );
    case "webpack":
      return renderLinkIcon(
        <SiWebpack className={cn("text-[#8DD6F9]", className)} />
      );
    case "npm":
      return renderLinkIcon(
        <SiNpm className={cn("text-[#CB3837]", className)} />
      );
    case "firebase":
      return renderLinkIcon(
        <IoLogoFirebase className={cn("text-[#FFCA28]", className)} />
      );
    case "vite":
      return renderLinkIcon(
        <SiVite className={cn("text-[#646CFF]", className)} />
      );
    case "live":
      return renderLinkIcon(
        <GoProjectSymlink className={cn("text-white", className)} />
      );
    default:
      return (
        <div className={cn("w-5 h-5 text-muted-foreground", className)}>
          {name}
        </div>
      );
  }
}
