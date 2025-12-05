import { Button } from "@/components/ui/button"
import Image from "next/image"
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
        Me contacter
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="mb-5 flex items-center gap-2">
              <Image src="/icons/skitbit-white.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">boaz siekonha</p>
            </div>
            <h1 className="mt-3 text-left text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Portfolio Personnel</span>
              <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Design & Développement</span>
              <span className="block">Projets sélectionnés</span>
            </h1>
            <div className="mt-6">{buttonNew}</div>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-full border border-white/10 bg-black">
              <Image src="/profil-bild.jpg" alt="Photo de profil — Boaz Siekonha" fill className="object-cover" sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, 192px" />
            </div>
          </div>
        </div>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <DatabaseWithRestApi
              className="mx-auto lg:ml-0"
              title="Implémentations backend — REST API"
              circleText="API"
              badgeTexts={{ first: "GET", second: "POST", third: "PUT", fourth: "DELETE" }}
              buttonTexts={{ first: "Back-end", second: "Endpoints" }}
              lightColor="#8b5cf6"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Backend (REST API)</h2>
            <p className="text-sm text-neutral-300">
              Endpoints sécurisés et structurés pour la gestion des données: conception orientée ressources,
              validations, contrôle des accès et réponses normalisées.
            </p>
            <ul className="text-sm text-neutral-300 space-y-2">
              <li>GET, POST, PUT, DELETE sur les ressources principales</li>
              <li>Validation des schémas et gestion des erreurs</li>
              <li>Statuts HTTP cohérents et messages clairs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
