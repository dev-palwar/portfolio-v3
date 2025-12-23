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
      <hr className="border-white/10" />
      <Profile name={name} tagline={tagline} bio={bio} socials={socials} />
      <hr className="border-white/10" />
      <Experience experiences={experience} title="Experiences" />
      <hr className="border-white/10" />
      <ProjectGrid projects={projects} title="Featured Work" />
      <hr className="border-white/10" />
      <RecentWriting writings={writings} />
      <hr className="border-white/10" />
      <Testimonials testimonials={testimonials} title="Testimonials" />
    </main>
  );
}
