import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqData } from '../data/faq';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Frequently Asked <span className="text-gradient">Questions.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            Everything you need to know about our photography bookings, studio sessions, and colour lab delivery.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold font-heading text-base sm:text-lg text-charcoal-dark hover:text-brand-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-charcoal transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-charcoal-light leading-relaxed border-t border-slate-100/80 pt-4">
                        {item.answer}
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
};
