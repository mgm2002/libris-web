"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/primitives/gradient-text"
import DashboardMock from "@/components/mockups/dashboard-mock"

const BASE_DELAY = 0.08

function stagger(step: number) {
  return { duration: 0.5, ease: "easeOut" as const, delay: step * BASE_DELAY }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Hero() {
  const prefersReduced = useReducedMotion()
  const variants = prefersReduced ? fadeUpReduced : fadeUp

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-32 pb-20 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-brand-primary/10 blur-[140px]" />
        <div className="absolute top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand-accent/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(63,28,102,0.06) 0%, transparent 50%), " +
              "radial-gradient(circle at 80% 60%, rgba(177,33,102,0.05) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            className="flex w-full flex-col lg:w-[55%]"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={variants} transition={stagger(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
                </span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-primary">
                  Hecho en México · CFDI 4.0
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={variants}
              transition={stagger(1)}
              className="mt-6 text-[38px] font-extrabold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[44px] lg:text-[64px] xl:text-[72px]"
            >
              Factura y controla tu inventario{" "}
              <GradientText>sin pelearte con tu software.</GradientText>
            </motion.h1>

            <motion.p
              variants={variants}
              transition={stagger(2)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl"
            >
              Libris es la plataforma de facturación electrónica e inventario que las PyMEs mexicanas sí quieren usar. Timbra un CFDI en segundos, controla tu stock en tiempo real y olvídate del software que duele.
            </motion.p>

            <motion.div
              variants={variants}
              transition={stagger(3)}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button className="btn-gradient group h-auto rounded-full px-7 py-3.5 text-base font-semibold shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-px hover:shadow-xl">
                Probar 15 días gratis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="h-auto rounded-full border-border-default px-7 py-3.5 text-base font-medium text-text-primary hover:border-brand-primary/40 hover:text-brand-primary"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar app de escritorio
              </Button>
            </motion.div>

            <motion.p
              variants={variants}
              transition={stagger(4)}
              className="mt-4 text-sm text-text-muted"
            >
              Sin tarjeta de crédito · Cancela cuando quieras
            </motion.p>
          </motion.div>

          <motion.div
            className="relative w-full lg:w-[45%]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={stagger(5)}
          >
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-brand-accent/10 blur-3xl"
              aria-hidden
            />
            <div
              className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-border-subtle"
              style={{
                transform: "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
              }}
            >
              <DashboardMock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
