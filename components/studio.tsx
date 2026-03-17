export function Studio() {
  return (
    <section id="studio" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-t-2 border-udo-muted pt-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-8">Studio</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Wir sind ein junges Modelabel aus Berlin. Wir produzieren nur auf Anfrage und nur für ausgewählte
                Kund:innen.
              </p>

              <p className="text-lg leading-relaxed text-udo-muted">
                Präzision, Materialehrlichkeit, radikale Reduktion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-udo-muted p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">Prozess</h3>
                <p className="text-sm text-udo-muted">
                  Jedes Stück wird individuell gefertigt. Von der ersten Skizze bis zum finalen Schnitt.
                </p>
              </div>

              <div className="border-2 border-udo-muted p-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">Material</h3>
                <p className="text-sm text-udo-muted">
                  Ausschließlich hochwertige, nachhaltige Materialien aus europäischer Produktion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
