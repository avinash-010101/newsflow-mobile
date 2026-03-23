import { useParams, useNavigate } from "react-router-dom";
import { articles } from "@/data/newsData";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { useEffect } from "react";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Article not found.</p>
          <button onClick={() => navigate("/")} className="text-primary font-medium">
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-12">
          <button
            onClick={() => navigate(-1)}
            className="active-press flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            {article.category}
          </span>
          <button className="active-press p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      <article className="container max-w-2xl py-6 pb-16">
        {/* Badge */}
        {article.isBreaking && (
          <span className="inline-block px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded mb-4">
            Breaking
          </span>
        )}

        {/* Title */}
        <h1 className="font-heading text-2xl sm:text-3xl font-bold leading-[1.15] text-foreground">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{article.author}</span>
          <span>·</span>
          <span>{article.timeAgo}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        {/* Hero image */}
        <div className="mt-6 rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[16/10] object-cover"
          />
        </div>

        {/* Body */}
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/90">
          <p>{article.excerpt}</p>
          <p>
            The implications of this development are far-reaching, with experts across the field weighing in on what it means for the months ahead. Industry analysts have pointed to several converging factors that made this moment particularly significant.
          </p>
          <p>
            "This is a watershed moment," said Dr. Rebecca Torres, a senior fellow at the Brookings Institution. "We're seeing the kind of shift that only happens once in a generation, and the ripple effects will be felt for years to come."
          </p>
          <p>
            Stakeholders on all sides have expressed cautious optimism, though challenges remain. Funding, political will, and public engagement will all play critical roles in determining whether the momentum can be sustained.
          </p>
          <p>
            As the story continues to develop, our team will be providing ongoing coverage and analysis. Stay tuned for updates throughout the week.
          </p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-10 pt-8 border-t border-news-divider">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4">More in {article.category}</h2>
            <div className="space-y-0">
              {related.map((r) => (
                <button
                  key={r.id}
                  onClick={() => navigate(`/article/${r.id}`)}
                  className="active-press w-full text-left flex gap-3 py-4 border-b border-news-divider last:border-0 group"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-[15px] font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {r.title}
                    </h3>
                    <span className="text-[11px] text-muted-foreground mt-1 block">{r.timeAgo}</span>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default ArticlePage;
