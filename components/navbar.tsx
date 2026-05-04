"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { motion, AnimatePresence } from "framer-motion"

const productLinks = [
  { title: "Facturacion", href: "#facturacion", description: "Timbra CFDI 4.0 en segundos" },
  { title: "Inventario", href: "#inventario", description: "Control de stock en tiempo real" },
  { title: "Reportes", href: "#reportes", description: "Metricas que entiendes" },
]

const businessLinks = [
  { title: "Comercio", href: "#comercio", description: "Tiendas y retail" },
  { title: "Servicios", href: "#servicios", description: "Profesionales y consultores" },
  { title: "Restaurantes", href: "#restaurantes", description: "Cafes, bares y cocinas" },
  { title: "Despachos contables", href: "#despachos", description: "Gestiona multiples clientes" },
]

const resourceLinks = [
  { title: "Blog", href: "#blog", description: "Consejos y novedades" },
  { title: "Centro de ayuda", href: "#ayuda", description: "Tutoriales y soporte" },
  { title: "Guias CFDI", href: "#guias", description: "Todo sobre facturacion electronica" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5">
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-[#3F1C66]" : "text-white"}`}>
              Libris
            </span>
            <span className="text-[#B12166] text-xl">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent transition-colors ${
                      isScrolled 
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Producto
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-2 p-4 bg-white rounded-xl">
                      {productLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block rounded-xl p-3 hover:bg-gray-100 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                {link.title}
                              </div>
                              <p className="text-sm text-gray-500 mt-0.5">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent transition-colors ${
                      isScrolled 
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Para tu negocio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-2 p-4 bg-white rounded-xl">
                      {businessLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block rounded-xl p-3 hover:bg-gray-100 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                {link.title}
                              </div>
                              <p className="text-sm text-gray-500 mt-0.5">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#precios"
                      className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        isScrolled 
                          ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      Precios
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent transition-colors ${
                      isScrolled 
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" 
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Recursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-2 p-4 bg-white rounded-xl">
                      {resourceLinks.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block rounded-xl p-3 hover:bg-gray-100 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900">
                                {link.title}
                              </div>
                              <p className="text-sm text-gray-500 mt-0.5">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="#login"
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              Iniciar sesion
            </Link>
            <Button 
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                isScrolled
                  ? "bg-gradient-to-r from-[#3F1C66] to-[#B12166] text-white hover:opacity-90"
                  : "bg-white text-[#3F1C66] hover:bg-white/90"
              }`}
            >
              Empezar gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl lg:hidden z-50"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/" className="flex items-center gap-0.5">
                  <span className="text-xl font-bold text-[#3F1C66] tracking-tight">
                    Libris
                  </span>
                  <span className="text-[#B12166] text-xl">.</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label="Cerrar menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <MobileNavSection title="Producto" links={productLinks} />
                <MobileNavSection title="Para tu negocio" links={businessLinks} />
                <Link
                  href="#precios"
                  className="block py-3 text-gray-900 font-medium hover:text-[#3F1C66] transition-colors"
                >
                  Precios
                </Link>
                <MobileNavSection title="Recursos" links={resourceLinks} />
              </div>

              <div className="p-4 border-t border-gray-200 space-y-3">
                <Link
                  href="#login"
                  className="block w-full text-center py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Iniciar sesion
                </Link>
                <Button className="w-full bg-gradient-to-r from-[#3F1C66] to-[#B12166] text-white rounded-xl px-5 py-3 text-sm font-semibold hover:opacity-90">
                  Empezar gratis
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
          />
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileNavSection({
  title,
  links,
}: {
  title: string
  links: { title: string; href: string; description: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 text-gray-900 font-medium"
      >
        {title}
        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block py-2 text-sm text-gray-600 hover:text-[#3F1C66] transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
