"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
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
            <div className="mx-auto max-w-sm mb-3">
              <PharmaCarousel variant="compact" />
            </div>
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

function PharmaCarousel({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const slides = [
    { src: "/pharm/Admin dashbord.png", alt: "Pharma Dashboard — Admin" },
    { src: "/pharm/Dashbord-setting.png", alt: "Pharma Dashboard — Einstellungen" },
    { src: "/pharm/Dashbord-system-Activity.png", alt: "Pharma — Systemaktivität" },
    { src: "/pharm/Dashbord-user-management.png", alt: "Pharma — Benutzerverwaltung" },
    { src: "/pharm/doctor dashbord.png", alt: "Pharma — Arzt Dashboard" },
    { src: "/pharm/login out.png", alt: "Pharma — Login/Logout" },
    { src: "/pharm/medication-inventorie.png", alt: "Pharma — Medikamenten‑Inventar" },
    { src: "/pharm/mobile-view role selector.png", alt: "Pharma — Mobile Rollen‑Auswahl" },
    { src: "/pharm/role selector.png", alt: "Pharma — Rollen‑Auswahl" },
  ]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null)

  const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi])

  const [modalViewportRef, modalEmbla] = useEmblaCarousel({ loop: true, align: "start" })
  const [modalSelectedIndex, setModalSelectedIndex] = useState(0)
  useEffect(() => {
    if (!modalEmbla) return
    const onSelect = () => setModalSelectedIndex(modalEmbla.selectedScrollSnap())
    onSelect()
    modalEmbla.on("select", onSelect)
  }, [modalEmbla])
  useEffect(() => {
    if (modalEmbla && lightbox) {
      modalEmbla.scrollTo(lightbox.index)
    }
  }, [modalEmbla, lightbox])
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
      else if (e.key === "ArrowLeft") modalEmbla?.scrollPrev()
      else if (e.key === "ArrowRight") modalEmbla?.scrollNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox, modalEmbla])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={viewportRef as any}>
        <div className="flex">
          {slides.map(({ src, alt }, i) => (
            <div
              key={i}
              className={`min-w-0 ${variant === "compact" ? "flex-[0_0_100%] sm:flex-[0_0_70%]" : "flex-[0_0_100%] sm:flex-[0_0_80%]"} pr-3`}
            >
              <button
                type="button"
                onClick={() => setLightbox({ index: i })}
                aria-label="Bild groß anzeigen"
                className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 640px, 90vw"
                  priority={i === 0}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Zum Bild ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full ${i === selectedIndex ? "bg-white/90" : "bg-white/30"}`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          onClick={onPrev}
          aria-label="Vorheriges Bild"
          title="Vorheriges Bild"
          className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
          disabled={!emblaApi}
        >
          Zurück
        </button>
        <button
          onClick={onNext}
          aria-label="Nächstes Bild"
          title="Nächstes Bild"
          className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
          disabled={!emblaApi}
        >
          Weiter
        </button>
      </div>

      <AlertDialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <AlertDialogContent className="w-[96vw] max-w-6xl rounded-xl border border-white/20 bg-black/70 backdrop-blur-md shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Vorschau</AlertDialogTitle>
            <AlertDialogDescription className="text-neutral-300">Bilder im großen Format</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="relative" ref={modalViewportRef as any}>
              <div className="flex">
                {slides.map(({ src, alt }, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_100%]">
                    <div className="relative w-full aspect-video max-h-[80vh] bg-black">
                      <Image src={src} alt={alt} fill className="object-contain" sizes="(min-width: 1024px) 1024px, 96vw" />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => modalEmbla?.scrollPrev()}
                aria-label="Vorheriges Bild"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white/90 hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => modalEmbla?.scrollNext()}
                aria-label="Nächstes Bild"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white/90 hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => modalEmbla?.scrollTo(i)}
                aria-label={`Zum Bild ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full ${i === modalSelectedIndex ? "bg-white/90" : "bg-white/30"}`}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => modalEmbla?.scrollPrev()}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
            >
              Zurück
            </button>
            <button
              onClick={() => modalEmbla?.scrollNext()}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/90 hover:bg-white/10"
            >
              Weiter
            </button>
            <AlertDialogCancel className="rounded-full">Schließen</AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}