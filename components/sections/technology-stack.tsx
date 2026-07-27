"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const allTech = Object.values(technologies).flat();
const topRow = allTech.slice(0, 17);
const bottomRow = allTech.slice(13);

const signalNodes = [
  "left-[11%] top-[28%]",
  "left-[26%] top-[62%]",
  "left-[42%] top-[38%]",
  "left-[58%] top-[68%]",
  "left-[73%] top-[30%]",
  "left-[88%] top-[54%]",
] as const;

function TechSignalField() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-16 hidden h-[420px] overflow-hidden lg:block" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3157ff]/18"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[18%] right-[16%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#4b72ff]/45 to-transparent"
        animate={{ opacity: [.18, .55, .18], scaleX: [.8, 1, .8] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[25%] right-[24%] top-[37%] h-px origin-left rotate-[16deg] bg-gradient-to-r from-transparent via-[#78ddff]/30 to-transparent"
        animate={{ opacity: [.1, .4, .1], scaleX: [.7, 1, .7] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: .8 }}
      />
      {signalNodes.map((position, index) => (
        <motion.span
          key={position}
          className={`absolute ${position} h-2 w-2 rounded-full bg-[#9ee8ff] shadow-[0_0_28px_7px_rgba(75,114,255,.36)]`}
          animate={{ opacity: [.25, 1, .25], scale: [.75, 1.4, .75] }}
          transition={{ duration: 3.2 + index * .35, repeat: Infinity, ease: "easeInOut", delay: index * .28 }}
        />
      ))}
    </div>
  );
}

function Marquee({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  const repeated = [...items, ...items];
  return (
    <div className="tech-mask overflow-hidden border-y border-white/[.07] py-4">
      <div className={`tech-track flex w-max items-center ${reverse ? "reverse" : ""}`}>
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-5 text-sm font-medium tracking-[-.02em] text-white/48 transition-colors hover:text-white sm:px-8 sm:text-base">{item}</span>
            <span className="h-1 w-1 rounded-full bg-[#4b72ff]/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechnologyStack() {
  return (
    <section id="technology" className="section-pad relative overflow-hidden">
      <TechSignalField />
      <div className="site-grid relative z-10">
        <div className="tech-stack-heading">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Modern where it counts. Proven where it matters."
            copy="We choose technology for fit, not fashion - balancing velocity today with operability tomorrow."
            align="split"
          />
        </div>
      </div>

      <div className="relative z-10 mt-20 space-y-3">
        <Marquee items={topRow} />
        <Marquee items={bottomRow} reverse />
      </div>

      <div className="site-grid relative z-10 mt-20 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(technologies).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: .96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: .5 }}
            transition={{ duration: .6, delay: index * .045 }}
            className="group bg-[#090a0c] p-7 transition-colors duration-500 hover:bg-[#0d0f13] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#78ddff] shadow-[0_0_12px_2px_rgba(49,87,255,.5)]" />
              <h3 className="font-mono text-[11px] uppercase tracking-[.18em] text-white/50">{category}</h3>
            </div>
            <p className="mt-8 text-sm leading-7 text-white/55">{items.join(" \u00b7 ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
