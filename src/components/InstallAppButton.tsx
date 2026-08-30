import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import { usePwa } from '../context/PwaContext';

interface InstallAppButtonProps {
  variant?: 'navbar' | 'mobile-menu' | 'footer' | 'inline';
  className?: string;
  onSuccess?: () => void;
}

export const InstallAppButton: React.FC<InstallAppButtonProps> = ({
  variant = 'navbar',
  className = '',
  onSuccess,
}) => {
  const { isInstalled, isInstalling, triggerInstall } = usePwa();

  if (isInstalled) {
    return null;
  }

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await triggerInstall();
    if (onSuccess) onSuccess();
  };

  if (variant === 'navbar') {
    return (
      <button
        onClick={handleClick}
        disabled={isInstalling}
        className={`px-3.5 py-2 rounded-full bg-slate-100/90 hover:bg-brand-50 text-charcoal-dark hover:text-brand-800 border border-slate-200/80 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow active:scale-95 disabled:opacity-70 ${className}`}
        title="Install Tamil Digital Studio Web App"
        aria-label="Install App"
      >
        <Download className="w-3.5 h-3.5 text-brand-600" />
        <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
      </button>
    );
  }

  if (variant === 'mobile-menu') {
    return (
      <button
        onClick={handleClick}
        disabled={isInstalling}
        className={`w-full py-3 px-4 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-800 font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-brand-200/60 active:scale-95 disabled:opacity-70 ${className}`}
        title="Install Tamil Digital Studio Web App"
        aria-label="Install App"
      >
        <Smartphone className="w-4 h-4 text-brand-700" />
        <span>{isInstalling ? 'Installing App...' : 'Install App'}</span>
      </button>
    );
  }

  if (variant === 'footer') {
    return (
      <button
        onClick={handleClick}
        disabled={isInstalling}
        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-800 text-brand-400 border border-slate-700 text-xs font-semibold hover:border-brand-500 hover:text-brand-300 transition-colors active:scale-95 disabled:opacity-70 ${className}`}
        title="Install App for fast offline access"
        aria-label="Install App"
      >
        <Download className="w-3.5 h-3.5 text-brand-400" />
        <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={isInstalling}
      className={`px-4 py-2 rounded-xl bg-brand-700 text-white text-xs font-semibold flex items-center gap-2 shadow hover:bg-brand-800 transition-all ${className}`}
    >
      <Download className="w-3.5 h-3.5" />
      <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
    </button>
  );
};
