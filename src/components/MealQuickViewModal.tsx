import React, { useState } from 'react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { X, Flame, ShieldCheck, Heart, Plus, Check, Clock, Sparkles } from 'lucide-react';

interface MealQuickViewModalProps {
  meal: MenuItem | null;
  onClose: () => void;
}

export const MealQuickViewModal: React.FC<MealQuickViewModalProps> = ({ meal, onClose }) => {
  const { addToCart, isFavourite, toggleFavourite } = useCart();
  const [selectedSlot, setSelectedSlot] = useState<'Lunch (12:00 - 1:30 PM)' | 'Dinner (7:15 - 9:00 PM)'>('Lunch (12:00 - 1:30 PM)');
  const [isAdded, setIsAdded] = useState(false);

  if (!meal) return null;

  const fav = isFavourite(meal.id);

  const handleAdd = () => {
    addToCart(meal, selectedSlot);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-[28px] overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full bg-stone-100 overflow-hidden shrink-0">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Favorite Button */}
          <button
            onClick={() => toggleFavourite(meal.id)}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <Heart className={`w-5 h-5 ${fav ? 'fill-[#E4002B] text-[#E4002B]' : 'text-white'}`} />
          </button>

          {/* Bottom Title Overlay */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E4002B] text-white text-[11px] font-extrabold uppercase tracking-wide">
              {meal.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 leading-tight text-white">
              {meal.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200">{meal.portion}</p>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Nutrition Macros Banner */}
          <div className="grid grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 text-center">
            <div>
              <p className="text-[11px] text-stone-500 font-medium">Calories</p>
              <p className="font-display text-xl font-extrabold text-[#E4002B]">{meal.calories}</p>
              <p className="text-[10px] text-stone-400">kcal</p>
            </div>
            <div>
              <p className="text-[11px] text-stone-500 font-medium">Protein</p>
              <p className="font-display text-xl font-extrabold text-stone-900">{meal.protein}g</p>
              <p className="text-[10px] text-stone-400">Clean source</p>
            </div>
            <div>
              <p className="text-[11px] text-stone-500 font-medium">Carbs</p>
              <p className="font-display text-xl font-extrabold text-stone-900">{meal.carbs}g</p>
              <p className="text-[10px] text-stone-400">Complex fibers</p>
            </div>
            <div>
              <p className="text-[11px] text-stone-500 font-medium">Healthy Fats</p>
              <p className="font-display text-xl font-extrabold text-stone-900">{meal.fat}g</p>
              <p className="text-[10px] text-stone-400">Cold-pressed</p>
            </div>
          </div>

          {/* Full description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">About This Meal</h4>
            <p className="text-sm text-stone-700 leading-relaxed">{meal.description}</p>
          </div>

          {/* Transparent Ingredients */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Key Clean Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {meal.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-1 border border-emerald-200/60"
                >
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>{ing}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Dietary Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Dietary Standards</h4>
            <div className="flex flex-wrap gap-2">
              {meal.dietaryFeatures.map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-medium border border-rose-200/50"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Meal Slot Selection */}
          <div className="pt-2 border-t border-stone-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Choose Delivery Slot
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedSlot('Lunch (12:00 - 1:30 PM)')}
                className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                  selectedSlot === 'Lunch (12:00 - 1:30 PM)'
                    ? 'border-[#E4002B] bg-red-50/50 text-[#E4002B] ring-1 ring-[#E4002B]'
                    : 'border-stone-200 hover:border-stone-300 text-stone-700'
                }`}
              >
                <span className="block font-extrabold">Lunch Slot</span>
                <span className="text-[11px] font-normal text-stone-500">Delivered 12:00 PM – 1:30 PM</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedSlot('Dinner (7:15 - 9:00 PM)')}
                className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                  selectedSlot === 'Dinner (7:15 - 9:00 PM)'
                    ? 'border-[#E4002B] bg-red-50/50 text-[#E4002B] ring-1 ring-[#E4002B]'
                    : 'border-stone-200 hover:border-stone-300 text-stone-700'
                }`}
              >
                <span className="block font-extrabold">Dinner Slot</span>
                <span className="text-[11px] font-normal text-stone-500">Delivered 7:15 PM – 9:00 PM</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold text-[#E4002B]">
                ₹{meal.price}
              </span>
              <span className="text-xs text-stone-400 line-through">₹{meal.originalPrice}</span>
            </div>
            <p className="text-[11px] text-stone-500">Free delivery over ₹299</p>
          </div>

          <button
            onClick={handleAdd}
            className={`px-7 py-3 rounded-full font-extrabold text-sm transition-all duration-200 flex items-center gap-2 shadow-md ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#E4002B] hover:bg-[#C90025] text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
