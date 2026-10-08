import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="w-full pt-[6.5rem] sm:pt-28 bg-background min-h-screen flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
