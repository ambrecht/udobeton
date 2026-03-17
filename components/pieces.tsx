"use client"

interface PiecesProps {
  onAccessClick: () => void
}

export function Pieces({ onAccessClick }: PiecesProps) {
  const pieces = [
    { id: "01", name: "MONOLITH COAT", status: "PRIVATE", material: "Wool blend, structured" },
    { id: "02", name: "SEAMLESS DRESS", status: "SOLD OUT", material: "Organic cotton, minimal seams" },
    { id: "03", name: "VOID BAG", status: "BY APPOINTMENT", material: "Leather, architectural form" },
    { id: "04", name: "CONCRETE TEE", status: "COMING SOON", material: "Hemp blend, oversized" },
    { id: "05", name: "MACHINE RHYTHM SKIRT", status: "PRIVATE", material: "Technical fabric, pleated" },
    { id: "06", name: "SIGNAL SCARF", status: "ON REQUEST", material: "Silk, hand-finished edges" },
  ]

  return (
    <section id="pieces" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border-t-2 border-udo-muted pt-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-16">Pieces</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pieces.map((piece) => (
              <div
                key={piece.id}
                className="border-2 border-udo-muted p-6 group hover:border-udo-accent transition-colors cursor-pointer"
                onClick={onAccessClick}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-space-grotesk font-bold text-3xl">{piece.id}</span>
                  <span
                    className={`font-ibm-plex-mono text-xs uppercase tracking-wider px-2 py-1 ${
                      piece.status === "SOLD OUT" ? "bg-udo-muted text-udo-bg" : "border border-udo-muted"
                    }`}
                  >
                    {piece.status}
                  </span>
                </div>

                <h3 className="font-space-grotesk font-bold text-xl mb-3">{piece.name}</h3>

                <p className="text-sm text-udo-muted mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {piece.material}
                </p>

                <button className="text-udo-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-udo-accent">
                  Request →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
