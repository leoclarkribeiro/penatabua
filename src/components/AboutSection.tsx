import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="historia" className="relative py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img
          src={aboutBg}
          alt="Montanhas brasileiras encontrando a neve"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </div>
      <div className="absolute inset-0 bg-background/95" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            A oportunidade
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Um momento <span className="text-gradient-gold">histórico</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg leading-relaxed mb-16 max-w-3xl">
            O Brasil vive um momento histórico no esporte de inverno. Em 2026, Lucas Pinheiro Braathen
            conquistou o primeiro ouro olímpico de inverno da história brasileira e da América do Sul
            inteira. Ao mesmo tempo, mais de 10 milhões de brasileiros viajaram ao exterior em 2025,
            muitos em busca de neve, e o interesse por esportes de inverno cresce entre 10% e 15% ao ano.
          </p>

          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Sobre o projeto
          </p>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            O <span className="text-gradient-gold">documentário</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              Pé na Tábua é o documentário que captura esse fenômeno: a história improvável de um país
              tropical que se tornou uma potência no snowboard. Da ousadia dos pioneiros nos anos 90 ao
              momento histórico em que o Brasil conquista sua primeira medalha olímpica.
            </p>
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              Mais do que um filme sobre esporte, é uma história sobre a visão, a identidade, a
              superação e a internacionalização do Brasil.
            </p>
          </div>

          <div className="mt-12 p-8 border border-border rounded-sm bg-card/50">
            <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 text-center">
              Narrativa
            </p>
            <p className="font-body text-foreground/80 text-lg leading-relaxed text-center mb-6">
              A história começa em 1995, no primeiro Campeonato Brasileiro de Snowboard, quando poucos
              acreditavam que o esporte pudesse crescer no país. Acompanhamos pioneiros que viajaram com
              mochilas e pranchas; atletas que bancaram o próprio sonho; a construção institucional via
              CBDN; o boom do turismo brasileiro na neve; uma estação de neve artificial em Gramado, RS; e
              a consagração olímpica de 2026.
            </p>
            <p className="font-body text-foreground/80 text-xl leading-relaxed italic text-center">
              O arco dramático é claro: de improvável à inevitável.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { value: "1º", label: "Ouro olímpico de inverno (Brasil e América do Sul)" },
              { value: "10M+", label: "Brasileiros no exterior em 2025" },
              { value: "70%+", label: "Ocupação brasileira no Chile" },
              { value: "10–15%", label: "Crescimento anual do interesse" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="font-body text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
