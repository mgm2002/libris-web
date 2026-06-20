import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { GradientText } from "@/components/primitives/gradient-text"
import { Fragment } from "react"
import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Precios — Libris",
  description:
    "Precios claros para facturacion electronica, inventario y punto de venta. Sin contratos, sin letras chiquitas. Compara planes y elige el que necesitas.",
}

/* ------------------------------------------------------------------ */
/* Comparison table data for the "Plan Completo" tab                  */
/* ------------------------------------------------------------------ */

const PLAN_NAMES = ["Inicia", "Crece", "Pro", "Enterprise"] as const

type CellValue = string | boolean

interface ComparisonCategory {
  category: string
  rows: { feature: string; values: [CellValue, CellValue, CellValue, CellValue] }[]
}

const FULL_COMPARISON: ComparisonCategory[] = [
  {
    category: "Facturacion",
    rows: [
      { feature: "Facturas/mes", values: ["50", "150", "500", "Ilimitadas"] },
      { feature: "Complemento de pago", values: [true, true, true, true] },
      { feature: "Carta porte", values: [false, false, true, true] },
      { feature: "Plantillas personalizadas", values: [false, true, true, true] },
      { feature: "Envio por WhatsApp", values: [false, false, true, true] },
      { feature: "Portal del cliente", values: [false, false, true, true] },
    ],
  },
  {
    category: "Inventario",
    rows: [
      { feature: "Almacenes", values: ["1", "3", "Ilimitados", "Ilimitados"] },
      { feature: "Productos", values: ["200", "2,000", "Ilimitados", "Ilimitados"] },
      { feature: "Codigos de barras", values: [false, true, true, true] },
      { feature: "Kardex SAT", values: [false, false, true, true] },
      { feature: "Lotes y series", values: [false, false, true, true] },
    ],
  },
  {
    category: "Punto de venta",
    rows: [
      { feature: "POS", values: ["Basico", "Basico", "Multicaja", "Multicaja"] },
      { feature: "Corte de caja", values: [false, true, true, true] },
    ],
  },
  {
    category: "Plataforma",
    rows: [
      { feature: "Usuarios", values: ["1", "2", "5", "Ilimitados"] },
      { feature: "Multi-empresa / RFC", values: [false, false, false, true] },
      { feature: "API", values: [false, false, false, true] },
      { feature: "App de escritorio", values: [true, true, true, true] },
    ],
  },
  {
    category: "Soporte",
    rows: [
      { feature: "Canal", values: ["Chat", "Chat", "Prioritario", "Dedicado"] },
      { feature: "Onboarding personalizado", values: [false, false, false, true] },
    ],
  },
]

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-[#B12166]" />
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-text-muted" />
  }
  return <span>{value}</span>
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PreciosPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Section variant="gradient" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark>PRECIOS</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Precios claros, sin letras chiquitas
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Elige el plan que necesitas hoy y cambia cuando quieras.
            Sin contratos forzosos, sin cargos ocultos y sin sorpresas.
          </p>
        </Reveal>
      </Section>

      {/* Pricing cards (reused component with its own toggle + tabs) */}
      <Pricing />

      {/* Full comparison table */}
      <Section variant="base">
        <Reveal className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Eyebrow>COMPARATIVA</Eyebrow>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
              Compara todos los <GradientText>planes</GradientText>
            </h2>
            <p className="mt-3 text-text-secondary">
              Tabla del Plan Completo (facturacion + inventario + POS).
            </p>
          </div>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b-2 border-[#3F1C66]/20">
                  <th className="pb-4 pr-4 text-left font-semibold text-text-primary w-[220px]">
                    Caracteristica
                  </th>
                  {PLAN_NAMES.map((name, i) => (
                    <th
                      key={name}
                      className={cn(
                        "pb-4 px-4 text-center font-semibold",
                        i === 2 ? "text-[#B12166]" : "text-text-primary"
                      )}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FULL_COMPARISON.map((cat) => (
                  <Fragment key={cat.category}>
                    {/* Category header */}
                    <tr>
                      <td
                        colSpan={5}
                        className="pt-6 pb-2 text-xs font-bold uppercase tracking-widest text-[#3F1C66]"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.rows.map((row, ri) => (
                      <tr
                        key={row.feature}
                        className={cn(
                          "border-b border-border-subtle",
                          ri % 2 === 0 && "bg-bg-subtle/50"
                        )}
                      >
                        <td className="py-3 pr-4 text-text-secondary">
                          {row.feature}
                        </td>
                        {row.values.map((val, vi) => (
                          <td
                            key={vi}
                            className="py-3 px-4 text-center text-text-secondary"
                          >
                            <CellContent value={val} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <FinalCTA />

      <Footer />
    </main>
  )
}
