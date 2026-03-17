import Image from "next/image"
import Link from "next/link"
import SectionIntro from "@/components/section-intro"
import { evidencePoints, homeEvidence } from "@/lib/udo-beton-content"

export default function Gallery() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-start">
          <SectionIntro
            eyebrow="Evidenz"
            title={homeEvidence.title}
            body={homeEvidence.body}
            titleClassName="max-w-[6.2ch]"
            bodyClassName="max-w-[16rem]"
          />

          <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
            <figure className="relative min-h-[480px] overflow-hidden rounded-[1.75rem] bg-white/[0.03] sm:min-h-[620px]">
              <Image
                src={homeEvidence.imageSrc}
                alt={homeEvidence.imageAlt}
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover object-[54%_48%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.14)_28%,rgba(0,0,0,0.82)_100%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/42">Gebrauch / Berlin</p>
              </figcaption>
            </figure>

            <div className="flex flex-col gap-7 xl:pt-2">
              <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">
                  {homeEvidence.insert.label}
                </p>
                <div className="relative mt-5 h-[180px] sm:h-[220px]">
                  <Image
                    src={homeEvidence.insert.imageSrc}
                    alt={homeEvidence.insert.imageAlt}
                    fill
                    sizes="(max-width: 1280px) 100vw, 24vw"
                    className="object-contain object-center opacity-95"
                  />
                </div>
                <h3 className="mt-4 max-w-[10ch] font-serif text-[2.25rem] leading-[0.92] tracking-[-0.07em] text-white sm:text-[2.6rem]">
                  {homeEvidence.insert.title}
                </h3>
                <p className="mt-3 max-w-[21ch] text-[14px] leading-[1.58] text-white/56 sm:text-[15px]">
                  {homeEvidence.insert.body}
                </p>
              </article>

              <p className="max-w-[15ch] font-serif text-[2.25rem] leading-[0.94] tracking-[-0.07em] text-white sm:text-[2.8rem]">
                Leder, Naht, Sohle und Gebrauch müssen sichtbar arbeiten.
              </p>

              <div className="grid gap-5">
                {evidencePoints.map((point, index) => (
                  <article key={point.title} className={index > 0 ? "border-t border-white/10 pt-5" : ""}>
                    <h3 className="font-serif text-[2rem] leading-[0.92] tracking-[-0.06em] text-white sm:text-[2.3rem]">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-[24ch] text-[14px] leading-[1.58] text-white/56 sm:text-[15px]">
                      {point.body}
                    </p>
                  </article>
                ))}
              </div>

              <Link
                href={homeEvidence.action.href}
                className="inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white transition hover:text-[#d31111]"
              >
                {homeEvidence.action.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
