import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, Phone, ArrowRight, Shield } from 'lucide-react';
import { ServiceItem } from '../types';
import { businessData } from '../data/business';
import { openWhatsApp } from '../utils/whatsapp';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const handleWhatsAppEnquiry = () => {
    openWhatsApp(
      service.whatsappContext || 'general',
      `Hello Tamil Digital Studio, I would like to enquire about your ${service.title} services.`
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-dark/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col z-10 my-8"
        >
          {/* Header Hero Image */}
          <div className="relative h-64 sm:h-72 w-full bg-slate-900 shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close detail modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-600/90 text-[11px] font-semibold tracking-wider uppercase mb-2">
                {service.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">{service.title}</h2>
              <p className="text-sm text-slate-200 mt-1">{service.subtitle}</p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Full Description */}
            <div>
              <h3 className="text-base font-bold text-charcoal-dark mb-2">Service Overview</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Service Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-charcoal-dark mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-600" />
                  <span>Key Features & Deliverables</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-dark font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customer Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-charcoal-dark mb-3">Why Choose Tamil Studio In Tirukazhukundram?</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Modal Footer CTAs */}
          <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="text-xs text-charcoal-muted text-center sm:text-left">
              Fast response via Phone ({businessData.phone}) or WhatsApp
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${businessData.phone.replace(/\s+/g, '')}`}
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white border border-slate-200 text-charcoal font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call Now</span>
              </a>

              <button
                onClick={handleWhatsAppEnquiry}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
