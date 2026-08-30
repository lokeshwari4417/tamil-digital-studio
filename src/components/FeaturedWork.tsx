import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { galleryData } from '../data/gallery';

interface FeaturedWorkProps {
  onViewPortfolioClick: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onViewPortfolioClick }) => {
  const featuredItems = galleryData.filter(item => item.featured).slice(0, 5);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/60 text-brand-300 border border-brand-700/50 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Highlighted Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
              Moments We've <span className="text-gradient">Captured</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              A quick glimpse into our favorite wedding celebrations, candid portraits, and vibrant studio shoots.
            </p>
          </div>

          <button
            onClick={onViewPortfolioClick}
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-sm hover:bg-brand-400 hover:text-slate-950 transition-all flex items-center gap-2 self-start md:self-auto shadow-lg"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Scrolling Highlight Reel */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={onViewPortfolioClick}
              className="snap-start shrink-0 w-80 sm:w-96 rounded-3xl overflow-hidden relative h-[400px] group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-brand-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                {item.category}
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
