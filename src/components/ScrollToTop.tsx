import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 left-4 lg:bottom-6 lg:left-6 z-40 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 backdrop-blur-md text-charcoal shadow-lg border border-slate-200 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
