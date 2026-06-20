import { CheckCircle2 } from "lucide-react";
import AppChrome from "./app-chrome";

const conceptos = [
  {
    descripcion: "Consultoría administrativa",
    clave: "84111506",
    cantidad: 1,
    precio: "$8,000.00",
    importe: "$8,000.00",
  },
  {
    descripcion: "Soporte mensual",
    clave: "81111500",
    cantidad: 1,
    precio: "$2,500.00",
    importe: "$2,500.00",
  },
];

function FieldRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-gray-500">
        {label}
      </label>
      <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800">
        {value}
      </div>
    </div>
  );
}

export function InvoiceMock({ className = "" }: { className?: string }) {
  return (
    <AppChrome activeItem="Facturación" className={className}>
      {/* Page heading */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Nueva factura
          </h2>
          <p className="text-xs text-gray-400">CFDI 4.0</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-[#16A085]">
          <CheckCircle2 className="h-3.5 w-3.5" />
          CFDI timbrado
        </span>
      </div>

      {/* Form fields */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FieldRow
            label="Cliente"
            value="Servicios Aguilar S.A. de C.V. · RFC: SAG120318ABC"
          />
        </div>
        <FieldRow label="Uso de CFDI" value="G03 - Gastos en general" />
        <FieldRow label="Forma de pago" value="03 - Transferencia" />
        <FieldRow label="Método de pago" value="PUE" />
      </div>

      {/* Conceptos */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-5 py-3">
          <h3 className="text-sm font-semibold text-gray-700">Conceptos</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-gray-400">
              <th className="px-5 py-2 font-medium">Descripción</th>
              <th className="px-5 py-2 font-medium">ClaveProdServ</th>
              <th className="px-5 py-2 font-medium text-center">Cant.</th>
              <th className="px-5 py-2 font-medium text-right">P. Unitario</th>
              <th className="px-5 py-2 font-medium text-right">Importe</th>
            </tr>
          </thead>
          <tbody>
            {conceptos.map((c) => (
              <tr
                key={c.clave}
                className="border-b border-gray-50 last:border-0"
              >
                <td className="px-5 py-2.5 text-gray-800">{c.descripcion}</td>
                <td className="px-5 py-2.5 font-mono text-xs text-gray-500">
                  {c.clave}
                </td>
                <td className="px-5 py-2.5 text-center text-gray-700">
                  {c.cantidad}
                </td>
                <td className="px-5 py-2.5 text-right text-gray-700">
                  {c.precio}
                </td>
                <td className="px-5 py-2.5 text-right font-medium text-gray-800">
                  {c.importe}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals + action */}
      <div className="flex flex-col items-end gap-4">
        <div className="w-full max-w-xs space-y-1.5 text-sm">
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span className="text-gray-800">$10,500.00</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>IVA 16%</span>
            <span className="text-gray-800">$1,680.00</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold text-gray-900">
            <span>Total</span>
            <span>$12,180.00 MXN</span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3F1C66] to-[#B12166] px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
        >
          Timbrar y enviar
        </button>
      </div>
    </AppChrome>
  );
}

export default InvoiceMock;
