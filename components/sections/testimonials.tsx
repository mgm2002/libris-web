"use client"

import { Section } from "@/components/primitives/section"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { RevealStagger, RevealChild, Reveal } from "@/components/primitives/reveal"

/* ------------------------------------------------------------------ */
/*  Data (placeholder)                                                 */
/* ------------------------------------------------------------------ */

const testimonials = [
  {
    quote:
      "Pasé de tardar toda una tarde facturando a hacerlo en lo que me tomo un café. No exagero.",
    name: "Mariana R.",
    role: "Dueña de boutique",
    city: "Ciudad de México",
    initials: "MR",
  },
  {
    quote:
      "Migrar me daba pánico por los años de información. Lo hicieron por mí en un día y sin perder nada.",
    name: "Luis A.",
    role: "Restaurantero",
    city: "Monterrey",
    initials: "LA",
  },
  {
    quote:
      "Por fin un sistema que mi contadora y yo entendemos los dos. Eso ya es ganancia.",
    name: "Karla M.",
    role: "Despacho contable",
    city: "Guadalajara",
    initials: "KM",
  },
] as const

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Testimonials() {
  return (
    <Section variant="base">
      <div className="text-center">
        <Reveal>
          <Eyebrow>LO QUE DICEN</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Negocios reales, menos dolor fiscal
          </h2>
        </Reveal>
      </div>

      <RevealStagger
        className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.12}
      >
        {testimonials.map((t) => (
          <RevealChild key={t.initials}>
            <div className="card-lift relative rounded-2xl border border-border-subtle bg-white p-8">
              {/* Decorative quote mark */}
              <span
                className="absolute -top-1 left-6 text-[80px] font-serif leading-none text-[#B12166]/10 select-none"
                aria-hidden
              >
                &ldquo;
              </span>

              <p className="relative mt-6 text-base leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Separator */}
              <div className="my-6 h-px w-full bg-border-subtle" />

              {/* Attribution */}
              <div className="flex items-center gap-4">
                {/* Initials avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3F1C66] text-sm font-semibold text-white">
                  {t.initials}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-sm text-text-muted">
                    {t.role} &middot; {t.city}
                  </p>
                </div>
              </div>
            </div>
          </RevealChild>
        ))}
      </RevealStagger>
    </Section>
  )
}
