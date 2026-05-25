import { FileText } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ActivityItem({ activity }) {
  const isUpload = activity.type === "upload"

  return (
    <div className="relative rounded-2xl bg-white p-5 shadow-[0_14px_35px_rgba(7,49,39,0.06)]">
      <div className="flex items-start gap-4">
        <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
          <AvatarImage
            src={activity.avatar}
            alt={activity.name}
            className="object-cover"
          />

          <AvatarFallback className="bg-[#E9DED9] text-[10px] font-bold text-primary">
            {activity.fallback}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <h5 className="text-[14px] font-semibold text-primary">
              {activity.name}
            </h5>

            <span className="h-3 w-10 rounded-full bg-[#E7E9E5]" />
          </div>

          {isUpload ? (
            <div className="mt-4 flex items-center gap-3 text-[14px] font-medium text-[#333F3C]/45">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F6E9E5] text-[#E8796F]">
                <FileText className="h-4 w-4" />
              </span>
              {activity.message}
            </div>
          ) : (
            <p className="mt-3 max-w-[330px] text-[14px] font-medium leading-6 text-[#333F3C]/75">
              {activity.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}