import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
  <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <ProjectCard key={project.title} {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
