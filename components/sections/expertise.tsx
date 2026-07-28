"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { expertise } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExpertiseTensorStack } from "@/components/ui/ai-field";

function ExpertiseCard({ item, index }: { item: (typeof expertise)[number]; index: number }) {
  const reduced = useReducedMotion();
  const Icon = item.icon;

  function illuminate(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--card-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--card-y", `${event.clientY - rect.top}px`);
  }

  const featured = index === 0 || index === 5 || index === 8;
  const statementCard = index === 8;

  return (
    <motion.article
      onMouseMove={illuminate}
      initial={{ opacity: 0, y: 34, scale: .98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={reduced ? undefined : { y: -7, rotateX: 1.4, rotateY: index % 2 ? 1.1 : -1.1 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: .65, delay: (index % 4) * .06, ease: [0.22, 1, 0.36, 1] }}
      className={`edge-glow group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/[.09] p-7 [transform-style:preserve-3d] ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#7ddfff] via-[#3157ff] to-[#9747ff] transition-transform duration-700 group-hover:scale-x-100" />
      <div className="flex h-full flex-col justify-between gap-14">
        <div className="flex items-start">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.035] text-white/60 transition-all duration-500 group-hover:border-[#4b72ff]/45 group-hover:text-[#c8efff]">
            <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </span>
        </div>
        {statementCard ? (
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[.18em] text-[#7ddfff]/70">
                {item.title}
              </p>
              <h3
                aria-label={item.desc}
                className="max-w-[670px] text-[clamp(1.85rem,3.2vw,3rem)] font-medium leading-[.98] tracking-[-.055em] text-[#f7f8ff]"
              >
                Strategy, intelligence,{" "}
                <span className="text-white/30">and engineering.</span>
                <br />
                Working as one.
              </h3>
            </div>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>
        ) : (
          <div className="flex items-end justify-between gap-5">
            <div>
              <h3 className={`max-w-md font-medium tracking-[-.035em] ${featured ? "text-2xl sm:text-[1.75rem]" : "text-xl"}`}>{item.title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/42 transition-colors duration-500 group-hover:text-white/58">{item.desc}</p>
            </div>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="section-pad relative overflow-hidden border-y border-white/[.06] bg-[#0a0b0d]">
      <div aria-hidden="true" className="absolute inset-0 [background-image:radial-gradient(circle_at_12%_20%,rgba(92,105,255,.06),transparent_24%),radial-gradient(circle_at_90%_80%,rgba(145,97,255,.05),transparent_25%)]" />
      <ExpertiseTensorStack className="right-[4vw] top-10 hidden h-[390px] w-[min(52vw,800px)] opacity-80 lg:block" />
      <div className="site-grid relative">
        <SectionHeading
          eyebrow="Expertise"
          title="Depth where technology matters most."
          copy="We assemble the right mix of intelligence, product thinking, engineering, and infrastructure around each challenge."
        />
        <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {expertise.map((item, index) => <ExpertiseCard key={item.title} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}
