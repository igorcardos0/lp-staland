import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 bg-foreground pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-8 text-center md:text-left">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/logo-staland.png"
              alt="Staland Estacionamentos"
              className="h-16 sm:h-20 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-background/70 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Especialistas em gestão de estacionamentos para o sector empresarial. Maximizamos
              receitas com segurança e tecnologia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-background mb-4">Contatos</h4>
            <ul className="space-y-3 w-full max-w-xs mx-auto md:mx-0 md:max-w-none">
              <li>
                <a
                  href="mailto:info@staland.pt"
                  className="flex items-center justify-center md:justify-start gap-2 min-h-10 text-background/70 hover:text-background transition-colors text-sm touch-manipulation py-1"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@staland.pt
                </a>
              </li>
              <li>
                <a
                  href="tel:+351912345678"
                  className="flex items-center justify-center md:justify-start gap-2 min-h-10 text-background/70 hover:text-background transition-colors text-sm touch-manipulation py-1"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +351 912 345 678
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2 w-full max-w-xs mx-auto md:mx-0">
              <li>
                <a
                  href="#"
                  className="inline-flex min-h-10 items-center justify-center md:justify-start text-background/70 hover:text-background transition-colors text-sm touch-manipulation py-1 w-full md:w-auto"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex min-h-10 items-center justify-center md:justify-start text-background/70 hover:text-background transition-colors text-sm touch-manipulation py-1 w-full md:w-auto"
                >
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between text-center sm:text-left">
          <div className="flex items-center justify-center">
            <img
              src="/images/sindepark-logo.png"
              alt="SINDEPARK - Sindicato das Empresas de Garagens e Estacionamentos do Estado de São Paulo"
              className="h-10 sm:h-12 w-auto max-w-[min(100%,280px)] object-contain"
            />
          </div>
          <p className="text-background/50 text-xs sm:text-sm max-w-md">
            © {new Date().getFullYear()} Staland Estacionamentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
