import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share, PlusSquare, CheckCircle2, Download, Smartphone, Sparkles } from 'lucide-react';
import { usePwa } from '../context/PwaContext';
import { Logo } from './Logo';

export const IosInstallModal: React.FC = () => {
  const { showIOSModal, closeIOSModal, isIOS } = usePwa();

  if (!showIOSModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeIOSModal}
          className="fixed inset-0 bg-charcoal-dark/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Logo size="sm" showTagline={false} />
              <div>
                <div className="flex items-center gap-1.5 font-bold font-heading text-charcoal-dark text-base">
                  <span>Install Tamil Digital Studio</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Add to home screen for instant studio access
                </p>
              </div>
            </div>

            <button
              onClick={closeIOSModal}
              className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              aria-label="Close installation modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content / Steps */}
          <div className="py-5 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {isIOS ? 'Safari Quick Steps:' : 'How to Install:'}
            </p>

            {isIOS ? (
              <ol className="space-y-3">
                <li className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-charcoal-dark">
                  <div className="w-7 h-7 rounded-xl bg-brand-100 text-brand-700 font-bold flex items-center justify-center shrink-0">
                    <Share className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <span className="font-bold block text-charcoal-dark mb-0.5">1. Tap Share</span>
                    <span>Tap the <strong>Share</strong> icon in the Safari bottom toolbar.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-charcoal-dark">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0">
                    <PlusSquare className="w-4 h-4 text-amber-800" />
                  </div>
                  <div>
                    <span className="font-bold block text-charcoal-dark mb-0.5">2. Add to Home Screen</span>
                    <span>Scroll down the menu and select <strong>"Add to Home Screen"</strong>.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-charcoal-dark">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <span className="font-bold block text-charcoal-dark mb-0.5">3. Tap Add</span>
                    <span>Tap <strong>"Add"</strong> in the top right corner to confirm.</span>
                  </div>
                </li>
              </ol>
            ) : (
              <div className="space-y-3 text-xs text-charcoal-dark">
                <div className="p-3.5 rounded-2xl bg-brand-50/60 border border-brand-100/60 flex items-start gap-3">
                  <Download className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold block text-brand-900 mb-0.5">Browser App Menu</span>
                    To install directly on this device, open your browser menu (<strong className="text-charcoal-dark">⋮</strong> or Share icon) and select <strong className="text-brand-800">"Install app"</strong> or <strong className="text-brand-800">"Add to Home screen"</strong>.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Button */}
          <div className="pt-2">
            <button
              onClick={closeIOSModal}
              className="w-full py-3 px-4 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs shadow-soft transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Got it</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
