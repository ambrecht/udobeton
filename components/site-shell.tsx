import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

type SiteShellProps = {
  children: ReactNode
  mainClassName?: string
}

export default function SiteShell({ children, mainClassName }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className={cn("relative", mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
}
