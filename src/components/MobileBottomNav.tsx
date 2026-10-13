import React from 'react';
import { useCart } from '../context/CartContext';
import { siteConfig, getWhatsAppUrl, getTelUrl } from '../config/siteConfig';
import { Utensils, Calculator, ShoppingBag, Phone, MessageCircle } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { totalItemsCount, setIsCartOpen } = useCart();

  return (
    <div className="lg:hidden fixed bottom-3 inset-x-3 z-40 select-none">
      <div className="bg-[#1A1A1A]/95 backdrop-blur-md text-white rounded-full px-4 py-2 shadow-2xl border border-white/10 flex items-center justify-between">
        
        {/* Menu Tab */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center text-stone-300 hover:text-white px-2 py-1 text-[10px] font-semibold"
        >
          <Utensils className="w-4 h-4 mb-0.5 text-stone-400" />
          <span>Menu</span>
        </a>

        {/* Calorie Calculator Tab */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center text-stone-300 hover:text-white px-2 py-1 text-[10px] font-semibold"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-amber-400" />
          <span>Calorie</span>
        </a>

        {/* Center Raised "Order / Bag" Button */}
        <div className="-mt-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-14 h-14 rounded-full bg-[#E4002B] hover:bg-[#C90025] active:scale-95 text-white flex flex-col items-center justify-center shadow-lg shadow-red-700/50 ring-4 ring-[#1A1A1A] relative"
            aria-label={`Open Order Bag (${totalItemsCount} items)`}
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="text-[9px] font-extrabold uppercase mt-0.5 tracking-tight">
              Order
            </span>
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[#E4002B] text-[10px] font-extrabold flex items-center justify-center shadow-md">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Call Button (siteConfig.phone) */}
        <a
          href={getTelUrl()}
          className="flex flex-col items-center justify-center text-stone-300 hover:text-white px-2 py-1 text-[10px] font-semibold"
          aria-label={`Call Parafit at ${siteConfig.phone}`}
        >
          <Phone className="w-4 h-4 mb-0.5 text-rose-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Direct Tab */}
        <a
          href={getWhatsAppUrl('Hi Parafit! I would like to order calorie-counted meals.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-stone-300 hover:text-white px-2 py-1 text-[10px] font-semibold"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
