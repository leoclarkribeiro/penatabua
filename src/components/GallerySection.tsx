import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  useEffect(() => {
    if (!zoomOpen || zoomIndex === null) return;
    const el = dotRefs.current[zoomIndex];
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [zoomOpen, zoomIndex]);

  const handleDotClick = (i: number) => {
    if (zoomIndex === i) {
      setZoomIndex(null);
    } else {
      setZoomIndex(i);
    }
  };

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
          </Carousel>

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
              Setas esquerda e direita para navegar entre fotos. Clique no ponto da foto atual ou pressione
              Esc para sair. Clique em outro ponto para ir àquela foto.
            </DialogDescription>

            <div className="pointer-events-auto flex justify-end p-3 md:p-4">
              <DialogPrimitive.Close asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Fechar galeria ampliada"
                >
                  <X className="h-5 w-5" />
                </Button>
              </DialogPrimitive.Close>
            </div>

            <div className="pointer-events-none flex min-h-0 flex-1 items-center justify-center px-12 py-2 md:px-20">
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

              <div className="pointer-events-auto flex max-h-[min(82vh,calc(100dvh-10rem))] max-w-[min(96vw,calc(100vw-7rem))] items-center justify-center">
                {zoomIndex !== null && galleryImageItems[zoomIndex] && (
                  <img
                    src={galleryImageItems[zoomIndex].src}
                    alt={galleryImageItems[zoomIndex].alt}
                    className="max-h-[min(82vh,calc(100dvh-10rem))] max-w-full object-contain shadow-2xl"
                    decoding="async"
                  />
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

            <nav
              className="pointer-events-auto max-h-[30vh] shrink-0 border-t border-white/10 bg-black/40 px-2 py-3 md:py-4"
              aria-label="Fotos da galeria ampliada"
            >
              <p className="mb-2 text-center font-body text-xs text-white/60 md:text-sm">
                Clique no ponto <span className="text-primary">ativo</span> para sair, ou em outro ponto para
                ir à foto · <kbd className="rounded border border-white/20 px-1">Esc</kbd> fecha
              </p>
              <div className="mx-auto flex max-w-5xl gap-1.5 overflow-x-auto overflow-y-hidden py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {galleryImageItems.map((_, i) => (
                  <button
                    key={i}
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    type="button"
                    aria-label={
                      zoomIndex === i
                        ? `Foto ${i + 1} de ${total} (clique para fechar)`
                        : `Ir para foto ${i + 1} de ${total}`
                    }
                    aria-current={zoomIndex === i ? "true" : undefined}
                    className={cn(
                      "h-2.5 w-2.5 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      zoomIndex === i ? "bg-primary ring-2 ring-primary/50" : "bg-white/35 hover:bg-white/60",
                    )}
                    onClick={() => handleDotClick(i)}
                  />
                ))}
              </div>
            </nav>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </section>
  );
};

export default GallerySection;
