import Documentation from "@/components/documentation"
import Facts from "@/components/facts"
import Fit from "@/components/fit"
import Gallery from "@/components/gallery"
import Hero from "@/components/hero"
import Locations from "@/components/locations"
import Manifest from "@/components/manifest"
import Navigation from "@/components/navigation"
import Traeger from "@/components/traeger"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="relative">
        <Navigation />
        <Hero />
        <Facts />
        <Traeger />
        <Gallery />
        <Fit />
        <Locations />
        <Manifest />
        <Documentation />

        <footer className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/[0.38]">UDO BETON</p>
                <p className="mt-4 max-w-[11ch] font-serif text-[3rem] leading-[0.86] tracking-[-0.09em] text-white sm:text-[4rem] xl:text-[4.6rem]">
                  Handgemacht in Austria. Getragen in Berlin.
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/[0.34]">
                  Prenzlauer Berg / Stargarder Straße / Kreuzberg / Körtestraße
                </p>
                <p className="mt-4 max-w-[18ch] font-serif text-[2rem] leading-[0.96] tracking-[-0.06em] text-white sm:text-[2.4rem]">
                  Kein Ausklang. Ein Schlusspunkt in Material und Stadt.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
