import SectionIntro from "@/components/section-intro"
import { technicalFacts } from "@/lib/udo-beton-content"

export default function Documentation() {
  return (
    <section id="dokumentation" className="px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[0.64fr_1.36fr] lg:gap-10">
        <SectionIntro
          eyebrow="Dokumentation"
          title="Technische Fakten. Ruhig archiviert."
          body="Die sachliche Ebene. Knapp, lesbar, belastbar."
          className="mb-8 lg:mb-0 lg:pt-1"
          titleClassName="max-w-[8ch]"
          bodyClassName="max-w-[19rem]"
        />

        <article className="border-t border-white/10">
          <div className="hidden gap-3 py-4 sm:grid sm:grid-cols-[auto_0.9fr_1.1fr] sm:items-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/28">Nr.</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/28">Eintrag</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/28">Vermerk</p>
          </div>

          {technicalFacts.map((fact, index) => (
            <article
              key={fact.title}
              className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[auto_0.9fr_1.1fr] sm:gap-5 sm:py-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/[0.28]">0{index + 1}</span>
              <h3 className="max-w-[20ch] font-mono text-[12px] uppercase tracking-[0.16em] text-white/72">
                {fact.title}
              </h3>
              <p className="max-w-[34ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">{fact.body}</p>
            </article>
          ))}

          <div className="pt-6">
            <p className="max-w-[22ch] font-serif text-[1.95rem] leading-[0.98] tracking-[-0.06em] text-white sm:text-[2.25rem]">
              Archiviert für den zweiten Blick. Ruhig genug für den ersten.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
