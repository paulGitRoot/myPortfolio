import { useEffect, useRef } from "react";

const glyphs = "01$>_{}[]:/\\|+-*~";

const TerminalMatrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame;
    let columns = [];
    let width = 0;
    let height = 0;
    let fontSize = 14;
    const pointer = { x: -1000, y: -1000 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      fontSize = width < 600 ? 11 : 13;
      columns = Array.from({ length: Math.ceil(width / fontSize) }, (_, index) => ({
        x: index * fontSize,
        y: Math.random() * height,
        speed: 0.25 + Math.random() * 0.5,
        opacity: 0.26 + Math.random() * 0.24,
      }));
    };

    const move = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.font = `${fontSize}px JetBrains Mono, monospace`;
      columns.forEach((column) => {
        const distance = Math.hypot(pointer.x - column.x, pointer.y - column.y);
        const influence = Math.max(0, 1 - distance / 180);
        const headOpacity = Math.min(0.95, column.opacity + influence * 0.34);
        for (let trail = 3; trail >= 0; trail -= 1) {
          const trailOpacity = headOpacity * (1 - trail * 0.18);
          context.fillStyle = `rgba(184, 187, 38, ${trailOpacity})`;
          const glyphIndex = Math.floor((column.y / fontSize + column.x + trail * 7) % glyphs.length);
          context.fillText(glyphs[glyphIndex], column.x, column.y - trail * fontSize * 1.2);
        }
        column.y += column.speed + influence * 1.2;
        if (column.y > height + fontSize) column.y = -fontSize * (1 + Math.random() * 8);
      });
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    if (!reduceMotion.matches) draw();
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="terminal-matrix" aria-hidden="true" />;
};

export default TerminalMatrix;
