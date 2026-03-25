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
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-sm border border-border aspect-video bg-black">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              width={640}
              height={360}
              src="https://player.vimeo.com/video/58459387?h=430f55d5f9"
              title="Trailer Temporário"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
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
