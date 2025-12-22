import {
  Hero,
  Profile,
  ProjectGrid,
  Experience,
  Contact,
} from "@/components/portfolio";
import { portfolioData } from "@/data/portfolio-data";

/**
 * Portfolio home page.
 * Composes all sections with data from portfolio-data.
 */
export default function Home() {
  const { name, tagline, bio, bannerText, socials, projects, experience } =
    portfolioData;

  // Extracts email from socials for contact section
  const emailSocial = socials.find((s) => s.platform === "email");
  const email = emailSocial?.url.replace("mailto:", "");

  return (
    <main className="min-h-screen">
      <Hero bannerText={bannerText} />
      <Profile name={name} tagline={tagline} bio={bio} socials={socials} />
      <ProjectGrid projects={projects} />
      <Experience experiences={experience} />
      <Contact email={email} />
    </main>
  );
}
