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
    title: "PM Modi Unveils ₹12 Lakh Crore Infrastructure Push at Viksit Bharat Summit",
    excerpt: "The Prime Minister announced a massive infrastructure development plan covering highways, railways, and smart cities, calling it the largest single investment in India's history.",
    category: "Business",
    image: heroImg,
    author: "Rajesh Sharma",
    timeAgo: "18 min ago",
    readTime: "6 min read",
    isBreaking: true,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Bengaluru's AI Boom: Indian Startups Raise Record $4.2B as Global Giants Set Up Labs",
    excerpt: "India's silicon capital is seeing an unprecedented surge in AI investment as homegrown startups and global tech majors race to build next-generation AI capabilities.",
    category: "Technology",
    image: techImg,
    author: "Priya Venkatesh",
    timeAgo: "42 min ago",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "IPL 2026: Kohli's Sensational Century Seals RCB's First-Ever Title Win",
    excerpt: "In a fairytale finish at the Narendra Modi Stadium, Virat Kohli smashed an unbeaten 113 off 58 balls to lead Royal Challengers Bengaluru to their maiden IPL trophy.",
    category: "Sports",
    image: sportsImg,
    author: "Vikram Singh",
    timeAgo: "1 hr ago",
    readTime: "5 min read",
    isBreaking: true,
  },
  {
    id: "4",
    title: "RBI Holds Repo Rate Steady at 6% Amid Global Uncertainty, Signals Easing Ahead",
    excerpt: "The Reserve Bank of India kept its benchmark rate unchanged for the third straight meeting but hinted at potential cuts if inflation stays within the 4% comfort zone.",
    category: "Business",
    image: businessImg,
    author: "Ananya Iyer",
    timeAgo: "2 hrs ago",
    readTime: "3 min read",
  },
  {
    id: "5",
    title: "Ayushman Bharat 2.0: Govt Expands Free Healthcare Cover to All Citizens Above 70",
    excerpt: "The expanded scheme will provide ₹5 lakh annual health cover to over 6 crore senior citizens, making India one of the largest universal healthcare providers in the world.",
    category: "Health",
    image: healthImg,
    author: "Dr. Meera Nair",
    timeAgo: "3 hrs ago",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "Tata-Airbus Defence Deal: India to Manufacture C-295 Military Aircraft in Vadodara",
    excerpt: "The first Made-in-India C-295 transport aircraft rolled out of the Tata Advanced Systems facility, marking a milestone in India's defence manufacturing ambitions.",
    category: "Auto",
    image: autoImg,
    author: "Arjun Kapoor",
    timeAgo: "4 hrs ago",
    readTime: "4 min read",
  },
];

export const breakingHeadlines = [
  "PM Modi Unveils ₹12 Lakh Crore Infrastructure Plan",
  "Kohli Century Seals RCB's Maiden IPL Title",
  "Bengaluru AI Startups Raise Record $4.2B",
  "RBI Holds Repo Rate, Hints at Future Cuts",
  "Sensex Crosses 85,000 for the First Time",
];

export const trendingTopics = [
  { label: "IPL 2026", count: "24.1K" },
  { label: "Viksit Bharat", count: "14.7K" },
  { label: "Bengaluru AI", count: "9.3K" },
  { label: "RBI Policy", count: "7.6K" },
  { label: "Ayushman Bharat", count: "5.2K" },
];
