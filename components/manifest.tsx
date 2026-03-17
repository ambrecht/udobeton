import { manifestoLines, manifestoPrinciples } from "@/lib/udo-beton-content"

export default function Manifest() {
  return (
    <section id="manifest" className="border-b border-white/10 px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[1.14fr_0.86fr] xl:items-end">
          <article>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Manifest</p>

            <div className="mt-6 grid gap-3">
              {manifestoLines.map((line) => (
                <p
                  key={line}
                  className="max-w-[11ch] font-serif text-[3.9rem] leading-[0.82] tracking-[-0.1em] text-white sm:text-[5.2rem] xl:text-[5.9rem]"
                >
                  {line}
                </p>
              ))}
            </div>
          </article>

          <div className="grid gap-4 border-t border-white/10 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
            {manifestoPrinciples.map((principle, index) => (
              <article key={principle} className={index > 0 ? "border-t border-white/10 pt-4" : ""}>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/[0.28]">
                  0{index + 1}
                </span>
                <p className="mt-3 max-w-[18ch] font-serif text-[2rem] leading-[0.95] tracking-[-0.06em] text-white sm:text-[2.3rem]">
                  {principle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
