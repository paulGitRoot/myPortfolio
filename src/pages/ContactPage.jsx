import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:paulpapi94@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-md bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)] font-mono-display text-sm placeholder:text-[var(--text-muted)]";

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 bg-[var(--bg)]">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono-display text-[var(--text-muted)] text-sm mb-3">
          <span className="text-[var(--text-muted)]">$</span> mail --compose
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-4">
          Contact Me
        </h2>
        <p className="text-[var(--text-dim)] mb-10">
          Fill this in and it'll open your email client with the message pre-filled —
          or just email me directly at{" "}
          <a href="mailto:paulpapi94@gmail.com" className="text-[var(--accent)] hover:underline">
            paulpapi94@gmail.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-mono-display text-[var(--accent-2)] mb-2 uppercase tracking-wide">
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono-display text-[var(--accent-2)] mb-2 uppercase tracking-wide">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono-display text-[var(--accent-2)] mb-2 uppercase tracking-wide">
              message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Let's talk about..."
              className={`${fieldClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-[var(--accent)] text-[var(--bg)] font-mono-display font-bold rounded-md hover:bg-[var(--accent-dim)] transition-colors"
          >
            {sent ? "opening mail client..." : "send_message()"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
