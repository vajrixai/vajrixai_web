"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const allTech = Object.values(technologies).flat();
const topRow = allTech.slice(0, 17);
const bottomRow = allTech.slice(13);

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
    <section id="technology" className="section-pad overflow-hidden">
      <div className="site-grid">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Modern where it counts. Proven where it matters."
          copy="We choose technology for fit, not fashion—balancing velocity today with operability tomorrow."
          align="split"
        />
      </div>

      <div className="mt-20 space-y-3">
        <Marquee items={topRow} />
        <Marquee items={bottomRow} reverse />
      </div>

      <div className="site-grid mt-20 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="font-mono text-[10px] uppercase tracking-[.18em] text-white/45">{category}</h3>
            </div>
            <p className="mt-8 text-sm leading-7 text-white/55">{items.join(" · ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
