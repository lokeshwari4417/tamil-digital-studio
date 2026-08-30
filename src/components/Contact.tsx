import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, MapPin, Clock, MessageSquare, ExternalLink, Sparkles, Star } from 'lucide-react';
import { businessData } from '../data/business';
import { ContactForm } from './ContactForm';
import { GoogleMap } from './GoogleMap';
import { openWhatsApp } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const contactCards = [
    {
      title: 'Primary Phone',
      detail: businessData.phone,
      subDetail: `Secondary: ${businessData.alternatePhone}`,
      icon: Phone,
      actionText: 'Call Studio',
      href: `tel:${businessData.phone.replace(/\s+/g, '')}`,
      color: 'bg-brand-50 text-brand-700',
    },
    {
      title: 'WhatsApp Chat',
      detail: businessData.phone,
      subDetail: 'Instant enquiry response',
      icon: MessageSquare,
      actionText: 'Open WhatsApp',
      onClick: () => openWhatsApp('general'),
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      title: 'Email Us',
      detail: businessData.email,
      subDetail: 'Quotations & Inquiries',
      icon: Mail,
      actionText: 'Send Email',
      href: `mailto:${businessData.email}?subject=${encodeURIComponent('Enquiry - Tamil Digital Studio')}`,
      color: 'bg-teal-50 text-teal-700',
    },
    {
      title: 'Social Profiles',
      detail: businessData.instagram,
      subDetail: businessData.facebook,
      icon: Instagram,
      actionText: 'Instagram Profile',
      href: businessData.instagramUrl,
      color: 'bg-pink-50 text-pink-600',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Visit Our Studio In <span className="text-gradient">Tirukazhukundram.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            Located conveniently near Bus Stand, Mamallapuram Road. Call us, send an email, or visit in person for photography, videography, frames, and custom printing.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={card.onClick ? card.onClick : undefined}
                className="bg-surface-light rounded-3xl p-6 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">{card.title}</h3>
                      <div className="text-base font-bold font-heading text-charcoal-dark mt-1 group-hover:text-brand-700 transition-colors">
                        {card.detail}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{card.subDetail}</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-brand-700">
                      <span>{card.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xs font-bold text-charcoal-muted uppercase tracking-wider">{card.title}</h3>
                      <div className="text-base font-bold font-heading text-charcoal-dark mt-1 group-hover:text-brand-700 transition-colors">
                        {card.detail}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{card.subDetail}</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-brand-700">
                      <span>{card.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Grid layout: Left Form + Right Studio Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Info & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Address Card */}
            <div className="bg-surface-light rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-heading text-charcoal-dark">Studio Address</h3>
                <a
                  href={businessData.address.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full"
                >
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{businessData.rating.score} / 5 ({businessData.rating.reviewsCount})</span>
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-dark">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">{businessData.name}</div>
                  <div className="text-charcoal-light mt-0.5">{businessData.address.full}</div>
                  <div className="text-brand-700 font-medium text-xs mt-1">Service Area: {businessData.serviceArea}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-dark">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Opening Hours:</div>
                  <div className="text-charcoal-light mt-0.5">{businessData.openingHours.days}</div>
                  <div className="text-brand-700 font-medium text-xs mt-0.5">{businessData.openingHours.hours}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <a
                  href={businessData.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 flex items-center gap-1.5 hover:underline"
                >
                  <Facebook className="w-4 h-4" />
                  <span>{businessData.facebook}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <GoogleMap />

          </div>

        </div>

      </div>
    </section>
  );
};
