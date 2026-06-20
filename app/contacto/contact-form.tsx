"use client"

import { useState, type FormEvent } from "react"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/primitives/reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/* Field state                                                         */
/* ------------------------------------------------------------------ */

interface FormState {
  nombre: string
  empresa: string
  correo: string
  telefono: string
  rfc: string
  motivo: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  correo?: string
  telefono?: string
  motivo?: string
  mensaje?: string
}

const INITIAL_STATE: FormState = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  rfc: "",
  motivo: "",
  mensaje: "",
}

/* ------------------------------------------------------------------ */
/* Validation                                                          */
/* ------------------------------------------------------------------ */

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!form.nombre.trim()) {
    errors.nombre = "Necesitamos tu nombre para saber con quien hablamos."
  }

  if (!form.correo.trim()) {
    errors.correo = "Sin correo no podemos responderte. Prometemos no hacer spam."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
    errors.correo = "Ese correo no se ve bien. Revisalo, por favor."
  }

  if (form.telefono && !/^[\d\s\-+()]{7,15}$/.test(form.telefono)) {
    errors.telefono = "El telefono no parece valido. Revisa los digitos."
  }

  if (!form.motivo) {
    errors.motivo = "Selecciona un motivo para que tu mensaje llegue al equipo correcto."
  }

  if (!form.mensaje.trim()) {
    errors.mensaje = "Cuentanos en que podemos ayudarte. Unas lineas bastan."
  } else if (form.mensaje.trim().length < 10) {
    errors.mensaje = "Danos un poco mas de contexto para poder ayudarte mejor."
  }

  return errors
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSending(true)
    // Simulate network request
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <Section variant="base">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Form */}
          <Reveal>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border-subtle bg-bg-subtle p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#3F1C66] to-[#B12166]">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">
                  Mensaje enviado
                </h2>
                <p className="mt-3 text-text-secondary max-w-md">
                  Recibimos tu mensaje. Nuestro equipo lo revisara y te
                  contactara en menos de 24 horas habiles. Revisa tu bandeja
                  de entrada (y la de spam, por si acaso).
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(INITIAL_STATE)
                  }}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre + Empresa */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="nombre">
                      Nombre <span className="text-[#B12166]">*</span>
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={(e) => update("nombre", e.target.value)}
                      className="mt-1.5"
                      aria-invalid={!!errors.nombre}
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-[#B12166]">
                        {errors.nombre}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      placeholder="Nombre de tu negocio"
                      value={form.empresa}
                      onChange={(e) => update("empresa", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                </div>

                {/* Correo + Telefono */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="correo">
                      Correo electronico <span className="text-[#B12166]">*</span>
                    </Label>
                    <Input
                      id="correo"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.correo}
                      onChange={(e) => update("correo", e.target.value)}
                      className="mt-1.5"
                      aria-invalid={!!errors.correo}
                    />
                    {errors.correo && (
                      <p className="mt-1 text-sm text-[#B12166]">
                        {errors.correo}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="telefono">Telefono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="55 1234 5678"
                      value={form.telefono}
                      onChange={(e) => update("telefono", e.target.value)}
                      className="mt-1.5"
                      aria-invalid={!!errors.telefono}
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-[#B12166]">
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                {/* RFC + Motivo */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="rfc">RFC (opcional)</Label>
                    <Input
                      id="rfc"
                      placeholder="XAXX010101000"
                      value={form.rfc}
                      onChange={(e) =>
                        update("rfc", e.target.value.toUpperCase())
                      }
                      className="mt-1.5 uppercase"
                      maxLength={13}
                    />
                  </div>
                  <div>
                    <Label>
                      Motivo <span className="text-[#B12166]">*</span>
                    </Label>
                    <Select
                      value={form.motivo}
                      onValueChange={(val) => update("motivo", val)}
                    >
                      <SelectTrigger className="mt-1.5" aria-invalid={!!errors.motivo}>
                        <SelectValue placeholder="Selecciona un motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ventas">Ventas / Demo</SelectItem>
                        <SelectItem value="soporte">Soporte tecnico</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.motivo && (
                      <p className="mt-1 text-sm text-[#B12166]">
                        {errors.motivo}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <Label htmlFor="mensaje">
                    Mensaje <span className="text-[#B12166]">*</span>
                  </Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Cuentanos como podemos ayudarte..."
                    value={form.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    className="mt-1.5 min-h-[120px]"
                    aria-invalid={!!errors.mensaje}
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-[#B12166]">
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-r from-[#3F1C66] to-[#B12166] text-white hover:opacity-90 sm:w-auto"
                  size="lg"
                >
                  {sending ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.15}>
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* Email */}
              <div className="rounded-2xl border border-border-subtle bg-bg-subtle p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F1C66]/10">
                  <Mail className="h-5 w-5 text-[#3F1C66]" />
                </div>
                <h3 className="font-bold text-text-primary">Correo</h3>
                <a
                  href="mailto:ventas@libris.mx"
                  className="mt-1 block text-sm text-[#B12166] hover:underline"
                >
                  ventas@libris.mx
                </a>
              </div>

              {/* Horario */}
              <div className="rounded-2xl border border-border-subtle bg-bg-subtle p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F1C66]/10">
                  <Clock className="h-5 w-5 text-[#3F1C66]" />
                </div>
                <h3 className="font-bold text-text-primary">Horario</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Lunes a viernes, 9:00 a 18:00 hrs (Centro)
                </p>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-border-subtle bg-bg-subtle p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F1C66]/10">
                  <MessageCircle className="h-5 w-5 text-[#3F1C66]" />
                </div>
                <h3 className="font-bold text-text-primary">
                  Tiempo de respuesta
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Respondemos en menos de 24 h
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
