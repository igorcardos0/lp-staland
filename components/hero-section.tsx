"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2 } from "lucide-react"

export function HeroSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    router.push("/obrigado")
  }

  return (
    <section className="relative flex min-h-dvh flex-col bg-background pt-24 lg:pt-28">
      <div className="flex flex-1 flex-col justify-center py-10 lg:py-14">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-balance">
                  Gestão Inteligente e Rentável para o seu{" "}
                  <span className="text-primary">Estacionamento</span>
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                  Maximize a receita do seu espaço com segurança total e tecnologia de ponta.
                  Soluções completas para edifícios corporativos, hospitais, condomínios residenciais,
                  centros médicos, shopping centers, centros comerciais e terrenos para incorporação.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Aumento na receita do seu estacionamento",
                  "Segurança 24/7 com monitorização em tempo real",
                  "Tecnologia de totens e cancelas automáticas",
                  "Gestão transparente com relatórios detalhados",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:sticky lg:top-28" id="contato">
              <Card className="shadow-xl border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl lg:text-2xl text-card-foreground text-center">
                    Solicite uma Proposta Gratuita
                  </CardTitle>
                  <p className="text-sm text-muted-foreground text-center">
                    Preencha o formulário e entraremos em contato em até 24 horas
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-card-foreground">Nome</Label>
                      <Input
                        id="nome"
                        placeholder="O seu nome"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-card-foreground">Empresa</Label>
                      <Input
                        id="empresa"
                        placeholder="Nome da empresa"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-card-foreground">Telefone</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="+351 XXX XXX XXX"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-card-foreground">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@empresa.pt"
                        required
                        className="bg-background"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          A enviar...
                        </>
                      ) : (
                        "Solicitar Proposta Gratuita"
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, concorda com a nossa política de privacidade.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
