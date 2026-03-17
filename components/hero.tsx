import Image from "next/image"
import Link from "next/link"
import { homeHero } from "@/lib/udo-beton-content"

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-10 lg:py-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <div className="absolute inset-0 lg:left-[22%]">
            <Image
              src={homeHero.imageSrc}
              alt={homeHero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_74%] sm:object-[50%_68%] lg:object-[50%_57%] xl:object-[50%_53%] scale-[1.04] sm:scale-[1.06] lg:scale-[1.08] [filter:grayscale(1)_contrast(1.14)_brightness(0.94)]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_49%_76%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_48%_60%,rgba(255,255,255,0.08),transparent_25%)] mix-blend-screen" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_38%,rgba(0,0,0,0.34),transparent_23%),radial-gradient(circle_at_86%_70%,rgba(0,0,0,0.22),transparent_18%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.92)_23%,rgba(0,0,0,0.46)_55%,rgba(0,0,0,0.1)_100%),radial-gradient(circle_at_82%_34%,rgba(0,0,0,0.4),transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7)_100%)]" />
          </div>

          <div className="relative z-10 flex min-h-[74svh] flex-col justify-between p-5 sm:min-h-[780px] sm:p-7 lg:min-h-[840px] lg:p-10">
            <div className="max-w-[28rem]">
              <span className="block h-[2px] w-9 bg-[#d31111]" />
              <p className="mt-4 max-w-[24ch] font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
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

              <p className="mt-4 max-w-[18ch] text-[15px] leading-[1.5] text-white/66 sm:text-[17px]">
                {homeHero.body}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[12px] uppercase tracking-[0.16em]">
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

            <div className="flex justify-end">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {homeHero.objectDetails.map((detail) => (
                  <span
                    key={detail}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/36"
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
