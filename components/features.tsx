"use client"

import { motion } from "framer-motion"
import { FileText, Package, BarChart3, Sparkles } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Facturacion CFDI 4.0",
    description:
      "Timbra facturas, notas de credito y carta porte directo desde Libris. Sin pagar timbres extra el primer mes.",
    color: "#3F1C66",
    bgGradient: "from-[#3F1C66]/10 to-[#3F1C66]/5",
  },
  {
    icon: Package,
    title: "Inventario en tiempo real",
    description:
      "Controla entradas, salidas y stock por sucursal. Recibe alertas antes de que se te acabe un producto clave.",
    color: "#B12166",
    bgGradient: "from-[#B12166]/10 to-[#B12166]/5",
  },
  {
    icon: BarChart3,
    title: "Reportes que entiendes",
    description:
      "Ventas, utilidad bruta, productos estrella, clientes top. Sin tener que ser contador para leerlos.",
    color: "#E07B39",
    bgGradient: "from-[#E07B39]/10 to-[#E07B39]/5",
  },
  {
    icon: Sparkles,
    title: "IA donde si ayuda",
    description:
      "Crea facturas dictando por voz, clasifica gastos automaticamente y recibe sugerencias para mejorar tu margen.",
    color: "#16A085",
    bgGradient: "from-[#16A085]/10 to-[#16A085]/5",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px]" />
      
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
            Todo lo operativo de tu PyME, en un solo software
          </h2>
          <p className="mt-8 text-lg text-text-secondary leading-relaxed">
            Olvida cargar entre Excel, el portal del SAT y tres apps mas. Libris junta lo esencial — y le suma IA donde de verdad ahorra tiempo.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-6 card-lift border border-transparent hover:border-current transition-colors`}
              style={{ ['--tw-border-opacity' as string]: '0.2', borderColor: `${feature.color}20` }}
            >
              {/* Decorative accent tab */}
              <div 
                className="absolute top-0 left-6 w-12 h-1.5 rounded-b-full"
                style={{ backgroundColor: feature.color }}
              />

              {/* Icon in colored box */}
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 shadow-lg"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 
                className="text-lg font-bold mb-3"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-text-primary leading-relaxed">
                {feature.description}
              </p>

              {/* Hover border effect */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ borderColor: feature.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
