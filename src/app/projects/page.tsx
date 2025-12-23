import { ProjectCard } from "@/components/portfolio";
import { Typography } from "@/components/ui/typography";
import { portfolioData } from "@/data/portfolio-data";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <main className="min-h-screen section-spacing">
      <div className="flex flex-col gap-4 border-b border-border pb-12 text-center">
        <Typography variant="heading1">Projects</Typography>
        <Typography variant="body">
          My projects and experiments. Across various technologies and domains.
        </Typography>
      </div>

      <div className="section-spacing">
        <div className="flex mb-8 items-baseline gap-2">
          <Typography variant="heading2">All projects</Typography>
          <Typography variant="helpText">({projects.length})</Typography>
        </div>
        <div className="project grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          {projects.map((project) => (
            <div key={project.id} className="animate-fade-in-up h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
