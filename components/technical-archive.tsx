import type { TechnicalFact } from "@/lib/udo-beton-content"
import { cn } from "@/lib/utils"

type TechnicalArchiveProps = {
  facts: TechnicalFact[]
  title?: string
  intro?: string
  compact?: boolean
  className?: string
}

export default function TechnicalArchive({
  facts,
  title = "Technische Fakten",
  intro = "Ruhig archiviert.",
  compact = false,
  className,
}: TechnicalArchiveProps) {
  return (
    <article className={cn("border border-white/10 bg-white/[0.02]", className)}>
      <div className={cn("border-b border-white/10 px-5 py-4 sm:px-6", compact ? "py-4" : "py-5")}>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">{title}</p>
        <p className={cn("mt-3 font-serif tracking-[-0.06em] text-white", compact ? "text-[1.9rem] leading-[0.98]" : "text-[2.2rem] leading-[0.96]")}>
          {intro}
        </p>
      </div>

      {facts.map((fact, index) => (
        <div
          key={fact.title}
          className={cn(
            "grid gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-[auto_0.92fr_1.08fr] sm:px-6",
            compact ? "sm:py-5" : "sm:py-6",
          )}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/[0.28]">0{index + 1}</span>
          <h3 className="max-w-[20ch] font-mono text-[12px] uppercase tracking-[0.16em] text-white/72">{fact.title}</h3>
          <p className="max-w-[34ch] text-[15px] leading-[1.65] text-white/56 sm:text-[16px]">{fact.body}</p>
        </div>
      ))}
    </article>
  )
}
