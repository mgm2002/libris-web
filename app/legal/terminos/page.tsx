import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"

export const metadata: Metadata = {
  title: "Terminos y Condiciones — Libris",
  description:
    "Terminos y condiciones de uso de Libris. Conoce las reglas que aplican al utilizar nuestra plataforma de facturacion e inventario.",
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    title: "Aceptacion de los terminos",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Descripcion del servicio",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Registro y cuenta",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Uso aceptable",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Propiedad intelectual",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Limitacion de responsabilidad",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Terminacion",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Ley aplicable y jurisdiccion",
    body: "[Pendiente de revision legal]",
  },
  {
    title: "Contacto",
    body: "[Pendiente de revision legal]",
  },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function TerminosPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <Section variant="subtle" className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <Reveal className="mx-auto max-w-3xl">
          <Eyebrow>LEGAL</Eyebrow>
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] text-text-primary sm:text-4xl lg:text-5xl">
            Terminos y Condiciones
          </h1>
          <p className="mt-4 text-text-secondary">
            Ultima actualizacion: junio 2026
          </p>
        </Reveal>
      </Section>

      {/* Content */}
      <Section variant="base" className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.04}>
              <div>
                <h2 className="text-xl font-bold text-text-primary sm:text-2xl">
                  {i + 1}. {section.title}
                </h2>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Divider + note */}
          <Reveal delay={0.3}>
            <hr className="border-border-subtle" />
            <p className="mt-6 text-sm text-text-muted">
              Este documento es un borrador estructural. El contenido definitivo
              sera redactado y revisado por un equipo legal antes de su
              publicacion.
            </p>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
