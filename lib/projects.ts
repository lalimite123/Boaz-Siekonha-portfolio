export type Project = {
  slug: string
  title: string
  description: string
  coverImage: string
  tags: string[]
  year: number
  role: string
  links?: {
    live?: string
    github?: string
  }
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: "smartpack-pro",
    title: "Smartpack PRO",
    description:
      "Concept, design et présentation UI pour un produit de bagagerie – images et animations de haute qualité.",
    coverImage: "/images/top-rated-2.png",
    tags: ["UI", "Animation", "3D"],
    year: 2024,
    role: "Design & Frontend",
    links: { live: "#" },
    images: ["/images/top-rated-1.png", "/images/top-rated-2.png"],
  },
  {
    slug: "camera-module",
    title: "Camera Module Showcase",
    description:
      "Mise en scène du module caméra avec rendu détaillé, textures et lumière – page de présentation produit.",
    coverImage: "/images/intuitive-1.png",
    tags: ["Rendu", "Produit", "UX"],
    year: 2023,
    role: "Direction artistique",
    links: { live: "#" },
    images: ["/images/intuitive-1.png", "/images/intuitive-2.png"],
  },
  {
    slug: "portfolio-web",
    title: "Portfolio Web",
    description:
      "Refonte d’un site Next.js avec Tailwind et composants UI modernes, focus performance et accessibilité.",
    coverImage: "/placeholder.jpg",
    tags: ["Next.js", "Tailwind", "UI"],
    year: 2025,
    role: "Développement", 
    links: { github: "#" },
    images: ["/placeholder.jpg"],
  },
]