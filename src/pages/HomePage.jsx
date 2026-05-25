import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { IntegrationsSection } from "@/components/sections/integrations/IntegrationsSection"
import { TestimonialSection } from "@/components/sections/testimonial/TestimonialSection"
import { CTASection } from "@/components/sections/cta/CTASection"

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}