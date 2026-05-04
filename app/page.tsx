import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Features } from "@/components/features"
import { Solutions } from "@/components/solutions"
import { ProductShowcase } from "@/components/product-showcase"
import { Pricing } from "@/components/pricing"
import { TrustStats } from "@/components/trust-stats"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
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
