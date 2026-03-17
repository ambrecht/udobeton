import Facts from "@/components/facts"
import Gallery from "@/components/gallery"
import Hero from "@/components/hero"
import Locations from "@/components/locations"
import Manifest from "@/components/manifest"
import SiteShell from "@/components/site-shell"
import Traeger from "@/components/traeger"

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Facts />
      <Traeger />
      <Gallery />
      <Locations />
      <Manifest />
    </SiteShell>
  )
}
