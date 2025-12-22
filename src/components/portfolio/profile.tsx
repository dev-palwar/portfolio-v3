import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import type { SocialLink } from "@/types/portfolio";

interface ProfileProps {
  name: string;
  tagline: string;
  bio: string;
  socials: SocialLink[];
}

/** Maps social platform to corresponding icon. */
const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
  website: Globe,
} as const;

/**
 * Profile section component.
 * Displays name, tagline, bio, and social links.
 */
export function Profile({ name, tagline, bio, socials }: ProfileProps) {
  return (
    <section className="section-spacing">
      <div className="">
        {/* Header with name and social links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in-up">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight">
              {name}
            </h1>
            <p className="text-muted-foreground mt-1">{tagline}</p>
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
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg whitespace-pre-line animate-fade-in-up animate-stagger-1">
          {bio}
        </p>
      </div>
    </section>
  );
}
