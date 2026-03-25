import { Award, Globe, Tv, Mountain } from "lucide-react";

const partners = [
  {
    name: "CBDN",
    desc: "Confederação Brasileira de Desportos na Neve — acesso institucional e acervo histórico completo",
  },
  {
    name: "FIS",
    desc: "Federação Internacional de Ski e Snowboard — apoio internacional confirmado",
  },
  {
    name: "Osklen",
    desc: "Primeira marca de luxo global brasileira — fundador é personagem central do filme",
  },
  {
    name: "Isabel Clark",
    desc: "Quatro vezes olímpica — participação confirmada",
  },
  {
    name: "Domingos Giobbi",
    desc: "Fundador da CBDN — entrevista exclusiva, primeira vez diante das câmeras",
  },
];

const distribution = [
  { icon: Tv, text: "Plataformas de streaming: Netflix, Prime Video, Apple TV+, Globoplay, Max" },
  { icon: Award, text: "Festivais: Sundance, SXSW, Hot Docs, É Tudo Verdade" },
  { icon: Globe, text: "Canais esportivos e culturais — programação temática de inverno" },
  { icon: Mountain, text: "Exibição em estações de neve onde 70%+ dos visitantes já são brasileiros" },
];

const SponsorsSection = () => {
  return (
    <section id="parceiros" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Confirmados
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Já a <span className="text-gradient-gold">Bordo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-sm bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-xl text-primary mb-2 normal-case">{p.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
            Alcance
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Potencial de <span className="text-gradient-gold">Distribuição</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {distribution.map((d, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm">
              <d.icon className="text-primary mt-1 flex-shrink-0" size={24} />
              <p className="font-body text-foreground/80 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contato"
            className="inline-block font-display text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Solicitar Proposta de Patrocínio
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
