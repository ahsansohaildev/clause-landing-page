import { Grid2X2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function SectionHeader() {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
      <Badge className="mb-5 h-[30px] rounded-full border border-border/70 bg-white px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-primary shadow-[0_8px_20px_rgba(7,49,39,0.06)] hover:bg-white">
        <Grid2X2 className="mr-1.5 h-3.5 w-3.5 text-primary" />
        Features
      </Badge>

      <h2 className="max-w-[690px] text-[34px] font-[600] leading-[1.12] tracking-[-0.045em] text-primary md:text-[46px]">
        Latest advanced technologies to ensure everything you needs
      </h2>

      <p className="mt-5 max-w-[580px] text-[15px] font-medium leading-7 text-[#333F3C]/75">
        Maximize your team's productivity and security with our affordable,
        user-friendly contract management system.
      </p>
    </div>
  )
}