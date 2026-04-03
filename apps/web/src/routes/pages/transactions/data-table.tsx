import { useEffect, useState } from "react"

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table"

import {
  DataTablePagination,
  DataTableView,
} from "@/components/data-table"

import { transactionColumns } from "./columns"
import { TRANSACTIONS_PAGE_SIZE } from "./constants"
import { DEFAULT_SORTING } from "./sorting"
import type { Transaction } from "./types"
import { TransactionsTableToolbar } from "./table-toolbar"

export type TransactionsDataTableProps = {
  data: Transaction[]
}

export function TransactionsDataTable({ data }: TransactionsDataTableProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>(DEFAULT_SORTING)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: TRANSACTIONS_PAGE_SIZE,
  })

  const table = useReactTable({
    data,
    columns: transactionColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination, columnFilters, sorting },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
  })

  const pageCount = Math.max(1, table.getPageCount())

  useEffect(() => {
    const lastIndex = Math.max(0, pageCount - 1)
    setPagination((p) =>
      p.pageIndex > lastIndex ? { ...p, pageIndex: lastIndex } : p,
    )
  }, [pageCount])

  return (
    <div className="mx-auto w-[996px] max-w-full">
      <TransactionsTableToolbar table={table} />

      <div className="mt-6 w-full min-w-0">
        <DataTableView
          table={table}
          colgroup={
            <colgroup>
              <col style={{ width: 428 }} />
              <col style={{ width: 6 }} />
              <col style={{ width: 120 }} />
              <col style={{ width: 6 }} />
              <col style={{ width: 120 }} />
              <col style={{ width: 32 }} />
              <col />
            </colgroup>
          }
        />

        <DataTablePagination
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={pageCount}
          onPageChange={(p) => table.setPageIndex(p - 1)}
        />
      </div>
    </div>
  )
}
