import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const envPath = path.join(repoRoot, ".env.local")

function readEnvVar(name) {
  if (!fs.existsSync(envPath)) return ""
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/)

  for (const line of lines) {
    if (!line.startsWith(`${name}=`)) continue
    return line.slice(name.length + 1).trim().replace(/^['"]|['"]$/g, "")
  }

  return ""
}

const apiKey = readEnvVar("OPENAI_API_KEY")

if (!apiKey) {
  throw new Error("OPENAI_API_KEY fehlt in .env.local")
}

const outputDir = path.join(repoRoot, "public", "images")
fs.mkdirSync(outputDir, { recursive: true })

const prompts = [
  {
    file: "traeger-jule-placeholder.png",
    label: "Jule M.",
    prompt: [
      "Create a realistic documentary portrait photo.",
      "Subject: an androgynous stage designer in their early 30s, standing in a raw Berlin studio with plywood flats, concrete floor, black workwear, and severe posture.",
      "Mood: calm, hard-edged, unsentimental, industrial restraint, cultural dossier, not fashion glamour.",
      "Composition: vertical portrait, medium full shot, asymmetrical framing, strong negative space, direct eye contact, harsh directional light, crisp texture, muted black/white palette with one restrained dark red accent in the environment.",
      "Avoid smiles, luxury polish, glossy beauty retouching, cinematic bokeh, text, logos, watermark.",
    ].join(" "),
  },
  {
    file: "traeger-arkan-placeholder.png",
    label: "Arkan D.",
    prompt: [
      "Create a realistic documentary portrait photo.",
      "Subject: a musician in their 30s in a Berlin rehearsal space at night, concrete wall, cables, amplifier, black denim, heavy boots, tired but focused presence.",
      "Mood: raw, urban, nocturnal, hard, believable, not lifestyle advertising.",
      "Composition: vertical portrait, medium shot, off-center framing, strong shadow planes, flash-like direct light mixed with dim ambient light, gritty textures, nearly monochrome palette with a minimal controlled red signal detail.",
      "Avoid stage performance drama, neon club aesthetics, glossy magazine styling, text, logos, watermark.",
    ].join(" "),
  },
  {
    file: "traeger-mara-placeholder.png",
    label: "Mara S.",
    prompt: [
      "Create a realistic documentary portrait photo.",
      "Subject: a metal workshop craftsperson in their late 30s in a Berlin workshop, steel table, dust, tools, dark apron, hands marked by work, composed expression.",
      "Mood: physical, exact, industrial, quiet authority, archival portrait plate.",
      "Composition: vertical portrait, medium full shot, slightly low angle, hard sidelight, sharp detail in leather, metal, and skin texture, mostly black and grey tones with one restrained deep red industrial marker.",
      "Avoid sparks, spectacle, heroic action pose, glossy advertising finish, text, logos, watermark.",
    ].join(" "),
  },
]

async function generateImage({ file, label, prompt }) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      size: "1024x1792",
      quality: "standard",
      style: "natural",
      response_format: "b64_json",
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Bildgenerierung fehlgeschlagen für ${label}: ${response.status} ${text}`)
  }

  const result = await response.json()
  const b64 = result?.data?.[0]?.b64_json

  if (!b64) {
    throw new Error(`Keine Bilddaten erhalten für ${label}`)
  }

  const target = path.join(outputDir, file)
  fs.writeFileSync(target, Buffer.from(b64, "base64"))

  const revisedPrompt = result?.data?.[0]?.revised_prompt
  console.log(`Saved ${file}`)
  if (revisedPrompt) {
    console.log(`Revised prompt for ${label}: ${revisedPrompt}`)
  }
}

try {
  for (const item of prompts) {
    await generateImage(item)
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
}
