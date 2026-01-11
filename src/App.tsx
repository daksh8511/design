import { AppSidebar } from "@/components/ui/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { useCollapse } from "./store"

export default function App() {
  const { isCollapse } = useCollapse()
  return (
    <div>
      {
        isCollapse && (
          <div className="fixed top-0 left-0 h-screen w-screen z-11 bg-black/30 backdrop-blur-md border border-white/10 shadow-xl"></div>

        )
      }
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarTrigger className="sm:block md:hidden" />
          <div className="p-6 w-full">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
