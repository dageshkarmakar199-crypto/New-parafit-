import React, { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';

export const PageIntroCurtain: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const wipeTimer = setTimeout(() => {
      setIsWiping(true);
    }, 1100);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#7D0014] via-[#A3001B] to-[#450009] text-white transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isWiping ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="text-center space-y-3 px-6 animate-in zoom-in-95 duration-500">
        <div className="flex justify-center">
          <BrandLogo variant="white" size="lg" />
        </div>
        <p className="font-hand text-2xl sm:text-3xl text-amber-200 font-bold">
          "Ghar jaisa healthy khana, rozana."
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-rose-200/80 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>East of Kailash, South Delhi</span>
        </div>
      </div>
    </div>
  );
};
