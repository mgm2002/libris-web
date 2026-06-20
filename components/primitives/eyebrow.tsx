import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  onDark?: boolean
}

export function Eyebrow({ children, className, onDark = false }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block text-[13px] font-semibold uppercase tracking-[0.08em] mb-4",
        onDark ? "text-brand-accent" : "text-brand-accent",
        className
      )}
    >
      {children}
    </span>
  )
}
