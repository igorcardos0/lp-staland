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
    <section className="py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 text-balance">
          Pronto para rentabilizar o seu espaço com segurança?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
          Descubra como podemos aumentar a receita do seu estacionamento e garantir a máxima
          segurança para os seus clientes.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-background hover:bg-background/90 text-primary font-semibold h-12 px-8 text-base"
        >
          Quero uma avaliação do meu estacionamento
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
