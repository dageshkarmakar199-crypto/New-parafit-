import React, { useState } from 'react';
import { heroThaliImg } from '../data/menuData';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight, Flame, ShieldCheck, MapPin, Sparkles, Calculator, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const words = ['FRESH.', 'HEALTHY.', 'HOMESTYLE.'];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-br from-[#800014] via-[#A8001C] to-[#4A000A] text-white min-h-[92vh] flex items-center justify-center py-12 lg:py-20 select-none"
    >
      {/* Background radial glow & textured depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle food spice particles */}
      <div className="absolute top-1/4 left-8 md:left-24 text-amber-300/40 text-xs font-mono animate-float pointer-events-none flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        <span>100% Cold-Pressed Oils · Kachi Ghani</span>
      </div>
      <div className="absolute bottom-1/4 left-12 md:left-32 text-emerald-300/40 text-xs font-mono animate-float [animation-delay:2s] pointer-events-none flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>Every Dish Shows Protein & Calories</span>
      </div>
      <div className="absolute top-1/3 right-8 md:right-28 text-rose-200/40 text-xs font-mono animate-float [animation-delay:1.5s] pointer-events-none flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-rose-400"></span>
        <span>Zero Maida · Zero Refined Sugar</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live South Delhi Hub Pulse Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs text-rose-100 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide flex items-center gap-1 text-white">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Delivering in East of Kailash & South Delhi
              </span>
              <span className="text-white/40">|</span>
              <span className="text-amber-300 font-medium hidden sm:inline">Open 9:15 AM - 11 PM</span>
            </div>

            {/* Giant Display Headline with word-by-word reveal */}
            <div className="space-y-1">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white uppercase drop-shadow-sm">
                {words.map((word, i) => (
                  <span
                    key={word}
                    className={`inline-block mr-3 ${
                      i === 1 ? 'text-amber-300' : 'text-white'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              {/* Handwritten warmth accent */}
              <p className="font-hand text-2xl sm:text-3xl lg:text-4xl text-amber-200 pt-2 font-bold tracking-wide">
                "{siteConfig.positioning}"
              </p>
            </div>

            {/* Subtitle Value Proposition */}
            <p className="text-base sm:text-lg text-rose-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Healthy, calorie-counted meal delivery and personalized diet subscriptions for South Delhi.
              <span className="block mt-1 font-semibold text-white">
                North Indian · Continental · Salads · High-Protein Bowls · No Refined Palm Oil.
              </span>
            </p>

            {/* CTAs Button Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#E4002B] hover:bg-stone-50 active:scale-95 font-extrabold text-base shadow-xl shadow-black/20 hover:shadow-2xl transition-all group"
              >
                <span>Order Fresh Meals (From ₹149)</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/30 hover:bg-black/40 border border-white/25 text-white active:scale-95 font-bold text-base backdrop-blur-md transition-all"
              >
                <Calculator className="w-4 h-4 text-amber-300" />
                <span>Calculate Calorie Plan</span>
              </a>
            </div>

            {/* Quick Micro-Proof Strip with Zomato & Google */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/15 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-display text-2xl sm:text-3xl text-white font-extrabold tracking-wide">150+</p>
                <p className="text-[11px] sm:text-xs text-rose-200/80">Macro Dishes</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-2xl sm:text-3xl text-amber-300 font-extrabold tracking-wide">
                  {siteConfig.ratings.zomatoScore}★
                </p>
                <p className="text-[11px] sm:text-xs text-rose-200/80">Zomato (15K+ ratings)</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-2xl sm:text-3xl text-emerald-400 font-extrabold tracking-wide">
                  {siteConfig.ratings.googleScore}★
                </p>
                <p className="text-[11px] sm:text-xs text-rose-200/80">Google Local Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D-Feel Parallax Meal Bowl (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Interactive container with mouse parallax */}
            <div
              className="relative w-72 sm:w-96 lg:w-[430px] aspect-square transition-transform duration-300 ease-out flex items-center justify-center"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -14}deg) rotateY(${
                  mousePos.x * 14
                }deg) scale3d(1, 1, 1)`
              }}
            >
              {/* Outer circular glowing rim */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/30 to-red-600/30 blur-2xl -z-10 animate-pulse" />

              {/* Rising steam particles container */}
              <div className="absolute -top-12 inset-x-0 flex justify-center gap-6 pointer-events-none z-20">
                <div className="w-1.5 h-12 bg-white/40 blur-xs rounded-full animate-steam" />
                <div className="w-2 h-16 bg-white/30 blur-xs rounded-full animate-steam [animation-delay:1s]" />
                <div className="w-1.5 h-10 bg-white/40 blur-xs rounded-full animate-steam [animation-delay:2s]" />
              </div>

              {/* Circular Thali Mask & Image with shadow */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-amber-200/30 via-white/10 to-black/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-4 border-amber-300/40 overflow-hidden group">
                <img
                  src={heroThaliImg}
                  alt="Parafit Delivers Fresh Healthy Bowl"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badges */}
              <div
                className="absolute -top-3 -right-2 bg-white/95 text-stone-900 rounded-2xl px-4 py-2 shadow-xl backdrop-blur-md border border-stone-200/50 flex items-center gap-2 transform hover:scale-105 transition-transform"
                style={{
                  transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -18}px, 20px)`
                }}
              >
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Standardized Macros</p>
                  <p className="text-xs font-extrabold text-stone-900">Protein, Carbs & Fats</p>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-3 bg-[#1A1A1A]/95 text-white rounded-2xl px-4 py-2.5 shadow-2xl backdrop-blur-md border border-white/10 flex items-center gap-2.5 transform hover:scale-105 transition-transform"
                style={{
                  transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 30px)`
                }}
              >
                <div className="w-8 h-8 rounded-full bg-[#E4002B] text-white flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-white">460 kcal · 38g Protein</p>
                  <p className="text-[10px] text-amber-300 font-semibold">Chicken Stroganoff & Rice</p>
                </div>
              </div>

              <div
                className="absolute -bottom-2 -right-4 bg-emerald-950/90 text-emerald-200 rounded-xl px-3 py-1.5 shadow-lg border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1.5"
                style={{
                  transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 10px)`
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Shop No. 1, DDA Mini Mkt</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
