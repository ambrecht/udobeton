import Link from "next/link"
import TechnicalArchive from "@/components/technical-archive"
import { manifestoLines, technicalFacts } from "@/lib/udo-beton-content"

export default function Manifest() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Manifest</p>
            <div className="mt-6 grid gap-3">
              {manifestoLines.map((line) => (
                <p
                  key={line}
                  className="max-w-[11ch] font-serif text-[3rem] leading-[0.84] tracking-[-0.1em] text-white sm:text-[4rem] xl:text-[4.8rem]"
                >
                  {line}
                </p>
              ))}
            </div>

            <Link
              href="/manifest"
              className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/54 transition hover:text-white"
            >
              Ganzes Manifest lesen
            </Link>
          </article>

          <TechnicalArchive
            facts={technicalFacts.slice(0, 4)}
            title="Archiv"
            intro="Die sachliche Ebene bleibt ruhig."
            compact
          />
        </div>
      </div>
    </section>
  )
}
