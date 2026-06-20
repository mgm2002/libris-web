"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { GradientText } from "@/components/primitives/gradient-text"
import { Button } from "@/components/ui/button"
import { DOWNLOAD_URLS } from "@/lib/constants"
import {
  Download,
  Monitor,
  Apple,
  Terminal,
  HardDrive,
  Settings,
  Rocket,
  ArrowRight,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type OSKey = "windows" | "mac" | "linux"

interface PlatformInfo {
  key: OSKey
  label: string
  icon: React.ElementType
  requirements: string[]
}

const PLATFORMS: PlatformInfo[] = [
  {
    key: "windows",
    label: "Windows",
    icon: Monitor,
    requirements: [
      "Windows 10 o superior (64-bit)",
      "4 GB de RAM minimo",
      "500 MB de espacio en disco",
      ".NET 6 Runtime (incluido)",
    ],
  },
  {
    key: "mac",
    label: "macOS",
    icon: Apple,
    requirements: [
      "macOS 12 Monterey o superior",
      "4 GB de RAM minimo",
      "500 MB de espacio en disco",
      "Procesador Intel o Apple Silicon",
    ],
  },
  {
    key: "linux",
    label: "Linux",
    icon: Terminal,
    requirements: [
      "Ubuntu 22.04+, Fedora 38+ o Debian 12+",
      "4 GB de RAM minimo",
      "500 MB de espacio en disco",
      "glibc 2.31 o superior",
    ],
  },
]

const STEPS = [
  {
    icon: Download,
    title: "1. Descarga el instalador",
    description:
      "Haz clic en el boton de tu sistema operativo. El archivo pesa menos de 100 MB.",
  },
  {
    icon: Settings,
    title: "2. Ejecuta el instalador",
    description:
      "Abre el archivo descargado y sigue las instrucciones. No necesitas permisos de administrador.",
  },
  {
    icon: Rocket,
    title: "3. Inicia sesion y listo",
    description:
      "Abre Libris, inicia sesion con tu cuenta y empieza a trabajar. Tus datos se sincronizan automaticamente.",
  },
]

/* ------------------------------------------------------------------ */
/* OS detection                                                        */
/* ------------------------------------------------------------------ */

function detectOS(): OSKey {
  if (typeof navigator === "undefined") return "windows"
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes("mac")) return "mac"
  if (ua.includes("linux")) return "linux"
  return "windows"
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function DownloadContent() {
  const [detectedOS, setDetectedOS] = useState<OSKey>("windows")

  useEffect(() => {
    setDetectedOS(detectOS())
  }, [])

  const sorted = [...PLATFORMS].sort((a, b) => {
    if (a.key === detectedOS) return -1
    if (b.key === detectedOS) return 1
    return 0
  })

  return (
    <>
      {/* Download buttons */}
      <Section variant="base">
        <Reveal className="mx-auto max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {sorted.map((platform) => {
              const dl = DOWNLOAD_URLS[platform.key]
              const isCurrent = platform.key === detectedOS
              return (
                <a
                  key={platform.key}
                  href={dl.url}
                  className={cn(
                    "group relative flex flex-col items-center rounded-2xl border p-8 text-center transition-shadow hover:shadow-lg",
                    isCurrent
                      ? "border-2 border-[#B12166] shadow-md shadow-[#B12166]/10"
                      : "border-border-subtle bg-white"
                  )}
                >
                  {isCurrent && (
                    <span className="absolute -top-3 rounded-full bg-gradient-to-r from-[#3F1C66] to-[#B12166] px-3 py-1 text-[11px] font-semibold text-white">
                      Tu sistema
                    </span>
                  )}
                  <platform.icon className="mb-4 h-10 w-10 text-[#3F1C66]" />
                  <span className="text-lg font-bold text-text-primary">
                    {platform.label}
                  </span>
                  <span className="mt-1 text-xs text-text-muted">
                    v{dl.version} - {dl.size}
                  </span>
                  <Button
                    className="mt-5 w-full bg-gradient-to-r from-[#3F1C66] to-[#B12166] text-white hover:opacity-90"
                    size="lg"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar
                  </Button>
                </a>
              )
            })}
          </div>
        </Reveal>
      </Section>

      {/* System requirements */}
      <Section variant="subtle">
        <Reveal className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <Eyebrow>REQUISITOS</Eyebrow>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
              Requisitos del sistema
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.key}
                className="rounded-2xl border border-border-subtle bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F1C66]/10">
                    <platform.icon className="h-5 w-5 text-[#3F1C66]" />
                  </div>
                  <h3 className="font-bold text-text-primary">
                    {platform.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {platform.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <HardDrive className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-muted" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Installation steps */}
      <Section variant="base">
        <Reveal className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Eyebrow>INSTALACION</Eyebrow>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-text-primary sm:text-4xl">
              Listo en <GradientText>3 pasos</GradientText>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <Reveal key={step.title} delay={0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3F1C66] to-[#B12166] shadow-lg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Version info + browser CTA */}
      <Section variant="subtle" className="py-12 sm:py-16">
        <Reveal className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border-subtle bg-white p-8 text-center sm:flex-row sm:text-left">
            <Info className="h-8 w-8 shrink-0 text-[#3F1C66]" />
            <div className="flex-1">
              <p className="font-semibold text-text-primary">
                Version actual: {DOWNLOAD_URLS.windows.version}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Ultima actualizacion: {DOWNLOAD_URLS.windows.date}
              </p>
            </div>
            <Link
              href="#app"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#3F1C66] transition-colors hover:text-[#B12166]"
            >
              Prefieres usarlo en el navegador? Entra aqui
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
