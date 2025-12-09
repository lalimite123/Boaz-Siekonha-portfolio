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
import { ImageCarousel } from "@/components/image-carousel"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Was macht mich zum besten Vorteil für Ihre Projekte ?",
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
        {/* E‑Commerce Admin Dashboard Card */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">E‑COMMERCE ADMIN</p>
            <CardTitle className="mt-1 text-xl text-white">Next.js Administrationsdashboard – E‑Commerce Management</CardTitle>
            <div className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-lime-300/90">Full‑Stack‑Softwareentwickler</div>
          </CardHeader>
          <CardContent>
            <div className="mx-auto max-w-sm mb-3">
              <ImageCarousel
                images={[
                  { src: "/dashbord wabo/dashbord1.png", alt: "Admin Dashboard — Übersicht" },
                  { src: "/dashbord wabo/dashbord2.png", alt: "Admin Dashboard — Produkte" },
                  { src: "/dashbord wabo/dashbord3.png", alt: "Admin Dashboard — Bestellungen" },
                  { src: "/dashbord wabo/dashbord4.png", alt: "Admin Dashboard — Kategorien" },
                  { src: "/dashbord wabo/dashbord5.png", alt: "Admin Dashboard — Best‑Seller" },
                ]}
                variant="compact"
              />
            </div>
            <p className="text-sm sm:text-base text-neutral-300">
              Next.js Admin‑Dashboard für die komplette E‑Commerce‑Verwaltung. Produkte, Bestellungen, Kategorien und Best‑Seller — klar strukturiert und intuitiv, mit modularer Architektur und Tailwind‑Designsystem.
            </p>
            <div className="mt-4 rounded-lg border border-lime-400/30 bg-lime-500/10 backdrop-blur-md p-4">
              <ul className="space-y-1 text-sm text-neutral-100/90">
                <li>Virtualisierte Tabellen, Lazy Loading, Suche/Filter/Pagination</li>
                <li>Order Flow transparent: Detailmodals, optimierte Bilder</li>
                <li>NextAuth & ProtectedRoute, ARIA‑konforme UI</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center gap-3">
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
                <AlertDialogContent className="w-[92vw] max-w-5xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Administrationsdashboard — E‑Commerce</AlertDialogTitle>
                    <AlertDialogDescription className="text-neutral-300">Komplette Verwaltung & technische Highlights</AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="space-y-3 text-sm text-neutral-300">
                    <p>
                      Ich habe ein modernes und leistungsstarkes Admin‑Dashboard mit Next.js entwickelt, das speziell für die komplette Verwaltung eines E‑Commerce‑Systems konzipiert wurde. Das Dashboard ermöglicht die effiziente Steuerung von Produkten, Bestellungen, Kategorien und Best‑Sellern — alles in einer klar strukturierten, intuitiven Oberfläche.
                    </p>
                    <p>
                      Die Architektur ist voll modular aufgebaut und nutzt dedizierte Hooks sowie ein wiederverwendbares Tailwind‑Designsystem.
                    </p>
                    <p className="text-neutral-200 font-semibold">Performance & Skalierbarkeit</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Virtualisierte Produkt‑ und Bestelltabellen</li>
                      <li>Lazy Loading für bessere Ladezeiten</li>
                      <li>Clientseitige Optimierungen: Suche, Filter, Pagination via <span className="font-mono">useMemo</span></li>
                    </ul>
                    <p className="text-neutral-200 font-semibold">Intensiver Bestellfluss (Order Flow)</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Abruf jeder Bestellung über <span className="font-mono">/api/orders/{"{id}"}</span></li>
                      <li>Sofort sichtbare, optimierte Bilder</li>
                      <li>Verwaltungsmodals: <span className="font-mono">ViewOrderAdmin</span> und <span className="font-mono">OrderDetailsModal</span></li>
                    </ul>
                    <p className="text-neutral-200 font-semibold">Sicherheit & Barrierefreiheit</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>NextAuth für Authentifizierung</li>
                      <li>ProtectedRoute zur Absicherung aller Admin‑Bereiche</li>
                      <li>Saubere, ARIA‑konforme UI</li>
                    </ul>
                    <p className="text-neutral-200 font-semibold">UX & Designsystem</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Intelligente Tabs (Produkte · Bestellungen · Best‑Seller)</li>
                      <li>Kontextbasierte Suchleiste & StatsCards</li>
                      <li>Fokusorientierte Modals; Bilder mit <span className="font-mono">object-contain</span> für Stabilität</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <AlertDialogCancel className="rounded-full">Schließen</AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Akor Immigration Webportal Card - Always visible */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">IMMIGRATION WEBPORTAL</p>
            <CardTitle className="mt-1 text-xl text-white">Projekt — Akor Immigration Webportal</CardTitle>
            <div className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-lime-300/90">Full‑Stack‑Softwareentwickler</div>
          </CardHeader>
          <CardContent>
            <div className="mx-auto max-w-sm mb-3">
              <ImageCarousel
                images={[
                  { src: "/akor_image/akor1.png", alt: "Akor Immigration — Homepage" },
                  { src: "/akor_image/akor2.png", alt: "Akor Immigration — Services" },
                ]}
                variant="compact"
              />
            </div>
            <p className="text-sm sm:text-base text-neutral-300">
              Entwicklung eines Webportals zur Bereitstellung von Immigrationsdienstleistungen für Deutschland — modernes Next.js (SSR), TypeScript, Tailwind CSS und shadcn/ui, mit sicherer Authentifizierung und mehrsprachiger Oberfläche (FR/DE).
            </p>
            <div className="mt-4 rounded-lg border border-lime-400/30 bg-lime-500/10 backdrop-blur-md p-4">
              <ul className="space-y-1 text-sm text-neutral-100/90">
                <li>JWT & bcrypt, Rate Limiting, API Routes (SSR)</li>
                <li>Mehrsprachiges Frontend (FR/DE), modernes Designsystem</li>
                <li>Admin‑Dashboard mit RBAC, Monitoring, Antragverwaltung</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.akorimmigration.net"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
                aria-label="Zur Website"
                title="Zur Website"
              >
                Zur Website
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
                <AlertDialogContent className="w-[92vw] max-w-5xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Projektdetails — Akor Immigration</AlertDialogTitle>
                    <AlertDialogDescription className="text-neutral-300">Webportal, Sicherheit, Admin & Skalierung</AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="space-y-3 text-sm text-neutral-300">
                    <p><strong>Projekt:</strong> Entwicklung eines Webportals zur Bereitstellung von Immigrationsdienstleistungen (<Link href="https://www.akorimmigration.net" className="underline text-lime-300">akorimmigration.net</Link>).</p>
                    <p><strong>Projektrolle:</strong> Softwareentwickler</p>
                    <p><strong>Projektinhalt:</strong> Moderne Architektur mit Next.js (SSR), TypeScript, Tailwind CSS, shadcn/ui und Radix UI. Sicheres Authentifizierungssystem (JWT, bcrypt, Rate Limiting) und mehrsprachiges Frontend (FR/DE).</p>
                    <p>Aufbau eines Admin‑Dashboards mit Rollen‑ und Zugriffsverwaltung (RBAC), Monitoring sowie Verwaltung von Immigration‑Anträgen.</p>
                    <p>Vorbereitung der MongoDB‑Integration; Evaluierung von Erweiterungen (Payment‑Gateways, Messaging, Monitoring).</p>
                    <p className="text-xs text-neutral-400"><strong>Tools:</strong> Next.js 14 (SSR, API Routes), TypeScript, React (Hooks, Context API), Tailwind CSS, shadcn/ui, Radix UI, Framer Motion, JWT, bcrypt, MongoDB (geplant), pnpm, Git/GitHub, SCRUM.</p>
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

      {/* Pharma Inventory Project Showcase */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Left: Dermafuss Lollar project */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">DERMAFUSS LOLLAR</p>
            <CardTitle className="mt-1 text-xl text-white">Projekt — Moderne Webseite mit Buchungssystem</CardTitle>
            <div className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-lime-300/90">Full‑Stack‑Softwareentwickler</div>
          </CardHeader>
          <CardContent>
            <div className="mx-auto max-w-sm mb-3">
              <ImageCarousel
                images={[
                  { src: "/derma-image/derma1.png", alt: "Dermafuss — Homepage" },
                  { src: "/derma-image/derma2.png", alt: "Dermafuss — Leistungen" },
                  { src: "/derma-image/derma4.png", alt: "Dermafuss — Philosophie" },
                  { src: "/derma-image/derma5.png", alt: "Dermafuss — Online‑Buchung" },
                ]}
                variant="compact"
              />
            </div>
            <p className="text-sm sm:text-base text-neutral-300">
              Entwicklung einer modernen Webseite mit Buchungssystem für ein Fachfußpflege‑Studio. Next.js 16 (App Router), TypeScript, React 18, Tailwind CSS 4, Radix UI und framer‑motion für eine performante, barrierearme und mobile‑optimierte UX.
            </p>
            <div className="mt-4 rounded-lg border border-lime-400/30 bg-lime-500/10 backdrop-blur-md p-4">
              <ul className="space-y-1 text-sm text-neutral-100/90">
                <li>REST‑API für Terminbuchungen mit MongoDB, Validierungen, eindeutiger Index</li>
                <li>Präzise Zeitzonen‑Korrektur durch lokales Datums‑Handling</li>
                <li>DSGVO‑konformer Cookie‑Consent mit ereignisgesteuerter Analytics</li>
                <li>Fortgeschrittene SEO: JSON‑LD, OpenGraph/Twitter, Canonical, Sitemap, Robots</li>
                <li>SendGrid Bestätigungen & ICS‑Kalendereinladungen</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Link
                href="https://www.derma-fuss.de/"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
                aria-label="Zur Website"
                title="Zur Website"
              >
                Zur Website
              </Link>
              <div className="flex items-center gap-2">
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
                  <AlertDialogContent className="w-[92vw] max-w-5xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-white">Projektdetails — Dermafuss Lollar</AlertDialogTitle>
                      <AlertDialogDescription className="text-neutral-300">Webseite, Buchungen, DSGVO, SEO & E‑Mail</AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="space-y-3 text-sm text-neutral-300">
                      <p><strong>Projekt:</strong> Entwicklung einer modernen Webseite mit Buchungssystem für ein Fachfußpflege‑Studio (<Link href="https://www.derma-fuss.de/" className="underline text-lime-300">derma-fuss.de</Link>).</p>
                      <p><strong>Projektrolle:</strong> Full‑Stack‑Softwareentwickler</p>
                      <p><strong>Projektinhalt:</strong> Next.js 16 (App Router), TypeScript, React 18 (Client Components & Hooks), Tailwind CSS 4, Radix UI und framer‑motion für eine performante, barrierearme und mobile‑optimierte Nutzererfahrung.</p>
                      <p>REST‑API für Terminbuchungen auf Basis von MongoDB, mit Validierungen, eindeutigem Index zur Vermeidung von Doppelbuchungen sowie präziser Zeitzonen‑Korrektur durch lokales Datums‑Handling.</p>
                      <p>DSGVO‑konformer Cookie‑Consent mit ereignisgesteuerter Aktivierung von Analytics (Event‑Bus über DOM) und gekapselter Tracking‑Integration.</p>
                      <p>Fortgeschrittene SEO‑Optimierung: JSON‑LD LocalBusiness, OpenGraph/Twitter Cards, Canonical‑Tags, Sitemap, Robots und semantisches H1 für optimale Auffindbarkeit.</p>
                      <p>Integration von SendGrid für E‑Mail‑Bestätigungen sowie Generierung von ICS‑Kalendereinladungen für Outlook/Apple/Google Kalender.</p>
                      <p className="text-xs text-neutral-400"><strong>Tools:</strong> Next.js 16 (App Router, Metadata Routes), TypeScript, React 18 (Hooks, Client Components), REST API, Docker MongoDB, Tailwind CSS 4, Radix UI, shadcn/ui, framer‑motion, Embla Carousel, Service Worker, Manifest, localStorage, sessionStorage, SendGrid, ICS‑Generator, pnpm, Git/GitHub, SCRUM.</p>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <AlertDialogCancel className="rounded-full">Schließen</AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
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
                  <AlertDialogContent className="w-[96vw] max-w-[96vw] xl:max-w-[1280px] 2xl:max-w-[1400px] max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                    <div className="relative rounded-2xl border border-white/20 bg-black/60 overflow-hidden">
                      <video
                        src="/derma-image/fuss-video.mp4"
                        className="w-full aspect-video max-h-[80vh] object-contain"
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <AlertDialogCancel className="rounded-full">Schließen</AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right: Project description with CTA to explore */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">DASHBOARDS & ROLLEN</p>
            <CardTitle className="mt-1 text-xl text-white">Admin • Apotheker • Verkäufer</CardTitle>
            <div className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-lime-300/90">Full‑Stack‑Softwareentwickler</div>
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
        <AlertDialogContent className="w-[96vw] max-w-6xl sm:max-w-6xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-xl border border-white/20 bg-black/70 backdrop-blur-md shadow-2xl">
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