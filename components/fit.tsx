"use client"

import { useState } from "react"
import SectionIntro from "@/components/section-intro"
import { fitNotes, fitSizes, fitWidths, type FitWidth } from "@/lib/udo-beton-content"

export default function Fit() {
  const [selectedSize, setSelectedSize] = useState(42)
  const [selectedWidth, setSelectedWidth] = useState<FitWidth>("F")

  return (
    <section id="passform" className="border-b border-white/10 px-4 py-9 sm:px-6 sm:py-11 lg:px-10">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[0.58fr_1.42fr] lg:items-center lg:gap-10">
        <SectionIntro
          eyebrow="Passform / Orientierung"
          title="Passform als Referenz."
          body="Größe, Weite, Laden."
          className="mb-6 lg:mb-0"
          titleClassName="max-w-[7.4ch] text-[3.15rem] sm:text-[3.9rem] xl:text-[4.3rem]"
          bodyClassName="max-w-[17rem]"
        />

        <article className="grid gap-6 bg-white/[0.03] p-5 sm:p-6 lg:grid-cols-[0.95fr_0.48fr_0.57fr]">
          <div className="grid gap-5">
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">Größe</p>
                <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/56">{selectedSize}</span>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-1.5 sm:grid-cols-7">
                {fitSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-9 border font-mono text-[12px] uppercase tracking-[0.16em] ${
                      selectedSize === size
                        ? "border-white/70 bg-white/[0.08] text-white"
                        : "border-white/10 text-white/52 transition hover:border-white/28 hover:text-white"
                    }`}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-5">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">Weite</p>
                <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/56">{selectedWidth}</span>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {fitWidths.map((width) => (
                  <button
                    key={width.value}
                    type="button"
                    onClick={() => setSelectedWidth(width.value)}
                    className={`border px-4 py-3 text-left ${
                      selectedWidth === width.value
                        ? "border-white/70 bg-white/[0.08] text-white"
                        : "border-white/10 text-white/56 transition hover:border-white/28 hover:text-white"
                    }`}
                    aria-pressed={selectedWidth === width.value}
                  >
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em]">{width.label}</span>
                    <span className="mt-2 block text-[14px] leading-[1.5]">{width.hint}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:pl-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Hinweise</p>
            {fitNotes.map((note) => (
              <article key={note.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/62">{note.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/52">{note.body}</p>
              </article>
            ))}
          </div>

          <div className="lg:pl-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Berlin</p>
            <p className="mt-3 max-w-[15ch] font-serif text-[1.95rem] leading-[0.96] tracking-[-0.06em] text-white sm:text-[2.2rem]">
              Anprobe vor Ort schlägt jede Tabelle.
            </p>
            <a
              href="#orte"
              className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white transition hover:text-[#d31111]"
            >
              Zu den Adressen
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
