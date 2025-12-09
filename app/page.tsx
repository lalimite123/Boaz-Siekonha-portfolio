import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Données structurées principale
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://example.com/",
    name: "Boaz Siekonha",
    description: "Portfolio personnel – design, développement et visuels.",
    url: "https://example.com/",
  }

  

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
       
        <Features />
        <LogoMarquee />
        <AppverseFooter />
      </main>

      <Script id="page-structured-data" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }} />
    </>
  )
}
