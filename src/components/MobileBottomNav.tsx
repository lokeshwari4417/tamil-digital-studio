import React from 'react';
import { Home, Grid, Camera, PhoneCall } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Grid },
    { id: 'portfolio', label: 'Portfolio', icon: Camera },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-2xl lg:hidden pb-safe">
      <div className="grid grid-cols-4 items-center h-16 px-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center h-full py-1.5 transition-all duration-200 relative ${
                isActive ? 'text-brand-700 font-bold' : 'text-slate-400 hover:text-slate-600 font-medium'
              }`}
            >
              {/* Active Indicator Top Dot/Bar */}
              {isActive && (
                <span className="absolute top-0 w-8 h-1 bg-brand-600 rounded-b-full shadow-sm" />
              )}
              <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] tracking-tight mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
