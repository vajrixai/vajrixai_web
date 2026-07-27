"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { strengths } from "@/lib/data";
import { DecisionMatrixField } from "@/components/ui/ai-field";

const coreRings = [0, 1, 2, 3] as const;
const coreNodes = Array.from({ length: 22 }, (_, index) => index);
const visibleStrengths = strengths.slice(0, 6);

function PartnershipCore() {
  return (
    <div className="pointer-events-none absolute inset-x-5 top-14 h-[200px] overflow-hidden rounded-[22px] border border-white/[.06] bg-white/[.012]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,221,255,.05)_1px,transparent_1px),linear-gradient(0deg,rgba(49,87,255,.055)_1px,transparent_1px)] bg-[size:34px_34px] opacity-55" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3157ff]/14 blur-2xl" />
      <motion.div
        className="absolute left-[8%] top-1/2 h-px w-[84%] origin-center bg-gradient-to-r from-transparent via-[#78ddff]/70 to-transparent"
        animate={{ rotate: [0, 180, 360], opacity: [.2, .78, .2] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-[10%] h-[80%] w-px origin-center bg-gradient-to-b from-transparent via-[#9747ff]/55 to-transparent"
        animate={{ rotate: [90, -90, -270], opacity: [.14, .58, .14] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
      />
      {coreRings.map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#4b72ff]/25"
          style={{
            height: `${64 + ring * 42}px`,
            width: `${64 + ring * 42}px`,
            marginLeft: `${-(64 + ring * 42) / 2}px`,
            marginTop: `${-(64 + ring * 42) / 2}px`,
          }}
          animate={{ rotate: ring % 2 ? -360 : 360, scale: [1, 1.08, 1] }}
          transition={{
            rotate: { duration: 14 + ring * 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 3.8 + ring * .5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#78ddff]/22 bg-[#090a0c]/70 shadow-[0_0_40px_rgba(49,87,255,.18)] backdrop-blur"
        animate={{ rotate: [0, 90, 180, 270, 360], borderRadius: ["22px", "999px", "22px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {coreNodes.map((node) => (
        <motion.span
          key={node}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#c8efff] shadow-[0_0_18px_5px_rgba(120,221,255,.24)]"
          style={{
            left: `${8 + (node * 17) % 84}%`,
            top: `${12 + (node * 29) % 76}%`,
          }}
          animate={{ opacity: [.1, .92, .1], scale: [.55, 1.65, .55], x: [0, node % 2 ? 8 : -8, 0] }}
          transition={{ duration: 2.5 + (node % 6) * .2, repeat: Infinity, ease: "easeInOut", delay: node * .08 }}
        />
      ))}
      <motion.div
        className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#3157ff]/10 to-transparent"
        animate={{ opacity: [.08, .26, .08] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
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
