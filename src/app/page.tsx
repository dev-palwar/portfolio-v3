import {
  Hero,
  Profile,
  ProjectGrid,
  Experience,
  Testimonials,
  RecentWriting,
} from "@/components/portfolio";
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  const {
    name,
    tagline,
    bio,
    bannerText,
    socials,
    projects,
    experience,
    testimonials,
    writings,
  } = portfolioData;

  return (
    <main className="min-h-screen space-y-10">
      <Hero bannerText={bannerText} />
      <Profile name={name} tagline={tagline} bio={bio} socials={socials} />
      <Experience experiences={experience} title="Experiences" />
      <ProjectGrid projects={projects} title="Featured Work" />
      <RecentWriting writings={writings} />
      <hr className="border-white/10" />
    </main>
  );
}
