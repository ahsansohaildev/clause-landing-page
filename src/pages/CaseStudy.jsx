import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  Code2,
  Gauge,
  GitBranch,
  Layers3,
  Puzzle,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react"
import { Link } from "react-router"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const techStack = [
  "React JS",
  "Vite",
  "Tailwind CSS",
  "shadcn/ui",
  "Radix UI",
  "Lucide React",
  "Framer Motion",
  "GSAP",
  "ScrollTrigger",
  "Recharts",
  "react-fast-marquee",
  "react-countup",
  "React Router",
]

const componentArchitecture = [
  {
    title: "Layout Components",
    items: ["Header", "DesktopNav", "Footer"],
  },
  {
    title: "Landing Sections",
    items: [
      "HeroSection",
      "HeroPartners",
      "FeaturesSection",
      "IntegrationsSection",
      "TestimonialSection",
      "CTASection",
    ],
  },
  {
    title: "Feature Components",
    items: [
      "SectionHeader",
      "DashboardFeatureCard",
      "DashboardChart",
      "TeamAvatars",
      "SmartNotificationsCard",
      "NotificationRow",
      "FakeSwitch",
      "TaskManagementCard",
      "ActivityItem",
    ],
  },
  {
    title: "Integration Components",
    items: ["IntegrationsHeader", "IntegrationsMarquee", "IntegrationLogoCard"],
  },
]

const problemsSolved = [
  {
    title: "Messy Header Code",
    description:
      "Header code was becoming hard to read because logo, navigation, dropdowns, buttons, and mobile menu were all in one file. I separated the desktop navigation into its own component and later improved mobile navigation with shadcn Sheet.",
  },
  {
    title: "Hero Partner Logos Overlap",
    description:
      "The old partner section was absolutely positioned at the bottom of the hero. It looked acceptable on desktop but overlapped buttons and content on mobile. I replaced it with a reusable marquee component placed in normal document flow.",
  },
  {
    title: "Responsive Layout Issues",
    description:
      "Several sections needed custom desktop, tablet, and mobile spacing. I used Tailwind responsive utilities such as md:, lg:, max-width containers, grid layouts, and controlled section padding.",
  },
  {
    title: "Chart Warning",
    description:
      "Recharts warned about negative width/height because the chart container needed a stable height. I fixed this by giving the chart wrapper fixed/min height and using ResponsiveContainer properly.",
  },
  {
    title: "Sheet Accessibility Warning",
    description:
      "The shadcn Sheet produced DialogTitle and DialogDescription warnings. I fixed this by adding SheetTitle and SheetDescription inside SheetHeader with sr-only styling.",
  },
  {
    title: "Animated Counter Import Issue",
    description:
      "The stats counter initially failed because of import mismatch. I fixed the CountUp import and used the counter animation only inside the StatItem component.",
  },
]

const learnings = [
  "How to convert a Dribbble-inspired design into reusable React components.",
  "How to use divide-and-conquer architecture for landing pages.",
  "How to separate data, UI components, and section layout.",
  "How to use shadcn/ui components without losing custom design control.",
  "How to improve responsive design by avoiding absolute positioning for important content.",
  "How to use GSAP ScrollTrigger for scroll-based animation.",
  "How to use Framer Motion for hover, tap, and entrance micro-interactions.",
  "How to use React Router for a multi-page React project.",
  "How to prepare a project for GitHub and Netlify deployment.",
]

const futureImprovements = [
  "Add real backend or CMS data for testimonials, stats, and integrations.",
  "Add form handling for Get a Demo and Start for Free buttons.",
  "Add dark/light theme support.",
  "Add SEO metadata per page.",
  "Add image optimization and lazy loading for heavy assets.",
  "Add unit tests for reusable components.",
  "Add more route pages like Pricing, Blog, Contact, and Changelog.",
]

function CaseSection({ icon: Icon, eyebrow, title, children }) {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(7,49,39,0.14)]">
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary/60">
            {eyebrow}
          </p>
          <h2 className="text-[30px] font-[600] tracking-[-0.04em] text-primary md:text-[40px]">
            {title}
          </h2>
        </div>
      </div>

      {children}
    </section>
  )
}

function TextCard({ title, children }) {
  return (
    <Card className="rounded-[24px] border border-border/70 bg-white p-7 shadow-[0_18px_55px_rgba(7,49,39,0.06)]">
      <h3 className="text-[20px] font-[600] tracking-[-0.03em] text-primary">
        {title}
      </h3>
      <div className="mt-4 text-[15px] font-medium leading-8 text-[#333F3C]/75">
        {children}
      </div>
    </Card>
  )
}

export function CaseStudy() {
  return (
    <main className="bg-[#F7F8F3]">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1120px]">
          <Button
            asChild
            variant="outline"
            className="mb-10 h-11 rounded-full border-border/70 bg-white px-5 text-primary hover:bg-white hover:text-primary"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to landing page
            </Link>
          </Button>

          <div className="rounded-[32px] bg-primary px-6 py-16 text-center text-white shadow-[0_24px_70px_rgba(7,49,39,0.16)] md:px-12 md:py-20">
            <Badge className="mb-6 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white/10">
              Case Study
            </Badge>

            <h1 className="mx-auto max-w-[850px] text-[40px] font-[600] leading-[1.1] tracking-[-0.055em] md:text-[64px]">
              Clause SaaS Landing Page Design & Development
            </h1>

            <p className="mx-auto mt-6 max-w-[760px] text-[16px] font-medium leading-8 text-white/72 md:text-[18px]">
              A complete React landing page project inspired by a Dribbble UI
              concept. The goal was to convert a premium SaaS design into a
              clean, responsive, animated, and production-ready frontend.
            </p>
          </div>

          <CaseSection
            icon={BookOpen}
            eyebrow="Project overview"
            title="What I built"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <TextCard title="Project Type">
                This project is a modern SaaS landing page for a contract
                management product named Clause. It includes a sticky header,
                animated hero section, feature cards, integrations marquee,
                testimonial/statistics section, CTA, footer, and now a separate
                case study route.
              </TextCard>

              <TextCard title="Design Source">
                The visual direction was inspired by a Dribbble design. I used
                it as a reference for layout, spacing, colors, rounded cards,
                typography, and premium SaaS-style presentation, then recreated
                the UI in React with reusable components.
              </TextCard>
            </div>
          </CaseSection>

          <CaseSection
            icon={Layers3}
            eyebrow="Architecture"
            title="Component structure"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {componentArchitecture.map((group) => (
                <Card
                  key={group.title}
                  className="rounded-[24px] border border-border/70 bg-white p-7 shadow-[0_18px_55px_rgba(7,49,39,0.06)]"
                >
                  <h3 className="text-[20px] font-[600] tracking-[-0.03em] text-primary">
                    {group.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[15px] font-medium text-[#333F3C]/75"
                      >
                        <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            icon={Code2}
            eyebrow="Technology stack"
            title="Libraries and tools used"
          >
            <Card className="rounded-[24px] border border-border/70 bg-white p-7 shadow-[0_18px_55px_rgba(7,49,39,0.06)]">
              <div className="flex flex-wrap gap-3">
                {techStack.map((tool) => (
                  <Badge
                    key={tool}
                    className="rounded-full bg-[#EEF2EC] px-4 py-2 text-[13px] font-bold text-primary hover:bg-[#EEF2EC]"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </CaseSection>

          <CaseSection
            icon={Puzzle}
            eyebrow="Problems"
            title="Main problems I solved"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {problemsSolved.map((problem) => (
                <TextCard key={problem.title} title={problem.title}>
                  {problem.description}
                </TextCard>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            icon={Sparkles}
            eyebrow="Design details"
            title="Important UI decisions"
          >
            <div className="grid gap-6 md:grid-cols-3">
              <TextCard title="Premium spacing">
                I used large section padding, max-width containers, and soft
                shadows to create a high-end SaaS feel.
              </TextCard>

              <TextCard title="Reusable cards">
                Instead of writing one huge section, every card and repeated UI
                pattern became a small component.
              </TextCard>

              <TextCard title="Responsive first">
                The layout was tested on desktop, tablet, and mobile. The hero
                partners and integrations marquee were adjusted for small
                screens.
              </TextCard>
            </div>
          </CaseSection>

          <CaseSection
            icon={Gauge}
            eyebrow="Optimization"
            title="Performance improvements"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <TextCard title="Lazy loading routes">
                The landing page and case study page are loaded using React
                lazy and Suspense. This keeps routing scalable as the project
                grows.
              </TextCard>

              <TextCard title="Reusable data arrays">
                Features, integrations, stats, and activities are rendered from
                arrays using map. This makes future updates fast and avoids
                repeated JSX.
              </TextCard>
            </div>
          </CaseSection>

          <CaseSection
            icon={Wrench}
            eyebrow="Learning"
            title="What I learned"
          >
            <Card className="rounded-[24px] border border-border/70 bg-white p-7 shadow-[0_18px_55px_rgba(7,49,39,0.06)]">
              <ul className="grid gap-4 md:grid-cols-2">
                {learnings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] font-medium leading-7 text-[#333F3C]/75"
                  >
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </CaseSection>

          <CaseSection
            icon={Rocket}
            eyebrow="Future value"
            title="How this helps future projects"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <TextCard title="Reusable landing page system">
                This project becomes a template for future SaaS, agency,
                portfolio, and startup landing pages. The same architecture can
                be reused with different content and branding.
              </TextCard>

              <TextCard title="Better development confidence">
                I practiced real-world frontend workflow: breaking designs into
                components, solving responsive bugs, adding animations,
                improving accessibility, and preparing for deployment.
              </TextCard>
            </div>
          </CaseSection>

          <CaseSection
            icon={GitBranch}
            eyebrow="Next steps"
            title="Future improvements"
          >
            <Card className="rounded-[24px] border border-border/70 bg-white p-7 shadow-[0_18px_55px_rgba(7,49,39,0.06)]">
              <ul className="grid gap-4 md:grid-cols-2">
                {futureImprovements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] font-medium leading-7 text-[#333F3C]/75"
                  >
                    <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </CaseSection>
        </div>
      </section>
    </main>
  )
}