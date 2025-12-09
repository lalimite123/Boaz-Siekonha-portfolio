import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      <section id="about" className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: "1px solid rgba(198,255,58,0.6)" }}
          >
            Über mich
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Boaz Siekonha</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-300">
            Full‑Stack‑Entwickler und Produkt‑Designer. Ich entwickle moderne Web‑Erlebnisse mit Next.js (App Router),
            React, TypeScript, Tailwind CSS und shadcn/ui sowie typisierten Backends (Supabase/PostgreSQL, Node.js).
            Fokus auf Qualität, Performance und barrierearme Interfaces – vom Prototyp bis zum Produktivbetrieb.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="liquid-glass rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white">Kernkompetenzen</h3>
            <div className="mt-4 rounded-lg border border-lime-400/30 bg-lime-500/10 backdrop-blur-md p-4">
              <ul className="space-y-1 text-sm text-neutral-100/90">
                <li>Frontend: React, Next.js 16+, Tailwind, shadcn/ui</li>
                <li>Frameworks: Angular, Vue, Blazor</li>
                <li>Backend: REST‑API, Supabase/PostgreSQL, Node.js</li>
                <li>DevOps & Cloud: Docker, Kubernetes, Terraform, AWS/Azure/GCP</li>
                <li>CI/CD: GitHub Actions, GitLab CI, Azure DevOps</li>
                <li>PM & Collaboration: Jira, Confluence, Scrum/Kanban</li>
                <li>Sicherheit: OWASP, OAuth2/OIDC, RBAC</li>
                <li>Qualität: Testing (Jest, Playwright), E2E, Linting</li>
                <li>Performance: Lazy Loading, Code Splitting, robuste Fehlerbehandlung</li>
              </ul>
            </div>
          </div>
          <div className="liquid-glass rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white">Wert & Vorgehen</h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-300">
              Pragmatisches Design, lesbarer und wartbarer Code. Saubere Integrationen, Fehler‑Monitoring und
              konsistente Lieferqualität. Ich baue schnelle, zugängliche und flüssige Produkte.
            </p>
            <div className="mt-4">
              <Link
                href="/#features"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
              >
                Projekte ansehen
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="liquid-glass rounded-2xl border border-white/20 p-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-lime-400/50 bg-black/40 shadow-[0_0_24px_rgba(132,204,22,0.35)]">
                <Image src="/termi_logo.png" alt="TermiConsult Logo" fill className="object-contain" />
              </div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-lime-300/90">Referenz — TermiConsult</span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-neutral-300">
              TermiConsult ist ein IT‑Beratungsunternehmen mit Schwerpunkt auf IT‑Services und Softwareentwicklung.
              Erfahrungen in Medizin, Automotive und Luft‑ und Raumfahrt ermöglichen schnelle, zielgerichtete Lösungen –
              Zeit‑ und Kostenersparnis für unsere Kunden.
            </p>
            <div className="mt-4">
              <Link
                href="https://termiconsult.com/about"
                target="_blank"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
              >
                Zur Referenz
              </Link>
            </div>
          </div>
          <div className="liquid-glass rounded-2xl border border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white">Profil — Boaz Siekonha</h3>
            <ul className="mt-3 space-y-1 text-sm text-neutral-100/90">
              <li>Full‑Stack‑Entwickler · Web Development Specialist</li>
              <li>Moderne JavaScript‑Frameworks: Next.js, React · TypeScript, Node.js</li>
              <li>Cloud & DevOps‑Denken · Fokus auf Sicherheit, Skalierung und Wartbarkeit</li>
            </ul>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </main>
  )
}
