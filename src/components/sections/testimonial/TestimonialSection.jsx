import { AuthorProfile } from "./AuthorProfile"
import { QuoteBlock } from "./QuoteBlock"
import { StatsPanel } from "./StatsPanel"

export function TestimonialSection() {
  return (
    <section id="customers" className="bg-white py-24">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <QuoteBlock />

        <div className="mt-14">
          <AuthorProfile />
        </div>

        <div className="mt-20">
          <StatsPanel />
        </div>
      </div>
    </section>
  )
}