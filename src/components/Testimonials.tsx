import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/menuData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9★ Google Rating · 1,840+ Reviews</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            LOVED ACROSS SOUTH DELHI
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Real feedback from local doctors, tech professionals, competitive students, and families who rely on our daily kitchens.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Active Testimonial Card */}
          <div className="relative bg-[#FFF4EA] rounded-[32px] p-8 sm:p-12 shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-stone-200/80 transition-all duration-300">
            <Quote className="w-12 h-12 text-[#E4002B]/20 absolute top-8 right-8 pointer-events-none" />

            <div className="flex items-center gap-1 mb-4 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-stone-500 ml-2">5.0 Star Verified Review</span>
            </div>

            <p className="text-lg sm:text-2xl font-medium text-stone-800 leading-relaxed italic mb-8">
              "{TESTIMONIALS[activeIndex].quote}"
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-stone-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#E4002B] text-white flex items-center justify-center font-display text-xl font-bold shadow-md">
                  {TESTIMONIALS[activeIndex].avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium">
                    {TESTIMONIALS[activeIndex].profession}
                  </p>
                  <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E4002B]" />
                    <span>{TESTIMONIALS[activeIndex].area}</span>
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-white text-stone-700 text-xs font-bold border border-stone-200/90 shadow-2xs">
                {TESTIMONIALS[activeIndex].tag}
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-[#E4002B]' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 transition-colors shadow-xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 transition-colors shadow-xs"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
