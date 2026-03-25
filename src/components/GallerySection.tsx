import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Snowboarder with Brazilian flag reflection", w: 800, h: 1024, span: "row-span-2" },
  { src: gallery2, alt: "Snowboarder jumping against blue sky", w: 1024, h: 800, span: "" },
  { src: gallery3, alt: "Brazilian athletes celebrating on mountain top", w: 1024, h: 800, span: "" },
  { src: gallery4, alt: "Snowboard in snow at sunset", w: 800, h: 1024, span: "row-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Behind the <span className="text-gradient-gold">Scenes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={img.w}
                height={img.h}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

        <p className="text-center font-body text-muted-foreground mt-8 text-sm">
          More photos coming soon — stay tuned for exclusive behind-the-scenes content.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
