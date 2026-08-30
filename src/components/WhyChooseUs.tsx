import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Camera, Users, Zap, Heart, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Professional Quality',
      description: 'Lab-certified Fuji/Kodak paper printing and calibrated true-tone colour grading for lifetime permanence.',
      icon: Award,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      title: 'Creative Approach',
      description: 'We blend traditional cultural ritual coverage with contemporary candid storytelling and natural expressions.',
      icon: Sparkles,
      color: 'text-brand-600',
      bgColor: 'bg-brand-50',
    },
    {
      title: 'Modern Equipment',
      description: 'Full-frame 4K cinema cameras, aerial drones, motorized gimbals, and softbox diffusers for flawless capture.',
      icon: Camera,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Experienced Team',
      description: 'Over 10 years of experience covering 350+ grand weddings, puberty ceremonies, and corporate functions.',
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Fast Service',
      description: 'Instant 5-minute passport prints and fast 48-hour digital proofing links for quick client selection.',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Over 1,200 satisfied families trust us with their precious life milestones and family portraits.',
      icon: Heart,
      color: 'text-rose-500',
      bgColor: 'bg-rose-50',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Our Commitment To You</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            Why Choose <span className="text-gradient">Tamil Digital Studio?</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            We combine warm personalized service with state-of-the-art colour lab technology to preserve your most valuable memories.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-surface-light rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-charcoal-dark mb-2 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
