import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Story {
  id: number;
  type: "depoimento" | "instalacao" | "bastidores";
  title: string;
  videoUrl: string;
}

const stories: Story[] = [
  { 
    id: 1, 
    type: "instalacao", 
    title: "INSTALACAO EM SANTO ANTIONIO", 
    videoUrl: "https://www.youtube-nocookie.com/embed/mjRDBoZHTm8?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0" 
  },
  { 
    id: 2, 
    type: "instalacao", 
    title: "INSTALACAO EM ITUBERA", 
    videoUrl: "https://www.youtube-nocookie.com/embed/T8z_AKt6TeM?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0" 
  },
  { 
    id: 3, 
    type: "instalacao", 
    title: "INSTALACAO EM JEQUIE", 
    videoUrl: "https://www.youtube-nocookie.com/embed/wkhxEvVjjRM?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0" 
  },
  { 
    id: 4, 
    type: "instalacao", 
    title: "INSTALACAO EM IBIRATAIA", 
    videoUrl: "https://www.youtube-nocookie.com/embed/_VGp-_oSrhQ?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0" 
  },
  { 
    id: 5, 
    type: "instalacao", 
    title: "INSTALACAO EM GANDU, TEOTONIO CALHEIRA", 
    videoUrl: "https://www.youtube-nocookie.com/embed/_VGp-_oSrhQ?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0" 
  },
  { 
    id: 6, 
    type: "depoimento", 
    title: "A Melhor do Mercado", 
    videoUrl: "https://www.youtube-nocookie.com/embed/nlDbTrruRDQ?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0" 
  },
  {
    id: 7,
    type: "instalacao",
    title: "INSTALACAO EM WG",
    videoUrl: "https://www.youtube-nocookie.com/embed/d6fOQ8WgT2k?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0"
  },
  {
    id: 8,
    type: "depoimento",
    title: "DEPOIMENTO - VENDEDOR SAVIO",
    videoUrl: "https://www.youtube-nocookie.com/embed/IBRvWpgcPqo?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0"
  },
  
];

const sortedStories = [...stories].sort((a, b) => b.id - a.id);
const uniqueStories = sortedStories.filter(
  (story, index, arr) => arr.findIndex(s => s.videoUrl === story.videoUrl) === index
);

const categoryLabels = {
  depoimento: "Depoimentos",
  instalacao: "Instalações",
  bastidores: "Bastidores",
};

interface VideoPlayerProps {
  story: Story;
}

const VideoPlayer = ({ story }: VideoPlayerProps) => {
  const src = `${story.videoUrl}&playsinline=1`;
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-muted border border-border shadow-sm">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={src}
          title={story.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="px-1 pt-3">
        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-2 inline-block border border-primary/20">
          {categoryLabels[story.type]}
        </span>
        <h3 className="text-foreground font-semibold text-sm leading-snug">{story.title}</h3>
      </div>
    </div>
  );
};

export const StoriesCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState<Story["type"] | "all">("all");

  const filteredStories = selectedCategory === "all" 
    ? uniqueStories 
    : uniqueStories.filter(s => s.type === selectedCategory);

  return (
    <section id="projetos" className="py-20 px-6 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjNUZGQkYxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwTDQwIDBIMjBMMCwyMFoiLz48L2c+PC9zdmc+')] " />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias de <span className="bg-gradient-primary bg-clip-text text-transparent">Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Confira depoimentos, instalações e os bastidores da Lobo
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => { setSelectedCategory("all"); }}
              className="rounded-full"
            >
              Todos
            </Button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => { setSelectedCategory(key as Story["type"]); }}
                className="rounded-full"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="group relative"
              >
                <VideoPlayer story={story} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
