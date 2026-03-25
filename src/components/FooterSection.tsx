import { Mail, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="font-body text-foreground/70 text-lg mb-8 max-w-md">
              Interested in sponsoring, screening, or collaborating? We'd love to hear from you.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:contact@penatabua.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-4">
              Pé na Tabua
            </p>
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pé na Tabua. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
