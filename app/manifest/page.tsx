import PageHero from "@/components/page-hero"
import SiteShell from "@/components/site-shell"
import TechnicalArchive from "@/components/technical-archive"
import { manifestoLines, manifestoPrinciples, pageLeads, technicalFacts } from "@/lib/udo-beton-content"

export default function ManifestPage() {
  const lead = pageLeads.manifest

  return (
    <SiteShell>
      <PageHero
        eyebrow={lead.eyebrow}
        title={lead.title}
        body={lead.body}
        aside="Kurz / direkt / lesbar"
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-18">
          <article>
            <div className="grid gap-3">
              {manifestoLines.map((line) => (
                <p
                  key={line}
                  className="max-w-[11ch] font-serif text-[3.7rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[4.9rem] xl:text-[5.6rem]"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6">
              {manifestoPrinciples.map((principle, index) => (
                <article key={principle} className={index > 0 ? "border-t border-white/10 pt-4" : ""}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/[0.28]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 max-w-[18ch] font-serif text-[2rem] leading-[0.95] tracking-[-0.06em] text-white sm:text-[2.35rem]">
                    {principle}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <TechnicalArchive facts={technicalFacts} title="Archiv" intro="Technische Fakten. Ruhig archiviert." />
        </div>
      </section>
    </SiteShell>
  )
}
