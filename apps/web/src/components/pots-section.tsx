import CaretRightIcon from "@/assets/images/icon-caret-right.svg?react"
import PotIcon from "@/assets/images/icon-pot.svg?react"
import { PotBreakdownItem } from "@/components/pot-breakdown-item"

export function PotsSection() {
  return (
    <section className="bg-brand-white h-[218px] w-[608px] rounded-xl p-6 shadow-sm">
      <header className="flex items-center justify-between">
        <h2 className="text-brand-grey-900 text-[20px] leading-[120%] font-bold">
          Pots
        </h2>

        <button
          type="button"
          className="text-brand-grey-500 flex items-center gap-3 text-[14px] leading-[150%] font-normal"
        >
          <span>See Details</span>
          <CaretRightIcon aria-hidden="true" className="h-[11px] w-[6px]" />
        </button>
      </header>

      <div className="mt-6 flex items-center">
        <div className="bg-brand-beige-100 flex h-[110px] w-[247px] items-center gap-4 rounded-xl px-4">
          <div className="text-brand-green">
            <PotIcon aria-hidden="true" className="h-9 w-7" />
          </div>

          <div>
            <div className="text-brand-grey-500 text-[14px] leading-[150%] font-normal">
              Total Saved
            </div>
            <div className="text-brand-grey-900 mt-[11px] text-[32px] leading-[120%] font-bold">
              $850
            </div>
          </div>
        </div>

        <div className="ml-5 grid h-[102px] w-[277px] grid-cols-2 gap-4">
          <PotBreakdownItem
            label="Savings"
            amount="$159"
            colorClassName="bg-brand-green"
          />
          <PotBreakdownItem
            label="Gift"
            amount="$40"
            colorClassName="bg-brand-cyan"
          />
          <PotBreakdownItem
            label="Concert Ticket"
            amount="$110"
            colorClassName="bg-brand-navy"
          />
          <PotBreakdownItem
            label="New Laptop"
            amount="$10"
            colorClassName="bg-brand-yellow"
          />
        </div>
      </div>
    </section>
  )
}
