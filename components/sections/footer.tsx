"use client"

import Link from "next/link"
import { Linkedin, Instagram, Youtube, CheckCircle } from "lucide-react"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants"

/* ------------------------------------------------------------------ */
/*  Social icon map                                                    */
/* ------------------------------------------------------------------ */

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="h-5 w-5" />,
  X: <XIcon className="h-5 w-5" />,
  Instagram: <Instagram className="h-5 w-5" />,
  YouTube: <Youtube className="h-5 w-5" />,
}

/* ------------------------------------------------------------------ */
/*  Footer column helper                                               */
/* ------------------------------------------------------------------ */

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: ReadonlyArray<{ label: string; href: string }>
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-text-on-dark-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="bg-bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        {/* Top: 4-column grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Libris</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-on-dark-muted">
              Facturaci&oacute;n e inventario para PyMEs mexicanas.
            </p>
            <p className="mt-3 text-sm text-text-on-dark-muted">
              <span aria-label="Bandera de México">&#127474;&#127485;</span>{" "}
              M&eacute;xico
            </p>
          </div>

          {/* Link columns */}
          <FooterColumn title="Producto" links={FOOTER_LINKS.producto} />
          <FooterColumn title="Empresa" links={FOOTER_LINKS.empresa} />
          <FooterColumn title="Legal y soporte" links={FOOTER_LINKS.legal} />
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-border-on-dark" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-text-on-dark-muted">
            &copy; 2026 Libris. Hecho en M&eacute;xico{" "}
            <span aria-label="Bandera de México">&#127474;&#127485;</span>
          </p>

          {/* Social icons + badge */}
          <div className="flex items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-text-on-dark-muted transition-colors hover:text-white"
                >
                  {socialIcons[social.label]}
                </Link>
              ))}
            </div>

            {/* Carbon neutral badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-on-dark px-3 py-1 text-xs font-medium text-text-on-dark-muted">
              <CheckCircle className="h-3.5 w-3.5 text-success" />
              Carbono neutral
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
