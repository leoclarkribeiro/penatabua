import { Film, Clapperboard, Palette, Trophy } from "lucide-react";

const approaches = [
  {
    icon: Film,
    text: "30 anos de arquivo: do VHS granulado do 1º Campeonato Brasileiro (1995) ao 4K das Olimpíadas de Milão 2026",
  },
  {
    icon: Clapperboard,
    text: "Entrevistas íntimas: Isabel, Augustinho, a diáspora, os fundadores",
  },
  {
    icon: Palette,
    text: "O filme abre com uma criança deslizando de meias pelo corredor — e uma voz querendo voar",
  },
  {
    icon: Trophy,
    text: "Tom: poético, quente, visual — na tradição de My Octopus Teacher, Free Solo e Manda Bala",
  },
];

const comparables = [
  { title: "My Octopus Teacher", year: "2020", desc: "Jornada pessoal + obsessão + revelação emocional — Oscar de Melhor Documentário" },
  { title: "Free Solo", year: "2018", desc: "Obsessão física + sonho impossível + custo humano — Oscar de Melhor Documentário" },
  { title: "Pelé", year: "2021", desc: "Ícone esportivo brasileiro, alcance global, orgulho cultural — Netflix Original" },
  { title: "Icarus", year: "2017", desc: "A jornada de uma pessoa que abre uma história muito maior — Netflix, vencedor do Oscar" },
];

const CinematicSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Visão
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Abordagem <span className="text-gradient-gold">Cinematográfica</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {approaches.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-background border border-border rounded-sm">
                <item.icon className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="font-body text-foreground/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Referências
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Títulos <span className="text-gradient-gold">Comparáveis</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparables.map((comp) => (
              <div key={comp.title} className="p-6 bg-background border border-border rounded-sm">
                <div className="flex items-baseline gap-3 mb-2">
                  <h4 className="font-display text-xl text-foreground normal-case">{comp.title}</h4>
                  <span className="font-body text-sm text-primary">({comp.year})</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
