import { Snowflake } from "lucide-react";

const reasons = [
  "Primeiro ouro olímpico de inverno do Brasil e da América do Sul (2026).",
  "Crescimento recorde do turismo brasileiro para destinos de neve.",
  "Nova geração de atletas competindo em alto nível internacional.",
  "Consolidação do Brasil como principal público latino nas estações do Chile, da Argentina, dos EUA e da Europa.",
  "Crescimento de 37% no turismo internacional em 2025.",
  "70%+ de ocupação brasileira nas estações de ski no Chile.",
  "Interesse em esportes de neve está crescendo 10–15% ao ano no Brasil.",
];

const WhyNowSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 text-center">
            2026
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 text-center">
            Por que esse filme importa <span className="text-gradient-gold">agora</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg text-center mb-12 max-w-2xl mx-auto">
            2026 marca um divisor de águas. O Brasil deixou de ser apenas espectador. Passou a ser protagonista.
          </p>

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
