import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-[var(--bg-alt)] border-t border-[var(--border)] text-center">
      <p className="text-sm text-[var(--text-muted)] font-mono-display">
        © {new Date().getFullYear()} Pawlos Addisu — built with React & Tailwind
      </p>
      <div className="mt-4 flex justify-center gap-6 text-lg text-[var(--text-dim)]">
        <a
          href="https://github.com/paulGitRoot"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/pawlos-addisu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--accent)] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:paulpapi94@gmail.com"
          className="hover:text-[var(--accent)] transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="#home"
          className="text-sm font-mono-display text-[var(--text-muted)] hover:text-[var(--text)] self-center"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
};
export default Footer;
