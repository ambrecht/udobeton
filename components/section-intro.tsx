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
    <header className={cn("max-w-[36rem]", className)}>
      <p
        className={cn(
          "font-mono text-[11px] uppercase tracking-[0.18em] text-white/36",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 max-w-[10ch] font-serif text-[3.3rem] leading-[0.84] tracking-[-0.1em] text-white sm:text-[4.5rem] xl:text-[5.3rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <div
          className={cn("mt-5 max-w-[28rem] text-[16px] leading-[1.66] text-white/58 sm:text-[17px]", bodyClassName)}
        >
          {body}
        </div>
      ) : null}
    </header>
  )
}
