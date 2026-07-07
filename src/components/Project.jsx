import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCover from "./ProjectCover";

const Project = ({ project }) => {
  const openRepo = () => window.open(project.github, "_blank", "noopener,noreferrer");

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={openRepo}
      onKeyDown={(e) => (e.key === "Enter" ? openRepo() : null)}
      className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)] transition-colors flex flex-col cursor-pointer focus:outline-none focus:border-[var(--accent)]"
    >
      <ProjectCover type={project.cover} />

      <div className="p-3 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-sm font-bold text-[var(--text)] font-mono-display">
            {project.title}
          </h3>
          <FaGithub className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors text-base shrink-0 ml-3" />
        </div>
        <p className="text-xs text-[var(--accent-2)] mb-2">{project.tagline}</p>

        <p className="text-xs text-[var(--text-dim)] leading-snug mb-2 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 rounded text-[10px] font-mono-display bg-[var(--surface-hover)] text-[var(--text-dim)] border border-[var(--border)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[var(--border)] mt-auto">
          <span className="text-[10px] text-[var(--text-muted)]">{project.status}</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-[var(--accent)] group-hover:text-[var(--accent-dim)] transition-colors">
            See the code <FaExternalLinkAlt className="text-[9px]" />
          </span>
        </div>

        {project.secondaryLink && (
          <a
            href={project.secondaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] text-[var(--text-muted)] hover:text-[var(--accent-2)] mt-2 underline underline-offset-2 relative z-10 w-fit"
          >
            {project.secondaryLink.label} →
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
