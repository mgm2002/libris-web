import { ArrowUpRight } from "lucide-react";
import AppChrome from "./app-chrome";

const kpis = [
  {
    label: "Total facturado este mes",
    value: "$487,320 MXN",
    change: "12%",
    changeColor: "text-[#16A085]",
    icon: true,
  },
  {
    label: "CFDIs timbrados",
    value: "142",
    change: null,
    changeColor: "",
    icon: false,
  },
  {
    label: "Productos activos",
    value: "89",
    change: null,
    changeColor: "",
    icon: false,
  },
  {
    label: "Clientes nuevos",
    value: "7",
    change: null,
    changeColor: "",
    icon: false,
  },
];

const invoices = [
  {
    id: "F-1042",
    client: "Comercializadora del Norte",
    amount: "$12,400",
    status: "Timbrada",
    color: "bg-emerald-50 text-[#16A085]",
  },
  {
    id: "F-1041",
    client: "Servicios Aguilar",
    amount: "$3,180",
    status: "Timbrada",
    color: "bg-emerald-50 text-[#16A085]",
  },
  {
    id: "F-1040",
    client: "Boutique Lila",
    amount: "$890",
    status: "Pendiente",
    color: "bg-amber-50 text-[#E0A82E]",
  },
  {
    id: "F-1039",
    client: "Distribuidora MX",
    amount: "$45,600",
    status: "Timbrada",
    color: "bg-emerald-50 text-[#16A085]",
  },
  {
    id: "F-1038",
    client: "Tacos El Güero",
    amount: "$1,250",
    status: "Timbrada",
    color: "bg-emerald-50 text-[#16A085]",
  },
];

/* SVG chart data — 30 points representing daily revenue */
const chartPoints = [
  12, 15, 14, 18, 22, 20, 25, 23, 28, 26, 30, 27, 32, 35, 33, 38, 36, 40, 37,
  42, 45, 43, 48, 46, 50, 47, 52, 55, 53, 58,
];
const chartW = 600;
const chartH = 160;
const maxVal = Math.max(...chartPoints);
const toX = (i: number) => (i / (chartPoints.length - 1)) * chartW;
const toY = (v: number) => chartH - (v / maxVal) * (chartH - 16);
const linePoints = chartPoints.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
const areaPoints = `0,${chartH} ${linePoints} ${chartW},${chartH}`;

const xLabels = ["1 Jun", "8 Jun", "15 Jun", "22 Jun", "30 Jun"];

export function DashboardMock({ className = "" }: { className?: string }) {
  return (
    <AppChrome activeItem="Inicio" className={className}>
      {/* KPI cards */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <p className="text-xs text-gray-500">{kpi.label}</p>
            <p className="mt-1 text-xl font-semibold text-gray-900">
              {kpi.value}
            </p>
            {kpi.change && (
              <span
                className={`mt-1 inline-flex items-center gap-0.5 text-xs font-medium ${kpi.changeColor}`}
              >
                <ArrowUpRight className="h-3 w-3" />
                {kpi.change}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Revenue chart */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">
          Ingresos &mdash; Últimos 30 días
        </h3>
        <svg
          viewBox={`0 0 ${chartW} ${chartH + 28}`}
          className="w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3F1C66" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#B12166" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <polygon points={areaPoints} fill="url(#chartGrad)" />
          {/* Line */}
          <polyline
            points={linePoints}
            fill="none"
            stroke="#B12166"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* X-axis labels */}
          {xLabels.map((label, i) => (
            <text
              key={label}
              x={(i / (xLabels.length - 1)) * chartW}
              y={chartH + 20}
              textAnchor="middle"
              className="fill-gray-400 text-[10px]"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Recent invoices table */}
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-5 py-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Últimas facturas
          </h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-gray-400">
              <th className="px-5 py-2 font-medium">Folio</th>
              <th className="px-5 py-2 font-medium">Cliente</th>
              <th className="px-5 py-2 font-medium text-right">Monto</th>
              <th className="px-5 py-2 font-medium text-right">Estatus</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr
                key={inv.id}
                className="border-b border-gray-50 last:border-0"
              >
                <td className="px-5 py-2.5 font-medium text-gray-800">
                  {inv.id}
                </td>
                <td className="px-5 py-2.5 text-gray-600">{inv.client}</td>
                <td className="px-5 py-2.5 text-right text-gray-800">
                  {inv.amount}
                </td>
                <td className="px-5 py-2.5 text-right">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${inv.color}`}
                  >
                    {inv.status}
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

export default DashboardMock;
