import type { SortingState } from "@tanstack/react-table"

import type { SortOption } from "./types"

export function parseTransactionDate(value: string): number {
  const t = Date.parse(value)
  return Number.isFinite(t) ? t : 0
}

export function parseAmountValue(value: string): number {
  const normalized = value.replace(/[^0-9.-]/g, "")
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

export const DEFAULT_SORTING: SortingState = [{ id: "date", desc: true }]

export function sortOptionToSorting(option: SortOption): SortingState {
  switch (option) {
    case "Latest":
      return [{ id: "date", desc: true }]
    case "Oldest":
      return [{ id: "date", desc: false }]
    case "A to Z":
      return [{ id: "recipient", desc: false }]
    case "Z to A":
      return [{ id: "recipient", desc: true }]
    case "Highest":
      return [{ id: "amount", desc: true }]
    case "Lowest":
      return [{ id: "amount", desc: false }]
    default:
      return DEFAULT_SORTING
  }
}

export function sortingToSortOption(sorting: SortingState): SortOption {
  const s = sorting[0]
  if (!s) return "Latest"
  if (s.id === "date") return s.desc ? "Latest" : "Oldest"
  if (s.id === "recipient") return s.desc ? "Z to A" : "A to Z"
  if (s.id === "amount") return s.desc ? "Highest" : "Lowest"
  return "Latest"
}
