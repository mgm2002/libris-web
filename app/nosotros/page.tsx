import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { GradientText } from "@/components/primitives/gradient-text"
import {
  Flag,
  Sparkles,
  ShieldCheck,
  HeadphonesIcon,
  Check,
  X,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Nosotros — Libris",
  description:
    "Libris nacio para que las PyMEs mexicanas dejen de sufrir con su software fiscal. Hecho en Mexico, con soporte humano y precios justos.",
}

/* ------------------------------------------------------------------ */
/* Values                                                              */
/* ------------------------------------------------------------------ */

const VALUES = [
  {
    icon: Flag,
    title: "Hecho en Mexico",
    description:
      "Disenado desde cero para el marco fiscal mexicano: CFDI 4.0, complementos de pago, carta porte, regimenes del SAT. No es una traduccion de software extranjero.",
  },
  {
    icon: Sparkles,
    title: "Simplicidad",
    description:
      "Cada pantalla esta pensada para que la entiendas sin manual. Si necesitas un tutorial para facturar, algo esta mal. Nosotros simplificamos, tu te concentras en vender.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento fiscal",
    description:
      "Nos adelantamos a los cambios del SAT para que tu no te preocupes. Actualizamos catalogos, validaciones y formatos antes de cada fecha limite.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte humano",
    description:
      "Nada de bots que dan vueltas. Cuando escribes a soporte, te contesta una persona que entiende de facturacion y de tu negocio. En espanol, sin guiones roboticos.",
  },
]

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

interface ComparisonRow {
  feature: string
  libris: boolean | string
  others: boolean | string
}

const COMPARISON: ComparisonRow[] = [
  { feature: "Disenado para el SAT desde cero", libris: true, others: false },
  { feature: "UX moderna y facil de usar", libris: true, others: false },
  { feature: "Precios accesibles para PyMEs", libris: true, others: false },
  { feature: "Soporte en espanol, personas reales", libris: true, others: false },
  { feature: "App de escritorio + nube", libris: true, others: false },
  { feature: "Funciona sin internet", libris: true, others: false },
  { feature: "Migracion gratuita", libris: true, others: false },
  { feature: "Sin contratos forzosos", libris: true, others: false },
]

function CompCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-[#B12166]" />
  if (value === false) return <X className="mx-auto h-5 w-5 text-text-muted" />
  return <span className="text-text-secondary">{value}</span>
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function NosotrosPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Section variant="gradient" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark>NOSOTROS</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Hecho en Mexico, para Mexico.
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Libris nacio con una mision simple: que facturar y controlar tu
            inventario sea tan facil como deberia ser.
          </p>
        </Reveal>
      </Section>

      {/* Story */}
      <Section variant="base">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>NUESTRA HISTORIA</Eyebrow>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
              Nacimos para resolver un problema{" "}
              <GradientText>que conocemos de primera mano</GradientText>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Durante anos vimos como miles de PyMEs mexicanas sufrian con
                software fiscal anticuado, confuso y caro. Sistemas que parecian
                disenados para contadores, no para duenos de negocio. Interfaces
                de los anos 2000. Soporte que tardaba dias. Precios que no
                tenian sentido para un negocio que apenas empieza.
              </p>
              <p>
                Libris nacio para cambiar eso. Construimos una plataforma moderna,
                intuitiva y accesible, pensada desde cero para el regimen fiscal
                mexicano. No es una traduccion de un software extranjero ni un
                sistema contable disfrazado de facturador.
              </p>
              <p>
                Es una herramienta hecha por mexicanos que entienden lo que
                significa emitir un CFDI a las 11 de la noche porque tu cliente
                lo necesita para manana. Y que saben que tu negocio merece algo
                mejor que un PDF feo y un XML que no valida.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section variant="subtle">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>LO QUE NOS MUEVE</Eyebrow>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
            Nuestros valores
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border-subtle bg-white p-6 h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3F1C66] to-[#B12166]">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Libris comparison */}
      <Section variant="base">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>POR QUE LIBRIS</Eyebrow>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
            Lo que nos hace <GradientText>diferentes</GradientText>
          </h2>
          <p className="mt-3 text-text-secondary">
            No somos los unicos que hacen software fiscal, pero si hacemos las
            cosas distinto.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-border-subtle">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-subtle">
                  <th className="py-4 px-6 text-left font-semibold text-text-primary">
                    Caracteristica
                  </th>
                  <th className="py-4 px-6 text-center font-bold text-[#B12166]">
                    Libris
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-text-muted">
                    Otros
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-border-subtle",
                      i % 2 === 0 && "bg-white",
                      i % 2 !== 0 && "bg-bg-subtle/50"
                    )}
                  >
                    <td className="py-3 px-6 text-text-secondary">
                      {row.feature}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <CompCell value={row.libris} />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <CompCell value={row.others} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
