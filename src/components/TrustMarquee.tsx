import React from 'react';
import { Sparkles, Leaf, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

export const TrustMarquee: React.FC = () => {
  const trustItems = [
    { text: 'NO REFINED SUGAR', icon: Leaf },
    { text: 'ZERO MAIDA (100% WHOLE GRAINS)', icon: CheckCircle2 },
    { text: '100% COLD-PRESSED KACHI GHANI OILS', icon: Sparkles },
    { text: 'ZERO PRESERVATIVES & PALM OIL', icon: ShieldCheck },
    { text: 'COOKED FRESH DAILY IN SOUTH DELHI', icon: HeartHandshake },
    { text: 'FSSAI HYGIENE CERTIFIED CLOUD KITCHEN', icon: ShieldCheck },
    { text: 'SEGREGATED SATVIK JAIN SECTION', icon: Leaf },
    { text: 'DIABETIC LOW-GI NUTRITIONIST CERTIFIED', icon: CheckCircle2 },
  ];

  return (
    <div className="bg-[#E4002B] text-white py-3.5 overflow-hidden border-y border-red-800 shadow-md select-none relative z-20">
      <div className="animate-marquee flex items-center">
        {/* Repeat twice for continuous seamless infinite loop */}
        {[...trustItems, ...trustItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 mx-6 shrink-0">
              <span className="font-display text-base sm:text-lg tracking-wider font-extrabold flex items-center gap-2">
                <Icon className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{item.text}</span>
              </span>
              <span className="text-rose-300 text-lg select-none">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
