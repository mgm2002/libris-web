import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { GradientText } from "@/components/primitives/gradient-text"
import { InvoiceMock } from "@/components/mockups/invoice-mock"
import { InventoryMock } from "@/components/mockups/inventory-mock"
import { PosMock } from "@/components/mockups/pos-mock"
import { DashboardMock } from "@/components/mockups/dashboard-mock"
import {
  FileText,
  Package,
  Monitor,
  BarChart3,
  Check,
  Cloud,
  HardDrive,
  RefreshCw,
} from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Producto — Libris",
  description:
    "Conoce todas las funciones de Libris: facturacion CFDI 4.0, inventario en tiempo real, punto de venta y reportes. Escritorio y nube sincronizados.",
}

/* ------------------------------------------------------------------ */
/* Product section data                                                */
/* ------------------------------------------------------------------ */

interface ProductSection {
  id: string
  eyebrow: string
  title: string
  description: string
  features: string[]
  icon: React.ElementType
  mockup: React.ReactNode
  variant: "base" | "subtle"
  reversed: boolean
}

const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: "facturacion",
    eyebrow: "FACTURACION",
    title: "Facturacion CFDI 4.0 sin complicaciones",
    description:
      "Timbra facturas, notas de credito, complementos de pago y cartas porte en segundos. Libris valida los datos del receptor contra el SAT antes de timbrar para evitar rechazos. Puedes personalizar plantillas con tu logotipo y enviar el XML y PDF por correo o WhatsApp con un clic.",
    features: [
      "Timbrado CFDI 4.0 en segundos",
      "Validacion automatica de datos del receptor",
      "Complemento de pago y carta porte",
      "Plantillas con tu marca",
      "Envio por correo y WhatsApp",
      "Descarga masiva de XML",
    ],
    icon: FileText,
    mockup: <InvoiceMock />,
    variant: "base",
    reversed: false,
  },
  {
    id: "inventario",
    eyebrow: "INVENTARIO",
    title: "Control de inventario en tiempo real",
    description:
      "Registra entradas, salidas y traspasos entre almacenes. Escanea codigos de barras desde tu celular o lector USB. Libris actualiza existencias automaticamente cuando facturas o vendes en el punto de venta, y te alerta cuando un producto esta por agotarse.",
    features: [
      "Multi-almacen con traspasos",
      "Codigos de barras y lector USB",
      "Actualizacion automatica al facturar",
      "Alertas de stock minimo",
      "Kardex SAT integrado",
      "Lotes, series y caducidades",
    ],
    icon: Package,
    mockup: <InventoryMock />,
    variant: "subtle",
    reversed: true,
  },
  {
    id: "pos",
    eyebrow: "PUNTO DE VENTA",
    title: "Punto de venta rapido y sencillo",
    description:
      "Cobra en mostrador o en ruta con una interfaz disenada para velocidad. Acepta efectivo, tarjeta y transferencia. El corte de caja se genera solo al final del turno y las ventas se reflejan al instante en tu inventario y en tus reportes.",
    features: [
      "Interfaz rapida de cobro",
      "Efectivo, tarjeta y transferencia",
      "Corte de caja automatico",
      "Multi-caja y multi-sucursal",
      "Sincronizacion con inventario",
      "Funciona sin internet (modo offline)",
    ],
    icon: Monitor,
    mockup: <PosMock />,
    variant: "base",
    reversed: false,
  },
  {
    id: "reportes",
    eyebrow: "REPORTES",
    title: "Reportes que si entiendes",
    description:
      "Dashboards con las metricas que importan: ventas del dia, productos mas vendidos, cuentas por cobrar y tendencias mensuales. Exporta a Excel o PDF y comparte con tu contador en un clic. Sin graficas confusas ni jerga contable innecesaria.",
    features: [
      "Dashboard de ventas en tiempo real",
      "Productos mas vendidos",
      "Cuentas por cobrar y por pagar",
      "Exportacion a Excel y PDF",
      "Reportes fiscales para tu contador",
      "Tendencias y comparativas mensuales",
    ],
    icon: BarChart3,
    mockup: <DashboardMock />,
    variant: "subtle",
    reversed: true,
  },
]

/* ------------------------------------------------------------------ */
/* Desktop vs Cloud                                                    */
/* ------------------------------------------------------------------ */

const SYNC_FEATURES = [
  {
    icon: HardDrive,
    title: "App de escritorio",
    description:
      "Disponible para Windows, macOS y Linux. Funciona sin internet y sincroniza cuando te reconectas.",
    points: [
      "Funciona offline",
      "Rendimiento nativo",
      "Instalacion en 2 minutos",
    ],
  },
  {
    icon: Cloud,
    title: "App en la nube",
    description:
      "Accede desde cualquier navegador, en cualquier dispositivo. Siempre la version mas reciente, sin actualizaciones manuales.",
    points: [
      "Sin instalacion",
      "Acceso desde cualquier lugar",
      "Actualizaciones automaticas",
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ProductoPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Section variant="gradient" className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow onDark>PRODUCTO</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Conoce Libris por dentro.
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Facturacion, inventario, punto de venta y reportes: todo conectado,
            todo en espanol, todo pensado para PyMEs mexicanas.
          </p>
        </Reveal>
      </Section>

      {/* Product sections */}
      {PRODUCT_SECTIONS.map((section) => (
        <Section key={section.id} variant={section.variant} id={section.id}>
          <div
            className={cn(
              "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
              section.reversed && "lg:[&>*:first-child]:order-2"
            )}
          >
            {/* Text */}
            <Reveal>
              <Eyebrow>{section.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {section.description}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B12166]" />
                    {feat}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Mockup */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border-subtle bg-white p-2 shadow-xl">
                {section.mockup}
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      {/* Desktop vs Cloud */}
      <Section variant="dark" id="plataforma">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow onDark>PLATAFORMA</Eyebrow>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
            Escritorio y nube, siempre sincronizados
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Usa Libris donde quieras. Los datos se sincronizan automaticamente
            entre la app de escritorio y la nube.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SYNC_FEATURES.map((item) => (
            <Reveal key={item.title} delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3F1C66] to-[#B12166]">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.description}</p>
                <ul className="mt-5 space-y-2">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2.5 text-sm text-white/80"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#B12166]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sync badge */}
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
            <RefreshCw className="h-4 w-4 text-[#B12166]" />
            <span className="text-sm font-medium text-white">
              Sincronizacion automatica en tiempo real
            </span>
          </div>
        </Reveal>
      </Section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
