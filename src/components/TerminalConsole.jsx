import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTerminal, FaTimes } from "react-icons/fa";
import { projects } from "../data/projects";

const commandNames = [
  "help",
  "home",
  "about",
  "skills",
  "projects",
  "contact",
  "whoami",
  "neofetch",
  "ls",
  "pwd",
  "date",
  "github",
  "linkedin",
  "email",
  "resume",
  "theme",
  "clear",
];

const links = {
  github: "https://github.com/paulGitRoot",
  linkedin: "https://linkedin.com/in/pawlos-addisu",
  email: "mailto:paulpapi94@gmail.com",
  resume: "/Pawlos_Addisu_Resume.pdf",
};

const TerminalConsole = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lines, setLines] = useState([
    { type: "system", text: "Interactive shell ready. Type `help` to see commands." },
  ]);

  const suggestions = useMemo(() => {
    const query = value.trim().toLowerCase();
    if (!query) return commandNames.slice(0, 6);
    return commandNames.filter((command) => command.startsWith(query)).slice(0, 6);
  }, [value]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const tag = event.target.tagName;
      const isTyping = tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      } else if (event.key === "/" && !isTyping && !open) {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const goTo = (id) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  const print = (text, type = "output") =>
    setLines((current) => [...current, { type, text }]);

  const runCommand = (rawCommand) => {
    const commandLine = rawCommand.trim();
    if (!commandLine) return;
    const [command, ...args] = commandLine.toLowerCase().split(/\s+/);
    setLines((current) => [...current, { type: "command", text: commandLine }]);
    setHistory((current) => [commandLine, ...current.filter((item) => item !== commandLine)].slice(0, 30));
    setHistoryIndex(-1);
    setValue("");

    if (["home", "about", "skills", "projects", "contact"].includes(command)) {
      if (command === "projects" && args[0]) {
        const project = projects.find((item) => item.id.includes(args[0]) || item.title.toLowerCase().includes(args[0]));
        if (project) {
          print(`Opening ${project.title} on GitHub...`, "success");
          window.open(project.github, "_blank", "noopener,noreferrer");
          return;
        }
      }
      goTo(command === "home" ? "home" : command);
      print(`Navigating to ~/${command}`, "success");
      window.setTimeout(() => setOpen(false), 350);
      return;
    }

    switch (command) {
      case "help":
        print("NAVIGATION  home  about  skills  projects [name]  contact\nPROFILE     whoami  neofetch  ls  pwd  date\nACTIONS     github  linkedin  email  resume\nSYSTEM      theme [amber|green|blue]  clear");
        break;
      case "whoami":
        print("Pawlos Addisu — backend & systems engineer, Linux enthusiast, builder.");
        break;
      case "neofetch":
        print("pawlos@dev\nOS: Linux Mint + i3wm\nRole: Backend & Systems Engineer\nStack: Go / PostgreSQL / Flutter\nStatus: Open to work\nLocation: Ethiopia");
        break;
      case "ls":
        print("about.md   skills.txt   projects/   contact.sh   resume.pdf");
        break;
      case "pwd":
        print(`/home/pawlos/portfolio${location.pathname === "/" ? "" : location.pathname}`);
        break;
      case "date":
        print(new Date().toString());
        break;
      case "github":
      case "linkedin":
      case "email":
      case "resume":
        print(`Opening ${command}...`, "success");
        window.open(links[command], command === "email" ? "_self" : "_blank", "noopener,noreferrer");
        break;
      case "theme": {
        const allowed = ["amber", "green", "blue"];
        const current = document.documentElement.dataset.terminalTheme || "amber";
        const requested = args[0];
        const next = allowed.includes(requested)
          ? requested
          : allowed[(allowed.indexOf(current) + 1) % allowed.length];
        document.documentElement.dataset.terminalTheme = next;
        localStorage.setItem("terminal-theme", next);
        window.dispatchEvent(new CustomEvent("terminal-theme-change", { detail: next }));
        print(`Color scheme switched to ${next}.`, "success");
        break;
      }
      case "clear":
        setLines([]);
        break;
      default:
        print(`command not found: ${command}. Type \`help\` for available commands.`, "error");
    }
  };

  const onInputKeyDown = (event) => {
    if (event.key === "Enter") runCommand(value);
    if (event.key === "Tab") {
      event.preventDefault();
      if (suggestions.length) setValue(`${suggestions[0]} `);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      if (history[next]) setValue(history[next]);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setValue(next === -1 ? "" : history[next]);
    }
  };

  return (
    <>
      <button
        type="button"
        className="terminal-launcher"
        onClick={() => setOpen(true)}
        aria-label="Open command terminal"
        title="Open terminal (Ctrl+K or /)"
      >
        <FaTerminal />
        <span>command</span>
        <kbd>Ctrl K</kbd>
      </button>

      {open && (
        <div className="terminal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section className="terminal-console" role="dialog" aria-modal="true" aria-label="Portfolio command terminal">
            <header className="terminal-console__bar">
              <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>pawlos@dev: ~/portfolio</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close terminal"><FaTimes /></button>
            </header>
            <div className="terminal-console__output" ref={outputRef} aria-live="polite">
              {lines.map((line, index) => (
                <div key={`${line.type}-${index}`} className={`terminal-line terminal-line--${line.type}`}>
                  {line.type === "command" && <span className="terminal-prompt">pawlos@dev:~$ </span>}
                  <span>{line.text}</span>
                </div>
              ))}
            </div>
            <div className="terminal-console__input-row">
              <span className="terminal-prompt">pawlos@dev:~$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={onInputKeyDown}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                aria-label="Terminal command"
              />
              <span className="terminal-cursor" aria-hidden="true" />
            </div>
            <footer className="terminal-console__suggestions">
              {suggestions.map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => { setValue(suggestion); inputRef.current?.focus(); }}>
                  {suggestion}
                </button>
              ))}
              <span className="terminal-hint">Tab complete · ↑↓ history · Esc close</span>
            </footer>
          </section>
        </div>
      )}
    </>
  );
};

export default TerminalConsole;
