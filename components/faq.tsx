"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Que es CFDI 4.0 y por que importa?",
    answer:
      "CFDI 4.0 es la version mas reciente del formato de facturacion electronica que exige el SAT en Mexico. Incluye mas datos del receptor (como codigo postal y regimen fiscal) y es obligatorio desde 2023. Libris genera automaticamente facturas compatibles, sin que tengas que preocuparte por los detalles tecnicos.",
    color: "#3F1C66",
  },
  {
    question: "Puedo migrar mis datos desde otro sistema?",
    answer:
      "Si. Nuestro equipo te ayuda a importar tu catalogo de productos, clientes y proveedores desde Excel o desde otros sistemas como Contpaqi, Bind o Alegra. El proceso es gratuito y generalmente toma menos de 48 horas.",
    color: "#B12166",
  },
  {
    question: "Necesito ser contador para usar Libris?",
    answer:
      "No. Libris esta disenado para duenos de negocio, no solo para contadores. La interfaz es sencilla, los terminos estan en espanol claro, y si tienes dudas, nuestro soporte te explica paso a paso.",
    color: "#E07B39",
  },
  {
    question: "Como funciona la prueba de 15 dias?",
    answer:
      "Te registras, conectas tu certificado del SAT (CSD) y empiezas a facturar. Tienes acceso completo a todas las funciones durante 15 dias. No pedimos tarjeta de credito y no hay compromiso. Si no te convence, simplemente no continuas.",
    color: "#16A085",
  },
  {
    question: "Mi informacion esta segura?",
    answer:
      "Muy segura. Usamos cifrado de extremo a extremo, servidores certificados y respaldos automaticos diarios. Tu informacion fiscal nunca se comparte con terceros y cumplimos con todas las normativas de proteccion de datos.",
    color: "#3F1C66",
  },
  {
    question: "Que pasa si supero el limite de facturas de mi plan?",
    answer:
      "Te avisamos cuando estes cerca del limite para que puedas subir de plan si lo necesitas. Si lo superas, puedes comprar paquetes adicionales de facturas o hacer el upgrade al siguiente nivel. Nunca te bloqueamos sin aviso.",
    color: "#B12166",
  },
]

export function FAQ() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-bg-subtle relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px]" />
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight heading-underline heading-underline-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            Preguntas frecuentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-border-subtle px-6 data-[state=open]:shadow-lg transition-all overflow-hidden relative"
              >
                {/* Colored accent bar */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 opacity-0 data-[state=open]:opacity-100 transition-opacity"
                  style={{ backgroundColor: faq.color }}
                />
                <AccordionTrigger className="text-left text-text-primary font-bold hover:no-underline py-5 group">
                  <span className="flex items-center gap-3">
                    <span 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: faq.color }}
                    >
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-text-primary leading-relaxed pb-5 pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
