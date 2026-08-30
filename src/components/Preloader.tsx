import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { businessData } from '../data/business';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user already visited in this session
    const hasVisited = sessionStorage.getItem('tamil_studio_visited');
    const duration = hasVisited ? 500 : 1300; // 500ms for repeat, 1.3s for first time

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('tamil_studio_visited', 'true');
      setTimeout(onComplete, 400); // Unmount after fade-out transition
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center p-4 selection:bg-brand-500 selection:text-white pointer-events-none"
        >
          {/* Central Logo & Camera Ring Container */}
          <div className="relative flex flex-col items-center justify-center text-center space-y-6 max-w-sm mx-auto">
            
            {/* Camera Lens Aperture Ring Animation around Logo */}
            <div className="relative p-6">
              {/* Outer Rotating Camera Focus Ring */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-500/30"
              />
              
              {/* Inner Pulse Ring */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0.3 }}
                animate={{ scale: 1.1, opacity: 0.7 }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute inset-2 rounded-full border border-amber-500/20"
              />

              {/* Logo Component */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative z-10 scale-110 sm:scale-125"
              >
                <Logo size="lg" showTagline={false} />
              </motion.div>
            </div>

            {/* Typography Sequence */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-xl sm:text-2xl font-extrabold text-charcoal-dark font-heading tracking-tight"
              >
                {businessData.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-xs sm:text-sm font-medium text-brand-700 tracking-wide"
              >
                {businessData.tagline}
              </motion.p>
            </div>

            {/* Horizontal Minimal Progress Bar */}
            <div className="w-36 sm:w-48 h-1 bg-slate-200 rounded-full overflow-hidden relative mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.2 }}
                className="w-full h-full bg-gradient-to-r from-brand-600 via-brand-500 to-amber-500 rounded-full"
              />
            </div>

            {/* Subdued Location Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-[11px] text-charcoal-muted font-semibold tracking-widest uppercase pt-2"
            >
              Tirukazhukundram
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
