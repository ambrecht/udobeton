import Image from "next/image"
import Link from "next/link"
import SectionIntro from "@/components/section-intro"
import { carrierPortraits } from "@/lib/udo-beton-content"

export default function Traeger() {
  const [featuredPortrait, ...otherPortraits] = carrierPortraits

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <figure className="relative min-h-[460px] overflow-hidden rounded-[1.75rem] bg-white/[0.03] sm:min-h-[620px]">
            <Image
              src={featuredPortrait.portraitSrc}
              alt={`Portrait von ${featuredPortrait.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center [filter:grayscale(1)_contrast(1.08)_brightness(0.94)]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_12%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.86)_100%)]" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/44">
                {featuredPortrait.placeholderLabel}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/56">
                {featuredPortrait.location}
              </p>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-8">
            <SectionIntro
              eyebrow="Träger"
              title="Eine Person führt. Die anderen bleiben still."
              titleClassName="max-w-[8ch]"
            />

            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/42">
                {featuredPortrait.discipline} / {featuredPortrait.location}
              </p>
              <h3 className="mt-4 max-w-[7ch] font-serif text-[4rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[4.8rem] xl:text-[5.4rem]">
                {featuredPortrait.name}
              </h3>
              <blockquote className="mt-5 max-w-[9ch] font-serif text-[2.55rem] leading-[0.9] tracking-[-0.07em] text-white sm:text-[3.25rem]">
                "{featuredPortrait.quote}"
              </blockquote>
              <Link
                href="/traeger"
                className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white transition hover:text-[#d31111]"
              >
                Mehr zu Träger
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/30">Weitere Träger</p>
              <div className="mt-4 grid gap-4">
                {otherPortraits.map((portrait) => (
                  <Link
                    key={portrait.slug}
                    href={`/traeger#${portrait.slug}`}
                    className="border-b border-white/10 pb-4 transition hover:text-white"
                  >
                    <p className="font-serif text-[2rem] leading-[0.92] tracking-[-0.06em] text-white/88">
                      {portrait.name}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-white/46">
                      {portrait.discipline} / {portrait.location}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
