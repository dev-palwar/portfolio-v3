import { RenderIcon } from "@/components/reusables/RenderIcon";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ProjectDetails, type Project } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

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
      <div className="border-b border-border pb-8 sm:pb-12">
        <div className="spacing-secondary">
          {project.imageUrl && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
              />
            </div>
          )}

          <div className="spacing-secondary">
            <div className="spacing-secondary">
              <Typography
                variant="helpText"
                className="border-none rounded-md px-2 py-1 w-fit mt-2
                  text-yellow-600 bg-yellow-500/10
                 animate-[softPulse_1.5s_ease-in-out_infinite]"
              >
                {project.metadata?.status && project?.metadata?.status.toLowerCase()}
              </Typography>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {project.title}
              </h1>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                {project.techStack.map((tech) => (
                  <RenderIcon
                    key={tech}
                    name={tech}
                    className="text-lg sm:text-xl"
                  />
                ))}
              </div>

              <Typography
                variant="body"
                className="text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>

            {/* Action Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3">
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
                      className="rounded-full text-sm sm:text-base"
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
        <div className="section-spacing space-y-8 sm:space-y-12">
          {/* Overview */}
          {detailedDetails.overview && (
            <section>
              <Typography variant="heading1" className="mb-3 sm:mb-4">
                Overview
              </Typography>
              <Typography
                variant="body"
                dangerouslySetInnerHTML={{ __html: detailedDetails.overview }}
              />
            </section>
          )}

          {/* Why I Built This */}
          {detailedDetails.whyBuilt && detailedDetails.whyBuilt.length > 0 && (
            <section>
              <Typography variant="heading1" className="mb-3 sm:mb-4">
                Why I Built This
              </Typography>
              <ul className="space-y-2 sm:space-y-3">
                {detailedDetails.whyBuilt.map((reason, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <Typography
                      variant="body"
                      dangerouslySetInnerHTML={{ __html: reason }}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Features */}
          {detailedDetails.features && detailedDetails.features.length > 0 && (
            <section>
              <Typography variant="heading1" className="mb-3 sm:mb-4">
                Features
              </Typography>
              <ul className="space-y-2 sm:space-y-3">
                {detailedDetails.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3">
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
              <Typography variant="heading1" className="mb-3 sm:mb-4">
                Tech Stack
              </Typography>
              <div className="space-y-4 sm:space-y-6">
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
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium"
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
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium"
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
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium"
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
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium"
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
                            className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium"
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
                <Typography variant="heading1" className="mb-3 sm:mb-4">
                  Challenges & Solutions
                </Typography>
                <div className="space-y-4 sm:space-y-6">
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
                          <Typography
                            variant="body"
                            className="ml-3 sm:ml-4"
                            dangerouslySetInnerHTML={{
                              __html: detailedDetails.solutions[index],
                            }}
                          />
                        )}
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Impact */}
          {detailedDetails.impact && (
            <section>
              <Typography variant="heading1" className="mb-3 sm:mb-4">
                Impact & Achievements
              </Typography>
              <div className="space-y-4">
                {detailedDetails.impact.achievements &&
                  detailedDetails.impact.achievements.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3">
                      {detailedDetails.impact.achievements.map(
                        (achievement, index) => (
                          <li key={index} className="flex gap-2 sm:gap-3">
                            <span className="text-muted-foreground mt-1">
                              •
                            </span>
                            <Typography
                              variant="body"
                              dangerouslySetInnerHTML={{
                                __html: achievement,
                              }}
                            />
                          </li>
                        )
                      )}
                    </ul>
                  )}
                {(detailedDetails.impact.users ||
                  detailedDetails.impact.views ||
                  detailedDetails.impact.metrics) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card border border-border">
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
                <Typography variant="heading1" className="mb-3 sm:mb-4">
                  Future Plans
                </Typography>
                <ul className="space-y-2 sm:space-y-3">
                  {detailedDetails.futurePlans.map((plan, index) => (
                    <li key={index} className="flex gap-2 sm:gap-3">
                      <span className="text-muted-foreground mt-1">•</span>
                      <Typography
                        variant="body"
                        dangerouslySetInnerHTML={{ __html: plan }}
                      />
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
            <Typography variant="heading1" className="mb-3 sm:mb-4">
              Features
            </Typography>
            <ul className="space-y-2 sm:space-y-3">
              {project.details.map((detail, detailIndex) =>
                detail.features.map((feature, featureIndex) => (
                  <li
                    key={`${detailIndex}-${featureIndex}`}
                    className="flex gap-2 sm:gap-3"
                  >
                    <span className="text-muted-foreground mt-1">•</span>
                    <Typography
                      variant="body"
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
    </>
  );
}
