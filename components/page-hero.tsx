import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  body: ReactNode
  aside?: ReactNode
}

export default function PageHero({ eyebrow, title, body, aside }: PageHeroProps) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-10 lg:py-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/36">{eyebrow}</p>
          <h1 className="mt-6 max-w-[10ch] font-serif text-[4rem] leading-[0.82] tracking-[-0.12em] text-white sm:text-[5.2rem] xl:text-[6.1rem]">
            {title}
          </h1>
        </div>

        <div>
          <p className="max-w-[31rem] text-[17px] leading-[1.7] text-white/60 sm:text-[18px]">{body}</p>
          {aside ? <div className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-white/42">{aside}</div> : null}
        </div>
      </div>
    </section>
  )
}
