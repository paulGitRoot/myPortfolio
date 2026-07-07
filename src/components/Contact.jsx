const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono-display text-[var(--text-muted)] text-sm mb-3">
          <span className="text-[var(--text-muted)]">$</span> ./contact.sh
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-4">
          Let's talk
        </h2>
        <p className="text-[var(--text-dim)] mb-8 leading-relaxed">
          Hiring for a Systems or Backend role, or have freelance work in mind?
          I'd love to hear from you.
        </p>
        <a
          href="mailto:paulpapi94@gmail.com"
          className="inline-block bg-[var(--accent)] text-[var(--bg)] px-8 py-3 rounded-md font-mono-display font-semibold hover:bg-[var(--accent-dim)] transition-colors"
        >
          paulpapi94@gmail.com
        </a>
      </div>
    </section>
  );
};
export default Contact;
