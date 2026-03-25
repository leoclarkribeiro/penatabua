const VideoSection = () => {
  return (
    <section id="video" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Assista
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Trailer <span className="text-gradient-gold">Temporário</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-sm border border-border aspect-[1041/702] bg-black">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              width={1041}
              height={702}
              src="https://www.youtube.com/embed/xN0klmIzx0o"
              title="Trailer Pé na Tábua - Versão provisória 2012"
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
