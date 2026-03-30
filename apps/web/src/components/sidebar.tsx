import { cn } from "@workspace/ui/lib/utils"
import { NavLink } from "react-router-dom"

import { NAV_ITEMS, type NavItem } from "@/routes/nav-items"

const ACTIVE_ITEM_WIDTH_PX = 276

function SidebarNavItem({
  item,
}: {
  item: NavItem
}) {
  const Icon = item.Icon

  return (
    <NavLink
      to={item.path}
      end
      className={({ isActive }) =>
        cn(
          "box-border flex items-center gap-3 py-4 pr-4 pl-8 text-[16px] leading-6 transition-colors",
          isActive
            ? "bg-brand-beige-100 text-brand-grey-900 border-brand-green rounded-l-none rounded-r-xl border-l-4 pl-[28px]"
            : "text-brand-grey-300 rounded-xl bg-transparent hover:bg-white/5"
        )
      }
      style={({ isActive }) =>
        isActive ? { width: ACTIVE_ITEM_WIDTH_PX } : undefined
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            aria-hidden="true"
            className={cn(
              "h-[18.75px] w-[18px]",
              isActive ? "text-brand-green" : "text-brand-grey-300"
            )}
          />
          <span className={isActive ? "font-bold" : "font-medium"}>
            {item.label}
          </span>
        </>
      )}
    </NavLink>
  )
}

export function Sidebar() {
  const logoSrc = new URL(
    "../assets/images/logo-large.svg",
    import.meta.url
  ).toString()

  return (
    <aside
      className={cn(
        "bg-brand-grey-900 text-brand-white flex min-h-svh shrink-0 flex-col self-stretch rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none",
        "w-[300px]"
      )}
    >
      <div className="h-[101.76px] px-[40px] py-[32px]">
        <img
          src={logoSrc}
          alt="finance"
          className="block h-[21.76px] w-auto"
          draggable={false}
        />
      </div>

      <div className="flex flex-1 flex-col pt-6 pb-4">
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem key={item.id} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  )
}
