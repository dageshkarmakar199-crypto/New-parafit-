import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringFoodCard, setIsHoveringFoodCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate for non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isCard = target?.closest('.group.relative.bg-white.rounded-\\[24px\\]') !== null;
      setIsHoveringFoodCard(isCard);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isHoveringFoodCard ? (
        <div className="w-16 h-16 rounded-full bg-[#E4002B] text-white flex items-center justify-center font-display text-xs font-bold tracking-wider uppercase shadow-xl ring-2 ring-white/50 animate-in zoom-in-50 duration-150">
          ORDER
        </div>
      ) : (
        <div className="w-4 h-4 rounded-full bg-[#E4002B]/60 backdrop-blur-xs ring-2 ring-white/80" />
      )}
    </div>
  );
};
