import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full">
            FAQS & ADMISSIONS HELP
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Have Questions? We Have <br />
            <span className="font-serif italic font-semibold text-brand-gold">Genuine, Direct Answers</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
              >
                {/* Header click-bar */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 md:p-6 text-brand-blue hover:bg-slate-50 transition focus:outline-none cursor-pointer"
                >
                  <div className="flex gap-3.5 items-start">
                    <HelpCircle className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="font-display font-bold text-brand-blue text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron with rotate transition */}
                  <div className={`rounded-lg p-1 bg-slate-50 border border-slate-200 text-slate-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-blue border-brand-gold-light bg-brand-gold-light/20' : ''
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated content fold */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-12 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-100 pt-4 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
