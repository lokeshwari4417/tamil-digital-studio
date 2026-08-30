import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/services';
import { businessData } from '../data/business';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: servicesData[0].title,
    date: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Phone Number.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const handleWhatsAppHandoff = () => {
    const text = `Hello Tamil Digital Studio,\n\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date || 'Not specified'}\nMessage: ${formData.message || 'I would like to enquire about your services.'}`;
    openWhatsApp('custom', text);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft">
      <h3 className="text-2xl font-bold font-heading text-charcoal-dark mb-1">
        Send An Enquiry
      </h3>
      <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
        Select from our services or message us directly on WhatsApp for immediate response.
      </p>

      {status === 'success' ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-emerald-900 font-heading">Thank You!</h4>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
            Your enquiry details have been noted. Click below to instantly send this directly to our studio WhatsApp for fastest booking.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleWhatsAppHandoff}
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <button
              onClick={() => setStatus('idle')}
              className="px-5 py-3 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition-colors"
            >
              Fill Form Again
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal-dark mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-surface-light"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-dark mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 90033 88028"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-surface-light"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal-dark mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-surface-light"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-dark mb-1">
                Select Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-surface-light"
              >
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title} ({svc.categoryLabel})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-dark mb-1">
              Preferred Event / Session Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-surface-light"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-dark mb-1">
              Message or Specific Requirements
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify event venue, photo frame sizes, 360 video booth, or photo gift requirements..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-surface-light resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 text-white font-bold text-sm shadow-brand hover:shadow-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppHandoff}
              className="py-3.5 px-5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-sm hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
