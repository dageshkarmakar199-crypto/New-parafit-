import React, { useState } from 'react';
import { FAQS } from '../data/menuData';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  const whatsappInquiryUrl = getWhatsAppUrl(
    'Hi Parafit Team! I want to discuss a customized meal diet plan for my family in South Delhi.'
  );

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E4002B] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Honest Answers</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our meal subscriptions, cold-pressed oils, Jain food purity, and pause policies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-[22px] transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#FFF4EA] border-[#E4002B]/40 shadow-sm'
                    : 'bg-white hover:bg-stone-50 border-stone-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#E4002B] text-white rotate-180'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-stone-600 leading-relaxed border-t border-stone-200/50 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-500">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Big Impact CTA Banner with WhatsApp Consultation */}
        <div className="max-w-5xl mx-auto rounded-[32px] bg-gradient-to-br from-[#780012] via-[#9B0017] to-[#420008] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-red-900/40">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-amber-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ghar Ka Khana · Delivered Fresh</span>
            </span>

            <h3 className="font-display text-4xl sm:text-6xl text-white tracking-tight leading-[0.95]">
              READY TO EAT HEALTHY, HONEST MEALS EVERY SINGLE DAY?
            </h3>

            <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed">
              Join hundreds of happy South Delhi residents enjoying clean, nutritious home food. No refined oil, no maida, zero sugar.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#E4002B] hover:bg-stone-50 active:scale-95 font-extrabold text-sm sm:text-base shadow-xl transition-all"
              >
                <span>Order Today's Meal (From ₹149)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp with Dietitian</span>
              </a>
            </div>

            <p className="text-[11px] text-rose-200/70 pt-2">
              Serving East of Kailash, Greater Kailash 1 & 2, Lajpat Nagar, Kailash Colony, Nehru Place & South Delhi.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
