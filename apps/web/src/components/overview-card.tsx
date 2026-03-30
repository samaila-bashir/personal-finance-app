import { cn } from "@workspace/ui/lib/utils"

export type OverviewCardTone = "dark" | "light"

export function OverviewCard({
  title,
  value,
  tone,
}: {
  title: string
  value: string
  tone: OverviewCardTone
}) {
  const isDark = tone === "dark"

  return (
    <section
      className={cn(
        "h-[119px] w-[337.33px] rounded-xl p-6",
        isDark ? "bg-brand-grey-900" : "bg-brand-white shadow-sm"
      )}
    >
      <div
        className={cn(
          "text-[14px] leading-[150%] font-normal",
          isDark ? "text-brand-white" : "text-brand-grey-500"
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          "mt-3 text-[32px] leading-[120%] font-bold",
          isDark ? "text-brand-white" : "text-brand-grey-900"
        )}
      >
        {value}
      </div>
    </section>
  )
}

