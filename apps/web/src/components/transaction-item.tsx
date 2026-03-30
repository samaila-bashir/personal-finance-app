export function TransactionItem({
  avatarSrc,
  name,
  amount,
  date,
  isPositive,
  showDivider,
}: {
  avatarSrc: string
  name: string
  amount: string
  date: string
  isPositive: boolean
  showDivider: boolean
}) {
  return (
    <div
      className={
        showDivider
          ? "border-brand-grey-100 flex h-[81px] items-center gap-4 border-b"
          : "flex h-[81px] items-center gap-4"
      }
    >
      <img
        src={avatarSrc}
        alt=""
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <p className="text-brand-grey-900 min-w-0 flex-1 truncate text-[14px] leading-[150%] font-bold">
        {name}
      </p>
      <div className="flex shrink-0 flex-col items-end gap-1">
        <p
          className={
            isPositive
              ? "text-brand-green text-[14px] leading-[150%] font-bold"
              : "text-brand-grey-900 text-[14px] leading-[150%] font-bold"
          }
        >
          {amount}
        </p>
        <p className="text-brand-grey-500 text-[12px] leading-[150%] font-normal">
          {date}
        </p>
      </div>
    </div>
  )
}
