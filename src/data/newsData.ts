import heroImg from "@/assets/hero-news.jpg";
import techImg from "@/assets/news-tech.jpg";
import sportsImg from "@/assets/news-sports.jpg";
import businessImg from "@/assets/news-business.jpg";
import healthImg from "@/assets/news-health.jpg";
import autoImg from "@/assets/news-auto.jpg";

export type Category = "All" | "Technology" | "Sports" | "Business" | "Health" | "Auto";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  author: string;
  timeAgo: string;
  readTime: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
}

export const categories: Category[] = ["All", "Technology", "Sports", "Business", "Health", "Auto"];

export const articles: Article[] = [
  {
    id: "1",
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    excerpt: "World leaders have agreed to a landmark deal that sets ambitious targets for reducing carbon emissions by 2035, marking a turning point in international climate policy.",
    category: "Business",
    image: heroImg,
    author: "Sarah Mitchell",
    timeAgo: "23 min ago",
    readTime: "6 min read",
    isBreaking: true,
    isFeatured: true,
  },
  {
    id: "2",
    title: "AI Startups Raise Record $14.7B in Q1 as Investors Bet on Enterprise Adoption",
    excerpt: "Venture capital flowing into artificial intelligence companies has reached unprecedented levels, with enterprise-focused startups leading the charge.",
    category: "Technology",
    image: techImg,
    author: "David Chen",
    timeAgo: "1 hr ago",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Champions League Quarterfinals Deliver Stunning Upsets Across Europe",
    excerpt: "Underdog teams across the continent pulled off remarkable victories as the Champions League quarterfinal round produced drama at every venue.",
    category: "Sports",
    image: sportsImg,
    author: "Marco Rossi",
    timeAgo: "2 hrs ago",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Federal Reserve Signals Possible Rate Cut Amid Softening Employment Data",
    excerpt: "Markets rallied after the Fed Chair suggested that cooling labor figures could warrant a policy shift in the coming months.",
    category: "Business",
    image: businessImg,
    author: "Elena Park",
    timeAgo: "3 hrs ago",
    readTime: "3 min read",
  },
  {
    id: "5",
    title: "New Study Links Mediterranean Diet to 38% Lower Risk of Cognitive Decline",
    excerpt: "Researchers at Johns Hopkins publish decade-long findings showing significant brain health benefits from plant-rich eating patterns.",
    category: "Health",
    image: healthImg,
    author: "Dr. Amara Osei",
    timeAgo: "4 hrs ago",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "EV Sales Surge 42% as Charging Infrastructure Finally Catches Up",
    excerpt: "The electric vehicle tipping point may have arrived as new data shows rapid expansion of fast-charging networks is boosting consumer confidence.",
    category: "Auto",
    image: autoImg,
    author: "James Kowalski",
    timeAgo: "5 hrs ago",
    readTime: "4 min read",
  },
];

export const breakingHeadlines = [
  "Global Climate Summit Reaches Historic Agreement",
  "AI Investment Hits Record $14.7B in Q1",
  "Champions League Upsets Shake Tournament",
  "Fed Signals Possible Rate Cut",
];

export const trendingTopics = [
  { label: "Climate Summit", count: "12.4K" },
  { label: "AI Funding", count: "8.2K" },
  { label: "Champions League", count: "6.7K" },
  { label: "Fed Rate Decision", count: "5.1K" },
  { label: "Mediterranean Diet", count: "3.8K" },
];
