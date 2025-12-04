import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logoLobo from "@/assets/logo-lobo-white.png";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logoLobo} alt="Lobo Soluções" className="h-12 mb-3" />
            <p className="text-muted-foreground text-sm mb-4">
              Transformando vidas através da energia solar há mais de 10 anos na Bahia.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/lobo.solucoes" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Gandu - Bahia</li>
              <li>
                <a href="mailto:adm.gestao@lobosolucoes.com.br" className="hover:text-primary transition-colors">
                  adm.gestao@lobosolucoes.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5573980641617" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (73) 98064-4161
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Atendemos toda a Bahia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 AB Lobo Engenharia & Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
