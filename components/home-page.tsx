import { AmbientLayer } from "@/components/ambient-layer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { WhyVajrix } from "@/components/sections/why-vajrix";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vajrix AI",
  url: "https://vajrix.ai",
  email: "team@vajrixai.in",
  description: "Enterprise artificial intelligence, intelligent automation, software engineering, and digital transformation company.",
};

export function HomePage() {
  return (
    <SmoothScroll>
      <div className="site-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <AmbientLayer />
        <SiteHeader />
        <main>
          <Hero />
          <div className="content-surface relative z-[2]">
            <About />
            <Expertise />
            <Industries />
            <Capabilities />
            <TechnologyStack />
            <Process />
            <WhyVajrix />
            <Contact />
          </div>
        </main>
        <div className="content-surface relative z-[2]">
          <SiteFooter />
        </div>
      </div>
    </SmoothScroll>
  );
}
