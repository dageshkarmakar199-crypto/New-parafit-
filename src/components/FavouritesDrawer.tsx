import React from 'react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { X, Heart, Plus, Trash2, ShoppingBag } from 'lucide-react';

export const FavouritesDrawer: React.FC = () => {
  const {
    favourites,
    toggleFavourite,
    addToCart,
    isFavDrawerOpen,
    setIsFavDrawerOpen,
  } = useCart();

  if (!isFavDrawerOpen) return null;

  const favMeals = MENU_ITEMS.filter((item) => favourites.includes(item.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FFF4EA]/50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-[#E4002B] text-[#E4002B]" />
            <h3 className="font-display text-2xl font-bold text-stone-900">FAVOURITE MEALS</h3>
            <span className="px-2 py-0.5 rounded-full bg-[#E4002B] text-white text-xs font-extrabold">
              {favMeals.length}
            </span>
          </div>

          <button
            onClick={() => setIsFavDrawerOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {favMeals.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Heart className="w-12 h-12 text-stone-300 mx-auto" />
              <p className="text-stone-700 font-bold text-sm">No favourite meals saved yet</p>
              <p className="text-stone-400 text-xs">
                Tap the heart on any thali or bowl to keep it bookmarked here!
              </p>
            </div>
          ) : (
            favMeals.map((meal) => (
              <div
                key={meal.id}
                className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3.5"
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 truncate">{meal.name}</h4>
                  <p className="text-[11px] text-stone-500">{meal.category}</p>
                  <p className="text-xs font-extrabold text-[#E4002B] mt-0.5">₹{meal.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => addToCart(meal)}
                    className="p-2 rounded-xl bg-[#E4002B] text-white hover:bg-[#C90025] transition-colors"
                    title="Add to Cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleFavourite(meal.id)}
                    className="p-2 rounded-xl text-stone-400 hover:text-stone-600"
                    title="Remove from favourites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200">
          <button
            onClick={() => setIsFavDrawerOpen(false)}
            className="w-full py-2.5 rounded-full bg-stone-900 text-white font-bold text-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
