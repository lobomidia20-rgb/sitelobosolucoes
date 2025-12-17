import { Users, Award, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const AboutHistory = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Toggle visibility based on whether element is in viewport
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="inline-block">
                            <span className="text-sm font-medium text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                                Nossa força vem da dedicação
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Mais de <span className="text-primary">10 anos</span> transformando energia solar em economia e sustentabilidade
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Fundada em Gandu - BA, a Lobo Soluções nasceu com o propósito de democratizar o acesso à energia solar fotovoltaica. Hoje, com mais de uma década de experiência, seguimos fortalecendo residências e empresas com soluções completas de alta qualidade, práticas sustentáveis e compromisso com nossos clientes.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className={`flex items-start gap-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">+500 Clientes</h3>
                                    <p className="text-sm text-muted-foreground">Satisfeitos em toda região</p>
                                </div>
                            </div>

                            <div className={`flex items-start gap-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Excelência</h3>
                                    <p className="text-sm text-muted-foreground">Qualidade comprovada</p>
                                </div>
                            </div>

                            <div className={`flex items-start gap-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Leaf className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Sustentabilidade</h3>
                                    <p className="text-sm text-muted-foreground">Energia limpa e renovável</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Images - Team Photos */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                {/* Foto Individual */}
                                <img
                                    src="/foto-individual.png"
                                    alt="Membro da equipe Lobo Soluções"
                                    className="w-full h-64 object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
                                />

                                {/* Foto Equipe Rua (já salva anteriormente) */}
                                <img
                                    src="/equipe-lobo.jpg"
                                    alt="Equipe Lobo Soluções"
                                    className="w-full h-48 object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="pt-8">
                                {/* Foto Equipe Escritório */}
                                <img
                                    src="/equipe-escritorio.jpg"
                                    alt="Equipe Lobo Soluções no escritório"
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg border border-border hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-glow blur-3xl opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    );
};
