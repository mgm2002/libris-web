import { Minus, Plus, Receipt, CreditCard, Store } from "lucide-react";

const catalog = [
  { name: "Café americano", price: "$45" },
  { name: "Croissant", price: "$38" },
  { name: "Latte", price: "$55" },
  { name: "Jugo verde", price: "$42" },
  { name: "Panini jamón", price: "$68" },
  { name: "Galleta choco", price: "$25" },
];

const ticketItems = [
  { name: "Café americano", qty: 2, subtotal: "$90" },
  { name: "Croissant", qty: 1, subtotal: "$38" },
  { name: "Latte", qty: 1, subtotal: "$55" },
];

export function PosMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 font-[Inter,sans-serif] shadow-lg ${className}`}
    >
      {/* Left: product grid */}
      <div className="flex flex-1 flex-col overflow-auto p-5">
        {/* POS header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3F1C66] to-[#B12166] text-sm font-bold text-white">
            L
          </div>
          <span className="text-base font-semibold text-[#3F1C66]">
            Punto de venta
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {catalog.map((item) => (
            <button
              key={item.name}
              type="button"
              className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              {/* placeholder product icon area */}
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF8FC] text-[#3F1C66]">
                <Store className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                {item.name}
              </span>
              <span className="mt-0.5 text-xs font-semibold text-[#B12166]">
                {item.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: ticket */}
      <div className="flex w-72 shrink-0 flex-col border-l border-gray-200 bg-white">
        {/* Ticket header */}
        <div className="border-b border-gray-100 px-4 py-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Ticket en curso
          </h3>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-auto px-4 py-3">
          {ticketItems.map((item) => (
            <div
              key={item.name}
              className="mb-3 flex items-center justify-between"
            >
              <div className="flex-1">
                <p className="text-sm text-gray-800">{item.name}</p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-gray-100 text-gray-500">
                    <Minus className="h-3 w-3" />
                  </span>
                  <span className="min-w-[1.25rem] text-center text-xs font-medium text-gray-700">
                    {item.qty}
                  </span>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-gray-100 text-gray-500">
                    <Plus className="h-3 w-3" />
                  </span>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-800">
                {item.subtotal}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="border-t border-gray-200 px-4 py-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-gray-500">Total</span>
            <span className="text-2xl font-bold text-gray-900">$183</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 px-4 pb-3">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#3F1C66] to-[#B12166] py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            <CreditCard className="h-4 w-4" />
            Cobrar
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-600"
          >
            <Receipt className="h-4 w-4" />
            Facturar
          </button>
        </div>

        {/* Shift info */}
        <div className="border-t border-gray-100 px-4 py-2.5">
          <p className="text-center text-[11px] text-gray-400">
            Turno abierto &middot; Caja 1 &middot; $4,230 en ventas
          </p>
        </div>
      </div>
    </div>
  );
}
