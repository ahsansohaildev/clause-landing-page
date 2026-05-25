import { ArrowRight, Blocks } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function IntegrationsHeader() {
  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-6 pt-20 text-center md:px-10 md:pt-[88px] lg:pt-[94px]">
      <Badge className="mb-6 h-[30px] rounded-full border border-white/15 bg-white/10 px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:bg-white/10">
        <Blocks className="mr-1.5 h-3.5 w-3.5 text-white" />
        Integrations
      </Badge>

      <h2 className="max-w-[560px] text-[32px] font-[600] leading-[1.12] tracking-[-0.045em] text-white md:text-[42px] lg:text-[46px]">
        Don&apos;t replace. Integrate.
      </h2>

      <p className="mt-5 max-w-[620px] text-[15px] font-medium leading-7 text-white/70 md:text-[16px]">
        We understand the hassle of replacing the long used tools in your
        process. That&apos;s why we integrate tools you use in your day-to-day
        work.
      </p>

      <Button
        variant="link"
        className="mt-6 h-auto p-0 text-[15px] font-bold text-white underline underline-offset-4 hover:text-white/80"
      >
        All Integrations
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}