"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)
  const logoFiles = [
    "Google_Colaboratory.svg",
    "auth0.svg",
    "better-auth_wordmark_light.svg",
    "csharp.svg",
    "dotnet.svg",
    "effect_light.svg",
    "firebase-wordmark.svg",
    "java.svg",
    "javascript.svg",
    "json.svg",
    "microsoft-onedrive.svg",
    "netlify.svg",
    "nextjs_icon_dark.svg",
    "nodejs.svg",
    "nuxthub-wordmark-light.svg",
    "nvidia-icon-light.svg",
    "python.svg",
    "react_wordmark_light.svg",
    "shadcn-ui.svg",
    "svelte.svg",
    "terraform.svg",
    "threejs-light.svg",
    "typescript.svg",
    "vercel_wordmark.svg",
    "vitejs.svg",
  ]

  const humanize = (file: string) =>
    file
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (m) => m.toUpperCase())

  const allLogos = logoFiles.map((file) => ({
    name: humanize(file),
    image: `/logo/${file}`,
  }))

  const half = Math.ceil(allLogos.length / 2)
  const logos = allLogos.slice(0, half)
  const secondRowLogos = allLogos.slice(half)

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden transition-all duration-200 hover:border-lime-400/40 hover:shadow-[0_0_16px_rgba(132,204,22,0.25)]">
        <div className="relative w-full h-full">
          <Image
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Meet our <span className="text-lime-300">top-tier</span>
            <br />
            customers
          </h2>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced text-white border-white/20 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
