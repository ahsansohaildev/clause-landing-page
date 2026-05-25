export function FakeSwitch({ active = false, muted = false }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      className={`relative h-[20px] w-[38px] rounded-full transition ${
        active
          ? muted
            ? "bg-primary/45"
            : "bg-primary"
          : "bg-[#E7E9E5]"
      }`}
    >
      <span
        className={`absolute top-1/2 h-[16px] w-[16px] -translate-y-1/2 rounded-full bg-white shadow-sm transition ${
          active ? "right-[2px]" : "left-[2px]"
        }`}
      />
    </button>
  )
}