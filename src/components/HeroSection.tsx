import heroImage from "@/assets/Olimpiadas Torino 2006 008 NEW.jpg";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Jogos Olímpicos de Inverno, Torino 2006 — snowboard"
        className="absolute inset-0 w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute inset-0 bg-background/40" />

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-display text-lg tracking-widest text-foreground uppercase">
          Pé na Tábua
        </span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#historia" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">A História</a>
          <a href="#personagens" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Personagens</a>
          <a href="#gallery" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Galeria</a>
          <a href="#parceiros" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Parceiros</a>
          <a href="#contato" className="font-display text-sm tracking-wider px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            Contato
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="font-body text-sm md:text-base tracking-[0.3em] text-foreground/60 uppercase mb-4 animate-fade-in">
          Proposta de Patrocínio · Documentário · 2026
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-gold leading-none mb-6 animate-fade-in-up">
          Pé na Tábua
        </h1>
        <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          A história do snowboard no Brasil
        </p>
        <p className="font-body text-base md:text-lg text-foreground/50 max-w-xl mt-4 italic animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Em um país sem neve, nasceu uma geração que decidiu surfar montanhas pelo mundo e colocou o Brasil no mapa dos esportes de inverno.
        </p>
      </div>

      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/40 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
