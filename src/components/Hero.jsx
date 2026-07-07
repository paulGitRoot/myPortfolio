import { Fragment } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const specs = [
  { label: "OS", value: "Linux Mint (i3wm)" },
  { label: "Role", value: "Backend & Systems Engineer" },
  { label: "Stack", value: "Go, PostgreSQL, Flutter" },
  { label: "Education", value: "B.Sc. CS — Addis Ababa University '26" },
  { label: "Status", value: "Open to work" },
  { label: "Location", value: "Ethiopia" },
];

const Hero = () => (
  <section id="home" className="relative bg-[var(--bg)] pt-32 pb-24 overflow-hidden">
    {/* faint grid texture */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="relative max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
        <img
          src="/photo_2025-10-23_16-37-07.jpg"
          alt="Pawlos Addisu"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-[var(--border)] shrink-0"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--text)] mb-3 leading-tight">
            Hi, I'm Pawlos.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-dim)] max-w-2xl">
            I build backend systems and APIs, and I'm just as comfortable setting up
            and maintaining Linux servers. Recently graduated from Addis Ababa
            University, currently looking for my next role.
          </p>
        </div>
      </div>

      {/* neofetch-style terminal panel — a fun detail, explained below for anyone who doesn't speak Linux */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden max-w-3xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-[var(--surface-hover)] border-b border-[var(--border)]">
          <span className="w-3 h-3 rounded-full bg-[var(--red)]" />
          <span className="w-3 h-3 rounded-full bg-[var(--accent)]" />
          <span className="w-3 h-3 rounded-full bg-[var(--green)]" />
          <span className="ml-3 font-mono-display text-xs text-[var(--text-muted)]">
            pawlos@dev: ~
          </span>
        </div>
        <div className="p-6 font-mono-display text-sm">
          <p className="text-[var(--green)] mb-4">
            <span className="text-[var(--text-muted)]">$</span> neofetch
            <span className="text-[var(--text-muted)] font-sans text-xs ml-2">
              (a quick system summary, Linux-nerd tradition — think of it as my "at a glance" card)
            </span>
          </p>
          <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
            {specs.map((s) => (
              <Fragment key={s.label}>
                <span className="text-[var(--accent-2)] font-semibold">{s.label}</span>
                <span className="text-[var(--text-dim)]">{s.value}</span>
              </Fragment>
            ))}
          </div>
          <div className="flex gap-2 mt-5">
            {["#8b1e1e", "#98971a", "#d79921", "#458588", "#b16286", "#689d6a", "#a89984"].map(
              (c, i) => (
                <span key={i} className="w-4 h-4 rounded-sm" style={{ backgroundColor: c }} />
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-10">
        <a
          href="#projects"
          className="px-6 py-3 rounded-md font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-dim)] transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-md font-semibold border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          Get In Touch
        </a>
        <div className="flex items-center gap-4 ml-2">
          <a
            href="https://github.com/paulGitRoot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pawlos-addisu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:paulpapi94@gmail.com"
            className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
