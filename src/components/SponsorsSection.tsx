import { Award, Sparkles, Users } from "lucide-react";

const brandValues = [
  "Espírito pioneiro",
  "Expansão internacional",
  "Inovação",
  "Performance",
  "Juventude",
  "Mobilidade global",
];

const projectPotential = [
  "Exibição em festivais nacionais e internacionais",
  "Distribuição em streaming",
  "Exibição em canais esportivos, culturais e nas estações de neve do mundo inteiro",
  "Conteúdo para redes sociais",
];

const partners = [
  {
    name: "CBDN",
    desc: "Confederação Brasileira de Desportos na Neve",
  },
  {
    name: "COB",
    desc: "Comitê Olímpico do Brasil",
  },
  {
    name: "Osklen",
    desc: "Primeira marca de luxo global brasileira",
  },
];

const SponsorsSection = () => {
  return (
    <section id="parceiros" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 text-center">
            Marcas
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
            Oportunidade para <span className="text-gradient-gold">marcas</span>
          </h2>
          <p className="font-body text-foreground/70 text-lg text-center leading-relaxed mb-10">
            Pé na Tábua dialoga com valores centrais de grandes empresas brasileiras. O snowboard conecta
            surf, skate, música, moda e viagem.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {brandValues.map((v) => (
              <div
                key={v}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-sm"
              >
                <Sparkles className="text-primary flex-shrink-0" size={18} />
                <p className="font-body text-foreground/80">{v}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4 text-center">
            Potencial
          </p>
          <p className="font-body text-foreground/80 text-center mb-6">
            Este é um projeto com potencial de:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {projectPotential.map((text) => (
              <div key={text} className="flex items-start gap-3 p-5 bg-card border border-border rounded-sm">
                <Award className="text-primary mt-0.5 flex-shrink-0" size={20} />
                <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-20 p-8 md:p-10 border border-primary/20 rounded-sm bg-card/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-primary" size={22} />
            <p className="font-body text-sm tracking-[0.3em] text-primary uppercase">
              Público-alvo do documentário
            </p>
          </div>
          <p className="font-body text-foreground/80 text-lg leading-relaxed text-center">
            Brasileiros entre 20 e 50 anos, com orçamento para viagens internacionais, apaixonados por
            estilo de vida ativo e aventura. Famílias que viajam ao exterior pelo menos uma vez por ano.
            Jovens que buscam referências além do futebol. Conectados e abertos a novas experiências.
          </p>
        </div>

        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Apoio confirmado
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Parceiros <span className="text-gradient-gold">oficiais</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-sm bg-card border border-border hover:border-primary/30 transition-colors text-center"
            >
              <h3 className="font-display text-xl text-primary mb-2 normal-case">{p.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;
