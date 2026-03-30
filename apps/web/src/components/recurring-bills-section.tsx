import CaretRightIcon from "@/assets/images/icon-caret-right.svg?react"

const BILLS = [
  {
    label: "Paid Bills",
    amount: "$190.00",
    colorClassName: "bg-brand-green",
  },
  {
    label: "Total Upcoming",
    amount: "$194.98",
    colorClassName: "bg-brand-yellow",
  },
  {
    label: "Due Soon",
    amount: "$59.98",
    colorClassName: "bg-brand-cyan",
  },
] as const

export function RecurringBillsSection() {
  return (
    <section className="bg-brand-white box-border h-[327px] w-[428px] shrink-0 rounded-xl p-8 shadow-sm">
      <header className="flex items-baseline justify-between">
        <h2 className="text-brand-grey-900 text-[20px] leading-[120%] font-bold">
          Recurring Bills
        </h2>

        <button
          type="button"
          className="text-brand-grey-500 flex shrink-0 items-center gap-3 text-[14px] leading-[150%] font-normal"
        >
          <span>See Details</span>
          <CaretRightIcon aria-hidden="true" className="h-[11px] w-[6px]" />
        </button>
      </header>

      <div className="mt-6 flex flex-col gap-3">
        {BILLS.map((row) => (
          <div
            key={row.label}
            className="bg-brand-beige-100 relative box-border flex h-[61px] w-[364px] items-center justify-between overflow-hidden rounded-xl px-4 py-5"
          >
            <div className={`absolute inset-y-0 left-0 w-1 ${row.colorClassName}`} />
            <p className="text-brand-grey-500 pl-4 text-[14px] leading-[150%] font-normal">
              {row.label}
            </p>
            <p className="text-brand-grey-900 text-[14px] leading-[150%] font-bold">
              {row.amount}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

