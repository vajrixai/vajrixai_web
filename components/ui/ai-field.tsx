"use client";

import { motion } from "framer-motion";

type AIFieldProps = {
  className?: string;
};

const nodes = [
  [78, 34],
  [186, 84],
  [318, 50],
  [438, 124],
  [590, 78],
  [694, 158],
  [128, 214],
  [284, 190],
  [412, 264],
  [562, 224],
  [724, 300],
] as const;

const labels = [
  ["model", "left-[13%] top-[16%]"],
  ["agent", "left-[62%] top-[13%]"],
  ["vector", "left-[32%] top-[64%]"],
  ["reason", "left-[77%] top-[58%]"],
] as const;

export function AIField({ className = "" }: AIFieldProps) {
  return (
    <div className={`pointer-events-none absolute overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,221,255,.07)_1px,transparent_1px),linear-gradient(0deg,rgba(49,87,255,.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <motion.div
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#78ddff]/55 to-transparent"
        animate={{ x: ["-35%", "35%"], opacity: [.18, .48, .18] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#9747ff]/45 to-transparent"
        animate={{ y: ["-18%", "18%"], opacity: [.12, .42, .12] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: .7 }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 820 360" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M78 34 C148 100 186 84 284 190 S438 124 562 224 S660 252 724 300"
          stroke="url(#ai-field-a)"
          strokeWidth="1.3"
          initial={{ pathLength: 0, opacity: .15 }}
          whileInView={{ pathLength: 1, opacity: .62 }}
          viewport={{ once: false, amount: .25 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M128 214 C210 70 318 50 438 124 S604 72 694 158"
          stroke="url(#ai-field-b)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: .08 }}
          whileInView={{ pathLength: 1, opacity: .45 }}
          viewport={{ once: false, amount: .25 }}
          transition={{ duration: 3.4, delay: .25, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M186 84 L318 50 L590 78 L724 300 L412 264 L128 214"
          stroke="rgba(255,255,255,.08)"
          strokeDasharray="5 10"
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        {nodes.map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? 5 : 3.2}
            fill={index % 2 ? "#78ddff" : "#f7f8ff"}
            animate={{ opacity: [.22, .95, .22], scale: [.7, 1.35, .7] }}
            transition={{ duration: 2.6 + index * .14, repeat: Infinity, ease: "easeInOut", delay: index * .16 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
        <defs>
          <linearGradient id="ai-field-a" x1="78" y1="34" x2="724" y2="300">
            <stop stopColor="#78ddff" />
            <stop offset=".48" stopColor="#3157ff" />
            <stop offset="1" stopColor="#9747ff" />
          </linearGradient>
          <linearGradient id="ai-field-b" x1="128" y1="214" x2="694" y2="158">
            <stop stopColor="#9747ff" />
            <stop offset="1" stopColor="#78ddff" />
          </linearGradient>
        </defs>
      </svg>
      {labels.map(([label, position], index) => (
        <motion.span
          key={label}
          className={`absolute ${position} rounded-full border border-white/10 bg-[#090a0c]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[.18em] text-white/36 backdrop-blur`}
          animate={{ y: [-5, 5, -5], opacity: [.24, .58, .24] }}
          transition={{ duration: 4.2 + index * .35, repeat: Infinity, ease: "easeInOut", delay: index * .4 }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  );
}
