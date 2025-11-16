import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLobo from "@/assets/logo-lobo-white.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoLobo} alt="Lobo Soluções" className="h-12 md:h-14" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre Nós
            </a>
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
            <Button 
              size="sm" 
              className="shadow-glow"
              asChild
            >
              <a href="http://wa.me/+5573998064161" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
