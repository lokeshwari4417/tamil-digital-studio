import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { businessData } from '../data/business';

export const GoogleMap: React.FC = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-soft border border-slate-100 bg-slate-100 h-80 sm:h-96 flex flex-col justify-end">
      {/* Interactive Google Map iframe */}
      {businessData.address.googleMapsEmbedUrl ? (
        <iframe
          title="Tamil Digital Studio Location Map"
          src={businessData.address.googleMapsEmbedUrl}
          className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-6 text-center">
          <MapPin className="w-12 h-12 text-brand-600 mb-3" />
          <h4 className="text-lg font-bold text-charcoal-dark">{businessData.name}</h4>
          <p className="text-xs text-charcoal-muted max-w-sm mt-1">{businessData.address.full}</p>
        </div>
      )}

      {/* Floating Address Bar */}
      <div className="relative z-10 p-4 m-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-charcoal-dark">Studio Address</div>
            <div className="text-[11px] text-charcoal-muted line-clamp-1">{businessData.address.full}</div>
          </div>
        </div>

        <a
          href={businessData.address.googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-brand-700 text-white font-semibold text-xs hover:bg-brand-800 transition-colors flex items-center justify-center gap-1.5 shrink-0"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
