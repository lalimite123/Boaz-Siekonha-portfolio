"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline:
    "Boaz Siekonha, Full-Stack-Entwickler mit Expertise in React, Next.js, Node.js und TypeScript. Ich baue skalierbare Web-Apps mit moderner Architektur, sicheren APIs und intuitiven Interfaces – von der Idee bis zum Deployment.",
  copyright: "© 2025 — Boaz Siekonha",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="https://wa.me/4917661314158" target="_blank" rel="noopener noreferrer">
              Chat mit mir auf WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] text-lime-300 drop-shadow-[0_0_16px_rgba(132,204,22,0.25)]">PROJEKT — E‑COMMERCE PLATFORM (PWA)</p>
              <p className="mt-3 max-w-prose text-base sm:text-lg text-neutral-300">
                Progressive Web App mit Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui und vollständiger RESTful API.
              </p>
              <p className="mt-2 max-w-prose text-sm sm:text-base text-neutral-300">
                Authentifizierung &amp; Sicherheit mit NextAuth.js, JWT, bcrypt/Argon2, Middleware und rollenbasiertem Zugriff. Skalierbare Architektur, optimiert für Performance (Lazy Loading, Code Splitting, Caching, CDN).
              </p>
              <div className="mt-4 max-w-prose rounded-lg border border-lime-400/30 bg-lime-500/10 backdrop-blur-md shadow-md p-4 sm:p-5">
                <ul className="space-y-2 text-sm sm:text-base text-neutral-100/90">
                  <li>REST API: Produkte, Kategorien, Bestellungen, Authentifizierung, Mailer</li>
                  <li>Sicherheit: NextAuth.js, JWT, bcrypt/Argon2, Admin‑Middleware, RBAC</li>
                  <li>Katalog &amp; Checkout: Suche, Filter, Bestand, Warenkorb, Zahlungen, E‑Mail‑Bestätigungen</li>
                  <li>Admin‑Dashboard: CRUD, Bestellverfolgung, Rollen (Admin/User)</li>
                  <li>Datenbank: MongoDB/Mongoose, typisierte Schemas, Services, Init‑Skripte</li>
                  <li>Performance: Lazy Loading, Code Splitting, Caching, CDN</li>
                  <li>Tools: TypeScript, React, Next.js 13+, Node.js, Tailwind CSS, shadcn/ui, Framer Motion</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://wabo-realese-vdf9.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-lime-300/90 hover:text-white hover:bg-white/10"
                  >
                    Projekt entdecken
                  </Link>
                </div>
              </div>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="wabo-mobile.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="Boaz Siekonha App‑Vorschau"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      
                      <p className="text-xs text-white/80 sm:text-sm">Vom Feedback zur Freigabe in einem einzigen Ablauf</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Kein Aufwand
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-semibold text-white">Boaz Siekonha</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>
                    <Link href="/" className="hover:text-lime-300">Startseite</Link>
                  </li>
                  <li>
                    <Link href="/About" className="hover:text-lime-300">About</Link>
                  </li>
                  <li>
                    <Link href="#features" className="hover:text-lime-300">Projekte</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Kontakt</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://wa.me/4917661314158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-neutral-400" />
                    <a
                      href="mailto:boaz.siekonha15@gmail.com"
                      className="hover:text-lime-300"
                      aria-label="E‑Mail"
                    >
                      boaz.siekonha15@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <p>Développé par Aime Boaz Siekonha</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
