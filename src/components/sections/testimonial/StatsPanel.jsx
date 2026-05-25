import { Card } from "@/components/ui/card"

import { StatItem } from "./StatItem"

const stats = [
  {
    value: "2021",
    label: "Clause Founded",
  },
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "1k+",
    label: "Company Partners",
  },
]

export function StatsPanel() {
  return (
    <Card className="overflow-hidden rounded-[24px] border border-border/70 bg-[#F7F8F3] p-0 shadow-[0_18px_55px_rgba(7,49,39,0.06)]">
      <div className="grid divide-y divide-border/70 md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Card>
  )
}