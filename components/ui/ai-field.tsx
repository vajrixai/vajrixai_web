"use client";

import { motion } from "framer-motion";

type VisualProps = {
  className?: string;
};

const industryNodes = [
  [70, 188],
  [168, 92],
  [292, 148],
  [412, 66],
  [538, 168],
  [680, 112],
  [758, 242],
  [498, 278],
  [276, 256],
] as const;

const expertiseRays = Array.from({ length: 18 }, (_, index) => index);
const decisionCells = Array.from({ length: 42 }, (_, index) => index);

export function IndustryIntelligenceMap({ className = "" }: VisualProps) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgba(49,87,255,.16),transparent_38%),radial-gradient(circle_at_18%_70%,rgba(120,221,255,.08),transparent_30%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 820 340" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M70 188 C146 72 220 88 292 148 C365 209 398 88 412 66 C494 90 498 196 538 168 C610 116 646 90 680 112 C722 144 716 218 758 242 C650 322 584 300 498 278 C382 248 336 290 276 256 C204 224 160 184 70 188Z"
          stroke="url(#industry-map-glow)"
          strokeWidth="1.2"
          strokeDasharray="8 11"
          animate={{ strokeDashoffset: [0, -190] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M70 188 L292 148 L538 168 L758 242 M168 92 L412 66 L680 112 M276 256 L498 278"
          stroke="rgba(120,221,255,.18)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: .35 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {industryNodes.map(([cx, cy], index) => (
          <motion.g key={`${cx}-${cy}`} style={{ transformOrigin: `${cx}px ${cy}px` }}>
            <motion.circle
              cx={cx}
              cy={cy}
              r={index % 3 === 0 ? 21 : 14}
              stroke={index % 2 ? "#3157ff" : "#78ddff"}
              strokeWidth=".7"
              fill="rgba(9,10,12,.7)"
              animate={{ scale: [1, 1.26, 1], opacity: [.26, .62, .26] }}
              transition={{ duration: 3.4 + index * .16, repeat: Infinity, ease: "easeInOut", delay: index * .18 }}
            />
            <circle cx={cx} cy={cy} r="3.5" fill={index % 2 ? "#78ddff" : "#f7f8ff"} />
          </motion.g>
        ))}
        <defs>
          <linearGradient id="industry-map-glow" x1="70" y1="188" x2="758" y2="242">
            <stop stopColor="#78ddff" />
            <stop offset=".48" stopColor="#3157ff" />
            <stop offset="1" stopColor="#9747ff" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute left-[18%] top-[18%] rounded-full border border-white/10 bg-[#090a0c]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[.18em] text-white/34 backdrop-blur"
        animate={{ x: [0, 18, 0], opacity: [.3, .72, .3] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        domain graph
      </motion.div>
      <motion.div
        className="absolute bottom-[18%] right-[13%] rounded-full border border-[#3157ff]/25 bg-[#090a0c]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[.18em] text-[#9ee8ff]/60 backdrop-blur"
        animate={{ x: [0, -16, 0], opacity: [.28, .66, .28] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: .6 }}
      >
        constraints
      </motion.div>
    </div>
  );
}

export function ExpertiseNeuralBurst({ className = "" }: VisualProps) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3157ff]/12 blur-3xl" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#78ddff]/30"
        animate={{ rotate: 360, scale: [1, 1.12, 1] }}
        transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 3.4, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#9747ff]/24"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {expertiseRays.map((ray) => {
        const angle = ray * 20;
        const long = ray % 3 === 0;
        return (
          <motion.span
            key={ray}
            className="absolute left-1/2 top-1/2 h-px origin-left bg-gradient-to-r from-[#78ddff]/70 via-[#3157ff]/35 to-transparent"
            style={{ rotate: `${angle}deg`, width: long ? "46%" : "34%" }}
            animate={{ scaleX: [.25, 1, .25], opacity: [.08, .58, .08] }}
            transition={{ duration: 2.8 + (ray % 5) * .28, repeat: Infinity, ease: "easeInOut", delay: ray * .05 }}
          />
        );
      })}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_68%)]">
        {expertiseRays.slice(0, 10).map((ray) => (
          <motion.span
            key={`spark-${ray}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#c8efff] shadow-[0_0_18px_5px_rgba(120,221,255,.25)]"
            style={{ left: `${18 + (ray * 13) % 68}%`, top: `${16 + (ray * 19) % 64}%` }}
            animate={{ y: [-10, 10, -10], opacity: [.16, .85, .16] }}
            transition={{ duration: 3.2 + ray * .12, repeat: Infinity, ease: "easeInOut", delay: ray * .18 }}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/10 bg-[#090a0c]/80 backdrop-blur">
        <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">core</span>
      </div>
    </div>
  );
}

export function DecisionMatrixField({ className = "" }: VisualProps) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(0deg,rgba(75,114,255,.07)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:linear-gradient(90deg,transparent,black_14%,black_86%,transparent)]" />
      <div className="absolute inset-x-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#78ddff]/38 to-transparent" />
      <div className="absolute inset-y-[10%] left-1/2 w-px bg-gradient-to-b from-transparent via-[#9747ff]/30 to-transparent" />
      <div className="absolute inset-8 grid grid-cols-7 gap-2">
        {decisionCells.map((cell) => (
          <motion.span
            key={cell}
            className="rounded-[6px] border border-white/[.055] bg-white/[.018]"
            animate={{
              opacity: cell % 5 === 0 ? [.18, .72, .18] : [.08, .26, .08],
              backgroundColor: cell % 7 === 0 ? ["rgba(49,87,255,.03)", "rgba(49,87,255,.18)", "rgba(49,87,255,.03)"] : undefined,
            }}
            transition={{ duration: 3 + (cell % 6) * .22, repeat: Infinity, ease: "easeInOut", delay: (cell % 9) * .12 }}
          />
        ))}
      </div>
      <motion.div
        className="absolute left-[14%] right-[18%] top-[38%] h-16 rounded-full border border-[#78ddff]/20 bg-gradient-to-r from-transparent via-[#3157ff]/10 to-transparent blur-[1px]"
        animate={{ x: ["-8%", "10%", "-8%"], opacity: [.18, .52, .18] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[16%] rounded-xl border border-white/10 bg-[#090a0c]/75 px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em] text-white/42 backdrop-blur"
        animate={{ y: [8, -8, 8], opacity: [.34, .72, .34] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      >
        confidence 98.4
      </motion.div>
    </div>
  );
}
