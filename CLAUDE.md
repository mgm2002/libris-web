# Libris Web — Contexto para Claude Code

## 1. Contexto del producto

**Libris** es una plataforma mexicana de **facturación electrónica (CFDI 4.0) e inventario para PyMEs**, disponible como **app de escritorio** (Electron) y como **SaaS web**.

**Audiencia:** dueños de PyMEs (comercio, servicios, restaurantes) y despachos contables.

**Posicionamiento visual:** sofisticado y tipográfico, registro Linear / Mercury / Stripe. No "alegre/startup tropical".

**Voz:** cercana, directa, mexicana, profesional sin acartonamiento.
- ✅ "Factura sin pelearte con tu software."
- ❌ "Potencia tu empresa con soluciones de clase mundial."

**El sitio vende:** (1) suscripción al SaaS web (prueba gratis), y (2) descarga de la app de escritorio.

## 2. Stack técnico

- Next.js 14+ App Router, TypeScript estricto
- Tailwind CSS con CSS variables mapeadas al theme
- shadcn/ui (Button, Card, Tabs, Badge, Accordion, NavigationMenu, Separator, Switch)
- lucide-react para íconos
- framer-motion para animaciones
- Inter (Google Fonts, pesos 400–800)
- Mobile-first, solo modo claro

## 3. Design tokens

### Paleta
- `--brand-primary: #3F1C66` — morado profundo, dominante
- `--brand-accent: #B12166` — magenta/frambuesa, acento (~10-15% presencia)
- Gradiente: `linear-gradient(135deg, #3F1C66, #B12166)` — con moderación
- Fondos: `--bg-base: #FFF`, `--bg-subtle: #FAF8FC`, `--bg-dark: #1A0E2E`

### Tipografía
- Inter, pesos 400-800
- H1 hero: 64-72px / 38-44px mobile, peso 800, tracking -0.03em
- H2 sección: 40-48px / 30-34px mobile, peso 700, tracking -0.02em
- Body: 16px, peso 400
- Eyebrow: 13px, peso 600, tracking 0.08em, UPPERCASE

### Espaciado
- Padding vertical de sección: `py-28` a `py-32` desktop, `py-16`/`py-20` mobile
- Contenedor: `max-w-7xl mx-auto px-6 md:px-8`
- Gap de grids: `gap-6` (cards), `gap-8` (bloques grandes)

### Ritmo de fondos
1. Navbar — transparente sobre hero, luego blanco con blur
2. Hero — claro con blobs
3. Social proof — `--bg-subtle` con dot grid
4. Features — `--bg-base`
5. Soluciones — `--bg-subtle`
6. Product showcase — `--bg-base`
7. Pricing — `--bg-subtle`
8. Trust stats — `--bg-dark` (momento dramático)
9. Testimonios — `--bg-base`
10. FAQ — `--bg-subtle`
11. CTA final — gradiente de marca
12. Footer — `--bg-dark`

### Convenciones
- UI en español, código/identificadores en inglés
- Commits convencionales: `feat:`, `fix:`, `style:`, `chore:`
- No dark mode toggle
- Mockups son divs estilizados, no imágenes
