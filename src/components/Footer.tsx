import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig, getWhatsAppUrl, getTelUrl } from '../config/siteConfig';
import { useCart } from '../context/CartContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePolicyModal } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#1A1A1A] text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="white" />
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              South Delhi's premier healthy meal subscription & calorie-counted daily delivery service. Cooked fresh with 100% cold-pressed oils, zero maida, zero refined sugar, and zero preservatives.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>FSSAI Hygiene Certified Lic. #{siteConfig.ratings.fssaiLicense}</span>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-[#E4002B] text-stone-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Meal Plans (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Explore Menu
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li><a href="#menu" className="hover:text-white transition-colors">Chicken Stroganoff</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Butter Garlic Fish</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Grilled Cottage Cheese</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Eggs Shakshuka</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Sweet Potato Fries</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Calorie Calculator</a></li>
              <li><a href="#subscriptions" className="hover:text-white transition-colors">12-Week Transformation</a></li>
            </ul>
          </div>

          {/* Policy Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trust & Policies
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-medium">
              <li>
                <button
                  onClick={() => setActivePolicyModal('About')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Parafit
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('Delivery')}
                  className="hover:text-white transition-colors text-left"
                >
                  Delivery Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('Refund')}
                  className="hover:text-white transition-colors text-left"
                >
                  Refund & Pause Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('Terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('Privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicyModal('Contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Kitchen
                </button>
              </li>
            </ul>
          </div>

          {/* Kitchen Address & Hours + Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Central Kitchen Location
            </h4>

            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E4002B] shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getTelUrl()} className="hover:text-white transition-colors font-bold">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{siteConfig.hours.display}</span>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="pt-2">
              <p className="text-xs font-bold text-stone-300 mb-2">
                Join our Weekly Health & Calorie Digest
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for nutrition guides.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#E4002B] flex-1"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#E4002B] hover:bg-[#C90025] text-white text-xs font-bold transition-colors shrink-0 flex items-center gap-1"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Local SEO & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>

          <p className="text-center md:text-right text-[11px] text-stone-600 max-w-xl">
            Healthy food delivery East of Kailash · Diet meal plan South Delhi · Calorie counted meals Delhi · Corporate healthy catering Delhi · GK-1, GK-2, Lajpat Nagar, Nehru Place healthy tiffin service.
          </p>
        </div>

      </div>
    </footer>
  );
};
