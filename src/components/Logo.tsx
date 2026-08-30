import React from 'react';

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
  const logoHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-16 sm:h-20 lg:h-24'
  };

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src="/logo.png"
        alt="Tamil Digital Studio & Colour Lab"
        className={`w-auto max-w-full ${logoHeights[size]} object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-102`}
        loading="eager"
      />
    </div>
  );
};
