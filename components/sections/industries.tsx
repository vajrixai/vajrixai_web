"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const patterns = [
  "group-hover:rotate-[1deg]",
  "group-hover:-translate-y-2",
  "group-hover:rotate-[-1deg]",
  "group-hover:translate-x-1",
] as const;

export function Industries() {
  const reduced = useReducedMotion();

  return (
    <section id="industries" className="section-pad">
      <div className="site-grid">
        <SectionHeading
          eyebrow="Industries"
          title="Fluent in complexity. Focused on your reality."
          copy="Domain context changes everything. We learn the constraints, standards, and operating rhythms that make each industry distinct."
          align="split"
        />

        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.name}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: .35 }}
              transition={{ duration: .75, delay: (index % 3) * .08 }}
              className="group relative min-h-[250px] overflow-hidden bg-[#090a0c] p-7 sm:p-9"
            >
              <div className={`absolute -bottom-16 -right-16 h-52 w-52 rounded-full border border-white/[.05] transition-all duration-700 ${reduced ? "" : patterns[index % patterns.length]} group-hover:scale-125 group-hover:border-[#3157ff]/30`} />
              <div className="absolute -bottom-7 -right-7 h-28 w-28 rounded-full border border-white/[.06] transition-transform duration-700 group-hover:scale-75" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[.18em] text-[#70d7ff]">{industry.code}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 -translate-x-2 text-white/20 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="text-[clamp(1.45rem,2.2vw,2rem)] font-medium tracking-[-.04em] transition-transform duration-500 group-hover:-translate-y-1">{industry.name}</h3>
                  <p className="mt-2 text-sm text-white/35 transition-colors duration-500 group-hover:text-white/55">{industry.line}</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#3157ff] to-[#9747ff] transition-transform duration-700 group-hover:scale-x-100" />
            </motion.article>
          ))}
          <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden bg-[#0f1115] p-7 sm:p-9">
            <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/30">Beyond categories</span>
            <p className="max-w-xs text-xl leading-snug tracking-[-.03em] text-white/65">A hard problem matters more to us than an industry label.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
