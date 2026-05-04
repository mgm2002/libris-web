"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Antes perdia medio dia en el portal del SAT. Ahora facturo en 2 minutos y el sistema me avisa cuando un cliente necesita su CFDI. Migrar fue mas facil de lo que pense.",
    name: "Roberto Mendez",
    role: "Dueno de tienda de abarrotes",
    location: "CDMX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    accentColor: "#3F1C66",
    bgColor: "bg-gradient-to-br from-[#3F1C66]/5 to-[#B12166]/5",
  },
  {
    quote:
      "Como contadora independiente, administro 15 RFCs. Libris me dejo tener todo en una sola cuenta, con permisos para cada cliente. El soporte responde rapido y saben de lo que hablan.",
    name: "Patricia Salazar",
    role: "Contadora independiente",
    location: "Monterrey",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
    accentColor: "#B12166",
    bgColor: "bg-gradient-to-br from-brand-dark to-brand-primary",
    dark: true,
  },
  {
    quote:
      "El control de inventario me cambio la vida. Ya no compro ingredientes de mas ni me quedo sin producto un viernes en la noche. Todo conectado con la facturacion.",
    name: "Miguel Angel Torres",
    role: "Dueno de restaurante",
    location: "Guadalajara",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    accentColor: "#16A085",
    bgColor: "bg-gradient-to-br from-[#16A085]/5 to-[#E07B39]/5",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px]" />
      
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
            Lo que dicen las PyMEs que ya migraron
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className={`rounded-2xl p-6 relative overflow-hidden ${testimonial.bgColor} ${
                testimonial.dark ? 'shadow-xl' : 'border border-border-subtle'
              }`}
            >
              {/* Quote icon */}
              <div 
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: testimonial.dark 
                    ? 'rgba(177, 33, 102, 0.3)' 
                    : `${testimonial.accentColor}15` 
                }}
              >
                <Quote 
                  className="w-5 h-5" 
                  style={{ color: testimonial.dark ? '#fff' : testimonial.accentColor }}
                />
              </div>

              {/* Quote Text */}
              <p className={`relative z-10 leading-relaxed mb-6 text-base ${
                testimonial.dark ? 'text-white' : 'text-text-primary'
              }`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div 
                  className="w-14 h-14 rounded-full overflow-hidden ring-4"
                  style={{ 
                    ringColor: testimonial.dark 
                      ? 'rgba(177, 33, 102, 0.5)' 
                      : `${testimonial.accentColor}30` 
                  }}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p 
                    className="font-bold text-base"
                    style={{ color: testimonial.dark ? '#fff' : testimonial.accentColor }}
                  >
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${testimonial.dark ? 'text-white/70' : 'text-text-secondary'}`}>
                    {testimonial.role}
                  </p>
                  <p 
                    className="text-xs font-semibold mt-0.5"
                    style={{ color: testimonial.dark ? '#B12166' : testimonial.accentColor }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative accent bar */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ 
                  background: testimonial.dark 
                    ? 'linear-gradient(90deg, #B12166, #E07B39, #16A085)' 
                    : `linear-gradient(90deg, ${testimonial.accentColor}, #B12166)` 
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
