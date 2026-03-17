import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionIntroProps = {
  eyebrow: string
  title: ReactNode
  body?: ReactNode
  className?: string
  eyebrowClassName?: string
  titleClassName?: string
  bodyClassName?: string
}

export default function SectionIntro({
  eyebrow,
  title,
  body,
  className,
  eyebrowClassName,
  titleClassName,
  bodyClassName,
}: SectionIntroProps) {
  return (
    <header className={cn("max-w-[40rem]", className)}>
      <p
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.18em] text-white/38",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 max-w-[10ch] font-serif text-[3.8rem] leading-[0.84] tracking-[-0.105em] text-white sm:text-[4.9rem] xl:text-[5.7rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <div
          className={cn(
            "mt-5 max-w-[28rem] text-[16px] leading-[1.65] text-white/58 sm:text-[17px]",
            bodyClassName,
          )}
        >
          {body}
        </div>
      ) : null}
    </header>
  )
}
