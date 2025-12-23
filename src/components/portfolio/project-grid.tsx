import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Typography } from "../ui/typography";

interface ProjectGridProps {
  projects: Project[];
  title?: string;
}

export function ProjectGrid({ projects, title }: ProjectGridProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const allProjects = [...featuredProjects, ...otherProjects].slice(0, 4);

  return (
    <section className="">
      <div className="spacing-secondary">
        {/* Section header */}
        <div className="animate-fade-in-up">
          <Typography variant="heading1">
            <span className="text-muted-foreground">{">"}</span> {title}
          </Typography>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
          {allProjects.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="/projects">
              <ArrowRightIcon className="w-4 h-4" />
              View all projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
