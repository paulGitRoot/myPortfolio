import Project from "./Project";
import { projects, featuredProjects } from "../data/projects";

const Projects = ({ isHome = false }) => {
  const projectList = isHome ? featuredProjects : projects;

  return (
    <section id="projects" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono-display text-[var(--text-muted)] text-sm mb-3">
          <span className="text-[var(--text-muted)]">$</span> ls ~/projects
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-12">
          {isHome ? "Featured Projects" : "All Projects"}
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>

        {!isHome && (
          <p className="mt-10 text-sm text-[var(--text-dim)] font-mono-display">
            More coursework & smaller exercises live on{" "}
            <a
              href="https://github.com/paulGitRoot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--accent-dim)] underline underline-offset-2"
            >
              github.com/paulGitRoot
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
