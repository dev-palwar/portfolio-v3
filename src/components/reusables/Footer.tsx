import { portfolioData } from "@/data/portfolio-data";
import { Typography } from "@/components/ui/typography";

export default function Footer() {
  const { name, socials } = portfolioData;
  const year = new Date().getFullYear();
  const copyrightText = `© ${year} ${name}. All rights reserved.`;

  return (
    <footer className="pb-4 pt-16 sm:pt-24 lg:pt-32">
      <div className="space-y-1">
        <Typography variant="helpText" className="text-center">
          Designed and Developed by{" "}
          <span className="font-bold hover:underline cursor-pointer">
            <a
              href={socials.find((s) => s.platform === "twitter")?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </span>
        </Typography>
        <Typography variant="helpText" className="text-center">
          {copyrightText}
        </Typography>
      </div>
    </footer>
  );
}
