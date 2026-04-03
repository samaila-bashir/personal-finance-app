import type { ReactNode } from "react"

import { flexRender, type Table as TanStackTable } from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

import type { DataTableColumnMeta } from "./types"

export type DataTableViewProps<TData> = {
  table: TanStackTable<TData>
  colgroup?: ReactNode
  emptyMessage?: string
  tableClassName?: string
  headerRowClassName?: string
  tableHeaderClassName?: string
  emptyRowClassName?: string
}

const defaultRowClass =
  "border-brand-grey-100 hover:bg-transparent data-[state=selected]:bg-transparent"

export function DataTableView<TData>({
  table,
  colgroup,
  emptyMessage = "No results.",
  tableClassName = "table-fixed border-0 text-inherit",
  headerRowClassName = defaultRowClass,
  tableHeaderClassName = "[&_tr]:border-brand-grey-100",
  emptyRowClassName = defaultRowClass,
}: DataTableViewProps<TData>) {
  const colSpan = table.getVisibleLeafColumns().length

  return (
    <Table className={tableClassName}>
      {colgroup}
      <TableHeader className={tableHeaderClassName}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className={headerRowClassName}>
            {headerGroup.headers.map((header) => {
              const meta = header.column.columnDef.meta as
                | DataTableColumnMeta
                | undefined
              return (
                <TableHead
                  key={header.id}
                  scope={meta?.isSpacer ? undefined : "col"}
                  aria-hidden={meta?.isSpacer}
                  className={cn(
                    meta?.headerClassName,
                    !meta?.headerClassName &&
                      "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground"
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className={headerRowClassName}>
              {row.getVisibleCells().map((cell) => {
                const meta = cell.column.columnDef.meta as
                  | DataTableColumnMeta
                  | undefined
                return (
                  <TableCell
                    key={cell.id}
                    aria-hidden={meta?.isSpacer}
                    className={cn(
                      meta?.cellClassName,
                      !meta?.cellClassName &&
                        "p-2 align-middle whitespace-nowrap"
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                )
              })}
            </TableRow>
          ))
        ) : (
          <TableRow className={emptyRowClassName}>
            <TableCell
              colSpan={colSpan}
              className="text-brand-grey-500 h-24 text-center align-middle"
            >
              {emptyMessage}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
