import { Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em <span className="text-gradient-gold">Contato</span>
            </h2>
            <p className="font-body text-foreground/70 text-lg mb-6 max-w-md">
              Interessado em patrocinar, exibir ou colaborar? Adoraríamos ouvir de você.
            </p>
            <div className="space-y-3 mb-6">
              <p className="font-body text-foreground/80">
                <span className="text-primary font-medium">Leo Clark</span> · Diretor
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://youtube.com/@LeoClarkPéNaTábua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
              Pé na Tábua
            </p>
            <p className="font-body text-foreground/60 italic mb-4">
              É a história de como um país tropical decidiu conquistar a neve e o fez.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pé na Tábua. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
