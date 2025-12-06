"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"
import RotatingText from "@/components/ui/rotating-text"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { motion } from "framer-motion"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="https://wa.me/4917661314158" target="_blank" rel="noopener noreferrer">
        Me contacter
      </a>
    </Button>
  )

  const rotatingTexts = [
    "Intelligence Artificielle",
    "Cloud Computing",
    "Cybersécurité",
    "DevOps",
    "Data Science",
    "Big Data",
    "Machine Learning",
    "Artificial Neural Networks",
    "Natural Language Processing (NLP)",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "GCP",
    "Azure",
  ]

  const timelineDataDevopsScrum = [
    { id: 1, title: "Scrum", date: "2025", content: "Sprints, backlog, revues & rétros", category: "scrum", icon: "listChecks", relatedIds: [2, 3], status: "completed", energy: 80 },
    { id: 2, title: "DevOps", date: "2025", content: "Automatisation, CI/CD, observabilité", category: "devops", icon: "settings", relatedIds: [1, 4], status: "in-progress", energy: 70 },
    { id: 3, title: "CI/CD", date: "2025", content: "Intégration continue & déploiement", category: "pipeline", icon: "gitBranch", relatedIds: [2], status: "completed", energy: 65 },
    { id: 4, title: "Delivery", date: "2025", content: "Release fiable & monitoring", category: "delivery", icon: "rocket", relatedIds: [2, 3], status: "completed", energy: 75 },
    { id: 5, title: "Monitoring", date: "2025", content: "Surveillance & alertes", category: "monitoring", icon: "chartBar", relatedIds: [4], status: "completed", energy: 80 },
    { id: 6, title: "Security", date: "2025", content: "Sécurité des données & applications", category: "security", icon: "lock", relatedIds: [4], status: "completed", energy: 85 },
    { id: 7, title: "Scalability", date: "2025", content: "Scalabilité horizontale & verticale", category: "scalability", icon: "scale", relatedIds: [4], status: "completed", energy: 80 },
  ]

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="mb-5 flex items-center gap-2">
              <Image src="/icons/skitbit-white.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">boaz siekonha</p>
            </div>
            <h1 className="mt-3 text-left text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
              <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)] sm:text-6xl md:text-6xl">Fullstack software engineer</span>
              <span className="block text-white/90 text-3xl sm:text-4xl md:text-5xl">Du Design à la Production</span>
              <span className="block text-neutral-300 text-xl sm:text-2xl md:text-3xl">Solide expertise Front-End • APIs • Cloud</span>
            </h1>
          <div className="mt-4">
            <RotatingText
              texts={rotatingTexts}
              rotationInterval={2200}
              mainClassName="inline-flex items-center text-left text-2xl sm:text-3xl font-extrabold tracking-tight bg-lime-600/80 text-white drop-shadow-[0_0_20px_rgba(132,204,22,0.35)] rounded-lg px-3 py-1.5"
              splitLevelClassName="mr-1"
            />
          </div>
            <div className="mt-6">{buttonNew}</div>
          </div>
          <div className="w-full flex justify-start sm:justify-center lg:justify-end pl-2 sm:pl-0">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md cursor-pointer">
                    <Image src="/profil-bild.jpg" alt="Photo de profil — Boaz Siekonha" fill className="object-cover object-[48%_50%]" sizes="(min-width: 1024px) 256px, (min-width: 768px) 224px, 192px" />
                  </div>
                </AlertDialogTrigger>
                <div className="flex items-center gap-2 sm:gap-3">
                  
                  <AlertDialogTrigger asChild>
                    <Button className="rounded-full bg-lime-400 px-4 py-1 sm:px-5 sm:py-1.5 text-black hover:bg-lime-300 text-sm">
                      <span className="text-sm sm:text-base font-semibold tracking-wide text-white/90">
                        Even the sky is not the limit
                      </span>
                    </Button>
                  </AlertDialogTrigger>
                </div>
                <AlertDialogContent className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Boaz Siekonha</AlertDialogTitle>
                    <AlertDialogDescription className="text-neutral-300">
                      Software Engineer Fullstack — du design à la production. Passionné par l’IA, le Cloud et la sécurité, avec un focus sur la qualité, la performance et l’expérience utilisateur.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 items-center">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md cursor-zoom-in transition-transform duration-300 hover:scale-[1.06] active:scale-[1.12]">
                      <Image src="/profil-bild.jpg" alt="Profil — Boaz Siekonha" fill className="object-cover" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-neutral-300">Je conçois et livre des applications robustes et élégantes: Front-End moderne, APIs fiables, pipelines DevOps et déploiements cloud.</p>
                      <div className="inline-flex items-center rounded-full border border-lime-400/40 bg-lime-600/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Profil mis en avant</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button asChild className="rounded-full bg-lime-400 px-5 py-1.5 text-black hover:bg-lime-300 text-sm">
                      <a href="https://wa.me/4917661314158" target="_blank" rel="noopener noreferrer">Me contacter</a>
                    </Button>
                    <AlertDialogCancel className="rounded-full">Fermer</AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
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
              lightColor="#0d8af0ff"
            />
          </div>
          <motion.div
            className="relative z-10 overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-md p-4 sm:p-6 transition-shadow duration-200 hover:shadow-[0_0_18px_rgba(255,255,255,0.10)] hover:ring-1 hover:ring-white/10 hover:border-white/30 hover:bg-white/12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", damping: 22, stiffness: 220, mass: 0.6 }}
          >
            <div className="space-y-4 group">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-300/90">REST API</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-white text-transparent bg-clip-text transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] group-hover:scale-[1.02]">Backend (REST API)</h2>
              <div className="mt-1 h-px w-28 bg-gradient-to-r from-blue-400/60 to-transparent" />
              <p className="text-lg leading-8 text-neutral-200 font-medium">
                Endpoints sécurisés et structurés pour la gestion des données: conception orientée ressources,
                validations, contrôle des accès et réponses normalisées.
              </p>
              <ul className="text-lg text-neutral-200/90 space-y-2 font-semibold">
                <li><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-400/80 align-middle"></span>GET, POST, PUT, DELETE sur les ressources principales</li>
                <li><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-400/80 align-middle"></span>Validation des schémas et gestion des erreurs</li>
                <li><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-400/80 align-middle"></span>Statuts HTTP cohérents et messages clairs</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            className="relative z-10 overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-md p-4 sm:p-6 transition-shadow duration-200 hover:shadow-[0_0_18px_rgba(255,255,255,0.10)] hover:ring-1 hover:ring-white/10 hover:border-white/30 hover:bg-white/12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", damping: 22, stiffness: 220, mass: 0.6, delay: 0.06 }}
          >
            <div className="space-y-4 group">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-purple-300/90">Agile & Delivery</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300 text-transparent bg-clip-text transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.35)] group-hover:scale-[1.02]">Approche DevOps & Scrum</h2>
              <div className="mt-1 h-px w-28 bg-gradient-to-r from-purple-400/60 to-transparent" />
              <p className="text-lg leading-8 text-neutral-200 font-medium">
                Cadre agile et chaîne de livraison continue: sprints, backlog priorisé, pipelines automatisés et qualité mesurable.
              </p>
              <ul className="text-lg text-neutral-200/90 space-y-2 font-semibold">
                <li><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400/80 align-middle"></span>Scrum: sprints, revues, rétrospectives, backlog</li>
                <li><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400/80 align-middle"></span>DevOps: CI/CD, monitoring, sécurité et conformité</li>
                <li><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400/80 align-middle"></span>Delivery: releases fiables, feedback & amélioration continue</li>
              </ul>
            </div>
          </motion.div>
          <div>
            <RadialOrbitalTimeline timelineData={timelineDataDevopsScrum} className="h-[460px] rounded-xl" backgroundClass="bg-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
