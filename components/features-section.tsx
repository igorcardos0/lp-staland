import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Settings, BarChart3 } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Maximização de Receitas",
    description:
      "Estratégias comprovadas para aumentar a rentabilidade do seu estacionamento com preços dinâmicos e gestão eficiente.",
  },
  {
    icon: Shield,
    title: "Segurança e Seguros",
    description:
      "Cobertura completa com seguros abrangentes e sistemas de segurança avançados para proteger o seu património.",
  },
  {
    icon: Settings,
    title: "Tecnologia Automotiva",
    description:
      "Totens de pagamento automático, cancelas inteligentes e sistemas de controlo de acesso de última geração.",
  },
  {
    icon: BarChart3,
    title: "Gestão Transparente",
    description:
      "Relatórios detalhados em tempo real e total transparência nas operações.",
  },
]

export function FeaturesSection() {
  return (
    <section id="vantagens" className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-1">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Porquê escolher a Staland?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Combinamos experiência, tecnologia e dedicação para oferecer a melhor gestão de
            estacionamentos do mercado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-colors duration-300 h-full text-center sm:text-left"
            >
              <CardHeader className="items-center sm:items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg text-card-foreground text-balance">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
