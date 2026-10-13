import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', size = 'md' }) => {
  const isLightText = variant === 'white' || variant === 'light';

  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Original Parafit geometric mark */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E4002B] via-[#C90025] to-[#8C0018] flex items-center justify-center shadow-md shadow-red-900/20 ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
        >
          {/* Bowl and rising health sprout steam */}
          <path
            d="M8 22C8 28.6274 13.3726 34 20 34C26.6274 34 32 28.6274 32 22H8Z"
            fill="currentColor"
            fillOpacity="0.9"
          />
          <path
            d="M15 16C15 12 20 10 20 6C20 10 25 12 25 16C25 19 22 20 20 20C18 20 15 19 15 16Z"
            fill="#2E9E5B"
          />
          <circle cx="20" cy="14" r="2" fill="white" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-display text-2xl sm:text-[28px] tracking-wide font-extrabold ${
              isLightText ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            PARAFIT
          </span>
          <span className="text-[#E4002B] font-extrabold text-2xl sm:text-[28px] leading-none">.</span>
        </div>
        <div className="flex items-center gap-1.5 -mt-1">
          <span
            className={`text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase ${
              isLightText ? 'text-rose-200/90' : 'text-neutral-500'
            }`}
          >
            DELIVERS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E9E5B]" title="100% Fresh & Cold Pressed"></span>
        </div>
      </div>
    </div>
  );
};
