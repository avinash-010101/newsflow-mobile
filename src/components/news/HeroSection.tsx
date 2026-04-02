import type { Article } from "@/data/newsData";
import { Clock, Bookmark, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBookmarks } from "@/hooks/useBookmarks";

interface HeroSectionProps {
  featured: Article;
  secondary: Article[];
}

const HeroSection = ({ featured, secondary }: HeroSectionProps) => {
  const navigate = useNavigate();
  const { toggle, isBookmarked } = useBookmarks();

  const topSecondary = secondary.slice(0, 3);

  return (
    <section className="scroll-reveal">
      {/* Main hero — BBC-style split layout */}
      <div
        onClick={() => navigate(`/article/${featured.id}`)}
        className="active-press cursor-pointer group grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-0 bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        {/* Text side */}
        <div className="order-2 lg:order-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            {featured.isBreaking && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded animate-pulse">
                <Zap className="w-3 h-3" />
                Breaking
              </span>
            )}
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              {featured.category}
            </span>
          </div>

          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
            {featured.title}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed line-clamp-3">
            {featured.excerpt}
          </p>

          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{featured.author}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>{featured.timeAgo}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {featured.readTime}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); toggle(featured.id); }}
              className="ml-auto p-1.5 -m-1.5 text-muted-foreground hover:text-primary transition-colors"
              aria-label={isBookmarked(featured.id) ? "Remove bookmark" : "Save article"}
            >
              <Bookmark className={`w-4 h-4 transition-colors ${isBookmarked(featured.id) ? "fill-primary text-primary" : ""}`} />
            </button>
          </div>
        </div>

        {/* Image side */}
        <div className="order-1 lg:order-2 relative overflow-hidden">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-48 sm:h-56 lg:h-full lg:min-h-[340px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="eager"
          />
          {/* Gradient overlay on mobile for visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent lg:bg-none pointer-events-none" />
        </div>
      </div>

      {/* Secondary stories grid — BBC style cards below hero */}
      {topSecondary.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {topSecondary.map((article) => (
            <SecondaryCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

const SecondaryCard = ({ article }: { article: Article }) => {
  const navigate = useNavigate();
  const { toggle, isBookmarked } = useBookmarks();
  const saved = isBookmarked(article.id);

  return (
    <article
      onClick={() => navigate(`/article/${article.id}`)}
      className="active-press cursor-pointer group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-36 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {article.isBreaking && (
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest rounded">
            <Zap className="w-2.5 h-2.5" />
            Live
          </span>
        )}
      </div>
      <div className="p-3.5 flex flex-col flex-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
          {article.category}
        </span>
        <h3 className="font-heading text-sm sm:text-[15px] font-bold leading-snug mt-1 text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between mt-3 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>{article.timeAgo}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); toggle(article.id); }}
            className="p-1 -m-1 text-muted-foreground hover:text-primary transition-colors"
            aria-label={saved ? "Remove bookmark" : "Save article"}
          >
            <Bookmark className={`w-3.5 h-3.5 transition-colors ${saved ? "fill-primary text-primary" : ""}`} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
