import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoLobo from "@/assets/logo-lobo-white.png";
import heroSolarBg from "@/assets/hero-solar-bg.jpg";

export const HeroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative min-h-[120vh] w-full overflow-hidden py-20">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroSolarBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow blur-3xl opacity-30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center pt-20 pb-20">
        <div className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Energia Solar em Gandu - BA</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            DEIXE O SOL PAGAR SUA CONTA
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Soluções completas em energia solar fotovoltaica com mais de 10 anos de experiência no mercado
          </p>
        </div>

        {/* Video Player */}
        <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-glow border border-primary/20">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/lZVmP2Ks8Ws?autoplay=1&mute=1&loop=1&playlist=lZVmP2Ks8Ws&controls=1&rel=0&modestbranding=1"
            title="Lobo Soluções - Energia Solar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="mt-8 gap-2 bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8"
          asChild
        >
          <a href="http://wa.me/+5573998064161" target="_blank" rel="noopener noreferrer">
            → QUERO FAZER UM ORÇAMENTO
          </a>
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          📍 Gandu - BA • +10 anos de experiência
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
