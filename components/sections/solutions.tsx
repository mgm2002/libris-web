"use client"

import { Check } from "lucide-react"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { PosMock } from "@/components/mockups/pos-mock"
import { InvoiceMock } from "@/components/mockups/invoice-mock"
import { DashboardMock } from "@/components/mockups/dashboard-mock"

const tabs = [
  {
    value: "comercio",
    label: "Comercio",
    heading: "Para tiendas y comercio al menudeo",
    paragraph:
      "Vende, factura y mantén tu inventario sincronizado en cada punto de venta. Cuando se agota un producto en una sucursal, lo sabes antes que tu cliente.",
    bullets: [
      "POS rápido en cualquier dispositivo",
      "Códigos de barras y SKU",
      "Multi-sucursal con stock unificado",
      "Conversión automática de ticket a factura",
    ],
    mockup: "pos",
  },
  {
    value: "servicios",
    label: "Servicios",
    heading: "Para profesionistas y empresas de servicios",
    paragraph:
      "Cotiza, factura y cobra sin fricción. Convierte una cotización en CFDI con un clic y dale seguimiento a lo que te deben sin perseguir a nadie por WhatsApp.",
    bullets: [
      "Cotizaciones que se vuelven factura",
      "Complemento de pago automático",
      "Cuentas por cobrar a la vista",
      "Facturación recurrente",
    ],
    mockup: "invoice",
  },
  {
    value: "restaurantes",
    label: "Restaurantes",
    heading: "Para restaurantes y comida",
    paragraph:
      "Maneja comandas, corte de caja y facturación global del día sin complicarte. Tus insumos bajan del inventario conforme vendes.",
    bullets: [
      "Corte de caja por turno",
      "Facturación global automática",
      "Control de insumos y mermas",
      "Impresora térmica de tickets",
    ],
    mockup: "pos",
  },
  {
    value: "despachos",
    label: "Despachos contables",
    heading: "Para despachos y contadores",
    paragraph:
      "Administra varios RFC desde un solo lugar. Cambia de empresa sin volver a entrar, genera pólizas y exporta todo en el formato que el SAT pide.",
    bullets: [
      "Multi-empresa (multi-RFC)",
      "Pólizas contables XML",
      "Exportación a formato SAT",
      "Accesos por colaborador",
    ],
    mockup: "dashboard",
  },
] as const

function MockupComponent({ type }: { type: "pos" | "invoice" | "dashboard" }) {
  switch (type) {
    case "pos":
      return <PosMock />
    case "invoice":
      return <InvoiceMock />
    case "dashboard":
      return <DashboardMock />
  }
}

export function Solutions() {
  return (
    <Section variant="subtle" id="solutions" className="dot-pattern">
      {/* Header */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>PARA TU GIRO</Eyebrow>
        <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-text-primary sm:text-[34px] lg:text-[40px] xl:text-[48px]">
          Pensado para cómo trabaja tu negocio
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Configúralo en minutos según lo que vendes.
        </p>
      </Reveal>

      {/* Tabs */}
      <Reveal delay={0.15} className="mt-14">
        <Tabs defaultValue="comercio" className="gap-8">
          {/* Tab triggers */}
          <TabsList className="mx-auto flex h-auto w-full max-w-xl flex-nowrap gap-1 overflow-x-auto bg-white/70 p-1.5 backdrop-blur-sm sm:justify-center">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-all data-[state=active]:bg-brand-accent data-[state=active]:text-white data-[state=active]:shadow-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content */}
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                {/* Text side -- 5 cols */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
                    {tab.heading}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {tab.paragraph}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {tab.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-text-primary"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/10">
                          <Check className="h-3 w-3 text-brand-accent" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup side -- 7 cols */}
                <div className="relative lg:col-span-7">
                  {/* Gradient halo blob */}
                  <div
                    className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl opacity-30 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(177,33,102,0.25) 0%, rgba(63,28,102,0.12) 50%, transparent 80%)",
                    }}
                  />
                  <div className="overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-lg">
                    <MockupComponent type={tab.mockup} />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  )
}
