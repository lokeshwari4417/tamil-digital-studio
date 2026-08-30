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
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl md:text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Orange/Red Circular Camera Mark Element */}
      <div className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${iconDimensions[size]}`}>
        <img
          src="/logo.svg"
          alt="Tamil Digital Studio & Colour Lab"
          className="w-full h-full object-contain filter drop-shadow-sm"
          loading="eager"
        />
      </div>

      {/* Brand Name & Signature Typography */}
      <div className="flex flex-col">
        <div className={`font-heading font-extrabold tracking-tight leading-none flex items-center gap-1.5 ${variant === 'dark' ? 'text-white' : 'text-charcoal-dark'} ${textSizes[size]}`}>
          <span>Tamil</span>
          <span className="text-brand-600 font-extrabold">Digital</span>
          <span className="italic font-serif text-amber-500 font-normal text-[0.9em]">Studio</span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase ${variant === 'dark' ? 'text-slate-400' : 'text-charcoal-muted'}`}>
            & Colour Lab
          </span>
          {showTagline && (
            <>
              <span className="w-1 h-1 rounded-full bg-amber-500" />
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
