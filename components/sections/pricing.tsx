"use client"

import { useState } from "react"
import { Check, Star, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/primitives/section"
import { Reveal, RevealStagger, RevealChild } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  PRICING_TABS,
  getAnnualPrice,
  type PricingPlan,
} from "@/lib/pricing-data"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Comparison table data per tab                                       */
/* ------------------------------------------------------------------ */

type ComparisonRow = {
  feature: string
  values: [string, string, string, string] // Inicia, Crece, Pro, Enterprise
}

const COMPARISON_DATA: Record<string, ComparisonRow[]> = {
  facturacion: [
    { feature: "Facturas/mes", values: ["30", "100", "300", "Ilimitadas"] },
    { feature: "Usuarios", values: ["1", "2", "4", "Ilimitados"] },
    { feature: "Carta porte", values: ["—", "—", "✓", "✓"] },
    { feature: "Complemento de pago", values: ["✓", "✓", "✓", "✓"] },
    { feature: "Plantillas", values: ["—", "✓", "✓", "✓"] },
    { feature: "WhatsApp", values: ["—", "—", "—", "✓"] },
    { feature: "Portal del cliente", values: ["—", "—", "—", "✓"] },
    { feature: "Multi-empresa/RFC", values: ["—", "—", "—", "✓"] },
    { feature: "API", values: ["—", "—", "—", "✓"] },
    { feature: "Soporte", values: ["Chat", "Chat", "Prioritario", "Dedicado"] },
    { feature: "Onboarding", values: ["—", "—", "—", "Personalizado"] },
  ],
  inventario: [
    { feature: "Almacenes", values: ["1", "3", "Ilimitados", "Ilimitados"] },
    { feature: "Productos", values: ["200", "2,000", "Ilimitados", "Ilimitados"] },
    { feature: "Usuarios", values: ["1", "2", "4", "Ilimitados"] },
    { feature: "Códigos de barras", values: ["—", "✓", "✓", "✓"] },
    { feature: "Kardex SAT", values: ["—", "—", "✓", "✓"] },
    { feature: "Lotes y series", values: ["—", "—", "✓", "✓"] },
    { feature: "Multi-empresa/RFC", values: ["—", "—", "—", "✓"] },
    { feature: "API", values: ["—", "—", "—", "✓"] },
    { feature: "Soporte", values: ["Chat", "Chat", "Prioritario", "Dedicado"] },
    { feature: "Onboarding", values: ["—", "—", "—", "Personalizado"] },
  ],
  completo: [
    { feature: "Facturas/mes", values: ["50", "150", "500", "Ilimitadas"] },
    { feature: "Usuarios", values: ["1", "2", "5", "Ilimitados"] },
    { feature: "Almacenes", values: ["1", "3", "Ilimitados", "Ilimitados"] },
    { feature: "Productos", values: ["200", "2,000", "Ilimitados", "Ilimitados"] },
    { feature: "Carta porte", values: ["—", "—", "✓", "✓"] },
    { feature: "Complemento de pago", values: ["✓", "✓", "✓", "✓"] },
    { feature: "POS", values: ["Básico", "Básico", "Multicaja", "Multicaja"] },
    { feature: "Corte de caja", values: ["—", "✓", "✓", "✓"] },
    { feature: "WhatsApp", values: ["—", "—", "✓", "✓"] },
    { feature: "Portal del cliente", values: ["—", "—", "✓", "✓"] },
    { feature: "Multi-empresa/RFC", values: ["—", "—", "—", "✓"] },
    { feature: "API", values: ["—", "—", "—", "✓"] },
    { feature: "Kardex SAT", values: ["—", "—", "✓", "✓"] },
    { feature: "Soporte", values: ["Chat", "Chat", "Prioritario", "Dedicado"] },
    { feature: "Onboarding", values: ["—", "—", "—", "Personalizado"] },
  ],
}

/* ------------------------------------------------------------------ */
/* Plan card                                                           */
/* ------------------------------------------------------------------ */

function PlanCard({
  plan,
  annual,
}: {
  plan: PricingPlan
  annual: boolean
}) {
  const displayPrice = annual
    ? getAnnualPrice(plan.monthlyPrice)
    : plan.monthlyPrice

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 transition-shadow duration-200",
        plan.highlighted
          ? "border-2 border-[#B12166] shadow-lg shadow-[#B12166]/10"
          : plan.enterprise
            ? "border-transparent bg-gradient-to-br from-[#1A0E2E] to-[#3F1C66] text-white"
            : "border-border-subtle bg-white",
        plan.highlighted && "order-first md:order-none"
      )}
    >
      {/* Recommended badge */}
      {plan.highlighted && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gap-1 bg-gradient-to-r from-[#3F1C66] to-[#B12166] text-white border-0 px-3 py-1 text-xs">
          <Star className="h-3 w-3 fill-current" />
          Recomendado
        </Badge>
      )}

      {/* Name */}
      <p className={cn(
        "text-base font-bold",
        plan.enterprise ? "text-white" : "text-text-primary"
      )}>
        {plan.name}
      </p>

      {/* Price */}
      <div className="mt-3 flex items-baseline gap-1">
        <span className={cn(
          "text-4xl font-bold tracking-tight",
          plan.enterprise ? "text-white" : "text-text-primary"
        )}>
          ${displayPrice.toLocaleString("es-MX")}
        </span>
        <span className={cn(
          "text-sm",
          plan.enterprise ? "text-white/70" : "text-text-secondary"
        )}>
          /mes + IVA
        </span>
      </div>

      {/* Description */}
      <p className={cn(
        "mt-2 text-sm",
        plan.enterprise ? "text-white/70" : "text-text-secondary"
      )}>
        {plan.description}
      </p>

      {/* Separator */}
      <hr className={cn(
        "my-5",
        plan.enterprise ? "border-white/15" : "border-border-subtle"
      )} />

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-2.5">
        {plan.features.map((feat) => (
          <li
            key={feat}
            className={cn(
              "flex items-start gap-2.5 text-sm",
              plan.enterprise ? "text-white/80" : "text-text-secondary"
            )}
          >
            <Check className={cn(
              "mt-0.5 h-4 w-4 shrink-0",
              plan.enterprise ? "text-[#B12166]" : "text-[#B12166]"
            )} />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        className={cn(
          "mt-6 w-full",
          plan.highlighted
            ? "bg-gradient-to-r from-[#3F1C66] to-[#B12166] text-white hover:opacity-90"
            : plan.enterprise
              ? "bg-white text-[#3F1C66] hover:bg-white/90"
              : ""
        )}
        variant={plan.highlighted || plan.enterprise ? "default" : "outline"}
        size="lg"
      >
        {plan.cta}
      </Button>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

function ComparisonTable({ tabId, plans }: { tabId: string; plans: PricingPlan[] }) {
  const rows = COMPARISON_DATA[tabId] ?? []

  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="w-full min-w-[600px] text-sm">
        <thead>
          <tr className="border-b border-border-subtle">
            <th className="pb-3 pr-4 text-left font-semibold text-text-primary">
              Característica
            </th>
            {plans.map((p) => (
              <th
                key={p.name}
                className={cn(
                  "pb-3 px-4 text-center font-semibold",
                  p.highlighted ? "text-[#B12166]" : "text-text-primary"
                )}
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={cn(
                "border-b border-border-subtle",
                i % 2 === 0 && "bg-bg-subtle/50"
              )}
            >
              <td className="py-3 pr-4 text-text-secondary">{row.feature}</td>
              {row.values.map((val, vi) => (
                <td
                  key={vi}
                  className={cn(
                    "py-3 px-4 text-center",
                    val === "✓"
                      ? "text-[#B12166] font-medium"
                      : val === "—"
                        ? "text-text-muted"
                        : "text-text-secondary"
                  )}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [activeTab, setActiveTab] = useState(PRICING_TABS[0].id)

  const currentTab = PRICING_TABS.find((t) => t.id === activeTab) ?? PRICING_TABS[0]

  return (
    <Section variant="subtle" id="pricing">
      {/* Header */}
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>PRECIOS</Eyebrow>
        <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-text-primary sm:text-[34px] lg:text-[40px] xl:text-[48px]">
          Planes que crecen contigo
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Sin contratos forzosos. Sin costo de migración. Cancela cuando quieras.
        </p>
      </Reveal>

      {/* Billing toggle */}
      <Reveal delay={0.1} className="mt-10 flex items-center justify-center gap-3">
        <button
          onClick={() => setAnnual(false)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
            !annual
              ? "bg-[#3F1C66] text-white shadow-sm"
              : "bg-white text-text-secondary hover:text-text-primary"
          )}
        >
          Mensual
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
            annual
              ? "bg-[#3F1C66] text-white shadow-sm"
              : "bg-white text-text-secondary hover:text-text-primary"
          )}
        >
          Anual
          <AnimatePresence>
            {annual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: -4 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -4 }}
                className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#B12166] to-[#3F1C66] px-2.5 py-0.5 text-[11px] font-semibold text-white"
              >
                2 meses gratis
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </Reveal>

      {/* Product tabs */}
      <Reveal delay={0.15} className="mt-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="items-center"
        >
          <TabsList className="mx-auto">
            {PRICING_TABS.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Plan cards */}
          {PRICING_TABS.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <RevealStagger
                className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                staggerDelay={0.06}
              >
                {tab.plans.map((plan) => (
                  <RevealChild key={plan.name}>
                    <PlanCard plan={plan} annual={annual} />
                  </RevealChild>
                ))}
              </RevealStagger>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>

      {/* Enterprise CTA link */}
      <Reveal delay={0.25} className="mt-10 text-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#3F1C66] transition-colors hover:text-[#B12166]"
        >
          ¿Necesitas algo más grande? Hablemos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </Reveal>

      {/* Comparison accordion */}
      <Reveal delay={0.3} className="mx-auto mt-14 max-w-5xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="comparison" className="border rounded-2xl px-6">
            <AccordionTrigger className="text-base font-semibold text-text-primary hover:no-underline">
              Comparar todos los planes
            </AccordionTrigger>
            <AccordionContent>
              <ComparisonTable
                tabId={currentTab.id}
                plans={currentTab.plans}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Reveal>
    </Section>
  )
}
