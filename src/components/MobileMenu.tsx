import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, ArrowRight, Camera, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';
import { businessData } from '../data/business';
import { openWhatsApp } from '../utils/whatsapp';
import { servicesData } from '../data/services';

import { InstallAppButton } from './InstallAppButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
  onBookClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  onBookClick,
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: `${servicesData.length} Services` },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages' },
    { id: 'process', label: 'How It Works' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-dark/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <Logo size="sm" showTagline={false} />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-charcoal hover:bg-brand-50 hover:text-brand-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4 px-6 space-y-1 flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-3">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-left transition-all ${
                      isActive
                        ? 'bg-brand-50 text-brand-700 font-semibold'
                        : 'text-charcoal-dark hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-brand-600' : 'opacity-0'}`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
              <InstallAppButton variant="mobile-menu" onSuccess={onClose} />

              <button
                onClick={() => {
                  onBookClick();
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>Book a Session</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 rounded-lg bg-white border border-slate-200 text-charcoal font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => {
                    openWhatsApp('general');
                    onClose();
                  }}
                  className="py-2.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-100"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {/* Social Links Row */}
              <div className="pt-2 flex items-center justify-center gap-4 text-slate-500">
                <a href={businessData.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={businessData.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
