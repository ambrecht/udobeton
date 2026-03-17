import SectionIntro from "@/components/section-intro"
import { homeProofs } from "@/lib/udo-beton-content"

export default function Facts() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-start">
          <SectionIntro
            eyebrow="Drei Belege"
            title="Material. Herkunft. Nutzung."
            body="Drei klare Belege."
            titleClassName="max-w-[7ch]"
            bodyClassName="max-w-[14rem]"
          />

          <div className="grid gap-7 md:grid-cols-3">
            {homeProofs.map((proof) => (
              <article key={proof.eyebrow} className="border-t border-white/10 pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/30">{proof.eyebrow}</p>
                <h3 className="mt-4 max-w-[9ch] font-serif text-[2.25rem] leading-[0.9] tracking-[-0.07em] text-white sm:text-[2.75rem]">
                  {proof.title}
                </h3>
                <p className="mt-4 max-w-[24ch] text-[14px] leading-[1.6] text-white/56 sm:text-[15px]">
                  {proof.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
