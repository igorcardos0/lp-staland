"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 text-balance px-1">
          Pronto para tornar seu espaço mais rentável com segurança?
        </h2>
        <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty">
          Descubra como podemos aumentar a receita do seu estacionamento e garantir máxima
          segurança para os seus clientes.
        </p>
        <Button
          type="button"
          onClick={scrollToContact}
          size="lg"
          className="w-full max-w-md mx-auto sm:w-auto sm:max-w-none bg-background hover:bg-background/90 text-primary font-semibold min-h-12 h-auto py-3 px-6 sm:px-8 text-sm sm:text-base touch-manipulation flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-center leading-snug">
            Quero uma avaliação do meu estacionamento
          </span>
          <ArrowRight className="h-5 w-5 shrink-0" />
        </Button>
      </div>
    </section>
  )
}
