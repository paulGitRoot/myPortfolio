import { useCallback, useEffect, useRef, useState } from "react";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = "01$#@%&*{}[]<>";

const randomGlyph = (character) => {
  if (/[A-Z]/.test(character)) return UPPER[Math.floor(Math.random() * UPPER.length)];
  if (/[a-z]/.test(character)) return LOWER[Math.floor(Math.random() * LOWER.length)];
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
};

const ScrambleText = ({ text, className = "", as: Tag = "span" }) => {
  const Element = Tag;
  const rootRef = useRef(null);
  const animationRef = useRef(null);
  const [display, setDisplay] = useState(text.split(""));
  const [active, setActive] = useState(new Set());

  const scramble = useCallback((center = null) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text.split(""));
      return;
    }

    window.cancelAnimationFrame(animationRef.current);
    const startedAt = performance.now();
    const duration = center === null ? 1050 : 520;
    const radius = center === null ? text.length : 3;

    const frame = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const resolvedUntil = center === null ? Math.floor(progress * text.length) : -1;
      const nextActive = new Set();

      setDisplay(
        text.split("").map((character, index) => {
          if (character === " ") return character;

          if (center === null) {
            if (index <= resolvedUntil || progress === 1) return character;
            nextActive.add(index);
            return randomGlyph(character);
          }

          const distance = Math.abs(index - center);
          const localLife = 1 - distance / (radius + 1);
          if (distance <= radius && progress < localLife) {
            nextActive.add(index);
            return randomGlyph(character);
          }
          return character;
        })
      );
      setActive(nextActive);

      if (progress < 1) animationRef.current = window.requestAnimationFrame(frame);
      else {
        setDisplay(text.split(""));
        setActive(new Set());
      }
    };

    animationRef.current = window.requestAnimationFrame(frame);
  }, [text]);

  useEffect(() => {
    const node = rootRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationRef.current);
    };
  }, [scramble]);

  const handlePointerMove = (event) => {
    const characters = [...rootRef.current.querySelectorAll("[data-scramble-char]")];
    if (!characters.length) return;
    const closest = characters.reduce(
      (best, node, index) => {
        const bounds = node.getBoundingClientRect();
        const distance = Math.abs(event.clientX - (bounds.left + bounds.width / 2));
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Infinity }
    );
    scramble(closest.index);
  };

  return (
    <Element
      ref={rootRef}
      className={`scramble-text ${className}`}
      onPointerEnter={handlePointerMove}
      aria-label={text}
    >
      {display.map((character, index) => (
        <span
          key={`${text}-${index}`}
          data-scramble-char
          className={active.has(index) ? "scramble-text__active" : ""}
          aria-hidden="true"
        >
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </Element>
  );
};

export default ScrambleText;
