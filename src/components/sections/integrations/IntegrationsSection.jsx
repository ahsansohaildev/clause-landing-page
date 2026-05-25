import { Card } from "@/components/ui/card"

import { IntegrationsHeader } from "./IntegrationsHeader"
import { IntegrationsMarquee } from "./IntegrationsMarquee"

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-white py-20 lg:px-8 lg:py-24">
      <Card className="relative mx-auto w-full overflow-hidden rounded-none border-0 bg-primary p-0 shadow-[0_24px_70px_rgba(7,49,39,0.16)] lg:max-w-[1120px] lg:rounded-[28px] lg:border lg:border-primary/15">
        {/* Grid background */}
        <div className="pointer-events-none absolute left-1/2 top-[52px] h-[420px] w-[86%] -translate-x-1/2 opacity-100 [background-image:linear-gradient(to_right,rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.11)_1px,transparent_1px)] [background-size:86px_68px] [mask-image:radial-gradient(ellipse_at_center,black_52%,transparent_84%)] md:w-[76%] lg:top-[58px] lg:w-[66%] lg:[background-size:92px_72px]" />

        {/* Soft glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_58%)]" />

        <div className="relative z-10 flex min-h-[610px] flex-col md:min-h-[650px] lg:min-h-[670px]">
          <IntegrationsHeader />
          <IntegrationsMarquee />
        </div>
      </Card>
    </section>
  )
}