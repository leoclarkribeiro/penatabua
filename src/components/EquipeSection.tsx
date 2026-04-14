import { Clapperboard, Building2 } from "lucide-react";

const EquipeSection = () => {
  return (
    <section id="equipe" className="py-20 md:py-28 border-t border-border/60">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 text-center">
            Créditos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10 text-center">
            <span className="text-gradient-gold">Equipe</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-5 bg-card border border-border rounded-sm">
              <Clapperboard className="text-primary flex-shrink-0" size={20} />
              <p className="font-body text-foreground/80">
                <span className="text-primary font-medium">Direção:</span> Leo Clark
              </p>
            </div>

            <div className="flex items-start gap-3 p-5 bg-card border border-border rounded-sm">
              <Building2 className="text-primary flex-shrink-0" size={20} />
              <div className="font-body text-foreground/80">
                <p>
                  <span className="text-primary font-medium">Produção executiva:</span> Gullane Entretenimento
                </p>
                <a
                  href="https://www.gullane.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-80 transition-opacity inline-block mt-1"
                >
                  https://www.gullane.com.br/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
