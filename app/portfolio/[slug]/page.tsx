import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { projects } from "@/lib/projects"

type Params = { slug: string }

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: "Projet introuvable" }
  return {
    title: `${project.title} | Boaz Siekonha`,
    description: project.description,
  }
}

export const dynamic = "force-static"

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main className="container mx-auto px-4 py-16 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-2 text-sm text-neutral-300">{project.description}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.role}</span>
        </div>
      </div>

      <Card className="liquid-glass border border-white/20">
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {(project.images?.length ? project.images : [project.coverImage]).map((src, i) => (
              <div key={i} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                <Image src={src || "/placeholder.jpg"} alt={`${project.title} image ${i + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 90vw" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {project.links && (
        <div className="mt-8 text-sm text-neutral-300">
          {project.links.live && (
            <a href={project.links.live} className="underline hover:text-lime-300" target="_blank" rel="noreferrer">
              Voir en ligne
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} className="ml-4 underline hover:text-lime-300" target="_blank" rel="noreferrer">
              Code source
            </a>
          )}
        </div>
      )}
    </main>
  )
}