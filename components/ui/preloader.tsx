"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const markPath =
  "M613 1032L1756 2880C1835 3004 1960 3093 2110 3094C2260 3095 2380 3027 2461 2940L3321 1474L2779 1467C2664 1467 2594 1518 2521 1631L2122 2283L1506 1245C1416 1095 1304 1030 1196 1030L613 1032Z";

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const previousOverflow = useRef({ html: "", body: "" });

  const unlockScroll = useCallback(() => {
    document.documentElement.style.overflow = previousOverflow.current.html;
    document.body.style.overflow = previousOverflow.current.body;
  }, []);

  useEffect(() => {
    previousOverflow.current = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    };
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(
      () => setVisible(false),
      reducedMotion ? 650 : 2350,
    );

    return () => {
      window.clearTimeout(timer);
      unlockScroll();
    };
  }, [reducedMotion, unlockScroll]);

  return (
    <AnimatePresence onExitComplete={unlockScroll}>
      {visible && (
        <motion.div
          key="vajrix-preloader"
          role="status"
          aria-label="Loading Vajrix AI"
          initial={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0 0 100% 0)" }
          }
          transition={{ duration: reducedMotion ? 0.2 : 0.78, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-[#030407]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
          />
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.65 }}
            animate={
              reducedMotion
                ? { opacity: 0.22, scale: 1 }
                : { opacity: [0, 0.34, 0.18], scale: [0.65, 1.08, 1] }
            }
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute h-[min(72vw,560px)] w-[min(72vw,560px)] rounded-full bg-[radial-gradient(circle,rgba(49,87,255,.22),rgba(151,71,255,.06)_42%,transparent_70%)] blur-2xl"
          />

          <div className="relative flex flex-col items-center">
            <motion.svg
              viewBox="500 850 3000 2400"
              role="img"
              aria-label="Vajrix AI symbol"
              initial={reducedMotion ? false : { scale: 0.88, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[clamp(150px,18vw,245px)] overflow-visible"
            >
              <defs>
                <linearGradient
                  id="preloader-mark-gradient"
                  x1="600"
                  y1="1050"
                  x2="3320"
                  y2="1550"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#e7f8ff" />
                  <stop offset="25%" stopColor="#83bdff" />
                  <stop offset="52%" stopColor="#2855ff" />
                  <stop offset="76%" stopColor="#1428ff" />
                  <stop offset="100%" stopColor="#8c37ff" />
                </linearGradient>
                <linearGradient id="preloader-dot-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d9f4ff" />
                  <stop offset="48%" stopColor="#4d82ff" />
                  <stop offset="100%" stopColor="#641cff" />
                </linearGradient>
                <linearGradient id="preloader-sheen" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="white" stopOpacity=".85" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <filter id="preloader-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="42" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="preloader-reveal">
                  <motion.rect
                    x="450"
                    y="800"
                    height="2500"
                    fill="white"
                    initial={{ width: reducedMotion ? 3100 : 0 }}
                    animate={{ width: 3100 }}
                    transition={{ duration: 0.95, delay: 0.28, ease: [0.65, 0, 0.35, 1] }}
                  />
                </mask>
                <clipPath id="preloader-mark-clip">
                  <path d={markPath} />
                </clipPath>
              </defs>

              {!reducedMotion && (
                <motion.path
                  d={markPath}
                  fill="none"
                  stroke="#87d9ff"
                  strokeWidth="12"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.9, 0.18] }}
                  transition={{ pathLength: { duration: 1.05, ease: "easeInOut" }, opacity: { duration: 1.4 } }}
                />
              )}

              <path
                d={markPath}
                fill="url(#preloader-mark-gradient)"
                mask="url(#preloader-reveal)"
                filter="url(#preloader-glow)"
              />

              {!reducedMotion && (
                <motion.rect
                  y="900"
                  width="560"
                  height="2300"
                  fill="url(#preloader-sheen)"
                  clipPath="url(#preloader-mark-clip)"
                  initial={{ x: 100, skewX: -16, opacity: 0 }}
                  animate={{ x: 3500, opacity: [0, 0.8, 0] }}
                  transition={{ duration: 0.9, delay: 0.92, ease: [0.45, 0, 0.55, 1] }}
                />
              )}

              <motion.circle
                cx="3131"
                cy="1198"
                r="154"
                fill="url(#preloader-dot-gradient)"
                filter="url(#preloader-glow)"
                initial={reducedMotion ? false : { opacity: 0, scale: 0, y: -180 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.88 }}
                style={{ transformOrigin: "3131px 1198px" }}
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
