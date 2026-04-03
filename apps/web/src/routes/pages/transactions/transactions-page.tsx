import { TransactionsDataTable } from "./data-table"
import { TRANSACTIONS } from "./data"

export function TransactionsPage() {
  return (
    <div className="pt-8">
      <h1 className="text-brand-grey-900 text-[32px] leading-[120%] font-bold">
        Transactions
      </h1>

      <section className="bg-brand-white mt-8 rounded-xl p-6 shadow-sm">
        <TransactionsDataTable data={TRANSACTIONS} />
      </section>
    </div>
  )
}
