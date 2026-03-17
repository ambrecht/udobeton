import Image from "next/image"
import PageHero from "@/components/page-hero"
import SectionIntro from "@/components/section-intro"
import SiteShell from "@/components/site-shell"
import { craftPillars, homeProofs, pageLeads } from "@/lib/udo-beton-content"

export default function CraftPage() {
  const lead = pageLeads.craft

  return (
    <SiteShell>
      <PageHero
        eyebrow={lead.eyebrow}
        title={lead.title}
        body={lead.body}
        aside="Leder / Naht / Sohle / Werkstatt"
      />

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:py-18">
          <figure className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-white/[0.03] sm:min-h-[620px]">
            <Image
              src="/images_1773763632451/149103c1-5d1e-428c-85c5-f0d19c6ae08b.png"
              alt="UDO BETON Stiefel im Berliner Stadtraum"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.16)_28%,rgba(0,0,0,0.84)_100%)]" />
          </figure>

          <div className="grid gap-6">
            {craftPillars.map((pillar, index) => (
              <article key={pillar.title} className={index > 0 ? "border-t border-white/10 pt-6" : ""}>
                <h2 className="font-serif text-[2.55rem] leading-[0.92] tracking-[-0.07em] text-white sm:text-[3rem]">
                  {pillar.title}
                </h2>
                <p className="mt-3 max-w-[30ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.46fr_1.54fr] lg:px-10 lg:py-18">
          <SectionIntro
            eyebrow="Belegkette"
            title="Drei Belege genügen."
            body="Nicht mehr Grafik. Nicht mehr System. Nur Material, Herkunft und lange Nutzung."
            titleClassName="max-w-[7ch]"
            bodyClassName="max-w-[19rem]"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {homeProofs.map((proof) => (
              <article key={proof.eyebrow} className="border-t border-white/10 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/30">{proof.eyebrow}</p>
                <h3 className="mt-4 max-w-[9ch] font-serif text-[2.2rem] leading-[0.92] tracking-[-0.06em] text-white sm:text-[2.5rem]">
                  {proof.title}
                </h3>
                <p className="mt-4 max-w-[28ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">{proof.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
