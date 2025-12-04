import { Phone } from "lucide-react";
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

          <div className="hidden md:flex items-center">
            <Button size="sm" className="shadow-glow" asChild>
              <a href="http://wa.me/+5573998064161" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          <Button size="sm" className="md:hidden shadow-glow" asChild>
            <a href="https://wa.me/5573980641617" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
