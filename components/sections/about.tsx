"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";

const principles = [
  {
    number: "01",
    title: "See the whole system",
    text: "Strategy, software, data, operations, and people are treated as one connected design challenge.",
  },
  {
    number: "02",
    title: "Build for real conditions",
    text: "Our systems are engineered around security, scale, adoption, and the realities of enterprise work.",
  },
  {
    number: "03",
    title: "Keep value in motion",
    text: "We design durable foundations that get more useful as your organization and ambitions evolve.",
  },
];

export function About() {
  const section = useRef<HTMLElement>(null);
  const panels = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      panels.current.forEach((panel, index) => {
        if (!panel) return;
        gsap.fromTo(
          panel,
          { x: index % 2 === 0 ? -56 : 56, opacity: 0, rotateX: 5 },
          {
            x: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 86%" },
          },
        );
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={section} id="about" className="relative py-24 lg:py-32">
      <div className="site-grid">
        <div className="grid gap-10 border-t border-white/10 pt-7 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow"
            >
              About Vajrix AI
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="section-title mt-8 max-w-[650px]"
            >
              Technology should create clarity—not more complexity.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="section-copy max-w-[690px] lg:pb-1"
          >
            Vajrix AI helps ambitious organizations modernize, automate, and build with confidence. We unite strategic thinking with deep engineering to move from consequential questions to systems that perform.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-3 lg:grid-cols-12">
          <div className="relative min-h-[340px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0e11] p-8 lg:col-span-5 lg:min-h-[480px] lg:p-10">
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(139,129,255,.11),transparent_44%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle,black,transparent_68%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/35">Our operating belief</p>
              <div>
                <div className="mb-7 h-2 w-2 rounded-full bg-[#78ddff] shadow-[0_0_40px_12px_rgba(49,87,255,.55)]" />
                <p className="max-w-sm text-[clamp(1.8rem,3.1vw,3.2rem)] font-[430] leading-[1.02] tracking-[-.05em]">
                  Precision in every layer. Progress in every release.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:col-span-7">
            {principles.map((item, index) => (
              <div
                key={item.number}
                ref={(node) => {
                  panels.current[index] = node;
                }}
                className="group grid min-h-[150px] gap-7 rounded-[28px] border border-white/10 bg-white/[.018] p-7 transition-colors duration-500 hover:bg-white/[.04] sm:grid-cols-[auto_1fr_auto] sm:p-8"
              >
                <span className="font-mono text-[11px] text-[#70d7ff]">{item.number}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-.03em] sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-lg leading-7 text-white/45">{item.text}</p>
                </div>
                <ArrowDownRight className="h-5 w-5 text-white/25 transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
