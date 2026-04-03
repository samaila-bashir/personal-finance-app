import type { CategoryOption, SortOption } from "./types"

export const TRANSACTIONS_PAGE_SIZE = 2

export const SORT_OPTIONS: SortOption[] = [
  "Latest",
  "Oldest",
  "A to Z",
  "Z to A",
  "Highest",
  "Lowest",
]

export const CATEGORY_OPTIONS: CategoryOption[] = [
  "All Transactions",
  "General",
  "Entertainment",
  "Bills",
  "Groceries",
  "Dining Out",
  "Transportation",
  "Personal Care",
]
