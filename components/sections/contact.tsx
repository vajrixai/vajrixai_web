"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "@/components/ui/magnetic-link";

export function Contact() {
  const reduced = useReducedMotion();
  return (
    <section id="contact" className="relative px-4 pb-4 pt-16 sm:px-5 sm:pb-5">
      <motion.div
        initial={{ clipPath: "inset(14% 5% 14% 5% round 36px)", opacity: .4 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 30px)", opacity: 1 }}
        viewport={{ once: true, amount: .25 }}
        transition={{ duration: reduced ? .01 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101219]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(49,87,255,.26),transparent_25%),radial-gradient(circle_at_22%_100%,rgba(151,71,255,.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,black,transparent)]" />
        <motion.div
          aria-hidden="true"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-48 h-[600px] w-[600px] rounded-full border border-white/[.07]"
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#78ddff] shadow-[0_0_25px_8px_rgba(49,87,255,.58)]" />
        </motion.div>

        <div className="site-grid relative grid min-h-[600px] items-end gap-12 py-16 md:grid-cols-[1fr_auto] md:py-20 lg:min-h-[680px]">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2 className="mt-8 max-w-4xl text-balance text-[clamp(2.8rem,6.6vw,6.5rem)] font-[430] leading-[.92] tracking-[-.065em]">
              Let&apos;s build what your future depends on.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/48 sm:text-lg">Tell us where you&apos;re headed. We&apos;ll bring the product, intelligence, and engineering perspective to help you get there.</p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <MagneticLink href="mailto:team@vajrixai.in" className="min-h-14 px-8 text-base">team@vajrixai.in</MagneticLink>
            <a href="mailto:team@vajrixai.in?subject=Project%20inquiry" className="group flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white">
              Share a project brief <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
