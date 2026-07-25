"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "split";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  if (align === "split") {
    return (
      <div className="grid gap-8 border-t border-white/10 pt-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{eyebrow}</span>
        </motion.div>
        <div>
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="section-title mt-0"
          >
            {title}
          </motion.h2>
          {copy && <p className="section-copy mt-7">{copy}</p>}
        </div>
      </div>
    );
  }

  return (
    <div>
      <motion.span
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.65 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {copy && <p className="section-copy mt-7">{copy}</p>}
    </div>
  );
}
