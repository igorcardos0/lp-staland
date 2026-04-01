import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obrigado | Staland Estacionamentos",
  description: "Recebemos o seu pedido.",
}

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
