import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Client Stories & Words</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Trusted By Families <span className="text-gradient">Across Tamil Nadu.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            Read what our clients say about their experience with Tamil Digital Studio & Colour Lab.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto bg-surface-light rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-soft"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-brand-200 opacity-60">
            <Quote className="w-16 h-16" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Review Comment Text */}
              <p className="text-lg sm:text-xl text-charcoal-dark font-medium leading-relaxed italic">
                "{current.comment}"
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                {current.image ? (
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-500 shadow-sm"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white font-bold text-lg flex items-center justify-center">
                    {current.name[0]}
                  </div>
                )}

                <div>
                  <h3 className="font-bold text-charcoal-dark font-heading text-base">{current.name}</h3>
                  <div className="text-xs text-charcoal-muted flex items-center gap-2">
                    <span>{current.eventType}</span>
                    <span>•</span>
                    <span className="text-brand-700 font-medium">{current.date}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 pt-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-charcoal flex items-center justify-center hover:bg-brand-50 hover:text-brand-700 transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-charcoal flex items-center justify-center hover:bg-brand-50 hover:text-brand-700 transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
