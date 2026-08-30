import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Heart, Sparkles, Smile, Sun, UserCheck, User, Award, GraduationCap, Box, 
  Video, RotateCcw, Tv, BookOpen, Frame, Gift, Printer, Truck, 
  PartyPopper, MessageSquare
} from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { openWhatsApp } from '../utils/whatsapp';

const iconMap: Record<string, React.ElementType> = {
  PartyPopper,
  Heart,
  Sparkles,
  Camera,
  Smile,
  Sun,
  UserCheck,
  User,
  Award,
  GraduationCap,
  Box,
  Video,
  RotateCcw,
  Tv,
  BookOpen,
  Frame,
  Gift,
  Printer,
  Truck
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Studio Services' },
    { id: 'photography', label: 'Photography' },
    { id: 'videography', label: 'Videography & Events' },
    { id: 'printing', label: 'Printing & Photo Products' },
    { id: 'delivery', label: 'Delivery' },
  ];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Professional Studio Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Crafting Memories With <span className="text-gradient">Precision & Care.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            From grand wedding cinematography to custom photo frames and luxury albums, explore our complete photography and colour lab offerings.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-700 text-white shadow-soft scale-105'
                  : 'bg-white text-charcoal hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Popular
                  </div>
                )}

                {/* Card Top Image */}
                <div
                  onClick={() => setSelectedService(service)}
                  className="relative h-52 w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent" />
                  
                  {/* Category Label Pill */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-charcoal-dark text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {service.categoryLabel}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md text-brand-700 shadow-md flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => setSelectedService(service)}
                      className="text-xl font-bold font-heading text-charcoal-dark group-hover:text-brand-700 transition-colors cursor-pointer"
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-700 font-medium mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal-light mt-2 line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Card Bottom WhatsApp Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-charcoal-muted hover:text-charcoal-dark transition-colors"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => openWhatsApp(service.whatsappContext || 'general', `Hello Tamil Digital Studio, I would like to enquire about ${service.title}.`)}
                      className="px-3.5 py-1.5 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
