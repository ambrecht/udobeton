"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationItems } from "@/lib/udo-beton-content"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="flex shrink-0 flex-col text-left">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">UDO BETON</span>
          <span className="mt-1 text-[11px] tracking-[0.08em] text-white/34">Sub-Brand von UDO / Berlin</span>
        </Link>

        <nav className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0" aria-label="Hauptnavigation">
          <div className="flex min-w-max items-center gap-5">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.18em] transition",
                    isActive ? "text-white" : "text-white/52 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
