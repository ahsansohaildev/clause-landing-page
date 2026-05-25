import avater1 from "@/assets/images/avater-1.webp"
import avater2 from "@/assets/images/avater-2.webp"
import avater3 from "@/assets/images/avater-3.webp"
import avater4 from "@/assets/images/avater-4.webp"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  {
    name: "Sarah",
    src: avater1,
    fallback: "SA",
  },
  {
    name: "Maya",
    src: avater3,
    fallback: "MA",
  },
  {
    name: "Alex",
    src: avater4,
    fallback: "AL",
  },
  {
    name: "David",
    src: avater2,
    fallback: "DA",
  },
]

export function TeamAvatars() {
  return (
    <div className="flex items-center">
      {team.map((member) => (
        <Avatar
          key={member.name}
          className="-ml-2 h-8 w-8 border-2 border-white first:ml-0"
        >
          <AvatarImage
            src={member.src}
            alt={member.name}
            className="object-cover"
          />
          <AvatarFallback className="bg-[#E9DED9] text-[10px] font-bold text-primary">
            {member.fallback}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}