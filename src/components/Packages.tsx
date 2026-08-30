import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { packagesData } from '../data/packages';
import { businessData } from '../data/business';

interface PackagesProps {
  onBookClick: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onBookClick }) => {
  const handleQuoteClick = (packageTitle: string) => {
    const text = encodeURIComponent(
      `Hello Tamil Digital Studio, I would like to get a quotation for your "${packageTitle}".`
    );
    window.open(`https://wa.me/${businessData.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Tailored Photography Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Transparent Services, <span className="text-gradient">Tailored Packages.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            Every session and event is unique. Choose from our curated packages or request a custom tailored quotation.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-brand-500 shadow-soft-lg ring-2 ring-brand-500/20 scale-105 z-10'
                  : 'border-slate-200 shadow-soft hover:shadow-soft-lg'
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-700 to-teal-600 text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold font-heading text-charcoal-dark">{pkg.title}</h3>
                <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">{pkg.subtitle}</p>

                {/* Price Placeholder */}
                <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">Pricing Option</div>
                  <div className="text-lg font-extrabold text-charcoal-dark mt-0.5">{pkg.priceNote}</div>
                </div>

                {/* Ideal For pill */}
                <div className="text-xs text-brand-800 font-semibold bg-brand-50 px-3 py-1.5 rounded-xl mb-6 inline-block">
                  Ideal for: {pkg.idealFor}
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-charcoal uppercase tracking-wider">What's Included:</div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-dark">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-8">
                <button
                  onClick={() => handleQuoteClick(pkg.title)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-brand-700 to-brand-600 text-white shadow-brand hover:shadow-glow'
                      : 'bg-charcoal-dark text-white hover:bg-brand-700 shadow-soft'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get a Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
