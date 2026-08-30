import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Smile, Calendar } from 'lucide-react';
import { businessData } from '../data/business';

export const TrustStats: React.FC = () => {
  const statItems = [
    {
      label: 'Years of Experience',
      value: businessData.stats.experienceYears,
      icon: Award,
      color: 'text-brand-600',
      bgColor: 'bg-brand-50',
    },
    {
      label: 'Moments Captured',
      value: businessData.stats.momentsCaptured,
      icon: Camera,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      label: 'Happy Clients',
      value: businessData.stats.happyClients,
      icon: Smile,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Events Covered',
      value: businessData.stats.eventsCovered,
      icon: Calendar,
      color: 'text-teal-700',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {statItems.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50/80 transition-colors"
            >
              <div className={`w-12 h-12 rounded-2xl ${stat.bgColor} ${stat.color} flex items-center justify-center mb-3 shadow-sm`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-charcoal-dark tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-charcoal-muted mt-1">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
