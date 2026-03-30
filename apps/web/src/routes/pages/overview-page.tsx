import { OverviewCard } from "@/components/overview-card"
import { PotsSection } from "@/components/pots-section"

export function OverviewPage() {
  return (
    <div className="px-10 pt-8">
      <h1 className="text-brand-grey-900 text-[32px] leading-[120%] font-bold">
        Overview
      </h1>

      <div className="mt-8 flex flex-wrap gap-6">
        <OverviewCard title="Current Balance" value="$4,836.00" tone="dark" />
        <OverviewCard title="Income" value="$3,814.25" tone="light" />
        <OverviewCard title="Expenses" value="$1,700.50" tone="light" />
      </div>

      <div className="mt-6">
        <PotsSection />
      </div>
    </div>
  )
}
