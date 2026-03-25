import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Watch
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Official <span className="text-gradient-gold">Trailer</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-card rounded-sm overflow-hidden group cursor-pointer border border-border">
            {/* Placeholder for YouTube embed — replace src with your video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Play className="text-primary group-hover:text-primary-foreground transition-colors ml-1" size={32} />
                </div>
                <p className="font-body text-muted-foreground text-sm">
                  Trailer coming soon
                </p>
              </div>
            </div>
          </div>

          <p className="text-center font-body text-muted-foreground mt-6 text-sm">
            Subscribe to be notified when the official trailer drops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
