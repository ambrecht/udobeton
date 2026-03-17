"use client"

import { useState } from "react"

interface CheckoutWizardProps {
  configuration: {
    size: string
    width: string
    color: string
  }
  onClose: () => void
}

export default function CheckoutWizard({ configuration, onClose }: CheckoutWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    address: "",
    deliveryWindow: "",
  })

  const totalSteps = 3

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("[v0] Order submitted:", { configuration, orderData })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="checkout-title"
        aria-modal="true"
      >
        <div className="mb-8">
          <h2 id="checkout-title" className="brutal-h2 mb-4">
            BESTELLUNG
          </h2>

          {/* Progress Indicator */}
          <div role="progressbar" aria-valuenow={currentStep} aria-valuemax={totalSteps} className="flex gap-2 mb-6">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className={`h-2 flex-1 ${i + 1 <= currentStep ? "bg-black" : "bg-gray-300"}`} />
            ))}
          </div>

          <div className="brutal-small">
            SCHRITT {currentStep} / {totalSteps}
          </div>
        </div>

        {currentStep === 1 && (
          <div>
            <h3 className="brutal-h3 mb-6">KONFIGURATION PRÜFEN</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="brutal-small">GRÖßE:</span>
                <span className="brutal-small">{configuration.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="brutal-small">WEITE:</span>
                <span className="brutal-small">{configuration.width}</span>
              </div>
              <div className="flex justify-between">
                <span className="brutal-small">FARBE:</span>
                <span className="brutal-small">{configuration.color}</span>
              </div>
            </div>
            <div className="brutal-small mb-8">KEINE RABATTE. KEINE ÜBERPRODUKTION. MADE-TO-ORDER.</div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="brutal-h3 mb-6">KONTAKT & LIEFERUNG</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="order-name" className="brutal-small block mb-2">
                  NAME *
                </label>
                <input
                  id="order-name"
                  type="text"
                  required
                  className="brutal-input"
                  value={orderData.name}
                  onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="order-email" className="brutal-small block mb-2">
                  E-MAIL *
                </label>
                <input
                  id="order-email"
                  type="email"
                  required
                  className="brutal-input"
                  value={orderData.email}
                  onChange={(e) => setOrderData({ ...orderData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="order-address" className="brutal-small block mb-2">
                  LIEFERADRESSE *
                </label>
                <textarea
                  id="order-address"
                  required
                  rows={3}
                  className="brutal-input resize-none"
                  value={orderData.address}
                  onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="delivery-window" className="brutal-small block mb-2">
                  GEWÜNSCHTES LIEFERFENSTER
                </label>
                <select
                  id="delivery-window"
                  className="brutal-input"
                  value={orderData.deliveryWindow}
                  onChange={(e) => setOrderData({ ...orderData, deliveryWindow: e.target.value })}
                >
                  <option value="">AUSWÄHLEN</option>
                  <option value="4-6-weeks">4-6 WOCHEN</option>
                  <option value="6-8-weeks">6-8 WOCHEN</option>
                  <option value="8-12-weeks">8-12 WOCHEN</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="brutal-h3 mb-6">BESTÄTIGUNG</h3>
            <div className="space-y-4 mb-8">
              <div className="brutal-small">
                Ihre Bestellung wird nach Eingang geprüft und bestätigt. Made-to-Order bedeutet individuelle Fertigung
                nach Ihren Spezifikationen.
              </div>
              <div className="brutal-small">Lieferzeit: {orderData.deliveryWindow || "4-8 WOCHEN"}</div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button onClick={prevStep} className="brutal-button-secondary">
              ZURÜCK
            </button>
          )}

          <div className="ml-auto">
            {currentStep < totalSteps ? (
              <button onClick={nextStep} className="brutal-button">
                WEITER
              </button>
            ) : (
              <button onClick={handleSubmit} className="brutal-button">
                BESTELLEN
              </button>
            )}
          </div>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 brutal-h2" aria-label="Checkout schließen">
          ×
        </button>
      </div>
    </div>
  )
}
