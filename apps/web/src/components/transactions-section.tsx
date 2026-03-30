import CaretRightIcon from "@/assets/images/icon-caret-right.svg?react"
import avatarDanielCarter from "@/assets/images/avatars/daniel-carter.jpg"
import avatarEmmaRichardson from "@/assets/images/avatars/emma-richardson.jpg"
import avatarSavoryBites from "@/assets/images/avatars/savory-bites-bistro.jpg"
import avatarSunPark from "@/assets/images/avatars/sun-park.jpg"
import avatarUrbanServices from "@/assets/images/avatars/urban-services-hub.jpg"
import { TransactionItem } from "@/components/transaction-item"

const TRANSACTIONS = [
  {
    name: "Emma Richardson",
    amount: "+$75.50",
    date: "19 Aug 2024",
    avatar: avatarEmmaRichardson,
    isPositive: true,
  },
  {
    name: "Savory Bites Bistro",
    amount: "-$55.50",
    date: "19 Aug 2024",
    avatar: avatarSavoryBites,
    isPositive: false,
  },
  {
    name: "Daniel Carter",
    amount: "-$42.30",
    date: "18 Aug 2024",
    avatar: avatarDanielCarter,
    isPositive: false,
  },
  {
    name: "Sun Park",
    amount: "+$120.00",
    date: "17 Aug 2024",
    avatar: avatarSunPark,
    isPositive: true,
  },
  {
    name: "Urban Services Hub",
    amount: "-$65.00",
    date: "17 Aug 2024",
    avatar: avatarUrbanServices,
    isPositive: false,
  },
] as const

export function TransactionsSection() {
  return (
    <section className="bg-brand-white w-[608px] rounded-xl p-6 shadow-sm">
      <header className="flex items-center justify-between">
        <h2 className="text-brand-grey-900 text-[20px] leading-[120%] font-bold">
          Transactions
        </h2>

        <button
          type="button"
          className="text-brand-grey-500 flex items-center gap-3 text-[14px] leading-[150%] font-normal"
        >
          <span>View All</span>
          <CaretRightIcon aria-hidden="true" className="h-[11px] w-[6px]" />
        </button>
      </header>

      <div className="mt-6">
        {TRANSACTIONS.map((tx, index) => (
          <TransactionItem
            key={tx.name}
            avatarSrc={tx.avatar}
            name={tx.name}
            amount={tx.amount}
            date={tx.date}
            isPositive={tx.isPositive}
            showDivider={index < TRANSACTIONS.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
