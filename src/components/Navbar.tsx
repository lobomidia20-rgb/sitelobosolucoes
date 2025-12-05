import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLobo from "@/assets/logo-lobo-white.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="/" className="flex items-center">
              <img src={logoLobo} alt="Lobo Soluções" className="h-16 md:h-20" />
            </a>
            <img
              src={import.meta.env.BASE_URL + "logo-slogan.png"}
              alt="Slogan Lobo Soluções"
              className="block h-40 md:h-48 object-contain max-w-[420px] md:max-w-[560px]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

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
