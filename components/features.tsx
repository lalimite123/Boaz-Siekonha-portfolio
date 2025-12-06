"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import useEmblaCarousel from "embla-carousel-react"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "What makes us the best studio for you.",
  subtitle: "Discover our unique approach to 3D animation",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Adaptability Card - Hidden on mobile */}
        <Card className="hidden md:block liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">ADAPTABILITY</p>
            <CardTitle className="mt-1 text-xl text-white">Make the experience truly intuitive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-1.png"
                  alt="Close-up smartphone camera module on textured leather back"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-2.png"
                  alt="Hand gripping textured phone back — macro detail"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">CLIENT LOVE</p>
            <CardTitle className="mt-1 text-xl text-white">
              Their work didn't just look good, it moved the needle — our audience felt the difference instantly.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"/images/top-rated-1.png"}
                width={280}
                height={160}
                alt="Product sketch concepts of backpack on paper"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"/images/top-rated-2.png"}
                width={280}
                height={160}
                alt="Backpacks on stage with Smartpack PRO lighting"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pharma Inventory Project Showcase */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Left: Carousel with images/video teaser */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">PHARMA INVENTORY PLATFORM</p>
            <CardTitle className="mt-1 text-xl text-white">Projekt — Pharmazeutische Inventarverwaltung (PWA)</CardTitle>
          </CardHeader>
          <CardContent>
            <PharmaCarousel />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-neutral-300">Karussell: Screens & Teaser</span>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
                    aria-label="Video ansehen"
                    title="Video ansehen"
                  >
                    Video ansehen
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-[92vw] max-w-5xl rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Pharma — Inventarverwaltung</AlertDialogTitle>
                    <AlertDialogDescription className="text-neutral-300">
                      Vollständige Beschreibung & Vorschau
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-[1.1fr_1.4fr] items-start">
                    <div className="space-y-2 text-sm text-neutral-300">
                      <p><strong>Projekt:</strong> Entwicklung einer pharmazeutischen Inventarverwaltungsplattform</p>
                      <p><strong>Projektrolle:</strong> Freiberuflicher Fullstack Software Entwickler</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Moderne PWA mit Next.js 13+ (App Router)</li>
                        <li>RESTful API: Medikamente, Kategorien, Lagerbestand, Authentifizierung, Benachrichtigungen</li>
                        <li>Sichere Integration mit Supabase PostgreSQL (typisierte Schemas, Services)</li>
                        <li>Dynamischer Medikamentenkatalog: Suche, Filter, Preise</li>
                        <li>Bestandsverwaltung: Echtzeitüberwachung, Workflows</li>
                        <li>Drei Dashboards (Admin/Apotheker/Verkäufer) — CRUD, Rollen, Logs, Benutzerverwaltung</li>
                        <li>Offline‑Modus mit intelligenten Fallbacks, robuste Fehlerbehandlung</li>
                        <li>Performance: Lazy Loading, Code Splitting, Konnektivitätserkennung</li>
                      </ul>
                      <p className="text-xs text-neutral-400">Tools: TypeScript/JavaScript, React.js, Next.js 13+ App Router, Supabase, PostgreSQL, Node.js, MongoDB/Mongoose, NextAuth.js, JWT, bcrypt/Argon2, Tailwind CSS, shadcn/ui, Framer Motion</p>
                    </div>
                    <div className="relative rounded-2xl border border-white/20 bg-black/60 overflow-hidden">
                      <video
                        src="/wabo-mobile.mp4"
                        className="h-full w-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <AlertDialogCancel className="rounded-full">Schließen</AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Right: Project description with CTA to explore */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">DASHBOARDS & ROLLEN</p>
            <CardTitle className="mt-1 text-xl text-white">Admin • Apotheker • Verkäufer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-neutral-300">
              Erste Einblicke: Inventarverwaltung mit Echtzeit‑Überwachung und rollenbasiertem Zugriff. Entdecken Sie Katalog, Suche/Filter, Preisgestaltung und Workflows — kompakt dargestellt.
            </p>
            <div className="mt-4 rounded-lg border border-lime-400/30 bg-lime-500/10 backdrop-blur-md p-4">
              <ul className="space-y-1 text-sm text-neutral-100/90">
                <li>Katalog &amp; Lager: Suche, Filter, Bestand, Preise</li>
                <li>Dashboards: CRUD, Logs, Benutzer, Rollen</li>
                <li>API: Authentifizierung, Benachrichtigungen, Services</li>
              </ul>
            </div>
              <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://pharm-systeme.vercel.app/"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
                aria-label="Projekt ansehen"
                title="Projekt ansehen"
              >
                Projekt ansehen
              </Link>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
                    aria-label="Mehr Details"
                    title="Mehr Details"
                  >
                    Mehr Details
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-[92vw] max-w-5xl rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Projektdetails — Pharma</AlertDialogTitle>
                    <AlertDialogDescription className="text-neutral-300">Zusammenfassung & Highlights</AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="space-y-2 text-sm text-neutral-300">
                    <p><strong>Projekt:</strong> Entwicklung einer pharmazeutischen Inventarverwaltungsplattform</p>
                    <p><strong>Rolle:</strong> Freiberuflicher Fullstack Software Entwickler</p>
                    <p>
                      PWA mit Next.js App Router, Supabase PostgreSQL, dynamischem Katalog, umfangreichen Dashboards und
                      robuster Authentifizierung.
                    </p>
                    <p className="text-xs text-neutral-400">Tools: TypeScript/JavaScript, React.js, Next.js 13+, Supabase, PostgreSQL, Node.js, MongoDB/Mongoose, NextAuth.js, JWT, bcrypt/Argon2, Tailwind CSS, shadcn/ui, Framer Motion</p>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <AlertDialogCancel className="rounded-full">Schließen</AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function PharmaCarousel() {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={viewportRef as any}>
        <div className="flex">
          {["/images/top-rated-1.png", "/images/top-rated-2.png", "/images/intuitive-1.png", "/images/intuitive-2.png"].map((src, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] pr-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={src}
                  alt={`Pharma screen ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 640px, 90vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          onClick={onPrev}
          aria-label="Vorheriges Bild"
          title="Vorheriges Bild"
          className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
          disabled={!emblaApi}
        >
          Prev
        </button>
        <button
          onClick={onNext}
          aria-label="Nächstes Bild"
          title="Nächstes Bild"
          className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
          disabled={!emblaApi}
        >
          Next
        </button>
      </div>
    </div>
  )
}
