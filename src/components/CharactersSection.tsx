import { Link } from "react-router-dom";
import isabelPhoto from "@/assets/Isabel photo.jpg";
import lucasPhoto from "@/assets/Lucas photo.jpg";
import augustinhoPhoto from "@/assets/Augustinho photo.jpeg";
import vitoriaPhoto from "@/assets/Vitoria photo.jpeg";
import oskarPhoto from "@/assets/Oskar_Metsavaht photo.jpg";
import stefanoPhoto from "@/assets/Stefano_Arnhold photo.jpg";
import karinaPhoto from "@/assets/KarinaOliani photo.jpg";
import pauloBarrosPhoto from "@/assets/Paulo Barros photo.jpg";
import { cn } from "@/lib/utils";

type Character = {
  name: string;
  subtitle: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

const characters: Character[] = [
  {
    name: "Isabel Clark",
    subtitle: "Pioneira e ícone",
    description:
      "Quatro participações olímpicas (2006, 2010, 2014, 2018). O rosto do snowboard brasileiro por duas décadas.",
    image: isabelPhoto,
    imageAlt: "Isabel Clark, snowboarder brasileira",
  },
  {
    name: "Lucas Pinheiro Braathen",
    subtitle: "Herói olímpico",
    description:
      "Ouro no giant slalom em Milão-Cortina 2026 — primeira medalha de inverno do Brasil e da América do Sul.",
    image: lucasPhoto,
    imageAlt: "Lucas Pinheiro Braathen, esquiador brasileiro",
  },
  {
    name: "Augustinho Teixeira",
    subtitle: "Nova geração",
    description:
      "Primeiro brasileiro a vencer uma etapa da Copa Continental (2025). Competidor no halfpipe em 2026.",
    image: augustinhoPhoto,
    imageAlt: "Augustinho Teixeira, snowboarder brasileiro",
  },
  {
    name: "Vitória Machado",
    subtitle: "Jogos Paralímpicos",
    description:
      "Primeira mulher brasileira a competir no para-snowboard em Milão-Cortina 2026.",
    image: vitoriaPhoto,
    imageAlt: "Vitória Machado, para-snowboarder brasileira",
  },
  {
    name: "Oskar Metsavaht",
    subtitle: "Empresário e visionário",
    description:
      "Fundador da Osklen, pioneiro em trazer o estilo de vida de montanha ao Brasil.",
    image: oskarPhoto,
    imageAlt: "Oskar Metsavaht, empresário e fundador da Osklen",
  },
  {
    name: "Stefano Arnhold",
    subtitle: "O Brasil que deu certo",
    description:
      "Ex-Presidente da CBDN. O Brasil em posição de destaque na Federação Internacional de Ski.",
    image: stefanoPhoto,
    imageAlt: "Stefano Arnhold, ex-presidente da CBDN",
  },
  {
    name: "Karina Oliani",
    subtitle: "No topo do Everest",
    description:
      "Renomada médica brasileira, atleta de esportes extremos e apresentadora de TV premiada.",
    image: karinaPhoto,
    imageAlt: "Karina Oliani, médica, atleta de esportes extremos e apresentadora",
  },
  {
    name: "Paulo Barros",
    subtitle: "Neve na Sapucaí",
    description:
      "Em 2008, o carnavalesco da Unidos do Viradouro fez nevar no maior desfile de escola de samba do mundo.",
    image: pauloBarrosPhoto,
    imageAlt: "Paulo Barros, carnavalesco brasileiro",
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
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center">
            <p className="font-body text-lg text-foreground/70">
              O documentário é construído em torno de histórias humanas reais.
            </p>
            <p className="font-body text-lg text-foreground/70">
              Brasileiros que abriram mão da vida nos trópicos para perseguir um sonho na neve.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {characters.map((char) => (
            <div
              key={char.name}
              className={cn(
                "bg-card border border-border rounded-sm hover:border-primary/30 transition-colors group",
                char.image ? "p-8 md:p-10" : "p-8",
              )}
            >
              {char.image ? (
                <div className="flex flex-col items-center gap-6 md:gap-8">
                  <div className="shrink-0 w-full max-w-[13.5rem] md:max-w-[15rem] mx-auto">
                    <div className="overflow-hidden rounded-sm border border-border/70 bg-muted/20 aspect-[3/4]">
                      <img
                        src={char.image}
                        alt={char.imageAlt ?? char.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                        width={540}
                        height={720}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 text-center">
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
                </div>
              ) : (
                <>
                  <p className="font-body text-sm text-primary uppercase tracking-wider mb-2">
                    {char.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 normal-case">
                    {char.name}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{char.description}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center px-2">
          <Link
            to="/entrevistados"
            className="font-display max-w-xl border border-primary px-6 py-4 text-center text-sm leading-snug tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-10 sm:text-base"
          >
            Clique aqui e confira a lista completa dos entrevistados
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
