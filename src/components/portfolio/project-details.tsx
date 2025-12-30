import { RenderIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ProjectMetadata } from "@/components/project-metadata";
import { ProjectDetails, type Project } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { NavigationButton } from "../ui/navigation-button";

interface ProjectDetailsProps {
  project: Project;
}

function isDetailedProject(
  details: ProjectDetails | { features: string[] }[] | undefined
): details is ProjectDetails {
  return details !== undefined && !Array.isArray(details);
}

export function ProjectDetailsComponent({ project }: ProjectDetailsProps) {
  const detailedDetails = isDetailedProject(project.details)
    ? project.details
    : null;

  return (
    <>
      {/* Header Section */}
      <div className="section-spacing border-b border-border pb-12">
        <div className="sticky top-0 z-10 backdrop-blur-xl ">
          <div className="mx-auto py-4">
            <NavigationButton label="Back to projects" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {project.imageUrl && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                {project.title}
              </h1>
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-3 items-center">
                {project.techStack.map((tech) => (
                  <RenderIcon
                    key={tech}
                    name={tech}
                    className="text-xl"
                    // withColor={true}
                  />
                ))}
              </div>
              <Typography
                variant="body"
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            {/* Action Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full"
                    >
                      {link.label}
                      <RenderIcon name={link.label} className="w-4 h-4" />
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Content */}
      {detailedDetails && (
        <div className="section-spacing space-y-12">
          {/* Overview */}
          {detailedDetails.overview && (
            <section>
              <Typography variant="heading1" className="mb-4">
                Overview
              </Typography>
              <Typography variant="body" className="prose-container">
                {detailedDetails.overview}
              </Typography>
            </section>
          )}

          {/* Why I Built This */}
          {detailedDetails.whyBuilt && detailedDetails.whyBuilt.length > 0 && (
            <section>
              <Typography variant="heading1" className="mb-4">
                Why I Built This
              </Typography>
              <ul className="space-y-3">
                {detailedDetails.whyBuilt.map((reason, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <Typography variant="body">{reason}</Typography>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Features */}
          {detailedDetails.features && detailedDetails.features.length > 0 && (
            <section>
              <Typography variant="heading1" className="mb-4">
                Features
              </Typography>
              <ul className="space-y-3">
                {detailedDetails.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <Typography
                      variant="body"
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack Details */}
          {detailedDetails.techStack && (
            <section>
              <Typography variant="heading1" className="mb-4">
                Tech Stack
              </Typography>
              <div className="space-y-6">
                {detailedDetails.techStack.frontend &&
                  detailedDetails.techStack.frontend.length > 0 && (
                    <div>
                      <Typography variant="heading2" className="mb-2">
                        Frontend
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {detailedDetails.techStack.frontend.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                {detailedDetails.techStack.backend &&
                  detailedDetails.techStack.backend.length > 0 && (
                    <div>
                      <Typography variant="heading2" className="mb-2">
                        Backend
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {detailedDetails.techStack.backend.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                {detailedDetails.techStack.database &&
                  detailedDetails.techStack.database.length > 0 && (
                    <div>
                      <Typography variant="heading2" className="mb-2">
                        Database
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {detailedDetails.techStack.database.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                {detailedDetails.techStack.tools &&
                  detailedDetails.techStack.tools.length > 0 && (
                    <div>
                      <Typography variant="heading2" className="mb-2">
                        Tools & Services
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {detailedDetails.techStack.tools.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                {detailedDetails.techStack.other &&
                  detailedDetails.techStack.other.length > 0 && (
                    <div>
                      <Typography variant="heading2" className="mb-2">
                        Other
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {detailedDetails.techStack.other.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </section>
          )}

          {/* Challenges & Solutions */}
          {detailedDetails.challenges &&
            detailedDetails.challenges.length > 0 && (
              <section>
                <Typography variant="heading1" className="mb-4">
                  Challenges & Solutions
                </Typography>
                <div className="space-y-6">
                  {detailedDetails.challenges.map((challenge, index) => (
                    <div key={index} className="space-y-2">
                      <Typography
                        variant="heading2"
                        className="text-destructive"
                      >
                        Challenge: {challenge}
                      </Typography>
                      {detailedDetails.solutions &&
                        detailedDetails.solutions[index] && (
                          <Typography variant="body" className="ml-4">
                            <span className="text-muted-foreground">
                              Solution:{" "}
                            </span>
                            {detailedDetails.solutions[index]}
                          </Typography>
                        )}
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Impact */}
          {detailedDetails.impact && (
            <section>
              <Typography variant="heading1" className="mb-4">
                Impact & Achievements
              </Typography>
              <div className="space-y-4">
                {detailedDetails.impact.achievements &&
                  detailedDetails.impact.achievements.length > 0 && (
                    <ul className="space-y-3">
                      {detailedDetails.impact.achievements.map(
                        (achievement, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-muted-foreground mt-1">
                              •
                            </span>
                            <Typography variant="body">
                              {achievement}
                            </Typography>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                {(detailedDetails.impact.users ||
                  detailedDetails.impact.views ||
                  detailedDetails.impact.metrics) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg bg-card border border-border">
                    {detailedDetails.impact.users && (
                      <div>
                        <Typography
                          variant="bodySm"
                          className="text-muted-foreground mb-1"
                        >
                          Users
                        </Typography>
                        <Typography variant="heading2">
                          {detailedDetails.impact.users}
                        </Typography>
                      </div>
                    )}
                    {detailedDetails.impact.views && (
                      <div>
                        <Typography
                          variant="bodySm"
                          className="text-muted-foreground mb-1"
                        >
                          Views
                        </Typography>
                        <Typography variant="heading2">
                          {detailedDetails.impact.views}
                        </Typography>
                      </div>
                    )}
                    {detailedDetails.impact.metrics && (
                      <div>
                        <Typography
                          variant="bodySm"
                          className="text-muted-foreground mb-1"
                        >
                          Metrics
                        </Typography>
                        <Typography variant="heading2">
                          {detailedDetails.impact.metrics}
                        </Typography>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Future Plans */}
          {detailedDetails.futurePlans &&
            detailedDetails.futurePlans.length > 0 && (
              <section>
                <Typography variant="heading1" className="mb-4">
                  Future Plans
                </Typography>
                <ul className="space-y-3">
                  {detailedDetails.futurePlans.map((plan, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-muted-foreground mt-1">•</span>
                      <Typography variant="body">{plan}</Typography>
                    </li>
                  ))}
                </ul>
              </section>
            )}
        </div>
      )}

      {/* Fallback to legacy details format */}
      {!detailedDetails &&
        Array.isArray(project.details) &&
        project.details.length > 0 && (
          <div className="section-spacing">
            <Typography variant="heading1" className="mb-4">
              Features
            </Typography>
            <ul className="space-y-3">
              {project.details.map((detail, detailIndex) =>
                detail.features.map((feature, featureIndex) => (
                  <li
                    key={`${detailIndex}-${featureIndex}`}
                    className="flex gap-3"
                  >
                    <span className="text-muted-foreground mt-1">•</span>
                    <Typography variant="body">{feature}</Typography>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
    </>
  );
}
