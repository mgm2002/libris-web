"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Cafe La Esquina", color: "#3F1C66" },
  { name: "Ferreteria Lopez", color: "#B12166" },
  { name: "Boutique Maria", color: "#E07B39" },
  { name: "Panaderia Don Jose", color: "#16A085" },
  { name: "Consultoria Ramirez", color: "#3F1C66" },
  { name: "Cafe La Esquina", color: "#B12166" },
  { name: "Ferreteria Lopez", color: "#E07B39" },
  { name: "Boutique Maria", color: "#16A085" },
  { name: "Panaderia Don Jose", color: "#3F1C66" },
  { name: "Consultoria Ramirez", color: "#B12166" },
]

export function SocialProof() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-bg-subtle overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm sm:text-base text-text-primary font-medium"
        >
          Cientos de PyMEs mexicanas ya facturan con Libris — unete a ellas.
        </motion.p>
      </div>
      
      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-subtle to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-subtle to-transparent z-10" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex"
        >
          <div className="flex animate-marquee items-center gap-8">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-12 px-6 bg-white border-2 rounded-xl whitespace-nowrap shadow-sm"
                style={{ borderColor: `${logo.color}30` }}
              >
                <div 
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: logo.color }}
                />
                <span 
                  className="text-sm font-semibold"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee items-center gap-8" aria-hidden="true">
            {logos.map((logo, i) => (
              <div
                key={`dup-${i}`}
                className="flex items-center justify-center h-12 px-6 bg-white border-2 rounded-xl whitespace-nowrap shadow-sm"
                style={{ borderColor: `${logo.color}30` }}
              >
                <div 
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: logo.color }}
                />
                <span 
                  className="text-sm font-semibold"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
