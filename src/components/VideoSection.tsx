const VideoSection = () => {
  return (
    <section id="video" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Assista
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Trailer <span className="text-gradient-gold">Oficial</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm mt-3">
            Versão provisória
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-sm border border-border aspect-[891/668] bg-black">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              width={891}
              height={668}
              src="https://www.youtube.com/embed/sxkvWd1aXxE"
              title="Trailer Pé na Tábua - Versão provisória"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
