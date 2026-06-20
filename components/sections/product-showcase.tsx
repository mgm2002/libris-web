"use client"

import { Check } from "lucide-react"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { GradientText } from "@/components/primitives/gradient-text"
import { DashboardMock } from "@/components/mockups/dashboard-mock"
import { InvoiceMock } from "@/components/mockups/invoice-mock"
import { InventoryMock } from "@/components/mockups/inventory-mock"
import { cn } from "@/lib/utils"

interface ShowcaseBlock {
  eyebrow: string
  title: string
  paragraph: string
  features: string[]
  mockup: React.ComponentType
  reversed: boolean
}

const blocks: ShowcaseBlock[] = [
  {
    eyebrow: "Dashboard",
    title: "Tus números importantes, sin tener que cazarlos",
    paragraph:
      "Entra y ve de un vistazo cuánto facturaste, qué se está vendiendo y qué necesita tu atención hoy. Nada de menús infinitos.",
    features: [
      "Total facturado y tendencia del mes",
      "CFDIs timbrados en tiempo real",
      "Alertas de stock y vencimientos",
    ],
    mockup: DashboardMock,
    reversed: false,
  },
  {
    eyebrow: "Facturación",
    title: "Crea, timbra y envía un CFDI sin salir de la pantalla",
    paragraph:
      "Selecciona cliente, agrega conceptos y timbra. El XML y el PDF se generan y se envían solos. Promedio: menos de 2 segundos.",
    features: [
      "Catálogos del SAT precargados",
      "Plantillas para lo que facturas seguido",
      "Envío automático por correo",
    ],
    mockup: InvoiceMock,
    reversed: true,
  },
  {
    eyebrow: "Inventario",
    title:
      "Sabe qué se vende, qué se queda, y te avisa antes que tú lo notes",
    paragraph:
      "Cada venta descuenta del inventario en tiempo real. Cuando un producto baja del umbral, te llega la alerta para que no te quedes sin vender.",
    features: [
      "Stock en tiempo real por almacén",
      "Alertas de stock bajo",
      "Kardex y movimientos auditables",
    ],
    mockup: InventoryMock,
    reversed: false,
  },
]

export function ProductShowcase() {
  return (
    <Section variant="base" id="product-showcase">
      {/* Section header */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>ASÍ SE VE POR DENTRO</Eyebrow>
        <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-text-primary sm:text-[34px] lg:text-[40px] xl:text-[48px]">
          Una interfaz que sí se siente del{" "}
          <GradientText as="span">2026</GradientText>
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Diseñada con la idea radical de que el software contable no tiene
          por qué doler.
        </p>
      </Reveal>

      {/* Zig-zag blocks */}
      <div className="mt-20 flex flex-col gap-24 lg:gap-32">
        {blocks.map((block, i) => {
          const Mockup = block.mockup
          return (
            <Reveal key={block.eyebrow} delay={i * 0.1}>
              <div
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  block.reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                {/* Text column */}
                <div className="flex flex-col">
                  <Eyebrow>{block.eyebrow}</Eyebrow>
                  <h3 className="text-[24px] font-bold leading-tight tracking-[-0.01em] text-text-primary sm:text-[28px] lg:text-[32px]">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary lg:text-lg">
                    {block.paragraph}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {block.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B12166]/10">
                          <Check className="h-3 w-3 text-[#B12166]" />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup column */}
                <div className="relative">
                  {/* Gradient glow blob */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#3F1C66]/20 via-[#B12166]/10 to-transparent blur-2xl"
                  />
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <Mockup />
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
