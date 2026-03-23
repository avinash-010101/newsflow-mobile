import { trendingTopics } from "@/data/newsData";
import { TrendingUp } from "lucide-react";

const TrendingSidebar = () => {
  return (
    <aside className="scroll-reveal bg-card rounded-lg p-5 shadow-sm border border-border">
      <h3 className="flex items-center gap-2 font-heading text-base font-bold text-foreground mb-4">
        <TrendingUp className="w-4 h-4 text-primary" />
        Trending Now
      </h3>
      <ul className="space-y-3">
        {trendingTopics.map((topic, i) => (
          <li
            key={topic.label}
            className="flex items-center justify-between py-2 border-b border-news-divider last:border-0 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-muted-foreground w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {topic.label}
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground tabular-nums">
              {topic.count}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TrendingSidebar;
