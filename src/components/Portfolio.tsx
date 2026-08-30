import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Weddings',
    'Events',
    'Portraits',
    'Baby',
    'Studio',
    'Outdoor',
    'Products',
    'Creative'
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-amber-500" />
            <span>Our Signature Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Moments Frozen In <span className="text-gradient">Timeless Perfection.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            Browse through our curated collection of weddings, studio portraiture, cultural events, baby milestones, and custom lab prints.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-700 text-white shadow-soft scale-105'
                  : 'bg-slate-100 text-charcoal hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg bg-slate-100 cursor-pointer h-72 sm:h-80"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />

                {/* Always-visible Category Pill */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-charcoal-dark text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold font-heading">{item.title}</h3>
                      {item.location && (
                        <p className="text-xs text-slate-200 mt-0.5">{item.location}</p>
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-brand-600 transition-colors shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedIndex !== null && selectedIndex > 0}
        hasNext={selectedIndex !== null && selectedIndex < filteredItems.length - 1}
      />
    </section>
  );
};
