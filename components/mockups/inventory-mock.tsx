import {
  Search,
  Plus,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import AppChrome from "./app-chrome";

const products = [
  {
    name: "Playera algodón M",
    sku: "SKU-0231",
    warehouse: "Almacén Centro",
    stock: 124,
    threshold: 20,
    status: "OK",
    statusColor: "bg-emerald-50 text-[#16A085]",
    highlight: false,
  },
  {
    name: "Botella 750ml",
    sku: "SKU-0118",
    warehouse: "Almacén Centro",
    stock: 6,
    threshold: 15,
    status: "Stock bajo",
    statusColor: "bg-amber-50 text-[#E0A82E]",
    highlight: true,
  },
  {
    name: "Caja regalo",
    sku: "SKU-0450",
    warehouse: "Almacén Norte",
    stock: 88,
    threshold: 10,
    status: "OK",
    statusColor: "bg-emerald-50 text-[#16A085]",
    highlight: false,
  },
];

export function InventoryMock({ className = "" }: { className?: string }) {
  return (
    <AppChrome activeItem="Inventario" className={className}>
      {/* Top bar */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5">
          <Search className="h-4 w-4 shrink-0 text-gray-400" />
          <span className="text-sm text-gray-400">Buscar producto&hellip;</span>
        </div>

        {/* Filter */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600"
        >
          Almacén
          <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
        </button>

        {/* New product */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#3F1C66] to-[#B12166] px-4 py-1.5 text-sm font-semibold text-white shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Nuevo producto
        </button>
      </div>

      {/* Low-stock pill */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-[#E0A82E]">
          <AlertTriangle className="h-3.5 w-3.5" />
          3 productos por agotarse
        </span>
      </div>

      {/* Product table */}
      <div className="rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-gray-400">
              <th className="px-5 py-2.5 font-medium">Producto</th>
              <th className="px-5 py-2.5 font-medium">SKU</th>
              <th className="px-5 py-2.5 font-medium">Almacén</th>
              <th className="px-5 py-2.5 font-medium text-right">Existencia</th>
              <th className="px-5 py-2.5 font-medium text-right">Umbral</th>
              <th className="px-5 py-2.5 font-medium text-right">Estatus</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.sku}
                className={`border-b border-gray-50 last:border-0 ${
                  p.highlight ? "bg-amber-50/40" : ""
                }`}
              >
                <td className="px-5 py-2.5 font-medium text-gray-800">
                  {p.name}
                </td>
                <td className="px-5 py-2.5 font-mono text-xs text-gray-500">
                  {p.sku}
                </td>
                <td className="px-5 py-2.5 text-gray-600">{p.warehouse}</td>
                <td className="px-5 py-2.5 text-right text-gray-800">
                  {p.stock}
                </td>
                <td className="px-5 py-2.5 text-right text-gray-500">
                  {p.threshold}
                </td>
                <td className="px-5 py-2.5 text-right">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${p.statusColor}`}
                  >
                    {p.highlight && (
                      <AlertTriangle className="h-3 w-3" />
                    )}
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppChrome>
  );
}

export default InventoryMock;
