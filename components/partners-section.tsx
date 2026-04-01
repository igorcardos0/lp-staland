"use client"

import { motion } from "framer-motion"

/** Parceiros com logotipos em /public/images/partners */
const partners: { name: string; logo: string }[] = [
  { name: "Bem Barato", logo: "/images/partners/bem_barato.png" },
  { name: "Bradesco", logo: "/images/partners/bradesco.png" },
  { name: "Carrefour", logo: "/images/partners/carrefour.png" },
  { name: "Cushman & Wakefield", logo: "/images/partners/cushman-wakefield.png" },
  { name: "Deiclog", logo: "/images/partners/deiclog.png" },
  { name: "Extra", logo: "/images/partners/extra.png" },
  { name: "Grupo Doria", logo: "/images/partners/doria.png" },
  { name: "Lira Tênis Clube", logo: "/images/partners/lira-tenis.png" },
  { name: "Pernambucanas", logo: "/images/partners/pernambucanas.png" },
  { name: "San José", logo: "/images/partners/san-jose.jpeg" },
  { name: "Tecnolab", logo: "/images/partners/tecnolab.png" },
]

export function PartnersSection() {
  return (
    <section id="parceiros" className="py-12 sm:py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-1"
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Empresas que confiam em nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Parceiros que escolheram a Staland para gerir os seus estacionamentos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex min-h-[5.5rem] w-full max-w-[240px] items-center justify-center rounded-xl border border-border bg-card p-4 sm:p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-full max-w-[200px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 sm:mt-12 px-2"
        >
          <a
            href="#contato"
            className="inline-flex min-h-11 w-full max-w-md items-center justify-center gap-2 px-5 py-3 sm:w-auto sm:max-w-none sm:px-6 text-center text-sm sm:text-base bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors touch-manipulation active:scale-[0.99]"
          >
            E muitos outros parceiros em todo o país
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
