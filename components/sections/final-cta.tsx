"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/primitives/reveal"

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FinalCTA() {
  return (
    <section className="animated-gradient relative overflow-hidden py-24 sm:py-32">
      {/* Blur blobs for texture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-16 h-[350px] w-[350px] rounded-full bg-white/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-[#3F1C66]/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Deja de pelearte con tu software contable
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Empieza gratis hoy. Tu primera factura puede estar timbrada en los
            pr&oacute;ximos diez minutos.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="h-auto rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#3F1C66] shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Probar 15 d&iacute;as gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-auto rounded-xl border-white/30 bg-transparent px-7 py-3.5 text-base font-medium text-white hover:border-white/60 hover:bg-white/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar app de escritorio
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-6 text-sm text-white/50">
            Sin tarjeta &middot; Sin contratos &middot; Cancela cuando quieras
          </p>
        </Reveal>
      </div>
    </section>
  )
}
