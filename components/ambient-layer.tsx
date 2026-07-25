"use client";

import { useEffect } from "react";

export function AmbientLayer() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const update = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--spot-x", `${event.clientX}px`);
        root.style.setProperty("--spot-y", `${event.clientY}px`);
      });
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", update);
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="ambient" aria-hidden="true" />
    </>
  );
}
