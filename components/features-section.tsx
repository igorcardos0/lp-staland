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
    <section id="vantagens" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Porquê escolher a Staland?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Combinamos experiência, tecnologia e dedicação para oferecer a melhor gestão de
            estacionamentos do mercado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-colors duration-300 h-full"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
