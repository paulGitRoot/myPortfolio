import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ project }) => {
  return (
    <div className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)] transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-[var(--text)] font-mono-display">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--accent-2)]">{project.tagline}</p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
          className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors text-xl shrink-0 ml-3"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded text-xs font-mono-display bg-[var(--surface-hover)] text-[var(--text-dim)] border border-[var(--border)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
        <span className="text-xs text-[var(--text-muted)] font-mono-display">
          {project.status}
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono-display font-semibold text-[var(--accent)] hover:text-[var(--accent-dim)] transition-colors"
        >
          view repo <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>

      {project.secondaryLink && (
        <a
          href={project.secondaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-2)] mt-2 underline underline-offset-2"
        >
          {project.secondaryLink.label} →
        </a>
      )}
    </div>
  );
};

export default Project;
