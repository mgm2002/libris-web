import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { SocialProof } from "@/components/sections/social-proof"
import { Features } from "@/components/sections/features"
import { Solutions } from "@/components/sections/solutions"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { Pricing } from "@/components/sections/pricing"
import { TrustStats } from "@/components/sections/trust-stats"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Navbar heroVariant="light" />
      <Hero />
      <SocialProof />
      <Features />
      <Solutions />
      <ProductShowcase />
      <Pricing />
      <TrustStats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
