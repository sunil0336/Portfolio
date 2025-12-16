import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
