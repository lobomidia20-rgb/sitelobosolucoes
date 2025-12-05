import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logoLobo from "@/assets/logo-lobo-white.png";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 64);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="/" className="flex items-center">
              <img src={logoLobo} alt="Lobo Soluções" className="h-12 md:h-14" />
            </a>
            <div className="hidden sm:block relative h-20 md:h-24 w-36 md:w-48 overflow-hidden rounded-lg ring-1 ring-yellow-400/20 bg-yellow-400/5 drop-shadow-[0_0_12px_rgba(255,215,0,0.35)]">
              <img
                src={import.meta.env.BASE_URL + "logo-slogan.png"}
                alt={"Slogan Lobo Soluções"}
                className={"w-full h-full object-cover"}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-transparent to-yellow-300/20" />
            </div>
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
