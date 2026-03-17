export type NavigationItem = {
  id: string
  label: string
}

export type HeroAction = {
  label: string
  target: string
}

export type HeroContent = {
  kicker: string
  title: string
  body: string
  primaryAction: HeroAction
  secondaryAction: HeroAction
  proofline: string[]
  closingLine: string
}

export type CoreProof = {
  eyebrow: string
  title: string
  body: string
  notes: string[]
}

export type CarrierPortrait = {
  slug: string
  name: string
  discipline: string
  description: string
  location?: string
  quote?: string
  featuredModel?: string
  portraitSrc?: string | null
  placeholderLabel: string
}

export type CraftPillar = {
  title: string
  body: string
}

export type FitWidth = "F" | "G"

export type FitNote = {
  title: string
  body: string
}

export type BerlinLocation = {
  district: string
  street: string
  mood: string
  invitation: string
}

export type TechnicalFact = {
  title: string
  body: string
}

export const navigationItems: NavigationItem[] = [
  { id: "der-schuh", label: "Der Schuh" },
  { id: "handwerk", label: "Handwerk" },
  { id: "traeger", label: "Träger" },
  { id: "orte", label: "Orte" },
  { id: "manifest", label: "Manifest" },
]

export const heroContent: HeroContent = {
  kicker: "UDO BETON / HANDGEMACHT IN AUSTRIA / GETRAGEN IN BERLIN",
  title: "Handgemacht in Austria. Getragen in Berlin.",
  body: "Robustes Leder für Stadt und lange Nutzung.",
  primaryAction: {
    label: "In Berlin finden",
    target: "orte",
  },
  secondaryAction: {
    label: "Zur Evidenz",
    target: "handwerk",
  },
  proofline: ["Echtes Leder", "Waldviertel", "Reparierbare Konstruktion"],
  closingLine: "Ein Objekt, kein Accessoire.",
}

export const coreProofs: CoreProof[] = [
  {
    eyebrow: "01",
    title: "Echtes Leder",
    body: "Vegetabil gegerbtes Rindsleder mit sichtbarer Struktur. Es zeigt Spuren, statt sie zu glätten.",
    notes: ["Patina statt Effekt", "Vom ersten Griff an lesbar"],
  },
  {
    eyebrow: "02",
    title: "Handgemacht in Austria",
    body: "Gefertigt in kleinen Werkstätten im Waldviertel. Herkunft bleibt prüfbar, nicht bloß erzählt.",
    notes: ["Kurze Serien", "Werkstatt statt Taktung"],
  },
  {
    eyebrow: "03",
    title: "Gebaut für lange Nutzung",
    body: "Flexnaht, belastbare Sohle, reparierbarer Aufbau. Gedacht für Jahre, nicht für kurze Aufmerksamkeit.",
    notes: ["Neubesohlbar", "Für Straße und Alltag"],
  },
]

export const carrierPortraits: CarrierPortrait[] = [
  {
    slug: "jule",
    name: "Jule M.",
    discipline: "Bühnenbild",
    description: "Arbeitet mit Licht, Raum und rohen Oberflächen. Braucht Dinge, die Druck aushalten.",
    location: "Berlin-Mitte",
    quote: "Mich interessiert, was nach Monaten noch stimmt.",
    featuredModel: "Sommertramper",
    portraitSrc: "/images_1773763632451/2026-03-17T14.22.01_7.jpg",
    placeholderLabel: "Studio Berlin",
  },
  {
    slug: "arkan",
    name: "Arkan D.",
    discipline: "Musik",
    description: "Zwischen Proberaum und Nachtfahrt. Trägt, was Reibung annimmt statt sie zu verstecken.",
    location: "Kreuzberg",
    quote: "Zu glatt wird schnell unbrauchbar.",
    featuredModel: "Sommertramper",
    portraitSrc: "/images_1773763632451/2026-03-17T14.23.14_6.jpg",
    placeholderLabel: "Proberaum",
  },
  {
    slug: "mara",
    name: "Mara S.",
    discipline: "Metallwerkstatt",
    description: "Werkstatt, Staub, Präzision. Braucht Material, das nicht ausweicht, wenn der Tag länger wird.",
    location: "Prenzlauer Berg",
    quote: "Ich will kein Symbol. Ein gutes Paar genügt.",
    featuredModel: "Sommertramper",
    portraitSrc: "/images_1773763632451/2026-03-17T14.23.40_9.jpg",
    placeholderLabel: "Werkstatt",
  },
]

export const craftPillars: CraftPillar[] = [
  {
    title: "Waldviertel",
    body: "Herkunft bleibt prüfbar. Werkstattwissen, Ruhe und Präzision kommen aus demselben Ort.",
  },
  {
    title: "Flexnaht",
    body: "Belastbar, reparierbar, sichtbar. Keine geklebte Behauptung, sondern echte Verbindung.",
  },
  {
    title: "Leder",
    body: "Außen robust, innen direkt. Reagiert auf Wärme, Druck und Zeit. Nicht auf Saisons.",
  },
  {
    title: "Sohle",
    body: "Direkt am Boden, belastbar auf der Straße. Wenn sie verbraucht ist, wird sie ersetzt.",
  },
]

export const fitSizes = Array.from({ length: 14 }, (_, index) => index + 35)

export const fitWidths: { value: FitWidth; label: string; hint: string }[] = [
  { value: "F", label: "F", hint: "Normalweite" },
  { value: "G", label: "G", hint: "Komfortweite" },
]

export const fitNotes: FitNote[] = [
  {
    title: "Größen 35 bis 48",
    body: "Breite Spanne. Die Anprobe bleibt entscheidend.",
  },
  {
    title: "Weiten F und G",
    body: "Zwei klare Leistenoptionen. Mehr braucht es nicht.",
  },
  {
    title: "Anprobe vor Ort",
    body: "Material und Spannung klären sich im Laden schneller.",
  },
]

export const berlinLocations: BerlinLocation[] = [
  {
    district: "Prenzlauer Berg",
    street: "Stargarder Straße",
    mood: "Ruhiger Blick aufs Material.",
    invitation: "Für die erste klare Anprobe.",
  },
  {
    district: "Kreuzberg",
    street: "Körtestraße",
    mood: "Direkter am Takt der Straße.",
    invitation: "Für den Eindruck am Fuß und im Alltag.",
  },
]

export const manifestoLines: string[] = [
  "Für Träger. Nicht für Trends.",
  "Robuster Minimalismus mit Haltung.",
  "Ein Schuh, der bleiben darf.",
]

export const manifestoPrinciples: string[] = [
  "Handwerk vor Behauptung",
  "Patina vor Oberfläche",
  "Stadt vor Lifestyle-Kulisse",
  "Reparatur vor Austausch",
]

export const technicalFacts: TechnicalFact[] = [
  {
    title: "Vegetabil gegerbtes Rindsleder",
    body: "Chromfrei, belastbar und offen für eigene Patina.",
  },
  {
    title: "Rindslederfutter",
    body: "Direkter Kontakt ohne synthetische Zwischenschicht.",
  },
  {
    title: "Flexnaht-Konstruktion",
    body: "Reparierbar, nachvollziehbar und für lange Nutzung gebaut.",
  },
  {
    title: "Vibram-Gummisohle",
    body: "Belastbarer Grip mit klarem Bodengefühl.",
  },
  {
    title: "Kleine Serien",
    body: "Begrenzte Werkstattkapazität statt anonymer Masse.",
  },
  {
    title: "Getragen in Berlin",
    body: "Kein Dekor, sondern Alltag, Straße und Gebrauch.",
  },
]
