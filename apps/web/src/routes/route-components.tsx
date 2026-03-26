import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components/sidebar"

export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="pt-8 pl-10 text-[32px] leading-[120%] font-bold text-brand-grey-900">
      {title}
    </h1>
  )
}

export function AppLayout() {
  return (
    <div className="flex h-svh items-stretch">
      <Sidebar />
      <main className="flex-1 bg-brand-beige-100" aria-label="Main content">
        <Outlet />
      </main>
    </div>
  )
}
