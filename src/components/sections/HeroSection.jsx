import { useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowRight, Zap } from "lucide-react"

import avater1 from "@/assets/images/avater-1.png"
import avater2 from "@/assets/images/avater-2.png"
import avater3 from "@/assets/images/avater-3.png"
import avater4 from "@/assets/images/avater-4.png"
import arrowIcon from "@/assets/images/arrow-icon.png"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site"

import { HeroPartners } from "./HeroPartners"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const floatingAvatars = [
  {
    name: "Sarah",
    src: avater1,
    fallback: "SA",
    position: "left-[7%] top-[18%] hidden lg:flex",
    arrowPosition: "right-[-34px] top-1/2 -translate-y-1/2 rotate-[165deg]",
  },
  {
    name: "David",
    src: avater2,
    fallback: "DA",
    position: "right-[7%] top-[18%] hidden lg:flex",
    arrowPosition: "left-[-34px] top-1/2 -translate-y-1/2 rotate-[280deg]",
  },
  {
    name: "Maya",
    src: avater3,
    fallback: "MA",
    position: "left-[13%] bottom-[25%] hidden lg:flex",
    arrowPosition: "right-[-34px] top-1/2 -translate-y-1/2 rotate-[105deg]",
  },
  {
    name: "Alex",
    src: avater4,
    fallback: "AL",
    position: "right-[13%] bottom-[25%] hidden lg:flex",
    arrowPosition: "left-[-34px] top-1/2 -translate-y-1/2 rotate-[350deg]",
  },
]

function FloatingAvatar({ person }) {
  return (
    <div className={`hero-avatar-gsap absolute z-10 ${person.position}`}>
      <motion.div
        className="relative will-change-transform"
        whileHover={{
          y: -6,
          scale: 1.06,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
      >
        <Avatar className="h-[76px] w-[76px] border-[6px] border-white bg-white shadow-[0_22px_48px_rgba(7,49,39,0.16)]">
          <AvatarImage
            src={person.src}
            alt={person.name}
            className="object-cover"
          />

          <AvatarFallback className="bg-[#E9DED9] text-base font-bold text-primary">
            {person.fallback}
          </AvatarFallback>
        </Avatar>

        <motion.img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute z-20 ${person.arrowPosition} h-[52px] w-[52px] object-contain drop-shadow-[0_12px_18px_rgba(7,49,39,0.22)]`}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        })

        tl.from(".hero-badge", {
          opacity: 0,
          y: -18,
          duration: 0.55,
        })
          .from(
            ".hero-title",
            {
              opacity: 0,
              y: 34,
              filter: "blur(8px)",
              duration: 0.85,
            },
            "-=0.2"
          )
          .from(
            ".hero-title-line",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.55,
            },
            "-=0.25"
          )
          .from(
            ".hero-description",
            {
              opacity: 0,
              y: 22,
              duration: 0.65,
            },
            "-=0.45"
          )
          .from(
            ".hero-actions",
            {
              opacity: 0,
              y: 22,
              duration: 0.65,
            },
            "-=0.38"
          )
          .from(
            ".hero-avatar-gsap",
            {
              opacity: 0,
              scale: 0.65,
              y: 34,
              duration: 0.7,
              stagger: 0.12,
            },
            "-=0.45"
          )
          .from(
            ".hero-partners",
            {
              opacity: 0,
              y: 28,
              duration: 0.7,
            },
            "-=0.2"
          )

        gsap.to(".hero-grid", {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })

        gsap.to(".hero-avatar-gsap", {
          y: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: heroRef }
  )

  return (
   <section id="home" ref={heroRef} className="relative overflow-hidden bg-[#F7F8F3]">
      <div className="relative mx-auto max-w-[1220px] px-5 pb-12 pt-[56px] lg:min-h-[680px] lg:px-8 lg:pb-12 lg:pt-[76px]">
        {/* Grid background */}
        <div className="hero-grid pointer-events-none absolute left-1/2 top-[54px] h-[560px] w-[90%] -translate-x-1/2 opacity-100 [background-image:linear-gradient(to_right,rgba(0,72,56,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,72,56,0.15)_1px,transparent_1px)] [background-size:96px_72px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_84%)] md:w-[82%] lg:top-[70px] lg:w-[76%]" />

        {/* Floating avatars */}
        {floatingAvatars.map((person) => (
          <FloatingAvatar key={person.name} person={person} />
        ))}

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex max-w-[900px] flex-col items-center text-center">
          <Badge className="hero-badge mb-7 h-[30px] rounded-full border border-border/70 bg-white px-4 text-[11px] font-bold uppercase tracking-[0.08em] text-primary shadow-[0_8px_20px_rgba(7,49,39,0.08)] hover:bg-white">
            <Zap className="mr-1.5 h-3.5 w-3.5 fill-primary text-primary" />
            Create for fast
          </Badge>

          <h1 className="hero-title max-w-[820px] text-[38px] font-[600] leading-[1.12] tracking-[-0.045em] text-primary md:text-[58px] lg:text-[62px]">
            One tool to{" "}
            <span className="relative inline-block isolate">
              manage
              <span className="hero-title-line absolute bottom-[3px] left-[6px] -z-10 h-[8px] w-[calc(100%-12px)] bg-accent md:bottom-[5px] md:h-[10px]" />
            </span>
            <br className="hidden md:block" />
            contracts and your team
          </h1>

          <p className="hero-description mt-6 max-w-[720px] text-[16px] font-medium leading-8 text-[#333F3C]/80">
            {siteConfig.description}
          </p>

          <div className="hero-actions mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <Button className="h-[54px] !rounded-[14px] bg-primary px-7 text-[15px] font-bold text-primary-foreground shadow-[0_16px_36px_rgba(0,72,56,0.20)] hover:bg-primary/95 hover:text-primary-foreground">
                Start for Free
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <Button
                variant="outline"
                className="h-[54px] !rounded-[14px] border-0 bg-white px-7 text-[15px] font-bold text-primary shadow-[0_14px_30px_rgba(7,49,39,0.08)] hover:bg-white hover:text-primary"
              >
                Get a Demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Partner logos marquee */}
        <div className="hero-partners relative z-20 mt-14 md:mt-20 lg:mt-24">
          <HeroPartners />
        </div>
      </div>
    </section>
  )
}