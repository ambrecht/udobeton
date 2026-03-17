import Image from "next/image"
import PageHero from "@/components/page-hero"
import SiteShell from "@/components/site-shell"
import { carrierPortraits, pageLeads } from "@/lib/udo-beton-content"

export default function CarriersPage() {
  const lead = pageLeads.carriers

  return (
    <SiteShell>
      <PageHero
        eyebrow={lead.eyebrow}
        title={lead.title}
        body={lead.body}
        aside="Bühnenbild / Musik / Metallwerkstatt"
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-18">
          <div className="grid gap-12">
            {carrierPortraits.map((portrait, index) => (
              <article
                key={portrait.slug}
                id={portrait.slug}
                className={index > 0 ? "grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-[0.64fr_1.36fr] lg:items-start" : "grid gap-8 lg:grid-cols-[0.64fr_1.36fr] lg:items-start"}
              >
                <figure className="relative min-h-[380px] overflow-hidden rounded-[1.75rem] bg-white/[0.03] sm:min-h-[560px]">
                  <Image
                    src={portrait.portraitSrc}
                    alt={`Porträt von ${portrait.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(0,0,0,0.22)_50%,rgba(0,0,0,0.86)_100%)]" />
                </figure>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">
                    {portrait.discipline} / {portrait.location}
                  </p>
                  <h2 className="mt-4 max-w-[7ch] font-serif text-[4rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[5rem] xl:text-[5.6rem]">
                    {portrait.name}
                  </h2>
                  <blockquote className="mt-6 max-w-[10ch] font-serif text-[2.9rem] leading-[0.9] tracking-[-0.07em] text-white sm:text-[3.6rem]">
                    „{portrait.quote}“
                  </blockquote>
                  <p className="mt-6 max-w-[31ch] text-[16px] leading-[1.7] text-white/58 sm:text-[17px]">{portrait.description}</p>
                  <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-white/42">
                    Modell / {portrait.featuredModel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
