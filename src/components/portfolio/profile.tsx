import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import type { SocialLink } from "@/types/portfolio";
import { Typography } from "../ui/typography";
import { SiLeetcode } from "react-icons/si";
import { RenderIcon } from "../reusables/RenderIcon";

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

      {/* Bio */}
      <Typography>{bio}</Typography>
    </section>
  );
}
