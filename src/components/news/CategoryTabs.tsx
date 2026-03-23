import { categories, type Category } from "@/data/newsData";

interface CategoryTabsProps {
  active: Category;
  onChange: (cat: Category) => void;
}

const CategoryTabs = ({ active, onChange }: CategoryTabsProps) => {
  return (
    <div className="border-b border-border">
      <div className="container">
        <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`news-category-pill active-press flex-shrink-0 ${
                active === cat ? "news-category-pill-active" : "news-category-pill-inactive"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
