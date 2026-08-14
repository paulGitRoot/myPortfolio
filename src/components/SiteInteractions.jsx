import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const trailGlyphs = [">", "_", "0", "1", "$", "~", "/", "*"];

const SiteInteractions = () => {
  const location = useLocation();
  const cursorRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cleanups = [];

    const revealTargets = document.querySelectorAll("main section, main form");
    if (!reducedMotion) {
      revealTargets.forEach((target) => target.classList.add("reveal-section"));
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
        { threshold: 0.08, rootMargin: "0px 0px -8%" }
      );
      revealTargets.forEach((target) => observer.observe(target));
      cleanups.push(() => observer.disconnect());
    }

    if (finePointer && !reducedMotion) {
      let trailTime = 0;
      const moveCursor = (event) => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
          cursorRef.current.classList.add("is-active");
        }
        if (performance.now() - trailTime < 65) return;
        trailTime = performance.now();
        const glyph = document.createElement("span");
        glyph.className = "terminal-pointer-trail";
        glyph.textContent = trailGlyphs[Math.floor(Math.random() * trailGlyphs.length)];
        glyph.style.left = `${event.clientX}px`;
        glyph.style.top = `${event.clientY}px`;
        document.body.appendChild(glyph);
        glyph.addEventListener("animationend", () => glyph.remove(), { once: true });
      };
      const hideCursor = () => cursorRef.current?.classList.remove("is-active");
      window.addEventListener("pointermove", moveCursor, { passive: true });
      document.documentElement.addEventListener("mouseleave", hideCursor);
      cleanups.push(() => window.removeEventListener("pointermove", moveCursor));
      cleanups.push(() => document.documentElement.removeEventListener("mouseleave", hideCursor));

    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [location.pathname]);

  return (
    <>
      <div className="terminal-pointer" ref={cursorRef} aria-hidden="true"><span>+</span></div>
    </>
  );
};

export default SiteInteractions;
