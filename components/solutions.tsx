"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "comercio",
    label: "Comercio",
    title: "Para tiendas y comercio al menudeo",
    description:
      "Vende, factura y manten tu inventario sincronizado en cada punto de venta. Cuando se agota un producto en una sucursal, lo sabes antes que tu cliente.",
    features: [
      "POS rapido en cualquier dispositivo",
      "Codigos de barras y SKU",
      "Multi-sucursal con stock unificado",
      "Conversion automatica de ticket a factura",
    ],
    testimonial: {
      name: "Maria",
      business: "Cafe La Esquina",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    },
  },
  {
    id: "servicios",
    label: "Servicios",
    title: "Para profesionales y consultores",
    description:
      "Factura tus honorarios en segundos, lleva control de proyectos y cobra mas rapido con recordatorios automaticos. Sin complicarte con el SAT.",
    features: [
      "Facturas recurrentes automatizadas",
      "Control de proyectos y clientes",
      "Recordatorios de cobranza",
      "Reportes de ingresos por cliente",
    ],
    testimonial: {
      name: "Carlos",
      business: "Consultoria Ramirez",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
  },
  {
    id: "restaurantes",
    label: "Restaurantes",
    title: "Para cafes, bares y cocinas",
    description:
      "Gestiona comandas, controla ingredientes y genera facturas desde la caja. Mermas, recetas y costos — todo en un solo lugar.",
    features: [
      "Control de inventario por receta",
      "Gestion de mermas y desperdicios",
      "Costos por platillo en tiempo real",
      "Integracion con terminales de cobro",
    ],
    testimonial: {
      name: "Miguel",
      business: "Taqueria El Patron",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
  },
  {
    id: "despachos",
    label: "Despachos contables",
    title: "Para despachos y contadores",
    description:
      "Administra la facturacion de todos tus clientes desde una sola cuenta. Permisos granulares, reportes consolidados y menos correos pidiendo XMLs.",
    features: [
      "Multi-RFC con un solo login",
      "Permisos por colaborador y cliente",
      "Descarga masiva de XMLs",
      "Reportes consolidados mensuales",
    ],
    testimonial: {
      name: "Patricia",
      business: "Despacho Salazar",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    },
  },
]

export function Solutions() {
  return (
    <section className="py-20 sm:py-28 bg-bg-subtle relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight heading-underline heading-underline-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Pensado para como trabaja tu negocio
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="comercio" className="w-full">
            <TabsList className="flex w-full max-w-lg mx-auto h-auto p-1 bg-transparent rounded-xl mb-12 gap-1">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="flex-1 py-2.5 px-3 text-sm font-medium rounded-lg data-[state=active]:bg-brand-primary data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-secondary data-[state=inactive]:hover:bg-white/50 transition-all"
                >
                  {solution.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution) => (
              <TabsContent
                key={solution.id}
                value={solution.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Content - 5/12 */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                          <span className="text-text-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Embedded testimonial */}
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-subtle">
                      <img 
                        src={solution.testimonial.image} 
                        alt={solution.testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          {solution.testimonial.name}, <span className="text-text-muted font-normal">{solution.testimonial.business}</span>
                        </p>
                        <p className="text-xs text-brand-accent">Factura con Libris</p>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="mt-6 rounded-xl px-5 py-2.5 text-sm font-medium border-border-default text-text-primary hover:bg-white"
                    >
                      Ver caso de uso
                    </Button>
                  </div>

                  {/* Mockup - 7/12 */}
                  <div className="lg:col-span-7 relative">
                    {/* Gradient halo behind mockup */}
                    <div className="absolute inset-0 -m-8">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[80px]" />
                      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-brand-accent/10 rounded-full blur-[60px]" />
                    </div>
                    <SolutionMockup solution={solution.id} />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function SolutionMockup({ solution }: { solution: string }) {
  const mockupData: Record<string, { title: string; items: string[] }> = {
    comercio: {
      title: "Punto de Venta",
      items: ["Cafe Americano x2", "Croissant", "Jugo Natural"],
    },
    servicios: {
      title: "Facturacion Recurrente",
      items: ["Consultoria Mensual", "Asesoria Fiscal", "Auditoria Q1"],
    },
    restaurantes: {
      title: "Control de Cocina",
      items: ["Ensalada Cesar", "Pasta Carbonara", "Tiramisu"],
    },
    despachos: {
      title: "Panel Multi-Cliente",
      items: ["Cafe La Esquina", "Ferreteria Lopez", "Boutique Maria"],
    },
  }

  const data = mockupData[solution]

  return (
    <div className="bg-white rounded-2xl border border-border-subtle shadow-lg overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-subtle border-b border-border-subtle">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-text-muted ml-2">{data.title}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {["Ventas", "Facturas", "Productos"].map((label, i) => (
            <div key={label} className="bg-bg-subtle rounded-xl p-3 text-center">
              <p className="text-xs text-text-muted">{label}</p>
              <p className="text-lg font-bold text-text-primary mt-1">
                {i === 0 ? "$24.5K" : i === 1 ? "156" : "89"}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {data.items.map((item, i) => (
            <div
              key={item}
              className="flex items-center justify-between p-3 bg-bg-subtle rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background:
                      i === 0
                        ? "var(--brand-primary)"
                        : i === 1
                        ? "var(--brand-accent)"
                        : "var(--success)",
                  }}
                >
                  {item.charAt(0)}
                </div>
                <span className="text-sm text-text-primary">{item}</span>
              </div>
              <span className="text-xs text-text-muted">
                ${(Math.random() * 500 + 100).toFixed(0)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
