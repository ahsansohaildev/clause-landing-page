import { Plus } from "lucide-react"

import avater1 from "@/assets/images/avater-1.png"
import avater3 from "@/assets/images/avater-3.png"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { ActivityItem } from "./ActivityItem"

const activities = [
  {
    name: "Bill Sanders",
    avatar: avater1,
    fallback: "BS",
    message:
      "Hello @Ragip Diller, Could you sign the contract before the March 12? Thank you in advance 🥹",
    type: "message",
  },
  {
    name: "Jane Cooper",
    avatar: avater3,
    fallback: "JC",
    message: "Uploaded new contract",
    type: "upload",
  },
]

export function TaskManagementCard() {
  return (
    <Card className="overflow-hidden rounded-[28px] border border-border/70 bg-white p-0 shadow-[0_20px_60px_rgba(7,49,39,0.07)]">
      {/* Top content */}
      <div className="flex min-h-[190px] flex-col items-center justify-center bg-[#EEF2EC] px-8 text-center">
        <h3 className="text-[30px] font-[600] leading-tight tracking-[-0.04em] text-primary md:text-[34px]">
          Task management
        </h3>

        <p className="mt-4 max-w-[390px] text-[15px] font-medium leading-7 text-[#333F3C]/75">
          Discuss contract queries, manage tasks, secure approvals, track
          progress in the workspace.
        </p>
      </div>

      {/* Activity panel */}
      <div className="bg-white px-8 py-7 md:px-10">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] font-[600] tracking-[-0.02em] text-primary">
            Activity
          </h4>

          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-lg border-0 bg-white px-4 text-[12px] font-bold text-primary shadow-[0_8px_22px_rgba(7,49,39,0.08)] hover:bg-white hover:text-primary"
          >
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Message
          </Button>
        </div>

        <div className="mt-7 space-y-5">
          {activities.map((activity) => (
            <ActivityItem key={activity.name} activity={activity} />
          ))}
        </div>
      </div>
    </Card>
  )
}