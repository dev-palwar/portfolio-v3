"use client";
import { RenderIcon } from "@/components/Icons";
import { ProjectCard } from "@/components/portfolio";
import { NavigationButton } from "@/components/ui/navigation-button";
import { Typography } from "@/components/ui/typography";
import { portfolioData } from "@/data/portfolio-data";
import { Project } from "@/types/portfolio";
import { useEffect, useState } from "react";

export default function Projects() {
  const { projects } = portfolioData;

  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const allTechStack = projects.flatMap((project) => project.techStack);
  const uniqueTechStack = [...new Set(allTechStack)];

  const handleTechClick = (tech: string): void => {
    setFilteredProjects(
      projects.filter((project) => project.techStack.includes(tech))
    );
    setIsFiltered(true);
  };

  const handleClearFilter = (): void => {
    setFilteredProjects(projects);
    setIsFiltered(false);
  };

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  return (
    <main className="min-h-screen section-spacing">
      <div className="mb-12">
        <NavigationButton label="Back to home" />
      </div>

      <div className="flex flex-col gap-4 border-b border-border pb-12">
        <Typography variant="heading1" className="uppercase font-bold">
          Projects.
        </Typography>
        <Typography variant="body">
          My projects and experiments. Across various technologies and domains.
        </Typography>
      </div>

      <div className="section-spacing">
        <div className="spacing-secondary flex items-baseline gap-2">
          <Typography variant="heading2">
            {isFiltered ? "Filtered projects" : "All projects"}
          </Typography>
          <Typography variant="helpText">
            ({filteredProjects.length})
          </Typography>
        </div>
        <div className="spacing-secondary flex flex-wrap gap-3">
          {uniqueTechStack.map((tech) => (
            <div
              key={tech}
              onClick={() => handleTechClick(tech)}
              className="cursor-pointer"
            >
              <RenderIcon name={tech} className="text-2xl" />
            </div>
          ))}
          {isFiltered && (
            <div onClick={handleClearFilter} className="cursor-pointer ml-auto">
              <Typography variant="helpText" className="underline">
                Clear filter
              </Typography>
            </div>
          )}
        </div>
        <div className="project grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in-up h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
