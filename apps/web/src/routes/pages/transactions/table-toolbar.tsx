import type { Table } from "@tanstack/react-table"
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu"
import SearchIcon from "@/assets/images/icon-search.svg?react"

import { ToolbarDropdown } from "@/components/data-table"

import { CATEGORY_OPTIONS, SORT_OPTIONS } from "./constants"
import {
  sortOptionToSorting,
  sortingToSortOption,
} from "./sorting"
import type { Transaction } from "./types"

type TransactionsTableToolbarProps = {
  table: Table<Transaction>
}

export function TransactionsTableToolbar({ table }: TransactionsTableToolbarProps) {
  const recipientColumn = table.getColumn("recipient")
  const categoryColumn = table.getColumn("category")

  const searchValue = (recipientColumn?.getFilterValue() as string) ?? ""
  const categoryFilterRaw = (categoryColumn?.getFilterValue() as string) ?? ""
  const categoryDisplay =
    categoryFilterRaw === "" ? "All Transactions" : categoryFilterRaw

  return (
    <div className="flex w-full min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full max-w-[320px] shrink-0 md:w-[320px]">
        <label className="sr-only" htmlFor="transaction-search">
          Search transaction
        </label>
        <input
          id="transaction-search"
          value={searchValue}
          onChange={(e) => recipientColumn?.setFilterValue(e.target.value)}
          placeholder="Search transaction"
          className="text-brand-grey-900 box-border h-[45px] w-full min-w-0 rounded-lg border border-brand-grey-200 bg-brand-white pl-4 pr-11 text-[14px] leading-[150%] font-normal shadow-sm outline-none focus:border-brand-grey-400"
        />
        <SearchIcon
          aria-hidden="true"
          className="absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-brand-grey-500"
        />
      </div>

      <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-end md:flex-1 md:justify-end">
        <ToolbarDropdown
          label="Sort by"
          value={sortingToSortOption(table.getState().sorting)}
          triggerClassName="h-[45px] w-[114px]"
        >
          {SORT_OPTIONS.map((opt) => (
            <DropdownMenuItem
              key={opt}
              onSelect={() => table.setSorting(sortOptionToSorting(opt))}
            >
              {opt}
            </DropdownMenuItem>
          ))}
        </ToolbarDropdown>

        <ToolbarDropdown
          label="Category"
          value={categoryDisplay}
          triggerClassName="h-[45px] w-[177px]"
        >
          {CATEGORY_OPTIONS.map((opt) => (
            <DropdownMenuItem
              key={opt}
              onSelect={() =>
                categoryColumn?.setFilterValue(
                  opt === "All Transactions" ? "" : opt,
                )
              }
            >
              {opt}
            </DropdownMenuItem>
          ))}
        </ToolbarDropdown>
      </div>
    </div>
  )
}
