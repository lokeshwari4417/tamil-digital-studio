import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, Star } from 'lucide-react';
import { Logo } from './Logo';
import { businessData } from '../data/business';
import { InstallAppButton } from './InstallAppButton';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const serviceCategories = [
    'Wedding Photography',
    'Events & Parties',
    '360 Video Booth & LED Wall',
    'Photo Frames & Albums',
    'Sublimation Printing',
    'Candid Photography',
    'Baby & Birthday Shoots',
    'Local Product Delivery'
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Photo studio offering photo frames, albums, digital printing services, 4K videography, 360 video booths, and event photography in Tirukazhukundram.
            </p>

            {/* Google Review Badge & Install App CTA */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={businessData.address.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold hover:border-amber-500 transition-colors"
              >
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span>{businessData.rating.score} / 5 ({businessData.rating.reviewsCount} Reviews)</span>
              </a>

              <InstallAppButton variant="footer" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${businessData.email}`}
                className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Services Summary
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {serviceCategories.map((service) => (
                <li key={service} className="hover:text-slate-200 transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
              Studio Details
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{businessData.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{businessData.phone} / {businessData.alternatePhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{businessData.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} {businessData.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">{businessData.tagline}</span>
            <span>•</span>
            <button onClick={() => onNavigate('home')} className="hover:text-slate-300">
              Back to Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
