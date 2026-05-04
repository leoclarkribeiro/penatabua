import { useCallback, useEffect, useMemo, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
                    {group.map((img, i) => (
                      <div
                        key={`${pageIdx}-${img.src}-${i}`}
                        className="group relative aspect-[3/4] overflow-hidden rounded-sm md:aspect-[4/5]"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading={pageIdx === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/30" />
                      </div>
                    ))}
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
    </section>
  );
};

export default GallerySection;
