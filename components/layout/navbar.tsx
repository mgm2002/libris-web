"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Download } from "lucide-react"
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
import { NAV_LINKS } from "@/lib/constants"

export function Navbar({ heroVariant = "dark" }: { heroVariant?: "light" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const useDarkText = isScrolled || heroVariant === "light"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-border-subtle shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center h-8 transition-all duration-250">
            <Image
              src={isScrolled ? "/logo.svg" : "/logo.svg"}
              alt="Libris"
              width={120}
              height={32}
              priority
              className={`h-8 w-auto transition-all duration-250 ${
                useDarkText ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Producto */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-sm font-medium transition-colors ${
                      useDarkText
                        ? "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Producto
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[340px] gap-1 p-3 bg-white rounded-xl shadow-lg border border-border-subtle">
                      {NAV_LINKS.product.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block rounded-lg p-3 hover:bg-bg-subtle transition-colors"
                            >
                              <div className="text-sm font-medium text-text-primary">{link.title}</div>
                              <p className="text-xs text-text-muted mt-0.5">{link.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Soluciones */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-sm font-medium transition-colors ${
                      useDarkText
                        ? "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Soluciones
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[340px] gap-1 p-3 bg-white rounded-xl shadow-lg border border-border-subtle">
                      {NAV_LINKS.solutions.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block rounded-lg p-3 hover:bg-bg-subtle transition-colors"
                            >
                              <div className="text-sm font-medium text-text-primary">{link.title}</div>
                              <p className="text-xs text-text-muted mt-0.5">{link.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Precios */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/precios"
                      className={`inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        useDarkText
                          ? "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      Precios
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Recursos */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-transparent text-sm font-medium transition-colors ${
                      useDarkText
                        ? "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Recursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[340px] gap-1 p-3 bg-white rounded-xl shadow-lg border border-border-subtle">
                      {NAV_LINKS.resources.map((link) => (
                        <li key={link.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block rounded-lg p-3 hover:bg-bg-subtle transition-colors"
                            >
                              <div className="text-sm font-medium text-text-primary">{link.title}</div>
                              <p className="text-xs text-text-muted mt-0.5">{link.description}</p>
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
                useDarkText
                  ? "text-text-secondary hover:text-text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Iniciar sesión
            </Link>
            <Button
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-px ${
                useDarkText
                  ? "btn-gradient shadow-md hover:shadow-lg"
                  : "bg-white text-brand-primary hover:bg-white/90 shadow-lg"
              }`}
            >
              Probar gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              useDarkText
                ? "text-text-primary hover:bg-bg-subtle"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

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

      {/* Mobile Drawer */}
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
              <div className="flex items-center justify-between p-6 border-b border-border-subtle">
                <Link href="/" className="h-8">
                  <Image src="/logo.svg" alt="Libris" width={120} height={32} className="h-8 w-auto" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-primary hover:bg-bg-subtle rounded-lg"
                  aria-label="Cerrar menú"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <MobileNavSection title="Producto" links={NAV_LINKS.product} />
                <MobileNavSection title="Soluciones" links={NAV_LINKS.solutions} />
                <Link
                  href="/precios"
                  className="block py-3 text-text-primary font-medium hover:text-brand-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Precios
                </Link>
                <MobileNavSection title="Recursos" links={NAV_LINKS.resources} />
              </div>

              <div className="p-6 border-t border-border-subtle space-y-3">
                <Link
                  href="#login"
                  className="block w-full text-center py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  Iniciar sesión
                </Link>
                <Button className="w-full btn-gradient rounded-full px-5 py-3 text-sm font-semibold">
                  Probar gratis
                </Button>
              </div>
            </div>
          </motion.div>
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
  links: readonly { title: string; href: string; description: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border-subtle last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 text-text-primary font-medium"
      >
        {title}
        <ChevronDown
          size={18}
          className={`text-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                  className="block py-2 text-sm text-text-secondary hover:text-brand-primary transition-colors"
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
