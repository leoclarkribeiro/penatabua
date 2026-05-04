import { useCallback, useEffect, useMemo, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import { galleryImageItems } from "@/data/galleryImages";
import { cn } from "@/lib/utils";

function chunk<T>(arr: T[], size: number): T[][] {
  if (size < 1) return [arr];
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

const GallerySection = () => {
  const [perPage, setPerPage] = useState(4);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerPage(mq.matches ? 4 : 3);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pages = useMemo(() => chunk(galleryImageItems, perPage), [perPage]);

  const onSelect = useCallback((carousel: CarouselApi) => {
    setCurrent(carousel.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const snapCount = api?.scrollSnapList().length ?? pages.length;

  const total = galleryImageItems.length;
  const zoomOpen = zoomIndex !== null;

  const goZoomPrev = useCallback(() => {
    setZoomIndex((i) => (i === null ? null : Math.max(0, i - 1)));
  }, []);

  const goZoomNext = useCallback(() => {
    setZoomIndex((i) => (i === null ? null : Math.min(total - 1, i + 1)));
  }, [total]);

  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goZoomPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goZoomNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen, goZoomPrev, goZoomNext]);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <p className="font-body mb-4 text-sm tracking-[0.3em] text-primary uppercase">Galeria</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl">
            30 anos de <span className="text-gradient-gold">história</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl px-10 md:px-14">
          <Carousel
            key={`${perPage}-${pages.length}`}
            className="w-full"
            opts={{ align: "start", loop: false, skipSnaps: false, dragFree: false }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {pages.map((group, pageIdx) => (
                <CarouselItem key={pageIdx} className="basis-full pl-3 md:pl-4">
                  <div className="grid auto-rows-fr grid-cols-3 gap-2 md:grid-cols-4 md:gap-4">
                    {group.map((img, i) => {
                      const globalIndex = pageIdx * perPage + i;
                      return (
                        <button
                          key={`${pageIdx}-${img.src}-${i}`}
                          type="button"
                          aria-label={`Ampliar: ${img.alt}`}
                          className="group relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-sm text-left md:aspect-[4/5]"
                          onClick={(e) => {
                            e.stopPropagation();
                            setZoomIndex(globalIndex);
                          }}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading={pageIdx === 0 ? "eager" : "lazy"}
                            decoding="async"
                            draggable={false}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/30" />
                        </button>
                      );
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {!zoomOpen && (
              <>
                <CarouselPrevious
                  variant="outline"
                  aria-label="Página anterior da galeria"
                  className="left-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-40 md:left-1"
                />
                <CarouselNext
                  variant="outline"
                  aria-label="Próxima página da galeria"
                  className="right-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-40 md:right-1"
                />
              </>
            )}
          </Carousel>

          {!zoomOpen && (
            <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Navegação da galeria">
              {Array.from({ length: snapCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Página ${i + 1} de ${snapCount}`}
                  aria-current={current === i ? "true" : undefined}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    current === i ? "bg-primary" : "bg-muted-foreground/35 hover:bg-muted-foreground/60",
                  )}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </nav>
          )}
        </div>
      </div>

      <Dialog open={zoomOpen} onOpenChange={(open) => !open && setZoomIndex(null)}>
        <DialogPortal>
          <DialogOverlay className="z-[100] bg-black/92" />
          <DialogPrimitive.Content
            className={cn(
              "pointer-events-none fixed inset-0 z-[100] flex flex-col border-0 bg-transparent p-0 shadow-none outline-none",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200",
            )}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DialogTitle className="sr-only">Imagem ampliada da galeria</DialogTitle>
            <DialogDescription className="sr-only">
              Use as setas para navegar entre as fotos ou Esc para sair da visualização ampliada.
            </DialogDescription>

            <div className="pointer-events-none relative flex min-h-0 flex-1 items-center justify-center px-12 py-4 md:px-20 md:py-6">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Foto anterior"
                disabled={zoomIndex === null || zoomIndex <= 0}
                className="pointer-events-auto absolute left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-35 md:left-6 md:h-12 md:w-12"
                onClick={goZoomPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="pointer-events-auto relative inline-flex max-h-[min(82vh,calc(100dvh-8rem))] max-w-[min(96vw,calc(100vw-7rem))] items-center justify-center">
                {zoomIndex !== null && galleryImageItems[zoomIndex] && (
                  <>
                    <DialogPrimitive.Close asChild>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-2 z-20 h-9 w-9 border-primary bg-black/50 text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground md:left-3 md:top-3 md:h-10 md:w-10"
                        aria-label="Fechar galeria ampliada"
                      >
                        <X className="h-4 w-4 md:h-5 md:w-5" />
                      </Button>
                    </DialogPrimitive.Close>
                    <img
                      src={galleryImageItems[zoomIndex].src}
                      alt={galleryImageItems[zoomIndex].alt}
                      className="max-h-[min(82vh,calc(100dvh-8rem))] max-w-full object-contain shadow-2xl"
                      decoding="async"
                    />
                  </>
                )}
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Próxima foto"
                disabled={zoomIndex === null || zoomIndex >= total - 1}
                className="pointer-events-auto absolute right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-35 md:right-6 md:h-12 md:w-12"
                onClick={goZoomNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="pointer-events-auto shrink-0 border-t border-white/10 bg-black/40 px-4 py-3 md:py-4">
              <p className="text-center font-body text-xs text-white/75 md:text-sm">
                Use setas para navegar ou Esc para sair
              </p>
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </section>
  );
};

export default GallerySection;
