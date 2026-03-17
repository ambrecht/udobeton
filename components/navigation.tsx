"use client"

import { useState } from "react"
import { navigationItems } from "@/lib/udo-beton-content"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToSection("der-schuh")}
          className="text-left"
          aria-label="Zum Seitenanfang"
        >
          <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-white">UDO BETON</span>
          <span className="mt-1 block text-[11px] tracking-[0.08em] text-white/30">
            Handgemacht in Austria. Getragen in Berlin.
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/56 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/76 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          Menü
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="border-b border-white/10 py-4 text-left font-mono text-[11px] uppercase tracking-[0.18em] text-white/74 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
