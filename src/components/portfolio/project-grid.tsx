import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { RenderIcon } from "../Icons";
import { SectionHeader } from "@/components/portfolio/experience";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export function ProjectGrid({ projects, title }: ProjectGridProps) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="">
      <div className="spacing-secondary">
        {/* Section header */}
        {title && <SectionHeader title={title} />}

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button asChild>
            <Link href="/projects">
              View all projects
              <RenderIcon name="next" className="text-secondary" />
              {/* <ArrowRightIcon /> */}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
