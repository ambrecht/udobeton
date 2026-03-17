import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500"],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: ["500"],
})

export const metadata: Metadata = {
  title: "UDO BETON | Handgemacht in Austria. Getragen in Berlin.",
  description:
    "Robuster minimalistischer Lederschuh aus echtem Leder. Handgemacht in Austria, gedacht für Trägerinnen und Träger in Berlin.",
  openGraph: {
    title: "UDO BETON | Handgemacht in Austria. Getragen in Berlin.",
    description:
      "Sub-brand world für einen robusten minimalistischen Lederschuh zwischen Handwerk, Materialehrlichkeit und Berliner Kontext.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
