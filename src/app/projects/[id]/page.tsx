import { ProjectDetailsComponent } from "@/components/portfolio";
import { portfolioData } from "@/data/portfolio-data";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { projects } = portfolioData;
  const id = (await params).id;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectDetailsComponent project={project} />
    </main>
  );
}
