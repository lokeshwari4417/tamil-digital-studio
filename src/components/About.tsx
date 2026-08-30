import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Sparkles, Sliders, ArrowRight } from 'lucide-react';
import { businessData } from '../data/business';

interface AboutProps {
  onLearnMoreClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMoreClick }) => {
  const pillars = [
    'State-of-the-Art Digital Colour Printing Lab',
    'High-Resolution 4K Cinema & Full-Frame Cameras',
    'Custom Flush-Mount Silk Photobook Designing',
    'Instant 5-Minute Embassy Compliant Passport Photos',
    'Expert Old Photo Damage Restoration & Colourization',
    'Dedicated Patient Photographers for Baby Shoots'
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000"
                alt="Tamil Digital Studio Team & Studio Portraiture"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Floating Quality Stamp Badge */}
              <div className="absolute top-6 left-6 glass-card p-4 rounded-2xl shadow-lg border border-white/80 max-w-[200px]">
                <div className="flex items-center gap-2 text-brand-700 font-bold text-sm">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Est. {businessData.establishedYear}</span>
                </div>
                <div className="text-xs text-charcoal-muted mt-1 leading-tight">
                  Over a decade of photographic excellence in Tirunelveli.
                </div>
              </div>

              {/* Bottom Inset Frame */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                    100%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-dark">Genuine Colour Lab</div>
                    <div className="text-[10px] text-charcoal-muted">Fuji & Kodak Paper Certified</div>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Sub-label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              <span>About Tamil Digital Studio</span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading leading-tight">
              More Than Photography — <br />
              <span className="text-gradient">We Preserve Moments.</span>
            </h2>

            <p className="text-base text-charcoal-light leading-relaxed">
              At <strong className="text-charcoal-dark font-semibold">Tamil Digital Studio & Colour Lab</strong>, we believe every photograph tells a story that deserves to be remembered for generations. With over 10 years of professional expertise, we combine artistic vision with advanced colour lab technology to create timeless visuals.
            </p>

            <p className="text-base text-charcoal-light leading-relaxed">
              Whether it’s the emotional grandeur of a traditional Tamil wedding, a quiet candid portrait, 5-minute passport photos, or restoring a cherished vintage family photograph, our studio delivers uncompromising quality.
            </p>

            {/* Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-charcoal-dark">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <button
                onClick={onLearnMoreClick}
                className="px-7 py-3.5 rounded-xl bg-charcoal-dark text-white font-semibold text-sm hover:bg-brand-700 shadow-soft transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
