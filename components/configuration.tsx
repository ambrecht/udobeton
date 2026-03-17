"use client"

interface ConfigurationProps {
  configuration: {
    size: string
    width: string
    color: string
  }
  setConfiguration: (config: any) => void
  onOrderClick: () => void
}

export default function Configuration({ configuration, setConfiguration, onOrderClick }: ConfigurationProps) {
  const sizes = Array.from({ length: 14 }, (_, i) => (35 + i).toString())
  const widths = [
    { value: "F", label: "F (SCHMAL)" },
    { value: "G", label: "G (NORMAL)" },
  ]
  const colors = [
    { value: "SCHOKO", label: "SCHOKO" },
    { value: "FLACHS", label: "FLACHS" },
  ]

  const isConfigurationComplete = configuration.size && configuration.width && configuration.color

  return (
    <section id="configuration" className="brutal-section">
      <div className="brutal-container">
        <h2 className="brutal-h2 mb-12">PASSFORM</h2>

        <div
          className="brutal-grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: "calc(var(--spacing-unit) * 8)" }}
        >
          {/* Size Selection */}
          <div>
            <h3 className="brutal-h3 mb-6" id="size-heading">
              GRÖßE
            </h3>
            <div role="group" aria-labelledby="size-heading" className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setConfiguration({ ...configuration, size })}
                  className={`brutal-button-secondary h-12 ${configuration.size === size ? "bg-black text-white" : ""}`}
                  aria-pressed={configuration.size === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Width Selection */}
          <div>
            <h3 className="brutal-h3 mb-6" id="width-heading">
              WEITE
            </h3>
            <div role="radiogroup" aria-labelledby="width-heading" className="space-y-2">
              {widths.map((width) => (
                <button
                  key={width.value}
                  onClick={() => setConfiguration({ ...configuration, width: width.value })}
                  className={`brutal-button-secondary w-full h-12 ${
                    configuration.width === width.value ? "bg-black text-white" : ""
                  }`}
                  role="radio"
                  aria-checked={configuration.width === width.value}
                >
                  {width.label}
                </button>
              ))}
            </div>
            <a href="#guide" className="brutal-small underline mt-4 block hover:no-underline">
              GRÖßEN- UND WEITENINFORMATIONEN
            </a>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="brutal-h3 mb-6" id="color-heading">
              FARBE
            </h3>
            <div role="group" aria-labelledby="color-heading" className="space-y-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setConfiguration({ ...configuration, color: color.value })}
                  className={`brutal-button-secondary w-full h-12 ${
                    configuration.color === color.value ? "bg-black text-white" : ""
                  }`}
                  aria-pressed={configuration.color === color.value}
                >
                  {color.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 brutal-keyline-top">
          <p className="brutal-small mb-6">ECHTE FLEXNAHT · WALDVIERTLER FUßBETT</p>

          {isConfigurationComplete && (
            <button onClick={onOrderClick} className="brutal-button" aria-label="Bestellung starten">
              BESTELLEN
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
