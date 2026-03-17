import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/36">UDO BETON</p>
          <p className="mt-4 max-w-[11ch] font-serif text-[2.8rem] leading-[0.86] tracking-[-0.09em] text-white sm:text-[4rem]">
            Handgemacht in Austria. Getragen in Berlin.
          </p>
        </div>

        <div className="grid gap-2 text-left lg:text-right">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/34">
            Prenzlauer Berg / Stargarder Straße
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/34">Kreuzberg / Körtestraße</p>
          <Link
            href="/orte"
            className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
          >
            Zu den Orten
          </Link>
        </div>
      </div>
    </footer>
  )
}
