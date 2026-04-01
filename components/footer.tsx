import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img
              src="/images/logo-staland.png"
              alt="Staland Estacionamentos"
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Especialistas em gestão de estacionamentos para o sector empresarial. Maximizamos
              receitas com segurança e tecnologia.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contatos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@staland.pt"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  info@staland.pt
                </a>
              </li>
              <li>
                <a
                  href="tel:+351912345678"
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +351 912 345 678
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Termos e Condições
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/sindepark-logo.png"
              alt="SINDEPARK - Sindicato das Empresas de Garagens e Estacionamentos do Estado de São Paulo"
              className="h-12 w-auto"
            />
          </div>
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Staland Estacionamentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
