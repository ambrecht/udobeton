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
              <p className="max-w-[14ch] font-serif text-[2.2rem] leading-[0.94] tracking-[-0.07em] text-white sm:text-[2.7rem]">
                Leder, Naht, Sohle und Gebrauch müssen sichtbar arbeiten.
              </p>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                {evidencePoints.map((point, index) => (
                  <article key={point.title} className={index > 0 ? "mt-5 border-t border-white/10 pt-5" : ""}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/36">{point.title}</p>
                    <p className="mt-2 max-w-[24ch] text-[14px] leading-[1.58] text-white/62 sm:text-[15px]">
                      {point.body}
                    </p>
                  </article>
                ))}
              </div>

              <article className="grid gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.02] p-4 sm:grid-cols-[9rem_1fr] sm:items-center sm:p-5">
                <div className="relative h-[108px] sm:h-[120px]">
                  <Image
                    src={homeEvidence.insert.imageSrc}
                    alt={homeEvidence.insert.imageAlt}
                    fill
                    sizes="(max-width: 1280px) 40vw, 12vw"
                    className="object-contain object-center opacity-90"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">
                    {homeEvidence.insert.label}
                  </p>
                  <h3 className="mt-3 max-w-[12ch] font-serif text-[1.7rem] leading-[0.96] tracking-[-0.06em] text-white sm:text-[1.95rem]">
                    {homeEvidence.insert.title}
                  </h3>
                  <p className="mt-2 max-w-[22ch] text-[14px] leading-[1.54] text-white/54">
                    {homeEvidence.insert.body}
                  </p>
                </div>
              </article>

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
