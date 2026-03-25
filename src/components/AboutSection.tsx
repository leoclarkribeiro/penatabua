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
            A História
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Do calor tropical<br />
            <span className="text-gradient-gold">aos picos nevados</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              Em 1995, um pequeno grupo de surfistas e skatistas brasileiros ousou tentar algo absurdo: 
              levar sua paixão pelo deslize para as montanhas do mundo. Embarcaram com pranchas e mochilas, 
              e apareceram em estações de neve onde ninguém os esperava.
            </p>
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              Trinta anos depois, os brasileiros são o maior grupo de visitantes estrangeiros em estações 
              do Colorado aos Alpes Suíços. Em 2026, o Brasil conquistou sua primeira medalha de ouro nos 
              Jogos Olímpicos de Inverno. Pé na Tábua é a história deles.
            </p>
          </div>

          <div className="mt-12 p-8 border border-border rounded-sm bg-card/50">
            <p className="font-body text-foreground/80 text-xl leading-relaxed italic text-center">
              "Não sobre esporte — sobre o que acontece quando uma cultura inteira se apaixona por uma 
              sensação e se recusa a deixar a geografia impedi-la."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { value: "90", label: "Minutos" },
              { value: "30", label: "Anos de História" },
              { value: "70%", label: "Vagas no Chile" },
              { value: "1º", label: "Ouro Olímpico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
