import { DashboardFeatureCard } from "./DashboardFeatureCard"
import { SectionHeader } from "./SectionHeader"
import { SmartNotificationsCard } from "./SmartNotificationsCard"
import { TaskManagementCard } from "./TaskManagementCard"

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[white] py-24">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <SectionHeader />

        <div className="mt-20">
          <DashboardFeatureCard />
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-2">
          <SmartNotificationsCard />
          <TaskManagementCard />
        </div>
      </div>
    </section>
  )
}