import { FakeSwitch } from "./FakeSwitch"

export function NotificationRow({ label, active = false, muted = false }) {
  return (
    <div className="flex min-h-[58px] items-center justify-between gap-5">
      <p
        className={`text-[14px] font-medium ${
          muted ? "text-[#333F3C]/35" : "text-[#333F3C]/80"
        }`}
      >
        {label}
      </p>

      <FakeSwitch active={active} muted={muted} />
    </div>
  )
}