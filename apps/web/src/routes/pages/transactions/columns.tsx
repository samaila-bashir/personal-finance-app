import { createColumnHelper } from "@tanstack/react-table"

import type { ColumnMeta, Transaction } from "./types"
import { parseAmountValue, parseTransactionDate } from "./sorting"

const columnHelper = createColumnHelper<Transaction>()

export const transactionColumns = [
  columnHelper.accessor("name", {
    id: "recipient",
    header: "Recipient / Sender",
    sortingFn: (rowA, rowB, columnId) =>
      String(rowA.getValue(columnId)).localeCompare(
        String(rowB.getValue(columnId)),
        undefined,
        { sensitivity: "base" },
      ),
    cell: ({ row }) => (
      <div className="flex min-w-0 items-center gap-4">
        <img
          src={row.original.avatarSrc}
          alt=""
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <span className="text-brand-grey-900 min-w-0 truncate text-[14px] leading-[150%] font-bold">
          {row.original.name}
        </span>
      </div>
    ),
    filterFn: (row, columnId, filterValue) => {
      const search = String(filterValue ?? "").trim().toLowerCase()
      if (!search) return true

      const value = String(row.getValue(columnId) ?? "").toLowerCase()
      return value.includes(search)
    },
    meta: {
      headerClassName:
        "text-brand-grey-500 h-auto py-3 pl-4 pr-0 text-[12px] leading-[150%] font-normal",
      cellClassName: "py-8 pl-4 pr-0 align-middle",
    } satisfies ColumnMeta,
  }),
  columnHelper.display({
    id: "spacer1",
    enableSorting: false,
    header: () => null,
    cell: () => null,
    meta: {
      headerClassName: "w-[6px] min-w-[6px] max-w-[6px] p-0",
      cellClassName: "w-[6px] p-0",
      isSpacer: true,
    } satisfies ColumnMeta,
  }),
  columnHelper.accessor("category", {
    id: "category",
    header: "Category",
    enableSorting: false,
    filterFn: (row, columnId, filterValue) => {
      const filter = String(filterValue ?? "").trim()
      if (!filter) return true
      return String(row.getValue(columnId) ?? "") === filter
    },
    meta: {
      headerClassName:
        "text-brand-grey-500 h-auto px-0 py-3 text-[12px] leading-[150%] font-normal",
      cellClassName:
        "text-brand-grey-500 px-0 py-8 align-middle text-[12px] leading-[150%] font-normal",
    } satisfies ColumnMeta,
  }),
  columnHelper.display({
    id: "spacer2",
    enableSorting: false,
    header: () => null,
    cell: () => null,
    meta: {
      headerClassName: "w-[6px] min-w-[6px] max-w-[6px] p-0",
      cellClassName: "w-[6px] p-0",
      isSpacer: true,
    } satisfies ColumnMeta,
  }),
  columnHelper.accessor("date", {
    id: "date",
    header: "Transaction Date",
    sortingFn: (rowA, rowB, columnId) => {
      const a = parseTransactionDate(String(rowA.getValue(columnId)))
      const b = parseTransactionDate(String(rowB.getValue(columnId)))
      return a === b ? 0 : a > b ? 1 : -1
    },
    meta: {
      headerClassName:
        "text-brand-grey-500 h-auto px-0 py-3 text-[12px] leading-[150%] font-normal",
      cellClassName:
        "text-brand-grey-500 px-0 py-8 align-middle text-[12px] leading-[150%] font-normal",
    } satisfies ColumnMeta,
  }),
  columnHelper.display({
    id: "spacer3",
    enableSorting: false,
    header: () => null,
    cell: () => null,
    meta: {
      headerClassName: "w-[32px] min-w-[32px] max-w-[32px] p-0",
      cellClassName: "w-[32px] p-0",
      isSpacer: true,
    } satisfies ColumnMeta,
  }),
  columnHelper.accessor("amount", {
    id: "amount",
    header: "Amount",
    sortingFn: (rowA, rowB, columnId) => {
      const a = parseAmountValue(String(rowA.getValue(columnId)))
      const b = parseAmountValue(String(rowB.getValue(columnId)))
      return a === b ? 0 : a > b ? 1 : -1
    },
    cell: ({ row }) => (
      <span
        className={
          row.original.isPositive ? "text-brand-green" : "text-brand-grey-900"
        }
      >
        {row.original.amount}
      </span>
    ),
    meta: {
      headerClassName:
        "text-brand-grey-500 h-auto py-3 pr-4 pl-0 text-right text-[12px] leading-[150%] font-normal",
      cellClassName:
        "py-8 pr-4 pl-0 text-right align-middle text-[14px] leading-[150%] font-bold",
    } satisfies ColumnMeta,
  }),
]
