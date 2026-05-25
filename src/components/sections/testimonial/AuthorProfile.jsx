import avater1 from "@/assets/images/avater-1.webp"
import mailchimpLogo from "@/assets/icons/mailchip-logo-fullyellow.webp"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AuthorProfile() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex items-center">
        <Avatar className="h-11 w-11 border-4 border-white shadow-[0_12px_28px_rgba(7,49,39,0.12)]">
          <AvatarImage
            src={avater1}
            alt="Darlene Robertson"
            className="object-cover"
          />
          <AvatarFallback className="bg-[#E9DED9] text-[12px] font-bold text-primary">
            DR
          </AvatarFallback>
        </Avatar>

        <div className="-ml-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-[3px] border-white bg-[#F9D54A] shadow-[0_10px_22px_rgba(7,49,39,0.16)]">
          <img
            src={mailchimpLogo}
            alt="Mailchimp logo"
            className="h-full w-full scale-[1.08] object-cover"
          />
        </div>
      </div>

      <h3 className="mt-4 text-[16px] font-[600] tracking-[-0.02em] text-primary">
        Darlene Robertson
      </h3>

      <p className="mt-1 text-[14px] font-medium text-[#333F3C]/70">
        Head of Strategy at Mailchimp
      </p>
    </div>
  )
}