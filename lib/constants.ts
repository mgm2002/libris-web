export const NAV_LINKS = {
  product: [
    { title: "Facturación CFDI 4.0", href: "/producto#facturacion", description: "Timbra CFDI en segundos" },
    { title: "Inventario", href: "/producto#inventario", description: "Control de stock en tiempo real" },
    { title: "Punto de venta", href: "/producto#pos", description: "POS rápido en cualquier dispositivo" },
    { title: "Reportes", href: "/producto#reportes", description: "Métricas que entiendes" },
    { title: "App de escritorio", href: "/descargar", description: "Windows, Mac y Linux" },
  ],
  solutions: [
    { title: "Comercio", href: "/producto#comercio", description: "Tiendas y retail" },
    { title: "Servicios", href: "/producto#servicios", description: "Profesionistas y consultores" },
    { title: "Restaurantes", href: "/producto#restaurantes", description: "Cafés, bares y cocinas" },
    { title: "Despachos contables", href: "/producto#despachos", description: "Gestiona múltiples RFC" },
  ],
  resources: [
    { title: "Blog", href: "#blog", description: "Consejos y novedades" },
    { title: "Centro de ayuda", href: "#ayuda", description: "Tutoriales y soporte" },
    { title: "Guía CFDI 4.0", href: "#guias", description: "Todo sobre facturación electrónica" },
  ],
} as const

export const FOOTER_LINKS = {
  producto: [
    { label: "Facturación", href: "/producto#facturacion" },
    { label: "Inventario", href: "/producto#inventario" },
    { label: "Punto de venta", href: "/producto#pos" },
    { label: "Reportes", href: "/producto#reportes" },
    { label: "App de escritorio", href: "/descargar" },
    { label: "Precios", href: "/precios" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "/contacto" },
    { label: "Trabaja con nosotros", href: "#careers" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "/legal/privacidad" },
    { label: "Términos", href: "/legal/terminos" },
    { label: "Centro de ayuda", href: "#ayuda" },
    { label: "Estatus del sistema", href: "#status" },
  ],
} as const

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#linkedin" },
  { label: "X", href: "#x" },
  { label: "Instagram", href: "#instagram" },
  { label: "YouTube", href: "#youtube" },
] as const

export const DOWNLOAD_URLS = {
  windows: { url: "#download-windows", version: "1.0.0", size: "85 MB", date: "2026-06-01" },
  mac: { url: "#download-mac", version: "1.0.0", size: "92 MB", date: "2026-06-01" },
  linux: { url: "#download-linux", version: "1.0.0", size: "78 MB", date: "2026-06-01" },
} as const
