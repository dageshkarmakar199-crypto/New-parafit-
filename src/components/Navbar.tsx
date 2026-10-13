import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { siteConfig, getWhatsAppUrl, getTelUrl } from '../config/siteConfig';
import { ShoppingBag, Heart, User, MessageCircle, Phone, Sparkles, Copy, Check, Menu as MenuIcon, X, Calculator } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen, favourites, setIsFavDrawerOpen, setIsAccountOpen } = useCart();
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2000);
  };

  const navLinks = [
    { label: 'Menu & Signatures', href: '#menu' },
    { label: 'Calorie Calculator', href: '#calculator' },
    { label: 'Meal Subscriptions', href: '#subscriptions' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'Corporate Catering', href: '#corporate' },
    { label: 'Delivery Zone', href: '#delivery-zone' },
  ];

  return (
    <>
      {/* 1. Top Announcement Promo Bar */}
      <div className="bg-[#5E0010] text-[#FFF4EA] text-xs py-2 px-4 transition-colors border-b border-red-950/40 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              CALORIE-COUNTED MEALS:
            </span>
            <span className="hidden sm:inline text-rose-100">
              Cooked fresh in East of Kailash with cold-pressed oils.
            </span>
            <span className="text-amber-200 font-medium">
              Use code <strong className="underline underline-offset-2">PARA10</strong> for 10% OFF
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleCopyCoupon('PARA10')}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-[11px] font-medium"
              title="Click to copy coupon code PARA10"
            >
              {copiedCoupon ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-amber-300" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
            <a
              href={getWhatsAppUrl('Hi Parafit Delivers! I want to inquire about daily calorie-counted meal plans in South Delhi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-[11px] text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <a
              href={getTelUrl()}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] text-rose-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Glass Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFF4EA]/90 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3'
            : 'bg-[#FFF4EA] border-b border-stone-200/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Lockup */}
          <a href="#" className="shrink-0 flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E4002B] rounded-lg">
            <BrandLogo />
          </a>

          {/* Zone 2: Clean Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-[#1A1A1A]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap hover:text-[#E4002B] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E4002B] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Favourites Button */}
            <button
              onClick={() => setIsFavDrawerOpen(true)}
              className="relative p-2 rounded-xl text-stone-700 hover:text-[#E4002B] hover:bg-stone-100/80 transition-colors"
              aria-label="View Favourites"
              title="Saved Favourites"
            >
              <Heart className="w-5 h-5" />
              {favourites.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E4002B]" />
              )}
            </button>

            {/* Account / Order History */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-2 rounded-xl text-stone-700 hover:text-[#E4002B] hover:bg-stone-100/80 transition-colors"
              aria-label="User Account and Orders"
              title="Account & Past Orders"
            >
              <User className="w-5 h-5" />
            </button>

            {/* WhatsApp Direct Order Button (Desktop) */}
            <a
              href={getWhatsAppUrl('Hi Parafit! I would like to order fresh meals today.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action: Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E4002B] hover:bg-[#C90025] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-red-600/20 transition-all whitespace-nowrap"
              aria-label={`Open Cart (${totalItemsCount} items)`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="px-1.5 py-0.5 rounded-full bg-white text-[#E4002B] text-xs font-extrabold leading-none min-w-5 text-center">
                {totalItemsCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-800 hover:bg-stone-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF4EA] border-t border-stone-200 px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-bold text-stone-800 hover:text-[#E4002B] py-2 border-b border-stone-200/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href={getTelUrl()}
                className="text-xs text-stone-700 font-bold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#E4002B]" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={getWhatsAppUrl('Hi Parafit! I would like to order meals.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
