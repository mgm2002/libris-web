"use client"

import { motion } from "framer-motion"

const showcaseItems = [
  {
    eyebrow: "Dashboard ejecutivo",
    title: "Tus numeros importantes, sin tener que cazarlos",
    description:
      "Abre Libris y en 3 segundos sabes cuanto vendiste, cuantos CFDIs timbraste y que productos se estan moviendo. Sin hojas de calculo, sin esperar al contador.",
    features: [
      "KPIs en tiempo real",
      "Graficas de tendencia",
      "Alertas inteligentes",
    ],
    align: "left" as const,
    number: "01",
    accentColor: "#3F1C66",
  },
  {
    eyebrow: "Facturacion en segundos",
    title: "Crea, timbra y envia un CFDI sin salir de la pantalla",
    description:
      "Selecciona cliente, agrega productos, revisa y timbra. Libris se encarga del complemento de pago, de guardar el XML y de enviarlo por correo. Tu solo das clic.",
    features: [
      "Autocompletado inteligente",
      "Validacion contra el SAT",
      "Envio automatico por email",
    ],
    align: "right" as const,
    number: "02",
    accentColor: "#B12166",
  },
  {
    eyebrow: "Inventario inteligente",
    title: "Sabe que se vende, que se queda, y te avisa antes que tu lo notes",
    description:
      "Cada venta actualiza tu stock. Cuando un producto baja del minimo, Libris te manda un aviso. Y si tienes varias sucursales, ves todo desde un solo lugar.",
    features: [
      "Alertas de stock bajo",
      "Historial de movimientos",
      "Multi-sucursal unificado",
    ],
    align: "left" as const,
    number: "03",
    accentColor: "#16A085",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-bg-subtle via-white to-bg-subtle relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight heading-underline heading-underline-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Una interfaz que si se siente del 2026
          </h2>
          <p className="mt-8 text-lg text-text-secondary leading-relaxed">
            Disenada con la idea radical de que el software contable no tiene por que doler.
          </p>
        </motion.div>

        {/* Showcase Items */}
        <div className="space-y-20 sm:space-y-32">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative ${
                item.align === "right" ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Large decorative number */}
              <div 
                className={`absolute top-0 ${item.align === 'left' ? 'left-0' : 'right-0'} text-[180px] sm:text-[220px] font-extrabold leading-none -z-10 select-none`}
                style={{ 
                  letterSpacing: "-0.05em",
                  color: `${item.accentColor}10`,
                }}
              >
                {item.number}
              </div>

              {/* Text Content */}
              <div className={item.align === "right" ? "lg:col-start-2" : ""}>
                <span 
                  className="inline-block text-sm font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${item.accentColor}15`,
                    color: item.accentColor,
                  }}
                >
                  {item.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 text-balance">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-text-primary font-medium"
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${item.accentColor}15` }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.accentColor }}
                        />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot Mockup */}
              <div className={`${item.align === "right" ? "lg:col-start-1" : ""} relative`}>
                {/* Gradient blob behind mockup */}
                <div 
                  className={`absolute ${item.align === 'left' ? '-right-10 -bottom-10' : '-left-10 -bottom-10'} w-[300px] h-[300px] rounded-full blur-[80px]`}
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor}30, #B1216630)`,
                  }}
                />
                <ShowcaseMockup type={index} accentColor={item.accentColor} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShowcaseMockup({ type, accentColor }: { type: number; accentColor: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border-subtle shadow-2xl overflow-hidden relative">
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-subtle border-b border-border-subtle">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 bg-white rounded-md text-xs text-text-muted border border-border-subtle">
            app.libris.mx
          </div>
        </div>
      </div>

      {/* Content based on type */}
      <div className="p-6">
        {type === 0 && <DashboardShowcase accentColor={accentColor} />}
        {type === 1 && <InvoicingShowcase accentColor={accentColor} />}
        {type === 2 && <InventoryShowcase accentColor={accentColor} />}
      </div>
    </div>
  )
}

function DashboardShowcase({ accentColor }: { accentColor: string }) {
  const colors = [accentColor, "#B12166", "#16A085", "#E07B39"]
  
  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Ventas del mes", value: "$142,500", trend: "+18%", color: colors[0] },
          { label: "CFDIs timbrados", value: "234", trend: "+12%", color: colors[1] },
          { label: "Margen bruto", value: "34.2%", trend: "+2.1%", color: colors[2] },
        ].map((kpi) => (
          <div 
            key={kpi.label} 
            className="rounded-xl p-3 relative overflow-hidden"
            style={{ backgroundColor: `${kpi.color}08` }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-1"
              style={{ backgroundColor: kpi.color }}
            />
            <p className="text-xs text-text-secondary font-medium">{kpi.label}</p>
            <p 
              className="text-xl font-bold mt-1"
              style={{ color: kpi.color }}
            >
              {kpi.value}
            </p>
            <p className="text-xs text-success font-semibold">{kpi.trend}</p>
          </div>
        ))}
      </div>

      {/* Chart with varied colors */}
      <div className="bg-bg-subtle rounded-xl p-4">
        <div className="flex items-end gap-1.5 h-32">
          {[
            { h: 30, color: colors[0] },
            { h: 45, color: colors[1] },
            { h: 38, color: colors[0] },
            { h: 55, color: colors[2] },
            { h: 48, color: colors[1] },
            { h: 62, color: colors[0] },
            { h: 58, color: colors[2] },
            { h: 72, color: colors[1] },
            { h: 65, color: colors[0] },
            { h: 78, color: colors[2] },
            { h: 82, color: colors[1] },
            { h: 90, color: colors[0] },
          ].map((bar, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{ height: `${bar.h}%`, backgroundColor: bar.color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function InvoicingShowcase({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-4">
      {/* Invoice Form */}
      <div className="grid grid-cols-2 gap-3">
        <div 
          className="rounded-xl p-3 border-l-4"
          style={{ backgroundColor: `${accentColor}08`, borderColor: accentColor }}
        >
          <p className="text-xs text-text-secondary mb-1">Cliente</p>
          <p className="text-sm font-bold text-text-primary">Cafe La Esquina S.A.</p>
        </div>
        <div className="bg-bg-subtle rounded-xl p-3">
          <p className="text-xs text-text-secondary mb-1">RFC</p>
          <p className="text-sm font-semibold text-text-primary">CLE240115ABC</p>
        </div>
      </div>

      {/* Items */}
      <div className="bg-bg-subtle rounded-xl p-3 space-y-2">
        {[
          { name: "Cafe molido 1kg", qty: 5, price: "$180.00", color: "#3F1C66" },
          { name: "Taza logo", qty: 10, price: "$85.00", color: "#B12166" },
        ].map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-text-primary font-medium">{item.name}</span>
            </div>
            <div className="flex gap-4 text-text-secondary">
              <span>x{item.qty}</span>
              <span className="font-bold text-text-primary">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Total & CTA */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <p className="text-xs text-text-secondary">Total</p>
          <p 
            className="text-3xl font-extrabold"
            style={{ color: accentColor }}
          >
            $1,750.00
          </p>
        </div>
        <div 
          className="rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg"
          style={{ background: `linear-gradient(135deg, ${accentColor}, #B12166)` }}
        >
          Timbrar CFDI
        </div>
      </div>
    </div>
  )
}

function InventoryShowcase({ accentColor }: { accentColor: string }) {
  return (
    <div className="space-y-4">
      {/* Alert */}
      <div 
        className="flex items-center gap-3 rounded-xl p-3 border-l-4"
        style={{ backgroundColor: "#E07B3915", borderColor: "#E07B39" }}
      >
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#E07B3920" }}
        >
          <span className="text-[#E07B39] text-lg font-bold">!</span>
        </div>
        <div>
          <p className="text-sm font-bold text-text-primary">Stock bajo</p>
          <p className="text-xs text-text-secondary">3 productos necesitan reabasto</p>
        </div>
      </div>

      {/* Products */}
      <div className="space-y-2">
        {[
          { name: "Cafe molido 250g", stock: 8, min: 10, status: "warning", color: "#E07B39" },
          { name: "Taza logo blanca", stock: 45, min: 20, status: "ok", color: accentColor },
          { name: "Croissant congelado", stock: 3, min: 15, status: "critical", color: "#B12166" },
        ].map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between bg-bg-subtle rounded-xl p-3"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-10 rounded-full"
                style={{ backgroundColor: product.color }}
              />
              <div>
                <p className="text-sm font-semibold text-text-primary">{product.name}</p>
                <p className="text-xs text-text-secondary">Min: {product.min}</p>
              </div>
            </div>
            <p
              className="text-2xl font-bold"
              style={{ color: product.color }}
            >
              {product.stock}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
