"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

/** Galeria com imagens em public/images/gallery — substituir pelas fotos oficiais quando disponível. */
const photos = [
  { src: "/images/gallery/photo-1.jpg", alt: "Estacionamento — imagem ilustrativa para mídia" },
  { src: "/images/gallery/photo-2.jpg", alt: "Controle de acesso — imagem ilustrativa" },
  { src: "/images/gallery/photo-3.jpg", alt: "Estacionamento urbano — imagem ilustrativa" },
  { src: "/images/gallery/photo-4.jpg", alt: "Vagas — imagem ilustrativa" },
  { src: "/images/gallery/photo-5.jpg", alt: "Operação de parque — imagem ilustrativa" },
  { src: "/images/gallery/photo-6.jpg", alt: "Infraestrutura — imagem ilustrativa" },
]

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-1"
        >
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Galeria
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pré-visualização de como as fotos reais podem aparecer no site e em campanhas. As
            imagens abaixo são ilustrativas e devem ser trocadas pelo arquivo final da equipa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-lg cursor-pointer group touch-manipulation sm:max-w-none"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  openLightbox(index)
                }
              }}
              aria-label={`Abrir foto ${index + 1}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  Ver foto
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]"
          onClick={closeLightbox}
          role="presentation"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] inline-flex h-11 w-11 items-center justify-center rounded-md text-background hover:bg-background/10 transition-colors touch-manipulation"
            aria-label="Fechar"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-[max(0.75rem,env(safe-area-inset-left))] top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-md text-background hover:bg-background/10 touch-manipulation"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-9 h-9 sm:w-10 sm:h-10" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-[max(0.75rem,env(safe-area-inset-right))] top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-md text-background hover:bg-background/10 touch-manipulation"
            aria-label="Próxima"
          >
            <ChevronRight className="w-9 h-9 sm:w-10 sm:h-10" />
          </button>

          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
