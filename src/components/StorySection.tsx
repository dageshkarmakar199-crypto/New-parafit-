import React, { useState } from 'react';
import { kitchenPrepImg, heroThaliImg, chickenStroganoffImg, butterGarlicFishImg } from '../data/menuData';
import { siteConfig } from '../config/siteConfig';
import { Heart, Scale, ShieldCheck, Leaf, Truck, Flame, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const storySteps = [
    {
      title: 'Structure Your Diet: The Foundation',
      subtitle: 'Zero Refined Flours · Cold-Pressed Oils',
      description:
        'Most restaurant food hides excess calories in palm oil, refined cornstarches, and hidden sugars. At Parafit, our foundation begins with stoneground multigrain flours, pearl millets (Bajra/Ragi), and unrefined Kachi Ghani mustard and sesame oils.',
      highlight: 'Zero Maida · 100% Cold-Pressed Oils · Sendha Namak',
      image: heroThaliImg,
      icon: Leaf,
    },
    {
      title: 'Gram-Precision Calorie & Macro Weighing',
      subtitle: 'Clinical Standardization on Commercial Scales',
      description:
        'Every portion of grilled cottage cheese, tender chicken breast, or wild rice is weighed down to the gram. When your box says 460 kcal with 38g protein, you can trust that number implicitly for your fitness goals.',
      highlight: 'Standardized Portions · Certified Nutritionist Audited',
      image: chickenStroganoffImg,
      icon: Scale,
    },
    {
      title: 'Hygienic Commercial Cloud Kitchen Hub',
      subtitle: 'Shop No. 1, DDA Mini Market, Block E, East of Kailash',
      description:
        'We operate from a certified South Delhi facility with food-grade stainless steel workstations. We maintain dedicated color-coded prep stations and vessels for pure Satvik Jain cooking, ensuring zero cross-contamination with non-veg dishes.',
      highlight: `FSSAI Lic. #${siteConfig.ratings.fssaiLicense} · Segregated Jain Cookware`,
      image: kitchenPrepImg,
      icon: ShieldCheck,
    },
    {
      title: 'Thermal Kraft Packaging & Hot Dispatch',
      subtitle: 'Delivered Fresh for Lunch & Dinner in South Delhi',
      description:
        'Meals are packed immediately off the tawa and pan into biodegradable kraft containers that preserve steaming heat without leaching harmful microplastics. Thermal carriers dispatch across East of Kailash, Greater Kailash, and Lajpat Nagar.',
      highlight: '100% Compostable Paper · Guaranteed 12:30 PM & 7:30 PM Slots',
      image: butterGarlicFishImg,
      icon: Truck,
    },
  ];

  const currentStep = storySteps[activeStoryIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#FFF4EA] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E4002B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-[#E4002B]" />
            <span>Culinary Philosophy</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            STRUCTURE YOUR DIET: THE PARAFIT METHOD
          </h2>
          <p className="font-hand text-2xl sm:text-3xl text-[#E4002B] font-bold">
            "Every good kitchen starts with a memory, and runs on discipline."
          </p>
        </div>

        {/* Interactive Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Story Tabs & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {storySteps.map((step, idx) => {
              const isActive = activeStoryIndex === idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`p-5 sm:p-6 rounded-[24px] transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white shadow-[0_12px_32px_rgb(0,0,0,0.08)] border-[#E4002B]/40 ring-1 ring-[#E4002B]/20 scale-[1.01]'
                      : 'bg-white/50 hover:bg-white border-stone-200/60 hover:shadow-xs opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#E4002B] text-white shadow-md'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-extrabold tracking-wider uppercase text-stone-400">
                          Step 0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#E4002B]">
                            In Focus
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? 'text-stone-900' : 'text-stone-700'
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#E4002B]">
                        {step.subtitle}
                      </p>

                      {isActive && (
                        <div className="pt-2 space-y-3 animate-in fade-in duration-300">
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/50">
                            ✓ {step.highlight}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage with Card Shadow (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-[28px] overflow-hidden bg-stone-900 shadow-2xl border-4 border-white">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E4002B] text-white text-[10px] font-extrabold uppercase tracking-wide">
                  South Delhi Live Kitchen
                </span>
                <p className="font-display text-2xl text-white">
                  {currentStep.subtitle}
                </p>
                <p className="text-xs text-stone-200 font-medium">
                  {siteConfig.address.full}
                </p>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl border border-stone-200 hidden sm:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase text-stone-500">Clinical Hygiene</p>
                <p className="text-xs font-extrabold text-stone-900">Zero Commercial Short-cuts</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
