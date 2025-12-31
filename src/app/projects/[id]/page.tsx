import { ProjectDetailsComponent } from "@/components/portfolio";
import { projects as projectsData } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen section-spacing pb-12 sm:pb-20">
      <ProjectDetailsComponent project={project} />
    </main>
  );
}
