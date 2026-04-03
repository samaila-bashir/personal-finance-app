import type { ReactNode } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"
import CaretDownIcon from "@/assets/images/icon-caret-down.svg?react"

export type ToolbarDropdownProps = {
  label: string
  value: string
  triggerClassName: string
  children: ReactNode
  contentClassName?: string
}

export function ToolbarDropdown({
  label,
  value,
  triggerClassName,
  children,
  contentClassName = "min-w-[160px]",
}: ToolbarDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-brand-grey-500 text-[14px] leading-[150%] font-normal">
        {label}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "text-brand-grey-900 border-brand-grey-200 bg-brand-white box-border flex shrink-0 items-center gap-2 rounded-lg border px-3 text-[14px] leading-[150%] font-normal shadow-sm",
              triggerClassName
            )}
          >
            <span className="min-w-0 flex-1 truncate text-left">{value}</span>
            <CaretDownIcon aria-hidden="true" className="h-3 w-3 shrink-0" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={contentClassName}>
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
