"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { MagneticLink } from "@/components/ui/magnetic-link";

const brandLetters = [..."VAJRIX"];
const aiLetters = [..."AI"];

export function Hero() {
  const reduced = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  return (
    <section
      ref={section}
      id="top"
      className="relative min-h-[900px] overflow-hidden border-b border-white/10 pt-24 md:min-h-[100svh]"
    >
      <div
        aria-hidden="true"
        className="hero-grid absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.032)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_43%,rgba(23,72,210,.18),transparent_28%),radial-gradient(circle_at_86%_65%,rgba(151,71,255,.1),transparent_25%),radial-gradient(circle_at_24%_30%,rgba(101,223,255,.045),transparent_23%),linear-gradient(to_bottom,transparent_68%,#05060a_98%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-full bg-[linear-gradient(90deg,rgba(5,6,10,.76)_0%,rgba(5,6,10,.48)_30%,rgba(5,6,10,.08)_57%,transparent_76%)] lg:w-[72%]"
      />

      <motion.div
        style={{ y: reduced ? 0 : contentY, opacity }}
        className="site-grid relative z-10 grid min-h-[calc(100svh-6rem)] min-w-0 items-center py-20 md:py-24 lg:grid-cols-[minmax(0,.92fr)_minmax(420px,1.08fr)] lg:py-28"
      >
        <div className="flex min-w-0 max-w-[680px] flex-col items-start text-left">
          <h1
            aria-label="Vajrix AI"
            className="font-orbitron flex max-w-full items-baseline overflow-visible text-[clamp(3.1rem,5.55vw,5.75rem)] leading-[1.08] tracking-[.150em] [perspective:800px]"
          >
            <span aria-hidden="true" className="inline-flex">
              {brandLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="inline-block origin-bottom"
                  initial={{ y: "112%", rotateX: -75, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.78,
                    delay: 0.12 + index * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span aria-hidden="true" className="ml-[.16em] inline-flex">
              {aiLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="brand-gradient-text inline-block origin-bottom"
                  initial={{ y: "112%", rotateX: -75, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.82,
                    delay: 0.46 + index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ delay: 0.58, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9"
          >
            <motion.p
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.58, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-[clamp(1.45rem,2.4vw,2.35rem)] font-[430] leading-tight tracking-[-.045em] text-white/88"
            >
              We make intelligence operational.
            </motion.p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.82, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/48 sm:text-lg"
          >
              AI products, autonomous systems, and enterprise platforms engineered to move complex organizations forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.8 }}
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row"
          >
            <MagneticLink href="#contact" className="min-w-[190px]">Start a conversation</MagneticLink>
            <MagneticLink href="#capabilities" variant="outline" className="min-w-[190px]">
              Explore capabilities
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.02, duration: 1 }}
            className="mt-11 flex flex-wrap items-center justify-start gap-2"
          >
            {["AI products", "Autonomous systems", "Enterprise platforms"].map((item, index) => (
              <span
                key={item}
                className="rounded-full border border-white/[.08] bg-black/35 px-4 py-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/35 backdrop-blur-md"
              >
                <span className={`mr-2 inline-block h-1 w-1 rounded-full ${index === 0 ? "bg-[#78ddff]" : index === 1 ? "bg-[#536cff]" : "bg-[#a64dff]"}`} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[8px] uppercase tracking-[.2em] text-white/25 transition-colors hover:text-white"
      >
        Scroll to explore
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
}
