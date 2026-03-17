import PageHero from "@/components/page-hero"
import SiteShell from "@/components/site-shell"
import { berlinLocations, pageLeads } from "@/lib/udo-beton-content"

export default function LocationsPage() {
  const lead = pageLeads.locations

  return (
    <SiteShell>
      <PageHero
        eyebrow={lead.eyebrow}
        title={lead.title}
        body={lead.body}
        aside="Prenzlauer Berg / Kreuzberg"
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-18">
          <div className="grid gap-6 xl:grid-cols-2">
            {berlinLocations.map((location) => (
              <article
                key={location.district}
                className="flex min-h-[360px] flex-col justify-between rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.76)_100%)] p-6 sm:min-h-[420px] sm:p-8"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">{location.street}</p>
                  <h2 className="mt-8 max-w-[6ch] font-serif text-[4.2rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[5.2rem]">
                    {location.district}
                  </h2>
                </div>

                <div>
                  <p className="max-w-[15ch] font-serif text-[2.3rem] leading-[0.95] tracking-[-0.07em] text-white sm:text-[2.7rem]">
                    {location.mood}
                  </p>
                  <p className="mt-4 max-w-[23ch] text-[15px] leading-[1.62] text-white/56 sm:text-[16px]">
                    {location.invitation}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {location.details.map((detail) => (
                      <span
                        key={detail}
                        className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/38"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
