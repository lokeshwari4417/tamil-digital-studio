import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Star, MapPin, Play, ShieldCheck, Printer, HeartHandshake, Video } from 'lucide-react';
import { businessData } from '../data/business';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-mesh-light flex items-center">
      {/* Background Lighting Circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          >
            {/* Top Rating & Location Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={businessData.address.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold shadow-soft-sm hover:bg-amber-500/20 transition-colors"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span>{businessData.rating.score} / 5</span>
                <span className="text-amber-700">({businessData.rating.reviewsCount} Google Reviews)</span>
              </a>

              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-medium border border-brand-200/60">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Tirukazhukundram</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-dark tracking-tight leading-[1.1]">
              Capturing <span className="text-gradient">Moments.</span> <br />
              Creating <span className="text-gradient-amber">Memories.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-charcoal-light max-w-xl leading-relaxed">
              Professional photography, 4K videography, photo frames, album printing, 360 video booth, and digital studio services in Tirukazhukundram — crafted with creativity and care by <strong className="text-charcoal-dark font-semibold">Tamil Digital Studio & Colour Lab</strong>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white font-bold text-base shadow-brand hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <Camera className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white border border-slate-200 text-charcoal font-semibold text-base shadow-soft hover:bg-slate-50 hover:border-brand-300 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Explore Our Work</span>
                <Play className="w-4 h-4 text-brand-600 fill-brand-600" />
              </button>
            </div>

            {/* Micro Trust Badges */}
            <div className="pt-4 border-t border-slate-200/60 grid grid-cols-3 gap-4 w-full text-xs text-charcoal-muted">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                <span>100% Quality Lab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Printer className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Frames & Printing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-brand-600 shrink-0" />
                <span>360 Video Booth</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COMPOSITION COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-500/20 via-amber-400/20 to-teal-400/20 blur-xl opacity-70" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200"
                  alt="Tamil Digital Studio Wedding & Event Photography"
                  className="w-full h-[380px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Tirukazhukundram Studio
                  </span>
                  <h3 className="text-xl font-bold font-heading">Weddings, Events, Printing & Photo Products</h3>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 sm:-left-8 glass-card p-3.5 rounded-2xl shadow-lg border border-white/80 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">All Photography</div>
                  <div className="text-[10px] text-charcoal-muted">Weddings & Events</div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 glass-card p-3.5 rounded-2xl shadow-lg border border-white/80 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">Frames & Albums</div>
                  <div className="text-[10px] text-charcoal-muted">Sublimation Printing</div>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-6 left-8 sm:left-12 glass-card p-3.5 rounded-2xl shadow-lg border border-white/80 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-md">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">360 Video Booth</div>
                  <div className="text-[10px] text-charcoal-muted">4.9 ★ (130 Reviews)</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
