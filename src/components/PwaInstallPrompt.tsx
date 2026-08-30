import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('pwa_prompt_dismissed') === 'true';
    if (isDismissed) return;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Wait for a small delay so user interacts first
      setTimeout(() => {
        setIsVisible(true);
      }, 4000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 md:max-w-md bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-100 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <Logo size="sm" showTagline={false} />
          <div>
            <div className="flex items-center gap-1 text-xs font-bold text-charcoal-dark">
              <span>Install Tamil Digital Studio</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </div>
            <p className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
              Get 1-tap access to services, frames & portfolio on your phone.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInstall}
            className="px-3.5 py-2 rounded-xl bg-brand-700 text-white font-bold text-xs hover:bg-brand-800 transition-colors flex items-center gap-1.5 shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-full text-slate-400 hover:text-charcoal hover:bg-slate-100 transition-colors"
            aria-label="Dismiss prompt"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
