import SectionIntro from "@/components/section-intro"
import { coreProofs } from "@/lib/udo-beton-content"

export default function Facts() {
  const featuredProof = coreProofs[0]!
  const supportingProofs = coreProofs.slice(1)

  return (
    <section className="border-b border-white/10 px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[0.64fr_1.36fr] lg:gap-10">
        <SectionIntro
          eyebrow="Belege"
          title="Material, Herkunft, Konstruktion."
          body="Drei Belege genügen. Erst das Material. Dann die Herkunft. Dann der Aufbau."
          className="mb-8 lg:mb-0 lg:pt-1"
          titleClassName="max-w-[8.4ch]"
          bodyClassName="max-w-[23rem]"
        />

        <article className="grid gap-8 xl:grid-cols-[1fr_0.9fr] xl:items-start">
          <div className="bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">{featuredProof.eyebrow}</p>
            <h3 className="mt-5 max-w-[7ch] font-serif text-[3.6rem] leading-[0.84] tracking-[-0.1em] text-white sm:text-[4.5rem] xl:text-[5.1rem]">
              {featuredProof.title}
            </h3>
            <p className="mt-5 max-w-[28ch] text-[16px] leading-[1.72] text-white/64 sm:text-[17px]">
              {featuredProof.body}
            </p>
            <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-white/44">
              {featuredProof.notes.join(" / ")}
            </p>
          </div>

          <div className="grid gap-6 border-t border-white/10 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
            {supportingProofs.map((proof, index) => (
              <article key={proof.title} className={index > 0 ? "border-t border-white/10 pt-6" : ""}>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/30">{proof.eyebrow}</p>
                <h3 className="mt-4 max-w-[10ch] font-serif text-[2.8rem] leading-[0.9] tracking-[-0.07em] text-white sm:text-[3.2rem]">
                  {proof.title}
                </h3>
                <p className="mt-4 max-w-[31ch] text-[15px] leading-[1.68] text-white/58 sm:text-[16px]">
                  {proof.body}
                </p>
                <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-white/40">
                  {proof.notes.join(" / ")}
                </p>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
