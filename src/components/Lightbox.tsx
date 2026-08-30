import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, hasPrev, hasNext, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-0"
        />

        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        )}

        {/* Main Lightbox Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        >
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[70vh]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>

          {/* Image Details Caption Bar */}
          <div className="mt-4 text-center text-white max-w-2xl px-4 space-y-1">
            <div className="flex items-center justify-center gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1 text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                <span>{item.category}</span>
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3 h-3 text-brand-400" />
                  <span>{item.location}</span>
                </span>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-heading">{item.title}</h3>
            {item.description && (
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">{item.description}</p>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
