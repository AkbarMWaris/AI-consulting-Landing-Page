// src/components/Tilt.jsx
import React, { useRef } from "react";

const Tilt = ({ children, maxTilt = 18, glare = false, className = "" }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const left = rect.left;
    const top = rect.top;

    const x = e.clientX - left;
    const y = e.clientY - top;

    const percentX = (x / width - 0.5) * 2; // -1 to 1
    const percentY = (y / height - 0.5) * 2; // -1 to 1

    const rotateX = -(percentY * maxTilt);
    const rotateY = percentX * maxTilt;

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;

    if (glare) {
      const glareEl = el.querySelector(".tilt-glare");
      if (glareEl) {
        const angle = Math.atan2(percentY, percentX) * (180 / Math.PI) + 180;
        const intensity = Math.max(Math.abs(percentX), Math.abs(percentY));
        glareEl.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${
          0.28 * intensity
        }) 0%, transparent 60%)`;
      }
    }
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    if (glare) {
      const glareEl = el.querySelector(".tilt-glare");
      if (glareEl) glareEl.style.background = "transparent";
    }
  };

  return (
    <div
      ref={ref}
      className={`tilt-root ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {glare && <div className="tilt-glare" />}
      {children}
    </div>
  );
};

export default Tilt;
