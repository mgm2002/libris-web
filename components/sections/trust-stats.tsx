"use client"

import { Section } from "@/components/primitives/section"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { GradientText } from "@/components/primitives/gradient-text"
import { RevealStagger, RevealChild, Reveal } from "@/components/primitives/reveal"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "100%", label: "Compatible con CFDI 4.0" },
  { value: "<2 seg", label: "Tiempo promedio de timbrado" },
  { value: "24/7", label: "Soporte humano (no bots con menús eternos)" },
  { value: "$0", label: "Costo de migración desde otro sistema" },
] as const

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function TrustStats() {
  return (
    <Section variant="dark" className="dot-pattern-on-dark">
      {/* Magenta blob */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-[#B12166]/15 blur-[160px]"
        aria-hidden
      />

      <div className="relative text-center">
        <Reveal>
          <Eyebrow onDark>CONFIANZA QUE SE MIDE</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text-on-dark sm:text-4xl lg:text-5xl">
            Hecho en M&eacute;xico, optimizado para el SAT
          </h2>
        </Reveal>

        {/* Stats grid */}
        <RevealStagger
          className="mt-16 grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4 lg:gap-x-0"
          staggerDelay={0.1}
        >
          {stats.map((stat, i) => (
            <RevealChild
              key={stat.value}
              className="relative flex flex-col items-center"
            >
              {/* Vertical separator on desktop (not before first) */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 hidden h-20 w-px border-l border-border-on-dark lg:block"
                  aria-hidden
                />
              )}

              {/* Glow wrapper -- shadow sits behind the gradient text */}
              <span
                className="relative"
                style={{
                  filter:
                    "drop-shadow(0 0 30px rgba(177,33,102,0.45)) drop-shadow(0 0 60px rgba(63,28,102,0.25))",
                }}
              >
                <GradientText
                  as="span"
                  className="text-[44px] font-extrabold leading-none sm:text-[56px] lg:text-[72px]"
                >
                  {stat.value}
                </GradientText>
              </span>

              <span className="mt-3 max-w-[200px] text-sm leading-snug text-text-on-dark-muted sm:text-base">
                {stat.label}
              </span>
            </RevealChild>
          ))}
        </RevealStagger>
      </div>
    </Section>
  )
}
