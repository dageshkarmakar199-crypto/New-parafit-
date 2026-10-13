import React, { useState } from 'react';
import { paneerBowlImg, heroThaliImg } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Copy, Check, Sparkles, ArrowRight, Tag } from 'lucide-react';

export const OfferBanner: React.FC = () => {
  const { applyCoupon, setIsCartOpen } = useCart();
  const [copied, setCopied] = useState(false);

  const handleCopyAndApply = () => {
    navigator.clipboard.writeText('MONTHLY30');
    setCopied(true);
    applyCoupon('MONTHLY30');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FFF4EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#8C0016] via-[#B8001F] to-[#5C000D] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-red-900/50">
          
          {/* Subtle Radial Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Rotating Circular Discount Badge */}
          <div className="absolute top-6 right-6 lg:top-10 lg:right-12 hidden sm:flex items-center justify-center select-none pointer-events-none">
            <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full border-2 border-dashed border-amber-300/60 flex items-center justify-center animate-[spin_24s_linear_infinite]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-200">
                ★ 30% OFF ★ MONTHLY MEAL SUB ★
              </span>
            </div>
            <div className="absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#E4002B] text-white flex flex-col items-center justify-center shadow-lg shadow-black/40 ring-4 ring-white/20">
              <span className="font-display text-2xl lg:text-3xl font-extrabold leading-none">30%</span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-amber-200">OFF</span>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>South Delhi Limited Time Offer</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight leading-[0.95]">
              GET 30% OFF ON YOUR FIRST MONTHLY SUBSCRIPTION
            </h2>

            <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed max-w-lg">
              Unlock daily hot lunch and dinner delivered on time across East of Kailash, GK, and Lajpat Nagar. Pause or adjust anytime.
            </p>

            {/* Coupon Code Strip */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-amber-300" />
                  <span className="font-mono font-extrabold text-base tracking-wider text-white">
                    MONTHLY30
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAndApply}
                  className="px-3 py-1 rounded-full bg-white text-[#E4002B] hover:bg-rose-50 text-xs font-extrabold transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied & Applied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy & Apply</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="#subscriptions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#E4002B] hover:bg-stone-50 font-extrabold text-sm shadow-xl transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Customize Meal Plan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-rose-200/70 pt-1">
              *Valid on minimum cart value of ₹1,800. Applicable for East of Kailash and South Delhi delivery addresses.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
