import { Play } from "lucide-react";

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
          <div className="relative aspect-video bg-card rounded-sm overflow-hidden group cursor-pointer border border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Play className="text-primary group-hover:text-primary-foreground transition-colors ml-1" size={32} />
                </div>
                <p className="font-body text-muted-foreground text-sm">
                  Trailer em breve
                </p>
              </div>
            </div>
          </div>

          <p className="text-center font-body text-muted-foreground mt-6 text-sm">
            Inscreva-se para ser notificado quando o trailer oficial for lançado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
