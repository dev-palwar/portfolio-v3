import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import type { SocialLink } from "@/types/portfolio";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

interface ProfileProps {
  name: string;
  tagline: string;
  bio: string;
  socials: SocialLink[];
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  website: Globe,
} as const;

export function Profile({ name, tagline, bio, socials }: ProfileProps) {
  return (
    <section className="">
      <div className="space-y-8">
        {/* Header with name and social links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in-up">
          <div className="flex flex-col gap-1">
            <Typography className="text-3xl md:text-4xl font-medium tracking-tight">
              <span className="font-bold flex items-baseline gap-[5px] text-[antiquewhite]">
                {name}
                <span className="block rounded-full h-2 w-2 bg-[antiquewhite]" />
              </span>
            </Typography>
            <Typography>{tagline}</Typography>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
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
      </div>
    </section>
  );
}
