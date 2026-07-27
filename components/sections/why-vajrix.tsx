"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { strengths } from "@/lib/data";
import { DecisionMatrixField } from "@/components/ui/ai-field";

const visibleStrengths = strengths.slice(0, 6);
const additionalStrength = strengths[6];

export function WhyVajrix() {
  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <DecisionMatrixField className="right-[5vw] top-4 hidden h-[260px] w-[min(58vw,860px)] opacity-55 lg:block" />
      <div className="site-grid relative z-10">
        <div className="grid gap-8 border-t border-white/10 pt-6 lg:grid-cols-[.95fr_1.05fr] lg:items-end lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .5 }}
            transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Why Vajrix AI</span>
            <h2 className="mt-7 max-w-[760px] text-[clamp(2.45rem,5vw,4.85rem)] font-medium leading-[.98] tracking-[-.055em] text-[#f7f8ff]">
              Built to be the technology partner you keep.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .5 }}
            transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[680px] text-[clamp(1.05rem,1.45vw,1.24rem)] leading-[1.75] text-[#a3a9b8]"
          >
            The best work compounds. We bring senior thinking, engineering discipline, and a long view to every engagement.
          </motion.p>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .3 }}
            transition={{ duration: .85 }}
            className="relative grid min-h-[500px] gap-3 lg:col-span-5 lg:h-full lg:min-h-0 lg:grid-rows-[1.45fr_1fr]"
          >
            <div className="relative flex min-h-[250px] flex-col overflow-hidden rounded-[22px] border border-white/[.09] bg-[#0b0d10]/95 p-6">
              <div aria-hidden="true" className="absolute -bottom-32 -right-24 h-[300px] w-[300px] rounded-full border border-[#3157ff]/20" />
              <div aria-hidden="true" className="absolute -bottom-8 right-4 h-[120px] w-[120px] rounded-full bg-[#9747ff]/10 blur-2xl" />
              <div className="relative flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78ddff]" />
                Partnership model
              </div>
              <div className="relative mt-auto pt-6">
                <p className="text-[clamp(1.65rem,2.55vw,2.5rem)] font-[430] leading-[1.02] tracking-[-.05em]">
                Think deeply. <span className="text-white/35">Build precisely.</span><br />Stay accountable.
                </p>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/42">From the boardroom to the codebase, the same standard of care holds.</p>
              </div>
            </div>
            <article className="group relative min-h-[166px] overflow-hidden rounded-[22px] border border-white/[.09] bg-white/[.016] p-6 transition-all duration-500 hover:border-white/15 hover:bg-white/[.035]">
              <div aria-hidden="true" className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full border border-[#3157ff]/15" />
              <div className="relative grid h-7 w-7 place-items-center rounded-full border border-[#3157ff]/40 text-[#78ddff] transition-colors group-hover:bg-[#3157ff] group-hover:text-white">
                <Check aria-hidden="true" className="h-3 w-3" />
              </div>
              <h3 className="relative mt-7 text-base font-medium tracking-[-.03em]">{additionalStrength[0]}</h3>
              <p className="relative mt-2 text-sm leading-6 text-white/40">{additionalStrength[1]}</p>
            </article>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {visibleStrengths.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, rotateY: index % 2 ? -8 : 8 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, amount: .55 }}
                transition={{ duration: .7, delay: (index % 2) * .08 }}
                className="group min-h-[166px] rounded-[22px] border border-white/[.09] bg-white/[.016] p-6 transition-all duration-500 hover:border-white/15 hover:bg-white/[.035]"
              >
                <div className="grid h-7 w-7 place-items-center rounded-full border border-[#3157ff]/40 text-[#78ddff] transition-colors group-hover:bg-[#3157ff] group-hover:text-white">
                  <Check aria-hidden="true" className="h-3 w-3" />
                </div>
                <h3 className="mt-7 text-base font-medium tracking-[-.03em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
