import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="pricing" className="bg-white pt-24">
      <div className="w-full bg-[#243E38] px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-[520px] text-[34px] font-[600] leading-[1.18] tracking-[-0.045em] text-white md:text-[44px]">
            Discover the full scale of{" "}
            <span className="relative inline-block">
              Clause
              <span className="absolute -bottom-1 left-0 h-[5px] w-full bg-accent" />
            </span>{" "}
            capabilities
          </h2>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="outline"
              className="h-[54px] !rounded-[14px] border-0 bg-white px-8 text-[15px] font-bold text-primary shadow-[0_14px_30px_rgba(0,0,0,0.12)] hover:bg-white hover:text-primary"
            >
              Get a Demo
            </Button>

            <Button className="h-[54px] !rounded-[14px] border-0 bg-accent px-8 text-[15px] font-bold text-primary shadow-[0_14px_30px_rgba(0,0,0,0.14)] hover:bg-accent/95 hover:text-primary">
              Start for Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}