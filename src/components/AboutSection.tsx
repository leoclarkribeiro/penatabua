import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img
          src={aboutBg}
          alt="Brazilian mountains meeting snow"
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
            About the Film
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            From tropical heat<br />
            <span className="text-gradient-gold">to frozen peaks</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              "Pé na Tabua" explores the remarkable journey of Brazilian snowboarders who defy geography, 
              climate, and expectations to pursue their passion on the world's slopes. Born in a country 
              known for beaches and samba, these athletes have carved their own path — literally.
            </p>
            <p className="font-body text-foreground/70 text-lg leading-relaxed">
              This documentary follows their stories from the first time they saw snow to competing 
              on the international stage. It's a story of resilience, identity, and the universal 
              language of sport that transcends borders and defies stereotypes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { value: "90", label: "Minutes" },
              { value: "5", label: "Countries" },
              { value: "12", label: "Athletes" },
              { value: "3", label: "Years in Production" },
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
