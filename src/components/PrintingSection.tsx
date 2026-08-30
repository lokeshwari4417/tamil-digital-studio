import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Frame, BookOpen, Gift, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const PrintingSection: React.FC = () => {
  const products = [
    {
      title: 'Photo Frames',
      description: 'Teak wood, synthetic mouldings, and modern acrylic wall frames in all sizes.',
      icon: Frame,
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Photo Albums',
      description: 'Flush-mount luxury photobooks with lay-flat pages, velvet covers & leather boxes.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Sublimation Printing',
      description: 'Custom photo magic mugs, cushions, keychains, and 3D acrylic gift blocks.',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Digital Lab Printing',
      description: 'Instant 5-minute passport photos, high-gloss lab prints, PVC cards & posters.',
      icon: Printer,
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Printer className="w-3.5 h-3.5 text-amber-600" />
              <span>In-House Colour Lab & Printing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading">
              Photo Frames, Albums & <span className="text-gradient-amber">Custom Printing.</span>
            </h2>
            <p className="text-base text-charcoal-light max-w-2xl">
              Beyond photography, we operate a full-service digital colour lab in Tirukazhukundram delivering custom framing, photobooks, and sublimation gifts.
            </p>
          </div>

          <button
            onClick={() => openWhatsApp('printing')}
            className="px-6 py-3.5 rounded-2xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-all flex items-center gap-2 self-start md:self-auto shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire About Printing</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => openWhatsApp('printing', `Hello Tamil Digital Studio, I would like to enquire about ${item.title}.`)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-amber-600 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-heading text-charcoal-dark group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                    <span>Order / Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
