import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const videos = [
    {
        title: "MARIBEL - MOENDA",
        videoId: "imVXvWuAmjo",
    },
    {
        title: "SITIO - GANDU",
        videoId: "jyYEl8ALEwQ",
    },
    {
        title: "Frututi - PTN",
        videoId: "rpUry3AIgwo",
    },
    {
        title: "COOPATAN- PTN",
        videoId: "sicWkxET6jQ",
    },

];

interface VideoCardProps {
    title: string;
    videoId: string;
}

const VideoCard = ({ title, videoId }: VideoCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (isPlaying) {
        return (
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card shadow-lg animate-in fade-in duration-300">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <div
            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg border border-transparent hover:border-primary/50 transition-all duration-300"
            onClick={() => setIsPlaying(true)}
        >
            {/* Thumbnail Image */}
            <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Play className="w-8 h-8 text-white fill-white ml-1 opacity-90 group-hover:opacity-100" />
                </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-semibold text-lg drop-shadow-md line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {title}
                </h3>
                <div className="h-1 w-12 bg-primary mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
            </div>
        </div>
    );
};

export const GrandesInstalacoesCarousel = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useState<HTMLElement | null>(null)[0];

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

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

        const section = document.getElementById('grandes-instalacoes');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id="grandes-instalacoes" className="py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Grandes <span className="text-primary">Instalações</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Confira a excelência dos nossos maiores projetos em ação.
                    </p>
                </div>

                <div className={`flex flex-col items-center px-4 md:px-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-[95vw] md:max-w-6xl"
                    >
                        <CarouselContent className="-ml-4">
                            {videos.map((video, index) => (
                                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                                    <div className="p-1">
                                        <VideoCard title={video.title} videoId={video.videoId} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
                        <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-primary/20 hover:bg-primary/10 hover:text-primary" />
                    </Carousel>

                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                className={cn(
                                    "h-2 rounded-full transition-all duration-300",
                                    current === index + 1 ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                                )}
                                onClick={() => api?.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
