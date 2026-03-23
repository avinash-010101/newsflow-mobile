import type { Article } from "@/data/newsData";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <article
      className="scroll-reveal active-press cursor-pointer group flex gap-3 py-4 border-b border-news-divider last:border-0"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
          {article.category}
        </span>
        <h3 className="font-heading text-[15px] font-semibold leading-snug mt-0.5 text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-3">
          {article.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-[11px] text-muted-foreground">
          <span className="font-medium">{article.author}</span>
          <span>·</span>
          <span>{article.timeAgo}</span>
          <span className="flex items-center gap-0.5">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default ArticleCard;
