import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/sections/footer"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { DownloadContent } from "./download-content"

export const metadata: Metadata = {
  title: "Descargar — Libris",
  description:
    "Descarga la app de escritorio de Libris para Windows, macOS o Linux. Factura e inventaria incluso sin internet.",
}

export default function DescargarPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Section variant="gradient" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark>DESCARGAR</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Descarga Libris para tu computadora.
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Instala la app de escritorio y trabaja incluso sin internet.
            Disponible para Windows, macOS y Linux.
          </p>
        </Reveal>
      </Section>

      {/* Client-side download content with OS detection */}
      <DownloadContent />

      <Footer />
    </main>
  )
}
