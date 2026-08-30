import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ShieldCheck, ThumbsUp, Sparkles } from 'lucide-react';
import { businessData } from '../data/business';

export const GoogleRating: React.FC = () => {
  const reviewHighlights = [
    'Fast Service & Quick Delivery',
    'Excellent Photo Quality',
    'Affordable & Honest Pricing',
    'Friendly Customer Support',
    'Neat Framing Work',
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Rating Badge */}
          <div className="flex items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center shrink-0">
              <span className="text-3xl font-extrabold font-heading text-amber-400 leading-none">
                {businessData.rating.score}
              </span>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Verified Google Business Rating</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Rated {businessData.rating.score} / 5 by {businessData.rating.reviewsCount}+ Reviewers
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Trusted by customers in {businessData.serviceArea}.
              </p>
            </div>
          </div>

          {/* Highlights Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 max-w-xl">
            {reviewHighlights.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs font-medium border border-white/10 flex items-center gap-1.5"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-brand-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Action CTA */}
          <a
            href={businessData.address.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-amber-400 transition-all flex items-center gap-2 shadow-lg shrink-0"
          >
            <span>View Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  );
};
