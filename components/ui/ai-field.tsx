"use client";

import { motion } from "framer-motion";

type VisualProps = {
  className?: string;
};

const tensorCells = Array.from({ length: 24 }, (_, index) => index);
const decisionCells = Array.from({ length: 42 }, (_, index) => index);
const industryStreams = [
  "M 20 76 C 130 24 190 138 302 86 S 486 52 600 104",
  "M 20 138 C 122 92 214 182 316 132 S 484 102 600 154",
  "M 20 202 C 132 154 204 250 320 194 S 488 164 600 214",
  "M 20 264 C 140 226 214 298 326 252 S 492 230 600 272",
] as const;

export function IndustrySignalFlow({ className = "" }: VisualProps) {

  return (
    <div className={`pointer-events-none relative overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-[18%] top-1/2 h-32 w-[62%] -translate-y-1/2 bg-[#3157ff]/10 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 320" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="industry-flow-line" x1="20" y1="0" x2="600" y2="0">
            <stop stopColor="#3157ff" stopOpacity=".05" />
            <stop offset=".48" stopColor="#78ddff" stopOpacity=".62" />
            <stop offset="1" stopColor="#9747ff" stopOpacity=".08" />
          </linearGradient>
          <filter id="industry-flow-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {industryStreams.map((stream, index) => (
          <motion.path
            key={stream}
            d={stream}
            stroke="url(#industry-flow-line)"
            strokeWidth={index === 1 ? "1.2" : ".75"}
            strokeDasharray={index % 2 ? "8 12" : undefined}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [.2, .75, .2], strokeDashoffset: [0, -120] }}
            transition={{
              pathLength: { duration: 1.8, delay: index * .15 },
              opacity: { duration: 4.2 + index * .5, repeat: Infinity, ease: "easeInOut" },
              strokeDashoffset: { duration: 7 + index, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}

        {[124, 302, 486].map((x, index) => (
          <motion.g
            key={x}
            animate={{ opacity: [.22, .88, .22] }}
            transition={{ duration: 3.2 + index * .6, repeat: Infinity, ease: "easeInOut", delay: index * .5 }}
          >
            <line x1={x} y1="58" x2={x} y2="278" stroke={index === 1 ? "#78ddff" : "#526dff"} strokeWidth=".7" opacity=".28" />
            {[78, 142, 206, 266].map((y, nodeIndex) => (
              <motion.rect
                key={y}
                x={x - 4}
                y={y - 4}
                width="8"
                height="8"
                rx="2"
                fill={nodeIndex === index ? "#c8efff" : "#657eff"}
                filter={nodeIndex === index ? "url(#industry-flow-glow)" : undefined}
                animate={{ scale: [.65, 1.25, .65] }}
                style={{ transformOrigin: `${x}px ${y}px` }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: nodeIndex * .28 + index * .35 }}
              />
            ))}
          </motion.g>
        ))}

        {industryStreams.map((stream, index) => (
          <circle key={`flow-signal-${stream}`} r={index === 1 ? "4" : "2.7"} fill={index % 2 ? "#c8efff" : "#9477ff"} filter="url(#industry-flow-glow)">
            <animateMotion
              dur={`${5.2 + index * .9}s`}
              begin={`${index * .8}s`}
              repeatCount="indefinite"
              path={stream}
            />
          </circle>
        ))}

        {[0, 1].map((index) => (
            <motion.g
              key={`flow-bracket-${index}`}
              animate={{ x: index ? [0, -22, 0] : [0, 22, 0], opacity: [.18, .55, .18] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * .7 }}
            >
              <path
                d={index ? "M 598 42 L 612 42 L 612 278 L 598 278" : "M 22 42 L 8 42 L 8 278 L 22 278"}
                stroke={index ? "#9747ff" : "#78ddff"}
                strokeWidth="1"
                opacity=".45"
              />
            </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function ExpertiseTensorStack({ className = "" }: VisualProps) {
  return (
    <div className={`pointer-events-none absolute overflow-visible [perspective:900px] ${className}`} aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-40 w-[70%] -translate-x-1/2 -translate-y-1/2 bg-[#3157ff]/10 blur-3xl" />

      {[0, 1, 2].map((layer) => (
        <div
          key={layer}
          className="absolute left-1/2 top-1/2 h-[132px] w-[340px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
          style={{ transform: `translate(-50%, -50%) rotateX(62deg) rotateZ(-18deg) translateZ(${(layer - 1) * 82}px)` }}
        >
          <motion.span
            className="absolute inset-0 border border-[#6081ff]/30 bg-[#0c1020]/35 shadow-[0_0_36px_rgba(49,87,255,.08)] backdrop-blur-[1px]"
            animate={{ y: [-5, 5, -5], opacity: [.32, .72, .32] }}
            transition={{ duration: 4.2 + layer * .7, repeat: Infinity, ease: "easeInOut", delay: layer * .45 }}
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,221,255,.09)_1px,transparent_1px),linear-gradient(0deg,rgba(75,114,255,.11)_1px,transparent_1px)] bg-[size:56px_44px]" />
            <span className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#78ddff]/65 to-transparent" />
          </motion.span>
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-[5px] p-2">
            {tensorCells.map((cell) => (
              <motion.span
                key={cell}
                className="border border-[#5d78ff]/10 bg-[#3157ff]/[.025]"
                animate={{
                  backgroundColor: cell % (4 + layer) === 0
                    ? ["rgba(49,87,255,.03)", "rgba(120,221,255,.42)", "rgba(49,87,255,.03)"]
                    : ["rgba(49,87,255,.02)", "rgba(94,77,255,.13)", "rgba(49,87,255,.02)"],
                  opacity: [.18, .9, .18],
                }}
                transition={{
                  duration: 2.4 + (cell % 5) * .24,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: layer * .35 + cell * .055,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {[24, 39, 55, 71].map((left, index) => (
        <motion.span
          key={left}
          className="absolute top-[20%] h-[58%] w-px bg-gradient-to-b from-transparent via-[#78ddff]/55 to-transparent"
          style={{ left: `${left}%`, rotate: `${index % 2 ? -13 : 11}deg` }}
          animate={{ opacity: [.08, .65, .08], scaleY: [.45, 1, .45] }}
          transition={{ duration: 3.1 + index * .4, repeat: Infinity, ease: "easeInOut", delay: index * .35 }}
        />
      ))}

      <motion.div
        className="absolute left-[16%] top-[29%] h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-[#78ddff] to-transparent shadow-[0_0_18px_rgba(120,221,255,.7)]"
        animate={{ x: [0, 390, 0], y: [0, 112, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[42%] h-1 w-10 rounded-full bg-gradient-to-r from-transparent via-[#9c72ff] to-transparent shadow-[0_0_18px_rgba(151,71,255,.7)]"
        animate={{ x: [0, -310, 0], y: [0, 76, 0], opacity: [0, .9, 0] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      />

      <div className="absolute inset-x-[12%] bottom-[12%] h-px bg-gradient-to-r from-transparent via-[#3157ff]/35 to-transparent" />
      <div className="absolute inset-x-[20%] top-[14%] h-px bg-gradient-to-r from-transparent via-[#78ddff]/20 to-transparent" />
      <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_22%,black_78%,transparent)]">
        {tensorCells.slice(0, 8).map((cell) => (
          <motion.span
            key={`tensor-particle-${cell}`}
            className="absolute h-1 w-1 bg-[#c8efff] shadow-[0_0_12px_3px_rgba(120,221,255,.28)]"
            style={{ left: `${16 + (cell * 11) % 72}%`, top: `${12 + (cell * 17) % 76}%` }}
            animate={{ y: [-8, 8, -8], opacity: [.08, .72, .08] }}
            transition={{ duration: 2.8 + cell * .18, repeat: Infinity, ease: "easeInOut", delay: cell * .14 }}
          />
        ))}
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
