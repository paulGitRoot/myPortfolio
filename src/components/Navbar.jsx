import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPalette, FaCheck } from "react-icons/fa";

const links = [
  { to: "/", label: "home" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("terminal-theme") || "amber");

  const themes = [
    { id: "amber", label: "amber", color: "#fe8019" },
    { id: "green", label: "green", color: "#b8bb26" },
    { id: "blue", label: "blue", color: "#83a598" },
  ];

  const selectTheme = (nextTheme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.terminalTheme = nextTheme;
    localStorage.setItem("terminal-theme", nextTheme);
    setThemeOpen(false);
  };

  useEffect(() => {
    const syncTheme = (event) => setTheme(event.detail);
    window.addEventListener("terminal-theme-change", syncTheme);
    return () => window.removeEventListener("terminal-theme-change", syncTheme);
  }, []);

  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-md font-mono-display text-sm transition-colors ${
      isActive
        ? "text-[var(--accent)] bg-[var(--surface-hover)]"
        : "text-[var(--text-dim)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 m-0 w-full z-50 bg-[var(--bg-alt)]/90 backdrop-blur border-b border-[var(--border)]">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--red)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)]" />
          </span>
          <span className="font-mono-display text-[var(--text)] font-bold ml-2 group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
            <FaHome className="text-[var(--accent-2)] text-sm" />
            pawlos@dev
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              <span className="text-[var(--text-muted)]">~/</span>
              {l.label}
            </NavLink>
          ))}
          <a
            href="/Pawlos_Addisu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-md font-mono-display text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-dim)] transition-colors"
          >
            resume.pdf
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--text)] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block w-6 h-0.5 bg-[var(--text)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-[var(--text)] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div className="theme-picker theme-picker--floating">
        <button
          type="button"
          className="theme-picker__trigger"
          onClick={() => setThemeOpen((current) => !current)}
          aria-label="Change terminal color theme"
          aria-expanded={themeOpen}
          title="Change terminal theme"
        >
          <FaPalette />
          <span className="theme-picker__swatch" style={{ backgroundColor: themes.find((item) => item.id === theme)?.color }} />
        </button>
        {themeOpen && (
          <div className="theme-picker__menu">
            {themes.map((item) => (
              <button key={item.id} type="button" onClick={() => selectTheme(item.id)}>
                <span className="theme-picker__swatch" style={{ backgroundColor: item.color }} />
                {item.label}
                {theme === item.id && <FaCheck />}
              </button>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-alt)] px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
              <span className="text-[var(--text-muted)]">~/</span>
              {l.label}
            </NavLink>
          ))}
          <a
            href="/Pawlos_Addisu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 rounded-md font-mono-display text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] text-center"
          >
            resume.pdf
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
