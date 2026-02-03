"use client";

import { ProjectCard } from "@/components/portfolio";
import { Typography } from "@/components/ui/typography";
import { Project } from "@/types/portfolio";
import { useState } from "react";
import { projects as projectsData } from "@/data/projects";

export default function Projects() {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);

  const handleStatusClick = (status: string): void => {
    if (selectedStatus === status) {
      // Clears filter if clicking same status
      setSelectedStatus("");
      setFilteredProjects(projectsData);
    } else {
      setSelectedStatus(status);
      setFilteredProjects(
        projectsData.filter((project) => project.metadata?.status === status)
      );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4 border-b border-border pb-8 sm:pb-12">
        <Typography variant="heading1" className="uppercase font-bold">
          Projects.
        </Typography>
        <Typography variant="body">
          My projects and experiments. Across various technologies and domains.
        </Typography>
      </div>

      <div className="section-spacing">
        <div className="sticky top-0 z-10 backdrop-blur-xl py-2 sm:py-0">
          <div className="spacing-secondary flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <Typography variant="heading2">All projects</Typography>
            <Typography variant="helpText">
              ({filteredProjects.length})
            </Typography>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 my-3 sm:mb-4">
            {["Completed", "Building", "On Hold"].map((status) => (
              <div
                key={status}
                onClick={() => handleStatusClick(status)}
                className={`cursor-pointer border border-border rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground transition-colors ${
                  selectedStatus === status
                    ? "bg-primary text-primary-foreground"
                    : ""
                }`}
              >
                <Typography variant="helpText">{status}</Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in-up h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
