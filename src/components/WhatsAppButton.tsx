import React from 'react';
import { MessageSquare } from 'lucide-react';
import { businessData } from '../data/business';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(
      'Hello Tamil Digital Studio, I would like to enquire about your photography services.'
    );
    window.open(`https://wa.me/${businessData.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-all duration-300 hover:scale-110 group flex items-center gap-2.5 border-2 border-white focus:outline-none"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform group-hover:rotate-12" />
      <span className="hidden sm:inline-block font-bold text-xs pr-1">
        WhatsApp Us
      </span>
      {/* Pulse animation */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none -z-10" />
    </button>
  );
};
