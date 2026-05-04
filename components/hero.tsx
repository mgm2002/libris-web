"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CreditCard, FileX, ArrowRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-gradient-to-br from-[#1A0E2E] via-[#2D1B4E] to-[#3F1C66]">
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern with radial fade */}
        <div 
          className="absolute inset-0 grid-pattern opacity-30"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%)',
          }}
        />
        
        {/* Aurora mesh blobs */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[180px]" />
        <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-[#E07B39]/25 rounded-full blur-[150px]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-primary/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-[#16A085]/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-40 right-1/4 w-[350px] h-[350px] bg-brand-accent/25 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#16A085] animate-pulse" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.15em] text-white/90 font-medium">
              Facturacion electronica e inventario para Mexico
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl text-balance"
            style={{ letterSpacing: "-0.025em" }}
          >
            Factura, controla tu inventario y crece —{" "}
            <span className="bg-gradient-to-r from-[#E07B39] via-brand-accent to-[#16A085] bg-clip-text text-transparent">
              desde un solo lugar.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Timbra CFDI 4.0, controla tu stock y revisa tus numeros en tiempo real. 
            Hecho en Mexico, pensado para PyMEs que quieren crecer sin pelearse con su software.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button className="group bg-white text-[#3F1C66] hover:bg-white/90 rounded-xl px-7 py-3.5 text-base font-semibold h-auto shadow-lg shadow-black/20 transition-all hover:shadow-xl hover:shadow-black/30">
              Empezar prueba de 15 dias
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="rounded-xl px-7 py-3.5 text-base font-medium h-auto border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50 backdrop-blur-sm"
            >
              Agendar demo
            </Button>
          </motion.div>

          {/* Microcopy */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex items-center gap-4 text-sm text-white/70"
          >
            <span className="flex items-center gap-1.5">
              <CreditCard size={16} className="text-white/60" />
              Sin tarjeta de credito
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <FileX size={16} className="text-white/60" />
              Sin contrato de permanencia
            </span>
          </motion.div>

          {/* Product Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 w-full max-w-5xl relative"
          >
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/20 via-transparent to-transparent blur-3xl -z-10" />
            
            {/* Main Desktop Window */}
            <div className="relative z-10 bg-white rounded-2xl border border-white/20 shadow-2xl shadow-black/40 overflow-hidden">
              <DashboardMockup />
            </div>

            {/* Floating Mobile Window - Right */}
            <div className="absolute -right-4 sm:right-8 top-1/4 z-20 w-32 sm:w-44 bg-white rounded-xl border border-white/30 shadow-xl shadow-black/30 overflow-hidden transform rotate-2">
              <MobileMockup />
            </div>

            {/* Floating Small Window - Left */}
            <div className="absolute -left-4 sm:left-4 bottom-8 z-20 w-40 sm:w-52 bg-white rounded-xl border border-white/30 shadow-xl shadow-black/30 overflow-hidden transform -rotate-3">
              <SmallCardMockup />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="w-full">
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#F8F7FA] border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 bg-white rounded-md text-xs text-gray-500 border border-gray-200">
            app.libris.mx
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-48 bg-[#F8F7FA] p-4 gap-3 border-r border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3F1C66] to-[#B12166] flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">Libris</span>
          </div>
          {["Dashboard", "Facturas", "Inventario", "Clientes", "Reportes"].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-2 rounded-lg text-sm ${
                i === 0
                  ? "bg-[#3F1C66] text-white font-medium"
                  : "text-gray-600 hover:bg-white"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 bg-white">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
            {[
              { label: "Total facturado", value: "$847,320", change: "+12%", color: "border-t-[#3F1C66]", live: true },
              { label: "CFDIs timbrados", value: "1,234", change: "+8%", color: "border-t-[#B12166]", live: false },
              { label: "Productos activos", value: "456", change: "+3%", color: "border-t-[#16A085]", live: false },
            ].map((kpi) => (
              <div key={kpi.label} className={`bg-[#F8F7FA] rounded-xl p-3 sm:p-4 relative border-t-4 ${kpi.color}`}>
                {kpi.live && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 bg-[#16A085]/15 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#16A085] animate-pulse" />
                    <span className="text-[10px] text-[#16A085] font-medium">En vivo</span>
                  </div>
                )}
                <p className="text-xs text-gray-500">{kpi.label}</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                <p className="text-xs text-[#16A085] font-medium mt-1">{kpi.change}</p>
              </div>
            ))}
          </div>

          {/* Chart with varied colors */}
          <div className="bg-[#F8F7FA] rounded-xl p-4 mb-6">
            <p className="text-sm font-medium text-gray-900 mb-3">Ventas este mes</p>
            <div className="flex items-end gap-2 h-24">
              {[
                { h: 40, color: "bg-[#3F1C66]" },
                { h: 65, color: "bg-[#B12166]" },
                { h: 45, color: "bg-[#3F1C66]" },
                { h: 80, color: "bg-[#16A085]" },
                { h: 55, color: "bg-[#E07B39]" },
                { h: 90, color: "bg-[#B12166]" },
                { h: 75, color: "bg-[#16A085]" },
                { h: 85, color: "bg-[#3F1C66]" },
                { h: 60, color: "bg-[#B12166]" },
                { h: 95, color: "bg-[#16A085]" },
                { h: 70, color: "bg-[#E07B39]" },
                { h: 88, color: "bg-[#3F1C66]" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${bar.color}`}
                  style={{ height: `${bar.h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-[#F8F7FA] rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <p className="text-sm font-medium text-gray-900">Facturas recientes</p>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                { id: "F-001234", client: "Cafe La Esquina", amount: "$2,450.00", status: "Timbrado", statusColor: "bg-[#16A085]/15 text-[#16A085]" },
                { id: "F-001233", client: "Ferreteria Lopez", amount: "$8,920.50", status: "Timbrado", statusColor: "bg-[#16A085]/15 text-[#16A085]" },
                { id: "F-001232", client: "Boutique Maria", amount: "$1,340.00", status: "Enviado", statusColor: "bg-[#3F1C66]/15 text-[#3F1C66]" },
              ].map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between px-4 py-3 text-sm bg-white">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{invoice.id}</span>
                    <span className="text-gray-600 hidden sm:inline">{invoice.client}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{invoice.amount}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${invoice.statusColor}`}>
                      {invoice.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="p-3 bg-white">
      <div className="flex items-center justify-between mb-3">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#3F1C66] to-[#B12166]" />
        <div className="w-4 h-4 rounded bg-gray-100" />
      </div>
      <div className="bg-gradient-to-r from-[#3F1C66] to-[#B12166] rounded-lg p-2 mb-2">
        <p className="text-[8px] text-white/80">Hoy</p>
        <p className="text-xs font-bold text-white">$12,450</p>
      </div>
      <div className="space-y-1.5">
        {[
          { color: "bg-[#16A085]" },
          { color: "bg-[#E07B39]" },
          { color: "bg-[#B12166]" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded ${item.color}`} />
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded w-3/4" />
              <div className="h-1.5 bg-gray-100 rounded w-1/2 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SmallCardMockup() {
  return (
    <div className="p-3 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-[#E07B39] animate-pulse" />
        <p className="text-[10px] font-medium text-gray-900">Stock bajo</p>
      </div>
      <div className="space-y-2">
        {[
          { name: "Cafe molido 250g", stock: 3, color: "bg-[#E07B39]" },
          { name: "Taza logo", stock: 5, color: "bg-[#B12166]" },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className={`w-1.5 h-6 rounded-full ${item.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-gray-900 truncate">{item.name}</p>
              <p className="text-[8px] text-gray-500">{item.stock} unidades</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
