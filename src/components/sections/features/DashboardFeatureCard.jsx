import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { DashboardChart } from "./DashboardChart"
import { TeamAvatars } from "./TeamAvatars"

export function DashboardFeatureCard() {
  return (
    <Card className="overflow-hidden rounded-[28px] border border-border/70 bg-[#EEF2EC] p-0 shadow-[0_20px_60px_rgba(7,49,39,0.08)]">
      <div className="grid min-h-[390px] lg:grid-cols-[1fr_1.1fr]">
        {/* Left Content */}
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div>
            <h3 className="text-[30px] font-[600] leading-tight tracking-[-0.04em] text-primary md:text-[36px]">
              Dynamic dashboard
            </h3>

            <p className="mt-5 max-w-[440px] text-[15px] font-medium leading-8 text-[#333F3C]/75">
              Clause helps legal teams work faster, smarter and more
              efficiently, delivering the visibility and data-driven insights to
              mitigate risk and ensure compliance.
            </p>
          </div>

          <Button className="mt-10 h-[54px] w-fit !rounded-[14px] bg-primary px-7 text-[15px] font-bold text-primary-foreground shadow-[0_14px_30px_rgba(0,72,56,0.18)] hover:bg-primary/95 hover:text-primary-foreground">
            Explore all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Right Dashboard Preview */}
        <div className="border-t border-border/70 bg-white lg:border-l lg:border-t-0">
          <div className="flex h-full flex-col">
            <div className="flex h-[86px] items-center justify-between border-b border-border/70 px-7">
              <button className="inline-flex items-center gap-1.5 text-[17px] font-semibold text-primary">
                Acme Inc.
                <span className="text-lg leading-none text-primary/70">⌄</span>
              </button>

              <TeamAvatars />
            </div>

            <div className="flex flex-1 items-end px-7 pb-7 pt-8">
              <DashboardChart />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}