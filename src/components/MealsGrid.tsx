import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { CategoryChips } from './CategoryChips';
import { MealCard } from './MealCard';
import { MealQuickViewModal } from './MealQuickViewModal';
import { useCart } from '../context/CartContext';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export const MealsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { quickViewItem, setQuickViewItem } = useCart();

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: MENU_ITEMS.length };
    MENU_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered items
  const filteredMeals = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FFF4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-[#E4002B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest Daily Nutrition</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            POPULAR MEALS & SPECIALS
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Order single meals or plan your week. Every dish is cooked fresh this morning with zero refined sugar, no maida, and pure cold-pressed oils.
          </p>
        </div>

        {/* Filter Toolbar: Search Bar + Horizontal Category Chips */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dal, paneer, low-GI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-stone-200/90 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E4002B] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Count & Info */}
            <div className="text-xs font-semibold text-stone-500 flex items-center gap-2 self-start sm:self-auto">
              <span>Showing {filteredMeals.length} fresh options</span>
              <span className="text-stone-300">·</span>
              <span className="text-emerald-700">100% Vegetarian</span>
            </div>
          </div>

          {/* Horizontally scrollable Category Chips */}
          <CategoryChips
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={categoryCounts}
          />
        </div>

        {/* Cards Grid */}
        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredMeals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                onQuickView={(m) => setQuickViewItem(m)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/60 rounded-[28px] border border-dashed border-stone-300 p-8">
            <p className="text-stone-500 font-medium text-base mb-3">
              No dishes found matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#E4002B] text-white text-xs font-bold hover:bg-[#C90025] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <MealQuickViewModal
        meal={quickViewItem}
        onClose={() => setQuickViewItem(null)}
      />
    </section>
  );
};
