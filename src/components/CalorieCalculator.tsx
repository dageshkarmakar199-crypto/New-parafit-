import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { getWhatsAppUrl } from '../config/siteConfig';
import { Flame, Calculator, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

export const CalorieCalculator: React.FC = () => {
  const { addSubscriptionToCart } = useCart();

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(29);
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(76);
  const [activity, setActivity] = useState<number>(1.4); // 1.2 sedentary, 1.4 moderate, 1.6 active
  const [goal, setGoal] = useState<'loss' | 'muscle' | 'maintain'>('loss');

  const { targetCalories, targetProtein, targetCarbs, targetFat, recommendedPlan, monthlyCost, savings } = useMemo(() => {
    // Mifflin-St Jeor Formula
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;

    const tdee = Math.round(bmr * activity);

    let target = tdee;
    let planTitle = 'Balanced Maintenance Daily Plan';
    let dietType: any = 'Homestyle Standard Veg';

    if (goal === 'loss') {
      target = Math.round(tdee - 450); // Safe 450 kcal deficit
      planTitle = '4-Week Lean Deficit Plan';
      dietType = 'Weight Loss Calorie Deficit';
    } else if (goal === 'muscle') {
      target = Math.round(tdee + 300); // 300 kcal clean surplus
      planTitle = '4-Week High-Protein Muscle Fuel';
      dietType = 'High Protein Fitness';
    }

    // Macro distribution
    const proteinGrams = Math.round((weightKg * (goal === 'muscle' ? 2.0 : 1.7)));
    const fatGrams = Math.round((target * 0.25) / 9);
    const carbsGrams = Math.round((target - (proteinGrams * 4 + fatGrams * 9)) / 4);

    const baseMonthly = goal === 'muscle' ? 10999 : 8999;
    const discount = Math.round(baseMonthly * 0.25);
    const finalCost = baseMonthly - discount;

    return {
      targetCalories: Math.max(1300, target),
      targetProtein: proteinGrams,
      targetCarbs: Math.max(80, carbsGrams),
      targetFat: Math.max(35, fatGrams),
      recommendedPlan: planTitle,
      recommendedDietType: dietType,
      monthlyCost: finalCost,
      savings: discount
    };
  }, [gender, age, heightCm, weightKg, activity, goal]);

  const handleAddCalculatedPlan = () => {
    addSubscriptionToCart(
      {
        frequency: '4 Weeks (24 Days)',
        mealSlot: 'Both Meals (Lunch + Dinner)',
        dietType: goal === 'muscle' ? 'High Protein Fitness' : 'Homestyle Standard Veg',
        preference: 'Non-Veg',
        daysPerWeek: 6,
        basePricePerMeal: Math.round(monthlyCost / 48),
        discountPercentage: 25,
        rotiPreference: 'Multigrain Phulkas',
      },
      monthlyCost
    );
  };

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hi Parafit Dietitian! 👋\nI ran the Calorie Calculator:\n- Gender: ${gender}, Age: ${age}, Height: ${heightCm}cm, Weight: ${weightKg}kg\n- Goal: ${goal.toUpperCase()}\n- Recommended Intake: ${targetCalories} kcal / ${targetProtein}g Protein\nPlease prescribe a custom South Delhi meal delivery plan!`
  );

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#FFF4EA] relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mifflin-St Jeor Clinical Formula</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            CALORIE & MACRO GOAL CALCULATOR
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Stop guessing your portions. Enter your biometric numbers to compute your exact daily calorie target and get matched with a chef-cooked South Delhi plan.
          </p>
        </div>

        {/* 2-Column Tool Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Box (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-stone-200/90 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              {/* Gender & Goal Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Biological Gender
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        gender === 'male'
                          ? 'bg-[#E4002B] text-white border-[#E4002B] shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        gender === 'female'
                          ? 'bg-[#E4002B] text-white border-[#E4002B] shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Fitness Goal
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'loss', label: 'Fat Loss' },
                      { id: 'muscle', label: 'Muscle Gain' },
                      { id: 'maintain', label: 'Maintain' },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoal(g.id as any)}
                        className={`py-2.5 px-2 rounded-xl text-[11px] font-bold transition-all border ${
                          goal === g.id
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-stone-50 text-stone-700 border-stone-200'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sliders Grid: Age, Height, Weight */}
              <div className="space-y-5 pt-2">
                {/* Weight Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Current Body Weight:</span>
                    <span className="font-display text-xl text-[#E4002B]">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min={45}
                    max={130}
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E4002B]"
                  />
                </div>

                {/* Height Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Height:</span>
                    <span className="font-display text-xl text-[#E4002B]">{heightCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min={140}
                    max={205}
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E4002B]"
                  />
                </div>

                {/* Age Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Age:</span>
                    <span className="font-display text-xl text-[#E4002B]">{age} yrs</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={75}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E4002B]"
                  />
                </div>

                {/* Activity Level Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                    Daily Activity Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { factor: 1.2, label: 'Desk / Sedentary' },
                      { factor: 1.4, label: 'Moderate (Gym 3-4x)' },
                      { factor: 1.6, label: 'Very Active (Sports)' },
                    ].map((act) => (
                      <button
                        key={act.factor}
                        type="button"
                        onClick={() => setActivity(act.factor)}
                        className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all ${
                          activity === act.factor
                            ? 'bg-emerald-700 text-white border-emerald-700'
                            : 'bg-stone-50 text-stone-700 border-stone-200'
                        }`}
                      >
                        {act.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Audited for South Delhi climate & metabolic rates</span>
              </span>
              <span className="text-emerald-700 font-bold">Live Calibrated</span>
            </div>
          </div>

          {/* Results Output Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#7E0013] via-[#A6001B] to-[#450008] text-white rounded-[28px] p-6 sm:p-8 shadow-xl border border-red-900/40 flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="border-b border-white/15 pb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider">
                  Your Scientific Blueprint
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-white mt-1">
                  DAILY TARGET METRICS
                </h3>
              </div>

              {/* Giant Calorie Number */}
              <div className="p-4 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 text-center">
                <span className="text-xs text-rose-200 font-semibold uppercase tracking-wider">Target Daily Calories</span>
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-amber-300 leading-none my-1 tracking-tight">
                  {targetCalories}
                  <span className="text-lg font-sans text-rose-200 ml-1.5 font-bold">kcal/day</span>
                </div>
                <p className="text-[11px] text-rose-100">
                  {goal === 'loss' ? 'Safe 450 kcal deficit for fat reduction' : goal === 'muscle' ? 'Clean caloric surplus for protein synthesis' : 'Optimal metabolic maintenance'}
                </p>
              </div>

              {/* Target Macro Split Breakdown */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="text-[10px] text-rose-200 font-bold uppercase">Daily Protein</p>
                  <p className="font-display text-2xl font-extrabold text-emerald-400">{targetProtein}g</p>
                  <p className="text-[9px] text-stone-300">Lean source</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="text-[10px] text-rose-200 font-bold uppercase">Complex Carbs</p>
                  <p className="font-display text-2xl font-extrabold text-amber-300">{targetCarbs}g</p>
                  <p className="text-[9px] text-stone-300">Slow release</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="text-[10px] text-rose-200 font-bold uppercase">Healthy Fats</p>
                  <p className="font-display text-2xl font-extrabold text-white">{targetFat}g</p>
                  <p className="text-[9px] text-stone-300">Cold-pressed</p>
                </div>
              </div>

              {/* Recommended Meal Plan Card */}
              <div className="p-4 rounded-2xl bg-white text-stone-900 shadow-md space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E4002B]">Recommended Parafit Plan</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">Save 25%</span>
                </div>
                <h4 className="text-base font-bold text-stone-900 leading-snug">
                  {recommendedPlan} (48 Meals)
                </h4>
                <div className="flex items-baseline justify-between pt-1 border-t border-stone-100">
                  <span className="text-xs text-stone-500">Monthly Investment:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-extrabold text-[#E4002B]">
                      ₹{monthlyCost}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold">(Saved ₹{savings})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleAddCalculatedPlan}
                className="w-full py-3.5 rounded-full bg-white hover:bg-stone-50 active:scale-95 text-[#E4002B] font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
              >
                <span>Add This Calibrated Plan to Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Discuss With Clinical Dietitian on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
