import React from 'react';
import { businessData } from '../data/business';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = true,
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Brand Icon Badge */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow ${iconSizes[size]}`}>
        {/* Camera Aperture / Lens Vector */}
        <svg viewBox="0 0 40 40" className="w-3/5 h-3/5 fill-current transition-transform duration-500 group-hover:rotate-45">
          <path d="M20 4C11.16 4 4 11.16 4 20C4 28.84 11.16 36 20 36C28.84 36 36 28.84 36 20C36 11.16 28.84 4 20 4ZM20 9C21.6 9 23.1 9.4 24.4 10.1L15.3 19.2C15.1 19.4 15 19.7 15 20C15 22.8 17.2 25 20 25C20.3 25 20.6 24.9 20.8 24.7L29.9 15.6C30.6 16.9 31 18.4 31 20C31 26.1 26.1 31 20 31C13.9 31 9 26.1 9 20C9 13.9 13.9 9 20 9Z" fill="currentColor"/>
          <circle cx="20" cy="20" r="4" className="text-accent-gold fill-current" />
        </svg>
        {/* Shimmer dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-gold animate-ping" />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <span className={`font-heading font-extrabold tracking-tight leading-none ${variant === 'dark' ? 'text-white' : 'text-charcoal-dark'} ${textSizes[size]}`}>
          Tamil <span className="text-brand-600">Digital</span> Studio
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-charcoal-muted">
            & Colour Lab
          </span>
          {showTagline && (
            <>
              <span className="w-1 h-1 rounded-full bg-brand-500" />
              <span className="text-[10px] sm:text-xs italic font-medium text-brand-700">
                "{businessData.tagline}"
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
