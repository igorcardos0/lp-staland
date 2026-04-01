"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const faleComConsultor = () => {
    setMobileMenuOpen(false)
    router.push("/obrigado?destino=whatsapp")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
        <div className="flex items-center justify-between min-h-[4.25rem] h-20 lg:h-24">
          {/* Logo — tamanho moderado no mobile para caber com o menu */}
          <div className="flex-shrink-0 min-w-0">
            <img
              src="/images/logo-staland.png"
              alt="Staland Estacionamentos"
              className="h-[4.5rem] sm:h-24 md:h-28 lg:h-36 w-auto max-w-[min(100%,200px)] sm:max-w-none object-contain object-left"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("vantagens")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Vantagens
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={faleComConsultor}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Fale com um Consultor
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground inline-flex h-11 w-11 items-center justify-center rounded-md touch-manipulation active:bg-muted/80"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border pb-[max(1rem,env(safe-area-inset-bottom))]">
            <nav className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => scrollToSection("servicos")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-3 min-h-11 touch-manipulation rounded-md px-1 -mx-1 hover:bg-muted/60"
              >
                Serviços
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("vantagens")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-3 min-h-11 touch-manipulation rounded-md px-1 -mx-1 hover:bg-muted/60"
              >
                Vantagens
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-3 min-h-11 touch-manipulation rounded-md px-1 -mx-1 hover:bg-muted/60"
              >
                Contato
              </button>
              <Button
                type="button"
                onClick={faleComConsultor}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full mt-3 min-h-11 touch-manipulation"
              >
                Fale com um Consultor
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
