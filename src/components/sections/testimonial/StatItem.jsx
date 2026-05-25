export function StatItem({ value, label }) {
  return (
    <div className="flex min-h-[150px] flex-col items-center justify-center px-6 text-center">
      <strong className="text-[44px] font-[600] leading-none tracking-[-0.05em] text-primary md:text-[54px]">
        {value}
      </strong>

      <span className="mt-4 text-[14px] font-medium text-[#333F3C]/70">
        {label}
      </span>
    </div>
  )
}