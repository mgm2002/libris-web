export interface PricingPlan {
  name: string
  monthlyPrice: number
  description: string
  features: string[]
  highlighted: boolean
  enterprise: boolean
  cta: string
}

export interface PricingTab {
  id: string
  label: string
  plans: PricingPlan[]
}

export const PRICING_TABS: PricingTab[] = [
  {
    id: "facturacion",
    label: "Facturación",
    plans: [
      {
        name: "Inicia",
        monthlyPrice: 129,
        description: "Para emprendedores que empiezan a facturar",
        features: [
          "30 facturas/mes",
          "1 usuario",
          "Soporte por chat",
        ],
        highlighted: false,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Crece",
        monthlyPrice: 249,
        description: "Para negocios en crecimiento",
        features: [
          "100 facturas/mes",
          "2 usuarios",
          "Soporte prioritario",
        ],
        highlighted: false,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Pro",
        monthlyPrice: 449,
        description: "Para operaciones más complejas",
        features: [
          "300 facturas/mes",
          "4 usuarios",
          "Carta porte incluida",
          "Reportes avanzados",
        ],
        highlighted: true,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Enterprise",
        monthlyPrice: 699,
        description: "Para empresas con alto volumen",
        features: [
          "Facturas ilimitadas",
          "Usuarios ilimitados",
          "API",
          "Onboarding personalizado",
        ],
        highlighted: false,
        enterprise: true,
        cta: "Hablar con ventas",
      },
    ],
  },
  {
    id: "inventario",
    label: "Inventario",
    plans: [
      {
        name: "Inicia",
        monthlyPrice: 149,
        description: "Control de inventario esencial",
        features: [
          "1 almacén",
          "200 productos",
          "1 usuario",
        ],
        highlighted: false,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Crece",
        monthlyPrice: 279,
        description: "Para negocios con más SKUs",
        features: [
          "3 almacenes",
          "2,000 productos",
          "2 usuarios",
          "Códigos de barras",
        ],
        highlighted: false,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Pro",
        monthlyPrice: 499,
        description: "Control total de tu inventario",
        features: [
          "Almacenes ilimitados",
          "Productos ilimitados",
          "4 usuarios",
          "Kardex SAT",
          "Lotes y series",
        ],
        highlighted: true,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Enterprise",
        monthlyPrice: 799,
        description: "Para cadenas y distribuidores",
        features: [
          "Todo lo de Pro",
          "Usuarios ilimitados",
          "API",
          "Multi-empresa",
        ],
        highlighted: false,
        enterprise: true,
        cta: "Hablar con ventas",
      },
    ],
  },
  {
    id: "completo",
    label: "Plan Completo",
    plans: [
      {
        name: "Inicia",
        monthlyPrice: 249,
        description: "Facturación + inventario + POS básico",
        features: [
          "50 facturas",
          "1 almacén",
          "POS básico",
          "1 usuario",
        ],
        highlighted: false,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Crece",
        monthlyPrice: 449,
        description: "Todo lo que una PyME necesita",
        features: [
          "150 facturas",
          "3 almacenes",
          "POS + corte de caja",
          "2 usuarios",
        ],
        highlighted: false,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Pro",
        monthlyPrice: 799,
        description: "Para operaciones exigentes",
        features: [
          "500 facturas",
          "Almacenes ilimitados",
          "POS multicaja",
          "5 usuarios",
          "WhatsApp",
          "Portal del cliente",
        ],
        highlighted: true,
        enterprise: false,
        cta: "Probar 15 días gratis",
      },
      {
        name: "Enterprise",
        monthlyPrice: 1299,
        description: "Sin límites, sin compromisos",
        features: [
          "Todo ilimitado",
          "Usuarios ilimitados",
          "API",
          "Multi-sucursal",
          "Onboarding",
        ],
        highlighted: false,
        enterprise: true,
        cta: "Hablar con ventas",
      },
    ],
  },
]

export function getAnnualPrice(monthlyPrice: number): number {
  return Math.round((monthlyPrice * 10) / 12)
}
