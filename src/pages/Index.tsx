import { useState, useMemo } from "react";
import NewsHeader from "@/components/news/NewsHeader";
import BreakingTicker from "@/components/news/BreakingTicker";
import CategoryTabs from "@/components/news/CategoryTabs";
import HeroSection from "@/components/news/HeroSection";
import ArticleCard from "@/components/news/ArticleCard";
import TrendingSidebar from "@/components/news/TrendingSidebar";
import BottomNav from "@/components/news/BottomNav";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { articles, type Category } from "@/data/newsData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const containerRef = useScrollReveal();

  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const featured = filtered.find((a) => a.isFeatured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);
  const heroSecondary = rest.slice(0, 3);
  const remaining = rest.slice(3);

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <NewsHeader />
      <BreakingTicker />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <main ref={containerRef} className="container mt-6">
        <div className="lg:flex lg:gap-8">
          {/* Main column */}
          <div className="lg:flex-1">
            {featured && <HeroSection featured={featured} secondary={heroSecondary} />}

            <div className="mt-6">
              <h2 className="scroll-reveal font-heading text-lg font-bold text-foreground mb-1">
                Latest Stories
              </h2>
              {remaining.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
              {remaining.length === 0 && filtered.length <= 4 && (
                <p className="text-sm text-muted-foreground py-8 text-center">
                  No more stories in this category right now.
                </p>
              )}
            </div>
          </div>

          {/* Sidebar — desktop only */}
          <div className="hidden lg:block lg:w-72 lg:flex-shrink-0 mt-0">
            <div className="sticky top-20">
              <TrendingSidebar />
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
