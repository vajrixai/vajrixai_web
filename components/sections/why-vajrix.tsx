"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { strengths } from "@/lib/data";
import { DecisionMatrixField } from "@/components/ui/ai-field";

const visibleStrengths = strengths.slice(0, 6);

function PartnershipCore() {
  const layers = [
    [[10, 25], [10, 50], [10, 75]],
    [[30, 16], [30, 39], [30, 62], [30, 84]],
    [[52, 28], [52, 50], [52, 72]],
    [[74, 16], [74, 39], [74, 62], [74, 84]],
    [[94, 30], [94, 50], [94, 70]],
  ] as const;
  const routes = [
    "M 10 25 C 18 25, 21 16, 30 16 S 43 28, 52 28 S 65 16, 74 16 S 86 30, 94 30",
    "M 10 50 C 18 50, 21 39, 30 39 S 43 50, 52 50 S 65 39, 74 39 S 86 50, 94 50",
    "M 10 75 C 18 75, 21 84, 30 84 S 43 72, 52 72 S 65 84, 74 84 S 86 70, 94 70",
    "M 10 25 C 18 25, 21 62, 30 62 S 43 28, 52 28 S 65 62, 74 62 S 86 50, 94 50",
    "M 10 75 C 18 75, 21 39, 30 39 S 43 72, 52 72 S 65 39, 74 39 S 86 30, 94 30",
  ] as const;

  return (
    <div className="pointer-events-none absolute inset-x-5 top-14 h-[200px] overflow-hidden rounded-[22px] border border-white/[.06] bg-white/[.012]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,221,255,.045)_1px,transparent_1px),linear-gradient(0deg,rgba(49,87,255,.045)_1px,transparent_1px)] bg-[size:38px_38px] opacity-45" />
      <div className="absolute inset-y-0 left-[44%] w-[22%] bg-[#3157ff]/10 blur-3xl" />
      <motion.div
        className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#78ddff]/[.07] to-transparent"
        animate={{ left: ["-18%", "110%"] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 104 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neural-route" x1="0" x2="1">
            <stop offset="0" stopColor="#3157ff" stopOpacity=".08" />
            <stop offset=".5" stopColor="#78ddff" stopOpacity=".5" />
            <stop offset="1" stopColor="#9747ff" stopOpacity=".12" />
          </linearGradient>
          <filter id="neural-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="1.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {routes.map((route, index) => (
          <motion.path
            key={route}
            d={route}
            fill="none"
            stroke="url(#neural-route)"
            strokeWidth={index === 1 ? .55 : .3}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [.05, .72, .18] }}
            transition={{ duration: 3.6, delay: index * .38, repeat: Infinity, repeatDelay: 1.2 }}
          />
        ))}

        {routes.map((route, index) => (
          <circle key={`signal-${route}`} r={index === 1 ? 1.15 : .75} fill={index % 2 ? "#78ddff" : "#8b6cff"} filter="url(#neural-glow)">
            <animateMotion
              dur={`${3.4 + index * .45}s`}
              begin={`${index * .55}s`}
              repeatCount="indefinite"
              path={route}
            />
          </circle>
        ))}

        {layers.flatMap((layer, layerIndex) =>
          layer.map(([x, y], nodeIndex) => (
            <motion.g
              key={`${x}-${y}`}
              initial={{ opacity: .25 }}
              animate={{ opacity: [.25, 1, .25] }}
              transition={{
                duration: 2.4,
                delay: layerIndex * .28 + nodeIndex * .16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <rect
                x={x - 1.35}
                y={y - 2.7}
                width="2.7"
                height="5.4"
                rx=".8"
                fill="#090b10"
                stroke={layerIndex === 2 ? "#78ddff" : "#4268ff"}
                strokeOpacity={layerIndex === 2 ? .75 : .4}
                strokeWidth=".35"
                vectorEffect="non-scaling-stroke"
              />
              <rect
                x={x - .45}
                y={y - .9}
                width=".9"
                height="1.8"
                rx=".3"
                fill={layerIndex === 2 ? "#c8efff" : "#657eff"}
                filter="url(#neural-glow)"
              />
            </motion.g>
          )),
        )}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#3157ff]/[.08] to-transparent" />
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
