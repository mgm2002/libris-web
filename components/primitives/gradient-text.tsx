import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: "span" | "p" | "h1" | "h2" | "h3"
}

export function GradientText({ children, className, as: Tag = "span" }: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-br from-[#3F1C66] to-[#B12166] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Tag>
  )
}
