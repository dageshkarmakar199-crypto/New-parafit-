import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl, getTelUrl } from '../config/siteConfig';
import { Phone, MessageCircle, Clock } from 'lucide-react';

export const FloatingContactButtons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-end gap-2.5 select-none">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="bg-white rounded-2xl p-3 shadow-2xl border border-stone-200/90 text-xs space-y-2 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200 w-56">
          <div className="pb-2 border-b border-stone-100">
            <p className="font-bold text-stone-900">Direct Kitchen Helpline</p>
            <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available {siteConfig.hours.display}</span>
            </p>
          </div>

          <a
            href={getTelUrl()}
            className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-50 hover:bg-rose-50 text-stone-800 hover:text-[#E4002B] transition-colors font-bold"
          >
            <Phone className="w-4 h-4 text-[#E4002B]" />
            <span>Call {siteConfig.phone}</span>
          </a>

          <a
            href={getWhatsAppUrl('Hi Parafit! I have a question about delivery in South Delhi.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-700 transition-colors font-bold"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#E4002B] text-white shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 border border-white/20"
        aria-label="Direct Kitchen Helpline"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <Phone className="w-4 h-4 text-amber-300" />
        <span className="text-xs font-bold tracking-tight">
          Helpline · {siteConfig.phone}
        </span>
      </button>
    </div>
  );
};
