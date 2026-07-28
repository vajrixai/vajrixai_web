"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const vajrixLetters = [..."VAJRIX"];
const aiLetters = [..."AI"];

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
      reducedMotion ? 650 : 2500,
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
                ? { opacity: 0.2, scale: 1 }
                : {
                    opacity: [0, 0.32, 0.14],
                    scale: [0.65, 1.1, 1],
                    rotate: [0, 4, 0],
                  }
            }
            transition={{ duration: 2.1, ease: "easeOut" }}
            className="absolute h-[min(72vw,560px)] w-[min(72vw,560px)] rounded-full bg-[radial-gradient(circle,rgba(49,87,255,.2),rgba(151,71,255,.055)_42%,transparent_70%)] blur-2xl"
          />

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: .965 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .45, ease: "easeOut" }}
            className="relative flex w-full flex-col items-center px-6 [perspective:900px]"
          >
            <div
              aria-label="Vajrix AI"
              className="font-orbitron flex items-baseline gap-[.12em] whitespace-nowrap text-[clamp(1.35rem,4.2vw,3.5rem)] uppercase leading-none text-[#f7f9ff]"
            >
              <span aria-hidden="true" className="inline-flex gap-[.09em]">
                {vajrixLetters.map((letter, index) => (
                  <span key={`${letter}-${index}`} className="inline-block overflow-hidden pb-[.1em]">
                    <motion.span
                      className="inline-block"
                      initial={
                        reducedMotion
                          ? false
                          : { y: "118%", rotateX: -78, opacity: 0, filter: "blur(10px)" }
                      }
                      animate={{ y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: .72,
                        delay: .12 + index * .075,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </span>

              <span aria-hidden="true" className="ml-[.16em] inline-flex gap-[.09em]">
                {aiLetters.map((letter, index) => (
                  <span key={`${letter}-${index}`} className="inline-block overflow-hidden pb-[.1em]">
                    <motion.span
                      className="brand-gradient-text inline-block"
                      initial={
                        reducedMotion
                          ? false
                          : { y: "118%", rotateX: -78, opacity: 0, filter: "blur(10px)" }
                      }
                      animate={{ y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: .78,
                        delay: .62 + index * .09,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </span>
            </div>

            {!reducedMotion && (
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: .7 }}
                animate={{ opacity: [0, .5, 0], scaleX: [0.7, 1.04, 1.12] }}
                transition={{ duration: 1.35, delay: .78, ease: "easeOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[min(86vw,820px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(77,104,255,.16),transparent_68%)] blur-xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
