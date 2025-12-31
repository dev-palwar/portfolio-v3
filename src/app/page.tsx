import { Hero, Profile, ProjectGrid, Experience } from "@/components/portfolio";
import { RecentWriting } from "@/components/portfolio/recent-writing";
import { portfolioData } from "@/data/portfolio-data";
import { experience as experienceData } from "@/data/experience";
import { writings as writingsData } from "@/data/writings";
import { projects as projectsData } from "@/data/projects";

export default function Home() {
  const { name, tagline, bio, bannerText, socials } = portfolioData;

  return (
    <main className="min-h-screen spacing-secondary">
      <Hero bannerText={bannerText} />
      <Profile name={name} tagline={tagline} bio={bio} socials={socials} />
      <Experience experiences={experienceData} title="Experiences" />
      <ProjectGrid projects={projectsData} title="Featured Work" />
      <RecentWriting writings={writingsData} />
      <hr className="border-border" />
    </main>
  );
}
