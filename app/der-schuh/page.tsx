import Image from "next/image"
import Link from "next/link"
import Fit from "@/components/fit"
import PageHero from "@/components/page-hero"
import SiteShell from "@/components/site-shell"
import TechnicalArchive from "@/components/technical-archive"
import { pageLeads, shoeHighlights, technicalFacts } from "@/lib/udo-beton-content"

export default function ShoePage() {
  const lead = pageLeads.shoe

  return (
    <SiteShell>
      <PageHero
        eyebrow={lead.eyebrow}
        title={lead.title}
        body={lead.body}
        aside="Sommertramper / Rindsleder / Flexnaht / Vibram"
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.58fr_1.42fr] lg:items-end lg:px-10 lg:py-18">
          <div className="grid gap-6">
            {shoeHighlights.map((item, index) => (
              <article key={item.title} className={index > 0 ? "border-t border-white/10 pt-6" : ""}>
                <h2 className="font-serif text-[2.45rem] leading-[0.92] tracking-[-0.06em] text-white sm:text-[2.9rem]">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-[28ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">{item.body}</p>
              </article>
            ))}
          </div>

          <figure className="relative min-h-[380px] overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_54%_36%,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.78)_100%)] sm:min-h-[520px] lg:min-h-[660px]">
            <Image
              src="/images/beton_schuh_side.png"
              alt="UDO BETON Lederschuh in Seitenansicht"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-contain object-[56%_55%] px-3 pb-6 pt-8 scale-[1.06] sm:px-8 sm:pb-10 sm:pt-12 lg:scale-[1.18]"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 lg:py-18">
          <Fit />

          <div className="grid gap-8">
            <article className="border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Berlin</p>
              <p className="mt-4 max-w-[16ch] font-serif text-[2.2rem] leading-[0.96] tracking-[-0.06em] text-white sm:text-[2.7rem]">
                Die klare Entscheidung fällt nicht im Checkout, sondern im Laden.
              </p>
              <p className="mt-4 max-w-[28ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">
                Material, Form und Spannung werden am Fuß lesbar. Deshalb bleiben die Orte zentral.
              </p>
              <Link
                href="/orte"
                className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white transition hover:text-[#d31111]"
              >
                Zu den Orten
              </Link>
            </article>

            <TechnicalArchive
              facts={technicalFacts.slice(0, 4)}
              title="Sachliche Ebene"
              intro="Material und Konstruktion in ruhiger Form."
              compact
            />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
