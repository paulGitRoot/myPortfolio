import Project from "./Project";
import { projects, featuredProjects } from "../data/projects";

const Projects = ({ isHome = false }) => {
  const projectList = isHome ? featuredProjects : projects;

  return (
    <section id="projects" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono-display text-[var(--text-muted)] text-sm mb-3 mt-4">
          <span className="text-[var(--text-muted)]">$</span> ls ~/projects
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-2">
          {isHome ? "Featured Projects" : "All Projects"}
        </h2>
        <p className="text-[var(--text-dim)] mb-12">
          A few things I've built, from real apps to hands-on Linux configs. Click any
          card to see the code.
        </p>
        <div className="grid gap-4 sm:gap-5 grid-cols-2">
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
