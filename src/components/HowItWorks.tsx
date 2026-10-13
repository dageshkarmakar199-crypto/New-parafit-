import React, { useState } from 'react';
import { Calendar, UtensilsCrossed, Bike, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // default highlighting delivery

  const steps = [
    {
      step: '01',
      title: 'Choose Meal or Plan',
      desc: 'Pick your dietary style: Homestyle Standard, Diabetic Low-GI, Satvik Jain, or High-Protein. Order a single trial box or customize a weekly/monthly plan.',
      time: 'Instant Online / WhatsApp',
      icon: Calendar,
      detail: 'Pause or cancel anytime without penalties.',
    },
    {
      step: '02',
      title: 'We Cook Fresh Daily',
      desc: 'Every morning at 6:00 AM our chefs begin cooking in cold-pressed mustard & sesame oils. Phulkas are tossed fresh on the tawa right before packing.',
      time: '6:00 AM - 11:30 AM',
      icon: UtensilsCrossed,
      detail: 'Zero maida, zero palm oil, 100% whole grains.',
    },
    {
      step: '03',
      title: 'Delivered Hot by 12:30 PM',
      desc: 'Hot thermal carriers arrive at your desk or home in East of Kailash, GK, Lajpat Nagar, and South Delhi right on time for lunch and 7:30 PM for dinner.',
      time: '12:00 PM & 7:15 PM Slots',
      icon: Bike,
      detail: 'Biodegradable kraft containers keep food steaming hot.',
    },
    {
      step: '04',
      title: 'Repeat, Swap or Pause',
      desc: 'Traveling or dining out? Simply pause with 3 hours prior notice on WhatsApp or website. Your subscription days roll forward automatically.',
      time: 'Zero Hassle Flexibility',
      icon: RefreshCw,
      detail: 'Friendly WhatsApp concierge support.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E4002B] text-xs font-bold uppercase tracking-wider">
            <Bike className="w-3.5 h-3.5" />
            <span>Seamless South Delhi Delivery</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            HOW PARAFIT DELIVERS WORKS
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From our fresh tawa in East of Kailash to your lunch plate in 4 seamless steps.
          </p>
        </div>

        {/* Desktop Connected Path & Scooter Graphic */}
        <div className="relative mb-12 hidden lg:block">
          {/* SVG Connecting Dotted Track */}
          <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-1 bg-stone-100 -z-0">
            <div
              className="h-full bg-[#E4002B] transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Delivery Scooter Follower */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -mt-5 transition-all duration-500 ease-out pointer-events-none z-10"
            style={{ left: `calc(${(activeStep / (steps.length - 1)) * 90}% + 2%)` }}
          >
            <div className="w-10 h-10 rounded-full bg-[#E4002B] text-white flex items-center justify-center shadow-lg shadow-red-600/30 ring-4 ring-white animate-bounce">
              <Bike className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isHighlighted = activeStep === idx;

            return (
              <div
                key={st.step}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-[24px] transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-[#FFF4EA] border-[#E4002B] shadow-xl scale-[1.02] ring-2 ring-[#E4002B]/20'
                    : 'bg-white hover:bg-[#FFF4EA]/50 border-stone-200/90 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-display text-3xl font-extrabold ${
                        isHighlighted ? 'text-[#E4002B]' : 'text-stone-300'
                      }`}
                    >
                      {st.step}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                        isHighlighted
                          ? 'bg-[#E4002B] text-white shadow-md'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-1">
                    {st.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E4002B] mb-2">
                    {st.time}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{st.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA bottom strip */}
        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#E4002B] text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
          >
            <span>Ready to taste? Browse Today's Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
