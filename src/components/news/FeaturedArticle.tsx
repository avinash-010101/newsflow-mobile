import type { Article } from "@/data/newsData";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(`/article/${article.id}`)} className="scroll-reveal active-press cursor-pointer group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={article.image}
          alt={article.title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {article.isBreaking && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded">
            Breaking
          </span>
        )}
      </div>
      <div className="mt-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
          {article.category}
        </span>
        <h2 className="font-heading text-xl font-bold leading-[1.2] mt-1 text-foreground group-hover:text-primary transition-colors duration-200">
          {article.title}
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{article.author}</span>
          <span>·</span>
          <span>{article.timeAgo}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
