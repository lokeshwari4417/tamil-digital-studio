import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Printer, Sparkles, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const StudioHighlights: React.FC = () => {
  const pillars = [
    {
      title: 'Photography',
      subtitle: 'Weddings, portraits, events & studio sessions',
      description: 'From grand Tamil wedding ceremonies to candid baby milestone shoots, our photographers capture your moments with emotional depth.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=600',
      whatsappContext: 'photography' as const,
    },
    {
      title: 'Videography & Events',
      subtitle: '4K videography, photo booths & LED wall displays',
      description: 'Bring your celebration to life with 4K video films, interactive 360 video booths, and daylight outdoor LED screen mixing.',
      icon: Video,
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600',
      whatsappContext: 'wedding' as const,
    },
    {
      title: 'Photo Printing & Products',
      subtitle: 'Photo albums, designer frames & sublimation gifts',
      description: 'In-house digital colour lab delivering flush-mount photobooks, teak & synthetic wall frames, magic mugs, and custom gifts.',
      icon: Printer,
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600',
      whatsappContext: 'printing' as const,
    },
    {
      title: 'Creative Memories',
      subtitle: 'Beautifully crafted custom keepsakes & old photo restoration',
      description: 'Preserve cherished family history with digital black-and-white photo restoration, custom canvas wraps, and personalized desktop displays.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
      whatsappContext: 'sublimation' as const,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Complete Photography & Colour Lab Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            More Than Just <span className="text-gradient">Photography.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            From capturing your most important moments to creating beautiful albums, frames and personalized prints, we bring your memories to life.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface-light rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-brand-700 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-charcoal-dark group-hover:text-brand-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-700 mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-charcoal-light leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-slate-200/60">
                    <button
                      onClick={() => openWhatsApp(item.whatsappContext, `Hello Tamil Digital Studio, I would like to enquire about ${item.title}.`)}
                      className="w-full py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-charcoal-dark font-bold text-xs hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enquire on WhatsApp</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
