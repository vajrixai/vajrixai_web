"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

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
  const styles = {
    solid: "border-white bg-white text-black hover:bg-[#dfe2ea]",
    outline: "border-white/15 bg-white/[.035] text-white hover:border-white/30 hover:bg-white/[.06]",
    quiet: "border-transparent bg-transparent px-0 text-white hover:text-white/70",
  };

  return (
    <a
      href={href}
      className={`button-shine inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-medium tracking-[-0.01em] transition-colors ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4"
        />
      )}
    </a>
  );
}
