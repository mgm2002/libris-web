"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animated-gradient" />

      {/* Decorative pattern overlay */}
      <div 
        className="absolute inset-0 -z-5 opacity-[0.1]"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating colored blobs */}
      <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-success/10 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-white">Sin compromiso, cancela cuando quieras</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Empieza a facturar en menos de 5 minutos
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            15 dias gratis. Sin tarjeta. Sin contrato. Si no te convence, no pagas — asi de simple.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-brand-primary hover:bg-white/95 rounded-xl px-8 py-4 text-base font-bold h-auto shadow-2xl shadow-black/30 group">
              Probar Libris gratis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-xl px-8 py-4 text-base font-semibold h-auto bg-transparent"
            >
              Agendar demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              100% CFDI 4.0
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-orange" />
              Soporte humano 24/7
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              Migracion gratuita
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
