import { Home, Compass, Bookmark, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Discover" },
  { icon: Bookmark, label: "Saved" },
  { icon: User, label: "Profile" },
];

const BottomNav = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border lg:hidden">
      <div className="flex items-center justify-around h-16 px-4 pb-safe">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="active-press flex flex-col items-center gap-0.5 py-1 px-3 min-w-[4rem]"
          >
            <Icon
              className={`w-5 h-5 transition-colors duration-200 ${
                active === label ? "text-news-nav-active" : "text-news-nav-inactive"
              }`}
              strokeWidth={active === label ? 2.5 : 1.5}
            />
            <span
              className={`text-[10px] font-medium transition-colors duration-200 ${
                active === label ? "text-news-nav-active" : "text-news-nav-inactive"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
