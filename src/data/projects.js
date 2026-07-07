// src/data/projects.js
// Central project data — used by both the homepage preview and the full projects page.

export const projects = [
  {
    id: "type-heric",
    title: "type-heric",
    tagline: "Amharic & English typing tutor",
    description:
      "A full-stack typing tutor supporting both Amharic (Ge'ez script) and English practice sessions, with real-time WPM/accuracy tracking. Built as a final-year group project with a Go REST API and PostgreSQL for persistence.",
    tech: ["React", "Go", "PostgreSQL", "Vite"],
    github: "https://github.com/paulGitRoot/type-heric",
    cover: "typing",
    featured: true,
    status: "Core flow + backend API complete",
  },
  {
    id: "taskflow",
    title: "TaskFlow+",
    tagline: "Smart task management app",
    description:
      "A Flutter/Firebase productivity app with authentication, task CRUD, streak-based habit tracking, local notifications, dark mode, and Firestore-backed insight charts. Built solo end-to-end as a portfolio project.",
    tech: ["Flutter", "Firebase", "Firestore", "Dart"],
    github: "https://github.com/paulGitRoot/task_flow_flutter_proj",
    cover: "tasks",
    featured: true,
    status: "Complete",
  },
  {
    id: "i3wm-setup",
    title: "i3wm Dotfiles",
    tagline: "Daily-driven Linux ricing config",
    description:
      "A hand-tuned i3 window manager setup — Polybar, Picom, Dunst, Rofi, and custom scripts — built for a minimal, script-driven workflow. Maintained in parallel for both Mint/Ubuntu and Arch/CachyOS.",
    tech: ["i3wm", "Shell", "Lua", "Linux"],
    github: "https://github.com/paulGitRoot/i3wm-setup",
    cover: "terminal",
    secondaryLink: {
      label: "Arch/CachyOS variant",
      url: "https://github.com/paulGitRoot/Arch_i3_setup",
    },
    featured: true,
    status: "Actively maintained",
  },
  {
    id: "computer-graphics",
    title: "Computer Graphics",
    tagline: "OpenGL animation experiments",
    description:
      "A set of OpenGL animations ranging from basic transformations to more advanced rendering techniques, written in Python and C++ to explore 3D graphics programming fundamentals.",
    tech: ["OpenGL", "C++", "Python"],
    github: "https://github.com/paulGitRoot/Computer-Graphics",
    cover: "graphics",
    featured: false,
    status: "Coursework project",
  },
  {
    id: "web-application-exercise",
    title: "Public Listings App",
    tagline: "Client-server listing platform",
    description:
      "A web application for browsing and managing public listings, built to practice classic client-server architecture and server-side data handling outside the React ecosystem.",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/paulGitRoot/Web-Application-Exercise",
    cover: "web",
    featured: false,
    status: "Coursework project",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
