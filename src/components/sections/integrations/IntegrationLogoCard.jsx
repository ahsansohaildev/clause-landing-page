import { Card } from "@/components/ui/card"

export function IntegrationLogoCard({ item }) {
  return (
    <Card className="mx-4 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[15px] border border-white/80 bg-white p-0 shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_24px_50px_rgba(0,0,0,0.22)] md:mx-6 md:h-[88px] md:w-[88px] lg:mx-[28px] lg:h-[100px] lg:w-[100px] lg:rounded-[18px]">
      <img
        src={item.logo}
        alt={item.name}
        loading="lazy"
        className="h-[42px] w-[42px] object-contain md:h-[52px] md:w-[52px] lg:h-[62px] lg:w-[62px]"
      />
    </Card>
  )
}