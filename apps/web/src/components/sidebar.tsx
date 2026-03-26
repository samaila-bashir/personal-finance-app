import { cn } from "@workspace/ui/lib/utils"

import OverviewIcon from "../assets/images/icon-nav-overview.svg?react"
import TransactionsIcon from "../assets/images/icon-nav-transactions.svg?react"
import BudgetsIcon from "../assets/images/icon-nav-budgets.svg?react"
import PotsIcon from "../assets/images/icon-nav-pots.svg?react"
import RecurringBillsIcon from "../assets/images/icon-nav-recurring-bills.svg?react"

const ACTIVE_ITEM_WIDTH_PX = 276

const NAV_ITEMS = [
  { id: "overview", label: "Overview", Icon: OverviewIcon },
  { id: "transactions", label: "Transactions", Icon: TransactionsIcon },
  { id: "budgets", label: "Budgets", Icon: BudgetsIcon },
  { id: "pots", label: "Pots", Icon: PotsIcon },
  {
    id: "recurring-bills",
    label: "Recurring Bills",
    Icon: RecurringBillsIcon,
  },
] as const

type NavItem = (typeof NAV_ITEMS)[number]
type NavItemId = NavItem["id"]

function SidebarNavItem({
  item,
  isActive,
}: {
  item: NavItem
  isActive: boolean
}) {
  const Icon = item.Icon

  return (
    <div
      className={cn(
        "box-border flex items-center gap-3 py-4 pr-4 pl-8 text-[16px] leading-6 transition-colors",
        isActive
          ? "bg-brand-beige-100 text-brand-grey-900 border-brand-green rounded-l-none rounded-r-xl border-l-4 pl-[28px]"
          : "text-brand-grey-300 rounded-xl bg-transparent hover:bg-white/5"
      )}
      style={isActive ? { width: ACTIVE_ITEM_WIDTH_PX } : undefined}
    >
      <Icon
        aria-hidden="true"
        className={cn(
          "h-[18.75px] w-[18px]",
          isActive ? "text-brand-green" : "text-brand-grey-300"
        )}
      />
      <span className={isActive ? "font-bold" : "font-medium"}>
        {item.label}
      </span>
    </div>
  )
}

export function Sidebar() {
  const activeId: NavItemId = "overview"
  const logoSrc = new URL(
    "../assets/images/logo-large.svg",
    import.meta.url
  ).toString()

  return (
    <aside
      className={cn(
        "bg-brand-grey-900 text-brand-white flex h-full flex-col self-stretch rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none",
        "w-[300px]"
      )}
    >
      <div className="h-[101.76px] px-[40px] py-[32px]">
        <img
          src={logoSrc}
          alt="finance"
          className="block h-[21.76px] w-auto"
          draggable={false}
        />
      </div>

      <div className="flex flex-1 flex-col pt-6 pb-4">
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activeId
            return (
              <SidebarNavItem key={item.id} item={item} isActive={isActive} />
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
