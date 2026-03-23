import { useNavigate } from "react-router-dom";
import { useBookmarks } from "@/hooks/useBookmarks";
import { articles } from "@/data/newsData";
import ArticleCard from "@/components/news/ArticleCard";
import { ArrowLeft, BookmarkX } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SavedPage = () => {
  const navigate = useNavigate();
  const { bookmarkedIds } = useBookmarks();
  const containerRef = useScrollReveal();

  const saved = articles.filter((a) => bookmarkedIds.includes(a.id));

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-8">
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-12">
          <button
            onClick={() => navigate("/")}
            className="active-press flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <h1 className="font-heading text-sm font-bold text-foreground">Saved Articles</h1>
          <div className="w-8" />
        </div>
      </header>

      <main ref={containerRef} className="container max-w-2xl mt-6">
        {saved.length > 0 ? (
          saved.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <BookmarkX className="w-12 h-12 text-muted-foreground/40 mb-4" />
            <p className="font-heading text-lg font-semibold text-foreground">No saved articles yet</p>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">
              Tap the bookmark icon on any article to save it for later.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedPage;
