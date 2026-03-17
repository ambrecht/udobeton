import { fitWidths } from "@/lib/udo-beton-content"

export default function Fit() {
  return (
    <article className="bg-white/[0.03] p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/34">Passform / Referenz</p>
      <p className="mt-4 max-w-[14ch] font-serif text-[2.2rem] leading-[0.94] tracking-[-0.07em] text-white sm:text-[2.7rem]">
        Passform bleibt eine Frage des Ladens.
      </p>
      <p className="mt-4 max-w-[30ch] text-[15px] leading-[1.65] text-white/58 sm:text-[16px]">
        Größen 35 bis 48. Weiten F und G. Die Anprobe vor Ort klärt Material, Spannung und Einlaufverhalten schneller
        als jede Tabelle.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {fitWidths.map((width) => (
          <div key={width.value} className="border border-white/10 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/62">{width.label}</p>
            <p className="mt-2 text-[14px] leading-[1.55] text-white/54">{width.hint}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
