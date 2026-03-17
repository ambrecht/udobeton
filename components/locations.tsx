import Link from "next/link"
import SectionIntro from "@/components/section-intro"
import { berlinLocations } from "@/lib/udo-beton-content"

export default function Locations() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-start">
          <SectionIntro
            eyebrow="Orte"
            title="Zwei Berliner Marker."
            body="Ruhig. Direkt. Vor Ort."
            titleClassName="max-w-[6ch]"
            bodyClassName="max-w-[13rem]"
          />

          <div className="grid gap-5 xl:grid-cols-2">
            {berlinLocations.map((location) => (
              <article
                key={location.district}
                className="flex min-h-[260px] flex-col justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.02] p-5 sm:min-h-[300px] sm:p-7"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">{location.street}</p>
                  <h3 className="mt-7 max-w-[6ch] font-serif text-[3.25rem] leading-[0.84] tracking-[-0.1em] text-white sm:text-[4.2rem]">
                    {location.district}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[16ch] font-serif text-[1.8rem] leading-[0.98] tracking-[-0.06em] text-white sm:text-[2rem]">
                    {location.mood}
                  </p>
                  <p className="mt-3 max-w-[21ch] text-[14px] leading-[1.58] text-white/52 sm:text-[15px]">
                    {location.invitation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-end">
          <Link
            href="/orte"
            className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/54 transition hover:text-white"
          >
            Mehr zu den Orten
          </Link>
        </div>
      </div>
    </section>
  )
}
