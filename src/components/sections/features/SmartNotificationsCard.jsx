import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { NotificationRow } from "./NotificationRow"

const notificationRows = [
  {
    label: "New messages, comment, or replies",
    active: true,
  },
  {
    label: "Social emails",
    active: false,
  },
  {
    label: "Announcement and Update",
    active: true,
  },
  {
    label: "Reminders",
    active: true,
    muted: true,
  },
]

export function SmartNotificationsCard() {
  return (
    <Card className="overflow-hidden rounded-[28px] border border-border/70 bg-white p-0 shadow-[0_20px_60px_rgba(7,49,39,0.07)]">
      {/* Top content */}
      <div className="flex min-h-[190px] flex-col items-center justify-center bg-[#EEF2EC] px-8 text-center">
        <h3 className="text-[30px] font-[600] leading-tight tracking-[-0.04em] text-primary md:text-[34px]">
          Smart notifications
        </h3>

        <p className="mt-4 max-w-[390px] text-[15px] font-medium leading-7 text-[#333F3C]/75">
          Easily accessible from the notifications center, calendar or email
          with the relevant activities.
        </p>
      </div>

      {/* Email settings panel */}
      <div className="bg-white px-8 py-7 md:px-10">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] font-[600] tracking-[-0.02em] text-primary">
            Email notification
          </h4>

          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-lg border-0 bg-white px-4 text-[12px] font-bold text-primary shadow-[0_8px_22px_rgba(7,49,39,0.08)] hover:bg-white hover:text-primary"
          >
            Save
          </Button>
        </div>

        <div className="mt-7 divide-y divide-border/70 border-t border-border/70">
          {notificationRows.map((row) => (
            <NotificationRow
              key={row.label}
              label={row.label}
              active={row.active}
              muted={row.muted}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}