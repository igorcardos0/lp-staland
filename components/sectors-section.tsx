"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Stethoscope, Home, ShoppingBag, LandPlot } from "lucide-react"
import { cn } from "@/lib/utils"

const sectors = [
  {
    id: "corporativos",
    icon: Building2,
    title: "Edifícios Corporativos",
    description:
      "Planejamento prévio, análise e diagnóstico técnico, definição da tecnologia adequada, alinhamento comercial, contratos objetivos, e finalmente treinamento e integração da equipe. Roteiro para o sucesso de uma nova operação.",
  },
  {
    id: "hospitais",
    icon: Stethoscope,
    title: "Hospitais, Clínicas e Centros Médicos",
    description:
      "Fluxos ágeis, reduzindo filas e tempo de espera na entrada, pagamento e saída. Equipes treinadas para atender situações muitas vezes estressantes.",
  },
  {
    id: "condominios",
    icon: Home,
    title: "Condomínios Residenciais",
    description:
      "Administração profissional de garagens condominiais. Controle de acesso por residência e gestão de vagas de visitantes.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Shopping Centers",
    description:
      "Maximização de receitas para shoppings e centros comerciais. Convênios vantajosos para lojistas, tarifas dinâmicas e sistemas de orientação de vagas.",
  },
  {
    id: "terrenos",
    icon: LandPlot,
    title: "Terrenos para Incorporação",
    description:
      "Se o projeto ainda está em fase de aprovação junto aos órgãos responsáveis, obtenha receita extra com investimento zero e proteção para o imóvel contra invasões e outros riscos.",
  },
]

export function SectorsSection() {
  const [activeTab, setActiveTab] = useState("corporativos")
  const activeSector = sectors.find((s) => s.id === activeTab)

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-1">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Soluções por setores
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Utilizamos a nossa experiência acumulada, aliada as mais modernas técnicas de gestão, para garantir os melhores resultados a cada tipo de operação.
          </p>
        </div>

        {/* Tab Buttons — centralizados; rolagem horizontal em telas muito estreitas */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12 max-w-full">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              type="button"
              onClick={() => setActiveTab(sector.id)}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 touch-manipulation",
                activeTab === sector.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-card-foreground hover:bg-card/80 border border-border active:scale-[0.98]"
              )}
            >
              <sector.icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{sector.title}</span>
              <span className="sm:hidden">
                {sector.id === "shopping"
                  ? "Shoppings"
                  : sector.id === "terrenos"
                    ? "Terrenos"
                    : sector.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Sector Content */}
        {activeSector && (
          <Card className="max-w-3xl mx-auto border-border">
            <CardContent className="p-5 sm:p-6 lg:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <activeSector.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-4">
                  {activeSector.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {activeSector.description}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}
