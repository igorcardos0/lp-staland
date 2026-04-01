"use client"

import { Suspense, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"

function getWhatsappUrl(): string | null {
  const direct = process.env.NEXT_PUBLIC_WHATSAPP_URL
  if (direct?.startsWith("http")) return direct
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "")
  if (phone && phone.length >= 8) return `https://wa.me/${phone}`
  return null
}

function ObrigadoInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const goWhatsapp = searchParams.get("destino") === "whatsapp"

  const [seconds, setSeconds] = useState(4)

  useEffect(() => {
    if (seconds > 0) {
      const t = window.setTimeout(() => setSeconds((s) => s - 1), 1000)
      return () => window.clearTimeout(t)
    }

    const wa = getWhatsappUrl()
    if (goWhatsapp && wa) {
      window.location.href = wa
      return
    }
    router.replace("/")
  }, [seconds, goWhatsapp, router])

  const subtitle = goWhatsapp
    ? "A abrir o WhatsApp para falar com um consultor…"
    : "A voltar à página inicial…"

  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center bg-background px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md w-full text-center space-y-5 sm:space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground text-balance">Obrigado!</h1>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-pretty">
          Recebemos o seu pedido. A nossa equipa entrará em contacto consigo em breve.
        </p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold tabular-nums text-foreground">{Math.max(0, seconds)}</span>s
        </p>
      </div>
    </main>
  )
}

export default function ObrigadoPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-dvh flex items-center justify-center bg-background">
          <p className="text-muted-foreground">A carregar…</p>
        </main>
      }
    >
      <ObrigadoInner />
    </Suspense>
  )
}
