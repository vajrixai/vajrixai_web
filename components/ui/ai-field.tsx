"use client";

import { motion } from "framer-motion";

type VisualProps = {
  className?: string;
};

const tensorCells = Array.from({ length: 24 }, (_, index) => index);
const decisionCells = Array.from({ length: 42 }, (_, index) => index);
const terrainRows = Array.from({ length: 9 }, (_, index) => index);
const terrainColumns = Array.from({ length: 15 }, (_, index) => index);

function terrainY(row: number, column: number, phase: number) {
  const perspective = 70 + row * row * 3.5;
  const wave = Math.sin(column * .72 + row * .58 + phase) * (3 + row * 1.25);
  const ridge = Math.cos(column * .34 - row * .8 + phase * .7) * (2 + row * .7);
  return perspective + wave + ridge;
}

function terrainRowPath(row: number, phase: number) {
  return terrainColumns.map((column) => {
    const x = 36 + column * 60;
    const y = terrainY(row, column, phase);
    return `${column === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

function terrainColumnPath(column: number, phase: number) {
  return terrainRows.map((row) => {
    const spread = (column - 7) * (1 + row * .045);
    const x = 456 + spread * 60;
    const y = terrainY(row, column, phase);
    return `${row === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
}

export function IndustrySignalTerrain({ className = "" }: VisualProps) {
  const signalPath = terrainRowPath(5, 1.2);

  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-x-[8%] bottom-[4%] h-[58%] bg-[#3157ff]/10 blur-3xl [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 912 360" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="terrain-line" x1="40" y1="0" x2="870" y2="0">
            <stop stopColor="#3157ff" stopOpacity="0" />
            <stop offset=".28" stopColor="#3157ff" stopOpacity=".38" />
            <stop offset=".58" stopColor="#78ddff" stopOpacity=".7" />
            <stop offset="1" stopColor="#9747ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="terrain-scan" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#78ddff" stopOpacity="0" />
            <stop offset=".48" stopColor="#78ddff" stopOpacity=".18" />
            <stop offset=".52" stopColor="#f7f8ff" stopOpacity=".72" />
            <stop offset="1" stopColor="#3157ff" stopOpacity="0" />
          </linearGradient>
          <filter id="terrain-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {terrainRows.map((row) => (
          <motion.path
            key={`terrain-row-${row}`}
            d={terrainRowPath(row, 0)}
            animate={{
              d: [
                terrainRowPath(row, 0),
                terrainRowPath(row, 2.1),
                terrainRowPath(row, 4.2),
                terrainRowPath(row, 0),
              ],
            }}
            stroke="url(#terrain-line)"
            strokeWidth={row === 6 ? "1.15" : ".65"}
            opacity={.22 + row * .065}
            vectorEffect="non-scaling-stroke"
            transition={{ duration: 10 + row * .45, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {terrainColumns.map((column) => (
          <motion.path
            key={`terrain-column-${column}`}
            d={terrainColumnPath(column, 0)}
            animate={{
              d: [
                terrainColumnPath(column, 0),
                terrainColumnPath(column, 2.1),
                terrainColumnPath(column, 4.2),
                terrainColumnPath(column, 0),
              ],
            }}
            stroke="#5273ff"
            strokeWidth=".55"
            opacity={column % 2 ? .17 : .28}
            vectorEffect="non-scaling-stroke"
            transition={{ duration: 10 + (column % 4) * .6, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <motion.polygon
          points="-170,60 10,60 300,354 120,354"
          fill="url(#terrain-scan)"
          animate={{ x: [-80, 980] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "linear", repeatDelay: .7 }}
        />

        {[238, 456, 694].map((x, index) => {
          const baseY = 250 + index * 17;
          const peakY = 102 - index * 13;
          return (
            <motion.g
              key={x}
              animate={{ opacity: [.24, 1, .24] }}
              transition={{ duration: 2.7 + index * .6, repeat: Infinity, ease: "easeInOut", delay: index * .5 }}
            >
              <line x1={x} y1={baseY} x2={x} y2={peakY} stroke={index === 1 ? "#78ddff" : "#6a62ff"} strokeWidth="1" opacity=".55" />
              <circle cx={x} cy={peakY} r="4.5" fill={index === 1 ? "#c8efff" : "#9d7cff"} filter="url(#terrain-glow)" />
              <circle cx={x} cy={baseY} r="3" fill="#78ddff" opacity=".65" />
            </motion.g>
          );
        })}

        {[0, 1, 2].map((signal) => (
          <circle key={signal} r={signal === 1 ? "3.4" : "2.3"} fill={signal === 1 ? "#c8efff" : "#8871ff"} filter="url(#terrain-glow)">
            <animateMotion
              dur={`${5.8 + signal * 1.15}s`}
              begin={`${signal * 1.4}s`}
              repeatCount="indefinite"
              path={signalPath}
            />
          </circle>
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
