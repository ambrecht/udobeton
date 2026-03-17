"use client"

import Image from "next/image"
import { useState } from "react"
import SectionIntro from "@/components/section-intro"
import { carrierPortraits } from "@/lib/udo-beton-content"
import { cn } from "@/lib/utils"

export default function Traeger() {
  const [activeSlug, setActiveSlug] = useState(carrierPortraits[0]?.slug ?? "")
  const activePortrait = carrierPortraits.find((portrait) => portrait.slug === activeSlug) ?? carrierPortraits[0]!
  const activeIndex = carrierPortraits.findIndex((portrait) => portrait.slug === activePortrait.slug)

  return (
    <section id="traeger" className="border-b border-white/10 px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[0.64fr_1.36fr] xl:items-start">
          <SectionIntro
            eyebrow="Träger"
            title="Menschen geben dem Schuh Kontext."
            body="Ein Feature. Daneben ein ruhiger Index."
            titleClassName="max-w-[8.3ch]"
            bodyClassName="max-w-[20rem]"
          />

          <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
            <article className="overflow-hidden bg-white/[0.03]">
              <div className="grid lg:grid-cols-[0.94fr_1.06fr]">
                <figure className="relative min-h-[460px] overflow-hidden sm:min-h-[620px] xl:min-h-[720px]">
                  {activePortrait.portraitSrc ? (
                    <Image
                      src={activePortrait.portraitSrc}
                      alt={`Porträt von ${activePortrait.name}`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 48vw"
                      className="object-cover grayscale"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.86)_100%)]" />
                      <div className="absolute inset-[11%] border border-white/10" />
                    </>
                  )}

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_16%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.86)_100%)]" />

                  <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/42">
                      {activePortrait.placeholderLabel}
                    </p>
                    {activePortrait.location ? (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/54">
                        {activePortrait.location}
                      </p>
                    ) : null}
                  </figcaption>
                </figure>

                <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">
                      Träger 0{activeIndex + 1}
                    </p>
                    <h3 className="mt-5 max-w-[7ch] font-serif text-[4rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[5rem] xl:text-[5.5rem]">
                      {activePortrait.name}
                    </h3>
                    <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.16em] text-white/46">
                      {activePortrait.discipline}
                    </p>
                  </div>

                  {activePortrait.quote ? (
                    <blockquote className="max-w-[10ch] font-serif text-[2.95rem] leading-[0.9] tracking-[-0.07em] text-white sm:text-[3.55rem] xl:text-[4rem]">
                      „{activePortrait.quote}“
                    </blockquote>
                  ) : null}

                  <div>
                    <p className="max-w-[28ch] text-[16px] leading-[1.7] text-white/62 sm:text-[17px]">
                      {activePortrait.description}
                    </p>
                    <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.16em] text-white/44">
                      {activePortrait.featuredModel ? `Modell / ${activePortrait.featuredModel}` : "Berlin / Gebrauch"}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <aside className="xl:border-l xl:border-white/10 xl:pl-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Weitere Träger</p>

              <div className="mt-6">
                {carrierPortraits.map((portrait, index) => {
                  const isActive = portrait.slug === activePortrait.slug

                  return (
                    <button
                      key={portrait.slug}
                      type="button"
                      onClick={() => setActiveSlug(portrait.slug)}
                      className={cn(
                        "w-full border-b border-white/10 py-5 text-left transition last:border-b-0",
                        isActive ? "text-white" : "text-white/48 hover:text-white",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] uppercase tracking-[0.16em]",
                          isActive ? "text-[#d31111]" : "text-white/28",
                        )}
                      >
                        0{index + 1}
                      </span>
                      <p className="mt-3 font-serif text-[2.4rem] leading-[0.9] tracking-[-0.07em]">{portrait.name}</p>
                      <p className="mt-2 text-[15px] leading-[1.6] text-inherit">
                        {portrait.discipline}
                        {portrait.location ? ` / ${portrait.location}` : ""}
                      </p>
                    </button>
                  )
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
