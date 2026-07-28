"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { BrandMark } from "@/components/ui/brand";

const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Industries", "#industries"],
  ["Process", "#process"],
] as const;

function Mark() {
  return (
    <a href="#top" aria-label="Vajrix AI home" className="group flex items-center">
      <BrandMark className="w-10 transition-transform duration-500 group-hover:scale-105" priority />
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 90], ["rgba(5,6,10,.38)", "rgba(5,6,10,.86)"]);
  const border = useTransform(scrollY, [0, 90], ["rgba(255,255,255,.1)", "rgba(255,255,255,.14)"]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ backgroundColor: background, borderColor: border }}
        className="site-grid pointer-events-auto mt-3 flex h-[66px] items-center justify-between rounded-[23px] border px-4 shadow-[0_18px_70px_rgba(0,0,0,.28)] backdrop-blur-2xl sm:px-5"
      >
        <Mark />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`rounded-full px-3 py-2 text-[14px] font-medium transition-all hover:bg-white/[.05] hover:text-white ${href === "#top" ? "bg-white/[.055] text-white/80" : "text-white/48"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <MagneticLink href="#contact" variant="outline" className="min-h-10 px-5 text-[13px]">
            Start a project
          </MagneticLink>
        </div>
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="site-grid pointer-events-auto mt-2 overflow-hidden rounded-[22px] border border-white/10 bg-[#090a0c]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col px-5 py-5">
              {links.map(([label, href], index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                  className="border-b border-white/[.06] py-4 text-lg text-white/75 last:border-none"
                >
                  {label}
                </motion.a>
              ))}
              <MagneticLink href="#contact" className="mt-5">Start a project</MagneticLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
