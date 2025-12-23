import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
}

/**
 * Project grid component.
 * Displays projects in a Pinterest-style responsive grid.
 */
export function ProjectGrid({
  projects,
  title = "Featured Work",
  subtitle = "Recent projects and experiments",
}: ProjectGridProps) {
  // Separates featured projects for potential highlight treatment
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const allProjects = [...featuredProjects, ...otherProjects].slice(0, 4);

  return (
    <section className="section-spacing">
      <div className="">
        {/* Section header */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="font-display text-2xl md:text-3xl font-medium mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          {allProjects.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
