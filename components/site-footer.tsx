import { ArrowUp } from "lucide-react";
import { BrandLockup } from "@/components/ui/brand";

const footerLinks = [
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Industries", "#industries"],
  ["Capabilities", "#capabilities"],
  ["Technology", "#technology"],
  ["Process", "#process"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-grid py-12 sm:py-16">
      <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1fr_auto]">
        <div>
          <a href="#top" aria-label="Vajrix AI home" className="inline-flex items-center gap-3">
            <BrandLockup />
          </a>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3">
          {footerLinks.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-white/45 transition-colors hover:text-white">{label}</a>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-5 pt-7 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Vajrix AI. Intelligence, engineered.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:team@vajrixai.in" className="transition-colors hover:text-white">team@vajrixai.in</a>
          <a href="#top" aria-label="Back to top" className="flex items-center gap-2 transition-colors hover:text-white">Back to top <ArrowUp className="h-3 w-3" /></a>
        </div>
      </div>
    </footer>
  );
}
