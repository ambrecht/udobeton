export function Footer() {
  return (
    <footer className="border-t-2 border-udo-muted py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-space-grotesk font-bold">UDO BETON — Berlin</div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-udo-muted hover:text-udo-accent transition-colors focus:outline-none focus:ring-2 focus:ring-udo-accent"
          >
            Instagram
          </a>
          <a
            href="mailto:contact@udobeton.com"
            className="text-udo-muted hover:text-udo-accent transition-colors focus:outline-none focus:ring-2 focus:ring-udo-accent"
          >
            Kontakt
          </a>
          <a
            href="#"
            className="text-udo-muted hover:text-udo-accent transition-colors focus:outline-none focus:ring-2 focus:ring-udo-accent"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  )
}
