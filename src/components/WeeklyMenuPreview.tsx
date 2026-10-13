import React, { useState } from 'react';
import { WEEKLY_MENU } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Calendar, Sun, Moon, Sparkles, Flame, Check } from 'lucide-react';

export const WeeklyMenuPreview: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentPlan = WEEKLY_MENU[selectedDayIndex];

  return (
    <section id="weekly-menu" className="py-20 sm:py-28 bg-[#FFF4EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E4002B] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Never Boring · 100% Rotational</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            THIS WEEK’S CURATED MENU
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every day brings a distinct regional specialty cooked with cold-pressed oils. Full macro transparency for calories, protein, and complex carbohydrates.
          </p>
        </div>

        {/* Days of Week Tab Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {WEEKLY_MENU.map((plan, idx) => {
            const isSelected = selectedDayIndex === idx;
            return (
              <button
                key={plan.day}
                onClick={() => setSelectedDayIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 select-none cursor-pointer ${
                  isSelected
                    ? 'bg-[#E4002B] text-white shadow-md shadow-red-600/30 ring-2 ring-red-400/40 translate-y-[-1px]'
                    : 'bg-white text-stone-700 hover:text-[#E4002B] hover:bg-rose-50/50 border border-stone-200'
                }`}
              >
                <span>{plan.day}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Split: Lunch vs Dinner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Lunch Card */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-stone-200/90 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/80 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wide">
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                  Lunch · 12:00 PM - 1:15 PM
                </span>
                <span className="text-xs font-bold text-stone-400">
                  {currentPlan.day} Midday
                </span>
              </div>

              {/* Dish Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 leading-tight">
                {currentPlan.lunch.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {currentPlan.lunch.description}
              </p>
            </div>

            {/* Macros pill bar */}
            <div className="pt-4 border-t border-stone-100">
              <div className="grid grid-cols-3 gap-2 bg-stone-50 p-3 rounded-2xl text-center">
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold">Calories</p>
                  <p className="font-display text-xl font-extrabold text-[#E4002B]">
                    {currentPlan.lunch.calories} kcal
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold">Protein</p>
                  <p className="font-display text-xl font-extrabold text-stone-900">
                    {currentPlan.lunch.protein}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold">Carbs</p>
                  <p className="font-display text-xl font-extrabold text-stone-900">
                    {currentPlan.lunch.carbs}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dinner Card */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-stone-200/90 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/80 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-wide">
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  Dinner · 7:15 PM - 8:30 PM
                </span>
                <span className="text-xs font-bold text-stone-400">
                  {currentPlan.day} Evening
                </span>
              </div>

              {/* Dish Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 leading-tight">
                {currentPlan.dinner.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {currentPlan.dinner.description}
              </p>
            </div>

            {/* Macros pill bar */}
            <div className="pt-4 border-t border-stone-100">
              <div className="grid grid-cols-3 gap-2 bg-stone-50 p-3 rounded-2xl text-center">
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold">Calories</p>
                  <p className="font-display text-xl font-extrabold text-[#E4002B]">
                    {currentPlan.dinner.calories} kcal
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold">Protein</p>
                  <p className="font-display text-xl font-extrabold text-stone-900">
                    {currentPlan.dinner.protein}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-stone-500 uppercase font-bold">Carbs</p>
                  <p className="font-display text-xl font-extrabold text-stone-900">
                    {currentPlan.dinner.carbs}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Nutritional Assurance Note */}
        <div className="mt-8 text-center text-xs text-stone-500 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Need customized diabetic carb limits or Jain satvik substitutions? Chat with our nutritionist on WhatsApp.</span>
        </div>

      </div>
    </section>
  );
};
