const About = () => {
  return (
    <section id="about" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono-display text-[var(--text-muted)] text-sm mb-3">// about.md</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-6">
          About
        </h2>
        <div className="space-y-4 text-[var(--text-dim)] leading-relaxed text-base md:text-lg">
          <p>
            I'm a Computer Science graduate from Addis Ababa University (Class of '26),
            building backend systems and getting my hands dirty at the OS level —
            Linux administration, service management, and everything in between.
          </p>
          <p>
            Day to day that means Go and PostgreSQL on the backend, Flutter/Firebase
            when I need to ship something end-to-end, and a Linux Mint + i3wm setup
            I've tuned by hand — i3wm is a lightweight, keyboard-driven desktop
            environment for Linux, and "tuned by hand" means writing my own configs
            for how windows, services, and disks behave, rather than using the defaults.
          </p>
          <p>
            Right now I'm looking for a Systems or Backend Engineer role, while taking
            on freelance work and keeping a longer-term option open: a funded master's
            in Europe through programs like Erasmus Mundus or DAAD.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
