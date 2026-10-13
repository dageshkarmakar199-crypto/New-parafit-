import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { SubscriptionConfig } from '../types';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { Sparkles, Check, MessageCircle, ShieldCheck, Calendar, ArrowRight, Zap, Flame, Utensils } from 'lucide-react';

export const SubscriptionBuilder: React.FC = () => {
  const { addSubscriptionToCart } = useCart();

  const [frequency, setFrequency] = useState<'1 Week (6 Days)' | '4 Weeks (24 Days)' | '12 Weeks (Transformation)'>('4 Weeks (24 Days)');
  const [mealSlot, setMealSlot] = useState<'Lunch Only' | 'Dinner Only' | 'Both Meals (Lunch + Dinner)'>('Both Meals (Lunch + Dinner)');
  const [dietType, setDietType] = useState<'High Protein Fitness' | 'Weight Loss Calorie Deficit' | 'Homestyle Standard Veg' | 'Diabetic Low-GI Care' | 'Pure Satvik Jain'>('High Protein Fitness');
  const [preference, setPreference] = useState<'Veg' | 'Non-Veg' | 'Eggitarian'>('Non-Veg');
  const [rotiPreference, setRotiPreference] = useState<'Multigrain Phulkas' | 'Bajra / Ragi Rotis' | 'Quinoa / Brown Rice'>('Multigrain Phulkas');

  const { totalMeals, pricePerMeal, subtotal, discountPercent, savings, finalPrice } = useMemo(() => {
    let days = 24;
    let discount = 25;

    if (frequency === '1 Week (6 Days)') {
      days = 6;
      discount = 12;
    } else if (frequency === '12 Weeks (Transformation)') {
      days = 72;
      discount = 35;
    }

    const mealsPerDay = mealSlot === 'Both Meals (Lunch + Dinner)' ? 2 : 1;
    const count = days * mealsPerDay;

    let baseRate = 249; // Non-Veg standard
    if (preference === 'Veg') baseRate = 209;
    if (preference === 'Eggitarian') baseRate = 229;

    if (dietType === 'High Protein Fitness') baseRate += 30;

    const rawTotal = count * baseRate;
    const discountAmt = Math.round((rawTotal * discount) / 100);
    const total = rawTotal - discountAmt;
    const perMealEffective = Math.round(total / count);

    return {
      totalMeals: count,
      pricePerMeal: perMealEffective,
      subtotal: rawTotal,
      discountPercent: discount,
      savings: discountAmt,
      finalPrice: total
    };
  }, [frequency, mealSlot, dietType, preference]);

  const handleSubscribe = () => {
    const config: SubscriptionConfig = {
      frequency,
      mealSlot,
      dietType,
      preference,
      daysPerWeek: frequency === '1 Week (6 Days)' ? 6 : frequency === '4 Weeks (24 Days)' ? 24 : 72,
      basePricePerMeal: pricePerMeal,
      discountPercentage: discountPercent,
      rotiPreference
    };
    addSubscriptionToCart(config, finalPrice);
  };

  const handleWhatsAppSubscribe = () => {
    const text = `Hello Parafit Delivers! 👋\nI want to book a Custom Meal Subscription:\n- Duration: ${frequency}\n- Meal Slot: ${mealSlot}\n- Diet: ${dietType} (${preference})\n- Carb/Roti: ${rotiPreference}\n- Total Meals: ${totalMeals}\n- Total Price: ₹${finalPrice} (Saved ₹${savings})\nDelivery Zone: East of Kailash / South Delhi\nPlease confirm delivery commencement date!`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="subscriptions" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Plan Architecture</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            BUILD YOUR GOAL-BASED MEAL PLAN
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Choose 1, 4 or 12 weeks. Every single box comes calorie-counted and cooked in cold-pressed oils. Pause anytime with 3 hours notice.
          </p>
        </div>

        {/* 2-Column Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFF4EA]/80 rounded-[28px] p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-7">
            
            {/* Step 1: Duration Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#E4002B] text-white flex items-center justify-center text-[10px]">1</span>
                  Duration & Transformation Timeline
                </label>
                <span className="text-xs font-bold text-[#E4002B]">Up to 35% OFF</span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(['1 Week (6 Days)', '4 Weeks (24 Days)', '12 Weeks (Transformation)'] as const).map((freq) => {
                  const isSel = frequency === freq;
                  return (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all border ${
                        isSel
                          ? 'bg-[#E4002B] text-white border-[#E4002B] shadow-md shadow-red-600/20'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-extrabold leading-snug">
                        {freq}
                      </span>
                      <span
                        className={`block text-[10px] mt-1 font-semibold ${
                          isSel ? 'text-rose-100' : 'text-stone-500'
                        }`}
                      >
                        {freq === '12 Weeks (Transformation)'
                          ? 'Save 35% Best Value'
                          : freq === '4 Weeks (24 Days)'
                          ? 'Save 25% Popular'
                          : 'Save 12% Starter'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Veg / Non-Veg / Eggitarian Filter */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-1.5 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#E4002B] text-white flex items-center justify-center text-[10px]">2</span>
                Dietary Preference
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(['Non-Veg', 'Veg', 'Eggitarian'] as const).map((pref) => {
                  const isSel = preference === pref;
                  return (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setPreference(pref)}
                      className={`p-3 rounded-2xl text-center transition-all border font-bold text-xs ${
                        isSel
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {pref === 'Non-Veg' ? '🍗 Chicken & Fish' : pref === 'Veg' ? '🌱 100% Pure Veg' : '🍳 Eggitarian'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Meal Slot Selection */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-1.5 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#E4002B] text-white flex items-center justify-center text-[10px]">3</span>
                Daily Delivery Slots
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(['Lunch Only', 'Dinner Only', 'Both Meals (Lunch + Dinner)'] as const).map((slot) => {
                  const isSel = mealSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setMealSlot(slot)}
                      className={`p-3 rounded-2xl text-left transition-all border ${
                        isSel
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <span className="block text-xs font-bold">{slot}</span>
                      <span className={`block text-[10px] mt-0.5 ${isSel ? 'text-stone-300' : 'text-stone-400'}`}>
                        {slot === 'Lunch Only'
                          ? '12:00 – 1:30 PM'
                          : slot === 'Dinner Only'
                          ? '7:15 – 9:00 PM'
                          : 'Lunch + Dinner'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Nutritional Target Goal */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-1.5 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#E4002B] text-white flex items-center justify-center text-[10px]">4</span>
                Nutritional Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(
                  [
                    { id: 'High Protein Fitness', desc: 'Chicken/Paneer/Fish, 35g+ protein', tag: 'Fitness' },
                    { id: 'Weight Loss Calorie Deficit', desc: '400-450 kcal calibrated deficit', tag: 'Fat Loss' },
                    { id: 'Homestyle Standard Veg', desc: 'Dal, subzi, 3 multigrain phulkas', tag: 'Everyday' },
                    { id: 'Diabetic Low-GI Care', desc: 'Low GI grains, sprouted salads', tag: 'Clinical' },
                  ] as const
                ).map((diet) => {
                  const isSel = dietType === diet.id;
                  return (
                    <button
                      key={diet.id}
                      type="button"
                      onClick={() => setDietType(diet.id as any)}
                      className={`p-3.5 rounded-2xl text-left transition-all border ${
                        isSel
                          ? 'bg-white border-[#E4002B] ring-2 ring-[#E4002B]/30 shadow-md'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-stone-900">{diet.id}</span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-600">
                          {diet.tag}
                        </span>
                      </div>
                      <span className="block text-[11px] text-stone-500 mt-1 leading-snug">
                        {diet.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Carb & Grain Selection */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-stone-700 flex items-center gap-1.5 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#E4002B] text-white flex items-center justify-center text-[10px]">5</span>
                Base Grain / Bread (Always Zero Maida)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Multigrain Phulkas', 'Bajra / Ragi Rotis', 'Quinoa / Brown Rice'] as const).map((roti) => {
                  const isSel = rotiPreference === roti;
                  return (
                    <button
                      key={roti}
                      type="button"
                      onClick={() => setRotiPreference(roti)}
                      className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all border ${
                        isSel
                          ? 'bg-emerald-700 text-white border-emerald-700'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {roti}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Pricing & Animated Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#7A0012] via-[#9E0018] to-[#450009] text-white rounded-[28px] p-6 sm:p-8 shadow-xl border border-red-900/40 space-y-6">
            
            <div className="border-b border-white/15 pb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider">
                Live Pricing Breakdown
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white mt-1">
                SUMMARY & SAVINGS
              </h3>
              <p className="text-xs text-rose-200/90 mt-0.5">
                Delivered daily hot across East of Kailash & South Delhi.
              </p>
            </div>

            {/* Selection Overview */}
            <div className="space-y-2 text-xs text-rose-100/90">
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span>Timeline:</span>
                <span className="font-bold text-white">{frequency}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span>Diet & Category:</span>
                <span className="font-bold text-white">{preference} · {dietType}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span>Meal Slot:</span>
                <span className="font-bold text-white">{mealSlot}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span>Grain / Bread:</span>
                <span className="font-bold text-white">{rotiPreference}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span>Total Standardized Meals:</span>
                <span className="font-extrabold text-amber-300 text-sm">{totalMeals} Meals</span>
              </div>
            </div>

            {/* Price Numbers & Savings Card */}
            <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-rose-200">Effective per meal</span>
                  <div className="font-display text-3xl font-extrabold text-white">
                    ₹{pricePerMeal}
                    <span className="text-xs font-normal text-rose-200 ml-1">/meal</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold">
                    SAVE {discountPercent}%
                  </span>
                  <p className="text-xs text-emerald-300 font-bold mt-1">
                    You save ₹{savings}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-stone-300">Total Subscription Amount:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-rose-300 line-through text-xs">₹{subtotal}</span>
                  <span className="font-display text-2xl font-extrabold text-amber-300">
                    ₹{finalPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleSubscribe}
                className="w-full py-4 rounded-full bg-white hover:bg-stone-50 active:scale-95 text-[#E4002B] font-extrabold text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 transition-all"
              >
                <span>Add Subscription to Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSubscribe}
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Order via WhatsApp</span>
              </button>
            </div>

            {/* Flexibility Guarantee */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-rose-200/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full flexibility: Pause or swap dishes anytime with 3 hours prior notice.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
