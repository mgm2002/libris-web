"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "span"
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Component = as === "span" ? motion.span : motion.div

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={revealVariants}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}

export function RevealStagger({
  children,
  className,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function RevealChild({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={revealVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
