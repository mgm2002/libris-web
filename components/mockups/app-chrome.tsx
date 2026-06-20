import {
  Home,
  FileText,
  Package,
  Users,
  BarChart3,
  Settings,
  Search,
  Bell,
} from "lucide-react";

type NavItem =
  | "Inicio"
  | "Facturación"
  | "Inventario"
  | "Clientes"
  | "Reportes"
  | "Configuración";

const navItems: { label: NavItem; icon: typeof Home }[] = [
  { label: "Inicio", icon: Home },
  { label: "Facturación", icon: FileText },
  { label: "Inventario", icon: Package },
  { label: "Clientes", icon: Users },
  { label: "Reportes", icon: BarChart3 },
  { label: "Configuración", icon: Settings },
];

interface AppChromeProps {
  activeItem: NavItem;
  children: React.ReactNode;
  className?: string;
  showSidebar?: boolean;
}

export default function AppChrome({
  activeItem,
  children,
  className = "",
  showSidebar = true,
}: AppChromeProps) {
  return (
    <div
      className={`flex h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 font-[Inter,sans-serif] shadow-lg ${className}`}
    >
      {/* Sidebar */}
      {showSidebar && (
        <aside className="hidden w-56 shrink-0 flex-col border-r border-gray-200 bg-white sm:flex">
          {/* Logo */}
          <div className="flex items-center gap-2.5 px-5 py-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3F1C66] to-[#B12166] text-sm font-bold text-white">
              L
            </div>
            <span className="text-base font-semibold text-[#3F1C66]">
              Libris
            </span>
          </div>

          {/* Nav */}
          <nav className="mt-2 flex flex-1 flex-col gap-0.5 px-3">
            {navItems.map(({ label, icon: Icon }) => {
              const isActive = label === activeItem;
              return (
                <div
                  key={label}
                  className={`relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-[#FAF8FC] font-medium text-[#3F1C66]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-[#B12166]" />
                  )}
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </div>
              );
            })}
          </nav>

          {/* Bottom spacer */}
          <div className="p-4" />
        </aside>
      )}

      {/* Main column */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-5">
          {/* Search */}
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
            <span className="text-sm text-gray-400">
              Buscar factura, cliente, producto&hellip;
            </span>
          </div>

          {/* Bell */}
          <div className="relative">
            <Bell className="h-5 w-5 text-gray-400" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#B12166]" />
          </div>

          {/* Avatar + company */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3F1C66] text-xs font-semibold text-white">
              CN
            </div>
            <span className="hidden text-sm text-gray-600 md:inline">
              Comercializadora del Norte
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-5">{children}</main>
      </div>
    </div>
  );
}

export type { NavItem };
