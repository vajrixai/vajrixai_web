"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { strengths } from "@/lib/data";
import { DecisionMatrixField } from "@/components/ui/ai-field";

const coreRings = [0, 1, 2] as const;
const coreNodes = Array.from({ length: 14 }, (_, index) => index);
const visibleStrengths = strengths.slice(0, 6);

function PartnershipCore() {
  return (
    <div className="pointer-events-none absolute inset-x-5 top-16 h-[180px] overflow-hidden rounded-[22px] border border-white/[.06] bg-white/[.012]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,221,255,.05)_1px,transparent_1px),linear-gradient(0deg,rgba(49,87,255,.055)_1px,transparent_1px)] bg-[size:42px_42px] opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3157ff]/12 blur-2xl" />
      {coreRings.map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#4b72ff]/25"
          style={{
            height: `${92 + ring * 54}px`,
            width: `${92 + ring * 54}px`,
            marginLeft: `${-(92 + ring * 54) / 2}px`,
            marginTop: `${-(92 + ring * 54) / 2}px`,
          }}
          animate={{ rotate: ring % 2 ? -360 : 360, scale: [1, 1.06, 1] }}
          transition={{
            rotate: { duration: 18 + ring * 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 3.8 + ring * .5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
      {coreNodes.map((node) => (
        <motion.span
          key={node}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#c8efff] shadow-[0_0_18px_5px_rgba(120,221,255,.24)]"
          style={{
            left: `${12 + (node * 19) % 78}%`,
            top: `${16 + (node * 31) % 68}%`,
          }}
          animate={{ opacity: [.16, .92, .16], scale: [.7, 1.45, .7] }}
          transition={{ duration: 2.8 + (node % 5) * .22, repeat: Infinity, ease: "easeInOut", delay: node * .11 }}
        />
      ))}
      <motion.div
        className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#78ddff]/65 to-transparent"
        animate={{ x: ["-12%", "12%", "-12%"], opacity: [.16, .7, .16] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/10 bg-[#090a0c]/75 backdrop-blur">
        <span className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">system</span>
      </div>
    </div>
  );
}

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
            className="relative min-h-[350px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0d10] p-7 lg:col-span-5 lg:p-8"
          >
            <div aria-hidden="true" className="absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full border border-white/[.07]" />
            <div aria-hidden="true" className="absolute -bottom-10 -right-10 h-[280px] w-[280px] rounded-full border border-[#3157ff]/30" />
            <div aria-hidden="true" className="absolute bottom-20 right-20 h-[105px] w-[105px] rounded-full bg-[#9747ff]/15 blur-xl" />
            <PartnershipCore />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-[#78ddff]" />
                Partnership model
              </div>
              <div>
                <p className="text-[clamp(1.75rem,3.15vw,3.05rem)] font-[430] leading-[.98] tracking-[-.055em]">Think deeply.<br /><span className="text-white/35">Build precisely.</span><br />Stay accountable.</p>
                <p className="mt-5 max-w-sm text-sm leading-6 text-white/42">From the boardroom to the codebase, the same standard of care holds.</p>
              </div>
            </div>
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
