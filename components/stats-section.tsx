import { type LucideIcon, Clock, Zap, Cpu, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

type StatItem = {
  icon: LucideIcon
  value: string
  label: string
  valueClassName?: string
  labelClassName?: string
}

const stats: StatItem[] = [
  {
    icon: Clock,
    value: "40+ anos",
    label: "Experiência comprovada por mais de 40 anos de mercado",
  },
  {
    icon: Zap,
    value: "Soluções e respostas rápidas",
    label: "Os donos no dia a dia da operação",
    valueClassName: "text-lg sm:text-xl lg:text-2xl",
  },
  {
    icon: Cpu,
    value: "100%",
    label: "Tecnologia de Ponta",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Suporte Dedicado",
  },
]

export function StatsSection() {
  return (
    <section className="py-12 lg:py-16 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-2">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-primary/20 mb-4">
                <stat.icon className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
              </div>
              <div
                className={cn(
                  "font-bold text-background mb-2 leading-snug text-balance text-xl sm:text-2xl lg:text-3xl",
                  stat.valueClassName
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-background/70 text-pretty text-sm lg:text-base",
                  stat.labelClassName
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
