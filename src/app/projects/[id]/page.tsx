import { RenderIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { projects } = portfolioData;
  const id = (await params).id;
  const project = projects.find((project) => project.id === id);

  return (
    <main className="min-h-screen section-spacing">
      <div className="header flex flex-col gap-4 border-b border-border pb-12">
        <Image
          src={project?.imageUrl || ""}
          alt={project?.title || ""}
          width={1000}
          height={1000}
        />
        <div className="flex section-spacing flex-col gap-6">
          <h1 className="font-display text-5xl font-bold">{project?.title}</h1>
          <p className="text-muted-foreground">{project?.description}</p>
          <div className="flex flex-wrap gap-3">
            {project?.techStack.map((tag) => (
              <RenderIcon key={tag} name={tag} className="text-xl" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project?.links?.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full px-8"
                >
                  {link.label}
                  <RenderIcon name={link.label} className="w-3.5 h-3.5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="details">
        {project?.details.map((detail, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold">Features </h2>
            <ul className="list-disc list-inside">
              {detail.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
