import { useEffect, useState } from "react";
import { Users, MapPin, Zap, Briefcase } from "lucide-react";

interface StatItem {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  color: string;
  display?: string;
}

const stats: StatItem[] = [
  { icon: Users, value: 5000, suffix: "", label: "Clientes Satisfeitos", color: "text-primary", display: "5 mil" },
  { icon: MapPin, value: 200, suffix: "", label: "Cidades Atendidas", color: "text-secondary" },
  { icon: Zap, value: 40000, suffix: "+", label: "Placas Instaladas", color: "text-primary-glow" },
  { icon: Briefcase, value: 100, suffix: "", label: "Colaboradores", color: "text-secondary" },
];

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString('pt-BR')}</span>;
};

export const StatsSection = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzVGRkJGMSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que <span className="bg-gradient-primary bg-clip-text text-transparent">Impressionam</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformando o mercado através da energia solar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />
              
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 p-4 rounded-full bg-background ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                  {stat.display ? <span>{stat.display}</span> : <CountUp end={stat.value} />}
                  {stat.suffix}
                </div>
                
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
