import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import type { SocialLink } from "@/types/portfolio";
import { Typography } from "../ui/typography";

interface ProfileProps {
  name: string;
  tagline: string;
  bio: string;
  socials: SocialLink[];
}

const socialIcons = {
  github: FaGithub,
  linkedin: LiaLinkedinIn,
  twitter: BsTwitter,
  email: IoMdMail,
  website: CiGlobe,
} as const;

export function Profile({ name, tagline, bio, socials }: ProfileProps) {
  return (
    <section className="spacing-secondary">
      {/* Header with name and social links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 animate-fade-in-up">
        <div className="flex flex-col gap-1">
          <Typography className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
            <span className="font-bold flex items-baseline gap-[5px] text-primary">
              {name}
              <span className="block rounded-full h-2 w-2 bg-portfolio-accent" />
            </span>
          </Typography>
          <Typography>{tagline}</Typography>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {socials.map((social) => {
            const Icon = socialIcons[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label || social.platform}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bio */}
      <Typography>{bio}</Typography>
    </section>
  );
}
