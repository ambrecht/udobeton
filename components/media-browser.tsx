"use client"

import { useState } from "react"

export default function MediaBrowser() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: "/placeholder.svg?height=600&width=600", alt: "Sommertramper Gesamtansicht", caption: "GESAMTANSICHT" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Profilsohle Detail", caption: "PROFIL DETAIL" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Flexnaht Detail", caption: "ECHTE FLEXNAHT" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Lederoberfläche", caption: "HYDROPHOBIERTES OBERLEDER" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Innenfutter", caption: "RINDSLEDERFUTTER" },
    { src: "/placeholder.svg?height=600&width=600", alt: "Sohle Unterseite", caption: "GUMMISOHLE" },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="brutal-section">
      <div className="brutal-container">
        <h2 className="brutal-h2 mb-12">BEWEIS</h2>

        <div className="brutal-grid" style={{ gridTemplateColumns: "2fr 1fr", gap: "calc(var(--spacing-unit) * 8)" }}>
          <div className="relative">
            <div className="aspect-square brutal-keyline-bottom brutal-keyline-right brutal-keyline-top brutal-keyline-left">
              <img
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-between mt-4">
              <button onClick={prevImage} className="brutal-button-secondary" aria-label="Vorheriges Bild">
                ←
              </button>
              <button onClick={nextImage} className="brutal-button-secondary" aria-label="Nächstes Bild">
                →
              </button>
            </div>
          </div>

          <div className="brutal-keyline-left pl-8">
            <div className="brutal-small mb-4" aria-live="polite">
              {currentImage + 1} / {images.length}
            </div>
            <h3 className="brutal-h3 mb-4">{images[currentImage].caption}</h3>

            <div className="space-y-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-full h-2 ${index === currentImage ? "bg-black" : "bg-gray-300"}`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
