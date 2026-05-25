import MarqueePackage from "react-fast-marquee"

import hubspotLogo from "@/assets/icons/hubspot-logo.webp"
import dropboxLogo from "@/assets/icons/dropbox-logo.webp"
import squareLogo from "@/assets/icons/square-logo.webp"
import intercomLogo from "@/assets/icons/intercom-logo.webp"
import grammarlyLogo from "@/assets/icons/grammerly-logo.webp"

const Marquee =
  MarqueePackage?.default || MarqueePackage?.Marquee || MarqueePackage

const partners = [
  {
    name: "HubSpot",
    logo: hubspotLogo,
    className: "h-[26px] md:h-[28px]",
  },
  {
    name: "Dropbox",
    logo: dropboxLogo,
    className: "h-[24px] md:h-[26px]",
  },
  {
    name: "Square",
    logo: squareLogo,
    className: "h-[24px] md:h-[26px]",
  },
  {
    name: "INTERCOM",
    logo: intercomLogo,
    className: "h-[22px] md:h-[24px]",
  },
  {
    name: "grammarly",
    logo: grammarlyLogo,
    className: "h-[24px] md:h-[26px]",
  },
]

function PartnerLogo({ partner }) {
  return (
    <div className="mx-7 flex min-w-[130px] items-center justify-center md:mx-9 md:min-w-[150px]">
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        className={`${partner.className} w-auto object-contain opacity-65 mix-blend-multiply grayscale contrast-125 transition duration-300 hover:opacity-90`}
      />
    </div>
  )
}

export function HeroPartners() {
  return (
    <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-6 md:flex-row md:gap-10">
      <p className="shrink-0 text-center text-[15px] font-bold leading-5 text-primary md:max-w-[150px] md:text-left">
        More than 100+ companies partner
      </p>

      <div className="relative w-full min-w-0 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#F7F8F3] to-transparent md:w-16" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#F7F8F3] to-transparent md:w-16" />

        <Marquee
          autoFill
          speed={28}
          pauseOnHover
          gradient={false}
          className="py-3"
        >
          {[...partners, ...partners].map((partner, index) => (
            <PartnerLogo
              key={`${partner.name}-${index}`}
              partner={partner}
            />
          ))}
        </Marquee>
      </div>
    </div>
  )
}