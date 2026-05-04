"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "100%",
    label: "Compatible con CFDI 4.0",
    color: "#3F1C66",
  },
  {
    value: "<2 seg",
    label: "Tiempo promedio de timbrado",
    color: "#B12166",
  },
  {
    value: "24/7",
    label: "Soporte humano (no bots con menus eternos)",
    color: "#E07B39",
  },
  {
    value: "0",
    label: "Costo de migracion desde otro sistema",
    color: "#16A085",
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

export function TrustStats() {
  return (
    <section className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Colorful blobs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-accent/30 rounded-full blur-[150px]" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-brand-primary/40 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-orange/20 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Confianza que se mide
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Hecho en Mexico, optimizado para el SAT
          </p>
          {/* Gradient underline */}
          <div className="mx-auto mt-4 w-20 h-1.5 rounded-full bg-gradient-to-r from-brand-accent via-brand-orange to-success" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <p 
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3"
                style={{ 
                  letterSpacing: "-0.02em",
                  color: stat.color,
                  textShadow: `0 0 60px ${stat.color}50`,
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-white font-medium max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
