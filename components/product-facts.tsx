"use client"

import { useState } from "react"

export default function ProductFacts() {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const sections = [
    {
      id: "construction",
      title: "KONSTRUKTION",
      content:
        "Dünnere Gummisohle mit starkem Profil für bessere Bodenhaftung. Echte Flexnaht für natürliche Bewegung. Verstärkte Fersenkappe für Stabilität.",
    },
    {
      id: "materials",
      title: "MATERIALIEN",
      content:
        "Hydrophobiertes Oberleder aus europäischer Gerbung. Rindslederfutter für Atmungsaktivität. Waldviertler Fußbett aus Kork und Latex.",
    },
    {
      id: "sizing",
      title: "GRÖßEN/WEITEN",
      content: "Größen 35-48 verfügbar. Weite F (schmal) und G (normal). Individuelle Beratung auf Anfrage.",
    },
    {
      id: "repair",
      title: "REPARIERBAR",
      content:
        "Vollständig reparierbar durch Waldviertler Service. Sohle austauschbar. Oberleder pflegbar. Lebenslange Reparaturgarantie.",
    },
  ]

  return (
    <section id="materials" className="brutal-section">
      <div className="brutal-container">
        <h2 className="brutal-h2 mb-12">FAKTEN</h2>

        <div className="space-y-0">
          {sections.map((section) => (
            <div key={section.id} className="brutal-keyline-bottom">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full py-6 flex justify-between items-center text-left"
                aria-expanded={openSections.includes(section.id)}
                aria-controls={`content-${section.id}`}
              >
                <h3 className="brutal-h3">{section.title}</h3>
                <span className="brutal-h3">{openSections.includes(section.id) ? "−" : "+"}</span>
              </button>

              {openSections.includes(section.id) && (
                <div id={`content-${section.id}`} className="pb-6 brutal-body max-w-2xl">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
