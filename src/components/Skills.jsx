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
} from "react-icons/fa";
import { SiFlutter, SiDart, SiTailwindcss, SiGo } from "react-icons/si";

const groups = [
  {
    label: "backend",
    blurb: "Building the server-side logic and databases behind an app",
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
            <div
              key={group.label}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <p className="font-mono-display text-xs text-[var(--accent)] uppercase tracking-wider mb-1">
                {group.label}
              </p>
              <p className="text-xs text-[var(--text-muted)] mb-4 leading-snug">
                {group.blurb}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 text-[var(--text-dim)]">
                    <span className="text-[var(--accent-2)] text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
