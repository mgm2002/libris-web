"use client"

import { Section } from "@/components/primitives/section"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "¿Libris timbra CFDI 4.0 directamente?",
    a: "Sí. Libris está conectado a un PAC autorizado por el SAT, así que timbras tus facturas (ingreso, egreso, traslado, complemento de pago y carta porte) directo desde la app, sin software extra.",
  },
  {
    q: "¿Es app de escritorio o en la nube?",
    a: "Las dos. Puedes usar Libris en tu navegador o descargar la app de escritorio para Windows, Mac y Linux. Tu información se mantiene sincronizada.",
  },
  {
    q: "¿Qué tan difícil es migrar desde Aspel, CONTPAQi o Excel?",
    a: "Nada. La migración no tiene costo y te ayudamos a importar tus clientes, productos y catálogos. La mayoría queda lista el mismo día.",
  },
  {
    q: "¿Necesito ser contador para usarlo?",
    a: "No. Libris está hecho para dueños de negocio. Si algo requiere conocimiento fiscal, el sistema te guía. Y tu contador también puede entrar con su propio acceso.",
  },
  {
    q: "¿Puedo probarlo antes de pagar?",
    a: "Sí, 15 días gratis y sin tarjeta. Si decides quedarte, eliges el plan que te quede; si no, no pasa nada.",
  },
  {
    q: "¿Mi información está segura?",
    a: "Tu información viaja cifrada y se respalda automáticamente. Cumplimos con los requerimientos del SAT y nunca compartimos tus datos.",
  },
] as const

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FAQ() {
  return (
    <Section variant="subtle">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>PREGUNTAS FRECUENTES</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Lo que todos preguntan antes de empezar
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.16}>
        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-14 max-w-3xl divide-y divide-border-subtle"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b-0 border-border-subtle"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-text-primary hover:no-underline sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-text-secondary">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  )
}
