import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components/sidebar"

export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="pt-8 text-[32px] leading-[120%] font-bold text-brand-grey-900">
      {title}
    </h1>
  )
}

export function AppLayout() {
  return (
    <div className="flex min-h-svh items-stretch">
      <Sidebar />
      <main
        className="min-w-0 flex-1 bg-brand-beige-100 px-10 pb-8"
        aria-label="Main content"
      >
        <div className="mx-auto max-w-[1060px]">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
