import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Libris | Facturación Electrónica e Inventario para PyMEs en México',
  description: 'Timbra CFDI 4.0, controla tu inventario y revisa tus números en tiempo real. Hecho en México, pensado para PyMEs que quieren crecer sin pelearse con su software.',
  generator: 'v0.app',
  keywords: ['facturación electrónica', 'CFDI 4.0', 'inventario', 'PyMEs', 'México', 'SAT', 'facturación'],
  authors: [{ name: 'Libris' }],
  openGraph: {
    title: 'Libris | Facturación Electrónica e Inventario para PyMEs',
    description: 'Timbra CFDI 4.0, controla tu inventario y revisa tus números en tiempo real.',
    type: 'website',
    locale: 'es_MX',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
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
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
