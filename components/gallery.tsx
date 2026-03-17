import Image from "next/image"
import SectionIntro from "@/components/section-intro"
import { craftPillars } from "@/lib/udo-beton-content"

export default function Gallery() {
  return (
    <section id="handwerk" className="border-b border-white/10 px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[0.64fr_1.36fr] xl:items-start">
          <SectionIntro
            eyebrow="Evidenz / Handwerk"
            title="Weniger Behauptung. Mehr Evidenz."
            body="Ein Belegbild. Eine klare Belegkette."
            titleClassName="max-w-[8.2ch]"
            bodyClassName="max-w-[19rem]"
          />

          <div className="grid gap-8 xl:grid-cols-[1.06fr_0.94fr] xl:items-start">
            <figure className="relative min-h-[480px] overflow-hidden bg-white/[0.03] sm:min-h-[620px] xl:min-h-[720px]">
              <Image
                src="/images_1773763632451/149103c1-5d1e-428c-85c5-f0d19c6ae08b.png"
                alt="UDO BETON Stiefel im Berliner Stadtraum"
                fill
                sizes="(max-width: 1280px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.16)_26%,rgba(0,0,0,0.82)_100%)]" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/42">Beleg / Stadt</p>
                <p className="mt-4 max-w-[12ch] font-serif text-[2.4rem] leading-[0.95] tracking-[-0.07em] text-white sm:text-[3rem] xl:text-[3.3rem]">
                  Gebrauch hinterlässt ein schärferes Bild als jede Behauptung.
                </p>
              </figcaption>
            </figure>

            <div className="flex flex-col gap-8 xl:pt-2">
              <div>
                <p className="max-w-[16ch] font-serif text-[2.5rem] leading-[0.94] tracking-[-0.07em] text-white sm:text-[3rem]">
                  Material, Herkunft und Konstruktion müssen zuerst physisch wirken.
                </p>
                <p className="mt-4 max-w-[30ch] text-[16px] leading-[1.68] text-white/58 sm:text-[17px]">
                  Nicht als Grafik. Nicht als Behauptung. Sondern als Spur von Leder, Naht, Sohle und Stadt.
                </p>
              </div>

              <div className="grid gap-6">
                {craftPillars.map((pillar, index) => (
                  <article key={pillar.title} className={index > 0 ? "border-t border-white/10 pt-6" : ""}>
                    <h3 className="font-serif text-[2.6rem] leading-[0.92] tracking-[-0.07em] text-white sm:text-[3rem]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-[28ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">
                      {pillar.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
