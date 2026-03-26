import OverviewIcon from "../assets/images/icon-nav-overview.svg?react"
import TransactionsIcon from "../assets/images/icon-nav-transactions.svg?react"
import BudgetsIcon from "../assets/images/icon-nav-budgets.svg?react"
import PotsIcon from "../assets/images/icon-nav-pots.svg?react"
import RecurringBillsIcon from "../assets/images/icon-nav-recurring-bills.svg?react"

export const NAV_ITEMS = [
  {
    id: "overview",
    label: "Overview",
    path: "/overview",
    Icon: OverviewIcon,
  },
  {
    id: "transactions",
    label: "Transactions",
    path: "/transactions",
    Icon: TransactionsIcon,
  },
  {
    id: "budgets",
    label: "Budgets",
    path: "/budgets",
    Icon: BudgetsIcon,
  },
  {
    id: "pots",
    label: "Pots",
    path: "/pots",
    Icon: PotsIcon,
  },
  {
    id: "recurring-bills",
    label: "Recurring Bills",
    path: "/recurring-bills",
    Icon: RecurringBillsIcon,
  },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
