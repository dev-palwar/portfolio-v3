import type { SocialLink } from "@/types/portfolio";
import { Typography } from "../ui/typography";
import { RenderIcon } from "../reusables/RenderIcon";
import { Button } from "../ui/button";
import { HiDocument } from "react-icons/hi";
import { BiSolidMessage } from "react-icons/bi";

interface ProfileProps {
  name: string;
  tagline: string;
  bio: string;
  socials: SocialLink[];
}

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
        <div className="flex items-center gap-5 sm:gap-5">
          {socials.map((social) => {
            return (
              <RenderIcon
                className="text-xl"
                key={social.platform}
                name={social.platform}
                url={social.url}
              />
            );
          })}
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        <Button asChild variant="outline" className="border-slate-500">
          <a href="/devs-resume.pdf" target="_blank" rel="noopener noreferrer">
            <HiDocument className="w-4 h-4" />
            Resume / CV
          </a>
        </Button>

        <Button asChild variant="outline" className="border-slate-500">
          <a
            href="mailto:devpalwar06@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiSolidMessage className="w-4 h-4" />
            Get in touch
          </a>
        </Button>
      </div>

      {/* Bio */}
      {/* <p className="text-muted-foreground text-lg leading-relaxed">{bio}</p> */}
      <Typography>{bio}</Typography>
    </section>
  );
}
