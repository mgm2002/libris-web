import { cn } from "@/lib/utils"

type SectionVariant = "base" | "subtle" | "dark" | "gradient"

interface SectionProps {
  variant?: SectionVariant
  className?: string
  children: React.ReactNode
  id?: string
}

const variantStyles: Record<SectionVariant, string> = {
  base: "bg-bg-base",
  subtle: "bg-bg-subtle",
  dark: "bg-bg-dark text-text-on-dark",
  gradient: "bg-gradient-to-br from-[#3F1C66] to-[#B12166] text-white",
}

export function Section({ variant = "base", className, children, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28 lg:py-32 relative overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative">
        {children}
      </div>
    </section>
  )
}
