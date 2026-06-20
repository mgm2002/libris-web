"use client"

import { FileText, Package, BarChart3, Sparkles } from "lucide-react"
import { Section } from "@/components/primitives/section"
import { Reveal, RevealStagger, RevealChild } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: FileText,
    title: "Facturación CFDI 4.0",
    description:
      "Crea, timbra y envía facturas en segundos. Ingresos, egresos, traslados, complemento de pago y carta porte. Siempre al día con el SAT.",
    highlight: false,
  },
  {
    icon: Package,
    title: "Inventario en tiempo real",
    description:
      "Controla productos, almacenes y existencias. Te avisa cuando algo está por agotarse, antes de que tu cliente lo note.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Reportes y contabilidad",
    description:
      "Balanza de comprobación, catálogo de cuentas SAT y tus números importantes en un dashboard que de verdad se entiende.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Asistente inteligente",
    description:
      "Pre-llena declaraciones, detecta inconsistencias fiscales y te sugiere el siguiente paso. La IA que sí ayuda, no la que estorba.",
    highlight: true,
  },
] as const

export function Features() {
  return (
    <Section variant="base" id="features">
      {/* Header */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>TODO LO QUE NECESITAS</Eyebrow>
        <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-text-primary sm:text-[34px] lg:text-[40px] xl:text-[48px]">
          Una sola herramienta para facturar, vender y controlar tu negocio
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Deja de saltar entre Excel, el portal del SAT y tres apps distintas.
        </p>
      </Reveal>

      {/* Cards grid */}
      <RevealStagger
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.08}
      >
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <RevealChild key={feature.title}>
              <div
                className={cn(
                  "group relative flex flex-col rounded-2xl border border-border-subtle p-6 transition-all duration-200",
                  "hover:border-brand-accent/40 hover:shadow-md",
                  feature.highlight ? "bg-bg-subtle" : "bg-white"
                )}
              >
                {/* Icon container */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-subtle">
                  <Icon className="h-5 w-5 text-brand-accent transition-transform duration-200 group-hover:-translate-y-0.5" />
                </div>

                {/* Text */}
                <h3 className="text-base font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </RevealChild>
          )
        })}
      </RevealStagger>
    </Section>
  )
}
