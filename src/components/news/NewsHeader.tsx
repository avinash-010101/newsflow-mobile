import { Search, Bell, User } from "lucide-react";

const NewsHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-14">
        <h1 className="font-heading text-xl font-bold tracking-tight text-foreground">
          Pulse<span className="text-primary">.</span>
        </h1>
        <div className="flex items-center gap-1">
          <button className="active-press p-2.5 rounded-full hover:bg-secondary transition-colors duration-200">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="active-press p-2.5 rounded-full hover:bg-secondary transition-colors duration-200 relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </button>
          <button className="active-press p-2.5 rounded-full hover:bg-secondary transition-colors duration-200">
            <User className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NewsHeader;
