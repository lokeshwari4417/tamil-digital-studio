import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, CalendarCheck, Camera, Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Service',
      description: 'Select from wedding photography, studio portraiture, instant passport prints, or custom photo restoration.',
      icon: MousePointerClick,
    },
    {
      number: '02',
      title: 'Book Your Session',
      description: 'Contact us via phone or WhatsApp to lock in your date, studio slot, or location event schedule.',
      icon: CalendarCheck,
    },
    {
      number: '03',
      title: 'Capture The Moment',
      description: 'Relax and enjoy while our expert team captures high-definition photos and cinematic videos.',
      icon: Camera,
    },
    {
      number: '04',
      title: 'Get Your Memories',
      description: 'Receive color-corrected digital proofing links followed by luxury flush-mount photobooks & frames.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-dark font-heading tracking-tight">
            How It <span className="text-gradient">Works.</span>
          </h2>

          <p className="text-base text-charcoal-light leading-relaxed">
            From initial booking to final photobook delivery, we make your photography experience seamless and delightful.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-300 via-amber-300 to-brand-300 -translate-y-6 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative z-10 bg-white rounded-3xl p-6 border border-slate-100 shadow-soft text-center flex flex-col items-center hover:-translate-y-1 transition-all"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white font-extrabold font-heading text-xl flex items-center justify-center mb-6 shadow-md relative">
                  <span>{step.number}</span>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs shadow-sm">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-charcoal-dark mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
