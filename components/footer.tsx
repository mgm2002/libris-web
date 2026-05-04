"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  producto: [
    { label: "Facturacion", href: "#facturacion" },
    { label: "Inventario", href: "#inventario" },
    { label: "Reportes", href: "#reportes" },
    { label: "Carta Porte", href: "#carta-porte" },
    { label: "API", href: "#api" },
    { label: "Novedades", href: "#novedades" },
  ],
  recursos: [
    { label: "Blog", href: "#blog" },
    { label: "Guias CFDI", href: "#guias" },
    { label: "Centro de ayuda", href: "#ayuda" },
    { label: "Estado del servicio", href: "#status" },
    { label: "Comparativas", href: "#comparativas" },
  ],
  empresa: [
    { label: "Sobre Libris", href: "#sobre" },
    { label: "Contacto", href: "#contacto" },
    { label: "Trabaja con nosotros", href: "#careers" },
    { label: "Terminos", href: "#terminos" },
    { label: "Privacidad", href: "#privacidad" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-white relative">
      {/* Gradient line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-0.5 mb-4">
              <span className="text-2xl font-bold text-brand-primary tracking-tight">
                Libris
              </span>
              <span className="text-brand-accent text-2xl">.</span>
            </Link>

            {/* Country Selector */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">MX</span>
              <span className="text-sm text-text-secondary">Mexico</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-text-muted mb-6 max-w-xs">
              Facturacion e inventario para PyMEs que quieren crecer.
            </p>

            {/* Newsletter signup */}
            <div className="mb-6">
              <p className="text-sm font-medium text-text-primary mb-2">
                Tips fiscales para PyMEs cada quincena
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-10 rounded-lg border-border-default"
                />
                <Button 
                  size="sm" 
                  className="btn-gradient rounded-lg px-4 h-10"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>

            {/* Carbon Neutral Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
              <div className="w-2.5 h-2.5 rounded-full bg-success" />
              <span className="text-sm text-success font-medium">Carbono neutro</span>
            </div>
          </div>

          {/* Producto Column */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos Column */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa Column */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            2026 Libris - Hecho en Zacatecas, para todo Mexico
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-text-muted hover:text-brand-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </Link>
            ))}
            {/* TikTok icon (custom since lucide doesn't have it) */}
            <Link
              href="#tiktok"
              className="text-text-muted hover:text-brand-accent transition-colors"
              aria-label="TikTok"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
