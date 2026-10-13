import React from 'react';
import { CATEGORIES } from '../data/menuData';
import { Utensils, Sparkles, HeartPulse, GraduationCap, Flame, Salad, Coffee, Soup } from 'lucide-react';

interface CategoryChipsProps {
  selectedCategory: string;
  onSelectCategory: (category: any) => void;
  counts: Record<string, number>;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'All':
        return Sparkles;
      case 'Indian':
        return Utensils;
      case 'South Indian':
        return Coffee;
      case 'Student':
        return GraduationCap;
      case 'Healthy Bowls':
        return Salad;
      case 'Diabetic Friendly':
        return HeartPulse;
      case 'Jain':
        return Soup;
      case 'High Protein':
        return Flame;
      default:
        return Utensils;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 scrollbar-none no-scrollbar">
        {CATEGORIES.map((cat) => {
          const Icon = getCategoryIcon(cat);
          const isSelected = selectedCategory === cat;
          const count = counts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shrink-0 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B] ${
                isSelected
                  ? 'bg-[#E4002B] text-white shadow-md shadow-red-600/30 ring-2 ring-red-400/40 translate-y-[-1px]'
                  : 'bg-white text-stone-700 hover:text-[#E4002B] hover:bg-rose-50/60 border border-stone-200/80 shadow-xs'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-stone-100 text-stone-600 group-hover:bg-red-100 group-hover:text-[#E4002B]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </span>

              <span>{cat}</span>

              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isSelected
                    ? 'bg-white text-[#E4002B]'
                    : 'bg-stone-100 text-stone-500 group-hover:bg-red-50 group-hover:text-[#E4002B]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
