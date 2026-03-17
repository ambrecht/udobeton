export type NavigationItem = {
  href: string
  label: string
}

export type ActionLink = {
  href: string
  label: string
}

export type HomeHeroContent = {
  eyebrow: string
  titleLines: string[]
  body: string
  primaryAction: ActionLink
  secondaryAction: ActionLink
  objectDetails: string[]
  note: string
  imageSrc: string
  imageAlt: string
}

export type ProofItem = {
  eyebrow: string
  title: string
  body: string
}

export type CarrierPortrait = {
  slug: string
  name: string
  discipline: string
  description: string
  location: string
  quote: string
  featuredModel: string
  portraitSrc: string
  placeholderLabel: string
}

export type EvidencePoint = {
  title: string
  body: string
}

export type HomeEvidenceContent = {
  imageSrc: string
  imageAlt: string
  title: string
  body: string
  action: ActionLink
  insert: {
    label: string
    title: string
    body: string
    imageSrc: string
    imageAlt: string
  }
}

export type BerlinLocation = {
  district: string
  street: string
  mood: string
  invitation: string
  details: string[]
}

export type TechnicalFact = {
  title: string
  body: string
}

export type PageLead = {
  eyebrow: string
  title: string
  body: string
}

export const navigationItems: NavigationItem[] = [
  { href: "/der-schuh", label: "Der Schuh" },
  { href: "/handwerk", label: "Handwerk" },
  { href: "/traeger", label: "Träger" },
  { href: "/orte", label: "Orte" },
  { href: "/manifest", label: "Manifest" },
]

export const homeHero: HomeHeroContent = {
  eyebrow: "UDO BETON / handgemacht in Austria / in Berlin",
  titleLines: ["Handgemacht in Austria.", "Getragen in Berlin."],
  body: "Ein robuster Lederschuh mit Haltung. Gebaut für lange Nutzung, zu sehen in Berlin.",
  primaryAction: {
    href: "/orte",
    label: "In Berlin sehen",
  },
  secondaryAction: {
    href: "/der-schuh",
    label: "Der Schuh",
  },
  objectDetails: ["Sommertramper", "Veloursleder", "Vibram-Sohle"],
  note: "Kein Shop-Theater. Erst Material, dann Eindruck am Fuß.",
  imageSrc: "/images_1773763632451/newhero.jpg",
  imageAlt: "UDO BETON Boot am Fuss neben einem Motorrad",
}

export const homeProofs: ProofItem[] = [
  {
    eyebrow: "01",
    title: "Materialehrlich",
    body: "Vegetabil gegerbtes Rindsleder. Offen für Patina statt Oberflächenlack.",
  },
  {
    eyebrow: "02",
    title: "Handgemacht in Austria",
    body: "Kleine Werkstätten im Waldviertel. Herkunft bleibt konkret.",
  },
  {
    eyebrow: "03",
    title: "Für lange Nutzung gebaut",
    body: "Flexnaht, reparierbare Sohle, belastbarer Aufbau. Gedacht für Jahre.",
  },
]

export const carrierPortraits: CarrierPortrait[] = [
  {
    slug: "jule",
    name: "Jule M.",
    discipline: "Bühnenbild",
    description: "Zwischen Licht, Raum und rohen Flächen.",
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
    description: "Zwischen Proberaum, Nachtfahrt und Straße.",
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
    description: "Werkstatt, Staub, Präzision.",
    location: "Prenzlauer Berg",
    quote: "Ich will kein Symbol. Ein gutes Paar genügt.",
    featuredModel: "Sommertramper",
    portraitSrc: "/images_1773763632451/2026-03-17T14.23.40_9.jpg",
    placeholderLabel: "Werkstatt",
  },
]

export const homeEvidence: HomeEvidenceContent = {
  imageSrc: "/images_1773763632451/149103c1-5d1e-428c-85c5-f0d19c6ae08b.png",
  imageAlt: "UDO BETON Boot im Berliner Stadtraum",
  title: "Evidenz statt Behauptung.",
  body: "Leder, Naht, Sohle und Gebrauch müssen den Schuh zuerst tragen können.",
  action: {
    href: "/handwerk",
    label: "Zum Handwerk",
  },
  insert: {
    label: "Objekt",
    title: "Klare Silhouette. Kein dekorativer Umweg.",
    body: "Die Form bleibt lesbar, bevor irgendein Text helfen muss.",
    imageSrc: "/images/beton_schuh_side.png",
    imageAlt: "UDO BETON Lederschuh in Seitenansicht",
  },
}

export const evidencePoints: EvidencePoint[] = [
  {
    title: "Leder",
    body: "Offen für Patina. Nicht versiegelt auf Wirkung.",
  },
  {
    title: "Naht",
    body: "Sichtbar, belastbar, reparierbar.",
  },
  {
    title: "Sohle",
    body: "Direkt am Boden. Vibram mit klarer Rückmeldung.",
  },
  {
    title: "Gebrauch",
    body: "Ein Schuh muss Monate tragen, nicht Minuten beeindrucken.",
  },
]

export const shoeHighlights: EvidencePoint[] = [
  {
    title: "Form",
    body: "Klare Kappe, ruhige Linie, kein dekorativer Umweg. Die Form bleibt lesbar.",
  },
  {
    title: "Material",
    body: "Rindsleder außen, Rindslederfutter innen. Direkt, robust und offen für Patina.",
  },
  {
    title: "Aufbau",
    body: "Flexnaht, austauschbare Sohle, belastbare Konstruktion. Nicht für kurze Aufmerksamkeit.",
  },
]

export const craftPillars: EvidencePoint[] = [
  {
    title: "Waldviertel",
    body: "Werkstattwissen, Ruhe und Präzision kommen aus demselben Ort.",
  },
  {
    title: "Leder",
    body: "Außen robust, innen direkt. Reagiert auf Wärme, Druck und Zeit.",
  },
  {
    title: "Naht",
    body: "Keine geklebte Behauptung, sondern eine nachvollziehbare Verbindung.",
  },
  {
    title: "Sohle",
    body: "Vibram-Gummi mit Grip und klarer Rückmeldung am Boden.",
  },
]

export const berlinLocations: BerlinLocation[] = [
  {
    district: "Prenzlauer Berg",
    street: "Stargarder Straße",
    mood: "Ruhiger Blick aufs Material.",
    invitation: "Für die erste klare Anprobe.",
    details: ["UDO vor Ort", "Direkter Materialeindruck"],
  },
  {
    district: "Kreuzberg",
    street: "Körtestraße",
    mood: "Näher am Takt der Straße.",
    invitation: "Für den Eindruck am Fuß.",
    details: ["UDO vor Ort", "Straßennaher, unmittelbarer"],
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
    title: "Größen 35 bis 48",
    body: "Breite Spanne. Die Anprobe bleibt entscheidend.",
  },
  {
    title: "Weiten F und G",
    body: "Zwei klare Leistenoptionen. Mehr braucht es nicht.",
  },
]

export const fitWidths: { value: "F" | "G"; label: string; hint: string }[] = [
  { value: "F", label: "F", hint: "Normalweite" },
  { value: "G", label: "G", hint: "Komfortweite" },
]

export const fitSizes = Array.from({ length: 14 }, (_, index) => index + 35)

export const pageLeads: Record<"shoe" | "craft" | "carriers" | "locations" | "manifest", PageLead> = {
  shoe: {
    eyebrow: "Der Schuh",
    title: "Form, Material und Aufbau. Ohne Verkaufsrhetorik.",
    body: "Hier steht der Schuh selbst im Vordergrund: Form, Leder, Aufbau und die ruhige praktische Klarheit.",
  },
  craft: {
    eyebrow: "Handwerk",
    title: "Material und Konstruktion müssen zuerst physisch überzeugen.",
    body: "Handwerk ist hier keine Stimmung. Es ist Leder, Naht, Sohle, Werkstatt und die nüchterne Realität des Machens.",
  },
  carriers: {
    eyebrow: "Träger",
    title: "Menschen geben dem Schuh sozialen Kontext.",
    body: "Nicht als Kampagne. Sondern als reale Trägerinnen und Träger zwischen Werkstatt, Bühne, Straße und Proberaum.",
  },
  locations: {
    eyebrow: "Orte",
    title: "Zwei Berliner Marker. Zwei reale Eintrittspunkte.",
    body: "UDO BETON lebt nicht im Browser allein. Die Läden in Prenzlauer Berg und Kreuzberg bleiben die klarsten Orte für den ersten Eindruck.",
  },
  manifest: {
    eyebrow: "Manifest",
    title: "Kurz. Hart. Lesbar genug für den ersten Blick.",
    body: "Keine lange Erklärung. Ein paar klare Sätze und die ruhige sachliche Ebene darunter.",
  },
}
