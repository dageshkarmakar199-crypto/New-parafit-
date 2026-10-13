import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Utensils, ArrowRight, Sparkles } from 'lucide-react';

interface NotFoundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotFoundModal: React.FC<NotFoundModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-[28px] overflow-hidden shadow-2xl border border-stone-200 p-8 text-center space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-red-100 text-[#E4002B] mx-auto flex items-center justify-center">
          <Utensils className="w-8 h-8" />
        </div>

        <div>
          <span className="font-display text-4xl font-extrabold text-[#E4002B]">404</span>
          <h3 className="text-xl font-bold text-stone-900 mt-1">
            Dish or Page Not Found
          </h3>
          <p className="text-xs text-stone-500 mt-2 leading-relaxed">
            Looks like this plate was already dispatched hot to East of Kailash! Check our live signature menu for today's freshly cooked options.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-full bg-[#E4002B] hover:bg-[#C90025] text-white font-extrabold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Return to Fresh Menu</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
