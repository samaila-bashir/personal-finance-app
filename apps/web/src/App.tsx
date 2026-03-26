import { Sidebar } from "./components/sidebar"

export function App() {
  return (
    <div className="flex h-svh items-stretch bg-background">
      <Sidebar />
      <main className="flex-1" aria-label="Main content" />
    </div>
  )
}
