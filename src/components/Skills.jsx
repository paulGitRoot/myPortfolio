import {
  FaDatabase,
  FaLinux,
  FaReact,
  FaJsSquare,
  FaPython,
  FaFire,
  FaTerminal,
  FaCuttlefish,
  FaServer,
  FaHdd,
  FaCogs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiFlutter, SiDart, SiTailwindcss, SiGo } from "react-icons/si";

const groups = [
  {
    label: "backend",
    blurb: "Building the server-side logic and databases behind an app",
    learningLink: "https://roadmap.sh/backend",
    items: [
      { icon: <SiGo />, name: "Go" },
      { icon: <FaDatabase />, name: "PostgreSQL" },
      { icon: <FaServer />, name: "REST APIs" },
      { icon: <FaCuttlefish />, name: "C++" },
    ],
  },
  {
    label: "systems / linux",
    blurb: "Setting up and maintaining Linux machines and servers",
    learningLink: "https://linuxjourney.com/",
    items: [
      { icon: <FaLinux />, name: "Linux Admin" },
      { icon: <FaTerminal />, name: "i3wm" },
      { icon: <FaCogs />, name: "systemd" },
      { icon: <FaHdd />, name: "LVM / Disk Mgmt" },
    ],
  },
  {
    label: "mobile / frontend",
    blurb: "Building the parts of an app people actually see and tap",
    learningLink: "https://roadmap.sh/frontend",
    items: [
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <SiDart />, name: "Dart" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
    ],
  },
  {
    label: "tools & other",
    blurb: "Other languages and services I build with regularly",
    learningLink: "https://roadmap.sh/devops",
    items: [
      { icon: <FaFire />, name: "Firebase" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <FaPython />, name: "Python" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono-display text-[var(--text-muted)] text-sm mb-3">
          <span className="text-[var(--text-muted)]">$</span> cat skills.txt
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-2">
          Skills
        </h2>
        <p className="text-[var(--text-dim)] mb-12">
          The languages, tools, and systems I use to build and ship things.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <a
              key={group.label}
              href={group.learningLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent-2)] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-mono-display text-xs text-[var(--accent)] uppercase tracking-wider">
                  {group.label}
                </p>
                <FaExternalLinkAlt className="text-[10px] text-[var(--text-muted)] group-hover:text-[var(--accent-2)] transition-colors" />
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-4 leading-snug">
                {group.blurb}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 text-[var(--text-dim)]">
                    <span className="text-[var(--accent-2)] text-lg group-hover:text-[var(--accent-2)] transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-[var(--text-muted)] group-hover:text-[var(--accent-2)] transition-colors mt-4 pt-3 border-t border-[var(--border)]">
                Learn more →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
