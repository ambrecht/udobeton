import SectionIntro from "@/components/section-intro"
import { berlinLocations } from "@/lib/udo-beton-content"

export default function Locations() {
  return (
    <section id="orte" className="border-b border-white/10 px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[0.64fr_1.36fr] xl:items-start">
          <SectionIntro
            eyebrow="Orte / Berlin"
            title="Zwei Adressen. Zwei Marker im Stadtraum."
            body="Berlin-Koordinaten statt Store-Kulisse."
            titleClassName="max-w-[8ch]"
            bodyClassName="max-w-[18rem]"
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {berlinLocations.map((location, index) => (
              <article
                key={location.district}
                className="flex min-h-[300px] flex-col justify-between bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.72)_100%)] p-6 sm:min-h-[340px] sm:p-8"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">
                    Berlin 0{index + 1} / {location.street}
                  </p>
                  <h3 className="mt-8 max-w-[6ch] font-serif text-[4.2rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[5.1rem] xl:text-[5.6rem]">
                    {location.district}
                  </h3>
                </div>

                <div>
                  <p className="max-w-[15ch] font-serif text-[2.2rem] leading-[0.95] tracking-[-0.07em] text-white sm:text-[2.6rem]">
                    {location.mood}
                  </p>
                  <p className="mt-4 max-w-[23ch] text-[15px] leading-[1.6] text-white/56">{location.invitation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
