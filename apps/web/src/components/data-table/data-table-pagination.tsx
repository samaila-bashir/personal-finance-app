import CaretLeftIcon from "@/assets/images/icon-caret-left.svg?react"
import CaretRightIcon from "@/assets/images/icon-caret-right.svg?react"

export type DataTablePaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function DataTablePagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "flex w-full min-w-0 items-center justify-between pl-4 pr-4 pt-6",
}: DataTablePaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={className}>
      <button
        type="button"
        className="text-brand-grey-900 flex h-10 items-center gap-3 rounded-lg border border-brand-grey-200 bg-brand-white px-4 text-[14px] leading-[150%] font-normal shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        <CaretLeftIcon aria-hidden="true" className="h-3 w-3" />
        <span>Prev</span>
      </button>

      <div className="flex items-center gap-2">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={[
              "h-10 w-10 rounded-lg border text-[14px] leading-[150%] font-normal shadow-sm",
              p === currentPage
                ? "border-brand-grey-900 bg-brand-grey-900 text-brand-white"
                : "border-brand-grey-200 bg-brand-white text-brand-grey-900 hover:bg-brand-beige-100",
            ].join(" ")}
            onClick={() => onPageChange(p)}
            aria-current={p === currentPage ? "page" : undefined}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="text-brand-grey-900 flex h-10 items-center gap-3 rounded-lg border border-brand-grey-200 bg-brand-white px-4 text-[14px] leading-[150%] font-normal shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        <span>Next</span>
        <CaretRightIcon aria-hidden="true" className="h-3 w-3" />
      </button>
    </div>
  )
}
