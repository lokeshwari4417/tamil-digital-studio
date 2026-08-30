import React, { createContext, useContext, useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface PwaContextType {
  deferredPrompt: BeforeInstallPromptEvent | null;
  isInstalled: boolean;
  isInstalling: boolean;
  isIOS: boolean;
  isInstallAvailable: boolean;
  showIOSModal: boolean;
  showPromoCard: boolean;
  triggerInstall: () => Promise<void>;
  closeIOSModal: () => void;
  dismissPromoCard: () => void;
}

const PwaContext = createContext<PwaContextType | undefined>(undefined);

export const PwaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isInstalling, setIsInstalling] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [showIOSModal, setShowIOSModal] = useState<boolean>(false);
  const [showPromoCard, setShowPromoCard] = useState<boolean>(false);

  useEffect(() => {
    // 1. Detect if running in standalone mode (already installed)
    const checkIsStandalone = () => {
      const isStandaloneMedia = window.matchMedia('(display-mode: standalone)').matches;
      const isIOSStandalone = (navigator as any).standalone === true;
      const isAndroidApp = document.referrer.includes('android-app://');
      return isStandaloneMedia || isIOSStandalone || isAndroidApp;
    };

    const installed = checkIsStandalone();
    setIsInstalled(installed);

    // 2. Detect iOS device
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice && !installed);

    // 3. Listen for standalone media query changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsInstalled(true);
        setShowPromoCard(false);
        setShowIOSModal(false);
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    // 4. Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowPromoCard(false);
      setShowIOSModal(false);
      setIsInstalling(false);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    // 5. Listen for beforeinstallprompt event (Chromium desktop & Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Check if user previously dismissed the promo card
      const isCardDismissed = localStorage.getItem('pwa_card_dismissed') === 'true';
      if (!isCardDismissed && !installed) {
        // Show subtle promo card after a slight delay for smooth initial load
        setTimeout(() => {
          setShowPromoCard(true);
        }, 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show promo card for iOS users if not dismissed and not installed
    if (isIOSDevice && !installed) {
      const isCardDismissed = localStorage.getItem('pwa_card_dismissed') === 'true';
      if (!isCardDismissed) {
        setTimeout(() => {
          setShowPromoCard(true);
        }, 3000);
      }
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const triggerInstall = async () => {
    if (isInstalled) return;

    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (deferredPrompt) {
      setIsInstalling(true);
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setIsInstalled(true);
          setShowPromoCard(false);
        }
      } catch (err) {
        console.error('Error triggering PWA install prompt:', err);
      } finally {
        setDeferredPrompt(null);
        setIsInstalling(false);
      }
      return;
    }

    // Fallback: If no prompt event yet (e.g. non-Chromium or desktop before event),
    // show iOS style instruction modal tailored for desktop/mobile browsers.
    setShowIOSModal(true);
  };

  const closeIOSModal = () => {
    setShowIOSModal(false);
  };

  const dismissPromoCard = () => {
    setShowPromoCard(false);
    localStorage.setItem('pwa_card_dismissed', 'true');
  };

  const isInstallAvailable = !isInstalled;

  return (
    <PwaContext.Provider
      value={{
        deferredPrompt,
        isInstalled,
        isInstalling,
        isIOS,
        isInstallAvailable,
        showIOSModal,
        showPromoCard,
        triggerInstall,
        closeIOSModal,
        dismissPromoCard,
      }}
    >
      {children}
    </PwaContext.Provider>
  );
};

export const usePwa = (): PwaContextType => {
  const context = useContext(PwaContext);
  if (!context) {
    throw new Error('usePwa must be used within a PwaProvider');
  }
  return context;
};
