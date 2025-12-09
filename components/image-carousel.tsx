"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import useEmblaCarousel from "embla-carousel-react"

type ImageItem = { src: string; alt?: string }

type ImageCarouselProps = {
  images: ImageItem[]
  variant?: "default" | "compact"
  className?: string
}

export function ImageCarousel({ images, variant = "default", className }: ImageCarouselProps) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
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
    <div className={className || ""}>
      <div className="overflow-hidden" ref={viewportRef as any}>
        <div className="flex">
          {images.map(({ src, alt }, i) => (
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
                  alt={alt || "Bild"}
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
        {images.map((_, i) => (
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
        <AlertDialogContent className="w-[96vw] max-w-[96vw] xl:max-w-[1280px] 2xl:max-w-[1400px] max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-xl border border-white/20 bg-black/70 backdrop-blur-md shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Vorschau</AlertDialogTitle>
            <AlertDialogDescription className="text-neutral-300">Bilder im großen Format</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <div className="relative" ref={modalViewportRef as any}>
              <div className="flex">
                {images.map(({ src, alt }, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_100%]">
                    <div className="relative w-full aspect-video max-h-[80vh] bg-black">
                      <Image src={src} alt={alt || "Bild"} fill className="object-contain" sizes="(min-width: 1024px) 1024px, 96vw" />
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
            {images.map((_, i) => (
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