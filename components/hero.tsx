"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { heroContent } from "@/lib/udo-beton-content"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.01, 0.97])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 22])
  const imageStyle = prefersReducedMotion ? undefined : { scale: imageScale, y: imageY }

  const scrollToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="der-schuh" ref={sectionRef} className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(255,255,255,0.06),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.015),transparent_16%,rgba(0,0,0,0.32)_100%)]" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-14">
          <div className="relative z-10">
            <p className="max-w-[34ch] font-mono text-[11px] uppercase tracking-[0.18em] text-white/38">
              {heroContent.kicker}
            </p>

            <h1 className="mt-8 max-w-[8.1ch] font-serif text-[4.2rem] leading-[0.78] tracking-[-0.12em] text-white sm:text-[6rem] lg:text-[7.4rem] xl:text-[8.4rem]">
              <span className="block">Handgemacht</span>
              <span className="block pl-[6%]">in Austria.</span>
              <span className="mt-4 block max-w-[8ch]">Getragen in Berlin.</span>
            </h1>

            <p className="mt-6 max-w-[21ch] text-[17px] leading-[1.65] text-white/66 sm:text-[18px]">
              {heroContent.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[12px] uppercase tracking-[0.16em]">
              <button
                type="button"
                onClick={() => scrollToSection(heroContent.primaryAction.target)}
                className="text-white transition hover:text-[#d31111]"
              >
                {heroContent.primaryAction.label}
              </button>
              <span className="text-white/18" aria-hidden>
                /
              </span>
              <button
                type="button"
                onClick={() => scrollToSection(heroContent.secondaryAction.target)}
                className="text-white/52 transition hover:text-white"
              >
                {heroContent.secondaryAction.label}
              </button>
            </div>

            <p className="mt-14 max-w-[13ch] font-serif text-[2.15rem] leading-[0.94] tracking-[-0.07em] text-white sm:text-[2.65rem]">
              {heroContent.closingLine}
            </p>
          </div>

          <figure className="relative min-h-[400px] overflow-hidden bg-[radial-gradient(circle_at_52%_24%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.72)_100%)] sm:min-h-[540px] lg:min-h-[760px]">
            <div className="absolute left-0 top-0 h-3 w-24 bg-[#d31111] sm:w-32" />
            <span className="pointer-events-none absolute right-[-3%] top-[4%] hidden font-serif text-[15rem] leading-[0.78] tracking-[-0.13em] text-white/[0.05] lg:block xl:text-[18rem]">
              BETON
            </span>
            <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.62)_50%,rgba(0,0,0,0.92)_100%)]" />

            <motion.div style={imageStyle} className="relative z-10 h-full">
              <Image
                src="/images/beton_schuh_side.png"
                alt="UDO BETON Lederschuh in Seitenansicht"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain object-[70%_76%] px-2 pb-6 pt-12 sm:px-6 sm:pb-10 lg:px-10 lg:pb-14 lg:pt-20"
              />
            </motion.div>

            <figcaption className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/44">Objekt 01 / Sommertramper</p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {heroContent.proofline.map((item) => (
              <p key={item} className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/48">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
