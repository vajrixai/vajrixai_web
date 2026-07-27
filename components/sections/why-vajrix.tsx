"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { strengths } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { AIField } from "@/components/ui/ai-field";

export function WhyVajrix() {
  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <AIField className="right-[5vw] top-14 hidden h-[360px] w-[min(62vw,940px)] opacity-70 lg:block" />
      <div className="site-grid relative z-10">
        <SectionHeading
          eyebrow="Why Vajrix AI"
          title="Built to be the technology partner you keep."
          copy="The best work compounds. We bring senior thinking, engineering discipline, and a long view to every engagement."
          align="split"
        />

        <div className="mt-12 grid gap-3 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .3 }}
            transition={{ duration: .85 }}
            className="relative min-h-[480px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0d10] p-8 lg:col-span-5 lg:p-10"
          >
            <div aria-hidden="true" className="absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full border border-white/[.07]" />
            <div aria-hidden="true" className="absolute -bottom-10 -right-10 h-[280px] w-[280px] rounded-full border border-[#3157ff]/30" />
            <div aria-hidden="true" className="absolute bottom-20 right-20 h-[105px] w-[105px] rounded-full bg-[#9747ff]/15 blur-xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78ddff]" />
                Partnership model
              </div>
              <div>
                <p className="text-[clamp(2rem,4vw,4rem)] font-[430] leading-[.98] tracking-[-.055em]">Think deeply.<br /><span className="text-white/35">Build precisely.</span><br />Stay accountable.</p>
                <p className="mt-7 max-w-sm leading-7 text-white/42">From the boardroom to the codebase, the same standard of care holds.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {strengths.map(([title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, rotateY: index % 2 ? -8 : 8 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, amount: .55 }}
                transition={{ duration: .7, delay: (index % 2) * .08 }}
                className="group min-h-[230px] rounded-[24px] border border-white/[.09] bg-white/[.016] p-7 transition-all duration-500 hover:border-white/15 hover:bg-white/[.035]"
              >
                <div className="grid h-8 w-8 place-items-center rounded-full border border-[#3157ff]/40 text-[#78ddff] transition-colors group-hover:bg-[#3157ff] group-hover:text-white">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" />
                </div>
                <h3 className="mt-10 text-lg font-medium tracking-[-.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
