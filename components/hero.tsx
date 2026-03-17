import Image from "next/image"
import Link from "next/link"
import { homeHero } from "@/lib/udo-beton-content"

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-10 lg:py-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <div className="absolute inset-0 lg:left-[28%]">
            <Image
              src={homeHero.imageSrc}
              alt={homeHero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[54%_66%] sm:object-[54%_60%] lg:object-[52%_55%] xl:object-[50%_52%] [filter:grayscale(1)_contrast(1.22)_brightness(0.9)]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.74)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.9)_24%,rgba(0,0,0,0.5)_56%,rgba(0,0,0,0.16)_100%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7)_100%)]" />
          </div>

          <div className="relative z-10 flex min-h-[74svh] flex-col justify-between p-5 sm:min-h-[780px] sm:p-7 lg:min-h-[840px] lg:p-10">
            <div className="max-w-[28rem]">
              <span className="block h-[3px] w-14 bg-[#d31111]" />
              <p className="mt-4 max-w-[28ch] font-mono text-[11px] uppercase tracking-[0.18em] text-white/44">
                {homeHero.eyebrow}
              </p>
            </div>

            <div className="max-w-[34rem]">
              <h1 className="max-w-[7.2ch] font-serif text-[3.8rem] leading-[0.84] tracking-[-0.11em] text-white sm:text-[5.2rem] lg:text-[6.2rem] xl:text-[6.8rem]">
                {homeHero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-5 max-w-[20ch] text-[16px] leading-[1.58] text-white/68 sm:text-[18px]">
                {homeHero.body}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[12px] uppercase tracking-[0.16em]">
                <Link href={homeHero.primaryAction.href} className="text-white transition hover:text-[#d31111]">
                  {homeHero.primaryAction.label}
                </Link>
                <span className="text-white/18" aria-hidden>
                  /
                </span>
                <Link href={homeHero.secondaryAction.href} className="text-white/48 transition hover:text-white">
                  {homeHero.secondaryAction.label}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pt-5">
              <p className="max-w-[24ch] font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">
                {homeHero.note}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
                {homeHero.objectDetails.map((detail) => (
                  <span
                    key={detail}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/42"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
