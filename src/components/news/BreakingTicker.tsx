import { breakingHeadlines } from "@/data/newsData";
import { Zap } from "lucide-react";

const BreakingTicker = () => {
  const doubled = [...breakingHeadlines, ...breakingHeadlines];

  return (
    <div className="bg-news-breaking-bg border-b border-border overflow-hidden">
      <div className="container flex items-center h-9">
        <span className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest rounded mr-3">
          <Zap className="w-3 h-3" />
          Live
        </span>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-ticker whitespace-nowrap">
            {doubled.map((headline, i) => (
              <span key={i} className="text-xs font-medium text-foreground mx-6">
                {headline}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;
