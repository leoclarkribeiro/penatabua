const characters = [
  {
    name: "Isabel Clark",
    subtitle: "Pioneira e ícone",
    description:
      "Quatro participações olímpicas (2006, 2010, 2014, 2018). O rosto do snowboard brasileiro por duas décadas.",
  },
  {
    name: "Lucas Pinheiro Braathen",
    subtitle: "Herói olímpico",
    description:
      "Ouro no giant slalom em Milão-Cortina 2026 — primeira medalha de inverno do Brasil e da América do Sul.",
  },
  {
    name: "Augustinho Teixeira",
    subtitle: "Nova geração",
    description:
      "Primeiro brasileiro a vencer uma etapa da Copa Continental (2025). Competidor no halfpipe em 2026.",
  },
  {
    name: "Oskar Metsavaht",
    subtitle: "Empresário e visionário",
    description:
      "Fundador da Osklen, pioneiro em trazer o estilo de vida de montanha ao Brasil.",
  },
  {
    name: "Stefano Arnhold",
    subtitle: "A voz institucional",
    description:
      "Ex-Presidente da CBDN. A voz institucional do esporte de neve no Brasil.",
  },
];

const CharactersSection = () => {
  return (
    <section id="personagens" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Os personagens
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Histórias <span className="text-gradient-gold">humanas</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg mt-6 max-w-2xl mx-auto">
            O documentário é construído em torno de histórias humanas reais. Atletas que abriram mão da
            estabilidade para perseguir um sonho na neve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {characters.map((char) => (
            <div
              key={char.name}
              className="p-8 bg-card border border-border rounded-sm hover:border-primary/30 transition-colors group"
            >
              <p className="font-body text-sm text-primary uppercase tracking-wider mb-2">
                {char.subtitle}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 normal-case">
                {char.name}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {char.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
