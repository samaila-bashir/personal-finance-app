export type SortOption =
  | "Latest"
  | "Oldest"
  | "A to Z"
  | "Z to A"
  | "Highest"
  | "Lowest"

export type CategoryOption =
  | "All Transactions"
  | "General"
  | "Entertainment"
  | "Bills"
  | "Groceries"
  | "Dining Out"
  | "Transportation"
  | "Personal Care"

export type Transaction = {
  id: string
  name: string
  category: Exclude<CategoryOption, "All Transactions">
  date: string
  amount: string
  isPositive: boolean
  avatarSrc: string
}

export type { DataTableColumnMeta as ColumnMeta } from "@/components/data-table"
