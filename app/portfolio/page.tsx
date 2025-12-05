import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { projects } from "@/lib/projects"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Portfolio | Boaz Siekonha",
  description: "Sélection de projets – design, développement et visuels.",
}

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-16 text-white">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Portfolio</h1>
        <p className="mt-2 text-sm text-neutral-300">Quelques projets récents et représentatifs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group">
            <Card className="liquid-glass overflow-hidden border border-white/20 transition-all group-hover:liquid-glass-enhanced">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-white">{p.title}</div>
                  <div className="text-xs text-neutral-400">{p.year}</div>
                </div>
                <p className="mt-1 text-sm text-neutral-300">{p.description}</p>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                  <Image src={p.coverImage || "/placeholder.jpg"} alt={p.title} fill className="object-cover" sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}