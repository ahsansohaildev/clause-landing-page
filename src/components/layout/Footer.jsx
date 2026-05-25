import { Mail, Phone } from "lucide-react"
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"

import logo from "@/assets/images/logo.webp"
import { siteConfig } from "@/constants/site"

const footerLinks = [
  {
    title: "Solution",
    links: ["Why Cequence", "Features", "OpenAI", "Technology", "Security"],
  },
  {
    title: "Customers",
    links: ["Procurement", "Sales", "Legal", "Medium", "Enterprise"],
  },
  {
    title: "Resources",
    links: ["Pricing", "Contact Sales", "Changelog", "Blog"],
  },
]

const socialLinks = [
  {
    label: "Twitter",
    icon: FaTwitter,
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    icon: FaYoutube,
  },
]

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#081D19] px-5 py-16 text-white lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${siteConfig.name} logo`}
                className="h-9 w-9 rounded-lg object-contain"
              />

              <span className="text-[24px] font-bold tracking-[-0.04em]">
                {siteConfig.name}
              </span>
            </a>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hello@clause.com"
                className="flex items-center gap-3 text-[15px] font-medium text-white/65 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                hello@clause.com
              </a>

              <a
                href="tel:+621987654321"
                className="flex items-center gap-3 text-[15px] font-medium text-white/65 transition hover:text-white"
              >
                <Phone className="h-4 w-4" />
                +621 987 654 321
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-[15px] font-bold text-white">
                  {group.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-[15px] font-medium text-white/60 transition hover:text-white"
                      >
                        {link}
                        {link === "Changelog" && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="space-y-2">
  <p className="text-[14px] font-medium text-white/50">
    © Copyright 2026 Clause. All rights reserved.
  </p>

  <p className="text-[14px] font-medium text-white/50">
    Developed by{" "}
    <a
      href="#"
      className="font-semibold text-accent transition hover:text-accent/80"
    >
      Ahsan Sohail
    </a>
  </p>
</div>
      </div>
    </footer>
  )
}