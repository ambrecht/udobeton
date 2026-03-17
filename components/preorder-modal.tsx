"use client"

import type React from "react"
import { useState } from "react"

interface PreorderModalProps {
  onClose: () => void
}

export default function PreorderModal({ onClose }: PreorderModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Preorder form submitted:", formData)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="preorder-title"
        aria-modal="true"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 id="preorder-title" className="brutal-h2">
            VORBESTELLEN
          </h2>
          <button onClick={onClose} className="brutal-h2" aria-label="Modal schließen">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="brutal-small block mb-2">
              NAME *
            </label>
            <input
              id="name"
              type="text"
              required
              className="brutal-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="brutal-small block mb-2">
              E-MAIL *
            </label>
            <input
              id="email"
              type="email"
              required
              className="brutal-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="role" className="brutal-small block mb-2">
              ROLLE/KONTEXT
            </label>
            <input
              id="role"
              type="text"
              className="brutal-input"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="brutal-small block mb-2">
              NACHRICHT (MIN. 20 ZEICHEN) *
            </label>
            <textarea
              id="message"
              required
              minLength={20}
              rows={4}
              className="brutal-input resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="brutal-small">Nur passende Anfragen werden beantwortet. Made-to-Order. Selektiv.</div>

          <button type="submit" className="brutal-button w-full">
            ANFRAGE SENDEN
          </button>
        </form>
      </div>
    </div>
  )
}
