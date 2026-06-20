"use client"

import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"

/* ------------------------------------------------------------------ */
/*  Placeholder logos                                                  */
/*  These are NOT real companies -- replace with actual client logos.   */
/* ------------------------------------------------------------------ */
const PLACEHOLDER_LOGOS = [
  { name: "Logo 1", color: "#3F1C66" },
  { name: "Logo 2", color: "#B12166" },
  { name: "Logo 3", color: "#E07B39" },
  { name: "Logo 4", color: "#16A085" },
  { name: "Logo 5", color: "#3F1C66" },
  { name: "Logo 6", color: "#B12166" },
  { name: "Logo 7", color: "#E07B39" },
  { name: "Logo 8", color: "#16A085" },
]

function LogoCard({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border-subtle bg-white px-8 shadow-sm"
    >
      {/* Placeholder dot + wordmark */}
      <span
        className="inline-block h-5 w-5 rounded-md opacity-40"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-semibold text-text-muted">{name}</span>
    </div>
  )
}

export function SocialProof() {
  return (
    <Section variant="subtle" className="py-14 sm:py-16">
      {/* Dot pattern overlay */}
      <div
        className="dot-pattern pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />

      {/* Heading */}
      <Reveal>
        <p className="mb-8 text-center text-sm text-text-muted sm:text-base">
          Negocios de todo México ya facturan con Libris
        </p>
      </Reveal>

      {/* Marquee */}
      <Reveal delay={0.15}>
        <div className="relative -mx-6 overflow-hidden md:-mx-8">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg-subtle to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg-subtle to-transparent" />

          <div className="flex">
            {/* First copy */}
            <div className="flex animate-marquee items-center gap-8 pr-8">
              {PLACEHOLDER_LOGOS.map((logo, i) => (
                <LogoCard key={i} name={logo.name} color={logo.color} />
              ))}
            </div>
            {/* Duplicated copy for seamless loop */}
            <div
              className="flex animate-marquee items-center gap-8 pr-8"
              aria-hidden="true"
            >
              {PLACEHOLDER_LOGOS.map((logo, i) => (
                <LogoCard
                  key={`dup-${i}`}
                  name={logo.name}
                  color={logo.color}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
