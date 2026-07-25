"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { process as processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const section = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const steps = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(line.current, { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top 45%", end: "bottom 70%", scrub: .6 },
      });
      steps.current.forEach((step, index) => {
        if (!step) return;
        const body = step.querySelector("[data-process-body]");
        const dot = step.querySelector("[data-process-dot]");
        gsap.fromTo(body,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          { x: 0, opacity: 1, duration: .9, ease: "power3.out", scrollTrigger: { trigger: step, start: "top 72%" } }
        );
        gsap.fromTo(dot,
          { scale: .3, boxShadow: "0 0 0 rgba(120,133,255,0)" },
          { scale: 1, boxShadow: "0 0 22px rgba(120,133,255,.7)", duration: .5, scrollTrigger: { trigger: step, start: "top 70%", toggleActions: "play none none reverse" } }
        );
      });
    }, section);
    return () => context.revert();
  }, []);

  return (
    <section ref={section} id="process" className="section-pad relative border-y border-white/[.06] bg-[#0a0b0d]">
      <div className="site-grid">
        <SectionHeading
          eyebrow="Development Process"
          title="A clear path through complex work."
          copy="Structured enough to be dependable. Flexible enough to keep learning. Every phase reduces risk and increases clarity."
        />

        <div className="relative mx-auto mt-24 max-w-5xl">
          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-white/10 md:left-1/2" />
          <div ref={line} className="absolute bottom-0 left-[23px] top-0 w-px origin-top bg-gradient-to-b from-[#7ddfff] via-[#3157ff] to-[#9747ff] md:left-1/2" />
          <div className="space-y-10 md:space-y-0">
            {processSteps.map(([number, title, text], index) => (
              <div
                key={number}
                ref={(node) => { steps.current[index] = node; }}
                className={`relative grid min-h-[230px] grid-cols-[48px_1fr] gap-6 md:grid-cols-2 md:gap-24 ${index % 2 ? "" : "md:text-right"}`}
              >
                <div data-process-dot className="absolute left-[18px] top-9 z-10 h-[11px] w-[11px] rounded-full border-2 border-[#0a0b0d] bg-[#70d7ff] md:left-1/2 md:-translate-x-[5px]" />
                <div data-process-body className={`${index % 2 ? "col-start-2 md:col-start-2" : "col-start-2 md:col-start-1"} py-7`}>
                  <span className="font-mono text-[10px] tracking-[.18em] text-[#6f8eff]">PHASE {number}</span>
                  <h3 className="mt-4 text-[clamp(1.7rem,3.2vw,3rem)] font-medium tracking-[-.05em]">{title}</h3>
                  <p className={`mt-4 max-w-sm leading-7 text-white/42 ${index % 2 ? "" : "md:ml-auto"}`}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
