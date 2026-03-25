const characters = [
  {
    name: "Isabel Clark",
    subtitle: "A Vida Vivida por Inteiro",
    description:
      "Quatro Jogos Olímpicos. O melhor resultado olímpico de inverno da América do Sul — 9º lugar em Turim 2006, recorde que permanece 20 anos depois. A única dos cinco irmãos Clark sem filhos. Hoje vive em Aspen como instrutora — e ganha mais ensinando ski do que snowboard. A rebelde que virou professora do esporte rival. Sua história é a espinha dorsal emocional do filme.",
  },
  {
    name: "Augustinho Teixeira",
    subtitle: "Nascido no Fim do Mundo",
    description:
      "Sua primeira experiência de deslize foi nas dunas de areia do Ceará, com 2 anos. Nascido em Ushuaia, filho de mãe brasileira e pai argentino, começou a esquiar em um glaciar aos 3 anos. Mudou-se para Calgary ainda criança. Virou mecânico de automóveis para sobreviver. Aos 21, tentou um doublecork 1440 — quatro rotações — no halfpipe olímpico de Milão.",
  },
  {
    name: "A Diáspora",
    subtitle: "Brasileiros que Nunca Voltaram",
    description:
      "Centenas de brasileiros foram trabalhar uma temporada em uma estação de ski e ficaram para sempre. Casaram na montanha. Abriram negócios. Criaram filhos que nunca viveram no Brasil. Escolheram uma sensação no lugar de um país.",
  },
  {
    name: "CBDN",
    subtitle: "A Instituição que Construiu uma Nação",
    description:
      "A confederação brasileira de esportes de neve não tem montanhas — mas organiza competições internacionais em todo o continente. Quando a FIS precisa de um delegado técnico no Chile ou na Argentina, chama um brasileiro. Do sonho de um fundador à Casa Brasileira nos Jogos de Milão: 30 anos de soft power brasileiro.",
  },
];

const CharactersSection = () => {
  return (
    <section id="personagens" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Personagens
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Os <span className="text-gradient-gold">Protagonistas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="p-8 border border-primary/20 rounded-sm bg-card/50">
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 normal-case">
              O Coração do Filme
            </h3>
            <p className="font-body text-foreground/70 text-lg leading-relaxed mb-4">
              Cada personagem deste filme abriu mão de algo enorme pela mesma coisa: a sensação de 
              deslizar na neve. Surfistas que viraram gente de montanha. Trabalhadores que viraram 
              moradores. Uma campeã que virou professora do esporte rival.
            </p>
            <p className="font-body text-primary text-xl italic font-medium">
              O que você abriria mão para sentir que está voando?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
