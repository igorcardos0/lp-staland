import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { SectorsSection } from "@/components/sectors-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SectorsSection />
      <PartnersSection />
      <CTASection />
      <GallerySection />
      <Footer />
    </main>
  )
}
