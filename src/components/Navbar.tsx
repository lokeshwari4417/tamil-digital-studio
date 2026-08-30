import React, { useState, useEffect } from 'react';
import { Menu, Camera, Phone, Sparkles, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { businessData } from '../data/business';
import { openWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onBookClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: '24 Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-slate-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-brand-800 font-semibold'
                        : 'text-charcoal-light hover:text-brand-700'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white rounded-full shadow-sm -z-10 animate-fade-in" />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-charcoal hover:text-brand-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>{businessData.phone}</span>
              </a>

              <button
                onClick={onBookClick}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white font-semibold text-sm shadow-soft hover:shadow-brand transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Camera className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Book a Session</span>
                <Sparkles className="w-3.5 h-3.5 text-accent-gold opacity-80" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-charcoal hover:bg-brand-50 hover:text-brand-700 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
        onNavigate={onNavigate}
        onBookClick={onBookClick}
      />
    </>
  );
};
