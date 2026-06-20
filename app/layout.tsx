import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Libris — Facturación CFDI 4.0 e inventario para PyMEs en México',
  description: 'Timbra CFDI 4.0 en segundos y controla tu inventario en tiempo real. App de escritorio y en la nube. Hecho en México, optimizado para el SAT. Prueba 15 días gratis.',
  keywords: ['facturación electrónica', 'CFDI 4.0', 'inventario', 'PyMEs', 'México', 'SAT', 'facturación', 'punto de venta'],
  authors: [{ name: 'Libris' }],
  openGraph: {
    title: 'Libris — Facturación CFDI 4.0 e inventario para PyMEs en México',
    description: 'Timbra CFDI 4.0 en segundos y controla tu inventario en tiempo real. App de escritorio y en la nube. Hecho en México, optimizado para el SAT.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Libris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Libris — Facturación CFDI 4.0 e inventario para PyMEs',
    description: 'Timbra CFDI 4.0 en segundos y controla tu inventario en tiempo real.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3F1C66',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
