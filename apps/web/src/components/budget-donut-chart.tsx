import type { ReactNode } from "react"

function polar(cx: number, cy: number, r: number, angleFromTopDeg: number) {
  const rad = ((-90 + angleFromTopDeg) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function donutSegmentPath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  a0: number,
  a1: number
) {
  const p0 = polar(cx, cy, rOuter, a0)
  const p1 = polar(cx, cy, rOuter, a1)
  const p2 = polar(cx, cy, rInner, a1)
  const p3 = polar(cx, cy, rInner, a0)
  const sweep = a1 - a0
  const largeArc = sweep > 180 ? 1 : 0
  return [
    `M ${p0.x} ${p0.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p1.x} ${p1.y}`,
    `L ${p2.x} ${p2.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${p3.x} ${p3.y}`,
    "Z",
  ].join(" ")
}

function innerBandFill(outerFill: string) {
  return `color-mix(in srgb, ${outerFill} 52%, white)`
}

const VIEW_W = 248
const VIEW_H = 240

export function BudgetDonutChart({
  segments,
  centerAmount,
  centerSubtext,
}: {
  segments: { value: number; fill: string }[]
  centerAmount: string
  centerSubtext: string
}) {
  const total = segments.reduce((s, seg) => s + seg.value, 0)
  const cx = VIEW_W / 2
  const cy = VIEW_H / 2
  const rOuter = Math.min(cx, cy) - 6
  const rInner = rOuter - 34
  const rMid = (rInner + rOuter) / 2

  const rings = segments.reduce(
    (acc, seg, i) => {
      const sweep = (seg.value / total) * 360
      const a0 = acc.angle
      const a1 = acc.angle + sweep

      const ring = (
        <g key={i}>
          <path
            d={donutSegmentPath(cx, cy, rInner, rMid, a0, a1)}
            fill={innerBandFill(seg.fill)}
          />
          <path
            d={donutSegmentPath(cx, cy, rMid, rOuter, a0, a1)}
            fill={seg.fill}
          />
        </g>
      )

      return { angle: a1, rings: [...acc.rings, ring] }
    },
    { angle: 0, rings: [] as ReactNode[] }
  ).rings

  return (
    <div className="relative box-border h-[240px] w-[248px] shrink-0 [&_svg]:block">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        width={248}
        height={240}
        className="size-full max-h-[240px] max-w-[248px]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        role="img"
      >
        {rings}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-brand-grey-900 text-[32px] leading-[120%] font-bold tracking-tight">
          {centerAmount}
        </p>
        <p className="text-brand-grey-500 mt-1 max-w-[160px] text-[12px] leading-[150%] font-normal">
          {centerSubtext}
        </p>
      </div>
    </div>
  )
}
