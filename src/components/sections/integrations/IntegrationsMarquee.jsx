import MarqueePackage from "react-fast-marquee"

import { integrationRows } from "@/constants/integration"
import { IntegrationLogoCard } from "./IntegrationLogoCard"

const Marquee =
  MarqueePackage?.default || MarqueePackage?.Marquee || MarqueePackage

export function IntegrationsMarquee() {
  return (
    <div className="relative mt-12 overflow-hidden pb-16 pt-3 md:mt-14 md:pb-20 lg:mt-[62px] lg:pb-[72px]">
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-primary to-transparent md:w-24 lg:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-primary to-transparent md:w-24 lg:w-28" />

      <div className="-translate-x-6 md:-translate-x-8 lg:-translate-x-10">
        <Marquee
          autoFill
          speed={34}
          pauseOnHover
          gradient={false}
          className="py-4"
        >
          {integrationRows[0].map((item) => (
            <IntegrationLogoCard key={item.name} item={item} />
          ))}
        </Marquee>
      </div>

      <div className="mt-5 translate-x-6 md:mt-7 md:translate-x-8 lg:mt-0 lg:translate-x-12">
        <Marquee
          autoFill
          speed={30}
          direction="right"
          pauseOnHover
          gradient={false}
          className="py-4"
        >
          {integrationRows[1].map((item) => (
            <IntegrationLogoCard key={item.name} item={item} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}