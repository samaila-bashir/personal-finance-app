export function PotBreakdownItem({
  label,
  amount,
  colorClassName,
}: {
  label: string
  amount: string
  colorClassName: string
}) {
  return (
    <div className="flex h-[43px] w-[130.5px] items-center gap-4">
      <div className={`h-full w-1 rounded-full ${colorClassName}`} />
      <div>
        <div className="text-[12px] leading-[150%] font-normal text-brand-grey-500">
          {label}
        </div>
        <div className="mt-1 text-[14px] leading-[150%] font-bold text-brand-grey-900">
          {amount}
        </div>
      </div>
    </div>
  )
}

