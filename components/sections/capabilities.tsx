"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import { capabilities } from "@/lib/data";

function SystemVisual({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const rotateA = useTransform(progress, [0, 1], [0, 210]);
  const rotateB = useTransform(progress, [0, 1], [0, -150]);
  const scale = useTransform(progress, [0, .5, 1], [.82, 1.08, .92]);
  const smooth = useSpring(progress, { stiffness: 100, damping: 25 });
  const pathLength = useTransform(smooth, [0, 1], [.08, 1]);

  return (
    <div className="relative aspect-square w-full max-w-[clamp(450px,55vh,660px)] overflow-hidden rounded-full border border-white/10 bg-[#0b0d10]/55 opacity-65">
      <div className="absolute inset-[12%] rounded-full border border-dashed border-white/10" />
      <motion.div style={{ rotate: rotateA }} className="absolute inset-[21%] rounded-full border border-[#3157ff]/30">
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#c8efff] shadow-[0_0_24px_6px_rgba(72,109,255,.55)]" />
      </motion.div>
      <motion.div style={{ rotate: rotateB }} className="absolute inset-[31%] rounded-full border border-dashed border-white/20">
        <span className="absolute bottom-[9%] right-[8%] h-1.5 w-1.5 rounded-full bg-white/80" />
      </motion.div>
      <motion.div style={{ scale }} className="absolute inset-[40%] rounded-full border border-white/10 bg-gradient-to-br from-[#3157ff]/20 to-[#9747ff]/8 shadow-[0_0_90px_rgba(49,87,255,.2)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <motion.circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#capability-gradient)" strokeWidth=".45" style={{ pathLength }} />
        <defs>
          <linearGradient id="capability-gradient">
            <stop stopColor="#78ddff" />
            <stop offset=".52" stopColor="#3157ff" />
            <stop offset="1" stopColor="#a54cff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Capabilities() {
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });

  return (
    <section ref={section} id="capabilities" className="section-pad relative border-y border-white/[.06] bg-[#0a0b0d]">
      <div className="site-grid">
        <div className="grid gap-20 lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative lg:sticky lg:top-24 lg:h-max">
            <span className="eyebrow relative z-10">Capabilities</span>
            <h2 className="relative z-10 mt-7 max-w-[820px] text-[clamp(2.7rem,5.15vw,5rem)] font-medium leading-[.98] tracking-[-.055em] text-[#f7f8ff]">From the first signal to a system at scale.</h2>
            <p className="relative z-10 mt-6 max-w-[650px] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.75] text-[#a3a9b8]">One connected practice for inventing, engineering, modernizing, and operating your next technology advantage.</p>
            <div className="pointer-events-none -mt-40 hidden lg:block">
              <SystemVisual progress={scrollYProgress} />
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-10 left-[25px] top-10 w-px bg-gradient-to-b from-[#3157ff]/65 via-[#9747ff]/25 to-transparent sm:left-[33px]" />
            {capabilities.map(([number, title, text], index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .45 }}
                transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid min-h-[220px] grid-cols-[52px_1fr] gap-5 border-b border-white/[.08] py-10 first:pt-0 sm:grid-cols-[68px_1fr]"
              >
                <div className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-full border border-white/10 bg-[#0a0b0d] font-mono text-[10px] text-[#7ddfff] transition-all duration-500 group-hover:border-[#4b72ff]/60 group-hover:bg-[#111529] sm:h-[68px] sm:w-[68px]">
                  {number}
                </div>
                <div className="pt-1 sm:pt-3">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-xl text-[clamp(1.35rem,2.8vw,2.25rem)] font-medium leading-[1.1] tracking-[-.04em]">{title}</h3>
                    <ArrowDownRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-white/20 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:text-white" />
                  </div>
                  <p className="mt-4 max-w-xl leading-7 text-white/42">{text}</p>
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 + index * .02, duration: .8 }}
                    className="mt-7 h-px origin-left bg-gradient-to-r from-[#3157ff]/55 via-[#9747ff]/15 to-transparent"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
