import React, { useState } from 'react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { Heart, Plus, Star, Check, Info, Flame } from 'lucide-react';

interface MealCardProps {
  meal: MenuItem;
  onQuickView: (meal: MenuItem) => void;
}

export const MealCard: React.FC<MealCardProps> = ({ meal, onQuickView }) => {
  const { addToCart, isFavourite, toggleFavourite } = useCart();
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const fav = isFavourite(meal.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(meal);
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1400);
  };

  const handleHeart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavourite(meal.id);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Macro Ring Math (Circular progress calculation based on standard daily target)
  const proteinPercent = Math.min(100, Math.round((meal.protein / 45) * 100)); // out of 45g target
  const carbsPercent = Math.min(100, Math.round((meal.carbs / 65) * 100));
  const fatPercent = Math.min(100, Math.round((meal.fat / 25) * 100));

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onQuickView(meal)}
      style={{
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
      className="group relative bg-white rounded-[24px] p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgb(228,0,43,0.13)] border border-stone-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none"
    >
      <div>
        {/* Top Media & Badges Area */}
        <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-stone-100 mb-4">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Scrim overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-30 transition-opacity" />

          {/* Dietary Indicator (Veg / Non-Veg / Egg) */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {meal.dietType === 'Veg' && (
              <span className="w-5 h-5 rounded-md bg-white/95 backdrop-blur-sm border border-emerald-600 flex items-center justify-center p-0.5 shadow-xs" title="100% Pure Vegetarian">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              </span>
            )}
            {meal.dietType === 'Non-Veg' && (
              <span className="w-5 h-5 rounded-md bg-white/95 backdrop-blur-sm border border-[#E4002B] flex items-center justify-center p-0.5 shadow-xs" title="Lean High-Protein Non-Vegetarian">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E4002B]"></span>
              </span>
            )}
            {meal.dietType === 'Egg' && (
              <span className="w-5 h-5 rounded-md bg-white/95 backdrop-blur-sm border border-amber-600 flex items-center justify-center p-0.5 shadow-xs" title="Eggitarian High Protein">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              </span>
            )}

            {meal.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#E4002B] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                {meal.badge}
              </span>
            )}
          </div>

          {/* Favourite Heart Button */}
          <button
            onClick={handleHeart}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-[#E4002B] hover:scale-110 active:scale-95 transition-all shadow-xs z-10"
            aria-label="Add to favourites"
          >
            <Heart
              className={`w-4 h-4 ${fav ? 'fill-[#E4002B] text-[#E4002B]' : 'text-stone-600'}`}
            />
          </button>

          {/* Hover Overlay: Ingredients Snapshot */}
          <div
            className={`absolute inset-x-2 bottom-2 p-2.5 rounded-xl bg-black/85 backdrop-blur-md text-white text-[11px] transition-all duration-300 z-10 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <p className="font-bold text-amber-300 text-[10px] uppercase tracking-wider mb-1">Clean Key Ingredients</p>
            <p className="line-clamp-2 text-stone-200 leading-snug">
              {meal.ingredients.slice(0, 4).join(' · ')}
            </p>
          </div>
        </div>

        {/* Content details */}
        <div className="space-y-1.5">
          {/* Rating and category */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-1 font-bold text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{meal.rating}</span>
              <span className="text-stone-400 font-normal">({meal.reviewCount})</span>
            </div>
            <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
              {meal.category}
            </span>
          </div>

          {/* Meal Title */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-tight group-hover:text-[#E4002B] transition-colors line-clamp-1">
              {meal.name}
            </h3>
            <p className="text-xs text-emerald-700 font-semibold mt-0.5 line-clamp-1">
              {meal.tagline}
            </p>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {meal.description}
          </p>
        </div>
      </div>

      {/* Footer Area: Interactive Animated Macro Rings & Price */}
      <div className="mt-4 pt-3 border-t border-stone-100">
        
        {/* Animated Macro Progress Rings */}
        <div className="grid grid-cols-4 gap-2 mb-3 bg-[#FFF4EA]/60 p-2.5 rounded-2xl border border-stone-200/50">
          
          {/* Calories Ring */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#E4002B"
                  strokeWidth="3.2"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (88 * (meal.calories / 600))}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <Flame className="w-3.5 h-3.5 text-[#E4002B] absolute" />
            </div>
            <span className="text-[10px] font-extrabold text-stone-900 mt-1">{meal.calories}</span>
            <span className="text-[9px] text-stone-500 uppercase tracking-tight">kcal</span>
          </div>

          {/* Protein Ring */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#2E9E5B"
                  strokeWidth="3.2"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (88 * (proteinPercent / 100))}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <span className="text-[9px] font-extrabold text-[#2E9E5B] absolute">P</span>
            </div>
            <span className="text-[10px] font-extrabold text-stone-900 mt-1">{meal.protein}g</span>
            <span className="text-[9px] text-stone-500 uppercase tracking-tight">Prot</span>
          </div>

          {/* Carbs Ring */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="3.2"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (88 * (carbsPercent / 100))}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <span className="text-[9px] font-extrabold text-[#D97706] absolute">C</span>
            </div>
            <span className="text-[10px] font-extrabold text-stone-900 mt-1">{meal.carbs}g</span>
            <span className="text-[9px] text-stone-500 uppercase tracking-tight">Carb</span>
          </div>

          {/* Fat Ring */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="3.2"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (88 * (fatPercent / 100))}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <span className="text-[9px] font-extrabold text-stone-600 absolute">F</span>
            </div>
            <span className="text-[10px] font-extrabold text-stone-900 mt-1">{meal.fat}g</span>
            <span className="text-[9px] text-stone-500 uppercase tracking-tight">Fat</span>
          </div>

        </div>

        {/* Price & Add to Bag Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-extrabold text-[#E4002B]">
                ₹{meal.price}
              </span>
              <span className="text-xs text-stone-400 line-through">
                ₹{meal.originalPrice}
              </span>
            </div>
            <p className="text-[10px] text-emerald-700 font-bold">100% Calorie Counted</p>
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-sm ${
              isAddedRecently
                ? 'bg-emerald-600 text-white'
                : 'bg-[#E4002B] hover:bg-[#C90025] text-white'
            }`}
            aria-label={`Add ${meal.name} to order`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
