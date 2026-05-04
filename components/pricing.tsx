"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingData = {
  facturacion: [
    {
      name: "Inicia",
      monthlyPrice: 129,
      description: "Para emprendedores que empiezan a facturar",
      features: [
        "30 facturas/mes",
        "1 usuario",
        "Soporte por chat",
        "Reportes basicos",
      ],
      highlighted: false,
      enterprise: false,
      color: "#3F1C66",
    },
    {
      name: "Crece",
      monthlyPrice: 249,
      description: "Para negocios en crecimiento",
      features: [
        "100 facturas/mes",
        "2 usuarios",
        "Soporte prioritario",
        "Reportes avanzados",
        "Complemento de pago",
      ],
      highlighted: false,
      enterprise: false,
      color: "#B12166",
    },
    {
      name: "Pro",
      monthlyPrice: 449,
      description: "Para operaciones mas complejas",
      features: [
        "300 facturas/mes",
        "4 usuarios",
        "Carta porte incluida",
        "Reportes avanzados",
        "API basica",
        "Soporte telefonico",
      ],
      highlighted: true,
      enterprise: false,
      color: "#B12166",
    },
    {
      name: "Enterprise",
      monthlyPrice: 699,
      description: "Para empresas con alto volumen",
      features: [
        "Facturas ilimitadas",
        "Usuarios ilimitados",
        "API completa",
        "Onboarding personalizado",
        "Gerente de cuenta dedicado",
        "SLA garantizado",
      ],
      highlighted: false,
      enterprise: true,
      color: "#3F1C66",
    },
  ],
  inventario: [
    {
      name: "Basico",
      monthlyPrice: 99,
      description: "Control de inventario esencial",
      features: [
        "100 productos",
        "1 sucursal",
        "Alertas de stock bajo",
        "Reportes basicos",
      ],
      highlighted: false,
      enterprise: false,
      color: "#E07B39",
    },
    {
      name: "Estandar",
      monthlyPrice: 199,
      description: "Para negocios con mas SKUs",
      features: [
        "500 productos",
        "2 sucursales",
        "Codigos de barras",
        "Transferencias entre sucursales",
        "Historial de movimientos",
      ],
      highlighted: false,
      enterprise: false,
      color: "#16A085",
    },
    {
      name: "Avanzado",
      monthlyPrice: 349,
      description: "Control total de tu inventario",
      features: [
        "2,000 productos",
        "5 sucursales",
        "Lotes y caducidades",
        "Costos promedio",
        "Integracion con POS",
        "Soporte prioritario",
      ],
      highlighted: true,
      enterprise: false,
      color: "#16A085",
    },
    {
      name: "Enterprise",
      monthlyPrice: 549,
      description: "Para cadenas y distribuidores",
      features: [
        "Productos ilimitados",
        "Sucursales ilimitadas",
        "Multiples almacenes",
        "API completa",
        "Reportes personalizados",
        "Onboarding dedicado",
      ],
      highlighted: false,
      enterprise: true,
      color: "#E07B39",
    },
  ],
  completo: [
    {
      name: "Starter",
      monthlyPrice: 199,
      description: "Facturacion + Inventario basico",
      features: [
        "50 facturas/mes",
        "200 productos",
        "1 usuario",
        "1 sucursal",
        "Soporte por chat",
      ],
      highlighted: false,
      enterprise: false,
      color: "#3F1C66",
    },
    {
      name: "Business",
      monthlyPrice: 399,
      description: "Todo lo que una PyME necesita",
      features: [
        "150 facturas/mes",
        "1,000 productos",
        "3 usuarios",
        "3 sucursales",
        "Soporte prioritario",
        "Reportes avanzados",
      ],
      highlighted: false,
      enterprise: false,
      color: "#B12166",
    },
    {
      name: "Professional",
      monthlyPrice: 649,
      description: "Para operaciones exigentes",
      features: [
        "500 facturas/mes",
        "5,000 productos",
        "8 usuarios",
        "10 sucursales",
        "Carta porte",
        "API basica",
        "Soporte telefonico",
      ],
      highlighted: true,
      enterprise: false,
      color: "#B12166",
    },
    {
      name: "Enterprise",
      monthlyPrice: 999,
      description: "Sin limites, sin compromisos",
      features: [
        "Facturas ilimitadas",
        "Productos ilimitados",
        "Usuarios ilimitados",
        "Sucursales ilimitadas",
        "API completa",
        "Onboarding VIP",
        "SLA garantizado",
      ],
      highlighted: false,
      enterprise: true,
      color: "#3F1C66",
    },
  ],
}

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="precios" className="py-20 sm:py-28 bg-gradient-to-b from-bg-subtle to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight heading-underline heading-underline-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Planes que crecen contigo
          </h2>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className={`text-sm font-semibold ${!isAnnual ? 'text-text-primary' : 'text-text-muted'}`}>
            Mensual
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isAnnual ? 'bg-gradient-to-r from-brand-primary to-brand-accent' : 'bg-border-default'
            }`}
          >
            <span 
              className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${isAnnual ? 'text-text-primary' : 'text-text-muted'}`}>
            Anual
          </span>
          {isAnnual && (
            <span className="ml-2 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-brand-orange to-brand-accent rounded-full shadow-lg">
              2 meses gratis
            </span>
          )}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Tabs defaultValue="completo" className="w-full">
            <TabsList className="flex w-full max-w-md mx-auto h-auto p-1.5 bg-white rounded-xl border border-border-subtle shadow-sm mb-12">
              <TabsTrigger
                value="facturacion"
                className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white text-text-primary transition-all"
              >
                Facturacion
              </TabsTrigger>
              <TabsTrigger
                value="inventario"
                className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white text-text-primary transition-all"
              >
                Inventario
              </TabsTrigger>
              <TabsTrigger
                value="completo"
                className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-primary data-[state=active]:to-brand-accent data-[state=active]:text-white text-text-primary transition-all"
              >
                Plan Completo
              </TabsTrigger>
            </TabsList>

            {Object.entries(pricingData).map(([key, plans]) => (
              <TabsContent
                key={key}
                value={key}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {plans.map((plan) => (
                    <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Enterprise Link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 text-sm text-text-secondary"
        >
          Necesitas algo mas grande?{" "}
          <a href="#contacto" className="text-brand-accent hover:underline font-semibold">
            Hablemos
          </a>
        </motion.p>
      </div>
    </section>
  )
}

function PricingCard({
  plan,
  isAnnual,
}: {
  plan: {
    name: string
    monthlyPrice: number
    description: string
    features: string[]
    highlighted: boolean
    enterprise: boolean
    color: string
  }
  isAnnual: boolean
}) {
  const displayPrice = isAnnual 
    ? Math.round(plan.monthlyPrice * 10 / 12) 
    : plan.monthlyPrice

  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col transition-all ${
        plan.enterprise
          ? "bg-gradient-to-br from-brand-dark via-brand-primary/90 to-brand-dark border-0 shadow-2xl"
          : plan.highlighted
          ? "bg-white border-2 shadow-xl scale-[1.02]"
          : "bg-white border border-border-subtle shadow-sm hover:shadow-md"
      }`}
      style={{
        borderColor: plan.highlighted ? plan.color : undefined,
      }}
    >
      {plan.highlighted && (
        <Badge 
          className="absolute -top-3 left-1/2 -translate-x-1/2 border-0 px-4 py-1.5 shadow-lg flex items-center gap-1"
          style={{ background: `linear-gradient(135deg, ${plan.color} 0%, #B12166 100%)` }}
        >
          <Star className="w-3 h-3 fill-white" />
          <span className="text-white font-bold">Recomendado</span>
        </Badge>
      )}

      {/* Decorative accent for enterprise */}
      {plan.enterprise && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-orange to-success rounded-t-2xl" />
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className={`text-lg font-bold ${plan.enterprise ? 'text-white' : 'text-text-primary'}`}>
          {plan.name}
        </h3>
        <div className="mt-3">
          <span 
            className="text-4xl font-extrabold"
            style={{ color: plan.enterprise ? '#fff' : plan.color }}
          >
            ${displayPrice}
          </span>
          <span className={`text-sm ${plan.enterprise ? 'text-white/70' : 'text-text-secondary'}`}>
            /mes + IVA
          </span>
        </div>
        <p className={`mt-2 text-sm ${plan.enterprise ? 'text-white/80' : 'text-text-secondary'}`}>
          {plan.description}
        </p>
      </div>

      {/* Divider */}
      <div className={`h-px mb-6 ${plan.enterprise ? 'bg-white/20' : 'bg-border-subtle'}`} />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ 
                backgroundColor: plan.enterprise ? 'rgba(177, 33, 102, 0.3)' : `${plan.color}15`,
              }}
            >
              <Check 
                className="w-3 h-3" 
                style={{ color: plan.enterprise ? '#fff' : plan.color }}
              />
            </div>
            <span className={plan.enterprise ? 'text-white' : 'text-text-primary'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        className={`w-full rounded-xl py-3 font-bold text-base h-auto ${
          plan.enterprise
            ? "bg-white text-brand-primary hover:bg-white/90 shadow-lg"
            : plan.highlighted
            ? "text-white shadow-lg"
            : "bg-white border-2 text-text-primary hover:bg-bg-subtle"
        }`}
        style={{
          background: plan.highlighted && !plan.enterprise 
            ? `linear-gradient(135deg, ${plan.color} 0%, #B12166 100%)` 
            : undefined,
          borderColor: !plan.highlighted && !plan.enterprise ? plan.color : undefined,
          color: !plan.highlighted && !plan.enterprise ? plan.color : undefined,
        }}
        variant={plan.highlighted ? "default" : "outline"}
      >
        {plan.highlighted ? "Empezar gratis" : "Probar 15 dias gratis"}
      </Button>
    </div>
  )
}
