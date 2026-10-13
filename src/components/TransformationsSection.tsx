import React, { useState } from 'react';
import { TRANSFORMATION_STORIES } from '../data/menuData';
import { siteConfig } from '../config/siteConfig';
import { Star, TrendingUp, Award, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const TransformationsSection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const story = TRANSFORMATION_STORIES[activeStoryIndex];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Proven South Delhi Transformations</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            REAL BIOMETRIC RESULTS & LIFESTYLE RESETS
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            When you remove refined seed oils and hit accurate protein/calorie targets every day, your body changes without extreme starvation diets.
          </p>

          {/* Dual Platform Ratings Badges (Zomato + Google) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            {/* Zomato Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 shadow-2xs">
              <span className="w-6 h-6 rounded-lg bg-[#E23744] text-white flex items-center justify-center font-black text-xs">
                Z
              </span>
              <div className="text-left leading-tight">
                <div className="flex items-center gap-1 font-bold text-xs">
                  <Star className="w-3 h-3 fill-[#E23744] text-[#E23744]" />
                  <span>{siteConfig.ratings.zomatoScore}★ on Zomato</span>
                </div>
                <span className="text-[10px] text-stone-500 font-medium">15K+ verified orders [VERIFY]</span>
              </div>
            </div>

            {/* Google Maps Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-stone-900 shadow-2xs">
              <span className="w-6 h-6 rounded-lg bg-[#4285F4] text-white flex items-center justify-center font-black text-xs">
                G
              </span>
              <div className="text-left leading-tight">
                <div className="flex items-center gap-1 font-bold text-xs text-amber-800">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{siteConfig.ratings.googleScore}★ Google Rating</span>
                </div>
                <span className="text-[10px] text-stone-500 font-medium">1,840+ East of Kailash reviews [VERIFY]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Transformation Card */}
        <div className="max-w-5xl mx-auto bg-[#FFF4EA] rounded-[32px] p-6 sm:p-10 border border-stone-200 shadow-[0_12px_40px_rgb(0,0,0,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual Before/After Metric Display (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <span>Transformation Metrics</span>
                  <span className="text-[#E4002B]">{story.duration}</span>
                </div>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {Object.entries(story.stats).map(([k, v]) => (
                    <div key={k} className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <p className="font-display text-2xl font-extrabold text-[#E4002B]">{v}</p>
                      <p className="text-[10px] font-semibold text-stone-500 uppercase tracking-tight mt-0.5">
                        {k.replace(/([A-Z])/g, ' $1')}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Before / After Stats Comparison Pill */}
                <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-stone-500">
                    <span>Starting Baseline:</span>
                    <span className="font-bold text-stone-700">{story.beforeStats}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
                    <span>Target Outcome:</span>
                    <span>{story.afterStats}</span>
                  </div>
                </div>
              </div>

              {/* Verified Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 bg-white/70 px-4 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Plan: <strong>{story.planName}</strong></span>
              </div>
            </div>

            {/* Right Column: Customer Story & Quote (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-100 text-[#E4002B] text-xs font-extrabold uppercase tracking-wide">
                  Goal: {story.goal}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
                  {story.name}, {story.age}
                </h3>
                <p className="text-xs text-stone-500 font-medium">{story.locality}</p>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-stone-800 leading-relaxed italic border-l-2 border-[#E4002B] pl-4">
                "{story.quote}"
              </blockquote>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <div className="flex items-center gap-2">
                  {TRANSFORMATION_STORIES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStoryIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeStoryIndex === i ? 'w-8 bg-[#E4002B]' : 'w-2.5 bg-stone-300'
                      }`}
                      aria-label={`View story ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveStoryIndex(
                        (prev) => (prev - 1 + TRANSFORMATION_STORIES.length) % TRANSFORMATION_STORIES.length
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 transition-colors shadow-2xs"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveStoryIndex((prev) => (prev + 1) % TRANSFORMATION_STORIES.length)
                    }
                    className="w-10 h-10 rounded-full bg-white hover:bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 transition-colors shadow-2xs"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
