import { Snowflake } from "lucide-react";

const reasons = [
  "O Brasil conquistou seu primeiro ouro olímpico de inverno — uma primeira histórica para toda a América do Sul",
  "Crescimento de 37% no turismo internacional brasileiro em 2025, liderado por destinos de neve",
  "Mais de 70% das vagas em estações de ski no Chile são ocupadas por brasileiros. Aspen contrata instrutores brasileiros para atender a demanda em português",
  "Uma geração criada no surf e skate transformou os esportes de inverno. Essa história nunca foi contada nas telas",
];

const WhyNowSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 text-center">
            Timing
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-12 text-center">
            Por que <span className="text-gradient-gold">agora</span>
          </h2>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-background border border-border rounded-sm hover:border-primary/30 transition-colors"
              >
                <Snowflake className="text-primary mt-1 flex-shrink-0" size={20} />
                <p className="font-body text-foreground/80 text-lg leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
