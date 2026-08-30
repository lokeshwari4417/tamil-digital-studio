import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Sparkles, Smartphone } from 'lucide-react';
import { usePwa } from '../context/PwaContext';

export const PwaInstallPrompt: React.FC = () => {
  const { showPromoCard, dismissPromoCard, triggerInstall, isInstalling, isInstalled } = usePwa();

  if (!showPromoCard || isInstalled) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-[144px] left-4 right-4 sm:left-auto sm:right-6 lg:bottom-24 z-30 sm:max-w-sm bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-slate-200/90 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100/60">
            <Smartphone className="w-5 h-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal-dark truncate">
              <span>Take Tamil Digital Studio with you</span>
              <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
            </div>
            <p className="text-[11px] text-charcoal-muted leading-snug mt-0.5 line-clamp-2">
              Install our app for quick access to portfolio, services & contact options.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={triggerInstall}
            disabled={isInstalling}
            className="px-3.5 py-2 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95 disabled:opacity-75"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
          </button>

          <button
            onClick={dismissPromoCard}
            className="p-1.5 rounded-full text-slate-400 hover:text-charcoal hover:bg-slate-100 transition-colors"
            aria-label="Dismiss app installation prompt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
