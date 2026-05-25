import { Menu } from "lucide-react"
import { Link } from "react-router"

import logo from "@/assets/images/logo.webp"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/constants/site"
import { DesktopNav } from "./DesktopNav"

const mobileLinks = [
  { label: "Home", to: "/#home" },
  { label: "Solutions", to: "/#features" },
  { label: "Integrations", to: "/#integrations" },
  { label: "Customers", to: "/#customers" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Case Study", to: "/case-study" },
  { label: "Contact", to: "/#contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-[#F7F8F3]/95 backdrop-blur-xl">
      <div className="relative mx-auto flex h-[76px] max-w-[1220px] items-center justify-between px-5 lg:px-8">
        <Link to="/#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${siteConfig.name} logo`}
            className="h-[60px] w-[60px] rounded-xl object-contain"
          />

          <span className="text-[22px] font-bold tracking-[-0.04em] text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/case-study"
            className="inline-flex h-10 items-center rounded-xl px-3 text-sm font-semibold text-foreground transition hover:bg-muted/70"
          >
            Case Study
          </Link>

          <Button
            variant="outline"
            className="h-[52px] min-w-[114px] !rounded-[16px] border border-border/70 bg-white px-7 text-[16px] font-semibold text-primary shadow-[0_10px_30px_rgba(7,49,39,0.08)] hover:bg-white hover:text-primary"
          >
            Log in
          </Button>

          <Button className="h-[52px] min-w-[132px] !rounded-[16px] border border-primary bg-primary px-7 text-[16px] font-bold text-primary-foreground shadow-[0_14px_34px_rgba(0,72,56,0.22)] hover:bg-primary/95 hover:text-primary-foreground">
            Start Now
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[88vw] max-w-[380px] border-l border-border/70 bg-[#F7F8F3] p-0"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Mobile navigation menu</SheetTitle>
              <SheetDescription>
                Use this menu to navigate through the Clause landing page and
                case study page.
              </SheetDescription>
            </SheetHeader>

            <div className="flex h-full flex-col">
              <div className="border-b border-border/70 px-5 py-5">
                <SheetClose asChild>
                  <Link to="/#home" className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt={`${siteConfig.name} logo`}
                      className="h-12 w-12 rounded-xl object-contain"
                    />

                    <span className="text-[22px] font-bold tracking-[-0.04em] text-primary">
                      {siteConfig.name}
                    </span>
                  </Link>
                </SheetClose>
              </div>

              <nav className="flex flex-1 flex-col gap-2 px-5 py-6">
                {mobileLinks.map((link) => (
                  <SheetClose key={link.to} asChild>
                    <Link
                      to={link.to}
                      className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-primary transition hover:bg-white hover:shadow-sm"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="border-t border-border/70 px-5 py-5">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-12 !rounded-[16px] border border-border/70 bg-white text-[15px] font-semibold text-primary shadow-sm hover:bg-white hover:text-primary"
                  >
                    Log in
                  </Button>

                  <Button className="h-12 !rounded-[16px] border border-primary bg-primary text-[15px] font-bold text-primary-foreground hover:bg-primary/95 hover:text-primary-foreground">
                    Start Now
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}