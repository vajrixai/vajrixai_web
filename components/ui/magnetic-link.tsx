"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "quiet";
  showArrow?: boolean;
  className?: string;
};

export function MagneticLink({
  href,
  children,
  variant = "solid",
  showArrow = true,
  className = "",
}: MagneticLinkProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 });

  function move(event: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  const styles = {
    solid: "border-white bg-white text-black hover:bg-[#dfe2ea]",
    outline: "border-white/15 bg-white/[.035] text-white hover:border-white/30 hover:bg-white/[.06]",
    quiet: "border-transparent bg-transparent px-0 text-white hover:text-white/70",
  };

  return (
    <motion.a
      href={href}
      onMouseMove={move}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: sx, y: sy }}
      className={`button-shine group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-medium tracking-[-0.01em] transition-colors ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </motion.a>
  );
}
