import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contacto — Libris",
  description:
    "Contacta al equipo de Libris. Ventas, soporte tecnico o cualquier duda sobre facturacion e inventario. Respondemos en menos de 24 horas.",
}

export default function ContactoPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Section variant="gradient" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark>CONTACTO</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Hablemos
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Tienes dudas, necesitas una demo o quieres saber si Libris es para
            tu negocio? Escribenos y te respondemos en menos de 24 horas.
          </p>
        </Reveal>
      </Section>

      {/* Client-side contact form with validation */}
      <ContactForm />

      <FinalCTA />
      <Footer />
    </main>
  )
}
