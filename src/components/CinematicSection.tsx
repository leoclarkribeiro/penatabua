import { Film } from "lucide-react";

const whatYouWillSee = [
  "Imagens históricas desde o 1º Campeonato Brasileiro de Snowboard (1995) até as Olimpíadas de 2026.",
  "Depoimentos dos principais personagens: Isabel Clark (4 Olimpíadas), Lucas Pinheiro Braathen (ouro em 2026), Augustinho Teixeira (Copa Continental 2025), Oskar Metsavaht e outros.",
  "Depoimento inédito de Domingos Giobbi (fundador da CBDN).",
  "O crescimento e o domínio da CBDN e dos delegados técnicos brasileiros nos esportes de inverno na América do Sul.",
  "Osklen, a primeira marca de luxo global brasileira.",
  "A explosão do turismo de neve: brasileiros representam mais de 70% dos visitantes em algumas estações chilenas, no Colorado e nos Alpes europeus.",
  "Eventos de neve em São Paulo e no Rio e o Snowland em Gramado, RS.",
  "Programas de intercâmbio que revelam novos talentos, treinando em estações como Aspen, que mantém instrutores brasileiros devido à alta demanda por português entre turistas brasileiros.",
  "Snowboard vs. Ski - Parceiros ou rivais?",
  "O que leva alguém a querer surfar montanhas? Atividade Espiritual?",
  "E muito mais.",
];

const CinematicSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Imagens de arquivo
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              O que você vai <span className="text-gradient-gold">ver</span>
            </h2>
          </div>

          <div className="space-y-4">
            {whatYouWillSee.map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-background border border-border rounded-sm">
                <Film className="text-primary mt-1 flex-shrink-0" size={22} />
                <p className="font-body text-foreground/80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
