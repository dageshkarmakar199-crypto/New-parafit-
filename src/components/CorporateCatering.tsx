import React, { useState } from 'react';
import { CORPORATE_CLIENTS } from '../data/menuData';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import { Building2, Users, Send, CheckCircle2, ShieldCheck, Briefcase, Sparkles, MessageCircle } from 'lucide-react';

export const CorporateCatering: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [teamSize, setTeamSize] = useState('20-50 People');
  const [officeLocation, setOfficeLocation] = useState('Nehru Place / South Delhi');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactName || !phone) return;

    setSubmitted(true);
  };

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello Parafit Corporate Desk! 🏢\nI want to discuss corporate healthy meal catering:\n- Company: ${companyName || 'Corporate Office'}\n- Contact: ${contactName}\n- Phone: ${phone}\n- Team Size: ${teamSize}\n- Office Location: ${officeLocation}\nPlease send your corporate menu tasting box and commercial deck.`
  );

  return (
    <section id="corporate" className="py-20 sm:py-28 bg-[#FFF4EA] relative border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-white text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Corporate Wellness & Office Catering</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
            HEALTHY WORKPLACE CATERING
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Boost afternoon focus across your team in Nehru Place, Okhla, and South Delhi. Zero post-lunch sugar crashes, 100% cold-pressed oils, and individualized macro labeling.
          </p>
        </div>

        {/* Corporate Trust Strip: Logos [PLACEHOLDER] */}
        <div className="mb-14 bg-white rounded-2xl p-5 border border-stone-200 shadow-2xs">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
            Trusted by Teams & Founders Across South Delhi & NCR [PLACEHOLDER]
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CORPORATE_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="p-3 rounded-xl bg-stone-50 border border-stone-100 flex flex-col items-center justify-center text-center transition-colors hover:border-stone-300"
              >
                <Briefcase className="w-4 h-4 text-stone-400 mb-1" />
                <span className="text-xs font-bold text-stone-700">{client.name.split(' ')[0]}</span>
                <span className="text-[10px] text-stone-400 font-medium">South Delhi</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Enquiry Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Why Parafit for Corporates (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1A1A1A] to-[#2D1B1F] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-4">
              <span className="px-2.5 py-0.5 rounded-full bg-red-600/30 text-rose-300 text-[10px] font-extrabold uppercase tracking-wide border border-red-500/30">
                Corporate Benefits
              </span>

              <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
                INDIVIDUAL MACROS FOR EVERY EMPLOYEE
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                We don’t deliver generic greasy buffet trays. Each employee receives their own personalized, heat-retentive container labeled with their name, diet type (Veg / Non-Veg / Jain), and exact calories.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Daily scheduled bulk drops by 12:45 PM sharp',
                  'Monthly consolidated GST invoicing',
                  'Free complimentary tasting session for HR & team leads',
                  'Custom macro calibration for fitness & wellness months',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-xs text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-stone-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Served from Shop No. 1, DDA Mini Market, East of Kailash hub.</span>
            </div>
          </div>

          {/* Right Column: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgb(0,0,0,0.06)] border border-stone-200/90 flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900">
                  Enquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong>{contactName}</strong>. Our Corporate Accounts Director will reach out at <strong>+91 {phone}</strong> within 3 business hours with a custom proposal and tasting box date.
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Accelerate on WhatsApp Instantly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h4 className="text-base font-bold text-stone-900 mb-1">
                    Book Corporate Tasting or Request Custom Quotation
                  </h4>
                  <p className="text-xs text-stone-500">
                    We deliver fresh sample tasting boxes directly to your South Delhi office.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Tech Solutions"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Contact Person</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Malik (HR / Admin)"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-700 mb-1">Office Location</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nehru Place / Okhla Phase 3"
                      value={officeLocation}
                      onChange={(e) => setOfficeLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">Daily Meal Requirement</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#E4002B] bg-white"
                  >
                    <option value="10-25 People">10 – 25 Team Members (Daily Lunch)</option>
                    <option value="25-50 People">25 – 50 Team Members (Priority Bulk Rate)</option>
                    <option value="50-100+ People">50 – 100+ Team Members (Dedicated Account Mgr)</option>
                    <option value="One-Time Event">Corporate Health & Wellness Workshop</option>
                  </select>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-stone-500">
                    Direct Corporate Desk: <strong>{siteConfig.phone}</strong>
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#E4002B] hover:bg-[#C90025] text-white font-extrabold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Request Tasting Box</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
