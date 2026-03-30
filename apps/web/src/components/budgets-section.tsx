import CaretRightIcon from "@/assets/images/icon-caret-right.svg?react"
import { BudgetDonutChart } from "@/components/budget-donut-chart"

const BUDGET_SEGMENTS = [
  { label: "Entertainment", amount: "$50.00", value: 50, fill: "var(--green)" },
  { label: "Bills", amount: "$750.00", value: 750, fill: "var(--cyan)" },
  { label: "Dining Out", amount: "$75.00", value: 75, fill: "var(--yellow)" },
  {
    label: "Personal Care",
    amount: "$100.00",
    value: 100,
    fill: "var(--navy)",
  },
] as const

export function BudgetsSection() {
  return (
    <section className="bg-brand-white box-border flex h-[410px] w-[428px] shrink-0 flex-col rounded-xl p-8 shadow-sm">
      <header className="flex shrink-0 items-baseline justify-between">
        <h2 className="text-brand-grey-900 text-[20px] leading-[120%] font-bold">
          Budgets
        </h2>

        <button
          type="button"
          className="text-brand-grey-500 flex shrink-0 items-center gap-3 text-[14px] leading-[150%] font-normal"
        >
          <span>See Details</span>
          <CaretRightIcon aria-hidden="true" className="h-[11px] w-[6px]" />
        </button>
      </header>

      <div className="mt-6 flex min-h-0 flex-1 flex-row items-center gap-[16px]">
        <BudgetDonutChart
          segments={[...BUDGET_SEGMENTS]}
          centerAmount="$338"
          centerSubtext="of $975 limit"
        />

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
          {BUDGET_SEGMENTS.map((row) => (
            <div key={row.label} className="flex items-center gap-4">
              <div
                className="h-10 w-1.5 shrink-0 self-center rounded-full"
                style={{ backgroundColor: row.fill }}
              />
              <div className="min-w-0">
                <div className="text-brand-grey-500 w-[100px] text-[12px] leading-[150%] font-normal whitespace-nowrap">
                  {row.label}
                </div>
                <div className="text-brand-grey-900 mt-1 text-[14px] leading-[150%] font-bold whitespace-nowrap">
                  {row.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
